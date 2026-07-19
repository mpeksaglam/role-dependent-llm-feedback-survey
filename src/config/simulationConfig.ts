export const simulationConfig = {
  training: {
    id: "training",
    title: "Trainingsvideo",
    type: "single",
    videoUrl: "/videos/video3.mp4",
  },

  round1: {
    scenario1: {
      id: "sim_vid3",
      title: "Video 3",
      type: "single",
      videoUrl: "/videos/video3.mp4",
    },

    scenario2: {
      id: "sim_vid4",
      title: "Video 4",
      type: "single",
      videoUrl: "/videos/video4.mp4",
    },

    scenario3: {
      id: "sim_vids57",
      title: "Videos 5 and 7",
      type: "comparison",
      videoUrls: ["/videos/video5.mp4", "/videos/video7.mp4"],
    },
  },

  round2: {
    scenario1: {
      id: "sim_vid6",
      title: "Video 6",
      type: "single",
      videoUrl: "/videos/video6.mp4",
    },

    scenario2: {
      id: "sim_vid2",
      title: "Video 2",
      type: "single",
      videoUrl: "/videos/video2.mp4",
    },

    scenario3: {
      id: "sim_vids14",
      title: "Videos 1 and 4",
      type: "comparison",
      videoUrls: ["/videos/video1.mp4", "/videos/video4.mp4"],
    },
  },
} as const;
