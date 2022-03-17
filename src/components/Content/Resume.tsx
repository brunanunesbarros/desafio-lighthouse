import { Flex, Button, Text, Show } from "@chakra-ui/react";
import { WiCloudy } from "react-icons/wi";

export function Resume() {
    return (
        <Flex
            bg="white"
            boxShadow="base"
            borderRadius="0.6rem"
            maxW="100%"
            h={{ base: "40px", lg: "60px"}}
            m="3rem 2rem"
            px={{ base: "0", lg: "2rem" }}
            justifyContent="space-between"
            alignItems="center"
            shadow="lg"
        >
            <Flex gap="2rem" w="100%" alignItems="center" justifyContent="center" color="gray.500">
                <Text fontSize={{ base: "0.8rem", lg: "1rem" }} fontWeight="semibold">SOMA DA GEE</Text>
                <Button _hover={{ hover: 'none' }}  w={{ base: "60px", lg: "100px"}} h={{ base: "60px", lg: "100px"}} borderRadius="50%" bg="#8aaf87">
                    <WiCloudy
                        size="100px"
                        color="#dddddd"
                    />
                </Button>
                <Text fontSize={{ base: "0.8rem", lg: "1.2rem" }}><strong>172.168 </strong>tCO2e</Text>
            </Flex>
            <Show above="lg">
                <Button variant="link" fontSize="0.8rem" fontWeight="normal">VER MAIS</Button>
            </Show>
        </Flex>
    );
}
