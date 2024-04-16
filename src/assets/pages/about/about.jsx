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
    <div id="about" className="flex  w-full pb-36 pt-36 overflow-hidden ">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-col w-5/12 justify-center items-center max-md:w-full"
      >
        <h1 className="text-2xl justify-center pl-11  text-color-1 ">
          Manajemen Server - merencanakan, menata, merawat, dan melakukan
          perbaikan pada infrastruktur server/komputer
        </h1>
        <p className="text-sm text-color-2 pl-11">
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
        className="flex justify-center w-7/12"
      >
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 500, height: 500 }}
        />
      </div>
    </div>
  );
}
