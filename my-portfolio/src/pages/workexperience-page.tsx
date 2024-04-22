//hacer un background 3d con three.js que responda al scroll del usuario.
//poner la experiencia en contenedores diferentes, en cada contenedor por <
//proyecto meter un expand accordion donde se muestre la info de cada proyecto <
//e imagenes de las apps.

import { Flex } from "@chakra-ui/react";
import ThreeBackground from "../components/three-background";

const WorkExperiencePage = () => {
  return (
    <Flex>
      <ThreeBackground />
    </Flex>
  );
};
export default WorkExperiencePage;
