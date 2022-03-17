import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentProps {
    children: ReactNode
}

export function Content({ children}: ContentProps ) {
    return (
        <Box w={{ base: "100vw", lg: "100%"}} minH="100vh">
            {children}
        </Box>
    );
}
