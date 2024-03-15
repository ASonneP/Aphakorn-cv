import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      // Optional: Customize the IconButton with Chakra UI props
      colorScheme={colorMode === "light" ? "purple" : "orange"}
      isRound={true}
      size="md"
    />
  );
};

export default ColorModeSwitcher;
