import { useSurvey } from "@/survey/engine/helpers/useSurvey";

export function OutroScreen() {
  const { state } = useSurvey();
  const consentRejected = state.answers["dsgvo_consent"] === "reject";
  if (consentRejected) {
    return (
      <div className="space-y-4 mt-30">
        <h1>Vielen Dank für Ihr Interesse.</h1>

        <p>
          Da Sie der Teilnahme nicht zugestimmt haben, wird die Umfrage nicht
          durchgeführt.
        </p>
        <p>Sie können dieses Fenster nun schließen.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-30">
      <h1>Vielen Dank für Ihre Teilnahme.</h1>
      <p>Ihre Antworten wurden erfolgreich übermittelt.</p>
    </div>
  );
}
