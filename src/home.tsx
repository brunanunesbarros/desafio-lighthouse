import { Flex, Text } from "@chakra-ui/react";
import { Facilities } from "./components/Facility/Facilities";
import { Content } from "./components/Content/Content";
import { Resume } from "./components/Content/Resume";
import { Filter } from "./components/Content/Filter";
import { Header } from "./components/Content/Header";
import { Sidebar } from "./components/Sidebar";
import { TopBarMobile } from "./components/TopBarMobile";
import { BottomBarMobile } from "./components/BottomBarMobile";

export function Home() {
    return (
        <Flex maxW="100vw" minH="100vh">
            <Sidebar />
            <Content>
                <TopBarMobile />
                <Header />
                <Filter />
                <Resume />
                <Flex p="0 2rem" flexDir="column">
                    <Text
                        mb="2rem"
                        fontSize="1.5rem"
                        fontWeight="bold"
                        color="gray.500"
                    >
                        Facility
                    </Text>
                    <Facilities />
                </Flex>
                <BottomBarMobile />
            </Content>
        </Flex>
    );
}
