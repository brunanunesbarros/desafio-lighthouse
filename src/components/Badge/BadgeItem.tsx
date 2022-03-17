import { WrapItem, Button, Flex, Text } from "@chakra-ui/react";
import { VscChromeClose } from "react-icons/vsc";

interface BadgeItemProps {
  name: string;
  value: string;
}

export function BadgeItem({ name, value }: BadgeItemProps) {
    return (
        <WrapItem>
            <Button
                borderRadius="0.2rem"
                h="25px"
                size="sm"
                bg="#e9e8e9"
                fontWeight="none"
                w="100%"
            >
                <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Text color="#858585" fontSize="0.8rem" fontWeight="extrabold" paddingRight="0.2rem">
                        {name}:
                    </Text>
                    <Text color="#858585" fontSize="0.8rem" paddingRight="0.4rem">{value}</Text>
                    <VscChromeClose />
                </Flex>
            </Button>
        </WrapItem>
    );
}
