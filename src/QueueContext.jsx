// src/QueueContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { doctors as initialDoctors } from "./data";

const QueueContext = createContext();

export const useQueue = () => useContext(QueueContext);

export function QueueProvider({ children }) {
  // Initialize queue from localStorage
  const [queue, setQueue] = useState(() => {
    const saved = localStorage.getItem("navbat");
    return saved ? JSON.parse(saved) : [];
  });

  // Initialize doctors with their queues populated from localStorage
  const [doctors, setDoctors] = useState(() => {
    const savedQueue = localStorage.getItem("navbat");
    const parsedQueue = savedQueue ? JSON.parse(savedQueue) : [];
    return initialDoctors.map((doc) => ({
      ...doc,
      navbat: parsedQueue
        .filter((item) => item.shifokor === doc.name)
        .map((item) => ({
          ism: item.bemor,
          doctor: item.shifokor,
          vaqt: item.vaqt,
          holat: item.holat,
        })),
    }));
  });

  // Sync queue changes to localStorage and update doctors' navbat
  useEffect(() => {
    localStorage.setItem("navbat", JSON.stringify(queue));
    // Update doctors' navbat whenever queue changes
    setDoctors((prevDoctors) =>
      prevDoctors.map((doc) => ({
        ...doc,
        navbat: queue
          .filter((item) => item.shifokor === doc.name)
          .map((item) => ({
            ism: item.bemor,
            doctor: item.shifokor,
            vaqt: item.vaqt,
            holat: item.holat,
          })),
      }))
    );
  }, [queue]);

  // Add a patient to the queue
  const addPatient = (patient) => {
    const newPatient = {
      id: Date.now(),
      bemor: patient.bemor,
      shifokor: patient.shifokor,
      vaqt: patient.vaqt,
      holat: "kutmoqda",
    };

    // Update queue
    setQueue((prevQueue) => [...prevQueue, newPatient]);
  };

  return (
    <QueueContext.Provider value={{ doctors, queue, addPatient }}>
      {children}
    </QueueContext.Provider>
  );
}
