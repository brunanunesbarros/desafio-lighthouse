import { Show, Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";

export function BottomBarMobile() {
    return (
        <Show below="md">
            <HStack
                w="100vw"
                bg="white"
                h="80px"
                justifyContent="space-around"
                alignItems="center"
                shadow="lg"
                fontSize="0.8rem"
                position="sticky"
                bottom="0"
            >
                <Flex color="red.600" flexDir="column" alignItems="center">
                  <Icon fontSize="1.5rem" as={VscGraph} />
                  <Text>GEE</Text>
                </Flex>

                <Flex color="gray.500" flexDir="column" alignItems="center">
                  <Icon fontSize="1.5rem" as={IoIosNotificationsOutline} />
                  <Text>Notificação</Text>
                </Flex>

                <Flex color="gray.500" flexDir="column" alignItems="center">
                  <Icon fontSize="1.5rem" as={TiFlashOutline} />
                  <Text>Plano de Ação</Text>
                </Flex>

                <Flex color="gray.500" flexDir="column" alignItems="center">
                  <Icon fontSize="1.5rem" as={FiLogOut} />
                  <Text>Sair</Text>
                </Flex>
            </HStack>
        </Show>
    );
}
