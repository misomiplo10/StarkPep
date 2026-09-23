(function () {
  const products = {
    "ghk-cu": {
      name: "GHK-Cu",
      index: "01",
      da: {
        lead: "Et kobber(II)-kompleks af tripeptidet glycin–histidin–lysin til kontrolleret laboratorieforskning.",
        aboutCopy: "GHK-Cu dannes, når tripeptidet GHK binder kobber(II). Materialet undersøges i ikke-kliniske modeller af peptid–metal-koordinering, ekstracellulær matrix og kollagenrelaterede signalveje.",
        researchCopy: "Forsøgsdesign kan fokusere på matrixrelaterede målinger, celleoverfladeinteraktioner og kobberafhængig signalering. Resultater fra laboratoriemodeller må ikke fortolkes som dokumentation for effekt hos mennesker eller dyr."
      },
      en: {
        lead: "A copper(II) complex of the tripeptide glycine–histidine–lysine for controlled laboratory research.",
        aboutCopy: "GHK-Cu forms when the tripeptide GHK binds copper(II). The material is investigated in non-clinical models of peptide–metal coordination, extracellular-matrix biology and collagen-associated signalling pathways.",
        researchCopy: "Study designs may focus on matrix-related readouts, cell-surface interactions and copper-dependent signalling. Results from laboratory models must not be interpreted as evidence of effects in humans or animals."
      }
    },
    "tesamorelin": {
      name: "Tesamorelin",
      index: "02",
      da: {
        lead: "En syntetisk analog af humant growth hormone-releasing factor til ikke-kliniske receptorstudier.",
        aboutCopy: "Tesamorelin er en syntetisk analog af humant growth hormone-releasing factor, GHRF. I laboratoriemodeller undersøges forbindelsen i relation til ligand–receptor-interaktioner og signalveje knyttet til GHRH-receptoren.",
        researchCopy: "Kontrollerede assays kan anvendes til at undersøge receptorbinding og efterfølgende cellulær signalering. Siden beskriver ikke behandling, dosering eller forventede fysiologiske resultater."
      },
      en: {
        lead: "A synthetic analogue of human growth hormone-releasing factor for non-clinical receptor studies.",
        aboutCopy: "Tesamorelin is a synthetic analogue of human growth hormone-releasing factor, GHRF. Laboratory models investigate the compound in relation to ligand–receptor interactions and signalling pathways associated with the GHRH receptor.",
        researchCopy: "Controlled assays may be used to examine receptor binding and downstream cellular signalling. This page does not describe treatment, dosing or expected physiological outcomes."
      }
    },
    "tirzepatide": {
      name: "Tirzepatide",
      index: "03",
      da: {
        lead: "Et syntetisk peptid med agonistaktivitet ved både GIP- og GLP-1-receptorer til ikke-klinisk forskning.",
        aboutCopy: "Tirzepatide er et syntetisk peptid, der aktiverer både GIP- og GLP-1-receptorer. I kontrollerede modeller undersøges det i relation til dobbelt receptorfarmakologi, ligand–receptor-interaktioner og nedstrøms metabolisk signalering.",
        researchCopy: "Receptor- og pathway-assays kan bruges til at sammenligne signaler fra de to incretinreceptorer. Der gives ingen oplysninger om klinisk anvendelse, vægttab, blodsukker, dosering eller administration."
      },
      en: {
        lead: "A synthetic peptide with agonist activity at both GIP and GLP-1 receptors for non-clinical research.",
        aboutCopy: "Tirzepatide is a synthetic peptide that activates both GIP and GLP-1 receptors. Controlled models investigate dual-receptor pharmacology, ligand–receptor interactions and downstream metabolic signalling.",
        researchCopy: "Receptor and pathway assays may compare signalling from the two incretin receptors. No information is provided about clinical use, weight loss, blood glucose, dosing or administration."
      }
    },
    "mots-c": {
      name: "MOTS-C",
      index: "04",
      da: {
        lead: "Et mitochondrie-kodet peptid på 16 aminosyrer til studier af cellulær signalering og bioenergetik.",
        aboutCopy: "MOTS-C er et 16-aminosyre-peptid kodet i en åben læseramme i mitochondriets 12S rRNA-region. Det undersøges i in vitro-modeller af metabolisk signalering, cellulære stressresponser, redoxbalance og mitochondriefunktion.",
        researchCopy: "Prøvens stabilitet afhænger blandt andet af form, opløsningsmiddel, temperatur, lys og håndtering. Laboratoriets validerede protokol og den batchspecifikke dokumentation skal altid have forrang."
      },
      en: {
        lead: "A 16-amino-acid mitochondria-encoded peptide for studies of cellular signalling and bioenergetics.",
        aboutCopy: "MOTS-C is a 16-amino-acid peptide encoded by an open reading frame within the mitochondrial 12S rRNA region. It is investigated in in-vitro models of metabolic signalling, cellular stress responses, redox balance and mitochondrial function.",
        researchCopy: "Sample stability depends on factors including form, solvent, temperature, light and handling. The laboratory's validated protocol and batch-specific documentation must always take precedence."
      }
    },
    "tb-500": {
      name: "TB-500",
      index: "05",
      da: {
        lead: "En betegnelse for thymosin beta-4-relateret forskningsmateriale, hvis præcise identitet skal bekræftes batchspecifikt.",
        aboutCopy: "TB-500 bruges som betegnelse for forskningsmateriale afledt af thymosin beta-4. Da navnet anvendes om forskellige materialer, skal den præcise sekvens og identitet altid kontrolleres mod etiketten og batchdokumentationen.",
        researchCopy: "Validerede modeller kan undersøge cytoskeletal organisering, cellemigration og interaktioner med ekstracellulær matrix. Fund for fuldlængde thymosin beta-4 kan ikke automatisk overføres til et kortere fragment."
      },
      en: {
        lead: "A designation for thymosin-beta-4-related research material whose exact identity requires batch-specific confirmation.",
        aboutCopy: "TB-500 is a name used for research material derived from thymosin beta-4. Because the name is applied to different materials, the exact sequence and identity must always be checked against the label and batch documentation.",
        researchCopy: "Validated models may investigate cytoskeletal organisation, cell migration and extracellular-matrix interactions. Findings for full-length thymosin beta-4 cannot automatically be applied to a shorter fragment."
      }
    },
    "bpc-157": {
      name: "BPC-157",
      index: "06",
      da: {
        lead: "Et syntetisk forskningspeptid på 15 aminosyrer til kontrollerede, ikke-kliniske laboratoriemodeller.",
        aboutCopy: "BPC-157 er et syntetisk peptid bestående af 15 aminosyrer. Det undersøges i kontrollerede modeller i relation til cellemigration, celleoverlevelse, interaktioner med ekstracellulær matrix og angiogen signalering.",
        researchCopy: "Oplysninger om mekanistiske laboratoriemålinger er ikke dokumentation for heling eller behandling. Materialet er ikke godkendt eller præsenteret til human eller veterinær anvendelse."
      },
      en: {
        lead: "A synthetic 15-amino-acid research peptide for controlled, non-clinical laboratory models.",
        aboutCopy: "BPC-157 is a synthetic peptide consisting of 15 amino acids. Controlled models investigate it in relation to cell migration, cell survival, extracellular-matrix interactions and angiogenic signalling.",
        researchCopy: "Information about mechanistic laboratory readouts is not evidence of healing or treatment. The material is not approved or presented for human or veterinary use."
      }
    },
    "klow": {
      name: "KLOW",
      index: "07",
      da: {
        lead: "Et sammensat produktnavn, hvor indhold og vialkonfiguration skal fremgå af Stark Peptides' egen dokumentation.",
        aboutCopy: "KLOW er et sammensat produktnavn og ikke navnet på ét enkelt peptid. Navnet forbindes ofte med flere forskningspeptider, men den præcise sammensætning, vialkonfiguration og identitet må kun fastslås ud fra Stark Peptides' etiket og batchdokumentation.",
        researchCopy: "Komponenter kan i relevante forsøgsdesign undersøges separat eller parallelt. Der bør ikke antages en bestemt blanding, ratio eller synergieffekt uden verificeret produktspecifikation."
      },
      en: {
        lead: "A composite product name whose contents and vial configuration must be defined by Stark Peptides' own documentation.",
        aboutCopy: "KLOW is a composite product name rather than the name of a single peptide. It is commonly associated with several research peptides, but the exact composition, vial configuration and identity may only be established from Stark Peptides' label and batch documentation.",
        researchCopy: "Components may be examined separately or in parallel where relevant to a study design. No specific blend, ratio or synergistic effect should be assumed without a verified product specification."
      }
    },
    "retatrutide-vial": {
      name: "Retatrutide",
      index: "08",
      da: {
        lead: "Et syntetisk peptid til forskning i signalering via GIP-, GLP-1- og glukagonreceptorerne.",
        aboutCopy: "Retatrutide er et syntetisk peptid med agonistaktivitet ved GIP-, GLP-1- og glukagonreceptorerne. Laboratorieforskning anvender materialet til at undersøge samspillet mellem disse receptorveje og deres efterfølgende cellulære signaler.",
        researchCopy: "Receptorprofilering og pathway-assays kan anvendes til at adskille bidrag fra de tre receptorsystemer. Der gives ingen kliniske løfter eller vejledning om vægttab, appetit, dosering eller administration."
      },
      en: {
        lead: "A synthetic peptide for research into signalling through GIP, GLP-1 and glucagon receptors.",
        aboutCopy: "Retatrutide is a synthetic peptide with agonist activity at the GIP, GLP-1 and glucagon receptors. Laboratory research uses the material to investigate interactions between these receptor pathways and their downstream cellular signals.",
        researchCopy: "Receptor profiling and pathway assays may be used to separate contributions from the three receptor systems. No clinical claims or guidance about weight loss, appetite, dosing or administration are provided."
      }
    },
    "melatonan-1": {
      name: "Melatonan 1",
      index: "09",
      da: {
        lead: "En α-MSH-relateret melanocortinanalog til kontrollerede in vitro-studier af receptorsignalering.",
        aboutCopy: "Melatonan 1, ofte benævnt MT-1 i forskningssammenhæng, er en analog fra α-MSH-familien. Kontrollerede in vitro-studier anvender forbindelsen til at undersøge melanocortinreceptorers binding, selektivitet og intracellulære signalering.",
        researchCopy: "Receptorassays kan sammenligne undertypeaktivering og sekundære signalmolekyler inden for melanocortinsystemet. Siden indeholder ingen påstande om pigmentering, UV-beskyttelse eller anvendelse på mennesker."
      },
      en: {
        lead: "An α-MSH-related melanocortin analogue for controlled in-vitro studies of receptor signalling.",
        aboutCopy: "Melatonan 1, often referred to as MT-1 in research contexts, is an analogue from the α-MSH family. Controlled in-vitro studies use the compound to examine melanocortin-receptor binding, selectivity and intracellular signalling.",
        researchCopy: "Receptor assays may compare subtype activation and second-messenger responses within the melanocortin system. This page makes no claims about pigmentation, UV protection or use in humans."
      }
    },
    "melatonan-2": {
      name: "Melatonan 2",
      index: "10",
      da: {
        lead: "En cyklisk melanocortinanalog fra α-MSH-familien til ikke-klinisk receptor- og struktur–aktivitetsforskning.",
        aboutCopy: "Melatonan 2, også kendt som MT-2, er en cyklisk melanocortinanalog fra α-MSH-familien. I laboratoriemodeller undersøges den i relation til receptoraktivering, sekundære signalmolekyler og struktur–aktivitetsforhold.",
        researchCopy: "Forskningsarbejde kan fokusere på melanocortinreceptorernes undertyper og downstream-signalering. Der gives ingen oplysninger om kosmetisk, seksuel eller anden human anvendelse."
      },
      en: {
        lead: "A cyclic melanocortin analogue from the α-MSH family for non-clinical receptor and structure–activity research.",
        aboutCopy: "Melatonan 2, also known as MT-2, is a cyclic melanocortin analogue from the α-MSH family. Laboratory models investigate it in relation to receptor activation, second-messenger signalling and structure–activity relationships.",
        researchCopy: "Research may focus on melanocortin-receptor subtypes and downstream signalling. No information is provided about cosmetic, sexual or other human use."
      }
    },
    "ahk-cu": {
      name: "AHK-Cu",
      index: "11",
      da: {
        lead: "Et kobber(II)-kompleks af tripeptidet alanin–histidin–lysin til peptid–metal-forskning.",
        aboutCopy: "AHK-Cu er et kobber(II)-kompleks af tripeptidet alanin–histidin–lysin. Forbindelsen undersøges i laboratoriemodeller af peptid–metal-koordinering, dermale celleresponser og relaterede signalveje.",
        researchCopy: "AHK-Cu er kemisk og forskningsmæssigt adskilt fra GHK-Cu, selv om begge er kobberbindende tripeptider. Produktets identitet skal bekræftes med batchspecifik dokumentation."
      },
      en: {
        lead: "A copper(II) complex of the tripeptide alanine–histidine–lysine for peptide–metal research.",
        aboutCopy: "AHK-Cu is a copper(II) complex of the tripeptide alanine–histidine–lysine. It is investigated in laboratory models of peptide–metal coordination, dermal-cell responses and related signalling pathways.",
        researchCopy: "AHK-Cu is chemically and experimentally distinct from GHK-Cu, although both are copper-binding tripeptides. Product identity must be confirmed using batch-specific documentation."
      }
    },
    "wolverine-stack": {
      name: "Wolverine Stack",
      index: "12",
      da: {
        lead: "En handelsbetegnelse, der ofte forbindes med BPC-157 og TB-500 i parallelle forskningsdesigns.",
        aboutCopy: "Wolverine Stack er en handelsbetegnelse, der typisk forbindes med BPC-157 og TB-500. Komponenterne kan i laboratorieforskning undersøges separat eller parallelt for at sammenligne peptidsignalering og cellulære forsøgsresultater.",
        researchCopy: "Navnet fastslår ikke i sig selv, om materialerne leveres separat eller som en blanding. Den præcise sammensætning, styrke og vialkonfiguration skal følge Stark Peptides' egen etiket og batchdokumentation."
      },
      en: {
        lead: "A commercial name commonly associated with BPC-157 and TB-500 in parallel research designs.",
        aboutCopy: "Wolverine Stack is a commercial name commonly associated with BPC-157 and TB-500. In laboratory research, the components may be examined separately or in parallel to compare peptide signalling and cellular assay responses.",
        researchCopy: "The name alone does not establish whether materials are supplied separately or as a blend. Exact composition, strength and vial configuration must follow Stark Peptides' own label and batch documentation."
      }
    },
    "cjc-1295": {
      name: "CJC-1295",
      index: "13",
      da: {
        lead: "En syntetisk GHRH-analog til in vitro-forskning i receptorbinding og efterfølgende cellulær signalering.",
        aboutCopy: "CJC-1295 er en syntetisk analog af growth hormone-releasing hormone. Materialet anvendes i kontrollerede in vitro-systemer til at undersøge GHRH-receptorbinding og downstream-signalering.",
        researchCopy: "Betegnelsen CJC-1295 er ikke tilstrækkelig til at fastslå DAC- eller no-DAC-variant. Den præcise variant og sekvens skal fremgå af etiketten og den batchspecifikke dokumentation."
      },
      en: {
        lead: "A synthetic GHRH analogue for in-vitro research into receptor binding and downstream cellular signalling.",
        aboutCopy: "CJC-1295 is a synthetic analogue of growth hormone-releasing hormone. Controlled in-vitro systems use the material to investigate GHRH-receptor binding and downstream signalling.",
        researchCopy: "The name CJC-1295 is not sufficient to establish a DAC or no-DAC variant. The exact variant and sequence must be stated on the label and in the batch-specific documentation."
      }
    },
    "ipamorelin": {
      name: "Ipamorelin",
      index: "14",
      da: {
        lead: "Et pentapeptid og en selektiv GHSR-1a-agonist til kontrollerede receptorstudier in vitro.",
        aboutCopy: "Ipamorelin er et pentapeptid, som anvendes i forskning i GHSR-1a-receptorens farmakologi. Kontrollerede in vitro-systemer undersøger ligandbinding, receptoraktivering og sekundære signalveje.",
        researchCopy: "Assays kan bruges til at sammenligne selektivitet og struktur–aktivitetsforhold med andre secretagoger. Oplysningerne er ikke vejledning om væksthormon, kropssammensætning, dosering eller human anvendelse."
      },
      en: {
        lead: "A pentapeptide and selective GHSR-1a agonist for controlled in-vitro receptor studies.",
        aboutCopy: "Ipamorelin is a pentapeptide used in research into GHSR-1a receptor pharmacology. Controlled in-vitro systems investigate ligand binding, receptor activation and second-messenger pathways.",
        researchCopy: "Assays may compare selectivity and structure–activity relationships with other secretagogues. The information is not guidance about growth hormone, body composition, dosing or human use."
      }
    }
  };

  const common = {
    da: {
      brandAria: "Stark Peptides, gå til forsiden",
      navAria: "Primær navigation",
      languageAria: "Vælg sprog",
      navProducts: "Produkter",
      navReports: "Find Janoshik rapport",
      navContact: "Kontakt os",
      researchStrip: "Kun til laboratorieforskning — ikke til brug på mennesker eller dyr.",
      backProducts: "Tilbage til produkter",
      stageKicker: "Vial-format",
      imagePending: "Produktbillede tilføjes",
      researchBadge: "Kun til forskning",
      reportButton: "Find Janoshik rapport",
      contactButton: "Kontakt os",
      detailsEyebrow: "Produktinformation",
      detailsTitle: "Beskrivelse og forskningskontekst",
      detailsIntro: "Et neutralt overblik over materialet og de laboratoriemodeller, hvor det undersøges.",
      formatLabel: "Format",
      formatValue: "Vial · styrke fremgår af produktetiketten",
      useLabel: "Tilsigtet anvendelse",
      useValue: "Laboratorieforskning og analytisk brug",
      documentationLabel: "Dokumentation",
      documentationValue: "Batchspecifik Janoshik-rapport, når tilgængelig",
      researchTitle: "Forskningskontekst",
      documentationTitle: "Dokumentation før brug",
      documentationCopy: "Kontrollér altid produktnavn, variant, styrke og batchnummer på etiketten samt den tilhørende rapport. Kvalificeret personale bør følge institutionens procedurer og den produktspecifikke sikkerhedsinformation ved modtagelse, opbevaring og håndtering.",
      disclaimerEyebrow: "Vigtig disclaimer",
      disclaimerTitle: "Kun til laboratorieforskning.",
      disclaimerBody: "Dette produkt er udelukkende beregnet til kontrolleret laboratorieforskning og analytisk brug udført af kvalificerede personer. Det er ikke beregnet til human eller veterinær anvendelse og må ikke indtages, injiceres, inhaleres, påføres kroppen eller anvendes i fødevarer, foder eller kosmetik. Oplysningerne er ikke medicinsk rådgivning og udgør ikke en anbefaling om diagnosticering, behandling eller forebyggelse af sygdom. Der gives ingen doserings- eller administrationsvejledning. Produktet skal håndteres i overensstemmelse med gældende lovgivning, laboratoriets SOP'er og den produktspecifikke sikkerhedsinformation. Opbevares utilgængeligt for børn.",
      footerLine: "klarhed fra produkt til dokumentation."
    },
    en: {
      brandAria: "Stark Peptides, go to the homepage",
      navAria: "Primary navigation",
      languageAria: "Choose language",
      navProducts: "Products",
      navReports: "Find Janoshik report",
      navContact: "Contact us",
      researchStrip: "For laboratory research only — not for human or animal use.",
      backProducts: "Back to products",
      stageKicker: "Vial format",
      imagePending: "Product image will be added",
      researchBadge: "Research use only",
      reportButton: "Find Janoshik report",
      contactButton: "Contact us",
      detailsEyebrow: "Product information",
      detailsTitle: "Description and research context",
      detailsIntro: "A neutral overview of the material and the laboratory models in which it is investigated.",
      formatLabel: "Format",
      formatValue: "Vial · strength shown on the product label",
      useLabel: "Intended use",
      useValue: "Laboratory research and analytical use",
      documentationLabel: "Documentation",
      documentationValue: "Batch-specific Janoshik report, when available",
      researchTitle: "Research context",
      documentationTitle: "Documentation before use",
      documentationCopy: "Always verify the product name, variant, strength and batch number on the label and the corresponding report. Appropriately trained personnel should follow institutional procedures and product-specific safety information for receipt, storage and handling.",
      disclaimerEyebrow: "Important disclaimer",
      disclaimerTitle: "For laboratory research only.",
      disclaimerBody: "This product is intended solely for controlled laboratory research and analytical use by appropriately trained persons. It is not intended for human or veterinary use and must not be ingested, injected, inhaled, applied to the body, or used in food, feed or cosmetics. The information is not medical advice and does not constitute a recommendation for the diagnosis, treatment or prevention of disease. No dosing or administration guidance is provided. Handle the product in accordance with applicable law, laboratory SOPs and product-specific safety information. Keep out of reach of children.",
      footerLine: "clarity from product to documentation."
    }
  };

  const slug = document.body.dataset.product;
  const product = products[slug];
  if (!product) return;

  const makeTranslations = (language) => ({
    ...common[language],
    ...product[language],
    pageTitle: `${product.name} vial — Stark Peptides`,
    pageDescription: language === "da"
      ? `${product.name} fra Stark Peptides — produktbeskrivelse og forskningskontekst til kontrolleret laboratorieforskning.`
      : `${product.name} from Stark Peptides — product description and research context for controlled laboratory research.`,
    stageAria: language === "da"
      ? `Plads reserveret til produktbillede af ${product.name}`
      : `Space reserved for a product image of ${product.name}`,
    eyebrow: language === "da" ? `Vial ${product.index}` : `Vial ${product.index}`,
    aboutTitle: language === "da" ? `Om ${product.name}` : `About ${product.name}`
  });

  window.STARK_PRODUCT_TRANSLATIONS = {
    da: makeTranslations("da"),
    en: makeTranslations("en")
  };

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = `https://stark-pep.vercel.app/products/${slug}/`;

  document.body.innerHTML = `
    <header class="site-header">
      <div class="shell nav">
        <a class="brand" href="/#top" aria-label="Stark Peptides, gå til forsiden" data-i18n-aria="brandAria">
          <img class="brand-logo-image" src="/assets/stark-peptides-logo-transparent.png" alt="Stark Peptides">
        </a>
        <div class="header-actions">
          <nav class="nav-links" aria-label="Primær navigation" data-i18n-aria="navAria">
            <a href="/#produkter" data-i18n="navProducts">Produkter</a>
            <a href="/#dokumentation" data-i18n="navReports">Find Janoshik rapport</a>
            <a class="nav-cta" href="/#kontakt" data-i18n="navContact">Kontakt os</a>
          </nav>
          <div class="language-switch" aria-label="Vælg sprog" data-i18n-aria="languageAria">
            <button type="button" data-lang="da" aria-pressed="true">DA</button>
            <button type="button" data-lang="en" aria-pressed="false">EN</button>
          </div>
        </div>
      </div>
    </header>

    <div class="research-strip" role="note" data-i18n="researchStrip">Kun til laboratorieforskning — ikke til brug på mennesker eller dyr.</div>

    <main class="product-main">
      <div class="shell">
        <a class="back-link" href="/#produkter"><span aria-hidden="true">←</span> <span data-i18n="backProducts">Tilbage til produkter</span></a>

        <section class="product-hero" aria-labelledby="product-title">
          <div class="product-stage product-stage--vial" role="img" aria-label="Plads reserveret til produktbillede" data-i18n-aria="stageAria">
            <div class="vial-stage-card" aria-hidden="true">
              <div class="vial-stage-logo"><img src="/assets/stark-peptides-logo-transparent.png" alt=""></div>
              <span class="vial-stage-kicker" data-i18n="stageKicker">Vial-format</span>
              <strong>${product.name}</strong>
              <span class="vial-stage-format">VIAL</span>
              <small data-i18n="imagePending">Produktbillede tilføjes</small>
            </div>
          </div>

          <div class="product-copy">
            <p class="eyebrow" data-i18n="eyebrow">Vial ${product.index}</p>
            <h1 id="product-title">${product.name}</h1>
            <p class="product-lead" data-i18n="lead">${product.da.lead}</p>
            <div class="research-pill" data-i18n="researchBadge">Kun til forskning</div>
            <div class="actions">
              <a class="button button-primary" href="/#dokumentation" data-i18n="reportButton">Find Janoshik rapport</a>
              <a class="button button-secondary" href="/#kontakt" data-i18n="contactButton">Kontakt os</a>
            </div>
          </div>
        </section>

        <section class="details-section" aria-labelledby="details-title">
          <div class="details-heading">
            <p class="eyebrow" data-i18n="detailsEyebrow">Produktinformation</p>
            <h2 id="details-title" data-i18n="detailsTitle">Beskrivelse og forskningskontekst</h2>
            <p data-i18n="detailsIntro">Et neutralt overblik over materialet og de laboratoriemodeller, hvor det undersøges.</p>
          </div>

          <div class="facts-grid">
            <article class="fact-card">
              <span class="fact-label" data-i18n="formatLabel">Format</span>
              <p class="fact-value" data-i18n="formatValue">Vial · styrke fremgår af produktetiketten</p>
            </article>
            <article class="fact-card">
              <span class="fact-label" data-i18n="useLabel">Tilsigtet anvendelse</span>
              <p class="fact-value" data-i18n="useValue">Laboratorieforskning og analytisk brug</p>
            </article>
            <article class="fact-card">
              <span class="fact-label" data-i18n="documentationLabel">Dokumentation</span>
              <p class="fact-value" data-i18n="documentationValue">Batchspecifik Janoshik-rapport, når tilgængelig</p>
            </article>
          </div>

          <div class="content-grid">
            <article class="info-card">
              <h2 data-i18n="aboutTitle">Om ${product.name}</h2>
              <p data-i18n="aboutCopy">${product.da.aboutCopy}</p>
            </article>
            <article class="info-card">
              <h2 data-i18n="researchTitle">Forskningskontekst</h2>
              <p data-i18n="researchCopy">${product.da.researchCopy}</p>
            </article>
            <article class="info-card info-card--wide">
              <h2 data-i18n="documentationTitle">Dokumentation før brug</h2>
              <p data-i18n="documentationCopy">${common.da.documentationCopy}</p>
            </article>
          </div>

          <aside class="disclaimer" aria-labelledby="disclaimer-title">
            <strong data-i18n="disclaimerEyebrow">Vigtig disclaimer</strong>
            <h2 id="disclaimer-title" data-i18n="disclaimerTitle">Kun til laboratorieforskning.</h2>
            <p data-i18n="disclaimerBody">${common.da.disclaimerBody}</p>
          </aside>
        </section>
      </div>
    </main>

    <footer>
      <div class="shell footer-row">
        <div class="footer-logo-frame" aria-hidden="true">
          <img class="footer-logo-image" src="/assets/stark-peptides-logo-transparent.png" alt="">
        </div>
        <p><span data-i18n="footerLine">klarhed fra produkt til dokumentation.</span><br>© <span id="year"></span> Stark Peptides</p>
      </div>
    </footer>`;

  const pageBehaviour = document.createElement("script");
  pageBehaviour.src = "/assets/product-page.js";
  document.body.appendChild(pageBehaviour);
})();
