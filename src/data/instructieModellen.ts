// Uitgebreide database van instructiemodellen voor het Primair Onderwijs
// Gebaseerd op wetenschappelijk onderzoek en best practices

export interface InstructieModel {
  id: string
  naam: string
  beschrijving: string
  icon: string
  geschiktVoor: string[]
  vakgebieden: string[]
  kenmerken: string[]
  fases: Array<{
    naam: string
    beschrijving: string
    tijdsduur?: string
    activiteiten?: string[]
    docentrol?: string
    leerlingrol?: string
  }>
  voordelen: string[]
  uitdagingen: string[]
  tips: string[]
  differentiatie: string[]
  materialen: string[]
  voorbeelden: string[]
  wetenschappelijkeBasis: string
  implementatieTips: string[]
  evaluatieMogelijkheden: string[]
  combinatiesMet: string[]
  niveauIndicatoren: {
    beginner: string[]
    gevorderd: string[]
    expert: string[]
  }
}

export const instructieModellen: InstructieModel[] = [
  {
    id: 'directe_instructie',
    naam: 'Directe Instructie',
    beschrijving: 'Gestructureerde, leraargestuurde aanpak met expliciete instructie en veel begeleide oefening',
    icon: '👨‍🏫',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'engels', 'bewegingsonderwijs'],
    kenmerken: [
      'Expliciete instructie door de leraar',
      'Stap-voor-stap demonstratie',
      'Veel begeleide oefening',
      'Directe feedback en correctie',
      'Gestructureerde opbouw van eenvoudig naar complex',
      'Hoge mate van leraarcontrole',
      'Duidelijke lesdoelen en criteria',
      'Regelmatige controle van begrip'
    ],
    fases: [
      { 
        naam: 'Lesopening', 
        beschrijving: 'Activeren voorkennis en lesdoel introduceren',
        tijdsduur: '5-8 minuten',
        activiteiten: ['Voorkennis activeren', 'Lesdoel benoemen', 'Motivatie wekken', 'Verwachtingen stellen'],
        docentrol: 'Gidst en activeert',
        leerlingrol: 'Luistert en reageert'
      },
      { 
        naam: 'Modeleren', 
        beschrijving: 'Demonstreren en hardop denken',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Stap-voor-stap demonstreren', 'Hardop denken', 'Voorbeelden geven', 'Niet-voorbeelden tonen'],
        docentrol: 'Demonstreert en modelleert',
        leerlingrol: 'Observeert en luistert actief'
      },
      { 
        naam: 'Begeleide oefening', 
        beschrijving: 'Samen oefenen met ondersteuning',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Gezamenlijk oefenen', 'Vragen stellen', 'Fouten corrigeren', 'Begrip checken'],
        docentrol: 'Begeleidt en ondersteunt',
        leerlingrol: 'Oefent mee en stelt vragen'
      },
      { 
        naam: 'Zelfstandige oefening', 
        beschrijving: 'Individueel toepassen',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Individueel werken', 'Toepassen van geleerde', 'Automatiseren', 'Zelfcontrole'],
        docentrol: 'Monitort en ondersteunt',
        leerlingrol: 'Werkt zelfstandig'
      },
      { 
        naam: 'Afsluiting', 
        beschrijving: 'Evalueren en consolideren',
        tijdsduur: '5 minuten',
        activiteiten: ['Samenvatten', 'Evalueren', 'Vooruitblikken', 'Huiswerk geven'],
        docentrol: 'Vat samen en evalueert',
        leerlingrol: 'Reflecteert en plant'
      }
    ],
    voordelen: [
      'Zeer effectief voor nieuwe concepten en vaardigheden',
      'Duidelijke structuur en voorspelbaarheid',
      'Geschikt voor alle leerlingen, ook zwakkere',
      'Meetbare en snelle resultaten',
      'Efficiënt gebruik van lestijd',
      'Vermindert cognitieve belasting',
      'Bouwt systematisch expertise op'
    ],
    uitdagingen: [
      'Kan passief maken voor leerlingen',
      'Minder ruimte voor creativiteit',
      'Vereist goede timing van de leraar',
      'Kan saai worden bij overmatig gebruik',
      'Minder geschikt voor complexe problemen'
    ],
    tips: [
      'Gebruik visuele ondersteuning en concrete materialen',
      'Varieer in voorbeelden en niet-voorbeelden',
      'Check regelmatig begrip met thumbs up/down',
      'Bouw geleidelijk op van eenvoudig naar complex',
      'Geef veel positieve feedback en aanmoediging',
      'Gebruik de "I do, We do, You do" structuur',
      'Plan voldoende oefentijd in'
    ],
    differentiatie: [
      'Pas het tempo aan per leerling',
      'Geef extra voorbeelden aan zwakkere leerlingen',
      'Bied uitbreidingsopdrachten aan sterke leerlingen',
      'Gebruik verschillende representaties (visueel, auditief, kinesthetisch)',
      'Varieer in complexiteit van oefenopgaven',
      'Geef individuele ondersteuning tijdens zelfstandig werk'
    ],
    materialen: ['Whiteboard/smartboard', 'Concrete materialen', 'Voorbeelden en niet-voorbeelden', 'Oefenmateriaal op verschillende niveaus', 'Visuele hulpmiddelen'],
    voorbeelden: [
      'Nieuwe rekenstrategie aanleren (bijv. optellen met overschrijding)',
      'Spellingregel uitleggen en oefenen',
      'Grammatica instructie (bijv. werkwoordspelling)',
      'Nieuwe leestechniek aanleren',
      'Bewegingsvaardigheid in de gymles'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op cognitieve leertheorie en effectiviteitsonderzoek van Rosenshine, Hattie en anderen. Effect size: 0.59 (Hattie)',
    implementatieTips: [
      'Begin met korte lessen van 20-30 minuten',
      'Oefen de fases in tot ze automatisch gaan',
      'Monitor leerlingbegrip constant tijdens de les',
      'Pas het tempo aan op de behoeften van de klas',
      'Combineer met andere instructiemodellen voor variatie'
    ],
    evaluatieMogelijkheden: [
      'Exit tickets na de les',
      'Korte formatieve toetsen',
      'Observatie tijdens begeleide oefening',
      'Zelfstandige oefenopgaven',
      'Peer assessment'
    ],
    combinatiesMet: ['Coöperatief leren', 'Gepersonaliseerd leren', 'Gamification'],
    niveauIndicatoren: {
      beginner: ['Volg de fases strak', 'Focus op één vaardigheid per les', 'Gebruik veel concrete voorbeelden'],
      gevorderd: ['Varieer in timing van fases', 'Combineer meerdere vaardigheden', 'Pas differentiatie toe'],
      expert: ['Flexibel schakelen tussen fases', 'Anticipeer op leerlingbehoeften', 'Integreer met andere modellen']
    }
  },
  {
    id: 'onderzoekend_leren',
    naam: 'Onderzoekend Leren',
    beschrijving: 'Leerlingen ontdekken kennis door eigen onderzoek, experimenten en het stellen van vragen',
    icon: '🔍',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands', 'rekenen', 'burgerschap'],
    kenmerken: [
      'Leerlingen stellen zelf vragen',
      'Actief zoeken naar informatie',
      'Experimenten en onderzoek uitvoeren',
      'Hypotheses opstellen en toetsen',
      'Conclusies trekken uit bevindingen',
      'Reflecteren op het leerproces',
      'Samenwerken in onderzoeksteams',
      'Presenteren van resultaten'
    ],
    fases: [
      { 
        naam: 'Oriëntatie', 
        beschrijving: 'Onderzoeksvraag formuleren en interesse wekken',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Fenomeen presenteren', 'Vragen brainstormen', 'Onderzoeksvraag formuleren', 'Voorkennis activeren'],
        docentrol: 'Faciliteert en prikkelt nieuwsgierigheid',
        leerlingrol: 'Stelt vragen en toont interesse'
      },
      { 
        naam: 'Conceptualisering', 
        beschrijving: 'Hypothese opstellen en onderzoek plannen',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Hypothese opstellen', 'Onderzoeksmethode kiezen', 'Plan maken', 'Materialen verzamelen'],
        docentrol: 'Begeleidt planning en methodekeuze',
        leerlingrol: 'Plant en bereidt onderzoek voor'
      },
      { 
        naam: 'Onderzoek', 
        beschrijving: 'Gegevens verzamelen en analyseren',
        tijdsduur: '30-45 minuten',
        activiteiten: ['Experimenten uitvoeren', 'Data verzamelen', 'Observeren en meten', 'Informatie zoeken'],
        docentrol: 'Ondersteunt en begeleidt proces',
        leerlingrol: 'Voert onderzoek uit en verzamelt data'
      },
      { 
        naam: 'Conclusie', 
        beschrijving: 'Resultaten interpreteren en conclusies trekken',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Data analyseren', 'Patronen herkennen', 'Conclusies formuleren', 'Hypothese evalueren'],
        docentrol: 'Helpt bij interpretatie en analyse',
        leerlingrol: 'Analyseert en concludeert'
      },
      { 
        naam: 'Discussie', 
        beschrijving: 'Bevindingen delen en reflecteren',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Resultaten presenteren', 'Discussiëren over bevindingen', 'Reflecteren op proces', 'Nieuwe vragen stellen'],
        docentrol: 'Modereert discussie en reflectie',
        leerlingrol: 'Deelt bevindingen en reflecteert'
      }
    ],
    voordelen: [
      'Ontwikkelt onderzoeksvaardigheden en wetenschappelijk denken',
      'Stimuleert nieuwsgierigheid en intrinsieke motivatie',
      'Bevordert dieper begrip en langdurige retentie',
      'Ontwikkelt zelfstandigheid en eigenaarschap',
      'Stimuleert kritisch en analytisch denken',
      'Bereidt voor op 21e-eeuwse vaardigheden',
      'Maakt leren authentiek en betekenisvol'
    ],
    uitdagingen: [
      'Vereist meer voorbereidingstijd',
      'Kan chaotisch aanvoelen voor beginners',
      'Niet alle leerlingen zijn er klaar voor',
      'Moeilijk te plannen qua tijd',
      'Vereist veel materialen en bronnen'
    ],
    tips: [
      'Start met eenvoudige, concrete onderzoeksvragen',
      'Bied onderzoekstools en scaffolds aan',
      'Begeleid het proces intensief in het begin',
      'Vier ontdekkingen en "mislukkingen" als leermoment',
      'Stimuleer samenwerking en kennisdeling',
      'Gebruik logboeken voor reflectie',
      'Maak verbindingen met de leefwereld'
    ],
    differentiatie: [
      'Verschillende complexiteit van onderzoeksvragen',
      'Variërende mate van ondersteuning en scaffolding',
      'Keuze in onderzoeksmethoden en tools',
      'Aangepaste presentatievormen',
      'Verschillende groepsgroottes',
      'Flexibele tijdsindeling'
    ],
    materialen: ['Onderzoeksmaterialen en instrumenten', 'Computers/tablets voor informatie zoeken', 'Meetinstrumenten', 'Logboeken en registratieformulieren', 'Presentatiematerialen'],
    voorbeelden: [
      'Waarom zinken sommige voorwerpen en drijven andere?',
      'Hoe beïnvloedt muziek de concentratie?',
      'Welke factoren beïnvloeden plantengroei?',
      'Hoe verschilt het weer in verschillende seizoenen?',
      'Wat is de beste manier om afval te scheiden?'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op constructivistische leertheorie en inquiry-based learning onderzoek van Dewey, Bruner en Vygotsky',
    implementatieTips: [
      'Creëer een onderzoekende cultuur in de klas',
      'Train leerlingen in onderzoeksvaardigheden',
      'Zorg voor voldoende en gevarieerde materialen',
      'Plan flexibel en houd rekening met extra tijd',
      'Documenteer het leerproces voor evaluatie'
    ],
    evaluatieMogelijkheden: [
      'Onderzoekslogboeken en reflectieverslagen',
      'Presentaties van bevindingen',
      'Peer review van onderzoeksprocessen',
      'Portfolio van onderzoeksproducten',
      'Zelfassessment van onderzoeksvaardigheden'
    ],
    combinatiesMet: ['Projectonderwijs', 'Coöperatief leren', 'ICT-integratie'],
    niveauIndicatoren: {
      beginner: ['Gestructureerde onderzoeksopdrachten', 'Veel begeleiding', 'Eenvoudige materialen'],
      gevorderd: ['Meer open onderzoeksvragen', 'Zelfstandiger werken', 'Complexere analyses'],
      expert: ['Eigen onderzoeksvragen formuleren', 'Methodekeuzes maken', 'Kritisch evalueren']
    }
  },
  {
    id: 'coöperatief_leren',
    naam: 'Coöperatief Leren',
    beschrijving: 'Leerlingen werken samen in kleine groepen aan gemeenschappelijke doelen met individuele verantwoordelijkheid',
    icon: '🤝',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap', 'rekenen', 'expressie'],
    kenmerken: [
      'Samenwerken in kleine heterogene groepen',
      'Gedeelde verantwoordelijkheid voor groepssucces',
      'Positieve afhankelijkheid tussen groepsleden',
      'Individuele verantwoordelijkheid binnen de groep',
      'Expliciete aandacht voor sociale vaardigheden',
      'Groepsreflectie op proces en product',
      'Gelijke participatie van alle leden',
      'Face-to-face interactie'
    ],
    fases: [
      { 
        naam: 'Groepsvorming', 
        beschrijving: 'Teams samenstellen en rollen verdelen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Heterogene groepen indelen', 'Rollen toewijzen', 'Groepsregels bespreken', 'Doelen stellen'],
        docentrol: 'Organiseert en instrueert',
        leerlingrol: 'Vormt groepen en neemt rollen aan'
      },
      { 
        naam: 'Taakuitleg', 
        beschrijving: 'Opdracht en criteria uitleggen',
        tijdsduur: '10 minuten',
        activiteiten: ['Opdracht uitleggen', 'Succescriteria bespreken', 'Tijdsplanning maken', 'Vragen beantwoorden'],
        docentrol: 'Legt uit en verduidelijkt',
        leerlingrol: 'Luistert en stelt vragen'
      },
      { 
        naam: 'Samenwerking', 
        beschrijving: 'Groepen werken aan de taak',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Samenwerken aan opdracht', 'Rollen uitvoeren', 'Elkaar ondersteunen', 'Voortgang monitoren'],
        docentrol: 'Monitort en ondersteunt groepen',
        leerlingrol: 'Werkt samen en voert rol uit'
      },
      { 
        naam: 'Presentatie', 
        beschrijving: 'Resultaten delen met de klas',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Groepsresultaten presenteren', 'Actief luisteren naar anderen', 'Vragen stellen', 'Feedback geven'],
        docentrol: 'Faciliteert presentaties',
        leerlingrol: 'Presenteert en geeft feedback'
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Proces en product evalueren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Reflecteren op samenwerking', 'Product evalueren', 'Leerpunten benoemen', 'Verbeterpunten identificeren'],
        docentrol: 'Begeleidt reflectie',
        leerlingrol: 'Reflecteert en evalueert'
      }
    ],
    voordelen: [
      'Ontwikkelt sociale en communicatieve vaardigheden',
      'Biedt verschillende perspectieven en ideeën',
      'Verhoogt motivatie en betrokkenheid',
      'Bevordert inclusie en acceptatie van verschillen',
      'Ontwikkelt leiderschaps- en teamvaardigheden',
      'Stimuleert wederzijds leren en ondersteuning',
      'Bereidt voor op samenwerking in de maatschappij'
    ],
    uitdagingen: [
      'Kan leiden tot ongelijke verdeling van werk',
      'Vereist expliciete training in sociale vaardigheden',
      'Sommige leerlingen prefereren individueel werk',
      'Kan meer tijd kosten dan individueel werk',
      'Groepsdynamiek kan problematisch zijn'
    ],
    tips: [
      'Maak duidelijke afspraken over samenwerking',
      'Wissel groepssamenstelling regelmatig',
      'Begeleid het proces actief, niet alleen het product',
      'Evalueer zowel individuele als groepsprestaties',
      'Train sociale vaardigheden expliciet',
      'Gebruik structuren zoals rollen en protocollen',
      'Vier succesvolle samenwerking'
    ],
    differentiatie: [
      'Heterogene groepssamenstelling qua niveau',
      'Verschillende rollen aangepast aan sterke punten',
      'Variërende complexiteit van opdrachten',
      'Flexibele groepsgroottes (2-6 leerlingen)',
      'Aangepaste ondersteuning per groep',
      'Keuze in presentatievormen'
    ],
    materialen: ['Rollenkaarten en functieomschrijvingen', 'Groepsopdrachten en werkbladen', 'Evaluatieformulieren', 'Timer voor tijdsbeheer', 'Flipcharts en markers'],
    voorbeelden: [
      'Jigsaw methode voor geschiedenis (Middeleeuwen)',
      'Groepsonderzoek naar dieren in hun leefomgeving',
      'Samen een verhaal schrijven met verschillende rollen',
      'Wiskundeprobleem oplossen in teams',
      'Debat voorbereiden over maatschappelijk thema'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op sociale leertheorie van Johnson & Johnson, Slavin en Kagan. Effect size: 0.40-0.59 (Hattie)',
    implementatieTips: [
      'Start met eenvoudige opdrachten van korte duur',
      'Train groepsvaardigheden expliciet vooraf',
      'Monitor groepsprocessen actief tijdens het werk',
      'Evalueer regelmatig en pas aan waar nodig',
      'Creëer een cultuur van samenwerking in de klas'
    ],
    evaluatieMogelijkheden: [
      'Groepsproducten met individuele verantwoording',
      'Peer assessment van groepsleden',
      'Zelfassessment van samenwerkingsvaardigheden',
      'Observatie van groepsprocessen',
      'Reflectieverslagen over samenwerking'
    ],
    combinatiesMet: ['Onderzoekend leren', 'Projectonderwijs', 'Peer tutoring'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige taken', 'Duidelijke rollen', 'Veel structuur en begeleiding'],
      gevorderd: ['Complexere opdrachten', 'Flexibele rollen', 'Meer zelfstandigheid'],
      expert: ['Open opdrachten', 'Zelfgekozen rollen', 'Zelfregulerende groepen']
    }
  },
  {
    id: 'spelend_leren',
    naam: 'Spelend Leren',
    beschrijving: 'Leren door middel van spel, ontdekking en plezier in een speelse, veilige omgeving',
    icon: '🎮',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['rekenen', 'nederlands', 'bewegingsonderwijs', 'expressie', 'wereldoriëntatie'],
    kenmerken: [
      'Speelse en plezierige leeromgeving',
      'Intrinsieke motivatie door spelelementen',
      'Experimenteren en ontdekken',
      'Sociale interactie en samenspel',
      'Leren door doen en ervaren',
      'Natuurlijke en ongedwongen sfeer',
      'Regelmatige feedback door spelresultaten',
      'Herhaling zonder verveling'
    ],
    fases: [
      { 
        naam: 'Warming-up', 
        beschrijving: 'Speelse sfeer creëren en interesse wekken',
        tijdsduur: '5 minuten',
        activiteiten: ['Stemming creëren', 'Interesse wekken', 'Groep energiek maken', 'Verwachtingen stellen'],
        docentrol: 'Enthousiasmeert en motiveert',
        leerlingrol: 'Raakt gemotiveerd en nieuwsgierig'
      },
      { 
        naam: 'Spelintroductie', 
        beschrijving: 'Spelregels uitleggen en demonstreren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Spelregels uitleggen', 'Demonstreren met voorbeelden', 'Vragen beantwoorden', 'Proefrondje spelen'],
        docentrol: 'Legt uit en demonstreert',
        leerlingrol: 'Luistert en oefent spelregels'
      },
      { 
        naam: 'Spelen', 
        beschrijving: 'Actief deelnemen aan het spel',
        tijdsduur: '20-30 minuten',
        activiteiten: ['Actief spelen', 'Experimenteren met strategieën', 'Samenwerken of concurreren', 'Genieten van het proces'],
        docentrol: 'Begeleidt en ondersteunt spelproces',
        leerlingrol: 'Speelt actief en leert door ervaring'
      },
      { 
        naam: 'Reflectie', 
        beschrijving: 'Bespreken wat geleerd is tijdens het spel',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Ervaringen delen', 'Geleerde strategieën benoemen', 'Verbanden leggen met leerdoelen', 'Successen vieren'],
        docentrol: 'Faciliteert reflectie en maakt leren expliciet',
        leerlingrol: 'Reflecteert en deelt ervaringen'
      },
      { 
        naam: 'Transfer', 
        beschrijving: 'Koppeling maken naar andere situaties',
        tijdsduur: '5 minuten',
        activiteiten: ['Toepassing in andere contexten bespreken', 'Voorbeelden geven', 'Plannen voor verdere oefening'],
        docentrol: 'Helpt bij transfer naar andere situaties',
        leerlingrol: 'Maakt verbindingen en plant toepassing'
      }
    ],
    voordelen: [
      'Zeer hoge motivatie en betrokkenheid',
      'Natuurlijke en ontspannen manier van leren',
      'Stimuleert sociale ontwikkeling en samenwerking',
      'Bevordert creativiteit en probleemoplossend denken',
      'Emotionele betrokkenheid verhoogt retentie',
      'Laagdrempelig voor alle leerlingen',
      'Maakt abstract concreet en begrijpelijk'
    ],
    uitdagingen: [
      'Kan afleiden van leerdoelen',
      'Vereist goede klassenmanagement',
      'Niet alle ouders/collega\'s zien waarde',
      'Kan chaotisch aanvoelen',
      'Moeilijk meetbare leerresultaten'
    ],
    tips: [
      'Kies spellen die aansluiten bij leerdoelen',
      'Zorg voor een veilige en gestructureerde omgeving',
      'Begeleid waar nodig maar laat leerlingen experimenteren',
      'Maak het leren achteraf expliciet zichtbaar',
      'Varieer in spelvormen en moeilijkheidsgraden',
      'Gebruik spellen als beloning en motivatie',
      'Evalueer regelmatig de effectiviteit'
    ],
    differentiatie: [
      'Verschillende moeilijkheidsniveaus binnen hetzelfde spel',
      'Keuze uit verschillende spelvormen',
      'Aangepaste rollen voor verschillende vaardigheden',
      'Flexibele spelregels naar behoefte',
      'Individuele of groepsspellen',
      'Verschillende tijdsduur per leerling'
    ],
    materialen: ['Educatieve spellen en spelmateriaal', 'Dobbelstenen en speelkaarten', 'Digitale leerspellen', 'Zelfgemaakte spelletjes', 'Timer en scorelijsten', 'Beloningen en certificaten'],
    voorbeelden: [
      'Rekenspellen met dobbelstenen en kaarten',
      'Woordspellen voor spelling en woordenschat',
      'Bewegingsspellen voor taal en rekenen',
      'Digitale leerspellen op tablet/computer',
      'Rollenspellen voor sociale vaardigheden'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op speltheorie, ontwikkelingspsychologie van Piaget en Vygotsky, en neurobiologisch onderzoek naar plezier en leren',
    implementatieTips: [
      'Kies educatieve spellen die aansluiten bij curriculum',
      'Balanceer plezier en leren - beide zijn belangrijk',
      'Creëer een speelse cultuur in de hele klas',
      'Reflecteer altijd op het leereffect na het spel',
      'Train leerlingen in spelregels en fair play'
    ],
    evaluatieMogelijkheden: [
      'Observatie tijdens het spelen',
      'Korte reflectiegesprekken na spellen',
      'Spelresultaten als indicator voor begrip',
      'Portfolio van spelactiviteiten',
      'Peer feedback over spelgedrag'
    ],
    combinatiesMet: ['Gamification', 'Bewegingsonderwijs', 'Coöperatief leren'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige spelregels', 'Korte spellen', 'Veel begeleiding'],
      gevorderd: ['Complexere spellen', 'Langere speelsessies', 'Meer zelfstandigheid'],
      expert: ['Strategische spellen', 'Zelf spellen bedenken', 'Anderen leren spelen']
    }
  },
  {
    id: 'gepersonaliseerd_leren',
    naam: 'Gepersonaliseerd Leren',
    beschrijving: 'Onderwijs aangepast aan individuele behoeften, leerstijlen, tempo en interesses van elke leerling',
    icon: '🎯',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'ict', 'wereldoriëntatie'],
    kenmerken: [
      'Individuele leerpaden en doelen',
      'Flexibel tempo per leerling',
      'Keuzemogelijkheden in content en methode',
      'Adaptieve materialen en technologie',
      'Continue monitoring van voortgang',
      'Flexibele groepering van leerlingen',
      'Zelfregulatie en eigenaarschap',
      'Data-gedreven besluitvorming'
    ],
    fases: [
      { 
        naam: 'Diagnose', 
        beschrijving: 'Leerbehoeften en niveau in kaart brengen',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Voortoets afnemen', 'Leervoorkeuren inventariseren', 'Doelen bespreken', 'Leerstijl bepalen'],
        docentrol: 'Diagnosticeert en analyseert',
        leerlingrol: 'Toont niveau en voorkeuren'
      },
      { 
        naam: 'Planning', 
        beschrijving: 'Individueel leerplan opstellen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Leerpad bepalen', 'Materialen selecteren', 'Tijdsplanning maken', 'Doelen stellen'],
        docentrol: 'Plant en adviseert',
        leerlingrol: 'Kiest en plant mee'
      },
      { 
        naam: 'Uitvoering', 
        beschrijving: 'Werken aan persoonlijke doelen',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Individueel werken', 'Keuzes maken', 'Hulp vragen', 'Voortgang monitoren'],
        docentrol: 'Begeleidt individueel en faciliteert',
        leerlingrol: 'Werkt zelfstandig aan eigen doelen'
      },
      { 
        naam: 'Monitoring', 
        beschrijving: 'Voortgang bijhouden en bijsturen',
        tijdsduur: 'Doorlopend',
        activiteiten: ['Voortgang checken', 'Feedback geven', 'Aanpassingen maken', 'Ondersteuning bieden'],
        docentrol: 'Monitort en stuurt bij',
        leerlingrol: 'Reflecteert op eigen voortgang'
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Resultaten en proces evalueren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Resultaten bespreken', 'Reflecteren op leerproces', 'Nieuwe doelen stellen', 'Succes vieren'],
        docentrol: 'Evalueert en motiveert',
        leerlingrol: 'Reflecteert en stelt nieuwe doelen'
      }
    ],
    voordelen: [
      'Optimale uitdaging voor elke leerling',
      'Verhoogt eigenaarschap en motivatie',
      'Betere leerresultaten door maatwerk',
      'Ontwikkelt zelfvertrouwen en zelfstandigheid',
      'Respecteert individuele verschillen',
      'Efficiënter gebruik van leertijd',
      'Bereidt voor op levenslang leren'
    ],
    uitdagingen: [
      'Zeer arbeidsintensief voor leraren',
      'Vereist veel verschillende materialen',
      'Complexe organisatie en planning',
      'Kan sociale cohesie verminderen',
      'Technologie-afhankelijk'
    ],
    tips: [
      'Start klein met één vak of onderdeel',
      'Gebruik data om beslissingen te nemen',
      'Bied betekenisvolle keuzes aan leerlingen',
      'Vier individuele vooruitgang en groei',
      'Train leerlingen in zelfregulatie en planning',
      'Gebruik technologie slim als ondersteuning',
      'Houd balans tussen individueel en groepswerk'
    ],
    differentiatie: [
      'Verschillende leerpaden per leerling',
      'Variërend tempo en tijdsindeling',
      'Keuze in materialen en methoden',
      'Flexibele en individuele doelen',
      'Aangepaste ondersteuning en uitdaging',
      'Verschillende evaluatievormen'
    ],
    materialen: ['Adaptieve software en apps', 'Materialen op verschillende niveaus', 'Voortgangsregistratie systemen', 'Keuzemenu\'s en leercontracten', 'Individuele werkplekken'],
    voorbeelden: [
      'Adaptieve rekensoftware die niveau aanpast',
      'Leesniveaugroepen met eigen materialen',
      'Keuzeprojecten binnen thema\'s',
      'Individuele leercontracten',
      'Flexibele toetsing op eigen niveau'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op differentiatietheorie van Tomlinson, adaptief leren onderzoek en multiple intelligence theorie van Gardner',
    implementatieTips: [
      'Begin met één vak en bouw langzaam uit',
      'Gebruik technologie slim voor administratie',
      'Train leerlingen in het maken van keuzes',
      'Monitor intensief en pas regelmatig aan',
      'Creëer flexibele leeromgeving'
    ],
    evaluatieMogelijkheden: [
      'Individuele voortgangsmonitoring',
      'Portfolio\'s van leerwerk',
      'Zelfassessment en reflectie',
      'Adaptieve toetsing',
      'Leerconferenties met leerlingen'
    ],
    combinatiesMet: ['ICT-integratie', 'Formatief evalueren', 'Zelfregulatie'],
    niveauIndicatoren: {
      beginner: ['Beperkte keuzes', 'Veel structuur', 'Eenvoudige differentiatie'],
      gevorderd: ['Meer keuzemogelijkheden', 'Flexibele groepering', 'Complexere aanpassingen'],
      expert: ['Volledige personalisatie', 'Leerling-gestuurd', 'Adaptieve systemen']
    }
  },
  {
    id: 'projectonderwijs',
    naam: 'Projectonderwijs',
    beschrijving: 'Langdurige, thematische projecten die verschillende vakken integreren rond authentieke vraagstukken',
    icon: '📊',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'ict', 'expressie', 'burgerschap'],
    kenmerken: [
      'Thematische en vakoverstijgende aanpak',
      'Authentieke en realistische opdrachten',
      'Langere tijdsduur (meerdere weken)',
      'Concreet eindproduct of presentatie',
      'Samenwerking in projectteams',
      'Verbinding met de echte wereld',
      'Zelfstandig onderzoek en planning',
      'Reflectie op proces en product'
    ],
    fases: [
      { 
        naam: 'Projectstart', 
        beschrijving: 'Thema introduceren en plannen maken',
        tijdsduur: '1-2 lessen',
        activiteiten: ['Thema en context introduceren', 'Onderzoeksvragen verzamelen', 'Projectplan maken', 'Teams vormen'],
        docentrol: 'Introduceert en faciliteert planning',
        leerlingrol: 'Oriënteert zich en plant mee'
      },
      { 
        naam: 'Onderzoek', 
        beschrijving: 'Informatie verzamelen en verwerken',
        tijdsduur: '3-5 lessen',
        activiteiten: ['Bronnen zoeken en beoordelen', 'Informatie verzamelen', 'Data analyseren', 'Interviews afnemen'],
        docentrol: 'Begeleidt onderzoeksproces',
        leerlingrol: 'Voert onderzoek uit'
      },
      { 
        naam: 'Uitwerking', 
        beschrijving: 'Aan het eindproduct werken',
        tijdsduur: '4-6 lessen',
        activiteiten: ['Product ontwerpen en maken', 'Samenwerken in teams', 'Feedback verwerken', 'Kwaliteit bewaken'],
        docentrol: 'Ondersteunt productie en kwaliteit',
        leerlingrol: 'Werkt aan eindproduct'
      },
      { 
        naam: 'Presentatie', 
        beschrijving: 'Resultaten tonen aan publiek',
        tijdsduur: '1-2 lessen',
        activiteiten: ['Presenteren aan publiek', 'Vragen beantwoorden', 'Feedback ontvangen', 'Producten tentoonstellen'],
        docentrol: 'Faciliteert presentaties',
        leerlingrol: 'Presenteert en ontvangt feedback'
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Project en proces evalueren',
        tijdsduur: '1 les',
        activiteiten: ['Reflecteren op proces', 'Product evalueren', 'Leren benoemen', 'Verbeterpunten identificeren'],
        docentrol: 'Begeleidt evaluatie en reflectie',
        leerlingrol: 'Evalueert en reflecteert'
      }
    ],
    voordelen: [
      'Realistische en betekenisvolle context',
      'Diepgaand en geïntegreerd leren',
      'Ontwikkelt 21e-eeuwse vaardigheden',
      'Hoge motivatie door authenticiteit',
      'Verbindt school met maatschappij',
      'Stimuleert creativiteit en innovatie',
      'Bereidt voor op vervolgonderwijs'
    ],
    uitdagingen: [
      'Complexe planning en organisatie',
      'Moeilijk te beoordelen',
      'Vereist veel voorbereidingstijd',
      'Kan chaotisch aanvoelen',
      'Niet alle leerdoelen komen aan bod'
    ],
    tips: [
      'Kies relevante en actuele thema\'s',
      'Plan goed en houd overzicht',
      'Begeleid intensief maar laat leerlingen leiden',
      'Vier successen en leer van mislukkingen',
      'Zorg voor echte opdrachten en publiek',
      'Documenteer het proces voor evaluatie',
      'Betrek externe partners waar mogelijk'
    ],
    differentiatie: [
      'Verschillende rollen binnen projectteams',
      'Variërende complexiteit van deelvragen',
      'Keuze in eindproducten en presentatievormen',
      'Flexibele groepssamenstelling',
      'Aangepaste ondersteuning per team',
      'Verschillende evaluatiecriteria'
    ],
    materialen: ['Projectplansjablonen', 'Onderzoeksmaterialen en bronnen', 'ICT-middelen voor productie', 'Presentatiematerialen', 'Evaluatierubrics'],
    voorbeelden: [
      'Project Middeleeuwen met kasteel bouwen',
      'Duurzaamheidsproject met schooltuin',
      'Buurtonderzoek met adviesrapport',
      'Historisch museum over lokale geschiedenis',
      'Bedrijfsplan voor schoolkantine'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op projectmatig leren theorie, authentiek leren en constructivisme van Dewey en Kilpatrick',
    implementatieTips: [
      'Start met korte projecten van 2-3 weken',
      'Zorg voor duidelijke structuur en mijlpalen',
      'Betrek de omgeving en externe partners',
      'Documenteer het proces voor reflectie',
      'Evalueer zowel proces als product'
    ],
    evaluatieMogelijkheden: [
      'Portfolio van projectwerk',
      'Presentaties en eindproducten',
      'Peer assessment binnen teams',
      'Zelfassessment van projectvaardigheden',
      'Reflectieverslagen over leerproces'
    ],
    combinatiesMet: ['Onderzoekend leren', 'ICT-integratie', 'Coöperatief leren'],
    niveauIndicatoren: {
      beginner: ['Korte projecten', 'Veel structuur', 'Duidelijke stappen'],
      gevorderd: ['Langere projecten', 'Meer zelfstandigheid', 'Complexere opdrachten'],
      expert: ['Open projecten', 'Zelfgekozen thema\'s', 'Externe samenwerking']
    }
  },
  {
    id: 'flipped_classroom',
    naam: 'Flipped Classroom',
    beschrijving: 'Leerlingen bereiden thuis theorie voor, in de klas wordt geoefend en toegepast',
    icon: '🔄',
    geschiktVoor: ['groep6', 'groep7', 'groep8', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'wereldoriëntatie', 'ict'],
    kenmerken: [
      'Theorie thuis, toepassing in de klas',
      'Gebruik van video\'s en online materialen',
      'Meer tijd voor begeleiding in de klas',
      'Zelfstandig leren en verantwoordelijkheid',
      'Actieve leeractiviteiten tijdens lessen',
      'Gepersonaliseerde ondersteuning',
      'Flexibel tempo voor theorie',
      'Meer interactie tussen leraar en leerling'
    ],
    fases: [
      { 
        naam: 'Voorbereiding thuis', 
        beschrijving: 'Leerlingen bestuderen nieuwe stof thuis',
        tijdsduur: '15-30 minuten thuis',
        activiteiten: ['Video\'s bekijken', 'Teksten lezen', 'Aantekeningen maken', 'Vragen formuleren'],
        docentrol: 'Creëert materialen en monitort voortgang',
        leerlingrol: 'Bereidt zich voor en neemt verantwoordelijkheid'
      },
      { 
        naam: 'Check-in', 
        beschrijving: 'Begrip checken en vragen beantwoorden',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Vragen beantwoorden', 'Begrip checken', 'Onduidelijkheden wegwerken', 'Samenvatten'],
        docentrol: 'Beantwoordt vragen en checkt begrip',
        leerlingrol: 'Stelt vragen en toont begrip'
      },
      { 
        naam: 'Toepassing', 
        beschrijving: 'Actief werken met de nieuwe kennis',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Oefenopgaven maken', 'Problemen oplossen', 'Projecten uitvoeren', 'Samenwerken'],
        docentrol: 'Begeleidt individueel en ondersteunt',
        leerlingrol: 'Past kennis toe en werkt actief'
      },
      { 
        naam: 'Verdieping', 
        beschrijving: 'Uitdaging en verrijking voor snelle leerlingen',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Uitdagende opdrachten', 'Anderen helpen', 'Verdiepingsstof', 'Creatieve toepassingen'],
        docentrol: 'Biedt uitdaging en verrijking',
        leerlingrol: 'Verdiept kennis en helpt anderen'
      },
      { 
        naam: 'Afsluiting', 
        beschrijving: 'Reflectie en vooruitblik',
        tijdsduur: '5 minuten',
        activiteiten: ['Reflecteren op leren', 'Volgende stappen bespreken', 'Huiswerk geven', 'Succes vieren'],
        docentrol: 'Reflecteert en plant vooruit',
        leerlingrol: 'Reflecteert en plant verder leren'
      }
    ],
    voordelen: [
      'Meer tijd voor individuele begeleiding',
      'Leerlingen kunnen eigen tempo bepalen',
      'Actievere en interactievere lessen',
      'Ontwikkelt zelfstandigheid en verantwoordelijkheid',
      'Efficiënter gebruik van lestijd',
      'Mogelijkheid tot herhaling van uitleg',
      'Meer tijd voor toepassing en oefening'
    ],
    uitdagingen: [
      'Vereist toegang tot technologie thuis',
      'Niet alle leerlingen bereiden zich voor',
      'Ouders moeten ondersteunen',
      'Veel voorbereidingstijd voor materialen',
      'Cultuuromslag voor leerlingen en ouders'
    ],
    tips: [
      'Start geleidelijk met korte video\'s',
      'Maak voorbereiding verplicht en controleerbaar',
      'Zorg voor alternatieve toegang tot materialen',
      'Train leerlingen in zelfstandig leren',
      'Communiceer duidelijk met ouders',
      'Gebruik interactieve elementen in video\'s',
      'Evalueer regelmatig de effectiviteit'
    ],
    differentiatie: [
      'Verschillende video\'s per niveau',
      'Flexibel tempo voor voorbereiding',
      'Keuze in voorbereidingsmaterialen',
      'Aangepaste toepassingsopdrachten',
      'Extra ondersteuning voor zwakkere leerlingen',
      'Verrijking voor snelle leerlingen'
    ],
    materialen: ['Instructievideo\'s of online lessen', 'Digitale platformen', 'Tablets/computers', 'Interactieve oefeningen', 'Checklijsten voor voorbereiding'],
    voorbeelden: [
      'Rekenvideo\'s over breuken thuis, oefenen in de klas',
      'Geschiedenisles via video, discussie in de klas',
      'Grammatica-uitleg online, schrijfopdrachten in de klas',
      'Natuurkunde-experimenten na video-instructie',
      'Taalles met uitspraak-video\'s thuis'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op Bloom\'s taxonomie en onderzoek naar actief leren van Bergmann & Sams',
    implementatieTips: [
      'Begin met één vak en bouw langzaam uit',
      'Zorg voor goede technische infrastructuur',
      'Train leerlingen in digitale vaardigheden',
      'Communiceer voordelen aan ouders',
      'Monitor voorbereiding van leerlingen'
    ],
    evaluatieMogelijkheden: [
      'Online quizzes na video\'s',
      'Toepassingsopdrachten in de klas',
      'Peer teaching van voorbereidde stof',
      'Reflectie op leerproces',
      'Portfolio van thuiswerk en klaswerk'
    ],
    combinatiesMet: ['ICT-integratie', 'Gepersonaliseerd leren', 'Peer tutoring'],
    niveauIndicatoren: {
      beginner: ['Korte video\'s', 'Eenvoudige opdrachten', 'Veel ondersteuning'],
      gevorderd: ['Langere materialen', 'Complexere toepassingen', 'Meer zelfstandigheid'],
      expert: ['Zelfgekozen bronnen', 'Eigen tempo', 'Peer teaching']
    }
  },
  {
    id: 'blended_learning',
    naam: 'Blended Learning',
    beschrijving: 'Combinatie van traditioneel onderwijs met digitale leeromgevingen en tools',
    icon: '🔗',
    geschiktVoor: ['groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie', 'ict', 'engels'],
    kenmerken: [
      'Combinatie van face-to-face en online leren',
      'Flexibele leeromgeving',
      'Gebruik van digitale tools en platforms',
      'Gepersonaliseerde leerpaden',
      'Data-gedreven instructie',
      'Zelfregulatie en eigenaarschap',
      'Synchrone en asynchrone activiteiten',
      'Continue feedback en monitoring'
    ],
    fases: [
      {
        naam: 'Online voorbereiding',
        beschrijving: 'Leerlingen bereiden zich voor via digitale middelen',
        tijdsduur: '15-30 minuten',
        activiteiten: ['Video\'s bekijken', 'Online oefeningen', 'Digitale bronnen raadplegen'],
        docentrol: 'Monitort voortgang online',
        leerlingrol: 'Bereidt zich zelfstandig voor'
      },
      {
        naam: 'Face-to-face instructie',
        beschrijving: 'Klassikale instructie en begeleiding',
        tijdsduur: '20-30 minuten',
        activiteiten: ['Uitleg en demonstratie', 'Vragen beantwoorden', 'Groepsdiscussie'],
        docentrol: 'Geeft instructie en begeleidt',
        leerlingrol: 'Luistert actief en stelt vragen'
      },
      {
        naam: 'Hybride oefening',
        beschrijving: 'Combinatie van digitaal en analoog oefenen',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Digitale oefeningen', 'Samenwerking', 'Individuele begeleiding'],
        docentrol: 'Begeleidt individueel en faciliteert',
        leerlingrol: 'Oefent op eigen niveau en tempo'
      }
    ],
    voordelen: [
      'Flexibiliteit in tijd en plaats',
      'Gepersonaliseerde leerervaring',
      'Efficiënt gebruik van technologie',
      'Meer tijd voor individuele begeleiding',
      'Data-inzichten in leerproces',
      'Voorbereiding op digitale samenleving'
    ],
    uitdagingen: [
      'Vereist goede digitale infrastructuur',
      'Leraren moeten digitaal vaardig zijn',
      'Niet alle leerlingen hebben thuis toegang',
      'Balans tussen online en offline',
      'Meer voorbereidingstijd'
    ],
    tips: [
      'Start klein met één digitaal element',
      'Train leerlingen in digitale vaardigheden',
      'Zorg voor alternatieve toegang',
      'Monitor online activiteiten',
      'Evalueer regelmatig de balans'
    ],
    differentiatie: [
      'Verschillende digitale tools per niveau',
      'Flexibel tempo online',
      'Keuze in leeractiviteiten',
      'Aangepaste ondersteuning',
      'Variërende complexiteit'
    ],
    materialen: ['Tablets/computers', 'Leerplatform', 'Digitale content', 'Traditionele materialen'],
    voorbeelden: [
      'Khan Academy voor rekenen + klassikale uitleg',
      'Online leesboeken + groepsdiscussie',
      'Digitale experimenten + fysieke proeven',
      'Video-instructie + praktische oefening'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op blended learning onderzoek van Graham, Dziuban en Picciano',
    implementatieTips: [
      'Begin met bekende digitale tools',
      'Zorg voor technische ondersteuning',
      'Train ouders in thuisondersteuning',
      'Evalueer effectiviteit regelmatig'
    ],
    evaluatieMogelijkheden: [
      'Online analytics en voortgangsdata',
      'Digitale portfolios',
      'Hybride toetsing',
      'Peer feedback online'
    ],
    combinatiesMet: ['Gepersonaliseerd leren', 'Flipped classroom', 'ICT-integratie'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige apps', 'Veel begeleiding', 'Korte online sessies'],
      gevorderd: ['Complexere platforms', 'Meer zelfstandigheid', 'Langere online werk'],
      expert: ['Geavanceerde tools', 'Zelfregulatie', 'Peer mentoring online']
    }
  },
  {
    id: 'formatief_evalueren',
    naam: 'Formatief Evalueren',
    beschrijving: 'Continue monitoring en aanpassing van onderwijs gebaseerd op leerlingvoortgang',
    icon: '📊',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie', 'engels', 'bewegingsonderwijs'],
    kenmerken: [
      'Continue monitoring van leerproces',
      'Directe feedback aan leerlingen',
      'Aanpassing van instructie op basis van data',
      'Leerling-betrokkenheid bij evaluatie',
      'Focus op leerproces, niet alleen resultaat',
      'Gebruik van verschillende evaluatiemethoden',
      'Regelmatige reflectie en bijsturing',
      'Transparante leerdoelen en criteria'
    ],
    fases: [
      {
        naam: 'Leerdoelen helder maken',
        beschrijving: 'Duidelijke criteria en verwachtingen stellen',
        tijdsduur: '5 minuten',
        activiteiten: ['Leerdoelen bespreken', 'Succescriteria uitleggen', 'Voorbeelden tonen'],
        docentrol: 'Maakt verwachtingen helder',
        leerlingrol: 'Begrijpt wat er verwacht wordt'
      },
      {
        naam: 'Continue monitoring',
        beschrijving: 'Voortgang observeren tijdens leeractiviteiten',
        tijdsduur: 'Doorlopend',
        activiteiten: ['Observeren', 'Vragen stellen', 'Werk bekijken', 'Gesprekjes voeren'],
        docentrol: 'Observeert en verzamelt informatie',
        leerlingrol: 'Toont leerproces en vraagt hulp'
      },
      {
        naam: 'Feedback geven',
        beschrijving: 'Directe, specifieke feedback op leerproces',
        tijdsduur: '2-5 minuten per leerling',
        activiteiten: ['Specifieke feedback', 'Vragen stellen', 'Aanmoedigen', 'Tips geven'],
        docentrol: 'Geeft gerichte feedback',
        leerlingrol: 'Ontvangt en verwerkt feedback'
      },
      {
        naam: 'Instructie aanpassen',
        beschrijving: 'Onderwijs bijsturen op basis van bevindingen',
        tijdsduur: 'Flexibel',
        activiteiten: ['Herhalen', 'Verdiepen', 'Differentiëren', 'Nieuwe aanpak'],
        docentrol: 'Past instructie aan',
        leerlingrol: 'Profiteert van aangepaste instructie'
      }
    ],
    voordelen: [
      'Verhoogt leerresultaten significant',
      'Voorkomt achterstanden',
      'Verhoogt motivatie en betrokkenheid',
      'Ontwikkelt zelfregulatie',
      'Maakt leren zichtbaar',
      'Verbetert leraar-leerling relatie'
    ],
    uitdagingen: [
      'Vereist veel tijd en aandacht',
      'Kan overweldigend zijn',
      'Vereist goede organisatie',
      'Cultuurverandering nodig'
    ],
    tips: [
      'Begin klein met één vak',
      'Gebruik eenvoudige tools',
      'Maak feedback specifiek en positief',
      'Betrek leerlingen bij evaluatie',
      'Documenteer systematisch'
    ],
    differentiatie: [
      'Verschillende evaluatiemethoden per leerling',
      'Aangepaste feedback per niveau',
      'Flexibele criteria',
      'Individuele gesprekken'
    ],
    materialen: ['Observatieformulieren', 'Rubrics', 'Exit tickets', 'Digitale tools', 'Portfolio mappen'],
    voorbeelden: [
      'Exit tickets na elke les',
      'Thumbs up/down tijdens uitleg',
      'Peer feedback op schrijfwerk',
      'Zelfassessment rubrics',
      'Leerconferenties'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op formatieve evaluatie onderzoek van Black & Wiliam, Hattie. Effect size: 0.90',
    implementatieTips: [
      'Maak evaluatie onderdeel van lesroutine',
      'Train leerlingen in zelfassessment',
      'Gebruik data voor instructiebeslissingen',
      'Creëer veilige feedback cultuur'
    ],
    evaluatieMogelijkheden: [
      'Observatie van leergedrag',
      'Analyse van leerproducten',
      'Gesprekken met leerlingen',
      'Zelfassessment door leerlingen'
    ],
    combinatiesMet: ['Alle andere instructiemodellen'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige observatie', 'Basis feedback', 'Duidelijke criteria'],
      gevorderd: ['Systematische monitoring', 'Gevarieerde feedback', 'Leerling betrokkenheid'],
      expert: ['Data-gedreven beslissingen', 'Zelfregulerende leerlingen', 'Peer feedback']
    }
  },
  {
    id: 'differentiatie_model',
    naam: 'Gedifferentieerde Instructie',
    beschrijving: 'Onderwijs aanpassen aan verschillende leerbehoeften, interesses en leerstijlen',
    icon: '🎨',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie', 'engels', 'expressie'],
    kenmerken: [
      'Aanpassing aan individuele leerbehoeften',
      'Variatie in content, proces en product',
      'Flexibele groepering van leerlingen',
      'Keuzemogelijkheden voor leerlingen',
      'Continue assessment en aanpassing',
      'Respecteren van verschillende leerstijlen',
      'Uitdaging voor alle niveaus',
      'Inclusieve leeromgeving'
    ],
    fases: [
      {
        naam: 'Leerling-analyse',
        beschrijving: 'In kaart brengen van leerbehoeften en -voorkeuren',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Voortoets', 'Interessepeiling', 'Leerstijl inventaris', 'Gesprekken'],
        docentrol: 'Analyseert en diagnosticeert',
        leerlingrol: 'Toont niveau en voorkeuren'
      },
      {
        naam: 'Flexibele groepering',
        beschrijving: 'Leerlingen indelen op basis van behoefte',
        tijdsduur: '5 minuten',
        activiteiten: ['Niveaugroepen', 'Interessegroepen', 'Leerstijlgroepen', 'Willekeurige groepen'],
        docentrol: 'Organiseert groepen strategisch',
        leerlingrol: 'Werkt in verschillende groepsamenstellingen'
      },
      {
        naam: 'Gedifferentieerde activiteiten',
        beschrijving: 'Verschillende activiteiten voor verschillende groepen',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Niveauopdrachten', 'Keuze-activiteiten', 'Verschillende materialen'],
        docentrol: 'Begeleidt verschillende groepen',
        leerlingrol: 'Werkt op eigen niveau en interesse'
      },
      {
        naam: 'Evaluatie en bijsturing',
        beschrijving: 'Voortgang evalueren en aanpassingen maken',
        tijdsduur: '10 minuten',
        activiteiten: ['Voortgang checken', 'Feedback geven', 'Groepen aanpassen'],
        docentrol: 'Evalueert en past aan',
        leerlingrol: 'Reflecteert op eigen leren'
      }
    ],
    voordelen: [
      'Alle leerlingen krijgen passende uitdaging',
      'Verhoogt motivatie en betrokkenheid',
      'Respecteert individuele verschillen',
      'Voorkomt onder- en overbelasting',
      'Ontwikkelt zelfstandigheid',
      'Inclusieve leeromgeving'
    ],
    uitdagingen: [
      'Zeer arbeidsintensief',
      'Complexe planning en organisatie',
      'Vereist veel verschillende materialen',
      'Kan chaotisch aanvoelen',
      'Moeilijk te evalueren'
    ],
    tips: [
      'Begin met één aspect (content, proces of product)',
      'Gebruik flexibele groepering',
      'Creëer keuzemenu\'s voor leerlingen',
      'Maak gebruik van leerling-experts',
      'Evalueer regelmatig de effectiviteit'
    ],
    differentiatie: [
      'Dit model ÍS differentiatie',
      'Kan toegepast worden op alle andere modellen',
      'Flexibele implementatie mogelijk'
    ],
    materialen: ['Materialen op verschillende niveaus', 'Keuzeboards', 'Flexibele werkplekken', 'Digitale tools'],
    voorbeelden: [
      'Leesgroepen op verschillende AVI-niveaus',
      'Rekencentra met niveauopdrachten',
      'Keuzeprojecten binnen thema',
      'Verschillende presentatievormen'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op differentiatietheorie van Carol Ann Tomlinson en multiple intelligence theorie',
    implementatieTips: [
      'Start met interesse-differentiatie',
      'Bouw langzaam op naar niveau-differentiatie',
      'Gebruik data voor groepsindeling',
      'Creëer flexibele leeromgeving'
    ],
    evaluatieMogelijkheden: [
      'Verschillende toetsvormen per niveau',
      'Portfolio assessment',
      'Zelfassessment',
      'Peer assessment'
    ],
    combinatiesMet: ['Alle instructiemodellen'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige keuzes', 'Duidelijke niveaus', 'Veel structuur'],
      gevorderd: ['Complexere differentiatie', 'Meer keuzemogelijkheden', 'Flexibele groepen'],
      expert: ['Volledige personalisatie', 'Leerling-gestuurd', 'Zelfregulatie']
    }
  },
  {
    id: 'storytelling_narratief',
    naam: 'Storytelling & Narratief Leren',
    beschrijving: 'Leren door verhalen, rollenspel en narratieve structuren',
    icon: '📖',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap', 'expressie'],
    kenmerken: [
      'Verhalen als basis voor leren',
      'Emotionele betrokkenheid',
      'Betekenisvolle context',
      'Imaginatie en creativiteit',
      'Culturele verbinding',
      'Geheugenondersteuning door verhaalstructuur',
      'Empathie-ontwikkeling',
      'Taalrijke omgeving'
    ],
    fases: [
      {
        naam: 'Verhaal introduceren',
        beschrijving: 'Verhaal vertellen of voorlezen',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Verhaal vertellen', 'Sfeer creëren', 'Interesse wekken'],
        docentrol: 'Vertelt boeiend en expressief',
        leerlingrol: 'Luistert en laat zich meevoeren'
      },
      {
        naam: 'Verhaal verkennen',
        beschrijving: 'Dieper ingaan op verhaal en betekenis',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Personages bespreken', 'Plot analyseren', 'Thema\'s ontdekken'],
        docentrol: 'Stelt verdiepende vragen',
        leerlingrol: 'Analyseert en interpreteert'
      },
      {
        naam: 'Verhaal beleven',
        beschrijving: 'Actief deelnemen aan het verhaal',
        tijdsduur: '20-30 minuten',
        activiteiten: ['Rollenspel', 'Drama', 'Verhaal navertellen', 'Alternatieve eindes'],
        docentrol: 'Faciliteert en begeleidt',
        leerlingrol: 'Speelt en ervaart actief'
      },
      {
        naam: 'Verhaal verbinden',
        beschrijving: 'Koppeling maken met leerdoelen en eigen leven',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Lessen trekken', 'Verbanden leggen', 'Toepassen op eigen situatie'],
        docentrol: 'Helpt bij transfer en toepassing',
        leerlingrol: 'Maakt verbindingen en past toe'
      }
    ],
    voordelen: [
      'Zeer hoge motivatie en betrokkenheid',
      'Ondersteunt geheugen en begrip',
      'Ontwikkelt empathie en sociale vaardigheden',
      'Stimuleert creativiteit en verbeelding',
      'Cultureel inclusief en verbindend',
      'Natuurlijke taalrijke omgeving'
    ],
    uitdagingen: [
      'Vereist goede verhaalvertelling vaardigheden',
      'Kan afleiden van concrete leerdoelen',
      'Niet alle content leent zich voor verhalen',
      'Tijdrovend om goede verhalen te vinden'
    ],
    tips: [
      'Kies verhalen die aansluiten bij leerdoelen',
      'Gebruik verschillende verhaalvormen',
      'Betrek leerlingen bij het vertellen',
      'Maak verhalen visueel en interactief',
      'Verbind altijd met leerdoelen'
    ],
    differentiatie: [
      'Verschillende verhaalcomplexiteit',
      'Variërende rollen in verhaal',
      'Keuze in verhaalactiviteiten',
      'Aangepaste ondersteuning bij begrip'
    ],
    materialen: ['Verhaalboeken', 'Kostuums en attributen', 'Muziek en geluidseffecten', 'Visuele ondersteuning'],
    voorbeelden: [
      'Geschiedenis leren via historische verhalen',
      'Rekenen met verhaalcontexten',
      'Sociale vaardigheden via fabels',
      'Natuurkunde via avonturenverhalen'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op narratieve psychologie en storytelling onderzoek van Jerome Bruner',
    implementatieTips: [
      'Bouw een verhaalrepertoire op',
      'Oefen verhaalvertelling',
      'Gebruik multimedia ondersteuning',
      'Creëer verhaalhoeken in de klas'
    ],
    evaluatieMogelijkheden: [
      'Verhaal navertellen',
      'Rollenspel beoordeling',
      'Creatieve producten',
      'Reflectie op verhaalthema\'s'
    ],
    combinatiesMet: ['Dramatisering', 'Creatief schrijven', 'Coöperatief leren'],
    niveauIndicatoren: {
      beginner: ['Eenvoudige verhalen', 'Veel visuele ondersteuning', 'Korte activiteiten'],
      gevorderd: ['Complexere verhalen', 'Meer analyse', 'Langere projecten'],
      expert: ['Eigen verhalen creëren', 'Diepgaande analyse', 'Verhaal als leermiddel'
      ]
    }
  },
  {
    id: 'mindfulness_aandacht',
    naam: 'Mindfulness & Aandachtstraining',
    beschrijving: 'Ontwikkelen van aandacht, concentratie en emotionele regulatie',
    icon: '🧘‍♀️',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    kenmerken: [
      'Aandachtstraining en concentratie',
      'Emotionele regulatie',
      'Stress-reductie',
      'Zelfbewustzijn ontwikkeling',
      'Rust en ontspanning',
      'Mindful communicatie',
      'Acceptatie en niet-oordelen',
      'Present moment awareness'
    ],
    fases: [
      {
        naam: 'Aandacht vestigen',
        beschrijving: 'Focus brengen op het hier en nu',
        tijdsduur: '2-3 minuten',
        activiteiten: ['Ademhaling observeren', 'Lichaam scannen', 'Geluiden beluisteren'],
        docentrol: 'Begeleidt aandachtsoefening',
        leerlingrol: 'Richt aandacht naar binnen'
      },
      {
        naam: 'Mindful activiteit',
        beschrijving: 'Leeractiviteit met volle aandacht uitvoeren',
        tijdsduur: '15-25 minuten',
        activiteiten: ['Mindful lezen', 'Bewust rekenen', 'Aandachtig luisteren'],
        docentrol: 'Herinnert aan mindful houding',
        leerlingrol: 'Werkt met volle aandacht'
      },
      {
        naam: 'Reflectie',
        beschrijving: 'Bewust worden van ervaringen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Ervaringen delen', 'Gevoelens benoemen', 'Aandacht evalueren'],
        docentrol: 'Faciliteert reflectie',
        leerlingrol: 'Reflecteert op ervaring'
      }
    ],
    voordelen: [
      'Verbetert concentratie en focus',
      'Reduceert stress en angst',
      'Verhoogt emotionele intelligentie',
      'Verbetert klassfeer',
      'Ondersteunt zelfregulatie',
      'Verhoogt welzijn'
    ],
    uitdagingen: [
      'Vereist training van leraar',
      'Kan weerstand oproepen',
      'Moeilijk meetbare resultaten',
      'Cultuurverandering nodig'
    ],
    tips: [
      'Begin met korte oefeningen',
      'Maak het speels voor jongere kinderen',
      'Geef zelf het goede voorbeeld',
      'Gebruik eenvoudige taal',
      'Wees geduldig en accepterend'
    ],
    differentiatie: [
      'Verschillende oefeningen per leeftijd',
      'Aangepaste duur per leerling',
      'Visuele ondersteuning waar nodig',
      'Alternatieve oefeningen voor onrustige leerlingen'
    ],
    materialen: ['Rustige muziek', 'Mindfulness kaarten', 'Ademhalings-hulpmiddelen', 'Ontspanningsmatjes'],
    voorbeelden: [
      'Mindful lezen van gedichten',
      'Bewust rekenen zonder haast',
      'Aandachtig luisteren naar natuurgeluiden',
      'Mindful tekenen en kleuren'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op mindfulness onderzoek van Jon Kabat-Zinn en educatieve toepassingen',
    implementatieTips: [
      'Volg zelf mindfulness training',
      'Begin met 2-3 minuten per dag',
      'Integreer in bestaande lessen',
      'Creëer rustige ruimte in klas'
    ],
    evaluatieMogelijkheden: [
      'Observatie van concentratie',
      'Zelfrapportage van leerlingen',
      'Klassfeer monitoring',
      'Stress-niveau indicatoren'
    ],
    combinatiesMet: ['Alle instructiemodellen', 'SEL-activiteiten'],
    niveauIndicatoren: {
      beginner: ['Korte oefeningen', 'Speelse benadering', 'Veel begeleiding'],
      gevorderd: ['Langere oefeningen', 'Meer zelfstandigheid', 'Diepere reflectie'],
      expert: ['Zelfgekozen oefeningen', 'Peer begeleiding', 'Integratie in dagelijks leven']
    }
  }
]

export const getInstructieModelById = (id: string): InstructieModel | undefined => {
  return instructieModellen.find(model => model.id === id)
}

export const getInstructieModellenByGroep = (groep: string): InstructieModel[] => {
  return instructieModellen.filter(model => model.geschiktVoor.includes(groep))
}

export const getInstructieModellenByVakgebied = (vakgebied: string): InstructieModel[] => {
  return instructieModellen.filter(model => model.vakgebieden.includes(vakgebied))
}