import { SimulationVideo } from "@/lib/types";

// Render simulationVideo
export function SimulationModule({ simVid }: { simVid: SimulationVideo }) {
  if (simVid.type === "single") {
    return (
      <video controls>
        <source src={simVid.videoUrl} />
      </video>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <video controls>
        <source src={simVid.videoUrls[0]} />
      </video>

      <video controls>
        <source src={simVid.videoUrls[1]} />
      </video>
    </div>
  );
}
