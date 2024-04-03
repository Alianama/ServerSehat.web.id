import HomeBackground from "../../images/home-background.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="home"
      className="flex max-md:flex-col justify-center items-center pb-36 pt-11 "
    >
      <div
        className="flex flex-col w-7/12 justify-center items-center max-md:w-full "
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className="text-5xl text-color-1 hover:text-color-2 justify-center p-3 transition duration-700 ease-in-out	  ">
          <h1>
            Layanan Server Management yang dapat disesuaikan dengan kebutuhan
            bisnis Anda
          </h1>
        </div>
        <div className="justify-center p-4  self-start">
          <a
            className="bg-color-2  text-white hover:bg-color-1 p-2 rounded-full

            "
            href="#layanan"
          >
            Layanan Kami {"-->"}
          </a>
        </div>
      </div>
      <div className=" ">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={HomeBackground}
          alt="Home Background"
          width={500}
        />
      </div>
    </div>
  );
}
