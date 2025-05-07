import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
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

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <ThemeLayout>
        <Navbar />
      </ThemeLayout>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "portfolio",
        Component: Portfolio,
      },
      {
        path: "resume",
        Component: Resume,
      },
      {
        path: "getintouch",
        Component: GetInTouch,
      },
    ],
  },
]);

const App = () => {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
};

export default App;
