import Card from "./card/card.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PricingView() {
  useEffect(() => {
    AOS.init();
  }, []);

  const cardItems = [
    {
      name: "Instalasi Server",
      description: "Install Linux/windows server",
      lists: ["Fitur 1", "Fitur 2", "Fitur 3"],
      harga: "300000",
    },
    {
      name: "Paket Basic",
      description: "Deskripsi paket basic",
      lists: ["Fitur 1", "Fitur 2", "Fitur 3"],
      harga: "200000",
    },
    {
      name: "Paket Standard",
      description: "Deskripsi paket standard",
      lists: ["Fitur 1", "Fitur 2", "Fitur 3"],
      harga: "500000",
    },
  ];

  return (
    <div className="flex gap-10 flex-col w-full mb-40 mt-40">
      <div className=" text-color-2 text-2xl w-full flex justify-center">
        <h1>Pricing</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        id="pricing"
        className="flex w-full max-md:flex-col items-center max-md:gap-5 "
      >
        {cardItems.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            description={item.description}
            lists={item.lists}
            harga={item.harga}
          />
        ))}
      </div>
    </div>
  );
}
export default PricingView;
