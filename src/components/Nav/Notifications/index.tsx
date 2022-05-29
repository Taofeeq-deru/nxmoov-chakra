import { IconButton } from "@chakra-ui/react";
import { IoIosAdd, IoIosNotifications } from "react-icons/io";

const Notifications = () => {
  return (
    <>
      <IconButton
        aria-label="Notifications"
        variant="outline"
        colorScheme="gray.200"
        filter="drop-shadow(0px 2px 2px rgba(23, 25, 26, 0.06))"
        isRound
        height="40px"
        width="40px"
        icon={<IoIosNotifications fontSize="24px" />}
      />
      <IconButton
        aria-label="Add"
        colorScheme="primary.500"
        isRound
        height="40px"
        width="40px"
        icon={<IoIosAdd fontSize="32px" />}
      />
    </>
  );
};

export default Notifications;
