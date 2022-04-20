import { Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { IconContainer } from "../components/IconContainer";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <IconContainer />
    </>
  );
}
