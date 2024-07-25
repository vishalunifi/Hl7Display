import "./App.css";
import { useGetADTList } from "./hooks/useGetADTList";

interface ADTData {
  id: number;
  patientName: string;
  dateOfBirth: string;
  patientAddress: string;
  financialClass: string;
  messageType: string;
  insuranceCompanyName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

function App() {
  const [data, refetch, isLoading, error] = useGetADTList<ADTData[]>([]);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4">ADT Data</h1>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Patient Name</th>
                <th className="py-2 px-4 border-b">Date of Birth</th>
                <th className="py-2 px-4 border-b">Patient Address</th>
                <th className="py-2 px-4 border-b">Financial Class</th>
                <th className="py-2 px-4 border-b">Message Type</th>
                <th className="py-2 px-4 border-b">Insurance Company</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.patientName}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.dateOfBirth).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{item.patientAddress}</td>
                  <td className="py-2 px-4 border-b">{item.financialClass}</td>
                  <td className="py-2 px-4 border-b">{item.messageType}</td>
                  <td className="py-2 px-4 border-b">
                    {item.insuranceCompanyName}
                  </td>
                  <td className="py-2 px-4 border-b">{item.status}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(item.updatedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
