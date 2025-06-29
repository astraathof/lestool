// Volledige SLO kerndoelen database voor het Primair Onderwijs
// Georganiseerd per vakgebied met doorlopende leerlijnen

export interface SLODoel {
  id: string
  code: string
  titel: string
  beschrijving: string
  subdoelen: string[]
  groep: string
  vakgebied: string
  voorafgaand?: string[] // IDs van doelen uit vorige groepen
  vervolgend?: string[] // IDs van doelen uit volgende groepen
  kernwoorden: string[]
}

export const sloKerndoelen: Record<string, Record<string, SLODoel[]>> = {
  nederlands: {
    'groep1-2': [
      {
        id: 'nl_12_1',
        code: 'NL.1.1',
        titel: 'Mondeling taalgebruik',
        beschrijving: 'De leerling kan zich mondeling uiten en begrijpt wat anderen zeggen',
        subdoelen: [
          'Luisteren naar verhalen en instructies',
          'Vragen stellen en beantwoorden',
          'Gevoelens en behoeften uiten',
          'Woordenschat uitbreiden',
          'Klanken en lettergrepen herkennen'
        ],
        groep: 'groep1-2',
        vakgebied: 'nederlands',
        vervolgend: ['nl_34_1', 'nl_34_4'],
        kernwoorden: ['luisteren', 'spreken', 'woordenschat', 'communicatie']
      },
      {
        id: 'nl_12_2',
        code: 'NL.1.2',
        titel: 'Prentenboeken en voorlezen',
        beschrijving: 'De leerling kan betekenis halen uit prentenboeken en geniet van voorlezen',
        subdoelen: [
          'Luisteren naar voorgelezen verhalen',
          'Praten over prentenboeken',
          'Verhaalstructuur herkennen',
          'Fantasie ontwikkelen',
          'Voorspellingen doen over verhalen'
        ],
        groep: 'groep1-2',
        vakgebied: 'nederlands',
        vervolgend: ['nl_34_2'],
        kernwoorden: ['prentenboeken', 'verhalen', 'luisteren', 'begrijpen']
      },
      {
        id: 'nl_12_3',
        code: 'NL.1.3',
        titel: 'Eerste schrijfvaardigheden',
        beschrijving: 'De leerling ontwikkelt eerste schrijfvaardigheden en letterbewustzijn',
        subdoelen: [
          'Tekenen en krabbelen',
          'Letters herkennen',
          'Eigen naam schrijven',
          'Fijne motoriek ontwikkelen',
          'Schrijfrichting leren'
        ],
        groep: 'groep1-2',
        vakgebied: 'nederlands',
        vervolgend: ['nl_34_3'],
        kernwoorden: ['schrijven', 'letters', 'motoriek', 'naam']
      }
    ],
    'groep3-4': [
      {
        id: 'nl_34_1',
        code: 'NL.2.1',
        titel: 'Technisch lezen',
        beschrijving: 'De leerling kan woorden en zinnen vlot en accuraat lezen',
        subdoelen: [
          'Letters en klanken koppelen',
          'Woorden vlot herkennen',
          'Zinnen vloeiend lezen',
          'Leestempo ontwikkelen',
          'Leestekens herkennen'
        ],
        groep: 'groep3-4',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_12_1'],
        vervolgend: ['nl_56_1'],
        kernwoorden: ['lezen', 'woorden', 'zinnen', 'vlot', 'accuraat']
      },
      {
        id: 'nl_34_2',
        code: 'NL.2.2',
        titel: 'Begrijpend lezen',
        beschrijving: 'De leerling begrijpt wat hij/zij leest op woord-, zin- en tekstniveau',
        subdoelen: [
          'Woordbetekenissen begrijpen',
          'Hoofdgedachte herkennen',
          'Verbanden leggen',
          'Conclusies trekken',
          'Vragen over tekst beantwoorden'
        ],
        groep: 'groep3-4',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_12_2'],
        vervolgend: ['nl_56_2'],
        kernwoorden: ['begrijpen', 'betekenis', 'hoofdgedachte', 'verbanden']
      },
      {
        id: 'nl_34_3',
        code: 'NL.2.3',
        titel: 'Spelling en schrijven',
        beschrijving: 'De leerling kan woorden correct spellen en begrijpelijke teksten schrijven',
        subdoelen: [
          'Basisspelling beheersen',
          'Zinnen opbouwen',
          'Verhaaljes schrijven',
          'Handschrift ontwikkelen',
          'Werkwoordspelling leren'
        ],
        groep: 'groep3-4',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_12_3'],
        vervolgend: ['nl_56_3'],
        kernwoorden: ['spelling', 'schrijven', 'zinnen', 'verhalen']
      },
      {
        id: 'nl_34_4',
        code: 'NL.2.4',
        titel: 'Spreken en luisteren',
        beschrijving: 'De leerling kan adequaat communiceren in verschillende situaties',
        subdoelen: [
          'Duidelijk articuleren',
          'Beurten nemen in gesprek',
          'Instructies opvolgen',
          'Eigen mening geven',
          'Naar anderen luisteren'
        ],
        groep: 'groep3-4',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_12_1'],
        vervolgend: ['nl_56_4'],
        kernwoorden: ['spreken', 'luisteren', 'communiceren', 'gesprek']
      }
    ],
    'groep5-6': [
      {
        id: 'nl_56_1',
        code: 'NL.3.1',
        titel: 'Voortgezet technisch lezen',
        beschrijving: 'De leerling leest verschillende tekstsoorten vlot en accuraat',
        subdoelen: [
          'Complexere woorden lezen',
          'Verschillende tekstsoorten herkennen',
          'Leessnelheid verhogen',
          'Expressief voorlezen',
          'Leesstrategieën toepassen'
        ],
        groep: 'groep5-6',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_34_1'],
        vervolgend: ['nl_78_1'],
        kernwoorden: ['lezen', 'tekstsoorten', 'snelheid', 'strategieën']
      },
      {
        id: 'nl_56_2',
        code: 'NL.3.2',
        titel: 'Uitgebreid begrijpend lezen',
        beschrijving: 'De leerling begrijpt en interpreteert verschillende tekstsoorten',
        subdoelen: [
          'Informatie zoeken en ordenen',
          'Tekststructuur herkennen',
          'Kritisch lezen',
          'Samenvatten',
          'Verschillende leesdoelen hanteren'
        ],
        groep: 'groep5-6',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_34_2'],
        vervolgend: ['nl_78_1'],
        kernwoorden: ['begrijpen', 'interpreteren', 'informatie', 'kritisch']
      },
      {
        id: 'nl_56_3',
        code: 'NL.3.3',
        titel: 'Gevorderde spelling en schrijven',
        beschrijving: 'De leerling beheerst de spelling en schrijft verschillende tekstsoorten',
        subdoelen: [
          'Moeilijke spelling beheersen',
          'Verschillende tekstsoorten schrijven',
          'Tekststructuur gebruiken',
          'Revisie en verbetering',
          'Schrijfproces plannen'
        ],
        groep: 'groep5-6',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_34_3'],
        vervolgend: ['nl_78_2'],
        kernwoorden: ['spelling', 'tekstsoorten', 'structuur', 'revisie']
      },
      {
        id: 'nl_56_4',
        code: 'NL.3.4',
        titel: 'Mondelinge communicatie',
        beschrijving: 'De leerling communiceert effectief in verschillende situaties',
        subdoelen: [
          'Presentaties voorbereiden',
          'Argumenten onderbouwen',
          'Actief luisteren',
          'Feedback geven en ontvangen',
          'Discussiëren'
        ],
        groep: 'groep5-6',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_34_4'],
        vervolgend: ['nl_78_3'],
        kernwoorden: ['presenteren', 'argumenteren', 'discussie', 'feedback']
      }
    ],
    'groep7-8': [
      {
        id: 'nl_78_1',
        code: 'NL.4.1',
        titel: 'Gevorderd lezen',
        beschrijving: 'De leerling leest verschillende complexe teksten met begrip',
        subdoelen: [
          'Complexe teksten begrijpen',
          'Kritisch lezen en beoordelen',
          'Verschillende leesdoelen hanteren',
          'Literatuur waarderen',
          'Leesstrategieën bewust inzetten'
        ],
        groep: 'groep7-8',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_56_1', 'nl_56_2'],
        kernwoorden: ['complex', 'kritisch', 'literatuur', 'strategieën']
      },
      {
        id: 'nl_78_2',
        code: 'NL.4.2',
        titel: 'Gevorderd schrijven',
        beschrijving: 'De leerling schrijft verschillende tekstsoorten voor verschillende doelen',
        subdoelen: [
          'Argumentatieve teksten schrijven',
          'Creatief schrijven',
          'Formele brieven opstellen',
          'Onderzoeksverslagen maken',
          'Schrijfstijl aanpassen aan doel'
        ],
        groep: 'groep7-8',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_56_3'],
        kernwoorden: ['argumentatief', 'creatief', 'formeel', 'onderzoek']
      },
      {
        id: 'nl_78_3',
        code: 'NL.4.3',
        titel: 'Mondeling communiceren',
        beschrijving: 'De leerling communiceert effectief in verschillende situaties',
        subdoelen: [
          'Presentaties geven',
          'Discussiëren en argumenteren',
          'Actief luisteren',
          'Non-verbale communicatie',
          'Publiek aanspreken'
        ],
        groep: 'groep7-8',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_56_4'],
        kernwoorden: ['presenteren', 'discussie', 'argumenteren', 'publiek']
      }
    ]
  },
  rekenen: {
    'groep1-2': [
      {
        id: 'rek_12_1',
        code: 'RE.1.1',
        titel: 'Getalbegrip tot 20',
        beschrijving: 'De leerling ontwikkelt getalbegrip en kan tellen tot 20',
        subdoelen: [
          'Tellen tot 20',
          'Hoeveelheden vergelijken',
          'Getalsymbolen herkennen',
          'Ordenen en rangschikken',
          'Meer, minder, evenveel'
        ],
        groep: 'groep1-2',
        vakgebied: 'rekenen',
        vervolgend: ['rek_34_1'],
        kernwoorden: ['tellen', 'getallen', 'vergelijken', 'hoeveelheid']
      },
      {
        id: 'rek_12_2',
        code: 'RE.1.2',
        titel: 'Meetkunde en meten',
        beschrijving: 'De leerling herkent vormen en kan eenvoudig meten',
        subdoelen: [
          'Basisvormen herkennen',
          'Groot en klein vergelijken',
          'Patronen herkennen',
          'Ruimtelijk inzicht ontwikkelen',
          'Eenvoudige metingen'
        ],
        groep: 'groep1-2',
        vakgebied: 'rekenen',
        vervolgend: ['rek_34_2'],
        kernwoorden: ['vormen', 'meten', 'patronen', 'ruimte']
      },
      {
        id: 'rek_12_3',
        code: 'RE.1.3',
        titel: 'Eerste rekenbewerkingen',
        beschrijving: 'De leerling leert eerste rekenbewerkingen binnen 10',
        subdoelen: [
          'Optellen binnen 10',
          'Aftrekken binnen 10',
          'Splitsen van getallen',
          'Rekenstrategieën ontwikkelen',
          'Hoofdrekenen'
        ],
        groep: 'groep1-2',
        vakgebied: 'rekenen',
        vervolgend: ['rek_34_1'],
        kernwoorden: ['optellen', 'aftrekken', 'splitsen', 'hoofdrekenen']
      }
    ],
    'groep3-4': [
      {
        id: 'rek_34_1',
        code: 'RE.2.1',
        titel: 'Getallen tot 100',
        beschrijving: 'De leerling beheerst getallen tot 100 en kan ermee rekenen',
        subdoelen: [
          'Getalbegrip tot 100',
          'Optellen en aftrekken tot 100',
          'Tafels van 1, 2, 5, 10',
          'Hoofdrekenen uitbreiden',
          'Rekenstrategieën toepassen'
        ],
        groep: 'groep3-4',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_12_1', 'rek_12_3'],
        vervolgend: ['rek_56_1'],
        kernwoorden: ['100', 'tafels', 'strategieën', 'bewerkingen']
      },
      {
        id: 'rek_34_2',
        code: 'RE.2.2',
        titel: 'Meten en meetkunde',
        beschrijving: 'De leerling kan meten met verschillende eenheden en herkent vormen',
        subdoelen: [
          'Lengte, gewicht, tijd meten',
          'Geld rekenen',
          'Vlakke figuren herkennen',
          'Symmetrie ontdekken',
          'Meetinstrumenten gebruiken'
        ],
        groep: 'groep3-4',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_12_2'],
        vervolgend: ['rek_56_2'],
        kernwoorden: ['meten', 'geld', 'figuren', 'symmetrie']
      },
      {
        id: 'rek_34_3',
        code: 'RE.2.3',
        titel: 'Vermenigvuldigen en delen',
        beschrijving: 'De leerling leert vermenigvuldigen en delen binnen de tafels',
        subdoelen: [
          'Tafels tot 10 leren',
          'Vermenigvuldigen begrijpen',
          'Delen als omgekeerde',
          'Woordsommen maken',
          'Rekenregels toepassen'
        ],
        groep: 'groep3-4',
        vakgebied: 'rekenen',
        vervolgend: ['rek_56_1'],
        kernwoorden: ['tafels', 'vermenigvuldigen', 'delen', 'woordsommen']
      }
    ],
    'groep5-6': [
      {
        id: 'rek_56_1',
        code: 'RE.3.1',
        titel: 'Getallen tot 10.000',
        beschrijving: 'De leerling beheerst getallen tot 10.000 en de vier bewerkingen',
        subdoelen: [
          'Getalbegrip tot 10.000',
          'Alle tafels tot 10 automatiseren',
          'Schriftelijk rekenen',
          'Breuken introductie',
          'Kommagetallen kennismaken'
        ],
        groep: 'groep5-6',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_34_1', 'rek_34_3'],
        vervolgend: ['rek_78_1'],
        kernwoorden: ['10000', 'schriftelijk', 'breuken', 'komma']
      },
      {
        id: 'rek_56_2',
        code: 'RE.3.2',
        titel: 'Verhoudingen en procenten',
        beschrijving: 'De leerling begrijpt verhoudingen en eenvoudige procenten',
        subdoelen: [
          'Verhoudingstabellen maken',
          'Procenten tot 100%',
          'Schaal en kaarten lezen',
          'Grafieken interpreteren',
          'Gemiddelde berekenen'
        ],
        groep: 'groep5-6',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_34_2'],
        vervolgend: ['rek_78_2'],
        kernwoorden: ['verhoudingen', 'procenten', 'schaal', 'grafieken']
      },
      {
        id: 'rek_56_3',
        code: 'RE.3.3',
        titel: 'Meetkunde en ruimte',
        beschrijving: 'De leerling werkt met oppervlakte, omtrek en ruimtelijke figuren',
        subdoelen: [
          'Oppervlakte berekenen',
          'Omtrek meten',
          'Ruimtelijke figuren herkennen',
          'Coördinaten gebruiken',
          'Constructies maken'
        ],
        groep: 'groep5-6',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_34_2'],
        vervolgend: ['rek_78_2'],
        kernwoorden: ['oppervlakte', 'omtrek', 'ruimtelijk', 'coördinaten']
      }
    ],
    'groep7-8': [
      {
        id: 'rek_78_1',
        code: 'RE.4.1',
        titel: 'Complexe bewerkingen',
        beschrijving: 'De leerling beheerst complexe rekenbewerkingen en probleemoplossing',
        subdoelen: [
          'Kommagetallen beheersen',
          'Complexe breuken',
          'Oppervlakte en inhoud',
          'Probleemoplossend rekenen',
          'Rekenregels toepassen'
        ],
        groep: 'groep7-8',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_56_1'],
        kernwoorden: ['kommagetallen', 'breuken', 'inhoud', 'problemen']
      },
      {
        id: 'rek_78_2',
        code: 'RE.4.2',
        titel: 'Statistiek en kansrekening',
        beschrijving: 'De leerling kan gegevens verzamelen, ordenen en interpreteren',
        subdoelen: [
          'Grafieken maken en lezen',
          'Gemiddelde berekenen',
          'Kans inschatten',
          'Onderzoek uitvoeren',
          'Conclusies trekken'
        ],
        groep: 'groep7-8',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_56_2', 'rek_56_3'],
        kernwoorden: ['statistiek', 'kans', 'onderzoek', 'conclusies']
      }
    ]
  },
  burgerschap: {
    'groep1-2': [
      {
        id: 'burg_12_1',
        code: 'BU.1.1',
        titel: 'Zelfbeeld en identiteit',
        beschrijving: 'De leerling ontwikkelt een positief zelfbeeld en kent eigen kenmerken',
        subdoelen: [
          'Eigen naam en leeftijd kennen',
          'Familieleden benoemen',
          'Gevoelens herkennen',
          'Eigen voorkeuren uiten',
          'Verschillen en overeenkomsten zien'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_34_1'],
        kernwoorden: ['identiteit', 'zelfbeeld', 'familie', 'gevoelens']
      },
      {
        id: 'burg_12_2',
        code: 'BU.1.2',
        titel: 'Samenleven in de groep',
        beschrijving: 'De leerling leert samen te leven en te spelen met anderen',
        subdoelen: [
          'Afspraken maken en nakomen',
          'Samen spelen',
          'Conflicten oplossen',
          'Hulp vragen en aanbieden',
          'Respect tonen voor anderen'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_34_2'],
        kernwoorden: ['samenleven', 'afspraken', 'spelen', 'respect']
      }
    ],
    'groep3-4': [
      {
        id: 'burg_34_1',
        code: 'BU.2.1',
        titel: 'Identiteit en diversiteit',
        beschrijving: 'De leerling begrijpt diversiteit en ontwikkelt respect voor verschillen',
        subdoelen: [
          'Eigen achtergrond beschrijven',
          'Verschillende culturen kennen',
          'Vooroordelen herkennen',
          'Gelijkwaardigheid begrijpen',
          'Discriminatie herkennen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_12_1'],
        vervolgend: ['burg_56_1'],
        kernwoorden: ['diversiteit', 'culturen', 'gelijkwaardigheid', 'discriminatie']
      },
      {
        id: 'burg_34_2',
        code: 'BU.2.2',
        titel: 'Democratie en participatie',
        beschrijving: 'De leerling leert democratische principes en participeert in de klas',
        subdoelen: [
          'Klassenregels opstellen',
          'Stemmen en verkiezingen',
          'Meningen uiten',
          'Compromissen sluiten',
          'Verantwoordelijkheid nemen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_12_2'],
        vervolgend: ['burg_56_2'],
        kernwoorden: ['democratie', 'stemmen', 'meningen', 'verantwoordelijkheid']
      },
      {
        id: 'burg_34_3',
        code: 'BU.2.3',
        titel: 'Rechten en plichten',
        beschrijving: 'De leerling leert over kinderrechten en eigen plichten',
        subdoelen: [
          'Kinderrechten kennen',
          'Eigen plichten begrijpen',
          'Regels en wetten',
          'Eerlijkheid en rechtvaardigheid',
          'Hulp zoeken bij problemen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_56_3'],
        kernwoorden: ['rechten', 'plichten', 'regels', 'rechtvaardigheid']
      }
    ],
    'groep5-6': [
      {
        id: 'burg_56_1',
        code: 'BU.3.1',
        titel: 'Pluriforme samenleving',
        beschrijving: 'De leerling begrijpt de pluriforme Nederlandse samenleving',
        subdoelen: [
          'Verschillende levensbeschouwingen',
          'Culturele diversiteit waarderen',
          'Integratie en inburgering',
          'Sociale cohesie',
          'Interculturele communicatie'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_1'],
        vervolgend: ['burg_78_1'],
        kernwoorden: ['pluriform', 'levensbeschouwing', 'integratie', 'cohesie']
      },
      {
        id: 'burg_56_2',
        code: 'BU.3.2',
        titel: 'Rechtsstaat en democratie',
        beschrijving: 'De leerling begrijpt de werking van democratie en rechtsstaat',
        subdoelen: [
          'Verkiezingen en regering',
          'Wetten en handhaving',
          'Rechterlijke macht',
          'Grondwet en grondrechten',
          'Lokale democratie'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_2'],
        vervolgend: ['burg_78_2'],
        kernwoorden: ['rechtsstaat', 'verkiezingen', 'grondwet', 'democratie']
      },
      {
        id: 'burg_56_3',
        code: 'BU.3.3',
        titel: 'Sociale vaardigheden',
        beschrijving: 'De leerling ontwikkelt sociale vaardigheden voor het samenleven',
        subdoelen: [
          'Empathie en perspectief nemen',
          'Conflicthantering',
          'Samenwerken in groepen',
          'Leiderschap en volgerschap',
          'Sociale media en digitaal gedrag'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_3'],
        vervolgend: ['burg_78_3'],
        kernwoorden: ['empathie', 'conflict', 'samenwerken', 'digitaal']
      }
    ],
    'groep7-8': [
      {
        id: 'burg_78_1',
        code: 'BU.4.1',
        titel: 'Nationale identiteit',
        beschrijving: 'De leerling begrijpt Nederlandse identiteit en Europese context',
        subdoelen: [
          'Nederlandse geschiedenis en cultuur',
          'Nationale symbolen en tradities',
          'Europese Unie',
          'Internationale samenwerking',
          'Globalisering'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_1'],
        kernwoorden: ['nationale identiteit', 'geschiedenis', 'Europa', 'globalisering']
      },
      {
        id: 'burg_78_2',
        code: 'BU.4.2',
        titel: 'Politieke participatie',
        beschrijving: 'De leerling begrijpt politieke processen en kan participeren',
        subdoelen: [
          'Politieke partijen en standpunten',
          'Belangenbehartiging',
          'Maatschappelijke organisaties',
          'Actief burgerschap',
          'Kritisch mediagebruik'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_2'],
        kernwoorden: ['politiek', 'participatie', 'belangenbehartiging', 'media']
      },
      {
        id: 'burg_78_3',
        code: 'BU.4.3',
        titel: 'Maatschappelijke vraagstukken',
        beschrijving: 'De leerling kan nadenken over complexe maatschappelijke vraagstukken',
        subdoelen: [
          'Duurzaamheid en milieu',
          'Sociale ongelijkheid',
          'Technologie en privacy',
          'Ethische dilemma\'s',
          'Toekomstperspectief'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_3'],
        kernwoorden: ['duurzaamheid', 'ongelijkheid', 'technologie', 'ethiek']
      }
    ]
  },
  wereldoriëntatie: {
    'groep1-2': [
      {
        id: 'wo_12_1',
        code: 'WO.1.1',
        titel: 'Jezelf en je omgeving',
        beschrijving: 'De leerling verkent de directe leefomgeving',
        subdoelen: [
          'Eigen lichaam kennen',
          'Familie en thuis',
          'School en klas',
          'Buurt verkennen',
          'Seizoenen herkennen'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_1'],
        kernwoorden: ['lichaam', 'familie', 'school', 'buurt', 'seizoenen']
      },
      {
        id: 'wo_12_2',
        code: 'WO.1.2',
        titel: 'Natuur en techniek',
        beschrijving: 'De leerling ontdekt de natuur en eenvoudige techniek',
        subdoelen: [
          'Dieren en planten herkennen',
          'Water, lucht, vuur',
          'Eenvoudige werktuigen',
          'Materialen onderzoeken',
          'Zintuigen gebruiken'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_2'],
        kernwoorden: ['natuur', 'dieren', 'planten', 'werktuigen', 'zintuigen']
      }
    ],
    'groep3-4': [
      {
        id: 'wo_34_1',
        code: 'WO.2.1',
        titel: 'Mens en samenleving',
        beschrijving: 'De leerling leert over verschillende samenlevingsvormen',
        subdoelen: [
          'Verschillende gezinnen',
          'Beroepen en werk',
          'Winkels en geld',
          'Vervoer en verkeer',
          'Feesten en tradities'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_1'],
        vervolgend: ['wo_56_1'],
        kernwoorden: ['gezin', 'beroepen', 'geld', 'vervoer', 'tradities']
      },
      {
        id: 'wo_34_2',
        code: 'WO.2.2',
        titel: 'Natuur en milieu',
        beschrijving: 'De leerling onderzoekt de natuur en leert over milieu',
        subdoelen: [
          'Levenscyclus van dieren',
          'Planten verzorgen',
          'Weer en klimaat',
          'Milieuvriendelijk gedrag',
          'Recycling en afval'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_2'],
        vervolgend: ['wo_56_2'],
        kernwoorden: ['levenscyclus', 'planten', 'weer', 'milieu', 'recycling']
      },
      {
        id: 'wo_34_3',
        code: 'WO.2.3',
        titel: 'Tijd en geschiedenis',
        beschrijving: 'De leerling ontwikkelt tijdsbesef en leert over het verleden',
        subdoelen: [
          'Dag, week, maand, jaar',
          'Eigen geschiedenis',
          'Vroeger en nu vergelijken',
          'Oude voorwerpen',
          'Verhalen uit het verleden'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_56_3'],
        kernwoorden: ['tijd', 'geschiedenis', 'vroeger', 'voorwerpen', 'verleden']
      }
    ],
    'groep5-6': [
      {
        id: 'wo_56_1',
        code: 'WO.3.1',
        titel: 'Nederland en Europa',
        beschrijving: 'De leerling leert over Nederland en de Europese context',
        subdoelen: [
          'Nederlandse provincies',
          'Hoofdsteden en rivieren',
          'Nederlandse geschiedenis',
          'Europese landen',
          'EU en samenwerking'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_1'],
        vervolgend: ['wo_78_1'],
        kernwoorden: ['Nederland', 'provincies', 'geschiedenis', 'Europa', 'EU']
      },
      {
        id: 'wo_56_2',
        code: 'WO.3.2',
        titel: 'Natuur en technologie',
        beschrijving: 'De leerling onderzoekt natuurverschijnselen en technologie',
        subdoelen: [
          'Ecosystemen begrijpen',
          'Energie en kracht',
          'Technische uitvindingen',
          'Digitale technologie',
          'Duurzame ontwikkeling'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_2'],
        vervolgend: ['wo_78_2'],
        kernwoorden: ['ecosystemen', 'energie', 'uitvindingen', 'digitaal', 'duurzaam']
      },
      {
        id: 'wo_56_3',
        code: 'WO.3.3',
        titel: 'Geschiedenis van Nederland',
        beschrijving: 'De leerling leert over belangrijke perioden in de Nederlandse geschiedenis',
        subdoelen: [
          'Prehistorie en Romeinen',
          'Middeleeuwen',
          'Gouden Eeuw',
          'Industriële revolutie',
          'Twintigste eeuw'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_3'],
        vervolgend: ['wo_78_3'],
        kernwoorden: ['prehistorie', 'middeleeuwen', 'gouden eeuw', 'industrieel', 'twintigste eeuw']
      }
    ],
    'groep7-8': [
      {
        id: 'wo_78_1',
        code: 'WO.4.1',
        titel: 'Wereld en globalisering',
        beschrijving: 'De leerling begrijpt de wereld en globale verbindingen',
        subdoelen: [
          'Continenten en landen',
          'Wereldreligies en culturen',
          'Internationale handel',
          'Migratie en vluchtelingen',
          'Mondiale problemen'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_1'],
        kernwoorden: ['wereld', 'globalisering', 'culturen', 'handel', 'migratie']
      },
      {
        id: 'wo_78_2',
        code: 'WO.4.2',
        titel: 'Wetenschap en onderzoek',
        beschrijving: 'De leerling leert wetenschappelijk denken en onderzoeken',
        subdoelen: [
          'Hypotheses opstellen',
          'Experimenten uitvoeren',
          'Gegevens verzamelen',
          'Conclusies trekken',
          'Wetenschappelijke methode'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_2'],
        kernwoorden: ['wetenschap', 'hypothese', 'experimenten', 'onderzoek', 'methode']
      },
      {
        id: 'wo_78_3',
        code: 'WO.4.3',
        titel: 'Geschiedenis en erfgoed',
        beschrijving: 'De leerling begrijpt historische ontwikkelingen en erfgoed',
        subdoelen: [
          'Wereldoorlogen',
          'Dekolonisatie',
          'Koude Oorlog',
          'Cultureel erfgoed',
          'Geschiedenis en heden'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_3'],
        kernwoorden: ['wereldoorlogen', 'dekolonisatie', 'koude oorlog', 'erfgoed', 'heden']
      }
    ]
  }
}

// Helper functies voor doorlopende leerlijn
export const getVoorafgaandeDoelen = (doelId: string): SLODoel[] => {
  const allDoelen = getAllDoelen()
  const doel = allDoelen.find(d => d.id === doelId)
  if (!doel?.voorafgaand) return []
  
  return doel.voorafgaand.map(id => allDoelen.find(d => d.id === id)).filter(Boolean) as SLODoel[]
}

export const getVervolgendeDoelen = (doelId: string): SLODoel[] => {
  const allDoelen = getAllDoelen()
  const doel = allDoelen.find(d => d.id === doelId)
  if (!doel?.vervolgend) return []
  
  return doel.vervolgend.map(id => allDoelen.find(d => d.id === id)).filter(Boolean) as SLODoel[]
}

export const getAllDoelen = (): SLODoel[] => {
  const allDoelen: SLODoel[] = []
  Object.values(sloKerndoelen).forEach(vakgebied => {
    Object.values(vakgebied).forEach(groepDoelen => {
      allDoelen.push(...groepDoelen)
    })
  })
  return allDoelen
}

export const getDoelenByVakgebiedAndGroep = (vakgebied: string, groep: string): SLODoel[] => {
  return sloKerndoelen[vakgebied]?.[groep] || []
}