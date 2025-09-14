import { useQueue } from "../QueueContext";

export default function Kiosk() {
  const { queue } = useQueue();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Kiosk terminali</h1>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow">
        {queue.length === 0 ? (
          <p className="text-center text-gray-500">Hozircha navbat yo‘q</p>
        ) : (
          <ul className="space-y-3">
            {queue.map((q, i) => (
              <li key={i} className="p-4 border rounded-lg shadow">
                <p>
                  <b>Bemor:</b> {q.ism}
                </p>
                <p>
                  <b>Shifokor:</b> {q.doctor}
                </p>
                <p>
                  <b>Vaqt:</b> {q.vaqt}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
