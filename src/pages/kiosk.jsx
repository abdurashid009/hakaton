import { useQueue } from "../QueueContext";
import { Clock, User, Stethoscope, CalendarDays } from "lucide-react";

export default function Kiosk() {
  const { queue } = useQueue();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center drop-shadow-lg">
        🏥 Kiosk Terminali
      </h1>

      {/* Card container */}
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl ring-1 ring-blue-200">
        {queue.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4 p-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712000.png"
              alt="No queue"
              className="w-36 h-36 opacity-70"
            />
            <p className="text-gray-600 text-xl font-semibold">
              Hozircha navbat yo‘q 😊
            </p>
            <p className="text-gray-400 text-sm max-w-xs">
              Birinchi bemor ro‘yxatdan o‘tishini kuting
            </p>
          </div>
        ) : (
          <ul className="space-y-6">
            {queue.map((q, i) => (
              <li
                key={i}
                className="p-6 border border-blue-200 rounded-3xl shadow-md bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Bemor ismi */}
                <p className="flex items-center gap-3 text-blue-900 text-xl font-bold">
                  <User size={22} /> Bemor:{" "}
                  <span className="text-gray-900">{q.ism}</span>
                </p>

                {/* Shifokor ismi */}
                <p className="flex items-center gap-3 text-blue-700 mt-2 font-medium">
                  <Stethoscope size={20} /> Shifokor:{" "}
                  <span className="text-gray-800">{q.doctor}</span>
                </p>

                {/* Kelgan vaqt */}
                <p className="flex items-center gap-3 text-green-700 mt-2 text-sm">
                  <CalendarDays size={18} /> Kelgan vaqt:{" "}
                  <span className="font-semibold">{q.kelganVaqt}</span>
                </p>

                {/* Chaqirilish vaqti */}
                <p className="flex items-center gap-3 text-blue-600 mt-1 text-sm">
                  <Clock size={18} /> Taxminiy chaqirilish:{" "}
                  <span className="font-semibold">{q.vaqt}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-xs text-center">
        © 2025 Klinik Navbat Tizimi • Hakaton uchun maxsus 🎯
      </p>
    </div>
  );
}
