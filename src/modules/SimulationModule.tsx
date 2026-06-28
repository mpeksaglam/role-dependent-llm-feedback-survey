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
                shadow-xl
                "
      >
        <source src={simVid.videoUrl} type="video/mp4" />
      </video>
    );
  }
  // Case two videos
  return (
    <div className="flex flex-col space-y-8 w-full max-w-3xl mx-auto">
      {/* Variant A */}
      <div className="space-y-2">
        <h3 className="text-md font-medium text-gray-900 px-1">Variante A</h3>
        <video
          controls
          preload="auto"
          playsInline
          className="                
          rounded-xl
          w-full
          object-contain
          shadow-md"
        >
          <source src={simVid.videoUrls[0]} type="video/mp4" />
        </video>
      </div>
      {/* Variant B */}
      <div className="space-y-2">
        <h3 className="text-md font-medium text-gray-900 px-1">Variante B</h3>
        <video
          controls
          preload="auto"
          playsInline
          className="                
          rounded-xl
          w-full
          object-contain
          shadow-md"
        >
          <source src={simVid.videoUrls[1]} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
