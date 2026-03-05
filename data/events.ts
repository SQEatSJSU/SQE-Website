// ============================================================
// EVENTS DATA — organized by cycle, most recent event FIRST
// ============================================================
//
// HOW TO ADD A NEW EVENT:
//   1. Place the event image in: public/community/<cycle>-cycle/
//   2. Add a new object to the appropriate cycle array below
//   3. Put it at the TOP of the array (most recent first)
//
// HOW TO ADD A NEW CYCLE:
//   1. Create the folder: public/community/<cycle>-cycle/
//   2. Add a new key below with an empty array
//   3. Add events as they happen
//
// ============================================================

export type Event = {
  id: number;
  image: string;
  title: string;
  speaker: string;
  date: string;        // e.g. "December 11, 2025"
  description: string;
};

export const eventsByCycle: Record<string, Event[]> = {

  // ── 2025-2026 CYCLE ── most recent at top ──────────────────
  "2025-2026": [
    {
      id: 7,
      image: "/community/2025-2026-cycle/unboxing.png",
      title: "General Meeting",
      speaker: "SQE Leadership Team",
      date: "February 5, 2026",
      description: "Club + officer introductions, overview of Spring 2026 plans, live unboxing of our quantum cryptography kit, and professional headshot photography for members. Duncan Hall, Room 343.",
    },
    {
      id: 6,
      image: "/community/2025-2026-cycle/iquhack.png",
      title: "iQuHACK 2026 — MIT Quantum Hackathon",
      speaker: "Justin Oliver, Abhishek Roy, and Chien-Chu Wei",
      date: "January 31 – February 1, 2026",
      description: "SQE members participated in-person at MIT's quantum hackathon, working on QuEra Computing's Technical Challenge — implementing the Steane Quantum Error Correction Code on QuEra's neutral-atom SDK, Bloqade.",
    },
    {
      id: 5,
      image: "/community/2025-2026-cycle/barttalk.png",
      title: "QuantWare's VIO 3D Architecture",
      speaker: "Bart Segers, QuantWare",
      date: "December 11, 2025",
      description: "A new approach to solving quantum scaling bottlenecks. MLK Library Room 213 (Hybrid).",
    },
    {
      id: 4,
      image: "/community/2025-2026-cycle/luistalk.png",
      title: "Quantum Information Science — From Transmon Qubits to Microwave Kinetic Inductance Detectors",
      speaker: "Dr. Luis Martinez, Lawrence Livermore National Laboratory",
      date: "November 17, 2025",
      description: "Cutting-edge research in quantum information science.",
    },
    {
      id: 3,
      image: "/community/2025-2026-cycle/ozgurtalk.png",
      title: "Trapped Ion Computing",
      speaker: "Özgür Şahin, UC Berkeley",
      date: "November 3, 2025",
      description: "The science behind Trapped Ion Computing and the challenges shaping the next generation of quantum tech.",
    },
    {
      id: 2,
      image: "/community/2025-2026-cycle/katietalk.png",
      title: "SQE Webinar",
      speaker: "Dr. Katherine Klymko",
      date: "October 27, 2025",
      description: "The session was recorded — join SQE and reach out to the leadership team to access the recording.",
    },
    {
      id: 1,
      image: "/community/2025-2026-cycle/alextalk.png",
      title: "\"Searching for Dark Matter Axions with Quantum Sensors\"",
      speaker: "Dr. Alex Droster, Stanford University & SLAC",
      date: "October 13, 2025",
      description: "First SQE seminar of the semester — Dr. Droster discussed his work using quantum sensors for dark matter detection.",
    },
  ],

  // ── 2026-2027 CYCLE ────────────────────────────────────────
  "2026-2027": [
    // Add events here, most recent first. Example:
    // {
    //   id: 1,
    //   image: "/community/2026-2027-cycle/speakername.png",
    //   title: "Talk Title",
    //   speaker: "Speaker Name, Affiliation",
    //   date: "Month Day, Year",
    //   description: "Short description of the event.",
    // },
  ],

  // ── 2027-2028 CYCLE ────────────────────────────────────────
  "2027-2028": [],
};

// Helper: get all cycle keys
export const ALL_CYCLES = Object.keys(eventsByCycle);
