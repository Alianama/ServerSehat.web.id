import Card from "./card/card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layanan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="layanan"
      className="flex gap-8 flex-col w-full justify-center pb-41 pt-11"
    >
      <div className="flex justify-center text-color-2 text-3xl">
        <h1>Layanan Kami</h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="w-full justify-center flex"
      >
        <Card
          name="Instalasi Server"
          description="Menginstalasi aplikasi server untuk kebutuhan aplikasi dan manajemen server seperti LAMP/LEMP stack, control panel hosting, database, dan programing language."
        />
        <Card
          name="Backup Data"
          description="Mencadangkan data dari server ke media backup seperti ke server lain atau cloud storage. Backup dapat dilakukan secara manual atau otomatis."
        />
        <Card
          name="Troubleshoot"
          description="Menyelidiki penyebab terjadinya kegagalan pada server atau aplikasi yang berjalan. Kemudian melakukan perbaikan baik itu instalasi atau konfigurasi tambahan."
        />
        <Card
          name="Konfigurasi"
          description="Mengonfigurasi server sesuai dengan kebutuhan aplikasi yang ingin dijalankan atau menginstalasi tools pendukung lainnya."
        />
      </div>
    </div>
  );
}
