import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy e sui cookie di F. Scassellati S.r.l.",
  noIndex: true,
});

const h2 = "font-heading font-bold uppercase text-xl text-dgray mt-10 mb-3 first:mt-0";
const h3 = "font-heading font-bold uppercase text-base text-dgray mt-6 mb-2";
const h4 = "font-semibold text-dgray mt-4 mb-1";
const p = "text-dgray/70 leading-relaxed mb-4";
const ul = "list-disc pl-5 space-y-2 text-dgray/70 mb-4";
const link =
  "text-dgray underline hover:text-bronze transition-colors";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        subtitle="Informativa sul trattamento dei dati personali e sull'uso dei cookie."
        backHref="/"
        backLabel="Torna alla Home"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className={p}>
            Informativa per il trattamento, comunicazione e diffusione dei
            dati, in applicazione del Regolamento europeo per la protezione
            dei dati Reg. 679/2016 (GDPR).
          </p>
          <p className={p}>
            Questo sito raccoglie alcuni dati personali dei propri utenti.
          </p>
          <p className={p}>
            Abbiamo a cuore la tua privacy e useremo le informazioni
            personali che ci hai fornito solo per servirti al meglio e
            fornirti le informazioni richieste. Non venderemo i tuoi dati a
            terzi e non li useremo per mandarti mail di spam.
          </p>

          <h2 className={h2}>Titolare del Trattamento dei Dati</h2>
          <p className={p}>
            F. Scassellati S.r.l. — Via del Casale Ferranti, 85, 00173 Roma —
            P.IVA: 05309771003 —{" "}
            <a href="mailto:segreteria@scassellati.com" className={link}>
              segreteria@scassellati.com
            </a>
          </p>

          <h2 className={h2}>Tipologie di Dati raccolti</h2>
          <p className={p}>
            Fra i Dati Personali raccolti da questo Sito Web, in modo
            autonomo o tramite terze parti, ci sono: Dati di utilizzo;
            Cookie; nome; cognome; nazione; e-mail.
          </p>
          <p className={p}>
            Dettagli completi su ciascuna tipologia di dati raccolti sono
            forniti nelle sezioni dedicate di questa privacy policy o
            mediante specifici testi informativi visualizzati prima della
            raccolta dei dati stessi. I Dati Personali possono essere
            liberamente forniti dall&apos;Utente o, nel caso di Dati di
            Utilizzo, raccolti automaticamente durante l&apos;uso di questo
            Sito Web. Se non diversamente specificato, tutti i Dati richiesti
            da questo Sito Web sono obbligatori. Se l&apos;Utente rifiutasse
            di comunicarli, potrebbe essere impossibile per questo Sito Web
            fornire il Servizio. Nei casi in cui questo Sito Web indichi
            alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi
            dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza
            sulla disponibilità del Servizio o sulla sua operatività. Gli
            Utenti che dovessero avere dubbi su quali Dati siano
            obbligatori, sono incoraggiati a contattare il Titolare.
            L&apos;eventuale utilizzo di Cookie – o di altri strumenti di
            tracciamento – da parte di questo Sito Web o dei titolari dei
            servizi terzi utilizzati da questo Sito Web, ove non diversamente
            precisato, ha la finalità di fornire il Servizio richiesto
            dall&apos;Utente, oltre alle ulteriori finalità descritte nel
            presente documento e nella Cookie Policy, se disponibile.
          </p>

          <h2 className={h2}>
            Modalità e luogo del trattamento dei Dati raccolti
          </h2>
          <h3 className={h3}>Modalità di trattamento</h3>
          <p className={p}>
            Il Titolare adotta le opportune misure di sicurezza volte ad
            impedire l&apos;accesso, la divulgazione, la modifica o la
            distruzione non autorizzate dei Dati Personali. Il trattamento
            viene effettuato mediante strumenti informatici e/o telematici,
            con modalità organizzative e con logiche strettamente correlate
            alle finalità indicate. Oltre al Titolare, in alcuni casi,
            potrebbero avere accesso ai Dati altri soggetti coinvolti
            nell&apos;organizzazione di questo Sito Web (personale
            amministrativo, commerciale, marketing, legali, amministratori
            di sistema) ovvero soggetti esterni (come fornitori di servizi
            tecnici terzi, corrieri postali, hosting provider, società
            informatiche, agenzie di comunicazione) nominati anche, se
            necessario, Responsabili del Trattamento da parte del Titolare.
            L&apos;elenco aggiornato dei Responsabili potrà sempre essere
            richiesto al Titolare del Trattamento.
          </p>

          <h3 className={h3}>Base giuridica del trattamento</h3>
          <p className={p}>
            Il Titolare tratta Dati Personali relativi all&apos;Utente in
            caso sussista una delle seguenti condizioni:
          </p>
          <ul className={ul}>
            <li>
              l&apos;Utente ha prestato il consenso per una o più finalità
              specifiche;
            </li>
            <li>
              il trattamento è necessario all&apos;esecuzione di un
              contratto con l&apos;Utente e/o all&apos;esecuzione di misure
              precontrattuali;
            </li>
            <li>
              il trattamento è necessario per adempiere un obbligo legale al
              quale è soggetto il Titolare;
            </li>
            <li>
              il trattamento è necessario per l&apos;esecuzione di un
              compito di interesse pubblico o per l&apos;esercizio di
              pubblici poteri di cui è investito il Titolare;
            </li>
            <li>
              il trattamento è necessario per il perseguimento del legittimo
              interesse del Titolare o di terzi.
            </li>
          </ul>
          <p className={p}>
            È comunque sempre possibile richiedere al Titolare di chiarire
            la concreta base giuridica di ciascun trattamento ed in
            particolare di specificare se il trattamento sia basato sulla
            legge, previsto da un contratto o necessario per concludere un
            contratto.
          </p>

          <h3 className={h3}>Luogo</h3>
          <p className={p}>
            I Dati sono trattati presso le sedi operative del Titolare ed in
            ogni altro luogo in cui le parti coinvolte nel trattamento siano
            localizzate. Per ulteriori informazioni, contatta il Titolare. I
            Dati Personali dell&apos;Utente potrebbero essere trasferiti in
            un paese diverso da quello in cui l&apos;Utente si trova. Per
            ottenere ulteriori informazioni sul luogo del trattamento
            l&apos;Utente può fare riferimento alla sezione relativa ai
            dettagli sul trattamento dei Dati Personali.
          </p>
          <p className={p}>
            L&apos;Utente ha diritto a ottenere informazioni in merito alla
            base giuridica del trasferimento di Dati al di fuori
            dell&apos;Unione Europea o ad un&apos;organizzazione
            internazionale di diritto internazionale pubblico o costituita
            da due o più paesi, come ad esempio l&apos;ONU, nonché in merito
            alle misure di sicurezza adottate dal Titolare per proteggere i
            Dati.
          </p>
          <p className={p}>
            L&apos;Utente può verificare se abbia luogo uno dei trasferimenti
            appena descritti esaminando la sezione di questo documento
            relativa ai dettagli sul trattamento di Dati Personali o
            chiedere informazioni al Titolare contattandolo agli estremi
            riportati in apertura.
          </p>

          <h2 className={h2}>Periodo di conservazione</h2>
          <p className={p}>
            I Dati sono trattati e conservati per il tempo richiesto dalle
            finalità per le quali sono stati raccolti. Pertanto:
          </p>
          <ul className={ul}>
            <li>
              I Dati Personali raccolti per scopi collegati
              all&apos;esecuzione di un contratto tra il Titolare e
              l&apos;Utente saranno trattenuti sino a quando sia completata
              l&apos;esecuzione di tale contratto.
            </li>
            <li>
              I Dati Personali raccolti per finalità riconducibili
              all&apos;interesse legittimo del Titolare saranno trattenuti
              sino al soddisfacimento di tale interesse. L&apos;Utente può
              ottenere ulteriori informazioni in merito all&apos;interesse
              legittimo perseguito dal Titolare nelle relative sezioni di
              questo documento o contattando il Titolare.
            </li>
          </ul>
          <p className={p}>
            Quando il trattamento è basato sul consenso dell&apos;Utente, il
            Titolare può conservare i Dati Personali più a lungo sino a
            quando detto consenso non venga revocato. Inoltre, il Titolare
            potrebbe essere obbligato a conservare i Dati Personali per un
            periodo più lungo in ottemperanza ad un obbligo di legge o per
            ordine di un&apos;autorità.
          </p>
          <p className={p}>
            Al termine del periodo di conservazione i Dati Personali saranno
            cancellati. Pertanto, allo spirare di tale termine il diritto di
            accesso, cancellazione, rettificazione ed il diritto alla
            portabilità dei Dati non potranno più essere esercitati.
          </p>

          <h2 className={h2}>Finalità del Trattamento dei Dati raccolti</h2>
          <p className={p}>
            I Dati dell&apos;Utente sono raccolti per consentire al Titolare
            di fornire il Servizio, adempiere agli obblighi di legge,
            rispondere a richieste o azioni esecutive, tutelare i propri
            diritti ed interessi (o quelli di Utenti o di terze parti),
            individuare eventuali attività dolose o fraudolente, nonché per
            le seguenti finalità: Hosting ed infrastruttura back-end,
            Visualizzazione di contenuti da piattaforme esterne, Protezione
            dallo SPAM, Contattare l&apos;Utente, Gestione contatti e invio
            di messaggi, Statistica e Gestione dei tag.
          </p>
          <p className={p}>
            Per ottenere informazioni dettagliate sulle finalità del
            trattamento e sui Dati Personali trattati per ciascuna finalità,
            l&apos;Utente può fare riferimento alla sezione &quot;Dettagli
            sul trattamento dei Dati Personali&quot;.
          </p>

          <h2 className={h2}>Dettagli sul trattamento dei Dati Personali</h2>
          <p className={p}>
            I Dati Personali sono raccolti per le seguenti finalità ed
            utilizzando i seguenti servizi:
          </p>

          <h3 className={h3}>
            Contattare l&apos;Utente — Modulo di contatto (Questo Sito Web)
          </h3>
          <p className={p}>
            L&apos;Utente, compilando con i propri Dati il modulo di
            contatto, acconsente al loro utilizzo per rispondere alle
            richieste di informazioni, di preventivo, o di qualunque altra
            natura indicata dall&apos;intestazione del modulo.
            <br />
            Dati Personali trattati: cognome; e-mail; nazione; nome.
          </p>

          <h3 className={h3}>Gestione dei tag</h3>
          <p className={p}>
            Questo tipo di servizi è funzionale alla gestione centralizzata
            dei tag o script utilizzati su questo Sito Web. L&apos;uso di
            tali servizi comporta il fluire dei Dati dell&apos;Utente
            attraverso gli stessi e, se del caso, la loro ritenzione.
          </p>
          <h4 className={h4}>Google Tag Manager (Google Ireland Limited)</h4>
          <p className={p}>
            Google Tag Manager è un servizio di gestione dei tag fornito da
            Google Ireland Limited.
            <br />
            Dati Personali trattati: Dati di utilizzo.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>
            .
          </p>

          <h3 className={h3}>Protezione dallo SPAM</h3>
          <p className={p}>
            Questo tipo di servizi analizza il traffico di questo Sito Web,
            potenzialmente contenente Dati Personali degli Utenti, al fine
            di filtrarlo da parti di traffico, messaggi e contenuti
            riconosciuti come SPAM.
          </p>
          <h4 className={h4}>Google reCAPTCHA (Google Ireland Limited)</h4>
          <p className={p}>
            Google reCAPTCHA è un servizio di protezione dallo SPAM fornito
            da Google Ireland Limited. L&apos;utilizzo del sistema reCAPTCHA
            è soggetto alla{" "}
            <ExtLink href="https://www.google.com/intl/it/policies/privacy/">
              privacy policy
            </ExtLink>{" "}
            e ai{" "}
            <ExtLink href="https://www.google.com/intl/it/policies/terms/">
              termini di utilizzo
            </ExtLink>{" "}
            di Google.
            <br />
            Dati Personali trattati: Cookie; Dati di utilizzo.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>
            .
          </p>

          <h3 className={h3}>
            Visualizzazione di contenuti da piattaforme esterne
          </h3>
          <p className={p}>
            Questo tipo di servizi permette di visualizzare contenuti
            ospitati su piattaforme esterne direttamente dalle pagine di
            questo Sito Web e di interagire con essi. Nel caso in cui sia
            installato un servizio di questo tipo, è possibile che, anche
            nel caso gli Utenti non utilizzino il servizio, lo stesso
            raccolga dati di traffico relativi alle pagine in cui è
            installato.
          </p>
          <h4 className={h4}>Google Fonts (Google Ireland Limited)</h4>
          <p className={p}>
            Google Fonts è un servizio di visualizzazione di stili di
            carattere gestito da Google Ireland Limited che permette a
            questo Sito Web di integrare tali contenuti all&apos;interno
            delle proprie pagine.
            <br />
            Dati Personali trattati: Dati di utilizzo; varie tipologie di
            Dati secondo quanto specificato dalla privacy policy del
            servizio.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>
            .
          </p>
          <h4 className={h4}>Widget Google Maps (Google Ireland Limited)</h4>
          <p className={p}>
            Google Maps è un servizio di visualizzazione di mappe gestito da
            Google Ireland Limited che permette a questo Sito Web di
            integrare tali contenuti all&apos;interno delle proprie pagine.
            <br />
            Dati Personali trattati: Cookie; Dati di utilizzo.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>
            .
          </p>

          <h3 className={h3}>Hosting ed infrastruttura backend</h3>
          <p className={p}>
            Questo tipo di servizi ha la funzione di ospitare dati e file
            che permettono a questo Sito Web di funzionare, ne consentono la
            distribuzione e mettono a disposizione un&apos;infrastruttura
            pronta all&apos;uso per erogare specifiche funzionalità di
            questo Sito Web. Alcuni di questi servizi funzionano attraverso
            server dislocati geograficamente in luoghi differenti, rendendo
            difficile la determinazione del luogo esatto in cui vengono
            conservati i Dati Personali. Contattare il Titolare del sito web
            per ulteriori dettagli.
          </p>

          <h3 className={h3}>Statistica</h3>
          <p className={p}>
            I servizi contenuti nella presente sezione permettono al
            Titolare del Trattamento di monitorare e analizzare i dati di
            traffico e servono a tener traccia del comportamento
            dell&apos;Utente.
          </p>
          <h4 className={h4}>
            Monitoraggio conversioni di Google Ads (Google Ireland Limited)
          </h4>
          <p className={p}>
            Il monitoraggio conversioni di Google Ads è un servizio di
            statistiche fornito da Google Ireland Limited che collega i dati
            provenienti dal network di annunci Google Ads con le azioni
            compiute all&apos;interno di questo Sito Web.
            <br />
            Dati Personali trattati: Cookie; Dati di utilizzo.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>
            .
          </p>
          <h4 className={h4}>
            Google Analytics con IP anonimizzato (Google Ireland Limited)
          </h4>
          <p className={p}>
            Google Analytics è un servizio di analisi web fornito da Google
            Ireland Limited (&quot;Google&quot;). Google utilizza i Dati
            Personali raccolti allo scopo di tracciare ed esaminare
            l&apos;utilizzo di questo Sito Web, compilare report e
            condividerli con gli altri servizi sviluppati da Google. Google
            potrebbe utilizzare i Dati Personali per contestualizzare e
            personalizzare gli annunci del proprio network pubblicitario.
            Questa integrazione di Google Analytics rende anonimo il tuo
            indirizzo IP. L&apos;anonimizzazione funziona abbreviando entro
            i confini degli stati membri dell&apos;Unione Europea o in altri
            Paesi aderenti all&apos;accordo sullo Spazio Economico Europeo
            l&apos;indirizzo IP degli Utenti. Solo in casi eccezionali,
            l&apos;indirizzo IP sarà inviato ai server di Google ed
            abbreviato all&apos;interno degli Stati Uniti.
            <br />
            Dati Personali trattati: Cookie; Dati di utilizzo.
            <br />
            Luogo del trattamento: Irlanda –{" "}
            <ExtLink href="https://policies.google.com/privacy">
              Privacy Policy
            </ExtLink>{" "}
            –{" "}
            <ExtLink href="https://tools.google.com/dlpage/gaoptout?hl=en">
              Opt Out
            </ExtLink>
            .
          </p>

          <h2 className={h2}>Diritti dell&apos;Utente</h2>
          <p className={p}>
            Gli Utenti possono esercitare determinati diritti con
            riferimento ai Dati trattati dal Titolare. In particolare,
            l&apos;Utente ha il diritto di:
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-dgray">
                revocare il consenso in ogni momento.
              </strong>{" "}
              L&apos;Utente può revocare il consenso al trattamento dei
              propri Dati Personali precedentemente espresso.
            </li>
            <li>
              <strong className="text-dgray">
                opporsi al trattamento dei propri Dati.
              </strong>{" "}
              L&apos;Utente può opporsi al trattamento dei propri Dati
              quando esso avviene su una base giuridica diversa dal
              consenso. Ulteriori dettagli sul diritto di opposizione sono
              indicati nella sezione sottostante.
            </li>
            <li>
              <strong className="text-dgray">accedere ai propri Dati.</strong>{" "}
              L&apos;Utente ha diritto ad ottenere informazioni sui Dati
              trattati dal Titolare, su determinati aspetti del trattamento
              ed a ricevere una copia dei Dati trattati.
            </li>
            <li>
              <strong className="text-dgray">
                verificare e chiedere la rettificazione.
              </strong>{" "}
              L&apos;Utente può verificare la correttezza dei propri Dati e
              richiederne l&apos;aggiornamento o la correzione.
            </li>
            <li>
              <strong className="text-dgray">
                ottenere la limitazione del trattamento.
              </strong>{" "}
              Quando ricorrono determinate condizioni, l&apos;Utente può
              richiedere la limitazione del trattamento dei propri Dati. In
              tal caso il Titolare non tratterà i Dati per alcun altro scopo
              se non la loro conservazione.
            </li>
            <li>
              <strong className="text-dgray">
                ottenere la cancellazione o rimozione dei propri Dati
                Personali.
              </strong>{" "}
              Quando ricorrono determinate condizioni, l&apos;Utente può
              richiedere la cancellazione dei propri Dati da parte del
              Titolare.
            </li>
            <li>
              <strong className="text-dgray">
                ricevere i propri Dati o farli trasferire ad altro titolare.
              </strong>{" "}
              L&apos;Utente ha diritto di ricevere i propri Dati in formato
              strutturato, di uso comune e leggibile da dispositivo
              automatico e, ove tecnicamente fattibile, di ottenerne il
              trasferimento senza ostacoli ad un altro titolare. Questa
              disposizione è applicabile quando i Dati sono trattati con
              strumenti automatizzati ed il trattamento è basato sul
              consenso dell&apos;Utente, su un contratto di cui l&apos;Utente
              è parte o su misure contrattuali ad esso connesse.
            </li>
            <li>
              <strong className="text-dgray">proporre reclamo.</strong>{" "}
              L&apos;Utente può proporre un reclamo all&apos;autorità di
              controllo della protezione dei dati personali competente o
              agire in sede giudiziale.
            </li>
          </ul>

          <h2 className={h2}>Dettagli sul diritto di opposizione</h2>
          <p className={p}>
            Quando i Dati Personali sono trattati nell&apos;interesse
            pubblico, nell&apos;esercizio di pubblici poteri di cui è
            investito il Titolare oppure per perseguire un interesse
            legittimo del Titolare, gli Utenti hanno diritto ad opporsi al
            trattamento per motivi connessi alla loro situazione
            particolare.
          </p>
          <p className={p}>
            Si fa presente agli Utenti che, ove i loro Dati fossero trattati
            con finalità di marketing diretto, possono opporsi al
            trattamento senza fornire alcuna motivazione. Per scoprire se il
            Titolare tratti dati con finalità di marketing diretto gli
            Utenti possono fare riferimento alle rispettive sezioni di
            questo documento.
          </p>

          <h2 className={h2}>Come esercitare i diritti</h2>
          <p className={`${p} mb-0`}>
            Per esercitare i diritti dell&apos;Utente, gli Utenti possono
            indirizzare una richiesta agli estremi di contatto del Titolare
            indicati in questo documento. Le richieste sono depositate a
            titolo gratuito e evase dal Titolare nel più breve tempo
            possibile, in ogni caso entro un mese.
          </p>
        </div>
      </section>
    </>
  );
}
