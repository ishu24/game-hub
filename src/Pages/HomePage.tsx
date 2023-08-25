import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //mobile
        lg: `"aside main"`, //wide than 1024px
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading></GameHeading>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector></PlatformSelector>
          <SortSelector></SortSelector>
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
