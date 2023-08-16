import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} marginY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={10}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
