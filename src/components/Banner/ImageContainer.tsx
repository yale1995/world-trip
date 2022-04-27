import { Flex, Image } from "@chakra-ui/react";

export function ImageContainer() {
  return (
    <Flex>
      <Image
        src="./images/Airplane.svg"
        transform="translateY(48px)"
        display={["none","none","none","block"]}
        w='417px'
      />
    </Flex>
  );
}
