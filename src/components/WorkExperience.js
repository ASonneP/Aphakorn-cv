import React from "react";
import { Box, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { cvData } from "../data/cvData";

const WorkExperience = () => {
  return (
    <VStack spacing={4} align="start" mt="4">
      <Text fontSize="xl" fontWeight="bold">
        Work Experience
      </Text>
      {cvData.workExperience.map((work, index) => (
        <Box key={index}>
          <Text fontWeight="bold">{work.company}</Text>
          <Text>
            {work.title}, {work.startDate} - {work.endDate}
          </Text>
          <UnorderedList>
            {work.responsibilities.map((responsibility, i) => (
              <ListItem key={i}>{responsibility}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </VStack>
  );
};

export default WorkExperience;
