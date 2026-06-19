import { SimulationVideo } from "@/lib/types";

interface SimulationModuleProps {
  simVid: SimulationVideo;
}

// Render simulationVideo
export function SimulationModule({ simVid }: SimulationModuleProps) {
  if (simVid.type === "single") {
    return (
      <video
        controls
        className="
                rounded-2xl
                w-full
                h-full
                object-contain
                "
      >
        <source src={simVid.videoUrl} />
      </video>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <video
        controls
        className="                
          rounded-2xl
          w-full
          h-full
          object-contain"
      >
        <source src={simVid.videoUrls[0]} />
      </video>

      <video
        controls
        className="                
          rounded-2xl
          w-full
          h-full
          object-contain"
      >
        <source src={simVid.videoUrls[1]} />
      </video>
    </div>
  );
}
