import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="center" h="100px">
      <Flex>
        <Image w="184px" src="./images/Logo.svg" />
      </Flex>
    </Flex>
  );
}
