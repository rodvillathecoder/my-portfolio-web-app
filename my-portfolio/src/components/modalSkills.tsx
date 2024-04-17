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
import { TriangleUpIcon, TriangleDownIcon, MinusIcon } from "@chakra-ui/icons";

interface ModalSkillsProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSkills = ({ isOpen, onClose }: ModalSkillsProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInRight"
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"#E5E5E5"}>
          <ModalHeader textAlign="center">My Skills</ModalHeader>{" "}
          <ModalCloseButton />
          <ModalBody>
            <Flex minH={"300px"} padding={"6px"}>
              <Flex>
                <Tabs colorScheme="yellow">
                  <TabList w={"100%"} display={"flex"}>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Lenguajes
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Frameworks/Bibliotecas Frontend
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Frameworks/Bibliotecas Backend
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      BDD y Data Management
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Despliegue y Desarrollo
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Testing
                    </Tab>
                    <Tab
                      border={"1px solid #000000"}
                      _selected={{ backgroundColor: "rgba(20, 33, 61, 0.1)" }}
                      _active={{ backgroundColor: "orange" }}
                      flex={1}
                    >
                      Otros
                    </Tab>
                  </TabList>
                  <TabPanels
                    borderBottom={"1px solid #000000"}
                    borderRight={"1px solid #000000"}
                    borderLeft={"1px solid #000000"}
                    minHeight={"225px"}
                  >
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          JavaScript
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          TypeScript
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          HTML
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          CSS
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          GraphQL
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          C#
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Java
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Dart
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          React
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          NextJS
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          React Native
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Material UI
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Chakra UI
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Tailwind
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Bootstrap
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Redux
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Three.js
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Pixi.js
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Flutter
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          NodeJS
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Spring Boot
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Firebase
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          MySQL
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          MongoDB
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          PostgreSQL
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Vite
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Parcel
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Vercel
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Webpack
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Unit Testing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          e2e Testing
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Jest
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          Cypress
                        </ListItem>
                      </List>
                    </TabPanel>
                    <TabPanel>
                      <List
                        padding={"16px 2px"}
                        spacing={8}
                        stylePosition={"inside"}
                        style={{ columnCount: 4 }}
                      >
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Agile Development
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Scrum/Kanban
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Git/GitHub/Gitflow
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          Atlassian/Jira
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleDownIcon} color="red.500" />
                          Postman
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          PWA
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MinusIcon} color="orange.500" />
                          TDD
                        </ListItem>
                        <ListItem>
                          <ListIcon as={TriangleUpIcon} color="green.500" />
                          CI/CD
                        </ListItem>
                      </List>
                    </TabPanel>
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
              <Flex justifyItems={"center"} alignItems={"center"} gap={"2px"}>
                <TriangleUpIcon w={4} h={4} color={"green.500"} />
                <Text>High level</Text>
              </Flex>
              <Flex justifyItems={"center"} alignItems={"center"} gap={"2px"}>
                <MinusIcon w={4} h={4} color={"orange.500"} />
                <Text>Medium level</Text>
              </Flex>
              <Flex justifyItems={"center"} alignItems={"center"} gap={"2px"}>
                <TriangleDownIcon w={4} h={4} color={"red.500"} />
                <Text>Low level</Text>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSkills;
