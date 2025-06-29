// Uitgebreide database van instructiemodellen voor het Primair Onderwijs

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
  }>
  voordelen: string[]
  tips: string[]
  differentiatie: string[]
  materialen: string[]
  voorbeelden: string[]
  wetenschappelijkeBasis: string
  implementatieTips: string[]
}

export const instructieModellen: InstructieModel[] = [
  {
    id: 'directe_instructie',
    naam: 'Directe Instructie',
    beschrijving: 'Gestructureerde, leraargestuurde aanpak met duidelijke stappen en veel oefening',
    icon: '👨‍🏫',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'engels'],
    kenmerken: [
      'Duidelijke uitleg door de leraar',
      'Stap-voor-stap instructie',
      'Veel oefening en herhaling',
      'Directe feedback',
      'Gestructureerde opbouw',
      'Expliciete modelering'
    ],
    fases: [
      { 
        naam: 'Introductie', 
        beschrijving: 'Activeren voorkennis en lesdoel benoemen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Voorkennis activeren', 'Lesdoel uitleggen', 'Motivatie wekken']
      },
      { 
        naam: 'Instructie', 
        beschrijving: 'Nieuwe stof uitleggen en demonstreren',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Modeleren', 'Uitleggen', 'Voorbeelden geven']
      },
      { 
        naam: 'Begeleide oefening', 
        beschrijving: 'Samen oefenen met ondersteuning',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Gezamenlijk oefenen', 'Feedback geven', 'Fouten corrigeren']
      },
      { 
        naam: 'Zelfstandige oefening', 
        beschrijving: 'Individueel of in groepjes oefenen',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Individueel werken', 'Toepassen', 'Automatiseren']
      },
      { 
        naam: 'Afsluiting', 
        beschrijving: 'Evalueren en vooruitblikken',
        tijdsduur: '5 minuten',
        activiteiten: ['Samenvatten', 'Evalueren', 'Vooruitblikken']
      }
    ],
    voordelen: [
      'Effectief voor nieuwe concepten',
      'Duidelijke structuur',
      'Geschikt voor alle niveaus',
      'Meetbare resultaten',
      'Efficiënt gebruik van lestijd'
    ],
    tips: [
      'Gebruik visuele ondersteuning',
      'Varieer in voorbeelden',
      'Check regelmatig begrip',
      'Bouw geleidelijk op',
      'Geef veel positieve feedback'
    ],
    differentiatie: [
      'Pas tempo aan per leerling',
      'Geef extra voorbeelden aan zwakkere leerlingen',
      'Bied uitdaging aan sterke leerlingen',
      'Gebruik verschillende representaties'
    ],
    materialen: ['Whiteboard', 'Voorbeelden', 'Oefenmateriaal', 'Visuele hulpmiddelen'],
    voorbeelden: [
      'Nieuwe rekenstrategie aanleren',
      'Spellingregel uitleggen',
      'Grammatica instructie'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op cognitieve leertheorie en effectiviteitsonderzoek van Rosenshine',
    implementatieTips: [
      'Begin met korte lessen',
      'Oefen de fases in',
      'Monitor leerlingbegrip constant',
      'Pas tempo aan op de klas'
    ]
  },
  {
    id: 'onderzoekend_leren',
    naam: 'Onderzoekend Leren',
    beschrijving: 'Leerlingen ontdekken kennis door eigen onderzoek, experimenten en vragen stellen',
    icon: '🔍',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands', 'rekenen'],
    kenmerken: [
      'Leerlingen stellen vragen',
      'Zelf informatie zoeken',
      'Experimenten uitvoeren',
      'Conclusies trekken',
      'Presenteren van resultaten',
      'Reflecteren op proces'
    ],
    fases: [
      { 
        naam: 'Oriëntatie', 
        beschrijving: 'Onderzoeksvraag formuleren en interesse wekken',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Fenomeen presenteren', 'Vragen verzamelen', 'Onderzoeksvraag formuleren']
      },
      { 
        naam: 'Conceptualisering', 
        beschrijving: 'Hypothese opstellen en onderzoek plannen',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Hypothese opstellen', 'Onderzoek plannen', 'Materialen verzamelen']
      },
      { 
        naam: 'Onderzoek', 
        beschrijving: 'Gegevens verzamelen en analyseren',
        tijdsduur: '30-45 minuten',
        activiteiten: ['Experimenten uitvoeren', 'Data verzamelen', 'Observeren']
      },
      { 
        naam: 'Conclusie', 
        beschrijving: 'Resultaten interpreteren en conclusies trekken',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Data analyseren', 'Conclusies formuleren', 'Hypothese toetsen']
      },
      { 
        naam: 'Discussie', 
        beschrijving: 'Bevindingen delen en reflecteren',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Resultaten presenteren', 'Discussiëren', 'Reflecteren']
      }
    ],
    voordelen: [
      'Ontwikkelt onderzoeksvaardigheden',
      'Stimuleert nieuwsgierigheid',
      'Dieper begrip',
      'Zelfstandigheid',
      'Kritisch denken',
      'Intrinsieke motivatie'
    ],
    tips: [
      'Start met eenvoudige vragen',
      'Bied onderzoekstools aan',
      'Begeleid het proces',
      'Vier ontdekkingen',
      'Stimuleer samenwerking'
    ],
    differentiatie: [
      'Verschillende complexiteit van vragen',
      'Variërende ondersteuning',
      'Keuze in onderzoeksmethoden',
      'Aangepaste presentatievormen'
    ],
    materialen: ['Onderzoeksmaterialen', 'Computers/tablets', 'Meetinstrumenten', 'Logboeken'],
    voorbeelden: [
      'Waarom zinken sommige dingen?',
      'Hoe groeit een plant?',
      'Welke materialen zijn het sterkst?'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op constructivistische leertheorie en inquiry-based learning onderzoek',
    implementatieTips: [
      'Creëer een onderzoekende cultuur',
      'Train leerlingen in onderzoeksvaardigheden',
      'Zorg voor voldoende materialen',
      'Plan extra tijd in'
    ]
  },
  {
    id: 'coöperatief_leren',
    naam: 'Coöperatief Leren',
    beschrijving: 'Leerlingen werken samen in kleine groepen aan gemeenschappelijke doelen',
    icon: '🤝',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap', 'rekenen'],
    kenmerken: [
      'Samenwerken in groepen',
      'Gedeelde verantwoordelijkheid',
      'Positieve afhankelijkheid',
      'Sociale vaardigheden',
      'Groepsreflectie',
      'Individuele verantwoordelijkheid'
    ],
    fases: [
      { 
        naam: 'Groepsvorming', 
        beschrijving: 'Teams samenstellen en rollen verdelen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Groepen indelen', 'Rollen toewijzen', 'Regels bespreken']
      },
      { 
        naam: 'Taakuitleg', 
        beschrijving: 'Opdracht en criteria uitleggen',
        tijdsduur: '10 minuten',
        activiteiten: ['Opdracht uitleggen', 'Criteria bespreken', 'Vragen beantwoorden']
      },
      { 
        naam: 'Samenwerking', 
        beschrijving: 'Groepen werken aan de taak',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Samenwerken', 'Rollen uitvoeren', 'Ondersteunen']
      },
      { 
        naam: 'Presentatie', 
        beschrijving: 'Resultaten delen met de klas',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Presenteren', 'Luisteren', 'Vragen stellen']
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Proces en product evalueren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Reflecteren', 'Feedback geven', 'Verbeteren']
      }
    ],
    voordelen: [
      'Sociale vaardigheden',
      'Verschillende perspectieven',
      'Motiverend',
      'Inclusief',
      'Communicatievaardigheden',
      'Wederzijds leren'
    ],
    tips: [
      'Maak duidelijke afspraken',
      'Wissel groepssamenstelling',
      'Begeleid het proces',
      'Evalueer samen',
      'Train sociale vaardigheden'
    ],
    differentiatie: [
      'Heterogene groepssamenstelling',
      'Verschillende rollen per niveau',
      'Aangepaste opdrachten',
      'Flexibele groepsgroottes'
    ],
    materialen: ['Rollenkaarten', 'Groepsopdrachten', 'Evaluatieformulieren', 'Timer'],
    voorbeelden: [
      'Jigsaw methode voor geschiedenis',
      'Groepsonderzoek naar dieren',
      'Samen een verhaal schrijven'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op sociale leertheorie van Johnson & Johnson',
    implementatieTips: [
      'Start met eenvoudige opdrachten',
      'Train groepsvaardigheden expliciet',
      'Monitor groepsprocessen',
      'Evalueer regelmatig'
    ]
  },
  {
    id: 'spelend_leren',
    naam: 'Spelend Leren',
    beschrijving: 'Leren door middel van spel, ontdekking en plezier in een speelse omgeving',
    icon: '🎮',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['rekenen', 'nederlands', 'bewegingsonderwijs', 'expressie'],
    kenmerken: [
      'Speelse activiteiten',
      'Intrinsieke motivatie',
      'Experimenteren',
      'Sociale interactie',
      'Plezier in leren',
      'Natuurlijke leeromgeving'
    ],
    fases: [
      { 
        naam: 'Warming-up', 
        beschrijving: 'Sfeer creëren en interesse wekken',
        tijdsduur: '5 minuten',
        activiteiten: ['Stemming creëren', 'Interesse wekken', 'Groep vormen']
      },
      { 
        naam: 'Spelintroductie', 
        beschrijving: 'Spelregels uitleggen en demonstreren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Regels uitleggen', 'Demonstreren', 'Vragen beantwoorden']
      },
      { 
        naam: 'Spelen', 
        beschrijving: 'Actief deelnemen aan het spel',
        tijdsduur: '20-30 minuten',
        activiteiten: ['Spelen', 'Experimenteren', 'Samenwerken']
      },
      { 
        naam: 'Reflectie', 
        beschrijving: 'Bespreken wat geleerd is',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Ervaringen delen', 'Leren benoemen', 'Verbanden leggen']
      },
      { 
        naam: 'Transfer', 
        beschrijving: 'Koppeling maken naar andere situaties',
        tijdsduur: '5 minuten',
        activiteiten: ['Toepassing bespreken', 'Voorbeelden geven', 'Plannen maken']
      }
    ],
    voordelen: [
      'Hoge motivatie',
      'Natuurlijk leren',
      'Sociale ontwikkeling',
      'Creativiteit',
      'Emotionele betrokkenheid',
      'Laagdrempelig'
    ],
    tips: [
      'Kies passende spellen',
      'Zorg voor veilige omgeving',
      'Begeleid waar nodig',
      'Maak leren zichtbaar',
      'Varieer in spelvormen'
    ],
    differentiatie: [
      'Verschillende moeilijkheidsniveaus',
      'Keuze in spellen',
      'Aangepaste rollen',
      'Flexibele regels'
    ],
    materialen: ['Spelmaterialen', 'Spelregels', 'Timer', 'Beloningen'],
    voorbeelden: [
      'Rekenspellen met dobbelstenen',
      'Woordspellen voor spelling',
      'Bewegingsspellen voor taal'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op speltheorie en ontwikkelingspsychologie',
    implementatieTips: [
      'Kies educatieve spellen',
      'Balanceer plezier en leren',
      'Creëer speelse sfeer',
      'Reflecteer op leereffect'
    ]
  },
  {
    id: 'gepersonaliseerd_leren',
    naam: 'Gepersonaliseerd Leren',
    beschrijving: 'Onderwijs aangepast aan individuele behoeften, leerstijlen en tempo',
    icon: '🎯',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'ict'],
    kenmerken: [
      'Individuele leerpaden',
      'Eigen tempo',
      'Keuzemogelijkheden',
      'Adaptieve materialen',
      'Continue monitoring',
      'Flexibele doelen'
    ],
    fases: [
      { 
        naam: 'Diagnose', 
        beschrijving: 'Leerbehoeften en niveau in kaart brengen',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Voortoets', 'Leervoorkeuren inventariseren', 'Doelen bespreken']
      },
      { 
        naam: 'Planning', 
        beschrijving: 'Individueel leerplan opstellen',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Leerpad bepalen', 'Materialen selecteren', 'Tijdsplanning maken']
      },
      { 
        naam: 'Uitvoering', 
        beschrijving: 'Werken aan persoonlijke doelen',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Individueel werken', 'Keuzes maken', 'Hulp vragen']
      },
      { 
        naam: 'Monitoring', 
        beschrijving: 'Voortgang bijhouden en bijsturen',
        tijdsduur: 'Doorlopend',
        activiteiten: ['Voortgang checken', 'Feedback geven', 'Aanpassingen maken']
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Resultaten en proces evalueren',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Resultaten bespreken', 'Reflecteren', 'Nieuwe doelen stellen']
      }
    ],
    voordelen: [
      'Optimale uitdaging',
      'Eigenaarschap',
      'Betere resultaten',
      'Zelfvertrouwen',
      'Zelfstandigheid',
      'Motivatie'
    ],
    tips: [
      'Start klein',
      'Gebruik data',
      'Bied keuzes',
      'Vier vooruitgang',
      'Train zelfregulatie'
    ],
    differentiatie: [
      'Verschillende leerpaden',
      'Variërend tempo',
      'Keuze in materialen',
      'Flexibele doelen'
    ],
    materialen: ['Adaptieve software', 'Verschillende niveaumaterialen', 'Voortgangsregistratie', 'Keuzemenu\'s'],
    voorbeelden: [
      'Adaptieve rekensoftware',
      'Leesniveaugroepen',
      'Keuzeprojecten'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op differentiatietheorie en adaptief leren onderzoek',
    implementatieTips: [
      'Begin met één vak',
      'Gebruik technologie slim',
      'Train leerlingen in keuzes maken',
      'Monitor intensief'
    ]
  },
  {
    id: 'projectonderwijs',
    naam: 'Projectonderwijs',
    beschrijving: 'Langdurige, thematische projecten die verschillende vakken integreren',
    icon: '📊',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'ict', 'expressie'],
    kenmerken: [
      'Thematische aanpak',
      'Vakintegratie',
      'Authentieke opdrachten',
      'Eindproduct',
      'Langere tijdsduur',
      'Realistische context'
    ],
    fases: [
      { 
        naam: 'Projectstart', 
        beschrijving: 'Thema introduceren en plannen maken',
        tijdsduur: '1-2 lessen',
        activiteiten: ['Thema introduceren', 'Vragen verzamelen', 'Planning maken']
      },
      { 
        naam: 'Onderzoek', 
        beschrijving: 'Informatie verzamelen en verwerken',
        tijdsduur: '3-5 lessen',
        activiteiten: ['Bronnen zoeken', 'Informatie verwerken', 'Samenwerken']
      },
      { 
        naam: 'Uitwerking', 
        beschrijving: 'Aan het eindproduct werken',
        tijdsduur: '4-6 lessen',
        activiteiten: ['Product maken', 'Samenwerken', 'Feedback verwerken']
      },
      { 
        naam: 'Presentatie', 
        beschrijving: 'Resultaten tonen aan publiek',
        tijdsduur: '1-2 lessen',
        activiteiten: ['Presenteren', 'Vragen beantwoorden', 'Feedback ontvangen']
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Project en proces evalueren',
        tijdsduur: '1 les',
        activiteiten: ['Reflecteren', 'Evalueren', 'Leren benoemen']
      }
    ],
    voordelen: [
      'Realistische context',
      'Diepgaand leren',
      'Vakoverstijgend',
      'Motiverend',
      'Authentieke beoordeling',
      '21e eeuwse vaardigheden'
    ],
    tips: [
      'Kies relevante themas',
      'Plan goed',
      'Begeleid intensief',
      'Vier successen',
      'Zorg voor echte opdrachten'
    ],
    differentiatie: [
      'Verschillende rollen',
      'Variërende complexiteit',
      'Keuze in eindproducten',
      'Flexibele groepssamenstelling'
    ],
    materialen: ['Projectplan', 'Onderzoeksmaterialen', 'ICT-middelen', 'Presentatiematerialen'],
    voorbeelden: [
      'Project over de Middeleeuwen',
      'Duurzaamheidsproject',
      'Buurtonderzoek'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op projectmatig leren en authentiek leren onderzoek',
    implementatieTips: [
      'Start met korte projecten',
      'Zorg voor duidelijke structuur',
      'Betrek de omgeving',
      'Documenteer het proces'
    ]
  },
  {
    id: 'flipped_classroom',
    naam: 'Flipped Classroom',
    beschrijving: 'Leerlingen bereiden thuis voor, in de klas wordt geoefend en toegepast',
    icon: '🔄',
    geschiktVoor: ['groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie', 'engels'],
    kenmerken: [
      'Voorbereiding thuis',
      'Actieve lestijd',
      'Meer individuele aandacht',
      'Flexibel tempo',
      'Technologie-ondersteund',
      'Zelfstandig leren'
    ],
    fases: [
      { 
        naam: 'Voorbereiding thuis', 
        beschrijving: 'Leerlingen bestuderen nieuwe stof thuis',
        tijdsduur: '15-30 minuten',
        activiteiten: ['Video bekijken', 'Tekst lezen', 'Aantekeningen maken']
      },
      { 
        naam: 'Check-in', 
        beschrijving: 'Vragen en begrip checken',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Vragen beantwoorden', 'Begrip checken', 'Samenvatten']
      },
      { 
        naam: 'Toepassing', 
        beschrijving: 'Actief werken met de nieuwe stof',
        tijdsduur: '25-35 minuten',
        activiteiten: ['Oefenen', 'Toepassen', 'Samenwerken']
      },
      { 
        naam: 'Verdieping', 
        beschrijving: 'Uitdagende opdrachten en projecten',
        tijdsduur: '10-15 minuten',
        activiteiten: ['Uitdaging', 'Creativiteit', 'Transfer']
      },
      { 
        naam: 'Reflectie', 
        beschrijving: 'Leerproces evalueren',
        tijdsduur: '5 minuten',
        activiteiten: ['Reflecteren', 'Feedback geven', 'Plannen']
      }
    ],
    voordelen: [
      'Meer actieve lestijd',
      'Individuele aandacht',
      'Flexibel tempo',
      'Zelfstandigheid',
      'Efficiënt gebruik van lestijd',
      'Moderne vaardigheden'
    ],
    tips: [
      'Start geleidelijk',
      'Zorg voor goede voorbereiding',
      'Train leerlingen',
      'Monitor thuiswerk',
      'Gebruik technologie slim'
    ],
    differentiatie: [
      'Verschillende voorbereidingsmaterialen',
      'Flexibel tempo',
      'Keuze in toepassingen',
      'Variërende ondersteuning'
    ],
    materialen: ['Video\'s', 'Online materialen', 'Tablets/computers', 'Oefenmateriaal'],
    voorbeelden: [
      'Rekenvideo\'s thuis, oefenen in klas',
      'Geschiedenisles voorbereiden',
      'Taalregels thuis leren'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op blended learning onderzoek en actief leren',
    implementatieTips: [
      'Zorg voor goede thuisomgeving',
      'Train ouders mee',
      'Gebruik korte video\'s',
      'Evalueer regelmatig'
    ]
  },
  {
    id: 'blended_learning',
    naam: 'Blended Learning',
    beschrijving: 'Combinatie van traditioneel onderwijs en digitale leermiddelen',
    icon: '💻',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'ict', 'engels'],
    kenmerken: [
      'Mix van online en offline',
      'Flexibele leeromgeving',
      'Gepersonaliseerde paden',
      'Data-gedreven',
      'Zelfgestuurd leren',
      'Technologie-integratie'
    ],
    fases: [
      { 
        naam: 'Introductie', 
        beschrijving: 'Lesdoel en aanpak uitleggen',
        tijdsduur: '5 minuten',
        activiteiten: ['Doel uitleggen', 'Aanpak bespreken', 'Materialen introduceren']
      },
      { 
        naam: 'Online component', 
        beschrijving: 'Digitaal leren en oefenen',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Online oefenen', 'Video\'s bekijken', 'Digitale opdrachten']
      },
      { 
        naam: 'Offline component', 
        beschrijving: 'Traditionele leeractiviteiten',
        tijdsduur: '15-20 minuten',
        activiteiten: ['Klassikaal werken', 'Groepsopdrachten', 'Handmatig oefenen']
      },
      { 
        naam: 'Integratie', 
        beschrijving: 'Online en offline verbinden',
        tijdsduur: '5-10 minuten',
        activiteiten: ['Verbanden leggen', 'Ervaringen delen', 'Samenvatten']
      },
      { 
        naam: 'Evaluatie', 
        beschrijving: 'Voortgang en begrip checken',
        tijdsduur: '5 minuten',
        activiteiten: ['Voortgang bekijken', 'Feedback geven', 'Plannen']
      }
    ],
    voordelen: [
      'Flexibiliteit',
      'Gepersonaliseerd',
      'Efficiënt',
      'Motiverend',
      'Data-inzicht',
      'Moderne vaardigheden'
    ],
    tips: [
      'Balanceer online en offline',
      'Kies goede tools',
      'Train leerlingen',
      'Monitor voortgang',
      'Zorg voor technische ondersteuning'
    ],
    differentiatie: [
      'Verschillende online paden',
      'Flexibel tempo',
      'Keuze in tools',
      'Variërende ondersteuning'
    ],
    materialen: ['Computers/tablets', 'Educatieve software', 'Online platforms', 'Traditionele materialen'],
    voorbeelden: [
      'Rekenen met adaptieve software',
      'Online spelling + handschrift',
      'Digitaal lezen + boeken'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op blended learning onderzoek en technologie-enhanced learning',
    implementatieTips: [
      'Start met één vak',
      'Zorg voor goede infrastructuur',
      'Train jezelf eerst',
      'Evalueer effectiviteit'
    ]
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