import React from "react";
import { Box, Text, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { cvData } from "../data/cvData";

const Skills = () => {
  return (
    <Box mt="4">
      <Text fontSize="xl" fontWeight="bold" mb="2">
        Skills
      </Text>
      <Wrap>
        {cvData.skills.map((skill, index) => (
          <WrapItem key={index}>
            <Tag size="md" variant="solid" colorScheme="teal">
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Skills;
