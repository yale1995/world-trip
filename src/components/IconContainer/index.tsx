import { Grid, GridItem } from "@chakra-ui/react";
import { NewIcon } from "./NewIcon";

export function IconContainer() {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      maxW="1160px"
      w="100%"
      mx="auto"
      mt="32"
      gap='91px'
    >
      <GridItem w='158px'>
        <NewIcon text="vida noturna" icon="cocktail"></NewIcon>
      </GridItem>
      <GridItem w='158px'> 
        <NewIcon text="praia" icon="surf"></NewIcon>
      </GridItem>
      <GridItem w='158px'>
        <NewIcon text="moderno" icon="building"></NewIcon>
      </GridItem>
      <GridItem w='158px'>
        <NewIcon text="clássico" icon="museum"></NewIcon>
      </GridItem>
      <GridItem w='158px'>
        <NewIcon text="e mais..." icon="earth"></NewIcon>
      </GridItem>
    </Grid>
  );
}
