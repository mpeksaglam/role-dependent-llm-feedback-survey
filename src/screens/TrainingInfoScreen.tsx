import Image from "next/image";

export function TrainingInfoScreen() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6 space-y-12">
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight border-b border-gray-100 pb-3">
          Beschreibung der Aufgabe
        </h2>

        <p>
          In den folgenden Szenarien wird ein Arbeitsplatz für die
          Mensch-Roboter-Kollaboration betrachtet. Der Anwendungsfall umfasst
          die Verschraubung eines Stoßfängers an einem Chassis.
        </p>

        <div className="w-fit mx-auto py-2">
          <Image
            src="/images/workstation_overview.png"
            alt="Übersicht der Arbeitstools"
            width={600}
            height={266}
            priority
            className="h-auto w-full"
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
          wiederholgenau für den Verschraubungsprozess zu positionieren (siehe
          Abbildung 1).
        </p>

        <p>
          In der Simulation wird jeweils ein einzelner Arbeitsschritt des
          Roboters dargestellt (siehe beispielhaft Abbildung 2). Ihre Aufgabe
          besteht darin, die gezeigte Roboterbewegung für den entsprechenden
          Arbeitsschritt zu beurteilen.
        </p>

        <p>
          Je nach Simulation führt der Roboter eine der folgenden Bewegungen
          aus:
        </p>

        <ol className="list-[lower-alpha] pl-6 space-y-2">
          <li>
            Der Roboter startet an der Schraubenzuführung und fährt zur Position
            des Jigs.
          </li>
          <li>
            Der Roboter startet in seiner Ausgangsposition, der sogenannten
            Home-Position, fährt zunächst zur Schraubenzuführung und
            anschließend zur Position des Jigs.
          </li>
          <li>
            Der Roboter startet an der Position des Jigs und fährt zurück zur
            Schraubenzuführung.
          </li>
        </ol>

        <p>
          Welcher Arbeitsschritt im jeweiligen Fall gezeigt wird und wo sich
          Start- und Zielpunkt befinden, ergibt sich aus der Simulation.
        </p>

        <p>
          Bitte bewerten Sie ausschließlich die Bewegung des Roboters im
          dargestellten Arbeitsschritt. Bewerten Sie nicht die grafische
          Qualität, Perspektive oder Gestaltung des Videos.
        </p>

        <div className="w-fit mx-auto py-2 max-w-[450px]">
          <Image
            src="/images/process_step.png"
            alt="Dargestellter Prozessschritt"
            width={450}
            height={469}
            priority
            className=""
          />
          <p className="text-xs text-center text-gray-500 mt-2 pt-2 font-serif">
            Abbildung 2: Beispielhafte Darstellung eines Arbeitsschrittes
          </p>
        </div>

        <p>
          Das Chassis und der Stoßfänger sind in der Simulation nicht sichtbar.
          Dargestellt werden lediglich der Roboter, der Arbeitsplatz, die
          Position des Jigs sowie die Schraubenzuführung. Diese vereinfachte
          Darstellung ist für die Bewertung ausreichend, da ausschließlich die
          Roboterbewegung betrachtet werden soll.
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
