import React from "react";
import { Icon, Text, VStack, Link } from "@chakra-ui/react";
import { cvData } from "../data/cvData";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const PersonalInfo = () => {
  const { personalInfo } = cvData;

  return (
    <VStack spacing={4} align="start">
      <Text fontSize="2xl" fontWeight="bold">
        {personalInfo.name}
      </Text>
      <Link href={`mailto:${personalInfo.email}`} isExternal color="teal.500">
        <Icon as={FaEnvelope} mr={2} />
        {personalInfo.email}
      </Link>
      <a href={`tel:${personalInfo.phoneNumber}`}>
        <Text>
          <Icon as={FaPhone} mr={2} />
          {personalInfo.phoneNumber}
        </Text>
      </a>

      <Link href={personalInfo.github} isExternal color="teal.500">
        <Icon as={FaGithub} mr={2} />
        ASonneP
      </Link>
    </VStack>
  );
};

export default PersonalInfo;
