import { useSurvey } from "@/survey/engine/helpers/useSurvey";

export function OutroScreen() {
  const { state } = useSurvey();
  const consentRejected = state.answers["dsgvo_consent"] === "reject";
  if (consentRejected) {
    return (
      <div className="space-y-4 mt-30">
        <h2>Vielen Dank für Ihr Interesse.</h2>

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
      <h2>Vielen Dank für Ihre Teilnahme.</h2>
      <p>Ihre Antworten wurden erfolgreich übermittelt.</p>
    </div>
  );
}
