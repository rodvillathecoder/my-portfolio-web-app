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
  Image,
} from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon, MinusIcon } from "@chakra-ui/icons";
import IconAll from "../assets/actualizar.png";
import { skillLists } from "./skill-list";
import { useState } from "react";

interface ModalSkillsProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SkillItem {
  id: number;
  name: string;
  level: "high" | "medium" | "low";
  icon: React.ReactElement;
}

const ModalSkills = ({ isOpen, onClose }: ModalSkillsProps) => {
  const [filter, setFilter] = useState<"high" | "medium" | "low" | "all">(
    "all"
  );
  const renderSkillList = (skills: SkillItem[]) => {
    const filteredSkills =
      filter === "all"
        ? skills
        : skills.filter((skill) => skill.level === filter);

    return (
      <List
        padding={"16px 2px"}
        spacing={8}
        stylePosition={"inside"}
        style={{ columnCount: 4 }}
      >
        {filteredSkills.map((skill) => (
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

  const handleFilterChange = (newFilter: "high" | "medium" | "low" | "all") => {
    setFilter(newFilter);
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
              gap={"25px"}
              alignContent={"center"}
              padding={"0 10px"}
            >
              <Flex
                justifyItems={"center"}
                alignItems={"center"}
                gap={"2px"}
                as={"button"}
                onClick={() => handleFilterChange("high")}
              >
                <TriangleUpIcon w={4} h={4} color={"green.500"} />
                <Text>High</Text>
              </Flex>
              <Flex
                justifyItems={"center"}
                alignItems={"center"}
                gap={"2px"}
                as={"button"}
                onClick={() => handleFilterChange("medium")}
              >
                <MinusIcon w={4} h={4} color={"orange.500"} />
                <Text>Medium</Text>
              </Flex>
              <Flex
                justifyItems={"center"}
                alignItems={"center"}
                gap={"2px"}
                as={"button"}
                onClick={() => handleFilterChange("low")}
              >
                <TriangleDownIcon w={4} h={4} color={"red.500"} />
                <Text>Low</Text>
              </Flex>
              <Flex
                justifyItems={"center"}
                alignItems={"center"}
                gap={"2px"}
                as={"button"}
                onClick={() => handleFilterChange("all")}
              >
                <Image src={IconAll} alt="all" w={4} h={4} />
                <Text>Reset filter</Text>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSkills;
