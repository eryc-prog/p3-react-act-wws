import React, { useState } from "react";

function BillingPage() {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [previousReading, setPreviousReading] = useState("");
  const [presentReading, setPresentReading] = useState("");
  const [totalBill, setTotalBill] = useState(null);
  // const [newRecords, setNewRecords] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("billingRecords")) || []
  );
  const [isEditing, setIsEditing] = useState(false); // Track if editing
  const [editIndex, setEditIndex] = useState(null);

  const handleCalculate = () => {
    if (!name || !month || !previousReading || !presentReading) {
      alert("Please fill in all fields.");
      return;
    }

    const previous = parseFloat(previousReading);
    const present = parseFloat(presentReading);

    if (present < previous) {
      alert("Present reading cannot be less than previous reading.");
      return;
    }

    const usage = present - previous;
    const bill = usage * 20; // Multiply by 20 to calculate the total bill
    setTotalBill(bill);

    const newRecord = { name, month, previous, present, usage, bill, date };

    if (isEditing) {
      // Update the existing record
      const updatedRecords = [...records];
      updatedRecords[editIndex] = newRecord;
      setRecords(updatedRecords);
      localStorage.setItem("billingRecords", JSON.stringify(updatedRecords));
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new record
      const updatedRecords = [...records, newRecord];
      setRecords(updatedRecords);
      localStorage.setItem("billingRecords", JSON.stringify(updatedRecords));
    }

    // Clear the form
    setName("");
    setMonth("");
    setPreviousReading("");
    setPresentReading("");
    setTotalBill(null);
  };

  const handleDelete = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
    localStorage.setItem("billingRecords", JSON.stringify(updatedRecords));
  };

  const handleEdit = (index) => {
    const record = records[index];
    setName(record.name);
    setMonth(record.month);
    setPreviousReading(record.previous);
    setPresentReading(record.present);
    setTotalBill(record.bill);
    setIsEditing(true);
    setEditIndex(index);

    useEffect(() => {
      const day = setDay(() => {
        setDate(new Date().toLocaleDateString());
      }, 3000);
      return () => clearDay(day);
    }, []);

    // Save the record in local storage
    const newRecord = { name, month, previous, present, usage, bill, date };
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem("billingRecords", JSON.stringify(updatedRecords));
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Billing</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3x1 mb-6">
        View and manage your water bills.
      </p>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Month:</label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter month"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Previous Reading:</label>
        <input
          type="number"
          value={previousReading}
          onChange={(e) => setPreviousReading(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter previous reading"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Present Reading:</label>
        <input
          type="number"
          value={presentReading}
          onChange={(e) => setPresentReading(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter present reading"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isEditing ? "Update Bill" : "Calculate Bill"}
      </button>

      {totalBill !== null && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="text-xl font-bold">Bill Summary</h2>
          <p>Name: {name}</p>
          <p>Month: {month}</p>
          <p>Previous Reading: {previousReading}</p>
          <p>Present Reading: {presentReading}</p>
          <p>Usage: {presentReading - previousReading} cubic meters</p>
          <p>Total Bill: ₱{totalBill}</p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Billing Records</h2>
        {records.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Month</th>
                <th className="border border-gray-300 p-2">Previous</th>
                <th className="border border-gray-300 p-2">Present</th>
                <th className="border border-gray-300 p-2">Usage</th>
                <th className="border border-gray-300 p-2">Total Bill</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{record.name}</td>
                  <td className="border border-gray-300 p-2">{record.month}</td>
                  <td className="border border-gray-300 p-2">
                    {record.previous}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {record.present}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {record.usage} m³
                  </td>
                  <td className="border border-gray-300 p-2">₱{record.bill}</td>
                  <td className="border border-gray-300 p-2">{record.date}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
}

export default BillingPage;
