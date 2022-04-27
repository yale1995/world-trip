import { Flex } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextContainer } from "./TextContainer";

export function Banner() {
  return (
    <Flex
      h={["163px", "250px", "335px"]}
      bgImage="url('./images/Background.svg')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        px="16px"
        align="center"
        maxW="1160px"
        w="100%"
        justify={["flex-start", "center", "center", "space-between"]}
        mx="auto"
      >
        <TextContainer />
        <ImageContainer />
      </Flex>
    </Flex>
  );
}
