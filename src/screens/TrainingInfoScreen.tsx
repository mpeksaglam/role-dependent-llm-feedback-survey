import Image from "next/image";

export function TrainingInfoScreen() {
  return (
    <div className="max-w-4xl mx-auto px-10 py-8 space-y-10">
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Beschreibung der Aufgabe</h2>

        <p>
          In den folgenden Szenarien wird ein teil-mobiler Arbeitsplatz für die
          Mensch-Roboter-Kollaboration betrachtet. Der Anwendungsfall umfasst
          die Verschraubung eines Stoßfängers an einem Chassis.
        </p>

        <Image
          src="/images/workstation_overview.png"
          alt="Übersicht des Arbeitsplatzes"
          width={900}
          height={500}
          className="rounded-lg border"
        />

        <p>
          Der Arbeitsplatz besteht aus einer Roboterzelle mit einem
          UR5e-Roboter, einem Schraubwerkzeug als Endeffektor sowie einer
          automatischen Schraubenzuführung. Eine Halterung, im Folgenden als
          <em> Jig </em> bezeichnet, dient dazu, die Bauteile wiederholgenau für
          den Verschraubungsprozess zu positionieren. Die Interaktion mit dem
          System erfolgt über einen Freigabetaster beziehungsweise einen
          Lichttaster.
        </p>

        <p>
          In der Simulation wird ausschließlich ein ausgewählter Arbeitsschritt
          des Roboters dargestellt und bewertet: Der Roboter soll die Position
          des Jigs anfahren, um dort die Verschraubung des Stoßfängers am
          Chassis durchzuführen.
        </p>

        <Image
          src="/images/process_step.png"
          alt="Dargestellter Prozessschritt"
          width={800}
          height={350}
          className="rounded-lg border"
        />

        <p>
          Das Chassis und der Stoßfänger selbst sind in der Simulation nicht
          sichtbar. Dargestellt werden lediglich der Roboter, der Arbeitsplatz,
          die Position des Jigs sowie die Schraubenzuführung. Bewerten Sie daher
          ausschließlich die in der Simulation gezeigte Roboterbewegung und das
          Anfahren der vorgesehenen Arbeitsposition.
        </p>
      </section>

      <div className="max-w-2xl px-6 py-12 space-y-8 ">
        {/* Title */}
        <h2 className="text-xl font-semibold tracking-tight  border-b border-gray-100 pb-4">
          Trainingsaufgabe
        </h2>
        {/* Body Content Container */}
        <div className="space-y-5   ">
          <p>
            Bevor die eigentliche Untersuchung beginnt, bearbeiten Sie zunächst
            eine kurze Trainingsaufgabe. Diese hilft Ihnen dabei, sich mit dem
            Ablauf und der Bedienung vertraut zu machen.
          </p>

          <p className="font-medium ">In der Trainingsaufgabe lernen Sie:</p>

          <ul className="list-disc pl-5 space-y-2 ">
            <li>wie die Simulation dargestellt wird,</li>
            <li>wie die Schaltflächen bedient werden,</li>
            <li>wie Bewertungen abgegeben werden und</li>
            <li>
              wie das Chat- beziehungsweise Freitextfeld genutzt werden soll.
            </li>
          </ul>
        </div>
        {/* Scientific Disclaimer Block */}
        <h2 className=" font-bold  ">Wichtiger Hinweis zur Auswertung</h2>
        <p className="  font-medium  mb-1">
          Die Trainingsaufgabe dient ausschließlich der Vorbereitung und wird
          nicht in die wissenschaftliche Auswertung einbezogen.
        </p>
      </div>
    </div>
  );
}
