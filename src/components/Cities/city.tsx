import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

interface CityProps {
    country: string,
    city: string,
    image: string,
    flag: string
}

export function City({country, city, image, flag}: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={`./images/${image}.png`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Image src={`./images/${flag}.png`} w="30px" h="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  );
}
