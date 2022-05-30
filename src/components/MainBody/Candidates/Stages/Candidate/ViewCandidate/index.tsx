import { Button, Flex } from "@chakra-ui/react";
import { IoMdEye } from "react-icons/io";

const ViewCandidate = () => {
  return (
    <Flex width="100%" justifyContent="center" marginTop="12px">
      <Button
        width={{ base: "100%", lg: "unset" }}
        leftIcon={<IoMdEye />}
        variant="tertiary"
        size="sm">
        View Candidate
      </Button>
    </Flex>
  );
};

export default ViewCandidate;
