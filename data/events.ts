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
      id: 8,
      image: "/community/2025-2026-cycle/martinis.jpg",
      title: "SQE Special Guest Meeting",
      speaker: "Dr. John Martinis (Nobel Laureate) and Alan Ho, CEO of Qolab",
      date: "April 22, 2026",
      description: "Dr. John Martinis, Nobel Laureate, and Alan Ho, CEO of Qolab, joined SQE for a special meeting. As leaders in the quantum industry, they inspired students by sharing insights on the future of quantum computing and answering thoughtful student questions.",
    },
    {
      id: 9,
      image: "/community/2025-2026-cycle/asfunding.jpg",
      title: "11th Annual Showcase Presentation",
      speaker: "Justin Oliver, Alondra Torres Contreras, Vaishnavi Rao, and Abhishek Roy",
      date: "April 21, 2026",
      description: "SQE members presented at the 11th Annual Showcase, demonstrating their Quantum Cryptography Thorlabs kit and sharing BB84 protocol research.",
    },
    {
      id: 7,
      image: "/community/2025-2026-cycle/unboxing.jpg",
      title: "General Meeting",
      speaker: "SQE Leadership Team",
      date: "February 5, 2026",
      description: "Club + officer introductions, overview of Spring 2026 plans, live unboxing of our quantum cryptography kit, and professional headshot photography for members. Duncan Hall, Room 343.",
    },
    {
      id: 6,
      image: "/community/2025-2026-cycle/iquhack.jpg",
      title: "iQuHACK 2026 — MIT Quantum Hackathon",
      speaker: "Justin Oliver, Abhishek Roy, and Chien-Chu Wei",
      date: "January 31 – February 1, 2026",
      description: "SQE members participated in-person at MIT's quantum hackathon, working on QuEra Computing's Technical Challenge — implementing the Steane Quantum Error Correction Code on QuEra's neutral-atom SDK, Bloqade.",
    },
    {
      id: 5,
      image: "/community/2025-2026-cycle/barttalk.jpg",
      title: "QuantWare's VIO 3D Architecture",
      speaker: "Bart Segers, QuantWare",
      date: "December 11, 2025",
      description: "A new approach to solving quantum scaling bottlenecks. MLK Library Room 213 (Hybrid).",
    },
    {
      id: 4,
      image: "/community/2025-2026-cycle/luistalk.jpg",
      title: "Quantum Information Science — From Transmon Qubits to Microwave Kinetic Inductance Detectors",
      speaker: "Dr. Luis Martinez, Lawrence Livermore National Laboratory",
      date: "November 17, 2025",
      description: "Cutting-edge research in quantum information science.",
    },
    {
      id: 3,
      image: "/community/2025-2026-cycle/ozgurtalk.jpg",
      title: "Trapped Ion Computing",
      speaker: "Özgür Şahin, UC Berkeley",
      date: "November 3, 2025",
      description: "The science behind Trapped Ion Computing and the challenges shaping the next generation of quantum tech.",
    },
    {
      id: 2,
      image: "/community/2025-2026-cycle/katietalk.jpg",
      title: "SQE Webinar",
      speaker: "Dr. Katherine Klymko",
      date: "October 27, 2025",
      description: "The session was recorded — join SQE and reach out to the leadership team to access the recording.",
    },
    {
      id: 1,
      image: "/community/2025-2026-cycle/alextalk.jpg",
      title: "\"Searching for Dark Matter Axions with Quantum Sensors\"",
      speaker: "Dr. Alex Droster, Stanford University & SLAC",
      date: "October 13, 2025",
      description: "First SQE seminar of the semester — Dr. Droster discussed his work using quantum sensors for dark matter detection.",
    },
  ],

  // ── 2026-2027 CYCLE ── most recent at top ──────────────────
  "2026-2027": [
    {
      id: 3,
      image: "/community/2026-2027-cycle/mckinney.png",
      title: "SQE Special Guest Meeting",
      speaker: "Jonathan McKinney, Chief of Technology, H2O.ai",
      date: "September 2, 2026",
      description: "SQE and Physics Club hosted a private Q&A with Jonathan McKinney, Chief of Technology at H2O.ai. A former University of Maryland physics professor, McKinney discussed his path from theoretical physics to AI research, graduate school, and careers in industry.",
    },
    {
      id: 2,
      image: "/community/2026-2027-cycle/firstmeeting.png",
      title: "General Meeting",
      speaker: "SQE Leadership Team",
      date: "August 28, 2026",
      description: "Club + officer introductions, an overview of the year ahead, a tour of the lab SQE has access to, and a coffee run to Philz.",
    },
    {
      id: 1,
      image: "/community/2026-2027-cycle/llnl.jpg",
      title: "Real-World Quantum Computing Workshop",
      speaker: "Gabriel Gaeta, Mark Sotnikov, and Justin Oliver",
      date: "August 20–21, 2026",
      description: "Gabriel, Mark, and Justin attended the two-day Real-World Quantum Computing workshop jointly hosted by Lawrence Livermore National Laboratory and San José State University in Livermore, covering opportunities and challenges in superconducting quantum hardware.",
    },
  ],

  // ── 2027-2028 CYCLE ────────────────────────────────────────
  // Hidden until needed — uncomment to show the tab again:
  // "2027-2028": [],
};

// Cycles with events, newest first (empty cycles stay in data until they have content)
export const ALL_CYCLES = Object.keys(eventsByCycle)
  .filter((cycle) => (eventsByCycle[cycle]?.length ?? 0) > 0)
  .reverse();

/** Default cycle (top of page / initial pill highlight) */
export const DEFAULT_CYCLE = ALL_CYCLES[0] ?? Object.keys(eventsByCycle).reverse()[0];
