import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import whatsappIcon from "../../icon/whatsapp.svg";
import hamburgerIcon from "../../icon/hamburger.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavView() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeBtn, setActiveBtn] = useState(0);
  const [showDiv, setShowDiv] = useState(false);

  const toggleShowDiv = () => setShowDiv(!showDiv);
  const handleNavItemClick = (index) => setActiveBtn(index);

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
      className="rounded-md w-full flex justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      {label}
    </a>
  );

  NavItem.propTypes = NavItemMobile.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

  NavItem.propTypes.active = PropTypes.bool.isRequired;
  NavItem.propTypes.onClick = PropTypes.func.isRequired;

  return (
    <nav className="flex justify-center w-full items-center max-md:flex-row sticky top-0 z-50 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex w-3/12 max-md:w-full justify-start">
        <a href="/" className="text-color-2 text-2xl p-4">
          ServerSehat.web.id
        </a>
      </div>
      <div>
        <button onClick={toggleShowDiv}>
          <img
            src={hamburgerIcon}
            alt="hamburger"
            className="w-10 h-10 md:hidden overflow-hidden p-2 mr-5 rounded-md hover:rotate-180 transition-transform duration-300"
          />
        </button>
        {showDiv && (
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            className="absolute right-0 flex text-color-2 flex-col w-full justify-center items-center gap-3 pb-4 pt-4 bg-white shadow-[-4px_5px_12px_0px_#1a202c]"
            onClick={toggleShowDiv}
          >
            <div className="flex w-4/5 gap-2 flex-col">
              <NavItemMobile link="#home" label="Home" />
              <NavItemMobile link="#tentang" label="Tentang" />
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
              <button className="flex justify-center cursor-pointer items-center bg-color-2 text-white text-sm gap-1 p-1 px-3 rounded-tr-lg rounded-bl-lg hover:bg-color-1">
                <img src={whatsappIcon} alt="WhatsApp" width={20} />
                Hubungi Kami
              </button>
            </a>
          </div>
        )}
      </div>
      <div className="w-9/12 flex gap-6 justify-end items-center p-3 max-md:w-full max-md:justify-center flex-wrap text-color-1 max-md:hidden">
        {["Home", "Tentang", "Layanan", "Pricing", "Klien", "Blog"].map(
          (item, index) => (
            <NavItem
              key={item}
              link={`#${item.toLowerCase()}`}
              label={item}
              active={activeBtn === index}
              onClick={() => handleNavItemClick(index)}
            />
          )
        )}
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
