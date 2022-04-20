import { Flex, Image, Text } from "@chakra-ui/react";


interface NewIconProps {
    icon: string,
    text: string
}

export function NewIcon({icon, text}: NewIconProps) {
    return (
        <Flex direction='column' align="center">
            <Image w="85px" h="85px" mb="6" src={`./icons/${icon}.svg`}/>
            <Text fontWeight='600' fontSize='24px' color='gray.500'>{text}</Text>
        </Flex>
    )
}