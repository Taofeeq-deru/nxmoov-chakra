export type CandidateProps = {
  name: string;
  tag: "new" | "lead" | "prospect" | "applicant";
  action?: string;
  stars: number;
  timeframe?: string;
  message?: string;
  approved?: string;
};

export type StageProps = {
  stageName: string;
  color: string;
  candidates: CandidateProps[];
};

export const tagColors = {
  new: {
    bg: "#3E6EEB",
    border: "rgba(15, 49, 139, 0.2)",
    color: "#fff",
  },
  lead: {
    bg: "#F2EBFB",
    border: "#DAC6F4",
    color: "#7830D6",
  },
  prospect: {
    bg: "#EDF8FB",
    border: "#CDEAF4",
    color: "#21667C",
  },
  applicant: {
    bg: "#E8FAF5",
    border: "#BDF1E2",
    color: "#0F8E6A",
  },
};

export const candidates: StageProps[] = [
  {
    stageName: "sourcing",
    color: "#287CC9",
    candidates: [
      { name: "Miracle Dokidis", tag: "new", action: "view", stars: 0 },
      { name: "Maren Stanton", tag: "new", action: "view", stars: 0 },
      { name: "Allison Curtis", tag: "new", action: "view", stars: 0 },
      { name: "Allison Stanton", tag: "new", action: "view", stars: 0 },
      { name: "Miracle Stanton", tag: "new", action: "view", stars: 0 },
    ],
  },
  {
    stageName: "screening",
    color: "#6872E5",
    candidates: [
      {
        name: "Maren Stanton",
        tag: "lead",
        stars: 3,
        timeframe: "2 days ago",
        action: "call",
      },
      {
        name: "Eric Bana",
        tag: "applicant",
        stars: 3,
        timeframe: "2 days ago",
        action: "call",
      },
    ],
  },
  {
    stageName: "design challenge",
    color: "#EEA401",
    candidates: [
      {
        name: "Lee Vaccaro",
        tag: "prospect",
        stars: 3,
        timeframe: "2 days ago",
        approved: "true",
        message: "Challenge Sent",
      },
      {
        name: "Devin Townsend",
        tag: "prospect",
        stars: 3,
        timeframe: "2 days ago",
        approved: "false",
        message: "Disqualified",
      },
    ],
  },
  {
    stageName: "interview",
    color: "#507D7B",
    candidates: [
      {
        name: "Ann Donin",
        tag: "lead",
        stars: 3,
        timeframe: "2 days ago",
        action: "call",
      },
      {
        name: "Kevin Lee",
        tag: "applicant",
        stars: 3,
        timeframe: "2 days ago",
        approved: "false",
        message: "Disqualified",
      },
    ],
  },
  {
    stageName: "test",
    color: "#AB56B2",
    candidates: [
      {
        name: "Brianna Vetrovs",
        tag: "applicant",
        stars: 3,
        timeframe: "2 days ago",
        approved: "true",
        message: "Test Scheduled",
      },
    ],
  },
];
