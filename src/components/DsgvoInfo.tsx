export function DsgvoInfo() {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-gray-900">
      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          1. Informationen zur Verantwortlichen
        </h2>
        <p>Verantwortlich für die Datenerhebung und -verarbeitung ist:</p>
        <p className="mt-2">
          Saskia Hutschenreiter
          <br />
          Fraunhofer-Institut für Gießerei-, Composite- und Verarbeitungstechnik
          IGCV
          <br />
          Am Technologiezentrum 10, 86159 Augsburg
          <br />
          saskia.hutschenreiter@igcv.fraunhofer.de
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          2. Zweck der Studie und Rechtsgrundlage
        </h2>
        <p>
          Die Erhebung und Verarbeitung Ihrer personenbezogenen Daten erfolgt
          zum Zweck der wissenschaftlichen Forschung im Rahmen des Projekts:
        </p>
        <p className="mt-2 font-semibold">KIRo4LeMi</p>
        <p className="mt-2">
          Die Teilnahme ist freiwillig. Rechtsgrundlage für die Verarbeitung ist
          Ihre freiwillig erteilte Einwilligung gemäß Art. 6 Abs. 1 lit. a
          DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          3. Art der erhobenen Daten
        </h2>
        <p>Im Rahmen dieser Studie werden folgende Daten verarbeitet:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1.5">
          <li>Soziodemografische Daten (z. B. Beruf)</li>
          <li>Studiendaten (Antworten aus Fragebögen, Messdaten)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          4. Speicherdauer und Anonymisierung
        </h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie es für den Zweck der
          Studie erforderlich ist.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1.5">
          <li>
            <strong>Pseudonymisierung:</strong> Ihre Daten sind von Anfang an
            pseudonymisiert.
          </li>
          <li>
            <strong>Löschung:</strong> Ihre Kontaktdaten werden spätestens 6
            Monate nach Studienabschluss gelöscht.
          </li>
          <li>
            Pseudonymisierte Forschungsdaten werden in der Regel für 10 Jahre
            revisionssicher aufbewahrt und danach vernichtet.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          5. Freiwilligkeit und Widerrufsrecht
        </h2>
        <p>
          Die Teilnahme an dieser Studie ist völlig freiwillig. Sie können Ihre
          Teilnahme jederzeit ohne Angabe von Gründen abbrechen oder Ihre
          Einwilligung widerrufen.
        </p>
        <p className="mt-2">
          Ein Widerruf hat für Sie keine Nachteile. Im Falle eines Widerrufs
          werden Ihre Daten umgehend gelöscht, es sei denn, sie wurden bereits
          vollständig anonymisiert.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          6. Ihre Rechte als betroffene Person
        </h2>
        <p>
          Nach der DSGVO haben Sie jederzeit das Recht auf Auskunft,
          Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten
          sowie das Recht auf Datenübertragbarkeit.
        </p>
        <p className="mt-2">
          Zudem steht Ihnen ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          7. Weitergabe an Dritte
        </h2>
        <p>
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt
          grundsätzlich nicht.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold tracking-tight mb-2">
          8. Einwilligung zur Datenverarbeitung
        </h2>
        <p>
          Ich habe die Informationen zur Datenerhebung und Verarbeitung
          verstanden. Ich willige ein, dass meine in dieser Online-Umfrage
          erhobenen Daten im Rahmen dieser Studie anonymisiert verarbeitet und
          für wissenschaftliche Zwecke gespeichert und ausgewertet werden. Diese
          Einwilligung ist freiwillig. Ich kann sie jederzeit ohne Angabe von
          Gründen widerrufen, ohne dass mir daraus Nachteile entstehen (ein
          Widerruf ist jedoch nur so lange möglich, wie die Daten noch nicht
          vollständig anonymisiert wurden).
        </p>
      </section>
    </div>
  );
}
