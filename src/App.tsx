import "./App.css";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./ThemeHandler";
import { ThemeLayout } from "./ThemeLayout";
import "./fonts/WaukeganLDO.ttf";
import "./fonts/WaukeganLDOBold.ttf";
import "./fonts/WaukeganLDOExtendedBold.ttf";
import "./fonts/WaukeganLDOBlack.ttf";

const App = () => {
  return (
    <DarkModeProvider>
      <ThemeLayout>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/getintouch" element={<GetInTouch />} />
          </Routes>
        </div>
      </ThemeLayout>
    </DarkModeProvider>
  );
};

export default App;
