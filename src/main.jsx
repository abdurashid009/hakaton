import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import ReceptionDashboard from "./pages/ReceptionDashboard.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
import Kiosk from "./pages/Kiosk.jsx";
import { QueueProvider } from "./QueueContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: "patient", element: <PatientDashboard /> },
      { path: "reception", element: <ReceptionDashboard /> },
      { path: "doctor", element: <DoctorDashboard /> },
      { path: "kiosk", element: <Kiosk /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueueProvider>
      <RouterProvider router={router} />
    </QueueProvider>
  </StrictMode>
);
