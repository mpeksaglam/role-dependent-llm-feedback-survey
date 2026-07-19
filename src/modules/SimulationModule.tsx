import { SimulationVideo } from "@/lib/types";

interface SimulationModuleProps {
  simVid: SimulationVideo;
}

// Render simulationVideo
export function SimulationModule({ simVid }: SimulationModuleProps) {
  // Case single video
  if (simVid.type === "single") {
    return (
      <div className="aspect-video w-full rounded-xl bg-gray-100 shadow-lg">
        <video
          controls
          preload="auto"
          playsInline
          className="
                h-full
                w-full
                rounded-xl
                object-contain
                "
        >
          <source src={simVid.videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }
  // Case two videos
  return (
    <div className="space-y-10 w-full">
      {/* Variant A */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold pb-2">Variante A</h3>
        <div className="aspect-video w-full rounded-xl bg-gray-100 shadow-lg">
          <video
            controls
            preload="auto"
            playsInline
            className="                
                rounded-xl
                h-full
                w-full
                object-contain
                "
          >
            <source src={simVid.videoUrls[0]} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* Variant B */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold pb-2">Variante B</h3>
        <div className="aspect-video w-full rounded-xl bg-gray-100 shadow-lg">
          <video
            controls
            preload="auto"
            playsInline
            className="                
                rounded-xl
                h-full
                w-full
                object-contain
                "
          >
            <source src={simVid.videoUrls[1]} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
