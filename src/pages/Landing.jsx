import { Link } from "react-router-dom";
import Ser from "../assets/Ser.jpg"

export default function Landing() {
  return (
    <section className="text-center py-20 bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-700">
        Shifoxonaga xush kelibsiz
      </h1>
      <p className="mt-4 text-lg">
        Navbat kutmasdan shifokor ko‘rigi uchun ro‘yxatdan o‘ting
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link
          to="/patient"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Bemor sifatida davom etish
        </Link>
        <Link
          to="/reception"
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Qabulxona
        </Link>
      </div>
      <main className=" flex justify-center items-center gap-[30px]">
        <h1 className=" text-[]">Biz haqimizda</h1>
        <img className=" w-40" src={Ser} alt="" />
      </main>
    </section>
  );
}
