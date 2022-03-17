import {
    Flex,
    Box,
    Img,
    Text,
    Avatar,
    List,
    ListItem,
    ListIcon,
    Show
} from "@chakra-ui/react";
import { VscGraph } from "react-icons/vsc";
import { TiFlashOutline } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

export function Sidebar() {
    return (
        <Show above="lg">
            <Flex
                minHeight="100vh"
                bg="white"
                w={{ base: "200px", lg: "300px" }}
                flexDir="column"
                justifyContent="space-between"
                boxShadow="lg"
            >
                <Box w="100%">
                    <Flex justifyContent="center" mt="1rem">
                        <Img src="./logo.png" alt="logo" />
                    </Flex>

                    <List
                        p={{ base: "1rem", lg: "2rem 3rem" }}
                        spacing={8}
                        cursor="pointer"
                        color="gray.500"
                    >
                        <ListItem>
                            <Flex alignItems="center">
                                <ListIcon as={VscGraph} color="red.600" />
                                <Text fontWeight="semibold" color="black">
                                    GEE
                                </Text>
                            </Flex>
                        </ListItem>

                        <ListItem>
                            <Flex alignItems="center">
                                <ListIcon as={TiFlashOutline} />
                                <Text>Plano de Ação</Text>
                            </Flex>
                        </ListItem>

                        <ListItem>
                            <Flex alignItems="center">
                                <ListIcon as={IoIosNotificationsOutline} />
                                <Text>Notificação</Text>
                            </Flex>
                        </ListItem>

                        <ListItem>
                            <Flex alignItems="center">
                                <ListIcon as={FiLogOut} />
                                <Text>Sair</Text>
                            </Flex>
                        </ListItem>
                    </List>
                </Box>

                <Flex justifyContent="center" alignItems="center" m="2rem 0">
                    <Avatar
                        size="sm"
                        name="Kristine Muller"
                        src="https://bit.ly/dan-abramov"
                    />
                    <Flex
                        flexDir="column"
                        p={{ base: "0 0.2rem", lg: "0 1rem" }}
                        color="gray.500"
                    >
                        <Text fontWeight="extrabold">Kristine Muller</Text>
                        <Text fontSize="0.8rem">Ver Perfil</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Show>
    );
}
