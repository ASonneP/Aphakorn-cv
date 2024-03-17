import React, { useRef } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Tooltip,
  useColorModeValue,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import ColorModeSwitcher from './ColorModeSwitcher';
import html2pdf from 'html2pdf.js';

const App = () => {
  const contentRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const downloadPDF = () => {
    html2pdf().from(contentRef.current).set({
      margin: 10,
      filename: 'aphakorn-cv.pdf',
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compressPDF: true,
      },
    }).save();
  };

  return (
    <Box minH="100vh">
      <Stack direction="row" spacing={2} padding="4" position="fixed" right="1rem" top="1rem">
        {/* Tooltip wrapping the IconButton */}
        <Tooltip hasArrow label="Switch to light mode for best PDF" placement="left">
          <IconButton
            icon={<DownloadIcon />}
            isRound
            onClick={downloadPDF}
            aria-label="Download CV"
            size="md"
            color="gray.800"
            bg="white"
            _hover={{
              bg: 'gray.200',
              transform: prefersReducedMotion ? undefined : 'scale(1.1)',
            }}
            boxShadow="base"
          />
        </Tooltip>
        <ColorModeSwitcher />
      </Stack>

      <Flex direction="column" alignItems="center" justifyContent="center" padding="4" bg={useColorModeValue('gray.100', 'gray.700')} minH="100vh">
        <Box ref={contentRef} width="full" maxWidth="800px">
          <PersonalInfo />
          <Education />
          <Skills />
          <WorkExperience />
         
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
