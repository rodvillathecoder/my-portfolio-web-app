import { Link } from "react-router-dom";
import { Flex, Text, Box } from "@chakra-ui/react";
// import { useContext, useEffect } from "react";
// import { AppContext } from "../context/app-context";

const headBtnStyles = {
  backgroundColor: "#E5E5E5",
  borderRadius: "10px",
  padding: "8px",
  width: "180px",
  height: "40px",
  justifyContent: "center",
  alignContent: "center",
  _hover: {
    backgroundColor: "#15F5BA",
    cursor: "pointer",
  },
};

const textBtnStyles = {
  fontFamily: "Orbitron, sans-serif",
  color: "#1985a1",
  fontWeight: "bold",
  fontSize: "14px",
  textAlign: "center",
};

const MainHeader = () => {
  // const { pathname } = useLocation();
  // const { isSelectedButton, setIsSelectedButton } = useContext(AppContext);

  // useEffect(() => {
  //   setIsSelectedButton({
  //     Home: pathname === "/",
  //     Github: pathname === "/github",
  //     LinkedIn: pathname === "/linkedin",
  //     CV: pathname === "/cv",
  //   });
  // }, [pathname, setIsSelectedButton]);

  return (
    <Flex
      direction="row"
      width="100%"
      backgroundColor={"#000000"}
      height={"95px"}
      justifyContent={"space-between"}
      padding={"20px 120px"}
      background="linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%)"
    >
      <Flex direction="row" justifyContent="space-between" width="100%">
        <Box as="button">
          <Link to="/">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>Home</Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/about-me">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>About Me</Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/work-experience">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>Work Experience</Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/education">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>Education</Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/certificate-courses">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>Certificate Courses</Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/contact">
            <Box sx={headBtnStyles}>
              <Text sx={textBtnStyles}>Contact Me</Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
export default MainHeader;
