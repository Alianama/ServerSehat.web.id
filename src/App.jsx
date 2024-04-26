import Navbar from "./assets/pages/navbar/navbar";
import Home from "./assets/pages/home/home";
import About from "./assets/pages/about/about";
import Layanan from "./assets/pages/layanan/layanan";
import Pricing from "./assets/pages/pricing/pricing";
import Footer from "./assets/pages/footer/footer";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Layanan />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
