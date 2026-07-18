// ============================================================
// MEMBERS DATA — organized by semester, newest first
// ============================================================
//
// HOW TO ADD A NEW SEMESTER:
//   1. Create folder: public/members/<semester>/
//   2. Add a new key at the TOP of membersBySemester below
//   3. Add members with their roles, photos, and LinkedIn URLs
//
// HOW TO ADD A MEMBER:
//   1. Place their photo in public/members/<semester>/
//   2. Add them to the appropriate semester array
//   3. Set msqt: true if they are in the MSQT program
//
// ============================================================

export type Member = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
  msqt?: boolean;
};

export const membersBySemester: Record<string, Member[]> = {

  // ── 2026 FALL (upcoming) ──────────────────────────────────
  "Fall 2026": [
    {
      name: "Justin Oliver",
      role: "President",
      img: "/members/2026 Spring/justinoliver.JPG",
      linkedin: "https://www.linkedin.com/in/justin-oliver-5a7958238/",
      msqt: true,
    },
    {
      name: "Chetan Malik",
      role: "Vice President",
      img: "/members/2026 Fall/chetan.jpeg",
      linkedin: "https://www.linkedin.com/in/chetan-malik-6a639b30/",
      msqt: true,
    },
    {
      name: "Gabriele Nicula",
      role: "Treasurer",
      img: "/members/2026 Fall/nicula.jpg",
      linkedin: "https://www.linkedin.com/in/gabriele-nicula-9847241aa/",
      msqt: true,
    },
    {
      name: "Daman Singh",
      role: "Secretary",
      img: "/members/2026 Fall/daman.jpg",
      linkedin: "https://www.linkedin.com/in/daman-singh-63414728a/",
      msqt: true,
    },
    {
      name: "Abhishek Roy",
      role: "Project Manager",
      img: "/members/2026 Spring/abhishekroy.JPG",
      linkedin: "https://www.linkedin.com/in/abhishek-roy737/",
    },
    {
      name: "Mark Sotnikov",
      role: "Social Media Manager",
      img: "/members/2026 Fall/mark.jpg",
      linkedin: "https://www.linkedin.com/in/mark-sotnikov-a00152331/",
    },
    {
      name: "Stephen Reagin",
      role: "Member",
      img: "/members/2026 Spring/stephenreagin.JPG",
      linkedin: "https://www.linkedin.com/in/stephen-reagin-764007126/",
      msqt: true,
    },
    {
      name: "Gabriel Gaeta",
      role: "Member",
      img: "/members/2026 Spring/gabrielgaeta.JPG",
      linkedin: "https://www.linkedin.com/in/gabriel-gaeta/",
    },
    {
      name: "Vincent Le",
      role: "Member",
      img: "/members/2026 Spring/vincentle.JPG",
      linkedin: "https://www.linkedin.com/in/vvvle/",
      msqt: true,
    },
    {
      name: "Michael Chin",
      role: "Member",
      img: "/members/2026 Spring/mikechin.JPG",
      linkedin: "",
      msqt: true,
    },
  ],

  // ── 2026 SPRING ───────────────────────────────────────────
  "Spring 2026": [
    {
      name: "Justin Oliver",
      role: "President",
      img: "/members/2026 Spring/justinoliver.JPG",
      linkedin: "https://www.linkedin.com/in/justin-oliver-5a7958238/",
      msqt: true,
    },
    {
      name: "Alondra Torres Contreras",
      role: "Treasurer",
      img: "/members/2025 Fall/alondra.jpeg",
      linkedin: "https://www.linkedin.com/in/alondra-torres-contreras-68a68b227/",
      msqt: true,
    },
    {
      name: "Chien-Chu (Charity) Wei",
      role: "Director",
      img: "/members/2026 Spring/charitywei.JPG",
      linkedin: "https://www.linkedin.com/in/chien-chu-wei-837452232/",
      msqt: true,
    },
    {
      name: "Abhishek Roy",
      role: "Technical Lead",
      img: "/members/2026 Spring/abhishekroy.JPG",
      linkedin: "https://www.linkedin.com/in/abhishek-roy737/",
    },
    {
      name: "Lucas Mendez",
      role: "R&D Committee Chair",
      img: "/members/2026 Spring/lucasmendez.JPG",
      linkedin: "https://www.linkedin.com/in/lucasmendez1/",
      msqt: true,
    },
    {
      name: "Vaishnavi Rao",
      role: "Secretary",
      img: "/members/2026 Spring/vaishnavirao.JPG",
      linkedin: "",
      msqt: true,
    },
    {
      name: "Nicholas Parrilla",
      role: "Wormhole enthusiast",
      img: "/members/2025 Fall/nic.jpg",
      linkedin: "https://www.linkedin.com/in/nicholas-parrilla/",
    },
    {
      name: "Stephen Reagin",
      role: "Member",
      img: "/members/2026 Spring/stephenreagin.JPG",
      linkedin: "https://www.linkedin.com/in/stephen-reagin-764007126/",
      msqt: true,
    },
    {
      name: "Ella Zeng",
      role: "Member",
      img: "/members/2026 Spring/ellazeng.JPG",
      linkedin: "https://www.linkedin.com/in/ella-zeng-817952332/",
      msqt: true,
    },
    {
      name: "Andre Li",
      role: "Member",
      img: "/members/2026 Spring/andreli.JPG",
      linkedin: "https://www.linkedin.com/in/andre-li-8a4003155/",
      msqt: true,
    },
    {
      name: "Mariana Rojas-Montoya",
      role: "Member",
      img: "/members/2026 Spring/marianarojas-montoya.JPG",
      linkedin: "",
    },
    {
      name: "Gabriel Gaeta",
      role: "Member",
      img: "/members/2026 Spring/gabrielgaeta.JPG",
      linkedin: "https://www.linkedin.com/in/gabriel-gaeta/",
      msqt: true,
    },
    {
      name: "Rami Javier Husseini",
      role: "Member",
      img: "/members/2026 Spring/rami javierhusseini.jpeg",
      linkedin: "https://www.linkedin.com/in/rami-javier-husseini-70805029b/",
    },
    {
      name: "Vincent Le",
      role: "Member",
      img: "/members/2026 Spring/vincentle.JPG",
      linkedin: "https://www.linkedin.com/in/vvvle/",
      msqt: true,
    },
    {
      name: "Michael Chin",
      role: "Member",
      img: "/members/2026 Spring/mikechin.JPG",
      linkedin: "",
      msqt: true,
    },
    {
      name: "Lawrence Nguyen",
      role: "Member",
      img: "/members/2026 Spring/lawrencenguyen.JPG",
      linkedin: "",
      msqt: true,
    },
  ],

  // ── 2025 FALL ─────────────────────────────────────────────
  "Fall 2025": [
    {
      name: "Nicholas Parrilla",
      role: "President",
      img: "/members/2025 Fall/nic.jpg",
      linkedin: "https://www.linkedin.com/in/nicholas-parrilla/",
    },
    {
      name: "Justin Oliver",
      role: "Vice President",
      img: "/members/2025 Fall/justin.jpg",
      linkedin: "https://www.linkedin.com/in/justin-oliver-5a7958238/",
      msqt: true,
    },
    {
      name: "Alondra Torres Contreras",
      role: "Treasurer",
      img: "/members/2025 Fall/alondra.jpeg",
      linkedin: "https://www.linkedin.com/in/alondra-torres-contreras-68a68b227/",
      msqt: true,
    },
    {
      name: "Chien-Chu (Charity) Wei",
      role: "Director",
      img: "/members/2025 Fall/charity.jpg",
      linkedin: "https://www.linkedin.com/in/chien-chu-wei-837452232/",
      msqt: true,
    },
    {
      name: "Abhishek Roy",
      role: "Technical Lead",
      img: "/members/2025 Fall/roy.jpeg",
      linkedin: "https://www.linkedin.com/in/abhishek-roy737/",
    },
    {
      name: "Lucas Mendez",
      role: "R&D Committee Chair",
      img: "/members/2025 Fall/lucas.jpeg",
      linkedin: "https://www.linkedin.com/in/lucasmendez1/",
      msqt: true,
    },
    {
      name: "Vaishnavi Rao",
      role: "Secretary",
      img: "/members/2025 Fall/vishnavi.jpg",
      linkedin: "",
      msqt: true,
    },
    {
      name: "Stephen Reagin",
      role: "Member",
      img: "/members/2025 Fall/stephen.jpeg",
      linkedin: "https://www.linkedin.com/in/stephen-reagin-764007126/",
      msqt: true,
    },
    {
      name: "Ella Zeng",
      role: "Member",
      img: "/members/2025 Fall/ella.jpeg",
      linkedin: "https://www.linkedin.com/in/ella-zeng-817952332/",
      msqt: true,
    },
    {
      name: "Andre Li",
      role: "Member",
      img: "/members/2025 Fall/andre.jpg",
      linkedin: "https://www.linkedin.com/in/andre-li-8a4003155/",
      msqt: true,
    },
    {
      name: "Mariana Rojas-Montoya",
      role: "Member",
      img: "/members/2025 Fall/mariana.jpg",
      linkedin: "",
    },
    {
      name: "Imran Bashir",
      role: "Member",
      img: "/members/2025 Fall/imran.jpg",
      linkedin: "https://www.linkedin.com/in/imranbashir1/",
    },
    {
      name: "Raj Bhandari",
      role: "Member",
      img: "/members/2025 Fall/raj.jpeg",
      linkedin: "https://www.linkedin.com/in/raj-bhandari-629b764/",
    },
    {
      name: "Kaveesh Passari",
      role: "Member",
      img: "/members/2025 Fall/kaveesh.jpeg",
      linkedin: "https://www.linkedin.com/in/kaveesh-passari-393556200/",
    },
  ],
};

// Helper: all semester keys (newest first)
export const ALL_SEMESTERS = Object.keys(membersBySemester);

// Helper: current semester (first key)
export const CURRENT_SEMESTER = ALL_SEMESTERS[0];

// Helper: get members for current semester (used by home page count)
export const MEMBERS = membersBySemester[CURRENT_SEMESTER];

// Get the count of active members (current semester)
export const getMemberCount = (): number => {
  return MEMBERS.length;
};
