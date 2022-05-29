import {
  CalendarIcon,
  CandidatesIcon,
  CareerSiteIcon,
  DashboardIcon,
  HelpIcon,
  InboxIcon,
  JobsIcon,
  SettingsIcon,
  UpdatesIcon,
} from "icons";

export type MenuProps = {
  title: string;
  icon: (e?: any) => JSX.Element;
  active: boolean;
  unread?: number;
};

export const menuList: MenuProps[] = [
  {
    title: "updates",
    icon: UpdatesIcon,
    active: false,
  },
  {
    title: "jobs",
    icon: JobsIcon,
    active: true,
  },
  {
    title: "dashboard",
    icon: DashboardIcon,
    active: false,
  },
  {
    title: "calendar",
    icon: CalendarIcon,
    active: false,
  },
  {
    title: "inbox",
    icon: InboxIcon,
    active: false,
    unread: 2,
  },
  {
    title: "candidates",
    icon: CandidatesIcon,
    active: false,
  },
  {
    title: "career site",
    icon: CareerSiteIcon,
    active: false,
  },
];

export const extraMenu: MenuProps[] = [
  {
    title: "settings",
    icon: SettingsIcon,
    active: false,
  },
  {
    title: "help",
    icon: HelpIcon,
    active: false,
  },
];
