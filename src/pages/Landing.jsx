import { Link } from "react-router-dom";
import Ser from "../assets/Ser.jpg"
import Logo from "../assets/Logo1.jpg"

export default function Landing() {
  return (
    <section className="text-center flex flex-col justify-center py-20 bg-blue-100">
      <div className=" flex rou justify-center ">
        <img className=" w-30 rounded-[50%]" src={Logo} alt="" />
      </div>
      <h1 className="text-4xl font-bold text-blue-700 pt-[40px]">
        2616-Shifoxonasiga xush kelibsiz
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
      <div className=" border-blue-900 border-2 mt-[200px] p-[30px] h-screen">
        <h1 className=" text-4xl font-bold text-blue-500">Biz haqimizda</h1>
        <main className=" flex justify-center items-center bg-white rounded-2xl mx-[30px] my-[40px] gap-[30px] py-[40px]">
          <h1 className=" text-5xl font-bold w-[350px] text-blue-500">
            Shifoxona litsenziyasi
          </h1>
          <img className=" w-45" src={Ser} alt="" />
        </main>
      </div>
      <div className=" flex justify-center  bg-white rounded-2xl mx-[30px] my-[40px] py-[30px]">
        <p className=" text-2xl text-center font-bold text-blue-800 w-[55%]">
          🏥 Biz haqimizda – ADMA Clinic ADMA Clinic – bu zamonaviy tibbiy
          xizmat va innovatsion yondashuvni birlashtirgan sog‘liqni saqlash
          markazi. Klinikamizning asosiy maqsadi – bemorlarga sifatli, qulay va
          tezkor tibbiy xizmat ko‘rsatish, ularning vaqtini va sog‘ligini
          qadrlashdir. 📖 Tariximiz 2015-yil – ADMA Clinic o‘z faoliyatini
          kichik tibbiy markaz sifatida boshladi. Asosiy e’tibor bemorlarni
          sog‘lomlashtirish va ularga samimiy yondashuv ko‘rsatishga qaratildi.
          2018-yil – Klinikamiz diagnostika markazini ochib, bemorlarga
          laboratoriya va instrumental tekshiruvlarni yuqori sifatda taqdim eta
          boshladi. 2021-yil – Innovatsion davr boshlandi: onlayn ro‘yxatdan
          o‘tish, elektron navbat va shaxsiy kabinet tizimi ishga tushirildi. Bu
          bemorlar uchun qulaylik yaratdi va navbatlarda sarflanadigan vaqtni
          kamaytirdi. 2023-yil – ADMA Clinic xalqaro va mahalliy hamkorliklarni
          yo‘lga qo‘ydi. Shu orqali yangi texnologiyalar, zamonaviy davolash
          usullari va malakali mutaxassislar tajribasi joriy etildi. 🏆 Bizning
          mukofotlarimiz “Yilning eng yaxshi klinikasi” – 2020 “Innovatsion
          tibbiy markaz” – 2022 “Bemorlar tanlovi mukofoti” – 2024 Bu mukofotlar
          bizning mehnatsevar jamoamiz va bemorlarimizning ishonchli
          qo‘llab-quvvatlashi natijasidir. 🤝 Hamkorliklar Biz quyidagi
          tashkilotlar bilan faol hamkorlik qilamiz: O‘zbekiston Respublikasi
          Sog‘liqni Saqlash Vazirligi Toshkent Tibbiyot Universiteti “MedGlobal”
          xalqaro tashkiloti Mahalliy klinikalar va laboratoriyalar
          Hamkorliklarimiz tufayli klinikamiz bemorlar uchun yanada sifatli
          xizmat ko‘rsatmoqda. 👨‍⚕️ Bizning direktor Dr. Sardor Alimov – ADMA
          Clinic bosh direktori. U klinikaning asosiy maqsadini shunday
          ta’riflaydi: “Bizning vazifamiz – nafaqat davolash, balki bemorlar
          uchun qulay, xavfsiz va ishonchli muhit yaratishdir. Sog‘liq – bu
          hayotning eng katta boyligi.”
        </p>
      </div>
    </section>
  );
}
