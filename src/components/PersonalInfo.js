import React from "react";
import { Icon, Text, VStack, Link, Avatar, Box, useColorModeValue } from "@chakra-ui/react";
import { cvData } from "../data/cvData";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const PersonalInfo = () => {
  const { personalInfo } = cvData;
  const desiredJobTitle = personalInfo.desiredJob;

  // Color that works for both light and dark mode
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <VStack spacing={4} align="start">
      <Box display="flex" justifyContent="center">
        <Avatar
          size="xl"

          boxSize="8rem"
          name={personalInfo.name}
          src={personalInfo.img}
        />
      </Box>
      <Text fontSize="2xl" fontWeight="bold">
        {personalInfo.name}
      </Text>
      <Text fontSize="lg" color={textColor}>
        {desiredJobTitle}
      </Text>
      <Link href={`mailto:${personalInfo.email}`} isExternal color="teal.500">
        <Icon as={FaEnvelope} mr={2} />
        {personalInfo.email}
      </Link>
      <Link href={`tel:${personalInfo.phoneNumber}`} isExternal color="teal.500">
        <Text>
          <Icon as={FaPhone} mr={2} />
          {personalInfo.phoneNumber}
        </Text>
      </Link>
      <Link href={personalInfo.github} isExternal color="teal.500">
        <Icon as={FaGithub} mr={2} />
        {personalInfo.githubUsername}
      </Link>
    </VStack>
  );
};

export default PersonalInfo;
