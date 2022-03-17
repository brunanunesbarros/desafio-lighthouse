import { Flex, Text } from "@chakra-ui/react";
import { IndicatorStatus } from "./IndicatorStatus";

interface FacilityCardProps {
  name: string;
  indicator: "good" | "bad" | "average"
}

export function FacilityCard({ name, indicator }: FacilityCardProps) {
    return (
        <Flex
            flexDir="column"
            justifyContent="space-around"
            maxW={"180px"}
            h={"150px"}
            w={"full"}
            bg="white"
            boxShadow={"2xl"}
            borderRadius="1.2rem"
        >
            <Text
                px="2rem"
                textAlign="center"
                fontWeight="bold"
                fontSize="1.2rem"
                color="gray.500"
            >
                {name}
            </Text>

            <IndicatorStatus indicator={indicator} />
        </Flex>
    );
}
