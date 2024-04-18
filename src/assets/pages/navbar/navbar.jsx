import { useState, useEffect } from "react";
import whatsappIcon from "../../icon/whatsapp.svg";
import PropTypes from "prop-types";
import hamburgerIcon from "../../icon/hamburger.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeBtn, setActiveBtn] = useState(0);
  const [showDiv, setShowDiv] = useState(false);
  const handleClick = (index) => {
    setActiveBtn(index);
  };

  const NavItem = ({ link, label, active, onClick }) => (
    <a
      href={link}
      className={`btn ${
        active
          ? "text-color-2 cursor-pointer"
          : "hover:text-color-2 hover:bg-white cursor-pointer"
      }`}
      onClick={onClick}
    >
      {label}
    </a>
  );
  const NavItemMobile = ({ link, label }) => (
    <a
      href={link}
      className=" rounded-md	w-full flex justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      {label}
    </a>
  );
  NavItem.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  NavItemMobile.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  return (
    <nav className="flex justify-center w-full items-center max-md:flex-row sticky top-0 z-50 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <div className="flex w-3/12 max-md:w-full justify-start ">
        <a href="/" className="text-color-2 text-2xl p-3 ">
          ServerSehat.web.id
        </a>
      </div>
      <div
      // onMouseEnter={() => setShowDiv(!showDiv)}
      // onMouseLeave={() => setShowDiv(false)}
      >
        <button onClick={() => setShowDiv(!showDiv)}>
          <img
            src={hamburgerIcon}
            alt="hamburger"
            className="w-10 h-10 md:hidden overflow-hidden  p-2 rounded-md hover:rotate-180 transition-transform duration-300"
          />
        </button>
        {showDiv && (
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="bottom-center"
            data-aos-duration="500"
            className=" absolute right-0 flex text-color-2 flex-col w-full justify-center items-center gap-3 pb-4 pt-4 bg-white shadow-[-4px_5px_12px_0px_#1a202c]"
            onClick={() => setShowDiv(false)}
          >
            <div className="flex w-4/5 gap-2 flex-col">
              <NavItemMobile link="#home" label="Home" />
              <NavItemMobile link="#about" label="Tentang" />
              <NavItemMobile link="#layanan" label="Layanan" />
              <NavItemMobile link="#pricing" label="Pricing" />
              <NavItemMobile link="#Klien" label="Klien" />
              <NavItemMobile link="#blog" label="Blog" />
            </div>

            <a
              className="btn"
              href={`https://api.whatsapp.com/send?phone=${"085110300113"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex justify-center items-center bg-color-2 text-white text-sm gap-1 p-1 px-3 rounded-xl hover:bg-color-1">
                <img src={whatsappIcon} alt="WhatsApp" width={20} />
                Hubungi Kami
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="w-9/12 flex gap-6 justify-end items-center p-3 max-md:w-full max-md:justify-center flex-wrap text-color-1 max-md:hidden">
        <NavItem
          link="#home"
          label="Home"
          active={activeBtn === 0}
          onClick={() => handleClick(0)}
        />
        <NavItem
          link="#about"
          label="Tentang"
          active={activeBtn === 1}
          onClick={() => handleClick(1)}
        />
        <NavItem
          link="#layanan"
          label="Layanan"
          active={activeBtn === 2}
          onClick={() => handleClick(2)}
        />
        <NavItem
          link="#pricing"
          label="Pricing"
          active={activeBtn === 3}
          onClick={() => handleClick(3)}
        />
        <NavItem
          link="#Klien"
          label="Klien"
          active={activeBtn === 4}
          onClick={() => handleClick(4)}
        />
        <NavItem
          link="#blog"
          label="Blog"
          active={activeBtn === 5}
          onClick={() => handleClick(5)}
        />

        <a
          className="btn"
          href={`https://api.whatsapp.com/send?phone=${"085110300113"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex justify-center cursor-pointer items-center bg-color-2 text-white text-sm gap-1 p-1 px-3 rounded-tr-lg rounded-bl-lg hover:bg-color-1">
            <img src={whatsappIcon} alt="WhatsApp" width={24} />
            Hubungi Kami
          </button>
        </a>
      </div>
    </nav>
  );
}
