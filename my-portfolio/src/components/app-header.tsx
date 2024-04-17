import { Link, useLocation } from "react-router-dom";
import { Flex, Text, Box } from "@chakra-ui/react";

const headBtnStyles = {
  backgroundColor: "transparent",
  border: "1px solid #E5E5E5",
  borderRadius: "1px",
  padding: "8px",
  width: "180px",
  height: "40px",
  justifyContent: "center",
  alignContent: "center",
  _hover: {
    cursor: "pointer",
  },
};

const textBtnStyles = {
  fontFamily: "Orbitron, sans-serif",
  color: "#E5E5E5",
  fontWeight: "bold",
  fontSize: "14px",
  textAlign: "center",
};

const selectedTextBtnStyles = {
  ...textBtnStyles,
  color: "#FCA311",
};

const MainHeader = () => {
  const location = useLocation();

  const isLinkSelected = (pathname: string) => {
    return location.pathname === pathname;
  };

  return (
    <Flex
      direction="row"
      width="100%"
      backgroundColor={"#000000"}
      height={"85px"}
      justifyContent={"space-between"}
      padding={"20px 120px"}
      background="linear-gradient(0deg, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 20%)"
    >
      <Flex direction="row" justifyContent="space-between" width="100%">
        <Box as="button">
          <Link to="/">
            <Box
              sx={
                isLinkSelected("/")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={isLinkSelected("/") ? selectedTextBtnStyles : textBtnStyles}
              >
                Home
              </Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/about-me">
            <Box
              sx={
                isLinkSelected("/about-me")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={
                  isLinkSelected("/about-me")
                    ? selectedTextBtnStyles
                    : textBtnStyles
                }
              >
                About Me
              </Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/work-experience">
            <Box
              sx={
                isLinkSelected("/work-experience")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={
                  isLinkSelected("/work-experience")
                    ? selectedTextBtnStyles
                    : textBtnStyles
                }
              >
                Work Experience
              </Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/education">
            <Box
              sx={
                isLinkSelected("/education")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={
                  isLinkSelected("/education")
                    ? selectedTextBtnStyles
                    : textBtnStyles
                }
              >
                Education
              </Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/certificate-courses">
            <Box
              sx={
                isLinkSelected("/certificate-courses")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={
                  isLinkSelected("/certificate-courses")
                    ? selectedTextBtnStyles
                    : textBtnStyles
                }
              >
                Certificate Courses
              </Text>
            </Box>
          </Link>
        </Box>
        <Box as="button">
          <Link to="/contact">
            <Box
              sx={
                isLinkSelected("/contact")
                  ? { ...headBtnStyles, backgroundColor: "#333333" }
                  : headBtnStyles
              }
            >
              <Text
                sx={
                  isLinkSelected("/contact")
                    ? selectedTextBtnStyles
                    : textBtnStyles
                }
              >
                Contact Me
              </Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
export default MainHeader;
