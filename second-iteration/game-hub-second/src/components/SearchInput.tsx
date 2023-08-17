import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        backgroundColor={"gray.800"}
        boxShadow="dark-lg"
        borderRadius={25}
        variant="filled"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
