import { SimulationVideo } from "@/lib/types";

interface SimulationModuleProps {
  simVid: SimulationVideo;
}

// Render simulationVideo
export function SimulationModule({ simVid }: SimulationModuleProps) {
  // Case single video
  if (simVid.type === "single") {
    return (
      <video
        controls
        preload="auto"
        playsInline
        className="
                rounded-xl
                w-full
                h-full
                object-contain
                shadow-lg
                "
      >
        <source src={simVid.videoUrl} type="video/mp4" />
      </video>
    );
  }
  // Case two videos
  return (
    <div className="space-y-10 w-full">
      {/* Variant A */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold pb-2">Variante A</h3>
        <video
          controls
          preload="auto"
          playsInline
          className="                
          rounded-xl
          w-full
          object-contain
          shadow-lg"
        >
          <source src={simVid.videoUrls[0]} type="video/mp4" />
        </video>
      </div>
      {/* Variant B */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold pb-2">Variante B</h3>
        <video
          controls
          preload="auto"
          playsInline
          className="                
          rounded-xl
          w-full
          object-contain
          shadow-lg"
        >
          <source src={simVid.videoUrls[1]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
