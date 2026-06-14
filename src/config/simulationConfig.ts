export const simulationConfig = {
  sim_vid1: {
    id: "sim_vid1",
    title: "falscheLaufbahn",
    type: "single",
    videoUrl: "/videos/sim1.mp4",
  },

  sim_vids23: {
    id: "sim_vids23",
    title: "fastVsSlow",
    type: "comparison",
    videoUrls: ["/videos/sim1.mp4", "/videos/sim1.mp4"],
  },
} as const;
