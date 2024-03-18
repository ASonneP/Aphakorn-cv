import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { cvData } from "../data/cvData";

const WorkExperience = () => {
  const [showWorkExperience, setShowWorkExperience] = useState(true);

  const toggleWorkExperience = () => {
    setShowWorkExperience(!showWorkExperience);
  };

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
        <Box display="flex" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Work Experience
          </Text>
          <Button onClick={toggleWorkExperience} variant="link" size="sm">
            {showWorkExperience ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </Box>
        {showWorkExperience && (
          <>
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
          </>
        )}
      </VStack>
    </Box>
  );
};

export default WorkExperience;
