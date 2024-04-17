import { Box, Text, Flex, Image, Tooltip } from "@chakra-ui/react";
import Citado1 from "../assets/cita.png";
import Citado2 from "../assets/cita-a-la-derecha.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import Arhivo from "../assets/archivo.png";

const headTextStyle = {
  fontSize: "60px",
  fontWeight: 700,
  textAlign: "center",
};

const textStyle = {
  fontSize: "1.5rem",
  color: "#E5E5E5",
  fontWeight: 600,
};

const HomePage = () => {
  const handleClickGithub = () => {
    window.open("https://github.com/rodvillathecoder", "_blank");
  };

  const handleClickLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/raul-rodriguez-villarrasa-a466b0256/",
      "_blank"
    );
  };

  const handleClickCV = () => {
    window.open(process.env.PUBLIC_URL + "/Raul Rodriguez Professional CV.pdf");
  };
  return (
    <Box position="relative" padding="5rem">
      <Flex
        position={"absolute"}
        top={"-25%"}
        left={"-40%"}
        opacity={"20%"}
      ></Flex>
      <Box position="relative">
        <Text sx={headTextStyle} color={"#E5E5E5"} marginBottom="3.5rem">
          Raúl Rodríguez
        </Text>
        <Flex
          flexDirection={"row"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Text sx={headTextStyle} color={"#FCA311"}>
            Frontend&nbsp;
          </Text>
          <Text sx={headTextStyle} color={"#E5E5E5"}>
            Developer
          </Text>
        </Flex>
        <Flex
          flexDirection={"row"}
          marginTop={"4.75rem"}
          justifyContent={"space-around"}
          p={1}
          alignContent={"center"}
        >
          <Tooltip label="Visita mi GitHub" fontSize="md">
            <Flex
              w={"50px"}
              h={"50px"}
              as="button"
              sx={{
                "& img": {
                  filter:
                    "invert(90%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                },
                "&:hover img": {
                  filter:
                    "invert(75%) sepia(60%) saturate(600%) hue-rotate(-20deg) brightness(100%) contrast(100%)",
                },
              }}
              onClick={handleClickGithub}
            >
              <Image src={Github} alt="Github" boxSize={"50px"} />
            </Flex>
          </Tooltip>
          <Tooltip label="Visita mi LinkedIn" fontSize="md">
            <Flex
              w={"50px"}
              h={"50px"}
              as="button"
              sx={{
                "& img": {
                  filter:
                    "invert(90%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                },
                "&:hover img": {
                  filter:
                    "invert(75%) sepia(60%) saturate(600%) hue-rotate(-20deg) brightness(100%) contrast(100%)",
                },
              }}
              onClick={handleClickLinkedIn}
            >
              <Image src={LinkedIn} alt="LinkedIn" boxSize={"50px"} />
            </Flex>
          </Tooltip>
          <Tooltip label="Descarga mi CV" fontSize="md">
            <Flex
              p={1}
              w={"50px"}
              h={"50px"}
              as="button"
              sx={{
                "& img": {
                  filter:
                    "invert(90%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
                },
                "&:hover img": {
                  filter:
                    "invert(75%) sepia(60%) saturate(600%) hue-rotate(-20deg) brightness(100%) contrast(100%)",
                },
              }}
              onClick={handleClickCV}
            >
              <Image src={Arhivo} alt="Archivo" boxSize={"40px"} />
            </Flex>
          </Tooltip>
        </Flex>
        <Flex marginTop={"6rem"} flexDirection={"column"}>
          <Box position={"absolute"} left={"-10%"} opacity={"40%"}>
            <Image
              src={Citado1}
              alt="Cita"
              boxSize={"50px"}
              sx={{
                filter:
                  "invert(90%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
              }}
            />
          </Box>
          <Text
            sx={textStyle}
            marginTop="3rem"
            marginBottom="2.5rem"
            noOfLines={4}
            maxWidth={"900px"}
          >
            ¡Hola! Esta es mi web app personal donde puedes aprender más sobre
            mi experiencia, formación y habilidades.
            <br /> Puedes encontrar el repositorio de este proyecto en mi
            GitHub.
          </Text>
          <Box
            position={"absolute"}
            right={"-5%"}
            bottom={"0%"}
            opacity={"40%"}
          >
            <Image
              src={Citado2}
              alt="Cita2"
              boxSize={"50px"}
              sx={{
                filter:
                  "invert(90%) sepia(10%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
