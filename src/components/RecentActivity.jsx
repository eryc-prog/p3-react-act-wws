import React from "react";

function RecentActivity() {
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-md mt-4 ml-4 mr-4">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4 ml-4 mr-4">
        <table className="text-center w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-400">
              <th className="border border-gray-300 p-2">Date / Time</th>
              <th className="border border-gray-300 p-2">User</th>
              <th className="border border-gray-300 p-2">Action</th>
              <th className="border border-gray-300 p-2">Details</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">📅 2025-03-26</td>
              <td className="border border-gray-300 p-2">Admin</td>
              <td className="border border-gray-300 p-2">Meter Reading</td>
              <td className="border border-gray-300 p-2">Purok 3: 245 m³</td>
              <td className="border border-gray-300 p-2 text-green-300 font-semibold">
                Complete
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">📅 2025-03-25</td>
              <td className="border border-gray-300 p-2">Cashier</td>
              <td className="border border-gray-300 p-2">Invoice Generated</td>
              <td className="border border-gray-300 p-2">Customer</td>
              <td className="border border-gray-300 p-2 text-red-400 font-semibold">
                Pending
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">📅 2025-03-24</td>
              <td className="border border-gray-300 p-2">System</td>
              <td className="border border-gray-300 p-2">Alert</td>
              <td className="border border-gray-300 p-2">
                Purok 3: Unusual flow detected
              </td>
              <td className="border border-gray-300 p-2 text-green-300 font-semibold">
                Resolve
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">📅 2025-03-28</td>
              <td className="border border-gray-300 p-2">Customer</td>
              <td className="border border-gray-300 p-2">Report Issue</td>
              <td className="border border-gray-300 p-2">
                Purok 5: leaking pipe
              </td>
              <td className="border border-gray-300 p-2 text-red-400 font-semibold">
                pending
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">📅 2025-03-26</td>
              <td className="border border-gray-300 p-2">
                Maintenance Personel
              </td>
              <td className="border border-gray-300 p-2">Maintenance</td>
              <td className="border border-gray-300 p-2">
                Purok 3: Leak Repair
              </td>
              <td className="border border-gray-300 p-2 text-yellow-400 font-semibold">
                In-Progress
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;
