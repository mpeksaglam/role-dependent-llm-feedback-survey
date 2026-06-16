import { SimulationModule } from "@/modules/SimulationModule";

export function TrainingInfoScreen() {
  // actual training is handled in ScenarioScreen
  return (
    <div className="space-y-4 p-10 flex flex-col">
      <h3 className="text-lg font-bold mb-4">Trainingsaufgabe</h3>
      <p>
        Bevor die eigentliche Untersuchung beginnt, bearbeiten Sie zunächst eine
        kurze Trainingsaufgabe. Diese hilft Ihnen dabei, sich mit dem Ablauf und
        der Bedienung vertraut zu machen.
      </p>
      <p> In der Trainingsaufgabe lernen Sie,</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>wie die Simulation dargestellt wird,</li>
        <li>wie die Schaltflächen bedient werden,</li>
        <li>wie Bewertungen abgegeben werden und</li>
        <li>wie das Chat- beziehungsweise Freitextfeld genutzt werden soll.</li>
      </ul>
      <p className="font-bold">
        Die Trainingsaufgabe dient ausschließlich der Vorbereitung und wird
        nicht ausgewertet.
      </p>
      <p>
        Hinweis zur Bearbeitungszeit: In den nachfolgenden Aufgaben wird Ihre
        Bearbeitungszeit gemessen. Bitte bearbeiten Sie die Aufgaben daher
        zügig, aber dennoch sorgfältig.
      </p>
    </div>
  );
}
