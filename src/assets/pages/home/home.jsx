import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData from "../../lottie/systemadmin-iconn.json";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const homeSectionStyle =
    "flex max-md:flex-col max-md:pt-0 max-md:pb-0 justify-center items-center pb-11 pt-11 max-md:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]";
  const homeTextStyle =
    "flex flex-col w-7/12 justify-center items-center max-md:w-full";
  const titleStyle =
    "text-5xl max-md:text-xl max-md:text-center text-color-1 hover:text-color-2 justify-center pl-11 p-3 transition duration-700 ease-in-out";
  const buttonStyle =
    "justify-center max-md:self-center p-4 ml-11 dropShadow-4xl pl-11 self-start bg-color-2 text-white hover:bg-color-1 rounded-full dropShadow-4xl";
  const lottieContainerStyle =
    "max-md:w-72 md:w-[500px] md:h-[500px] max-md:p-0 max-md:m-0";

  return (
    <div id="home" className={homeSectionStyle}>
      <div
        className={homeTextStyle}
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className={titleStyle}>
          <h1>
            Layanan Server Management yang dapat disesuaikan dengan kebutuhan
            bisnis Anda
          </h1>
        </div>
        <div className={buttonStyle}>
          <a href="#layanan">Layanan Kami {"-->"}</a>
        </div>
      </div>
      <div className={lottieContainerStyle}>
        <Lottie
          data-aos="fade-down"
          animationData={animationData}
          loop
          autoplay
        />
      </div>
    </div>
  );
}
