import { Flex, Text } from "@chakra-ui/react";

export function TextBanner() {
  return (
    <Flex display="block">
      <Text fontSize="36px" fontWeight="500" color="gray.100" mb='20px' lineHeight='54px'>
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text fontSize="20px" fontWeight="400" color="gray.300" lineHeight='30px'>
        Chegou a hora de tirar do papel a viagem que você
        <br />
        sempre sonhou.
      </Text>
    </Flex>
  );
}
