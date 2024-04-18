import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ListItem,
  ListIcon,
  List,
  Text,
} from "@chakra-ui/react";
import {
  TriangleUpIcon,
  TriangleDownIcon,
  MinusIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { useMemo, useState } from "react";

interface ModalSkillsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SkillItem {
  id: number;
  name: string;
  level: "high" | "medium" | "low";
  icon: React.ReactElement;
}

const ModalSkills = ({ isOpen, onClose }: ModalSkillsProps) => {
  const [filter, setFilter] = useState<"high" | "medium" | "low" | "all">(
    "all"
  );

  const skillLists: { title: string; skills: SkillItem[] }[] = [
    {
      title: "Lenguajes",
      skills: [
        {
          id: 1,
          name: "JavaScript",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 2,
          name: "TypeScript",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 3,
          name: "HTML",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 4,
          name: "CSS",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 5,
          name: "GraphQL",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 6,
          name: "C#",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 7,
          name: "Java",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
        {
          id: 8,
          name: "Dart",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
      ],
    },
    {
      title: "Frameworks/Bibliotecas Frontend",
      skills: [
        {
          id: 1,
          name: "React",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 2,
          name: "NextJS",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 3,
          name: "React Native",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 4,
          name: "Material UI",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 5,
          name: "Chakra UI",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 6,
          name: "Tailwind",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 7,
          name: "Bootstrap",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 8,
          name: "Redux",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 9,
          name: "Three.js",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 10,
          name: "Pixi.js",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 11,
          name: "Flutter",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
      ],
    },
    {
      title: "Frameworks/Bibliotecas Backend",
      skills: [
        {
          id: 1,
          name: "NodeJS",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
        {
          id: 2,
          name: "Spring Boot",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
      ],
    },
    {
      title: "BDD y Data Management",
      skills: [
        {
          id: 1,
          name: "Firebase",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 2,
          name: "MySQL",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 3,
          name: "MongoDB",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
        {
          id: 4,
          name: "PostgreSQL",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
      ],
    },
    {
      title: "Despliegue y Desarrollo",
      skills: [
        {
          id: 1,
          name: "Vite",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 2,
          name: "Parcel",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 3,
          name: "Vercel",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 4,
          name: "Webpack",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
      ],
    },
    {
      title: "Testing",
      skills: [
        {
          id: 1,
          name: "Unit Testing",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 2,
          name: "e2e Testing",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 3,
          name: "Jest",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 4,
          name: "Cypress",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
      ],
    },
    {
      title: "Otros",
      skills: [
        {
          id: 1,
          name: "Agile Development",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 2,
          name: "Scrum/Kanban",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 3,
          name: "Git/GitHub/Gitflow",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 4,
          name: "Atlassian/Jira",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
        {
          id: 5,
          name: "Postman",
          level: "low",
          icon: <TriangleDownIcon w={4} h={4} color={"red.500"} />,
        },
        {
          id: 6,
          name: "PWA",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 7,
          name: "TDD",
          level: "medium",
          icon: <MinusIcon w={4} h={4} color={"orange.500"} />,
        },
        {
          id: 8,
          name: "CI/CD",
          level: "high",
          icon: <TriangleUpIcon w={4} h={4} color={"green.500"} />,
        },
      ],
    },
  ];

  // const filteredSkills = useMemo(() => {
  //   if (filter === "all") return skillLists.flatMap((list) => list.skills);
  //   return skillLists.flatMap((list) =>
  //     list.skills.filter((skill) => skill.level === filter)
  //   );
  // }, [filter]);

  const filteredSkills = useMemo(() => {
    if (filter === "all") return skillLists.flatMap((list) => list.skills);
    return skillLists
      .flatMap((list) => list.skills)
      .filter((skill) => skill.level === filter);
  }, [filter]);

  const renderSkillList = (skills: SkillItem[]) => {
    return (
      <List
        padding={"16px 2px"}
        spacing={8}
        stylePosition={"inside"}
        style={{ columnCount: 4 }}
      >
        {skills.map((skill) => (
          <ListItem key={skill.id}>
            <ListIcon
              as="svg"
              color={
                skill.level === "high"
                  ? "green.500"
                  : skill.level === "medium"
                  ? "orange.500"
                  : "red.500"
              }
            >
              {skill.icon}
            </ListIcon>
            {skill.name}
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInLeft"
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"#F3F9FB"}>
          <ModalHeader textAlign="center">My Skills</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex minH={"300px"} padding={"6px"}>
              <Flex>
                <Tabs colorScheme="yellow">
                  <TabList w={"100%"} display={"flex"}>
                    {skillLists.map((list, index) => (
                      <Tab key={index}>{list.title}</Tab>
                    ))}
                  </TabList>
                  <TabPanels
                    borderBottom={"1px solid #000000"}
                    borderRight={"1px solid #000000"}
                    borderLeft={"1px solid #000000"}
                    minHeight={"225px"}
                  >
                    {skillLists.map((list, index) => (
                      <TabPanel key={index}>
                        {renderSkillList(list.skills)}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Tabs>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex
              justifyContent={"center"}
              flexDirection={"row"}
              gap={"10px"}
              alignContent={"center"}
              padding={"0 10px"}
            >
              {["high", "medium", "low", "all"].map((level) => (
                <Flex
                  key={level}
                  justifyItems={"center"}
                  alignItems={"center"}
                  gap={"2px"}
                  as={"button"}
                  onClick={() =>
                    setFilter(level as "high" | "medium" | "low" | "all")
                  }
                >
                  {level === "high" && (
                    <TriangleUpIcon w={4} h={4} color={"green.500"} />
                  )}
                  {level === "medium" && (
                    <MinusIcon w={4} h={4} color={"orange.500"} />
                  )}
                  {level === "low" && (
                    <TriangleDownIcon w={4} h={4} color={"red.500"} />
                  )}
                  <Text>
                    {level === "all"
                      ? "All"
                      : `${level.charAt(0).toUpperCase()}${level.slice(
                          1
                        )} level`}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSkills;
