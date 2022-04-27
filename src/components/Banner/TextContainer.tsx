import { Flex, Text } from "@chakra-ui/react";

export function TextContainer() {
  return (
    <Flex display="block" color="gray.100" alignItems="center">
      <Text
        fontSize={["20px", "36px"]}
        fontWeight={["500px"]}
        lineHeight={["30px", "54px"]}
      >
        5 Continentes, <br /> infinitas possibilidades.
      </Text>
      <Text
        fontSize={["14px", "20px"]}
        fontWeight={["400px"]}
        lineHeight={["21px", "30px"]}
        maxW={["333px", "333px", "524px"]}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Flex>
  );
}
