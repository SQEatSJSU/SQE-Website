export type Member = {
  name: string;
  role: string;
  img: string;
  linkedin: string;
};

export const MEMBERS: Member[] = [
  {
    name: "Nicholas Parrilla",
    role: "President",
    img: "/members/nic.png",
    linkedin: "https://www.linkedin.com/in/nicholas-parrilla/",
  },
  {
    name: "Justin Oliver",
    role: "Vice President",
    img: "/members/justin.jpg",
    linkedin: "https://www.linkedin.com/in/justin-oliver-5a7958238/",
  },
  {
    name: "Alondra Torres Contreras",
    role: "Treasurer",
    img: "/members/alondra.jpeg",
    linkedin: "https://www.linkedin.com/in/alondra-torres-contreras-68a68b227/",
  },
  {
    name: "Chien-Chu (Charity) Wei",
    role: "Director",
    img: "/members/charity.jpg",
    linkedin: "https://www.linkedin.com/in/chien-chu-wei-837452232/",
  },
  {
    name: "Vaishnavi Rao",
    role: "Secretary",
    img: "/members/vishnavi.jpg",
    linkedin: "",
  },
  {
    name: "Abhishek Roy",
    role: "Technical Lead",
    img: "/members/roy.jpeg",
    linkedin: "https://www.linkedin.com/in/abhishek-roy737/",
  },
  {
    name: "Lucas Mendez",
    role: "R&D Committee Chair",
    img: "/members/lucas.jpeg",
    linkedin: "https://www.linkedin.com/in/lucasmendez1/",
  },
  {
    name: "Stephen Reagin",
    role: "Member",
    img: "/members/stephen.jpeg",
    linkedin: "https://www.linkedin.com/in/stephen-reagin-764007126/",
  },
  {
    name: "Raj Bhandari",
    role: "Member",
    img: "/members/raj.jpeg",
    linkedin: "https://www.linkedin.com/in/raj-bhandari-629b764/",
  },
  {
    name: "Ella Zeng",
    role: "Member",
    img: "/members/ella.jpeg",
    linkedin: "https://www.linkedin.com/in/ella-zeng-817952332/",
  },
  {
    name: "Kaveesh Passari",
    role: "Member",
    img: "/members/kaveesh.jpeg",
    linkedin: "https://www.linkedin.com/in/kaveesh-passari-393556200/",
  },
  {
    name: "Imran Bashir",
    role: "Member",
    img: "/members/imran.jpg",
    linkedin: "https://www.linkedin.com/in/imranbashir1/",
  },
  {
    name: "Andre Li",
    role: "Member",
    img: "/members/andre.png",
    linkedin: "https://www.linkedin.com/in/andre-li-8a4003155/",
  },
];

// Get the count of active members
export const getMemberCount = (): number => {
  return MEMBERS.length;
};

