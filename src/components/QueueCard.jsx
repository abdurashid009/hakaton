import React from "react";

export default function QueueCard({ bemor, shifokor, vaqt, holat }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-gray-700">👤 Bemor: {bemor}</h2>
      <p className="text-gray-600">🩺 Shifokor: {shifokor}</p>
      <p className="text-gray-600">⏰ Vaqt: {vaqt}</p>
      <p
        className={`mt-2 font-semibold ${
          holat === "kutmoqda"
            ? "text-yellow-600"
            : holat === "qabulda"
            ? "text-green-600"
            : "text-gray-500"
        }`}
      >
        📌 Holat: {holat}
      </p>
    </div>
  );
}
