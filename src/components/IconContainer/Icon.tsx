import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface IconProps {
  icon: string;
  text: string;
}

export function Icon({ icon, text }: IconProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} justify='center' align="center" w='100%'>
      {isMobile ? (
        <Image src={`./icons/${icon}.svg `} mb="24px" w="85px" h="85px" />
      ) : (
        <Image src={`./icons/Ellipse.svg `} mr='8px' />
      )}

      <Text color="gray.500" fontWeight={['500', '600']} fontSize={['18px','24px' ]}>{text}</Text>
    </Flex>
  );
}
