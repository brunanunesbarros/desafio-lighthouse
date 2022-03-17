import { Button, Flex, Text } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { Badges } from "../Badge/Badges";

export function Filter() {
    return (
        <Flex
            w="100%"
            p={"0 2rem"}
            alignItems={{ base: "space-between", lg: "center" }}
            justifyContent="start"
            flexDir={{ base: "column", lg: "row" }}
        >
            <Flex minW="300px" m={{ base: "1rem 0", lg: "0"}} justifyContent={{ base: "space-between", lg: "inital" }}>
                <Text fontSize="1.5rem" fontWeight="bold" color="gray.500">
                    Resultado Geral
                </Text>
                <Button
                    w="90px"
                    m="0 1rem"
                    fontSize="0.8rem"
                    letterSpacing="0.5px"
                    _hover={{ bg: "red.700" }}
                    leftIcon={<FiFilter />}
                    bg="red.600"
                    color="white"
                    variant="solid"
                    borderRadius="1rem"
                    h="30px"
                >
                    Filtrar
                </Button>
            </Flex>
            <Badges />
        </Flex>
    );
}
