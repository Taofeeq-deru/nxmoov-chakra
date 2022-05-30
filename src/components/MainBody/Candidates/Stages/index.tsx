import { Button, Flex, Progress, Show } from "@chakra-ui/react";
import { FC } from "react";
import { IoIosAdd } from "react-icons/io";
import { StageProps } from "../candidates";
import Candidate from "./Candidate";
import StageName from "./StageName";

type Props = {
  stage: StageProps;
  amount: number;
  index: number;
};

const Stages: FC<Props> = ({ stage, amount, index }) => {
  const { stageName, color, candidates } = stage;
  const progress = Math.round(((index + 1) / amount) * 100);
  return (
    <Flex flexDirection="column" key={index}>
      <StageName stageName={stageName} candidates={candidates} color={color} />
      <Show below="lg">
        <Progress hasStripe value={progress} />
      </Show>
      <Flex
        flexDirection="column"
        gap={{ base: "12px", lg: "16px" }}
        marginTop={{ base: "16px", lg: "10px" }}
        overflowY="scroll"
        height="calc(100vh - 440px)"
        sx={{
          scrollbarWidth: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        {candidates?.map((candidate, i) => (
          <Candidate candidate={candidate} key={i} />
        ))}
        <Button
          leftIcon={<IoIosAdd stroke="gray.500" />}
          variant="tertiary"
          width={{ base: "100%", md: "300px", lg: "200px" }}
          size="sm">
          Add Candidate
        </Button>
      </Flex>
    </Flex>
  );
};

export default Stages;
