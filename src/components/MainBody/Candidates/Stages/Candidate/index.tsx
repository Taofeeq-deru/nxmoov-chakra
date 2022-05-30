import {
  Box,
  Flex,
  Hide,
  Icon,
  IconButton,
  Show,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { IoIosMore, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { CandidateProps, tagColors } from "../../candidates";
import PhoneScreen from "./PhoneScreen";
import UserInfo from "./UserInfo";
import ViewCandidate from "./ViewCandidate";

type Props = {
  candidate: CandidateProps;
};

const Candidate: FC<Props> = ({ candidate }) => {
  const { name, tag, action, stars, timeframe, message, approved } = candidate;
  return (
    <Box
      bg="white"
      borderRadius="base"
      padding={{ base: "16px", lg: "12px" }}
      width={{ base: "100vw", md: "300px", lg: "200px" }}>
      <Flex alignItems={{ base: "flex-start", lg: "center" }}>
        <Hide below="lg">
          <Tag
            color={tagColors?.[tag]?.color}
            fontSize="xs"
            bg={tagColors?.[tag]?.bg}
            border="1px solid"
            borderColor={tagColors?.[tag]?.border}
            px="8px"
            textTransform="capitalize">
            {tag}
          </Tag>
        </Hide>
        <Show below="lg">
          <UserInfo name={name} tag={tag} action={action} stars={stars} />
        </Show>
        <IconButton
          aria-label="more"
          marginLeft="auto"
          variant="ghost"
          boxShadow="none"
          height="unset"
          icon={<IoIosMore fill="gray.500" />}
        />
      </Flex>
      <Hide below="lg">
        <UserInfo name={name} tag={tag} action={action} stars={stars} />
        <Flex flexDirection="column" gap="8px" alignItems="center">
          {approved ? (
            <Text
              fontSize="xs"
              color={approved === "true" ? "green.900" : "red.900"}
              casing="capitalize">
              {message}
            </Text>
          ) : null}
          {timeframe ? (
            <Text fontSize="xs" color="gray.900">
              {timeframe}
            </Text>
          ) : null}
          {approved ? (
            <Flex
              alignItems="center"
              justifyContent="center"
              width="36px"
              height="36px"
              borderRadius="100%"
              background={approved === "true" ? "green.100" : "red.100"}>
              <Icon
                as={approved === "true" ? IoMdThumbsUp : IoMdThumbsDown}
                color={approved === "true" ? "green.500" : "red.500"}
                width="24px"
                height="24px"
              />
            </Flex>
          ) : null}
        </Flex>
      </Hide>
      {action === "view" ? (
        <ViewCandidate />
      ) : action === "call" ? (
        <PhoneScreen />
      ) : null}
    </Box>
  );
};

export default Candidate;
