import { useSurvey } from "@/survey/engine/helpers/useSurvey";

export function OutroScreen() {
  const { state } = useSurvey();
  const consentRejected = state.answers["dsgvo_consent"] === "reject";
  if (consentRejected) {
    return (
      <div className="max-w-5xl mx-auto px-6 pt-16 flex flex-col flex-1 justify-center items-center min-h-[60vh] space-y-12">
        <div className="max-w-2xl space-y-10 text-center">
          <h2 className="text-md">Vielen Dank für Ihr Interesse.</h2>

          <p>
            Da Sie der Teilnahme nicht zugestimmt haben, wird die Umfrage nicht
            durchgeführt.
          </p>
          <p>Sie können dieses Fenster nun schließen.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 flex flex-col flex-1 justify-center items-center min-h-[60vh] text-center text-gray-900">
      <div className="max-w-2xl space-y-10 text-center">
        <h2 className="text-md">Vielen Dank für Ihre Teilnahme.</h2>
        <p>Die Antworten wurden erfolgreich übermittelt.</p>
      </div>
    </div>
  );
}
