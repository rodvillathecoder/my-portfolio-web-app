import { TriangleUpIcon, TriangleDownIcon, MinusIcon } from "@chakra-ui/icons";
import { SkillItem } from "./modalSkills";

export const skillLists: { title: string; skills: SkillItem[] }[] = [
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
