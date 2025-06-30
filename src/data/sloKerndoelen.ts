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
    'groep1': [
      {
        id: 'nl_1_1',
        code: 'NL.1.1',
        titel: 'Mondeling taalgebruik basis',
        beschrijving: 'De leerling kan zich mondeling uiten en begrijpt eenvoudige instructies',
        subdoelen: [
          'Luisteren naar korte verhalen',
          'Eenvoudige vragen beantwoorden',
          'Gevoelens uiten',
          'Basiswoordenschat gebruiken',
          'Klanken herkennen'
        ],
        groep: 'groep1',
        vakgebied: 'nederlands',
        vervolgend: ['nl_2_1'],
        kernwoorden: ['luisteren', 'spreken', 'woordenschat', 'klanken']
      }
    ],
    'groep2': [
      {
        id: 'nl_2_1',
        code: 'NL.2.1',
        titel: 'Mondeling taalgebruik uitgebreid',
        beschrijving: 'De leerling kan zich duidelijker mondeling uiten en begrijpt complexere instructies',
        subdoelen: [
          'Luisteren naar langere verhalen',
          'Uitgebreide vragen stellen en beantwoorden',
          'Gevoelens en behoeften duidelijk uiten',
          'Woordenschat uitbreiden',
          'Lettergrepen herkennen'
        ],
        groep: 'groep2',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_1_1'],
        vervolgend: ['nl_3_1'],
        kernwoorden: ['luisteren', 'spreken', 'woordenschat', 'lettergrepen']
      }
    ],
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
    'groep3': [
      {
        id: 'nl_3_1',
        code: 'NL.3.1',
        titel: 'Technisch lezen begin',
        beschrijving: 'De leerling leert letters en klanken koppelen en eerste woorden lezen',
        subdoelen: [
          'Letters en klanken koppelen',
          'Eenvoudige woorden lezen',
          'Korte zinnen lezen',
          'Leesrichting volgen',
          'Leestekens herkennen'
        ],
        groep: 'groep3',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_2_1'],
        vervolgend: ['nl_4_1'],
        kernwoorden: ['lezen', 'letters', 'klanken', 'woorden']
      }
    ],
    'groep4': [
      {
        id: 'nl_4_1',
        code: 'NL.4.1',
        titel: 'Technisch lezen vloeiend',
        beschrijving: 'De leerling kan woorden en zinnen vlot en accuraat lezen',
        subdoelen: [
          'Woorden vlot herkennen',
          'Zinnen vloeiend lezen',
          'Leestempo ontwikkelen',
          'Expressief lezen',
          'Verschillende tekstsoorten herkennen'
        ],
        groep: 'groep4',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_3_1'],
        vervolgend: ['nl_5_1'],
        kernwoorden: ['lezen', 'woorden', 'zinnen', 'vlot', 'tempo']
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
    'groep5': [
      {
        id: 'nl_5_1',
        code: 'NL.5.1',
        titel: 'Voortgezet lezen',
        beschrijving: 'De leerling leest verschillende tekstsoorten met begrip',
        subdoelen: [
          'Complexere woorden lezen',
          'Verschillende tekstsoorten herkennen',
          'Leessnelheid verhogen',
          'Informatie zoeken',
          'Leesstrategieën toepassen'
        ],
        groep: 'groep5',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_4_1'],
        vervolgend: ['nl_6_1'],
        kernwoorden: ['lezen', 'tekstsoorten', 'snelheid', 'informatie']
      }
    ],
    'groep6': [
      {
        id: 'nl_6_1',
        code: 'NL.6.1',
        titel: 'Gevorderd lezen',
        beschrijving: 'De leerling leest verschillende tekstsoorten vlot en met begrip',
        subdoelen: [
          'Tekststructuur herkennen',
          'Kritisch lezen',
          'Samenvatten',
          'Verschillende leesdoelen hanteren',
          'Expressief voorlezen'
        ],
        groep: 'groep6',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_5_1'],
        vervolgend: ['nl_7_1'],
        kernwoorden: ['tekststructuur', 'kritisch', 'samenvatten', 'leesdoelen']
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
    'groep7': [
      {
        id: 'nl_7_1',
        code: 'NL.7.1',
        titel: 'Complex lezen',
        beschrijving: 'De leerling leest complexe teksten met begrip en kan deze analyseren',
        subdoelen: [
          'Complexe teksten begrijpen',
          'Kritisch lezen en beoordelen',
          'Verschillende leesdoelen hanteren',
          'Literatuur waarderen',
          'Leesstrategieën bewust inzetten'
        ],
        groep: 'groep7',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_6_1'],
        vervolgend: ['nl_8_1'],
        kernwoorden: ['complex', 'kritisch', 'literatuur', 'analyse']
      }
    ],
    'groep8': [
      {
        id: 'nl_8_1',
        code: 'NL.8.1',
        titel: 'Gevorderd lezen en schrijven',
        beschrijving: 'De leerling beheerst alle aspecten van lezen en schrijven op basisniveau',
        subdoelen: [
          'Alle tekstsoorten beheersen',
          'Argumentatieve teksten schrijven',
          'Creatief schrijven',
          'Formele communicatie',
          'Onderzoeksvaardigheden'
        ],
        groep: 'groep8',
        vakgebied: 'nederlands',
        voorafgaand: ['nl_7_1'],
        kernwoorden: ['tekstsoorten', 'argumentatief', 'creatief', 'onderzoek']
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
    'groep1': [
      {
        id: 'rek_1_1',
        code: 'RE.1.1',
        titel: 'Getalbegrip tot 10',
        beschrijving: 'De leerling ontwikkelt getalbegrip en kan tellen tot 10',
        subdoelen: [
          'Tellen tot 10',
          'Hoeveelheden tot 5 vergelijken',
          'Getalsymbolen 1-5 herkennen',
          'Ordenen en rangschikken',
          'Meer, minder begrip'
        ],
        groep: 'groep1',
        vakgebied: 'rekenen',
        vervolgend: ['rek_2_1'],
        kernwoorden: ['tellen', 'getallen', 'vergelijken', 'hoeveelheid']
      }
    ],
    'groep2': [
      {
        id: 'rek_2_1',
        code: 'RE.2.1',
        titel: 'Getalbegrip tot 20',
        beschrijving: 'De leerling ontwikkelt getalbegrip en kan tellen tot 20',
        subdoelen: [
          'Tellen tot 20',
          'Hoeveelheden tot 10 vergelijken',
          'Getalsymbolen tot 10 herkennen',
          'Ordenen en rangschikken',
          'Eerste rekenbewerkingen'
        ],
        groep: 'groep2',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_1_1'],
        vervolgend: ['rek_3_1'],
        kernwoorden: ['tellen', 'getallen', 'vergelijken', 'rekenen']
      }
    ],
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
    'groep3': [
      {
        id: 'rek_3_1',
        code: 'RE.3.1',
        titel: 'Getallen tot 50',
        beschrijving: 'De leerling beheerst getallen tot 50 en kan ermee rekenen',
        subdoelen: [
          'Getalbegrip tot 50',
          'Optellen en aftrekken tot 20',
          'Tafels van 1, 2, 5 beginnen',
          'Hoofdrekenen uitbreiden',
          'Rekenstrategieën toepassen'
        ],
        groep: 'groep3',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_2_1'],
        vervolgend: ['rek_4_1'],
        kernwoorden: ['50', 'tafels', 'strategieën', 'bewerkingen']
      }
    ],
    'groep4': [
      {
        id: 'rek_4_1',
        code: 'RE.4.1',
        titel: 'Getallen tot 100',
        beschrijving: 'De leerling beheerst getallen tot 100 en alle basisbewerkingen',
        subdoelen: [
          'Getalbegrip tot 100',
          'Optellen en aftrekken tot 100',
          'Tafels van 1, 2, 5, 10',
          'Vermenigvuldigen en delen',
          'Woordsommen maken'
        ],
        groep: 'groep4',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_3_1'],
        vervolgend: ['rek_5_1'],
        kernwoorden: ['100', 'tafels', 'vermenigvuldigen', 'delen']
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
    'groep5': [
      {
        id: 'rek_5_1',
        code: 'RE.5.1',
        titel: 'Getallen tot 1000',
        beschrijving: 'De leerling beheerst getallen tot 1000 en uitgebreide bewerkingen',
        subdoelen: [
          'Getalbegrip tot 1000',
          'Alle tafels tot 10',
          'Schriftelijk rekenen beginnen',
          'Breuken introductie',
          'Kommagetallen kennismaken'
        ],
        groep: 'groep5',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_4_1'],
        vervolgend: ['rek_6_1'],
        kernwoorden: ['1000', 'schriftelijk', 'breuken', 'komma']
      }
    ],
    'groep6': [
      {
        id: 'rek_6_1',
        code: 'RE.6.1',
        titel: 'Getallen tot 10.000',
        beschrijving: 'De leerling beheerst getallen tot 10.000 en complexere bewerkingen',
        subdoelen: [
          'Getalbegrip tot 10.000',
          'Schriftelijk rekenen uitbreiden',
          'Breuken vergelijken',
          'Kommagetallen rekenen',
          'Verhoudingen begrijpen'
        ],
        groep: 'groep6',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_5_1'],
        vervolgend: ['rek_7_1'],
        kernwoorden: ['10000', 'schriftelijk', 'breuken', 'verhoudingen']
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
    'groep7': [
      {
        id: 'rek_7_1',
        code: 'RE.7.1',
        titel: 'Complexe bewerkingen',
        beschrijving: 'De leerling beheerst complexe rekenbewerkingen en probleemoplossing',
        subdoelen: [
          'Kommagetallen beheersen',
          'Complexe breuken',
          'Oppervlakte en inhoud',
          'Probleemoplossend rekenen',
          'Rekenregels toepassen'
        ],
        groep: 'groep7',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_6_1'],
        vervolgend: ['rek_8_1'],
        kernwoorden: ['kommagetallen', 'breuken', 'inhoud', 'problemen']
      }
    ],
    'groep8': [
      {
        id: 'rek_8_1',
        code: 'RE.8.1',
        titel: 'Gevorderde wiskunde',
        beschrijving: 'De leerling beheerst alle rekenvaardigheden op basisniveau',
        subdoelen: [
          'Alle bewerkingen automatiseren',
          'Statistiek en kansrekening',
          'Algebra introductie',
          'Meetkunde uitbreiden',
          'Wiskundig redeneren'
        ],
        groep: 'groep8',
        vakgebied: 'rekenen',
        voorafgaand: ['rek_7_1'],
        kernwoorden: ['automatiseren', 'statistiek', 'algebra', 'redeneren']
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
        beschrijving: 'De leerling ontwikkelt een positief zelfbeeld en bewustzijn van eigen identiteit',
        subdoelen: [
          'Eigen naam, leeftijd en adres kennen',
          'Familieleden en vrienden benoemen',
          'Gevoelens herkennen en uiten',
          'Eigen voorkeuren aangeven',
          'Verschillen tussen mensen accepteren'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_34_1'],
        kernwoorden: ['identiteit', 'zelfbeeld', 'gevoelens', 'verschillen']
      },
      {
        id: 'burg_12_2',
        code: 'BU.1.2',
        titel: 'Sociale vaardigheden',
        beschrijving: 'De leerling leert omgaan met anderen en ontwikkelt sociale vaardigheden',
        subdoelen: [
          'Samen spelen en werken',
          'Conflicten op een goede manier oplossen',
          'Hulp vragen en aanbieden',
          'Complimenten geven en ontvangen',
          'Respect tonen voor anderen'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_34_2'],
        kernwoorden: ['samenwerken', 'conflicten', 'respect', 'hulp']
      },
      {
        id: 'burg_12_3',
        code: 'BU.1.3',
        titel: 'Regels en afspraken',
        beschrijving: 'De leerling leert regels en afspraken begrijpen en naleven',
        subdoelen: [
          'Klasregels kennen en naleven',
          'Afspraken maken en nakomen',
          'Gevolgen van gedrag begrijpen',
          'Eerlijk zijn',
          'Verantwoordelijkheid nemen'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_34_3'],
        kernwoorden: ['regels', 'afspraken', 'eerlijkheid', 'verantwoordelijkheid']
      }
    ],
    'groep3-4': [
      {
        id: 'burg_34_1',
        code: 'BU.2.1',
        titel: 'Identiteit en diversiteit',
        beschrijving: 'De leerling ontwikkelt bewustzijn van eigen identiteit en waardering voor diversiteit',
        subdoelen: [
          'Eigen culturele achtergrond beschrijven',
          'Verschillende culturen en tradities respecteren',
          'Overeenkomsten en verschillen tussen mensen benoemen',
          'Vooroordelen herkennen',
          'Inclusief gedrag tonen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_12_1'],
        vervolgend: ['burg_56_1'],
        kernwoorden: ['cultuur', 'diversiteit', 'vooroordelen', 'inclusie']
      },
      {
        id: 'burg_34_2',
        code: 'BU.2.2',
        titel: 'Democratie en participatie',
        beschrijving: 'De leerling leert over democratische principes en participatie',
        subdoelen: [
          'Meepraten over klassenregels',
          'Stemmen en verkiezingen begrijpen',
          'Eigen mening geven en onderbouwen',
          'Naar anderen luisteren',
          'Compromissen sluiten'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_12_2'],
        vervolgend: ['burg_56_2'],
        kernwoorden: ['democratie', 'stemmen', 'mening', 'compromis']
      },
      {
        id: 'burg_34_3',
        code: 'BU.2.3',
        titel: 'Rechten en plichten',
        beschrijving: 'De leerling leert over rechten en plichten in de samenleving',
        subdoelen: [
          'Kinderrechten kennen',
          'Eigen rechten en plichten benoemen',
          'Rechtvaardigheid herkennen',
          'Hulp zoeken bij problemen',
          'Anderen helpen en beschermen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_12_3'],
        vervolgend: ['burg_56_3'],
        kernwoorden: ['rechten', 'plichten', 'rechtvaardigheid', 'bescherming']
      },
      {
        id: 'burg_34_4',
        code: 'BU.2.4',
        titel: 'Digitale geletterdheid basis',
        beschrijving: 'De leerling ontwikkelt basisvaardigheden voor veilig digitaal gedrag',
        subdoelen: [
          'Veilig internetgebruik',
          'Persoonlijke informatie beschermen',
          'Digitale communicatie begrijpen',
          'Onderscheid maken tussen echt en nep online',
          'Hulp vragen bij digitale problemen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        vervolgend: ['burg_56_4'],
        kernwoorden: ['internet', 'veiligheid', 'privacy', 'digitaal']
      }
    ],
    'groep5-6': [
      {
        id: 'burg_56_1',
        code: 'BU.3.1',
        titel: 'Identiteit en wereldburgerschap',
        beschrijving: 'De leerling ontwikkelt bewustzijn van eigen plaats in de wereld',
        subdoelen: [
          'Nederlandse identiteit en waarden begrijpen',
          'Europese en wereldwijde verbindingen herkennen',
          'Verschillende levensbeschouwingen respecteren',
          'Mondiale uitdagingen benoemen',
          'Eigen rol als wereldburger begrijpen'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_1'],
        vervolgend: ['burg_78_1'],
        kernwoorden: ['Nederland', 'Europa', 'wereld', 'waarden']
      },
      {
        id: 'burg_56_2',
        code: 'BU.3.2',
        titel: 'Democratie en rechtsstaat',
        beschrijving: 'De leerling leert over democratische instellingen en de rechtsstaat',
        subdoelen: [
          'Nederlandse democratie begrijpen',
          'Verkiezingen en politieke partijen',
          'Rechten en plichten van burgers',
          'Rechtssysteem en wetten',
          'Participatie in de samenleving'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_2'],
        vervolgend: ['burg_78_2'],
        kernwoorden: ['democratie', 'verkiezingen', 'wetten', 'participatie']
      },
      {
        id: 'burg_56_3',
        code: 'BU.3.3',
        titel: 'Sociale cohesie',
        beschrijving: 'De leerling leert over samenleven en sociale cohesie',
        subdoelen: [
          'Sociale ongelijkheid herkennen',
          'Solidariteit en empathie tonen',
          'Conflicten constructief oplossen',
          'Samenwerken aan gemeenschappelijke doelen',
          'Verantwoordelijkheid nemen voor de gemeenschap'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_3'],
        vervolgend: ['burg_78_3'],
        kernwoorden: ['cohesie', 'solidariteit', 'gemeenschap', 'samenwerking']
      },
      {
        id: 'burg_56_4',
        code: 'BU.3.4',
        titel: 'Digitale geletterdheid gevorderd',
        beschrijving: 'De leerling ontwikkelt gevorderde digitale vaardigheden en kritisch denken',
        subdoelen: [
          'Informatie zoeken en beoordelen',
          'Nepnieuws en desinformatie herkennen',
          'Digitale voetafdruk begrijpen',
          'Online gedrag en netiquette',
          'Digitale rechten en plichten'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_34_4'],
        vervolgend: ['burg_78_4'],
        kernwoorden: ['informatie', 'nepnieuws', 'voetafdruk', 'netiquette']
      }
    ],
    'groep7-8': [
      {
        id: 'burg_78_1',
        code: 'BU.4.1',
        titel: 'Burgerschap en identiteit',
        beschrijving: 'De leerling ontwikkelt een bewuste burgerschapsidentiteit',
        subdoelen: [
          'Nederlandse grondwet en waarden',
          'Mensenrechten en vrijheden',
          'Culturele diversiteit en integratie',
          'Nationale en internationale verbindingen',
          'Actief burgerschap'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_1'],
        kernwoorden: ['grondwet', 'mensenrechten', 'integratie', 'burgerschap']
      },
      {
        id: 'burg_78_2',
        code: 'BU.4.2',
        titel: 'Democratie en politieke participatie',
        beschrijving: 'De leerling begrijpt democratische processen en kan er aan deelnemen',
        subdoelen: [
          'Politieke besluitvorming begrijpen',
          'Invloed uitoefenen op beleid',
          'Kritisch volgen van politiek',
          'Debatteren over maatschappelijke kwesties',
          'Eigen standpunten onderbouwen'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_2'],
        kernwoorden: ['politiek', 'beleid', 'debat', 'standpunten']
      },
      {
        id: 'burg_78_3',
        code: 'BU.4.3',
        titel: 'Sociale rechtvaardigheid',
        beschrijving: 'De leerling ontwikkelt bewustzijn van sociale rechtvaardigheid',
        subdoelen: [
          'Ongelijkheid en discriminatie herkennen',
          'Actie ondernemen tegen onrecht',
          'Solidariteit tonen met kwetsbare groepen',
          'Duurzaamheid en toekomstdenken',
          'Mondiale verantwoordelijkheid'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_3'],
        kernwoorden: ['rechtvaardigheid', 'discriminatie', 'duurzaamheid', 'mondiaal']
      },
      {
        id: 'burg_78_4',
        code: 'BU.4.4',
        titel: 'Digitaal burgerschap',
        beschrijving: 'De leerling wordt een verantwoordelijke digitale burger',
        subdoelen: [
          'Kritisch mediagebruik',
          'Digitale democratie en e-participatie',
          'Cybersecurity en privacy',
          'Digitale economie begrijpen',
          'Ethisch gebruik van technologie'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['burg_56_4'],
        kernwoorden: ['media', 'e-participatie', 'cybersecurity', 'ethiek']
      }
    ]
  },
  wereldoriëntatie: {
    'groep1-2': [
      {
        id: 'wo_12_1',
        code: 'WO.1.1',
        titel: 'Jezelf en je omgeving',
        beschrijving: 'De leerling leert zichzelf en zijn directe omgeving kennen',
        subdoelen: [
          'Eigen lichaam en zintuigen ontdekken',
          'Familie en vrienden beschrijven',
          'Huis, school en buurt verkennen',
          'Dagelijkse routines herkennen',
          'Seizoenen en weer waarnemen'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_1'],
        kernwoorden: ['lichaam', 'familie', 'buurt', 'seizoenen']
      },
      {
        id: 'wo_12_2',
        code: 'WO.1.2',
        titel: 'Dieren en planten',
        beschrijving: 'De leerling ontdekt de natuur en leert over dieren en planten',
        subdoelen: [
          'Huisdieren en wilde dieren herkennen',
          'Planten in de omgeving benoemen',
          'Verzorging van dieren en planten',
          'Groei en verandering waarnemen',
          'Natuurlijke materialen ontdekken'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_2'],
        kernwoorden: ['dieren', 'planten', 'verzorging', 'groei']
      },
      {
        id: 'wo_12_3',
        code: 'WO.1.3',
        titel: 'Vroeger en nu',
        beschrijving: 'De leerling ontwikkelt tijdsbesef en leert over veranderingen',
        subdoelen: [
          'Eigen groei en ontwikkeling',
          'Dag, week, maand, jaar',
          'Vroeger en nu vergelijken',
          'Oude en nieuwe voorwerpen',
          'Verhalen van vroeger'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_3'],
        kernwoorden: ['tijd', 'groei', 'vroeger', 'verandering']
      }
    ],
    'groep3-4': [
      {
        id: 'wo_34_1',
        code: 'WO.2.1',
        titel: 'Mens en samenleving',
        beschrijving: 'De leerling leert over de samenleving en zijn plaats daarin',
        subdoelen: [
          'Verschillende beroepen en hun functies',
          'Organisaties en instellingen in de buurt',
          'Verkeer en vervoer',
          'Communicatie en media',
          'Cultuur en tradities'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_1'],
        vervolgend: ['wo_56_1'],
        kernwoorden: ['beroepen', 'instellingen', 'verkeer', 'cultuur']
      },
      {
        id: 'wo_34_2',
        code: 'WO.2.2',
        titel: 'Natuur en milieu',
        beschrijving: 'De leerling onderzoekt de natuur en leert over milieu',
        subdoelen: [
          'Leefgebieden van dieren en planten',
          'Voedselketens en ecosystemen',
          'Weer en klimaat',
          'Milieuproblemen herkennen',
          'Duurzaam gedrag ontwikkelen'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_2'],
        vervolgend: ['wo_56_2'],
        kernwoorden: ['leefgebieden', 'voedselketen', 'klimaat', 'duurzaamheid']
      },
      {
        id: 'wo_34_3',
        code: 'WO.2.3',
        titel: 'Geschiedenis en erfgoed',
        beschrijving: 'De leerling leert over het verleden en erfgoed',
        subdoelen: [
          'Tijdlijn van eigen leven',
          'Geschiedenis van de school en buurt',
          'Historische voorwerpen en gebouwen',
          'Verhalen uit het verleden',
          'Tradities en gebruiken'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_3'],
        vervolgend: ['wo_56_3'],
        kernwoorden: ['tijdlijn', 'geschiedenis', 'erfgoed', 'tradities']
      },
      {
        id: 'wo_34_4',
        code: 'WO.2.4',
        titel: 'Aardrijkskunde basis',
        beschrijving: 'De leerling ontwikkelt ruimtelijk inzicht en geografische kennis',
        subdoelen: [
          'Plattegronden en kaarten lezen',
          'Nederland op de kaart',
          'Landschappen herkennen',
          'Steden en dorpen',
          'Water en land'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_56_4'],
        kernwoorden: ['kaarten', 'Nederland', 'landschappen', 'geografie']
      }
    ],
    'groep5-6': [
      {
        id: 'wo_56_1',
        code: 'WO.3.1',
        titel: 'Nederlandse samenleving',
        beschrijving: 'De leerling leert over de Nederlandse samenleving en democratie',
        subdoelen: [
          'Regering en bestuur in Nederland',
          'Provincies en gemeenten',
          'Nederlandse economie',
          'Multiculturele samenleving',
          'Nederlandse tradities en feesten'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_1'],
        vervolgend: ['wo_78_1'],
        kernwoorden: ['regering', 'economie', 'multicultureel', 'tradities']
      },
      {
        id: 'wo_56_2',
        code: 'WO.3.2',
        titel: 'Natuur en techniek',
        beschrijving: 'De leerling onderzoekt natuurverschijnselen en techniek',
        subdoelen: [
          'Natuurkrachten en energie',
          'Materialen en hun eigenschappen',
          'Technische uitvindingen',
          'Milieu en duurzaamheid',
          'Onderzoek en experimenten'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_2'],
        vervolgend: ['wo_78_2'],
        kernwoorden: ['energie', 'materialen', 'techniek', 'onderzoek']
      },
      {
        id: 'wo_56_3',
        code: 'WO.3.3',
        titel: 'Nederlandse geschiedenis',
        beschrijving: 'De leerling leert over belangrijke perioden in de Nederlandse geschiedenis',
        subdoelen: [
          'Prehistorie en Romeinse tijd',
          'Middeleeuwen',
          'Gouden Eeuw',
          'Industriële revolutie',
          'Twintigste eeuw'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_3'],
        vervolgend: ['wo_78_3'],
        kernwoorden: ['prehistorie', 'middeleeuwen', 'gouden eeuw', 'industrieel']
      },
      {
        id: 'wo_56_4',
        code: 'WO.3.4',
        titel: 'Europa en de wereld',
        beschrijving: 'De leerling leert over Europa en andere continenten',
        subdoelen: [
          'Europese landen en hoofdsteden',
          'Continenten en oceanen',
          'Klimaatzones',
          'Culturen en talen',
          'Internationale samenwerking'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_4'],
        vervolgend: ['wo_78_4'],
        kernwoorden: ['Europa', 'continenten', 'klimaat', 'culturen']
      }
    ],
    'groep7-8': [
      {
        id: 'wo_78_1',
        code: 'WO.4.1',
        titel: 'Mondiale samenleving',
        beschrijving: 'De leerling begrijpt mondiale verbindingen en uitdagingen',
        subdoelen: [
          'Globalisering en internationale handel',
          'Migratie en vluchtelingen',
          'Internationale organisaties',
          'Mondiale problemen en oplossingen',
          'Duurzame ontwikkeling'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_1'],
        kernwoorden: ['globalisering', 'migratie', 'internationaal', 'duurzaam']
      },
      {
        id: 'wo_78_2',
        code: 'WO.4.2',
        titel: 'Wetenschap en technologie',
        beschrijving: 'De leerling begrijpt wetenschappelijke principes en technologische ontwikkelingen',
        subdoelen: [
          'Wetenschappelijke methode',
          'Technologische innovaties',
          'Digitale revolutie',
          'Biotechnologie en geneeskunde',
          'Ruimtevaart en astronomie'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_2'],
        kernwoorden: ['wetenschap', 'innovatie', 'digitaal', 'ruimtevaart']
      },
      {
        id: 'wo_78_3',
        code: 'WO.4.3',
        titel: 'Wereldgeschiedenis',
        beschrijving: 'De leerling leert over belangrijke gebeurtenissen in de wereldgeschiedenis',
        subdoelen: [
          'Oude beschavingen',
          'Ontdekkingsreizen',
          'Wereldoorlogen',
          'Koude Oorlog',
          'Moderne geschiedenis'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_3'],
        kernwoorden: ['beschavingen', 'ontdekkingen', 'wereldoorlogen', 'modern']
      },
      {
        id: 'wo_78_4',
        code: 'WO.4.4',
        titel: 'Mondiale geografie',
        beschrijving: 'De leerling begrijpt geografische processen en mondiale patronen',
        subdoelen: [
          'Natuurrampen en klimaatverandering',
          'Bevolkingsgroei en verstedelijking',
          'Natuurlijke hulpbronnen',
          'Economische ontwikkeling',
          'Geopolitieke verhoudingen'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_4'],
        kernwoorden: ['klimaatverandering', 'bevolking', 'hulpbronnen', 'geopolitiek']
      }
    ]
  },
  engels: {
    'groep1-2': [
      {
        id: 'eng_12_1',
        code: 'EN.1.1',
        titel: 'Eerste Engelse woorden',
        beschrijving: 'De leerling leert eerste Engelse woorden en uitdrukkingen',
        subdoelen: [
          'Groeten en afscheid nemen',
          'Getallen tot 10',
          'Kleuren benoemen',
          'Lichaamsdelen',
          'Eenvoudige liedjes en rijmpjes'
        ],
        groep: 'groep1-2',
        vakgebied: 'engels',
        vervolgend: ['eng_34_1'],
        kernwoorden: ['groeten', 'getallen', 'kleuren', 'liedjes']
      }
    ],
    'groep3-4': [
      {
        id: 'eng_34_1',
        code: 'EN.2.1',
        titel: 'Basiswoordenschat Engels',
        beschrijving: 'De leerling bouwt een basiswoordenschat op in het Engels',
        subdoelen: [
          'Familie en vrienden',
          'Dieren en huisdieren',
          'Eten en drinken',
          'Kleding en lichaam',
          'School en speelgoed'
        ],
        groep: 'groep3-4',
        vakgebied: 'engels',
        voorafgaand: ['eng_12_1'],
        vervolgend: ['eng_56_1'],
        kernwoorden: ['familie', 'dieren', 'eten', 'school']
      },
      {
        id: 'eng_34_2',
        code: 'EN.2.2',
        titel: 'Luisteren en spreken',
        beschrijving: 'De leerling ontwikkelt luister- en spreekvaardigheid in het Engels',
        subdoelen: [
          'Eenvoudige instructies begrijpen',
          'Korte gesprekjes voeren',
          'Vragen stellen en beantwoorden',
          'Verhalen en liedjes begrijpen',
          'Uitspraak oefenen'
        ],
        groep: 'groep3-4',
        vakgebied: 'engels',
        vervolgend: ['eng_56_2'],
        kernwoorden: ['luisteren', 'spreken', 'gesprekken', 'uitspraak']
      }
    ],
    'groep5-6': [
      {
        id: 'eng_56_1',
        code: 'EN.3.1',
        titel: 'Uitgebreide woordenschat',
        beschrijving: 'De leerling breidt zijn Engelse woordenschat uit',
        subdoelen: [
          'Hobby\'s en vrije tijd',
          'Weer en seizoenen',
          'Huis en wonen',
          'Reizen en transport',
          'Gevoelens en eigenschappen'
        ],
        groep: 'groep5-6',
        vakgebied: 'engels',
        voorafgaand: ['eng_34_1'],
        vervolgend: ['eng_78_1'],
        kernwoorden: ['hobby\'s', 'weer', 'huis', 'reizen']
      },
      {
        id: 'eng_56_2',
        code: 'EN.3.2',
        titel: 'Communicatie in het Engels',
        beschrijving: 'De leerling communiceert in eenvoudige gesprekssituaties',
        subdoelen: [
          'Informatie vragen en geven',
          'Voorkeuren uitdrukken',
          'Eenvoudige beschrijvingen geven',
          'Rollenspellen uitvoeren',
          'Presentaties geven'
        ],
        groep: 'groep5-6',
        vakgebied: 'engels',
        voorafgaand: ['eng_34_2'],
        vervolgend: ['eng_78_2'],
        kernwoorden: ['informatie', 'voorkeuren', 'beschrijvingen', 'presentaties']
      },
      {
        id: 'eng_56_3',
        code: 'EN.3.3',
        titel: 'Lezen en schrijven basis',
        beschrijving: 'De leerling ontwikkelt basis lees- en schrijfvaardigheden in het Engels',
        subdoelen: [
          'Eenvoudige teksten lezen',
          'Korte zinnen schrijven',
          'Woordjes en zinnen kopiëren',
          'Eenvoudige verhalen begrijpen',
          'Persoonlijke informatie schrijven'
        ],
        groep: 'groep5-6',
        vakgebied: 'engels',
        vervolgend: ['eng_78_3'],
        kernwoorden: ['lezen', 'schrijven', 'teksten', 'verhalen']
      }
    ],
    'groep7-8': [
      {
        id: 'eng_78_1',
        code: 'EN.4.1',
        titel: 'Gevorderde woordenschat',
        beschrijving: 'De leerling beheerst een uitgebreide Engelse woordenschat',
        subdoelen: [
          'Abstracte begrippen',
          'Technologie en media',
          'Natuur en milieu',
          'Cultuur en tradities',
          'Toekomst en ambities'
        ],
        groep: 'groep7-8',
        vakgebied: 'engels',
        voorafgaand: ['eng_56_1'],
        kernwoorden: ['abstract', 'technologie', 'natuur', 'cultuur']
      },
      {
        id: 'eng_78_2',
        code: 'EN.4.2',
        titel: 'Vloeiend communiceren',
        beschrijving: 'De leerling communiceert vloeiend in verschillende situaties',
        subdoelen: [
          'Discussies voeren',
          'Meningen geven en onderbouwen',
          'Complexere gesprekken',
          'Telefoongesprekken',
          'Formele en informele communicatie'
        ],
        groep: 'groep7-8',
        vakgebied: 'engels',
        voorafgaand: ['eng_56_2'],
        kernwoorden: ['discussies', 'meningen', 'gesprekken', 'formeel']
      },
      {
        id: 'eng_78_3',
        code: 'EN.4.3',
        titel: 'Gevorderd lezen en schrijven',
        beschrijving: 'De leerling leest en schrijft verschillende tekstsoorten in het Engels',
        subdoelen: [
          'Verschillende tekstsoorten lezen',
          'Verhalen en artikelen schrijven',
          'E-mails en brieven opstellen',
          'Informatie zoeken in teksten',
          'Creatief schrijven'
        ],
        groep: 'groep7-8',
        vakgebied: 'engels',
        voorafgaand: ['eng_56_3'],
        kernwoorden: ['tekstsoorten', 'verhalen', 'e-mails', 'creatief']
      }
    ]
  },
  bewegingsonderwijs: {
    'groep1-2': [
      {
        id: 'bew_12_1',
        code: 'BW.1.1',
        titel: 'Basisbeweging en motoriek',
        beschrijving: 'De leerling ontwikkelt basisbeweging en grove motoriek',
        subdoelen: [
          'Lopen, rennen, springen',
          'Gooien en vangen',
          'Balans en coördinatie',
          'Kruipen en klimmen',
          'Ritme en beweging'
        ],
        groep: 'groep1-2',
        vakgebied: 'bewegingsonderwijs',
        vervolgend: ['bew_34_1'],
        kernwoorden: ['motoriek', 'balans', 'coördinatie', 'ritme']
      },
      {
        id: 'bew_12_2',
        code: 'BW.1.2',
        titel: 'Spel en samenwerking',
        beschrijving: 'De leerling leert spelen en samenwerken in bewegingssituaties',
        subdoelen: [
          'Eenvoudige spelletjes',
          'Samen bewegen',
          'Regels begrijpen',
          'Eerlijk spelen',
          'Plezier in beweging'
        ],
        groep: 'groep1-2',
        vakgebied: 'bewegingsonderwijs',
        vervolgend: ['bew_34_2'],
        kernwoorden: ['spel', 'samenwerking', 'regels', 'plezier']
      }
    ],
    'groep3-4': [
      {
        id: 'bew_34_1',
        code: 'BW.2.1',
        titel: 'Sportieve vaardigheden',
        beschrijving: 'De leerling ontwikkelt sportieve vaardigheden en technieken',
        subdoelen: [
          'Balvaardigheden',
          'Atletiek basis',
          'Gymnastiek elementen',
          'Zwemvaardigheden',
          'Conditie opbouwen'
        ],
        groep: 'groep3-4',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_12_1'],
        vervolgend: ['bew_56_1'],
        kernwoorden: ['bal', 'atletiek', 'gymnastiek', 'zwemmen']
      },
      {
        id: 'bew_34_2',
        code: 'BW.2.2',
        titel: 'Teamsporten en samenwerking',
        beschrijving: 'De leerling leert teamsporten en samenwerking',
        subdoelen: [
          'Eenvoudige teamspelen',
          'Positiespel begrijpen',
          'Tactiek basis',
          'Sportiviteit tonen',
          'Leiderschap ontwikkelen'
        ],
        groep: 'groep3-4',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_12_2'],
        vervolgend: ['bew_56_2'],
        kernwoorden: ['teamsporten', 'tactiek', 'sportiviteit', 'leiderschap']
      }
    ],
    'groep5-6': [
      {
        id: 'bew_56_1',
        code: 'BW.3.1',
        titel: 'Gevorderde sportvaardigheden',
        beschrijving: 'De leerling beheerst gevorderde sportvaardigheden',
        subdoelen: [
          'Complexe bewegingen',
          'Sportspecifieke technieken',
          'Kracht en lenigheid',
          'Uithoudingsvermogen',
          'Bewegingsanalyse'
        ],
        groep: 'groep5-6',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_34_1'],
        vervolgend: ['bew_78_1'],
        kernwoorden: ['complex', 'technieken', 'kracht', 'analyse']
      },
      {
        id: 'bew_56_2',
        code: 'BW.3.2',
        titel: 'Competitie en prestatie',
        beschrijving: 'De leerling leert omgaan met competitie en prestatie',
        subdoelen: [
          'Wedstrijden spelen',
          'Winnen en verliezen',
          'Prestaties verbeteren',
          'Doelen stellen',
          'Zelfvertrouwen opbouwen'
        ],
        groep: 'groep5-6',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_34_2'],
        vervolgend: ['bew_78_2'],
        kernwoorden: ['competitie', 'prestatie', 'doelen', 'vertrouwen']
      }
    ],
    'groep7-8': [
      {
        id: 'bew_78_1',
        code: 'BW.4.1',
        titel: 'Specialisatie en expertise',
        beschrijving: 'De leerling specialiseert zich in bepaalde sporten',
        subdoelen: [
          'Sportspecialisatie',
          'Technische perfectie',
          'Trainingsplanning',
          'Blessurepreventie',
          'Sportcarrière oriëntatie'
        ],
        groep: 'groep7-8',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_56_1'],
        kernwoorden: ['specialisatie', 'perfectie', 'training', 'preventie']
      },
      {
        id: 'bew_78_2',
        code: 'BW.4.2',
        titel: 'Leiderschap en coaching',
        beschrijving: 'De leerling ontwikkelt leiderschap en coaching vaardigheden',
        subdoelen: [
          'Anderen coachen',
          'Teams leiden',
          'Scheidsrechteren',
          'Trainingen geven',
          'Sportorganisatie'
        ],
        groep: 'groep7-8',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bew_56_2'],
        kernwoorden: ['coaching', 'leiderschap', 'scheidsrechter', 'organisatie']
      }
    ]
  },
  expressie: {
    'groep1-2': [
      {
        id: 'exp_12_1',
        code: 'EX.1.1',
        titel: 'Creatieve expressie',
        beschrijving: 'De leerling ontwikkelt creatieve expressie door kunst en muziek',
        subdoelen: [
          'Tekenen en schilderen',
          'Knutselen en maken',
          'Zingen en muziek maken',
          'Dansen en bewegen op muziek',
          'Verhalen vertellen'
        ],
        groep: 'groep1-2',
        vakgebied: 'expressie',
        vervolgend: ['exp_34_1'],
        kernwoorden: ['tekenen', 'knutselen', 'zingen', 'dansen']
      }
    ],
    'groep3-4': [
      {
        id: 'exp_34_1',
        code: 'EX.2.1',
        titel: 'Beeldende vorming',
        beschrijving: 'De leerling ontwikkelt vaardigheden in beeldende vorming',
        subdoelen: [
          'Verschillende materialen gebruiken',
          'Kleuren en vormen',
          'Compositie en ontwerp',
          'Kunstwerken bekijken',
          'Eigen werk presenteren'
        ],
        groep: 'groep3-4',
        vakgebied: 'expressie',
        voorafgaand: ['exp_12_1'],
        vervolgend: ['exp_56_1'],
        kernwoorden: ['materialen', 'kleuren', 'compositie', 'kunstwerken']
      },
      {
        id: 'exp_34_2',
        code: 'EX.2.2',
        titel: 'Muzikale vorming',
        beschrijving: 'De leerling ontwikkelt muzikale vaardigheden',
        subdoelen: [
          'Ritme en melodie',
          'Instrumenten bespelen',
          'Muziek luisteren',
          'Liedjes leren',
          'Muziek maken'
        ],
        groep: 'groep3-4',
        vakgebied: 'expressie',
        vervolgend: ['exp_56_2'],
        kernwoorden: ['ritme', 'instrumenten', 'luisteren', 'liedjes']
      }
    ],
    'groep5-6': [
      {
        id: 'exp_56_1',
        code: 'EX.3.1',
        titel: 'Gevorderde beeldende kunst',
        beschrijving: 'De leerling beheerst gevorderde technieken in beeldende kunst',
        subdoelen: [
          'Verschillende kunststromingen',
          'Perspectief en diepte',
          'Digitale kunst',
          'Kunstgeschiedenis',
          'Eigen stijl ontwikkelen'
        ],
        groep: 'groep5-6',
        vakgebied: 'expressie',
        voorafgaand: ['exp_34_1'],
        vervolgend: ['exp_78_1'],
        kernwoorden: ['kunststromingen', 'perspectief', 'digitaal', 'geschiedenis']
      },
      {
        id: 'exp_56_2',
        code: 'EX.3.2',
        titel: 'Muziektheorie en praktijk',
        beschrijving: 'De leerling leert muziektheorie en past deze toe',
        subdoelen: [
          'Noten lezen',
          'Akkoorden en harmonie',
          'Componeren',
          'Ensemble spelen',
          'Muziekstijlen'
        ],
        groep: 'groep5-6',
        vakgebied: 'expressie',
        voorafgaand: ['exp_34_2'],
        vervolgend: ['exp_78_2'],
        kernwoorden: ['noten', 'akkoorden', 'componeren', 'ensemble']
      },
      {
        id: 'exp_56_3',
        code: 'EX.3.3',
        titel: 'Drama en theater',
        beschrijving: 'De leerling ontwikkelt drama en theatervaardigheden',
        subdoelen: [
          'Rollenspel en acteren',
          'Stemgebruik en uitspraak',
          'Beweging en expressie',
          'Toneelstukken opvoeren',
          'Kostuums en decor'
        ],
        groep: 'groep5-6',
        vakgebied: 'expressie',
        vervolgend: ['exp_78_3'],
        kernwoorden: ['acteren', 'stem', 'beweging', 'toneel']
      }
    ],
    'groep7-8': [
      {
        id: 'exp_78_1',
        code: 'EX.4.1',
        titel: 'Kunstzinnige ontwikkeling',
        beschrijving: 'De leerling ontwikkelt zich kunstzinnig en cultureel',
        subdoelen: [
          'Persoonlijke kunstvisie',
          'Cultureel erfgoed',
          'Kunstkritiek',
          'Tentoonstellingen organiseren',
          'Kunstzinnige loopbaan'
        ],
        groep: 'groep7-8',
        vakgebied: 'expressie',
        voorafgaand: ['exp_56_1'],
        kernwoorden: ['kunstvisie', 'erfgoed', 'kritiek', 'tentoonstellingen']
      },
      {
        id: 'exp_78_2',
        code: 'EX.4.2',
        titel: 'Muzikale excellentie',
        beschrijving: 'De leerling streeft naar muzikale excellentie',
        subdoelen: [
          'Gevorderde instrumentbeheersing',
          'Muziekproductie',
          'Concerten geven',
          'Muziekbusiness',
          'Muzikale innovatie'
        ],
        groep: 'groep7-8',
        vakgebied: 'expressie',
        voorafgaand: ['exp_56_2'],
        kernwoorden: ['instrument', 'productie', 'concerten', 'business']
      },
      {
        id: 'exp_78_3',
        code: 'EX.4.3',
        titel: 'Podiumkunsten',
        beschrijving: 'De leerling beheerst verschillende podiumkunsten',
        subdoelen: [
          'Professioneel acteren',
          'Regisseren',
          'Theaterproducties',
          'Film en media',
          'Podiumcarrière'
        ],
        groep: 'groep7-8',
        vakgebied: 'expressie',
        voorafgaand: ['exp_56_3'],
        kernwoorden: ['professioneel', 'regisseren', 'producties', 'film']
      }
    ]
  },
  ict: {
    'groep3-4': [
      {
        id: 'ict_34_1',
        code: 'ICT.2.1',
        titel: 'Digitale vaardigheden basis',
        beschrijving: 'De leerling ontwikkelt basisvaardigheden met computers en tablets',
        subdoelen: [
          'Computer en tablet bedienen',
          'Toetsenbord en muis gebruiken',
          'Bestanden openen en opslaan',
          'Eenvoudige programma\'s gebruiken',
          'Internet veilig gebruiken'
        ],
        groep: 'groep3-4',
        vakgebied: 'ict',
        vervolgend: ['ict_56_1'],
        kernwoorden: ['computer', 'toetsenbord', 'bestanden', 'internet']
      }
    ],
    'groep5-6': [
      {
        id: 'ict_56_1',
        code: 'ICT.3.1',
        titel: 'Informatievaardigheden',
        beschrijving: 'De leerling leert informatie zoeken, beoordelen en gebruiken',
        subdoelen: [
          'Zoeken op internet',
          'Bronnen beoordelen',
          'Informatie verwerken',
          'Presentaties maken',
          'Digitale communicatie'
        ],
        groep: 'groep5-6',
        vakgebied: 'ict',
        voorafgaand: ['ict_34_1'],
        vervolgend: ['ict_78_1'],
        kernwoorden: ['zoeken', 'bronnen', 'verwerken', 'presentaties']
      },
      {
        id: 'ict_56_2',
        code: 'ICT.3.2',
        titel: 'Programmeren basis',
        beschrijving: 'De leerling leert de basis van programmeren en computational thinking',
        subdoelen: [
          'Algoritmes begrijpen',
          'Visueel programmeren',
          'Problemen oplossen',
          'Logisch denken',
          'Debugging'
        ],
        groep: 'groep5-6',
        vakgebied: 'ict',
        vervolgend: ['ict_78_2'],
        kernwoorden: ['algoritmes', 'programmeren', 'problemen', 'logisch']
      }
    ],
    'groep7-8': [
      {
        id: 'ict_78_1',
        code: 'ICT.4.1',
        titel: 'Gevorderde ICT-vaardigheden',
        beschrijving: 'De leerling beheerst gevorderde ICT-vaardigheden',
        subdoelen: [
          'Complexe software gebruiken',
          'Databases en spreadsheets',
          'Multimedia producties',
          'Webdesign basis',
          'Digitale projecten'
        ],
        groep: 'groep7-8',
        vakgebied: 'ict',
        voorafgaand: ['ict_56_1'],
        kernwoorden: ['software', 'databases', 'multimedia', 'webdesign']
      },
      {
        id: 'ict_78_2',
        code: 'ICT.4.2',
        titel: 'Programmeren en robotica',
        beschrijving: 'De leerling leert programmeren en werken met robotica',
        subdoelen: [
          'Tekstueel programmeren',
          'Robotica en sensoren',
          'Apps ontwikkelen',
          'Artificial Intelligence basis',
          'Technische innovatie'
        ],
        groep: 'groep7-8',
        vakgebied: 'ict',
        voorafgaand: ['ict_56_2'],
        kernwoorden: ['programmeren', 'robotica', 'apps', 'AI']
      },
      {
        id: 'ict_78_3',
        code: 'ICT.4.3',
        titel: 'Digitaal burgerschap',
        beschrijving: 'De leerling wordt een verantwoordelijke digitale burger',
        subdoelen: [
          'Privacy en veiligheid',
          'Digitale voetafdruk',
          'Cyberpesten voorkomen',
          'Auteursrecht respecteren',
          'Ethisch ICT-gebruik'
        ],
        groep: 'groep7-8',
        vakgebied: 'ict',
        kernwoorden: ['privacy', 'voetafdruk', 'cyberpesten', 'auteursrecht']
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