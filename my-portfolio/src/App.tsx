import "./App.css";

import { Flex } from "@chakra-ui/react";

import BackgroundImage from "./assets/synthwave-green-grid-art.jpg";
import MainHeader from "./components/app-header";
import HomePage from "./pages/home-page";

function App() {
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
        <HomePage />
      </Flex>
    </Flex>
  );
}

export default App;
