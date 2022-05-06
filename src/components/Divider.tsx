import { Box } from "@chakra-ui/react";

export function Divider() {
  return (
    <Box
      w={["60px", "90px"]}
      mx="auto"
      h="2px"
      bg="gray.500"
      my={["2", "20"]}
    />
  );
}
