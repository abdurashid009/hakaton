// src/ReceptionDashboard.js
import React, { useState } from "react";
import QueueCard from "../components/QueueCard";
import { useQueue } from "../QueueContext";
import { doctors as shifokorlar } from "../data";

export default function ReceptionDashboard() {
  const { queue, addPatient } = useQueue();

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
      const doc = shifokorlar.find((d) => d.name === e.target.value);
      setTanlanganDoctor(doc || null);
    }
  };

  const handleAddPatient = () => {
    if (!newPatient.bemor || !newPatient.shifokor || !newPatient.vaqt) {
      alert("❌ Barcha maydonlarni to‘ldiring!");
      return;
    }

    // Check if the doctor and time slot are already taken
    const mavjud = queue.find(
      (item) =>
        item.shifokor === newPatient.shifokor && item.vaqt === newPatient.vaqt
    );
    if (mavjud) {
      alert("⚠️ Bu shifokor ushbu vaqtda band. Boshqa vaqt tanlang!");
      return;
    }

    // Add patient using QueueContext
    addPatient(newPatient);

    // Reset form
    setNewPatient({ bemor: "", shifokor: "", vaqt: "" });
    setTanlanganDoctor(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-700">🏥 Qabulxona Paneli</h1>
      {/* Bemor qo‘shish */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">➕ Yangi bemor qo‘shish</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            name="bemor"
            value={newPatient.bemor}
            onChange={handleInputChange}
            placeholder="Bemor ismi"
            className="border p-2 rounded"
          />
          <select
            name="shifokor"
            value={newPatient.shifokor}
            onChange={handleInputChange}
            className="border p-2 rounded"
          >
            <option value="">Shifokor tanlang</option>
            {shifokorlar.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name} ({doc.job})
              </option>
            ))}
          </select>
          <select
            name="vaqt"
            value={newPatient.vaqt}
            onChange={handleInputChange}
            className="border p-2 rounded"
          >
            <option value="">Vaqt tanlang</option>
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
        {/* Tanlangan shifokor haqida ma’lumot */}
        {tanlanganDoctor && (
          <div className="mt-3 p-3 bg-white rounded shadow">
            <h3 className="font-bold text-lg text-gray-700">
              {" "}
              🩺 {tanlanganDoctor.name}{" "}
            </h3>
            <p>🔹 Mutaxassisligi: {tanlanganDoctor.job}</p>
            <p className="text-sm text-gray-600">
              {" "}
              ℹ️ {tanlanganDoctor.description}{" "}
            </p>
          </div>
        )}
        <button
          onClick={handleAddPatient}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Qo‘shish
        </button>
      </div>
      {/* Navbat ro‘yxati */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {queue.map((item) => (
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
