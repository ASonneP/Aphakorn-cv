import React from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import { Box, useColorModeValue } from "@chakra-ui/react";
// import Projects from "./Projects";
import ColorModeSwitcher from "./ColorModeSwitcher";

const App = () => {
  // Dynamically set the background color based on the current color mode
  const bgColor = useColorModeValue("gray.100", "gray.700"); // Example: light mode uses gray.100, dark mode uses gray.700

  return (
    <Box minH="100vh">
      <Box padding="4" position="fixed" right="1rem" top="1rem">
        <ColorModeSwitcher />
      </Box>
      <Box padding="4" bg={bgColor} minH="100vh">
        <PersonalInfo />
        <Education />
        <WorkExperience />
        <Skills />

        {/* <Projects /> */}
      </Box>
    </Box>
  );
};

export default App;
