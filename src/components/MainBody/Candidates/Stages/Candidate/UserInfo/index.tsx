import { Avatar, Box, Flex, Heading, Icon, Show, Tag } from "@chakra-ui/react";
import {
  CandidateProps,
  tagColors,
} from "components/MainBody/Candidates/candidates";
import { FC } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const MAX_STARS = 5;

const UserInfo: FC<CandidateProps> = ({ name, stars, tag, action }) => {
  const renderStars = () => {
    let starsArr = [];
    if (action === "view") {
      for (let i = 1; i <= MAX_STARS; i++) {
        const star = <Icon as={IoIosStarOutline} color="#C0C9CC" />;
        starsArr.push(star);
      }
    } else {
      const checkedArr = [];
      const unCheckedArr = [];

      for (let i = 1; i <= stars; i++) {
        const star = <Icon as={IoIosStar} color="#EEA401" />;
        checkedArr.push(star);
      }

      for (let i = 1; i <= MAX_STARS - stars; i++) {
        const star = <Icon as={IoIosStarOutline} color="#EEA401" />;
        unCheckedArr.push(star);
      }

      starsArr = [...checkedArr, ...unCheckedArr];
    }

    return starsArr;
  };

  return (
    <Flex
      flexDirection={{ base: "row", lg: "column" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      gap={{ base: "10px", lg: "12px" }}>
      <Avatar size={{ base: "sm", lg: "md" }} name={name} />
      <Box>
        <Heading
          fontSize="md"
          color="gray.900"
          textTransform="capitalize"
          textAlign={{ base: "left", lg: "center" }}
          marginBottom="4px">
          {name}
        </Heading>
        <Flex flexDirection="row" gap="4px">
          {renderStars?.()}
        </Flex>
      </Box>
      <Show below="lg">
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
      </Show>
    </Flex>
  );
};

export default UserInfo;
