import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(./images/banner.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "start"]}
    >
      <Flex maxW={'1160px'} w='100%' mx={['10px','10px','-120px','-120px','auto']}>
      <Heading
        textAlign={["center", "center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
      </Flex>
    </Flex>
  );
}
