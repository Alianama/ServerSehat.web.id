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

  const layananItems = [
    {
      image: ComputerIcon,
      name: "Instalasi Server",
      description:
        "Menginstalasi aplikasi server untuk kebutuhan aplikasi dan manajemen server seperti LAMP/LEMP stack, control panel hosting, database, dan programing language.",
    },
    {
      image: BackupIcon,
      name: "Backup Data",
      description:
        "Mencadangkan data dari server ke media backup seperti ke server lain atau cloud storage. Backup dapat dilakukan secara manual atau otomatis.",
    },
    {
      image: WarningIcon,
      name: "Troubleshoot",
      description:
        "Menyelidiki penyebab terjadinya kegagalan pada server atau aplikasi yang berjalan. Kemudian melakukan perbaikan baik itu instalasi atau konfigurasi tambahan.",
    },
    {
      image: TroubleshootIcon,
      name: "Konfigurasi",
      description:
        "Mengonfigurasi server sesuai dengan kebutuhan aplikasi yang ingin dijalankan atau menginstalasi tools pendukung lainnya.",
    },
  ];

  const styles = {
    container:
      "flex flex-col w-full justify-center max-md:pb-10 max-md:pt-10 pb-20",
    titleContainer: "flex justify-center text-color-2 text-2xl pt-20 -mt-20",
    cardContainer:
      "w-full max-md:flex-col max-md:items-center max-md:gap-0 justify-center flex",
  };

  return (
    <div className={styles.container}>
      <div id="layanan" className={styles.titleContainer}>
        <h1>Layanan Kami</h1>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className={styles.cardContainer}
      >
        {layananItems.map((item) => (
          <Card
            key={item.name}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
