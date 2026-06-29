type MessageScreenProps = {
  type: "trainingFinished" | "conditionSwitch";
};

export function MessageScreen({ type }: MessageScreenProps) {
  return (
    <div className="space-y-6 p-10 flex flex-col">
      {type === "trainingFinished" ? (
        <>
          <section className="space-y-4">
            <h3 className="text-lg font-bold mb-10">
              Beginn der eigentlichen Szenarien
            </h3>

            <p>
              Die Trainingsaufgabe ist nun abgeschlossen. In den folgenden
              Szenarien wird derselbe Arbeitsplatz mit derselben Aufgabe
              betrachtet, die Sie bereits aus der Trainingsaufgabe kennen.
            </p>

            <p>
              Bitte bewerten Sie weiterhin ausschließlich den jeweils gezeigten
              Roboterschritt in der Simulation.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold mb-10">
              Hinweis zur Bearbeitungszeit
            </h3>

            <p>
              In den nachfolgenden Aufgaben wird Ihre Bearbeitungszeit gemessen.
              Bitte bearbeiten Sie die Aufgaben daher{" "}
              <strong>zügig, aber dennoch sorgfältig.</strong>
            </p>
          </section>
        </>
      ) : (
        <>
          <section className="space-y-4">
            <h3 className="text-lg font-bold mb-10">
              Beginn des zweiten Aufgabenblocks
            </h3>

            <p>
              Die Fragebögen sind nun abgeschlossen. Im folgenden zweiten
              Aufgabenblock wird erneut derselbe Arbeitsplatz mit derselben
              Aufgabe betrachtet, die Sie bereits aus der Trainingsaufgabe und
              dem ersten Aufgabenblock kennen.
            </p>

            <p>
              Bitte bewerten Sie auch hier ausschließlich den jeweils gezeigten
              Roboterschritt in der Simulation.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold mb-10">
              Hinweis zur Bearbeitungszeit
            </h3>

            <p>
              Auch in den nachfolgenden Aufgaben wird Ihre Bearbeitungszeit
              gemessen. Bitte bearbeiten Sie die Aufgaben daher weiterhin{" "}
              <strong>zügig, aber dennoch sorgfältig.</strong>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
