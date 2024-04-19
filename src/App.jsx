import Navbar from "./assets/pages/navbar/navbar";
import Home from "./assets/pages/home/home";
import About from "./assets/pages/about/about";
import Layanan from "./assets/pages/layanan/layanan";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Layanan />
    </div>
  );
};

export default App;
