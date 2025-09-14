import React, { useState } from "react";
import QueueCard from "../components/QueueCard";
import { useQueue } from "../QueueContext";

export default function PatientDashboard() {
  const { queue, addPatient } = useQueue();

  const shifokorlar = [
    {
      id: 1,
      ism: "Dr. Karimov",
      mutaxassis: "Terapevt",
      bosh: "Prof. Abdullayev",
      malumot: "Ichki kasalliklar bo‘yicha 15 yillik tajribaga ega.",
    },
    {
      id: 2,
      ism: "Dr. Akhmedova",
      mutaxassis: "Pediatr",
      bosh: "Prof. Hamidova",
      malumot: "Bolalar kasalliklari bo‘yicha tajribali shifokor.",
    },
    {
      id: 3,
      ism: "Dr. Ismoilov",
      mutaxassis: "Kardiolog",
      bosh: "Prof. Tursunov",
      malumot: "Yurak-qon tomir kasalliklari bo‘yicha mutaxassis.",
    },
  ];

  const vaqtlar = ["09:00", "09:30", "10:00", "10:30", "11:00"];

  const [newPatient, setNewPatient] = useState({
    bemor: "",
    shifokor: "",
    vaqt: "",
  });

  const [tanlanganDoctor, setTanlanganDoctor] = useState(null);

  const handleInputChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    if (e.target.name === "shifokor") {
      const doc = shifokorlar.find((d) => d.ism === e.target.value);
      setTanlanganDoctor(doc, null);
    }
  };

  const handleAddPatient = () => {
    if (!newPatient.bemor ||!newPatient.shifokor || !newPatient.vaqt) {
      alert("❌ Barcha maydonlarni to‘ldiring!");
      return;
    }

    const mavjud = queue.find(
      (item) =>
        item.shifokor === newPatient.shifokor && item.vaqt === newPatient.vaqt
    );
    if (mavjud) {
      alert("⚠️ Bu shifokor ushbu vaqtda band. Boshqa vaqt tanlang!");
      return;
    }

    addPatient(newPatient);
    setNewPatient({ bemor: "", shifokor: "", vaqt: "" });
    setTanlanganDoctor(null);
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        🧑‍⚕️ Qabulxona Paneli
      </h1>

      {/* Registration card */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Left side (info / image) */}
        <div className="md:w-1/3 bg-gradient-to-b from-blue-600 to-blue-400 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-bold mb-2">📅 Qabulga yozilish</h2>
          <p className="text-sm opacity-80 text-center">
            Shifokor tanlang, vaqt belgilang va navbatingizni onlayn yozib
            qo‘ying
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
            alt="Doctor illustration"
            className="w-40 mt-6"
          />
        </div>

        {/* Right side (form) */}
        <div className="md:w-2/3 p-8 bg-white flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="bemor"
              value={newPatient.bemor}
              onChange={handleInputChange}
              placeholder="👤 Ismingiz"
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 shadow-sm"
            />

            <select
              name="shifokor"
              value={newPatient.shifokor}
              onChange={handleInputChange}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="">🩺 Shifokor tanlang</option>
              {shifokorlar.map((doc) => (
                <option key={doc.id} value={doc.ism}>
                  {doc.ism} ({doc.mutaxassis})
                </option>
              ))}
            </select>
<select
              name="vaqt"
              value={newPatient.vaqt}
              onChange={handleInputChange}
              className="border rounded-xl p-3 focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="">⏰ Vaqt tanlang</option>
              {vaqtlar.map((t) => (
                <option
                  key={t}
                  value={t}
                  disabled={queue.some(
                    (item) =>
                      item.shifokor === newPatient.shifokor && item.vaqt === t
                  )}
                >
                  {t}
                </option>
              ))}
            </select>
          </div>
          {tanlanganDoctor && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
              <h3 className="font-bold text-lg text-blue-700">
                🩺 {tanlanganDoctor.ism}
              </h3>
              <p>🔹 Mutaxassisligi: {tanlanganDoctor.mutaxassis}</p>
              <p>👨‍⚕️ Bo‘lim boshlig‘i: {tanlanganDoctor.bosh}</p>
              <p className="text-sm text-gray-600">
                ℹ️ {tanlanganDoctor.malumot}
              </p>
            </div>
          )}

          <button
            onClick={handleAddPatient}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-blue-400 transition duration-300"
          >
            🚀 Yozilish
          </button>
        </div>
      </div>

      {/* Patient’s own queue */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {queue
          .filter(
            (item) =>
              item.bemor.toLowerCase() === newPatient.bemor.toLowerCase()
          )
          .map((item) => (
            <QueueCard
              key={item.id}
              bemor={item.bemor}
              shifokor={item.shifokor}
              vaqt={item.vaqt}
              holat={item.holat}
            />
          ))}
      </div>
    </div>
  );
}