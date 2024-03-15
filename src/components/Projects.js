import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { cvData } from "../data/cvData";

const Projects = () => {
  return (
    <VStack spacing={4} align="start" mt="4">
      <Text fontSize="xl" fontWeight="bold">
        Projects
      </Text>
      {cvData.projects.map((project, index) => (
        <Box key={index}>
          <Text fontWeight="bold">{project.name}</Text>
          <Text>{project.description}</Text>
          <Link href={project.link} isExternal color="teal.500">
            View Project
          </Link>
          <Text>Technologies: {project.technologies.join(", ")}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Projects;
