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
        id: 'bg_12_1',
        code: 'BG.1.1',
        titel: 'Zelfbeeld en identiteit',
        beschrijving: 'De leerling ontwikkelt een positief zelfbeeld en leert over eigen identiteit',
        subdoelen: [
          'Eigen naam en eigenschappen benoemen',
          'Gevoelens herkennen en uiten',
          'Verschillen en overeenkomsten met anderen zien',
          'Trots zijn op eigen kunnen',
          'Hulp vragen wanneer nodig'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['bg_34_1'],
        kernwoorden: ['identiteit', 'zelfbeeld', 'gevoelens', 'verschillen']
      },
      {
        id: 'bg_12_2',
        code: 'BG.1.2',
        titel: 'Samenwerken en omgaan met anderen',
        beschrijving: 'De leerling leert samen te werken en respectvol om te gaan met anderen',
        subdoelen: [
          'Samen spelen en werken',
          'Beurten nemen en delen',
          'Luisteren naar anderen',
          'Hulp bieden aan klasgenoten',
          'Conflicten op een goede manier oplossen'
        ],
        groep: 'groep1-2',
        vakgebied: 'burgerschap',
        vervolgend: ['bg_34_2'],
        kernwoorden: ['samenwerken', 'respect', 'delen', 'conflicten']
      }
    ],
    'groep3-4': [
      {
        id: 'bg_34_1',
        code: 'BG.2.1',
        titel: 'Identiteit en diversiteit',
        beschrijving: 'De leerling begrijpt diversiteit en ontwikkelt respect voor verschillen',
        subdoelen: [
          'Eigen culturele achtergrond beschrijven',
          'Verschillen in gezinnen en tradities respecteren',
          'Vooroordelen herkennen',
          'Inclusief gedrag tonen',
          'Trots zijn op eigen en andermans achtergrond'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_12_1'],
        vervolgend: ['bg_56_1'],
        kernwoorden: ['diversiteit', 'cultuur', 'vooroordelen', 'inclusie']
      },
      {
        id: 'bg_34_2',
        code: 'BG.2.2',
        titel: 'Democratie en participatie',
        beschrijving: 'De leerling leert over democratische besluitvorming en participatie',
        subdoelen: [
          'Meepraten over klasregels',
          'Stemmen en verkiezingen begrijpen',
          'Eigen mening geven en onderbouwen',
          'Luisteren naar andere meningen',
          'Compromissen sluiten'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_12_2'],
        vervolgend: ['bg_56_2'],
        kernwoorden: ['democratie', 'stemmen', 'mening', 'compromis']
      },
      {
        id: 'bg_34_3',
        code: 'BG.2.3',
        titel: 'Rechten en plichten',
        beschrijving: 'De leerling leert over rechten en plichten in de klas en school',
        subdoelen: [
          'Eigen rechten kennen (veiligheid, respect)',
          'Plichten begrijpen (luisteren, meehelpen)',
          'Regels en afspraken naleven',
          'Anderen helpen hun rechten te krijgen',
          'Verantwoordelijkheid nemen'
        ],
        groep: 'groep3-4',
        vakgebied: 'burgerschap',
        vervolgend: ['bg_56_3'],
        kernwoorden: ['rechten', 'plichten', 'regels', 'verantwoordelijkheid']
      }
    ],
    'groep5-6': [
      {
        id: 'bg_56_1',
        code: 'BG.3.1',
        titel: 'Identiteit in de samenleving',
        beschrijving: 'De leerling begrijpt hoe identiteit wordt gevormd door sociale groepen',
        subdoelen: [
          'Verschillende sociale groepen herkennen',
          'Invloed van media op identiteit begrijpen',
          'Stereotypen en discriminatie herkennen',
          'Eigen keuzes maken ondanks groepsdruk',
          'Positief bijdragen aan groepen'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_34_1'],
        vervolgend: ['bg_78_1'],
        kernwoorden: ['sociale groepen', 'media', 'stereotypen', 'groepsdruk']
      },
      {
        id: 'bg_56_2',
        code: 'BG.3.2',
        titel: 'Democratische vaardigheden',
        beschrijving: 'De leerling ontwikkelt vaardigheden voor democratische participatie',
        subdoelen: [
          'Argumenten formuleren en onderbouwen',
          'Debatteren en discussiëren',
          'Democratische procedures volgen',
          'Leiderschap en volgerschap',
          'Invloed uitoefenen op beslissingen'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_34_2'],
        vervolgend: ['bg_78_2'],
        kernwoorden: ['argumenteren', 'debat', 'procedures', 'leiderschap']
      },
      {
        id: 'bg_56_3',
        code: 'BG.3.3',
        titel: 'Rechtvaardigheid en gelijkheid',
        beschrijving: 'De leerling begrijpt concepten van rechtvaardigheid en gelijkheid',
        subdoelen: [
          'Eerlijkheid en rechtvaardigheid herkennen',
          'Ongelijkheid en onrecht benoemen',
          'Actie ondernemen tegen onrecht',
          'Solidariteit tonen met anderen',
          'Mensenrechten begrijpen'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_34_3'],
        vervolgend: ['bg_78_3'],
        kernwoorden: ['rechtvaardigheid', 'gelijkheid', 'onrecht', 'mensenrechten']
      },
      {
        id: 'bg_56_4',
        code: 'BG.3.4',
        titel: 'Digitale geletterdheid en burgerschap',
        beschrijving: 'De leerling leert verantwoord omgaan met digitale media',
        subdoelen: [
          'Betrouwbare informatie herkennen',
          'Privacy en veiligheid online',
          'Respectvol communiceren online',
          'Digitale voetafdruk begrijpen',
          'Kritisch kijken naar online content'
        ],
        groep: 'groep5-6',
        vakgebied: 'burgerschap',
        vervolgend: ['bg_78_4'],
        kernwoorden: ['digitaal', 'privacy', 'online', 'informatie']
      }
    ],
    'groep7-8': [
      {
        id: 'bg_78_1',
        code: 'BG.4.1',
        titel: 'Burgerschap en maatschappij',
        beschrijving: 'De leerling begrijpt zijn rol als burger in de maatschappij',
        subdoelen: [
          'Maatschappelijke instituties kennen',
          'Eigen rol als burger begrijpen',
          'Maatschappelijke problemen herkennen',
          'Bijdragen aan de gemeenschap',
          'Toekomstplannen maken'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_56_1'],
        kernwoorden: ['maatschappij', 'instituties', 'burger', 'gemeenschap']
      },
      {
        id: 'bg_78_2',
        code: 'BG.4.2',
        titel: 'Democratie en politiek',
        beschrijving: 'De leerling begrijpt het democratische systeem en politieke processen',
        subdoelen: [
          'Nederlandse democratie begrijpen',
          'Politieke partijen en standpunten',
          'Verkiezingen en representatie',
          'Invloed uitoefenen op politiek',
          'Europese en internationale samenwerking'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_56_2'],
        kernwoorden: ['democratie', 'politiek', 'verkiezingen', 'Europa']
      },
      {
        id: 'bg_78_3',
        code: 'BG.4.3',
        titel: 'Mondiale burgerschap',
        beschrijving: 'De leerling ontwikkelt bewustzijn van mondiale vraagstukken',
        subdoelen: [
          'Mondiale problemen herkennen',
          'Duurzaamheid en milieu',
          'Internationale samenwerking',
          'Culturele uitwisseling',
          'Eigen bijdrage aan mondiale doelen'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_56_3'],
        kernwoorden: ['mondiaal', 'duurzaamheid', 'internationaal', 'cultuur']
      },
      {
        id: 'bg_78_4',
        code: 'BG.4.4',
        titel: 'Digitaal burgerschap',
        beschrijving: 'De leerling wordt een verantwoordelijke digitale burger',
        subdoelen: [
          'Digitale rechten en plichten',
          'Cyberpesten herkennen en aanpakken',
          'Fake news en desinformatie',
          'Digitale democratie en participatie',
          'Ethisch gebruik van technologie'
        ],
        groep: 'groep7-8',
        vakgebied: 'burgerschap',
        voorafgaand: ['bg_56_4'],
        kernwoorden: ['digitaal', 'cyberpesten', 'fake news', 'ethiek']
      }
    ]
  },
  wereldoriëntatie: {
    'groep1-2': [
      {
        id: 'wo_12_1',
        code: 'WO.1.1',
        titel: 'Jezelf en je omgeving',
        beschrijving: 'De leerling leert over zichzelf en de directe omgeving',
        subdoelen: [
          'Eigen lichaam en zintuigen',
          'Familie en thuis',
          'School en klasgenoten',
          'Buurt en bekende plekken',
          'Seizoenen en weer'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_1'],
        kernwoorden: ['lichaam', 'familie', 'school', 'buurt', 'seizoenen']
      },
      {
        id: 'wo_12_2',
        code: 'WO.1.2',
        titel: 'Dieren en planten',
        beschrijving: 'De leerling ontdekt de natuur en leert over dieren en planten',
        subdoelen: [
          'Huisdieren en wilde dieren',
          'Planten in de tuin en natuur',
          'Verzorging van dieren en planten',
          'Groei en verandering',
          'Natuurlijke omgeving'
        ],
        groep: 'groep1-2',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_34_2'],
        kernwoorden: ['dieren', 'planten', 'verzorging', 'groei', 'natuur']
      }
    ],
    'groep3-4': [
      {
        id: 'wo_34_1',
        code: 'WO.2.1',
        titel: 'Mens en samenleving',
        beschrijving: 'De leerling leert over verschillende aspecten van de samenleving',
        subdoelen: [
          'Verschillende beroepen en werk',
          'Winkels en handel',
          'Vervoer en verkeer',
          'Feesten en tradities',
          'Regels en wetten'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_1'],
        vervolgend: ['wo_56_1'],
        kernwoorden: ['beroepen', 'handel', 'vervoer', 'tradities', 'regels']
      },
      {
        id: 'wo_34_2',
        code: 'WO.2.2',
        titel: 'Natuur en milieu',
        beschrijving: 'De leerling onderzoekt de natuur en leert over milieu',
        subdoelen: [
          'Leefgebieden van dieren',
          'Voedselketens',
          'Water, lucht en bodem',
          'Milieuproblemen',
          'Natuurbescherming'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_12_2'],
        vervolgend: ['wo_56_2'],
        kernwoorden: ['leefgebieden', 'voedselketen', 'milieu', 'bescherming']
      },
      {
        id: 'wo_34_3',
        code: 'WO.2.3',
        titel: 'Tijd en geschiedenis',
        beschrijving: 'De leerling ontwikkelt tijdsbesef en leert over het verleden',
        subdoelen: [
          'Dag, week, maand, jaar',
          'Vroeger en nu vergelijken',
          'Eigen geschiedenis en familie',
          'Oude voorwerpen en foto\'s',
          'Belangrijke gebeurtenissen'
        ],
        groep: 'groep3-4',
        vakgebied: 'wereldoriëntatie',
        vervolgend: ['wo_56_3'],
        kernwoorden: ['tijd', 'verleden', 'geschiedenis', 'familie', 'gebeurtenissen']
      }
    ],
    'groep5-6': [
      {
        id: 'wo_56_1',
        code: 'WO.3.1',
        titel: 'Nederland en Europa',
        beschrijving: 'De leerling leert over Nederland en zijn plaats in Europa',
        subdoelen: [
          'Nederlandse provincies en steden',
          'Landschap en waterbeheer',
          'Nederlandse geschiedenis',
          'Europese landen en hoofdsteden',
          'Europese samenwerking'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_1'],
        vervolgend: ['wo_78_1'],
        kernwoorden: ['Nederland', 'provincies', 'Europa', 'samenwerking']
      },
      {
        id: 'wo_56_2',
        code: 'WO.3.2',
        titel: 'Ecosystemen en duurzaamheid',
        beschrijving: 'De leerling begrijpt ecosystemen en duurzaamheid',
        subdoelen: [
          'Verschillende ecosystemen',
          'Biodiversiteit',
          'Klimaatverandering',
          'Duurzame energie',
          'Eigen bijdrage aan duurzaamheid'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_2'],
        vervolgend: ['wo_78_2'],
        kernwoorden: ['ecosysteem', 'biodiversiteit', 'klimaat', 'duurzaamheid']
      },
      {
        id: 'wo_56_3',
        code: 'WO.3.3',
        titel: 'Geschiedenis van Nederland',
        beschrijving: 'De leerling leert over belangrijke perioden in de Nederlandse geschiedenis',
        subdoelen: [
          'Prehistorie en Romeinse tijd',
          'Middeleeuwen',
          'Gouden Eeuw',
          'Tweede Wereldoorlog',
          'Modern Nederland'
        ],
        groep: 'groep5-6',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_34_3'],
        vervolgend: ['wo_78_3'],
        kernwoorden: ['prehistorie', 'middeleeuwen', 'gouden eeuw', 'wereldoorlog']
      }
    ],
    'groep7-8': [
      {
        id: 'wo_78_1',
        code: 'WO.4.1',
        titel: 'Wereld en globalisering',
        beschrijving: 'De leerling begrijpt de wereld en globalisering',
        subdoelen: [
          'Continenten en werelddelen',
          'Verschillende culturen',
          'Internationale handel',
          'Migratie en vluchtelingen',
          'Mondiale problemen'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_1'],
        kernwoorden: ['continenten', 'culturen', 'handel', 'migratie', 'mondiaal']
      },
      {
        id: 'wo_78_2',
        code: 'WO.4.2',
        titel: 'Wetenschap en technologie',
        beschrijving: 'De leerling leert over wetenschappelijke ontwikkelingen',
        subdoelen: [
          'Wetenschappelijke methode',
          'Technologische innovaties',
          'Gevolgen van technologie',
          'Toekomst van wetenschap',
          'Ethiek en wetenschap'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_2'],
        kernwoorden: ['wetenschap', 'technologie', 'innovatie', 'ethiek']
      },
      {
        id: 'wo_78_3',
        code: 'WO.4.3',
        titel: 'Wereldgeschiedenis',
        beschrijving: 'De leerling leert over belangrijke gebeurtenissen in de wereldgeschiedenis',
        subdoelen: [
          'Oude beschavingen',
          'Ontdekkingsreizen',
          'Industriële revolutie',
          'Wereldoorlogen',
          'Moderne geschiedenis'
        ],
        groep: 'groep7-8',
        vakgebied: 'wereldoriëntatie',
        voorafgaand: ['wo_56_3'],
        kernwoorden: ['beschavingen', 'ontdekkingen', 'industrieel', 'wereldoorlogen']
      }
    ]
  },
  engels: {
    'groep5-6': [
      {
        id: 'en_56_1',
        code: 'EN.3.1',
        titel: 'Luisteren en spreken',
        beschrijving: 'De leerling kan eenvoudige Engelse gesprekken voeren',
        subdoelen: [
          'Eenvoudige instructies begrijpen',
          'Zich voorstellen in het Engels',
          'Vragen stellen en beantwoorden',
          'Dagelijkse situaties bespreken',
          'Uitspraak en intonatie'
        ],
        groep: 'groep5-6',
        vakgebied: 'engels',
        vervolgend: ['en_78_1'],
        kernwoorden: ['luisteren', 'spreken', 'gesprek', 'uitspraak']
      },
      {
        id: 'en_56_2',
        code: 'EN.3.2',
        titel: 'Lezen en schrijven',
        beschrijving: 'De leerling kan eenvoudige Engelse teksten lezen en schrijven',
        subdoelen: [
          'Eenvoudige teksten lezen',
          'Woordenschat uitbreiden',
          'Korte zinnen schrijven',
          'Spelling van basiswoorden',
          'Tekstbegrip ontwikkelen'
        ],
        groep: 'groep5-6',
        vakgebied: 'engels',
        vervolgend: ['en_78_2'],
        kernwoorden: ['lezen', 'schrijven', 'woordenschat', 'spelling']
      }
    ],
    'groep7-8': [
      {
        id: 'en_78_1',
        code: 'EN.4.1',
        titel: 'Gevorderd luisteren en spreken',
        beschrijving: 'De leerling kan complexere Engelse gesprekken voeren',
        subdoelen: [
          'Langere gesprekken volgen',
          'Meningen uitdrukken',
          'Presentaties geven',
          'Discussiëren over onderwerpen',
          'Verschillende accenten herkennen'
        ],
        groep: 'groep7-8',
        vakgebied: 'engels',
        voorafgaand: ['en_56_1'],
        kernwoorden: ['gevorderd', 'meningen', 'presentatie', 'discussie']
      },
      {
        id: 'en_78_2',
        code: 'EN.4.2',
        titel: 'Gevorderd lezen en schrijven',
        beschrijving: 'De leerling kan complexere Engelse teksten lezen en schrijven',
        subdoelen: [
          'Langere teksten begrijpen',
          'Verschillende tekstsoorten',
          'Verhalen en brieven schrijven',
          'Grammatica toepassen',
          'Woordenschat uitbreiden'
        ],
        groep: 'groep7-8',
        vakgebied: 'engels',
        voorafgaand: ['en_56_2'],
        kernwoorden: ['complex', 'tekstsoorten', 'grammatica', 'verhalen']
      }
    ]
  },
  bewegingsonderwijs: {
    'groep1-2': [
      {
        id: 'bo_12_1',
        code: 'BO.1.1',
        titel: 'Basisbeweging en motoriek',
        beschrijving: 'De leerling ontwikkelt basisbeweging en motorische vaardigheden',
        subdoelen: [
          'Lopen, rennen, springen',
          'Balans en coördinatie',
          'Gooien en vangen',
          'Klimmen en klauteren',
          'Ritme en beweging'
        ],
        groep: 'groep1-2',
        vakgebied: 'bewegingsonderwijs',
        vervolgend: ['bo_34_1'],
        kernwoorden: ['motoriek', 'balans', 'coördinatie', 'ritme']
      }
    ],
    'groep3-4': [
      {
        id: 'bo_34_1',
        code: 'BO.2.1',
        titel: 'Sportvaardigheden',
        beschrijving: 'De leerling leert verschillende sportvaardigheden',
        subdoelen: [
          'Balsporten (voetbal, basketbal)',
          'Atletiek (hardlopen, springen)',
          'Turnen en gymnastiek',
          'Zwemmen (indien mogelijk)',
          'Spelregels begrijpen'
        ],
        groep: 'groep3-4',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bo_12_1'],
        vervolgend: ['bo_56_1'],
        kernwoorden: ['sport', 'atletiek', 'turnen', 'spelregels']
      }
    ],
    'groep5-6': [
      {
        id: 'bo_56_1',
        code: 'BO.3.1',
        titel: 'Teamsporten en samenwerking',
        beschrijving: 'De leerling leert teamsporten en samenwerking',
        subdoelen: [
          'Teamsporten spelen',
          'Samenwerken in teams',
          'Tactiek en strategie',
          'Fair play en sportiviteit',
          'Leiderschap in sport'
        ],
        groep: 'groep5-6',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bo_34_1'],
        vervolgend: ['bo_78_1'],
        kernwoorden: ['teamsporten', 'samenwerking', 'tactiek', 'fair play']
      }
    ],
    'groep7-8': [
      {
        id: 'bo_78_1',
        code: 'BO.4.1',
        titel: 'Gevorderde sport en conditie',
        beschrijving: 'De leerling ontwikkelt gevorderde sportvaardigheden en conditie',
        subdoelen: [
          'Complexe bewegingen',
          'Conditietraining',
          'Verschillende sporten',
          'Prestatie en verbetering',
          'Gezonde levensstijl'
        ],
        groep: 'groep7-8',
        vakgebied: 'bewegingsonderwijs',
        voorafgaand: ['bo_56_1'],
        kernwoorden: ['gevorderd', 'conditie', 'prestatie', 'gezondheid']
      }
    ]
  },
  expressie: {
    'groep1-2': [
      {
        id: 'ex_12_1',
        code: 'EX.1.1',
        titel: 'Creatieve expressie',
        beschrijving: 'De leerling ontwikkelt creatieve expressie door kunst en muziek',
        subdoelen: [
          'Tekenen en schilderen',
          'Knutselen en maken',
          'Zingen en muziek maken',
          'Bewegen op muziek',
          'Fantasie en creativiteit'
        ],
        groep: 'groep1-2',
        vakgebied: 'expressie',
        vervolgend: ['ex_34_1'],
        kernwoorden: ['creativiteit', 'kunst', 'muziek', 'fantasie']
      }
    ],
    'groep3-4': [
      {
        id: 'ex_34_1',
        code: 'EX.2.1',
        titel: 'Beeldende vorming',
        beschrijving: 'De leerling leert verschillende beeldende technieken',
        subdoelen: [
          'Verschillende materialen gebruiken',
          'Kleuren en vormen',
          'Ruimte en perspectief',
          'Kunstwerken bekijken',
          'Eigen werk presenteren'
        ],
        groep: 'groep3-4',
        vakgebied: 'expressie',
        voorafgaand: ['ex_12_1'],
        vervolgend: ['ex_56_1'],
        kernwoorden: ['beeldend', 'materialen', 'kleuren', 'perspectief']
      },
      {
        id: 'ex_34_2',
        code: 'EX.2.2',
        titel: 'Muzikale vorming',
        beschrijving: 'De leerling ontwikkelt muzikale vaardigheden',
        subdoelen: [
          'Liedjes zingen',
          'Ritme en maat',
          'Instrumenten bespelen',
          'Muziek luisteren',
          'Muziek en beweging'
        ],
        groep: 'groep3-4',
        vakgebied: 'expressie',
        vervolgend: ['ex_56_2'],
        kernwoorden: ['muziek', 'zingen', 'ritme', 'instrumenten']
      }
    ],
    'groep5-6': [
      {
        id: 'ex_56_1',
        code: 'EX.3.1',
        titel: 'Gevorderde beeldende kunst',
        beschrijving: 'De leerling ontwikkelt gevorderde beeldende vaardigheden',
        subdoelen: [
          'Verschillende kunststromingen',
          'Ontwerpen en plannen',
          '3D werken en beeldhouwen',
          'Digitale kunst',
          'Kunstkritiek'
        ],
        groep: 'groep5-6',
        vakgebied: 'expressie',
        voorafgaand: ['ex_34_1'],
        vervolgend: ['ex_78_1'],
        kernwoorden: ['gevorderd', 'kunststromingen', '3D', 'digitaal']
      },
      {
        id: 'ex_56_2',
        code: 'EX.3.2',
        titel: 'Gevorderde muziek',
        beschrijving: 'De leerling ontwikkelt gevorderde muzikale vaardigheden',
        subdoelen: [
          'Meerstemmig zingen',
          'Muzieknotatie lezen',
          'Ensemble spelen',
          'Componeren',
          'Muziekgeschiedenis'
        ],
        groep: 'groep5-6',
        vakgebied: 'expressie',
        voorafgaand: ['ex_34_2'],
        vervolgend: ['ex_78_2'],
        kernwoorden: ['meerstemmig', 'notatie', 'ensemble', 'componeren']
      }
    ],
    'groep7-8': [
      {
        id: 'ex_78_1',
        code: 'EX.4.1',
        titel: 'Kunst en cultuur',
        beschrijving: 'De leerling begrijpt kunst in culturele context',
        subdoelen: [
          'Kunstgeschiedenis',
          'Culturele diversiteit in kunst',
          'Eigen artistieke stijl',
          'Kunst en maatschappij',
          'Portfolio maken'
        ],
        groep: 'groep7-8',
        vakgebied: 'expressie',
        voorafgaand: ['ex_56_1'],
        kernwoorden: ['kunstgeschiedenis', 'cultuur', 'stijl', 'portfolio']
      },
      {
        id: 'ex_78_2',
        code: 'EX.4.2',
        titel: 'Muziek en performance',
        beschrijving: 'De leerling kan muziek uitvoeren en presenteren',
        subdoelen: [
          'Muziekuitvoeringen',
          'Improvisatie',
          'Muziekproductie',
          'Podiumvaardigheden',
          'Muziek en technologie'
        ],
        groep: 'groep7-8',
        vakgebied: 'expressie',
        voorafgaand: ['ex_56_2'],
        kernwoorden: ['uitvoering', 'improvisatie', 'productie', 'podium']
      }
    ]
  },
  ict: {
    'groep3-4': [
      {
        id: 'ict_34_1',
        code: 'ICT.2.1',
        titel: 'Digitale vaardigheden basis',
        beschrijving: 'De leerling leert basisvaardigheden met computers en tablets',
        subdoelen: [
          'Computer/tablet bedienen',
          'Typen en muisvaardigheden',
          'Eenvoudige programma\'s gebruiken',
          'Bestanden opslaan',
          'Internet veilig gebruiken'
        ],
        groep: 'groep3-4',
        vakgebied: 'ict',
        vervolgend: ['ict_56_1'],
        kernwoorden: ['computer', 'typen', 'programma', 'internet', 'veiligheid']
      }
    ],
    'groep5-6': [
      {
        id: 'ict_56_1',
        code: 'ICT.3.1',
        titel: 'Informatievaardigheden',
        beschrijving: 'De leerling leert informatie zoeken en verwerken',
        subdoelen: [
          'Informatie zoeken op internet',
          'Betrouwbare bronnen herkennen',
          'Informatie ordenen en verwerken',
          'Presentaties maken',
          'Samenwerken online'
        ],
        groep: 'groep5-6',
        vakgebied: 'ict',
        voorafgaand: ['ict_34_1'],
        vervolgend: ['ict_78_1'],
        kernwoorden: ['informatie', 'bronnen', 'presentatie', 'samenwerken']
      },
      {
        id: 'ict_56_2',
        code: 'ICT.3.2',
        titel: 'Digitaal creëren',
        beschrijving: 'De leerling leert digitale content creëren',
        subdoelen: [
          'Teksten schrijven en opmaken',
          'Afbeeldingen bewerken',
          'Video\'s maken',
          'Websites bouwen',
          'Apps gebruiken'
        ],
        groep: 'groep5-6',
        vakgebied: 'ict',
        vervolgend: ['ict_78_2'],
        kernwoorden: ['creëren', 'tekst', 'afbeelding', 'video', 'website']
      }
    ],
    'groep7-8': [
      {
        id: 'ict_78_1',
        code: 'ICT.4.1',
        titel: 'Computational thinking',
        beschrijving: 'De leerling leert computationeel denken en programmeren',
        subdoelen: [
          'Algoritmes begrijpen',
          'Programmeren met blokken',
          'Problemen ontleden',
          'Patronen herkennen',
          'Debugging en testen'
        ],
        groep: 'groep7-8',
        vakgebied: 'ict',
        voorafgaand: ['ict_56_1'],
        kernwoorden: ['algoritme', 'programmeren', 'problemen', 'patronen']
      },
      {
        id: 'ict_78_2',
        code: 'ICT.4.2',
        titel: 'Digitaal burgerschap',
        beschrijving: 'De leerling wordt een verantwoordelijke digitale burger',
        subdoelen: [
          'Privacy en veiligheid',
          'Digitale etiquette',
          'Auteursrecht begrijpen',
          'Fake news herkennen',
          'Digitale voetafdruk'
        ],
        groep: 'groep7-8',
        vakgebied: 'ict',
        voorafgaand: ['ict_56_2'],
        kernwoorden: ['privacy', 'etiquette', 'auteursrecht', 'fake news']
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