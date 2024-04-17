import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import Photo from "../assets/foto.jpg";
import ModalSkills from "../components/modalSkills";

const AboutMePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMounted2, setIsMounted2] = useState(false);
  const mount = useRef<HTMLDivElement>(null);
  const mount2 = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isMounted) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      const loader = new GLTFLoader();

      renderer.setSize(150, 150);
      renderer.setClearColor(0x000000, 0);
      mount.current?.appendChild(renderer.domElement);

      loader.load(
        "/react_logo.glb",
        (gltf) => {
          scene.add(gltf.scene);
          camera.position.z = 5;

          const animate = () => {
            requestAnimationFrame(animate);
            gltf.scene.rotation.y += 0.01;
            renderer.render(scene, camera);
          };

          animate();
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
    }
    setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    if (isMounted2) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      renderer.setSize(250, 250);
      renderer.setClearColor(0x000000, 0);
      mount2.current?.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(2, 70, 70);
      const material = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load("/earth_map.jpg"),
      });
      const sphere = new THREE.Mesh(geometry, material);
      const pointLight = new THREE.PointLight(0xffffff, 30, 100);
      pointLight.position.set(10, 5, 10);
      const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambientLight, pointLight);
      scene.add(sphere);
      camera.position.z = 5;
      camera.position.x = -2.5;

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
      };

      animate();
    }
    setIsMounted2(true);
  }, [isMounted2]);
  console.log("::::::aboutme-page.tsx TM isMounted2", isMounted2);

  const textStyle = {
    fontSize: "1.2rem",
    color: "#E5E5E5",
    fontWeight: 600,
  };

  return (
    <Flex flexDirection={"column"} gap={"4rem"}>
      <Flex position={"absolute"} right={"15%"} top={"20%"}>
        <img
          src={Photo}
          alt="Raul Rodriguez Villarrasa"
          style={{
            borderRadius: "10px",
            width: "21.875rem",
            height: "34.375rem",
            border: "1px solid #E5E5E5",
          }}
        />
      </Flex>
      <Flex
        flexDirection={"row"}
        backgroundColor={"rgba(20, 33, 61, 0.3)"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5rem"}
        gap={"2rem"}
        border={"1px solid #E5E5E5"}
        borderRadius={"0.625rem"}
        maxW={"52rem"}
        maxH={"17rem"}
        left={"10%"}
        top={"18%"}
        position={"absolute"}
      >
        <Text sx={textStyle}>
          Soy un Frontend Developer con dos años de experiencia especializado en
          React. Con un perfil proactivo y resolutivo, me mantengo en constante
          aprendizaje y desarrollo, tanto de mis soft-skills como de mis
          hard-skills. Esto me permite afrontar retos con una mentalidad
          positiva y no temerle a aprender nuevas tecnologías.
        </Text>
        <Flex>
          <div ref={mount} />
        </Flex>
      </Flex>
      <Flex
        flexDirection={"row"}
        backgroundColor={"rgba(20, 33, 61, 0.3)"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"5rem"}
        gap={"2rem"}
        border={"1px solid #E5E5E5"}
        borderRadius={"0.625rem"}
        maxW={"52rem"}
        maxH={"15rem"}
        left={"10%"}
        position={"absolute"}
      >
        <Text sx={textStyle}>
          Tengo un nivel de inglés profesional ya que estoy acostumbrado a
          trabajar en un entorno internacional, con equipo y clientes de todas
          partes del mundo, trabajando con una metodología ágil SCRUM.
        </Text>
        <Flex>
          <div ref={mount2} />
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        backgroundColor={"rgba(20, 33, 61, 0.3)"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"1rem"}
        gap={"1rem"}
        border={"1px solid #E5E5E5"}
        borderRadius={"0.625rem"}
        maxW={"22rem"}
        maxH={"7rem"}
        right={"21%"}
        position={"absolute"}
        marginTop={"18rem"}
        as={"button"}
        onClick={onOpen}
      >
        <Text sx={textStyle}>Show Skills</Text>
      </Flex>
      <ModalSkills isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default AboutMePage;
