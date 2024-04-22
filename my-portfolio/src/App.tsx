import "./App.css";

import { Flex } from "@chakra-ui/react";

import BackgroundImage from "./assets/synthwave-green-grid-art.jpg";
import MainHeader from "./components/app-header";
import HomePage from "./pages/home-page";
import { useLocation } from "react-router-dom";
import AboutMePage from "./pages/aboutme-page";
import WorkExperiencePage from "./pages/workexperience-page";

function App() {
  const location = useLocation();
  const homePage = location.pathname === "/";
  const aboutMePage = location.pathname === "/about-me";
  const workExperiencePage = location.pathname === "/work-experience";

  return (
    <Flex
      className="hide-scrollbar"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        position: "fixed",
        overflow: "auto",
      }}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Flex position="fixed" width="100%" zIndex="100" top={0}>
        <MainHeader />
      </Flex>
      <Flex paddingTop={"7rem"} justifyContent={"center"}>
        {homePage && <HomePage />}
        {aboutMePage && <AboutMePage />}
        {workExperiencePage && <WorkExperiencePage />}
      </Flex>
    </Flex>
  );
}

export default App;
