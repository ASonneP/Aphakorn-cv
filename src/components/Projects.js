import React from "react";
import { Box, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { cvData } from "../data/cvData";

const Projects = () => {
  return (
    <Box
      mt="4"
      p={5}
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <VStack spacing={4} align="start" mt="4">
        <Text fontSize="xl" fontWeight="bold">
          Projects
        </Text>
        {cvData.projects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
            <Text fontWeight="bold" fontSize="lg">
              {project.name}
            </Text>
            <Text>{project.description}</Text>
            {project.link && (
              <Text>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#319795" }}
                >
                  View Project
                </a>
              </Text>
            )}
            <Text fontWeight="bold">Technologies:</Text>
            <VStack align="start" mt="2">
              <UnorderedList listStyleType="square">
                {project.technologies.map((technology, techIndex) => (
                  <ListItem key={techIndex}>{technology}</ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
