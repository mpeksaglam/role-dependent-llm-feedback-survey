import { SimulationTask } from "@/lib/types"


// make sure to employ unique descriptive IDs i.e. sim_task1...


export const simulationTasks: SimulationTask[] = [
  {
    id: "task1",
    type: "single",
    videoUrl: "/videos/sim1.mp4",
  },
  /* TODO: insert more tasks */
  {
    id: "task3",
    type: "comparison",
    videoUrls: ["/videos/sim1.mp4", "/videos/sim1.mp4"]
  }
];