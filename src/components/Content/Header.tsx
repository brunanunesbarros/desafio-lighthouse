import { Button, Flex, Img, Show, Text } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="start"
            p="2rem"
        >
            <Flex w="100%" alignItems="center" justifyContent={{ base: "center", lg: "start"}} >
                <Img w="100px" src="./marvel-logo.png" alt="marvel logo" />
            </Flex>

            <Show above="lg">
                <Flex flexDir="column" w="100%" alignItems="end">
                    <Button
                        variant="outline"
                        w="20%"
                        borderRadius="1rem"
                        borderColor="gray.300"
                        color="gray.500"
                    >
                        Voltar
                    </Button>
                        <Flex pt="1rem" fontSize="0.75rem" color="gray.500">
                            <Text fontWeight="black" p="0 0.5rem">ÚLTIMA ATUALIZAÇÃO:</Text>{" "}
                            {new Date().toLocaleString() + ""}
                        </Flex>
                </Flex>
            </Show>
        </Flex>
    );
}
