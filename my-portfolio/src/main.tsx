import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./context/app-context.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutMePage from "./pages/aboutme-page.tsx";

const rootElement = document.getElementById("root")!;
const root = (ReactDOM as any).createRoot(rootElement);
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/about-me", element: <AboutMePage /> },
      { path: "/work-experience", element: "<WorkExperience />" },
      { path: "/contact", element: "<ContactMe />" },
      { path: "/education", element: "<Education />" },
      { path: "/certificate-courses", element: "<CertificateCourses />" },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <ChakraProvider>
        <RouterProvider router={routes} />
      </ChakraProvider>
    </AppContextProvider>
  </React.StrictMode>
);
