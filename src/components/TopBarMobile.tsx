import { Show, Flex, Img } from "@chakra-ui/react";

export function TopBarMobile() {
  return (
    <Show below="md">
      <Flex bg="white" h="80px" justifyContent="center" shadow="lg">
        <Img src="./logo.png" alt="logo" />
      </Flex>
    </Show>
  )
}