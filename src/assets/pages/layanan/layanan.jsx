import Card from "./card/card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ComputerIcon from "../../icon/computer.gif";
import BackupIcon from "../../icon/backup.gif";
import TroubleshootIcon from "../../icon/troubleshoot.gif";
import WarningIcon from "../../icon/warning.gif";

export default function Layanan() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="layanan" className="flex flex-col w-full justify-center pb-20">
      <div className="flex justify-center text-color-2 text-3xl">
        <h1>Layanan Kami</h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="w-full justify-center flex"
      >
        <Card
          image={ComputerIcon}
          name="Instalasi Server"
          description="Menginstalasi aplikasi server untuk kebutuhan aplikasi dan manajemen server seperti LAMP/LEMP stack, control panel hosting, database, dan programing language."
        />
        <Card
          image={BackupIcon}
          name="Backup Data"
          description="Mencadangkan data dari server ke media backup seperti ke server lain atau cloud storage. Backup dapat dilakukan secara manual atau otomatis."
        />
        <Card
          image={WarningIcon}
          name="Troubleshoot"
          description="Menyelidiki penyebab terjadinya kegagalan pada server atau aplikasi yang berjalan. Kemudian melakukan perbaikan baik itu instalasi atau konfigurasi tambahan."
        />
        <Card
          image={TroubleshootIcon}
          name="Konfigurasi"
          description="Mengonfigurasi server sesuai dengan kebutuhan aplikasi yang ingin dijalankan atau menginstalasi tools pendukung lainnya."
        />
      </div>
    </div>
  );
}
