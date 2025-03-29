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

    // const isDuplicate = records.some(
    //   (record) => record.name.toLowerCase() === newRecords.toLowerCase()
    // );
    // console.log(isDuplicate);

    // const isDuplicated = records.find((record) => record.name.toLowerCase);

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
    <div className="p-auto m-auto max-w-7xl text-center">
      <h1 className="text-3xl font-bold mb-4 ">Billing</h1>
      <p className="mb-6">View and manage your water bills.</p>

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
        Calculate Bill
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
                  <td className="border border-gray-300 p-2">{date}</td>
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
