export type CandidateProps = {
  name: string;
  tag: "new" | "lead" | "prospect" | "applicant";
  action?: string;
  stars: number;
  timeframe?: string;
  message?: string;
  approved?: string;
  img?: string;
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
      {
        name: "Miracle Dokidis",
        tag: "new",
        action: "view",
        stars: 0,
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_222_vedmws.png",
      },
      {
        name: "Maren Stanton",
        tag: "new",
        action: "view",
        stars: 0,
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_222_vedmws.png",
      },
      {
        name: "Allison Curtis",
        tag: "new",
        action: "view",
        stars: 0,
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_224_bmp1de.png",
      },
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
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_223_1_bm98mj.png",
      },
      {
        name: "Eric Bana",
        tag: "applicant",
        stars: 3,
        timeframe: "2 days ago",
        action: "call",
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_223_uf786l.png",
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
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_222_vedmws.png",
      },
      {
        name: "Devin Townsend",
        tag: "prospect",
        stars: 3,
        timeframe: "2 days ago",
        approved: "false",
        message: "Disqualified",
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913751/Rectangle_224_2_i7meyd.png",
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
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913737/Rectangle_224_1_mpwa0r.png",
      },
      {
        name: "Kevin Lee",
        tag: "applicant",
        stars: 3,
        timeframe: "2 days ago",
        approved: "false",
        message: "Disqualified",
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913641/Rectangle_223_uf786l.png",
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
        img: "https://res.cloudinary.com/taofeeq/image/upload/v1653913753/Rectangle_223_2_uv7llu.png",
      },
    ],
  },
];
