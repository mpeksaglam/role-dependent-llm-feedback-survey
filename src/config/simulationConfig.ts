export const simulationConfig = {
  /* Contains the simulation videos and the presentation type (single video or two at once) 
   Naming describes the name of the videos, not when they are presented (handled in scenarioConfig) */

  // Condition A videos, first round (scen1, 2, 3)
  sim_vid3: {
    id: "sim_vid3",
    title: "Video 3",
    type: "single",
    videoUrl: "/videos/video3.mp4",
  },

  sim_vid4: {
    id: "sim_vid4",
    title: "Video 4",
    type: "single",
    videoUrl: "/videos/video4.mp4",
  },

  sim_vids57: {
    id: "sim_vids57",
    title: "Videos 5 and 7",
    type: "comparison",
    videoUrls: ["/videos/video5.mp4", "/videos/video7.mp4"],
  },

  // Condition B videos, second round (scen1, 2, 3)
  sim_vid6: {
    id: "sim_vid6",
    title: "Video 6",
    type: "single",
    videoUrl: "/videos/video6.mp4",
  },

  sim_vid2: {
    id: "sim_vid2",
    title: "Video 2",
    type: "single",
    videoUrl: "/videos/video2.mp4",
  },

  sim_vids14: {
    id: "sim_vids14",
    title: "Videos 1 and 4",
    type: "comparison",
    videoUrls: ["/videos/video1.mp4", "/videos/video4.mp4"],
  },
} as const;
