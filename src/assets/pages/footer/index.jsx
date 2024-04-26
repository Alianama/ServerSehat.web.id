import { IconContext } from "react-icons";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

function FooterView() {
  function onClickHandler(link) {
    window.open(link, "_blank");
  }

  return (
    <footer className="text-color-grey">
      <div className="flex pb-10 border-b-2">
        <div className="flex w-2/4 justify-center items-center">
          <p>Get connected with us on social networks:</p>
        </div>
        <div className="flex w-2/4 justify-center items-center gap-5 ">
          <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
            <TiSocialLinkedinCircular
              title="LinkedIn"
              onClick={() => onClickHandler("https://www.linkedin.com")}
            />
            <TiSocialInstagramCircular
              title="Instagram"
              onClick={() => onClickHandler("https://www.instagram.com")}
            />
            <SlSocialTwitter
              title="Twitter"
              onClick={() => onClickHandler("https://x.com")}
            />
            <TiSocialFacebook
              title="Facebook"
              onClick={() => onClickHandler("https://facebook.com")}
            />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10   ">
        <div className="flex flex-col justify-center w-full">
          <h1>ABOUT US</h1>
          <p>
            Manajemen Server - merencanakan, menata, merawat, dan melakukan
            perbaikan pada infrastruktur server/komputer
          </p>
        </div>
        <div className="flex justify-center w-full">
          <h1>NAVIGATE</h1>
        </div>
        <div className="flex justify-center w-full">
          <h1>CONTACT</h1>
        </div>
      </div>
      <div className="copyright">
        © 2024 Copyright:
        <a href="https://ServerSehat.web.id/">ServerSehat.web.id</a>
      </div>
    </footer>
  );
}

export default FooterView;
