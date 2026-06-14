import { SimulationVideo } from "@/lib/types";

// make sure to employ unique descriptive IDs i.e. sim_task1...
/* TODO aufteilen in genauere Arrays von videos damit flow später
   leicht zu steuern ist */
// umbenennen in simulationBank / videoBank ? Speicherung hier?

export const simulationConfig: SimulationVideo[] = [
  {
    id: "sim_vid1",
    title: "falscheLaufbahn",
    type: "single",
    videoUrl: "/videos/sim1.mp4",
  },
  /* TODO: insert more videos */
  {
    id: "sim_vids23",
    title: "fastVsSlow",
    type: "comparison",
    videoUrls: ["/videos/sim1.mp4", "/videos/sim1.mp4"],
  },
];
