import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // or 'dark' if you want dark mode by default
  useSystemColorMode: false, // set to true if you want to use the system color mode
};

const theme = extendTheme({ config });

export default theme;
