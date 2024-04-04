import { useState } from "react";
import whatsappIcon from "../../icon/whatsapp.svg";


export default function Nav() {
  const [activeBtn, setActiveBtn] = useState(0);
  const handleClick = (index) => {
    setActiveBtn(index);
  };

  return (
    <nav className="flex justify-center w-full items-center max-md:flex-col sticky top-0 z-50 bg-white ">
      <div className="flex w-3/12 max-md:w-full justify-start ">
        <a href="/" className="text-color-2 text-2xl p-3 ">
          ServerSehat.web.id
        </a>
      </div>
      <div className="w-9/12 flex gap-6 justify-end items-center p-3 max-md:w-full max-md:justify-center flex-wrap text-color-1 ">
        <a
          href="#home"
          className={`btn ${
            activeBtn === 0
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(0)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`btn ${
            activeBtn === 1
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(1)}
        >
          Tentang
        </a>
        <a
          href="#layanan"
          className={`btn ${
            activeBtn === 2
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(2)}
        >
          Layanan
        </a>
        <a
          href="#pricing"
          className={`btn ${
            activeBtn === 3
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(3)}
        >
          Pricing
        </a>
        <a
          href="#Klien"
          className={`btn ${
            activeBtn === 4
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(4)}
        >
          Klien
        </a>
        <a
          href="#blog"
          className={`btn ${
            activeBtn === 5
              ? "text-color-2"
              : "hover:text-color-2 hover:bg-white"
          }`}
          onClick={() => handleClick(5)}
        >
          Blog
        </a>

        <a
          className="btn"
          href={`https://api.whatsapp.com/send?phone=${"085110300113"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex justify-center items-center bg-color-2 text-white text-sm gap-1 p-1 px-3 rounded-tr-lg rounded-bl-lg hover:bg-color-1">
            <img src={whatsappIcon} alt="WhatsApp" width={24} />
            Hubungi Kami
          </button>
        </a>
      </div>
    </nav>
  );
}
