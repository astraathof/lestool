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