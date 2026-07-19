type MessageScreenProps = {
  type: "trainingFinished" | "conditionSwitch";
};

export function MessageScreen({ type }: MessageScreenProps) {
  return (
    <div className="max-w-5xl mx-auto px-10 pt-16 flex flex-col flex-1 justify-center items-center min-h-[60vh] space-y-12">
      {type === "trainingFinished" ? (
        <div className="max-w-2xl space-y-8">
          <section className="space-y-5">
            <div className="text-center">
              <h2 className="text-md font-semibold mb-10">Erste Runde</h2>

              <h2 className="text-md font-semibold">
                Beginn der eigentlichen Szenarien
              </h2>
            </div>
            <div className="space-y-4 text-left leading-relaxed">
              <p>
                Die Trainingsaufgabe ist nun abgeschlossen. In den folgenden
                Szenarien wird derselbe Arbeitsplatz mit derselben Aufgabe
                betrachtet, die Sie bereits aus der Trainingsaufgabe kennen.
              </p>

              <p>
                Bitte bewerten Sie weiterhin ausschließlich den jeweils
                gezeigten Roboterschritt in der Simulation.
              </p>
              <p>
                Beachten Sie zudem, dass das grafische Interface unterschiedlich
                aussehen kann und Fragen mit Likert-Skala und/oder ein
                Chatfenster zeigen kann. Klicken Sie auf "Weiter", sobald Sie
                Feedback gegeben haben und die Interpretation Ihres Feedbacks
                zufriedenstellend ist.
              </p>
            </div>
          </section>

          <section className="space-y-5 pt-5">
            <h2 className="text-center text-md font-semibold">
              Hinweis zur Bearbeitungszeit
            </h2>
            <div className="space-y-4 text-left leading-relaxed">
              <p>
                In den nachfolgenden Aufgaben wird Ihre Bearbeitungszeit
                gemessen. Bitte bearbeiten Sie die Aufgaben daher{" "}
                <span className="font-bold">
                  zügig, aber dennoch sorgfältig.
                </span>
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div className="max-w-2xl space-y-8">
          <section className="space-y-5">
            <div className="text-center">
              <h2 className="text-md font-semibold mb-10">Zweite Runde</h2>

              <h2 className="text-md font-semibold">
                Beginn des zweiten Aufgabenblocks
              </h2>
            </div>
            <div className="space-y-4 text-left leading-relaxed">
              <p>
                Die Fragebögen sind nun abgeschlossen. Im folgenden zweiten
                Aufgabenblock wird erneut derselbe Arbeitsplatz mit derselben
                Aufgabe betrachtet, die Sie bereits aus der Trainingsaufgabe und
                dem ersten Aufgabenblock kennen.
              </p>

              <p>
                Bitte bewerten Sie auch hier ausschließlich den jeweils
                gezeigten Roboterschritt in der Simulation.
              </p>
              <p>
                Beachten Sie zudem, dass das grafische Interface unterschiedlich
                aussehen kann und Fragen mit Likert-Skala und/oder ein
                Chatfenster zeigen kann. Klicken Sie auf "Weiter", sobald Sie
                Feedback gegeben haben und die Interpretation Ihres Feedbacks
                zufriedenstellend ist.
              </p>
            </div>
          </section>

          <section className="space-y-5 pt-5">
            <h2 className="text-center text-md font-semibold">
              Hinweis zur Bearbeitungszeit
            </h2>
            <div className="space-y-4 text-left leading-relaxed">
              <p>
                Auch in den nachfolgenden Aufgaben wird Ihre Bearbeitungszeit
                gemessen. Bitte bearbeiten Sie die Aufgaben daher weiterhin{" "}
                <span className="font-bold">
                  zügig, aber dennoch sorgfältig.
                </span>
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
