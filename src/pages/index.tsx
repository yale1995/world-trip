import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { IconContainer } from "../components/IconContainer";
import { Slider } from "../components/Slider/Slider";

export default function Home() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
  };

  return (
    <>
      <Header />
      <Banner />
      <IconContainer />
      <Divider />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Slider settings={settings}>
        <SwiperSlide>
          <Link href="/continent">
            <Flex
              h={["250px", "250px", "450px"]}
              align="center"
              justify="center"
              direction="column"
              bgImage="url(/images/europe.png)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                color="gray.100"
                fontWeight="bold"
              >
                Europa
              </Text>
              <Text
                fontWeight="bold"
                color="gray.100"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                O continente mais antigo
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="http://www.yalearaujo.com.br">
            <Flex
              h={["250px", "250px", "450px"]}
              align="center"
              justify="center"
              direction="column"
              bgImage="url(/images/europe.png)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                color="gray.100"
                fontWeight="bold"
              >
                Yale Araújo
              </Text>
              <Text
                fontWeight="bold"
                color="gray.100"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                Front-End Developer
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="http://www.yalearaujo.com.br">
            <Flex
              h={["250px", "250px", "450px"]}
              align="center"
              justify="center"
              direction="column"
              bgImage="url(/images/europe.png)"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                color="gray.100"
                fontWeight="bold"
              >
                Me contrate
              </Text>
              <Text
                fontWeight="bold"
                color="gray.100"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                yale850@gmail.com
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
      </Slider>
    </>
  );
}
