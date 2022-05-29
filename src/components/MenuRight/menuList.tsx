import { ReactElement } from "react";
import {
  IoMdCheckmarkCircle,
  IoIosFolderOpen,
  IoMdPaper,
} from "react-icons/io";

export type RigthMenuProps = {
  title: string;
  colorScheme: string;
  icon: () => ReactElement;
};

export const rightMenuList: RigthMenuProps[] = [
  {
    title: "tasks",
    colorScheme: "green.600",
    icon: () => <IoMdCheckmarkCircle fontSize="24px" />,
  },
  {
    title: "notes",
    colorScheme: "warning",
    icon: () => <IoMdPaper fontSize="24px" />,
  },
  {
    title: "folders",
    colorScheme: "#6872E5",
    icon: () => <IoIosFolderOpen fontSize="24px" />,
  },
];
