import { Flex } from "@chakra-ui/react";
import { ImageBanner } from "./ImageBanner";
import { TextBanner } from "./TextBanner";

export function Banner() {
  return (
    <Flex
      h="335px"
      bgImage='url("./images/Background.svg")'
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex align="center" w="100%" mx="140px" justify="space-between">
        <TextBanner />
        <ImageBanner />
      </Flex>
    </Flex>
  );
}
