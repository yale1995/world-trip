import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex justify="center" w="100%" h={["50px", "100px"]}>
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="1fr 1fr 1fr"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </Link>
        )}

        <Image
          w={["81px", "184px"]}
          src="./images/Logo.svg"
          gridColumn="2"
          justifySelf={"center"}
        />
      </Grid>
    </Flex>
  );
}
