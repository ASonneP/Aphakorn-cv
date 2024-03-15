import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { cvData } from "../data/cvData";

const Education = () => {
  return (
    <VStack spacing={4} align="start" mt="4">
      <Text fontSize="xl" fontWeight="bold">
        Education
      </Text>
      {cvData.education.map((edu, index) => (
        <Box key={index}>
          <Text fontWeight="bold">{edu.institution}</Text>
          <Text>
            {edu.degree}, {edu.startDate} - {edu.endDate}
          </Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Education;
