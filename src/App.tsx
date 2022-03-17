import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./home";
import '@fontsource/roboto/400.css'
import '@fontsource/open-sans/700.css'
import theme from "./utils/theme";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Home />
    </ChakraProvider>
);
