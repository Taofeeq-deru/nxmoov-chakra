import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <InputGroup width="unset">
      <InputLeftElement>
        <Icon as={IoIosSearch} />
      </InputLeftElement>
      <Input placeholder="Search" borderRadius="68px" maxWidth="300px" />
    </InputGroup>
  );
};

export default SearchInput;
