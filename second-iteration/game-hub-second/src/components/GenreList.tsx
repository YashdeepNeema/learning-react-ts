import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
            <Button
              fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              onClick={() => onSelectGenre(g)}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
