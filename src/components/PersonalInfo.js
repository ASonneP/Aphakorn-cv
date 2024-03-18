import React from "react";
import {
  Icon,
  Text,
  VStack,
  Link,
  Avatar,
  Box,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { cvData } from "../data/cvData";
import { FaGithub, FaEnvelope, FaPhone, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../images/Me.png";

const PersonalInfo = () => {
  const { personalInfo } = cvData;
  const desiredJobTitle = personalInfo.desiredJob;

  // Color that works for both light and dark mode
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      p={5}
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <VStack spacing={4} align="start">
        <Box display="flex" justifyContent="center">
          <Avatar
            size="xl"
            boxSize="8rem"
            name={personalInfo.name}
            src={profileImg}
          />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">
          {personalInfo.name}
        </Text>
        <Text fontSize="lg" color={textColor}>
          {desiredJobTitle}
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <Link
            href={`mailto:${personalInfo.email}`}
            isExternal
            color="teal.500"
          >
            <Icon as={FaEnvelope} mr={2} />
            {personalInfo.email}
          </Link>
          <Link
            href={`tel:${personalInfo.phoneNumber}`}
            isExternal
            color="teal.500"
          >
            <Text display="flex" alignItems="center">
              <Icon as={FaPhone} mr={2} />
              {personalInfo.phoneNumber}
            </Text>
          </Link>
          <Link href={personalInfo.github} isExternal color="teal.500">
            <Text display="flex" alignItems="center">
              <Icon as={FaGithub} mr={2} />
              {personalInfo.githubUsername}
            </Text>
          </Link>
          <Link href={personalInfo.leetcode} isExternal color="teal.500">
            <Text display="flex" alignItems="center">
              <Icon as={SiLeetcode} mr={2} />
              {personalInfo.leetcodeUsername}
            </Text>
          </Link>
          <Link href={personalInfo.hackerrank} isExternal color="teal.500">
            <Text display="flex" alignItems="center">
              <Icon as={FaHackerrank} mr={2} />
              {personalInfo.hackerrankUsername}
            </Text>
          </Link>
        </Grid>
      </VStack>
    </Box>
  );
};

export default PersonalInfo;
