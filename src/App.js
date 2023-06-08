import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
