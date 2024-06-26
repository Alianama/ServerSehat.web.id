import Card from "./card/card";
import ComputerIcon from "../../icon/computer.gif";
import BackupIcon from "../../icon/backup.gif";
import TroubleshootIcon from "../../icon/troubleshoot.gif";
import WarningIcon from "../../icon/warning.gif";

export default function LayananView() {


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

  return (
    <div className="flex flex-col w-full justify-center max-md:pb-0 max-md:pt-10 pb-20 max-md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-md:mt-30">
      <div
        id="layanan"
        className="flex justify-center text-color-2 text-2xl pt-20 -mt-20"
      >
        <h1>Layanan Kami</h1>
      </div>
      <div className="w-full max-md:flex-col max-md:items-center max-md:gap-0 justify-center flex">
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
