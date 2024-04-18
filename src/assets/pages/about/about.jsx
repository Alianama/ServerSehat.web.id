import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "../../lottie/server-iconn.json";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex max-md:pt-0 max-md:pb-0 max-md:flex-col max-md:items-center w-full pb-36 pt-36 overflow-hidden max-md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      <div
        id="about"
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-col w-5/12 justify-center items-center max-md:w-full"
      >
        <h1 className="text-2xl justify-center max-md:p-7 max-md:pb-0 max-md:text-center  text-color-1 max-md:text-xl">
          Manajemen Server - merencanakan, menata, merawat, dan melakukan
          perbaikan pada infrastruktur server/komputer
        </h1>
        <p className="text-sm max-md:text-justify max-md:pb-0 max-md:p-7 text-color-2 pl-11">
          Manajemen Server merupakan serangkaian kegiatan yang mencakup
          perencanaan, penataan, pemeliharaan, dan perbaikan infrastruktur
          server. Ini meliputi pemasangan dan konfigurasi server, pemantauan
          performa, pelaksanaan pemeliharaan berkala, administrasi pengguna dan
          izin akses, pengamanan server, pengelolaan penyimpanan, serta
          pengaturan layanan dan aplikasi yang diperlukan. Tujuannya adalah
          untuk memastikan server beroperasi secara efisien, aman, dan dapat
          diandalkan dalam menyediakan layanan yang diperlukan oleh pengguna
          atau organisasi yang mengandalkan infrastruktur server seperti
          platform Linux dan Windows.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-md:w-72 md:w-[500px] md:h-[500px] pb-0 max-md:pb-0  max-md:m-0 "
      >
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
