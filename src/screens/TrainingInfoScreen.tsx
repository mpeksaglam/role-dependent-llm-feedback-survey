import Image from "next/image";

export function TrainingInfoScreen() {
  return (
    <div className="max-w-5xl mx-auto px-10 space-y-12">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight border-b border-gray-100 pb-3">
          Beschreibung der Aufgabe
        </h2>

        <p>
          In den folgenden Szenarien wird ein teil-mobiler Arbeitsplatz für die
          Mensch-Roboter-Kollaboration betrachtet. Der Anwendungsfall umfasst
          die Verschraubung eines Stoßfängers an einem Chassis.
        </p>

        <div className="w-fit mx-auto py-2">
          <Image
            src="/images/workstation_overview.png"
            alt="Übersicht der Arbeitstools"
            width={600}
            height={333}
            priority
          />
          <p className="text-xs text-center text-gray-500 mt-2 font-serif">
            Abbildung 1: Bauteile und Hilfsmittel
          </p>
        </div>

        <p>
          Der Arbeitsplatz besteht aus einer Roboterzelle mit einem
          UR5e-Roboter, einem Schraubwerkzeug als Endeffektor sowie einer
          automatischen Schraubenzuführung. Eine Halterung, im Folgenden als
          <em className="italic"> Jig</em> bezeichnet, dient dazu, die Bauteile
          wiederholgenau für den Verschraubungsprozess zu positionieren. Die
          Interaktion mit dem System erfolgt über einen Freigabetaster
          beziehungsweise einen Lichttaster.
        </p>

        <p>
          In der Simulation wird ausschließlich ein ausgewählter Arbeitsschritt
          des Roboters dargestellt und bewertet: Der Roboter soll die Position
          des Jigs anfahren, um dort die Verschraubung des Stoßfängers am
          Chassis durchzuführen.
        </p>

        <div className="w-fit mx-auto py-2">
          <Image
            src="/images/process_step.png"
            alt="Dargestellter Prozessschritt"
            width={450}
            height={284}
            priority
          />
          <p className="text-xs text-center text-gray-500 mt-2 font-serif">
            Abbildung 2: Schematische Darstellung des Arbeitsschrittes
          </p>
        </div>

        <p>
          Das Chassis und der Stoßfänger selbst sind in der Simulation nicht
          sichtbar. Dargestellt werden lediglich der Roboter, der Arbeitsplatz,
          die Position des Jigs sowie die Schraubenzuführung. Bewerten Sie daher
          nur die in der Simulation gezeigte Roboterbewegung und das Anfahren
          der vorgesehenen Arbeitsposition.
        </p>
      </section>

      <section className="space-y-6 pt-4">
        <h2 className="text-xl font-semibold tracking-tight border-b border-gray-100 pb-3">
          Durchführung der Aufgabe
        </h2>

        <div className="space-y-4">
          <p>
            Bevor die eigentliche Untersuchung beginnt, bearbeiten Sie zunächst
            eine kurze Trainingsaufgabe. Diese hilft Ihnen dabei, sich mit dem
            Ablauf und der Bedienung vertraut zu machen.
          </p>

          <p>In der Trainingsaufgabe lernen Sie,</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>wie die Simulation dargestellt wird,</li>
            <li>wie die Schaltflächen bedient werden,</li>
            <li>wie Bewertungen abgegeben werden und</li>
            <li>
              wie das Chat- beziehungsweise Freitextfeld genutzt werden soll.
            </li>
          </ul>
        </div>
      </section>

      <div className="py-1 font-bold">
        <p>
          Die Trainingsaufgabe dient ausschließlich der Vorbereitung und wird
          nicht in die wissenschaftliche Auswertung einbezogen.
        </p>
      </div>
    </div>
  );
}
