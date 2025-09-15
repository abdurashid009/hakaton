
import { useQueue } from "../QueueContext";

export default function DoctorDashboard() {
  const { doctors } = useQueue();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-4">Shifokor paneli</h1>
      {doctors.map((doc) => (
        <div key={doc.id} className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            {doc.name} ({doc.job})
          </h2>
          {doc.navbat.length === 0 ? (
            <p className="text-gray-500">Navbatda bemor yo‘q</p>
          ) : (
            <ul className="space-y-2">
              {doc.navbat.map((b, i) => (
                <li key={i} className="p-4 bg-white shadow rounded-lg">
                  <p>
                    <span className="font-bold">Bemor:</span> {b.ism}
                  </p>
                  <p>
                    <span className="font-bold">Vaqt:</span> {b.vaqt}
                  </p>
                  <p>
                    <span className="font-bold">Holat:</span> {b.holat}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
