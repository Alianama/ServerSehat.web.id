import { IconContext } from "react-icons";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";

function FooterView() {
  function onClickHandler(link) {
    window.open(link, "_blank");
  }

  return (
    <footer className="text-color-grey">
      <div className="flex pb-2 border-b-2 max-md:px-10 max-md:flex-col">
        <div className="flex w-2/4 justify-center items-center  max-md:w-full ">
          <p>Get connected with us on social networks:</p>
        </div>
        <div className="flex w-2/4 justify-center items-center gap-5 ">
          <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <TiSocialLinkedinCircular
              className=" hover:text-color-1"
              title="LinkedIn"
              onClick={() => onClickHandler("https://www.linkedin.com")}
            />
            <TiSocialInstagramCircular
              className=" hover:text-color-1"
              title="Instagram"
              onClick={() => onClickHandler("https://www.instagram.com")}
            />
            <SlSocialTwitter
              className=" hover:text-color-1"
              title="Twitter"
              onClick={() => onClickHandler("https://x.com")}
            />
            <TiSocialFacebook
              className=" hover:text-color-1"
              title="Facebook"
              onClick={() => onClickHandler("https://facebook.com")}
            />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex  w-full mt-5 items-start p-5 px-10 max-md:flex-col max-md:gap-5">
        <div className="flex flex-col justify-center w-full">
          <h1>ABOUT US</h1>
          <div className="flex flex-col mt-5">
            <p className="text-xs font-normal">
              Manajemen Server - merencanakan, menata, merawat, dan melakukan
              perbaikan pada infrastruktur server/komputer
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1>NAVIGATE</h1>
          <div className="flex font-normal gap-2 flex-col mt-5">
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#home"
            >
              Home
            </a>
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#tentang"
            >
              Tentang
            </a>
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#layanan"
            >
              Layanan
            </a>
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#klien"
            >
              Klien
            </a>
            <a
              className=" hover:font-bold text-xs hover:text-color-1"
              href="#blog"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1>CONTACT</h1>
          <div className="flex flex-col mt-5">
            <a
              className="flex items-center gap-6 text-xs "
              target="blank"
              href="mailto:alipurnama69@gmail.com"
            >
              <MdOutlineEmail size={25} /> alipurnama69@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full text-xs p-3  justify-center bg-color-grey2">
        <a href="https://ServerSehat.web.id/">
          © 2024 Copyright: ServerSehat.web.id
        </a>
      </div>
    </footer>
  );
}

export default FooterView;
