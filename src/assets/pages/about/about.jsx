import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "../../lottie/server-iconn.json";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutSectionStyle =
    "flex max-md:pt-0 max-md:pb-0 max-md:flex-col max-md:items-center w-full pb-36 pt-36 overflow-hidden max-md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]";
  const aboutTextStyle = "flex flex-col w-5/12 justify-center items-center max-md:w-full";
  const aboutTitleStyle =
    "text-2xl justify-center max-md:p-7 max-md:pb-0 max-md:text-center pl-11  text-color-1 max-md:text-xl";
  const aboutDescriptionStyle = "text-sm max-md:text-justify max-md:pb-0 max-md:p-7 text-color-2 pl-11";
  const lottieStyle = "max-md:w-72 md:w-[500px] md:h-[500px] pb-0 max-md:pb-0  max-md:m-0";

  return (
    <div className={aboutSectionStyle}>
      <div id="tentang" data-aos="fade-right" data-aos-duration="1000" className={aboutTextStyle}>
        <h1 className={aboutTitleStyle}>
          Manajemen Server - merencanakan, menata, merawat, dan melakukan perbaikan pada infrastruktur server/komputer
        </h1>
        <p className={aboutDescriptionStyle}>
          Manajemen Server merupakan serangkaian kegiatan yang mencakup perencanaan, penataan, pemeliharaan, dan
          perbaikan infrastruktur server. Ini meliputi pemasangan dan konfigurasi server, pemantauan performa,
          pelaksanaan pemeliharaan berkala, administrasi pengguna dan izin akses, pengamanan server, pengelolaan
          penyimpanan, serta pengaturan layanan dan aplikasi yang diperlukan. Tujuannya adalah untuk memastikan server
          beroperasi secara efisien, aman, dan dapat diandalkan dalam menyediakan layanan yang diperlukan oleh pengguna
          atau organisasi yang mengandalkan infrastruktur server seperti platform Linux dan Windows.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className={lottieStyle}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
