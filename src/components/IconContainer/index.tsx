import { Grid, GridItem } from "@chakra-ui/react";
import { Icon } from "./Icon";

export function IconContainer() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      maxW={["1160px"]}
      w="100%"
      mx="auto"
      mt={["36px", "36px", "114px"]}
      gap={[1, 5]}
    >
      <GridItem >
        <Icon icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Icon icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Icon icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Icon icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Icon icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
