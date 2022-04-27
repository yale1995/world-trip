import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="center" w='100%' h={["50px", "100px"]}>
      <Flex>
        <Image w={["81px", "184px"]} src="./images/Logo.svg" />
      </Flex>
    </Flex>
  );
}
