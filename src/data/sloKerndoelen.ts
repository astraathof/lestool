// SLO Kerndoelen database voor het Primair Onderwijs
// Gebaseerd op de officiële SLO kerndoelen 2010

export interface SLODoel {
  id: string
  code: string
  titel: string
  beschrijving: string
  subdoelen: string[]
  kernwoorden: string[]
  groep: string
  vakgebied: string
  voorafgaand?: string[]
  vervolgend?: string[]
  jaarVerwachting?: string
  minimumNiveau?: string
  uitbreidingNiveau?: string
}

// Nederlands kerndoelen
const nederlandsDoelen = {
  groep1: [
    {
      id: 'nl_1_1',
      code: 'NL.1.1',
      titel: 'Luisteren naar verhalen',
      beschrijving: 'Leerlingen kunnen aandachtig luisteren naar voorgelezen verhalen',
      subdoelen: [
        'Kunnen stil zitten tijdens voorlezen',
        'Begrijpen eenvoudige verhaallijnen',
        'Kunnen vragen beantwoorden over het verhaal'
      ],
      kernwoorden: ['luisteren', 'verhalen', 'aandacht', 'begrip'],
      groep: 'groep1',
      vakgebied: 'nederlands',
      jaarVerwachting: 'Eind groep 1: 10-15 minuten aandachtig luisteren',
      minimumNiveau: 'Kan 5 minuten stil zitten en luisteren',
      uitbreidingNiveau: 'Kan details onthouden en verhaal navertellen',
      vervolgend: ['nl_2_1']
    },
    {
      id: 'nl_1_2',
      code: 'NL.1.2',
      titel: 'Spreken in kring',
      beschrijving: 'Leerlingen kunnen deelnemen aan kringgesprekken',
      subdoelen: [
        'Kunnen wachten op hun beurt',
        'Kunnen duidelijk spreken',
        'Kunnen luisteren naar anderen'
      ],
      kernwoorden: ['spreken', 'kring', 'luisteren', 'beurt'],
      groep: 'groep1',
      vakgebied: 'nederlands',
      jaarVerwachting: 'Eind groep 1: Actief deelnemen aan kringgesprekken',
      minimumNiveau: 'Kan wachten op beurt en kort antwoorden',
      uitbreidingNiveau: 'Kan eigen ervaringen delen en vragen stellen',
      vervolgend: ['nl_2_2']
    }
  ],
  groep2: [
    {
      id: 'nl_2_1',
      code: 'NL.2.1',
      titel: 'Eerste letters herkennen',
      beschrijving: 'Leerlingen herkennen letters en klanken',
      subdoelen: [
        'Kunnen letters benoemen',
        'Kunnen klanken koppelen aan letters',
        'Herkennen van eigen naam'
      ],
      kernwoorden: ['letters', 'klanken', 'herkennen', 'naam'],
      groep: 'groep2',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_1_1'],
      vervolgend: ['nl_3_1'],
      jaarVerwachting: 'Eind groep 2: Alle letters herkennen en benoemen',
      minimumNiveau: 'Herkent 15 letters en eigen naam',
      uitbreidingNiveau: 'Kan eenvoudige woorden "lezen" door letters te benoemen'
    },
    {
      id: 'nl_2_2',
      code: 'NL.2.2',
      titel: 'Woordenschat uitbreiden',
      beschrijving: 'Leerlingen breiden hun woordenschat uit',
      subdoelen: [
        'Kunnen nieuwe woorden leren',
        'Begrijpen van eenvoudige instructies',
        'Kunnen vragen stellen'
      ],
      kernwoorden: ['woordenschat', 'woorden', 'instructies', 'vragen'],
      groep: 'groep2',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_1_2'],
      vervolgend: ['nl_3_2'],
      jaarVerwachting: 'Eind groep 2: 500+ woorden actieve woordenschat',
      minimumNiveau: 'Begrijpt eenvoudige instructies en kan basiswoorden gebruiken',
      uitbreidingNiveau: 'Kan complexere zinnen maken en nieuwe woorden uitleggen'
    }
  ],
  groep3: [
    {
      id: 'nl_3_1',
      code: 'NL.3.1',
      titel: 'Technisch lezen AVI-start tot AVI 3',
      beschrijving: 'Leerlingen kunnen woorden en zinnen technisch lezen',
      subdoelen: [
        'Kunnen letters samenvoegen tot woorden',
        'Kunnen eenvoudige zinnen lezen',
        'Begrijpen wat ze lezen'
      ],
      kernwoorden: ['technisch lezen', 'woorden', 'zinnen', 'AVI'],
      groep: 'groep3',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_2_1'],
      vervolgend: ['nl_4_1'],
      jaarVerwachting: 'Eind groep 3: AVI 3 niveau bereiken',
      minimumNiveau: 'AVI start - eenvoudige woordjes lezen',
      uitbreidingNiveau: 'AVI 4 - vloeiend korte zinnen lezen'
    },
    {
      id: 'nl_3_2',
      code: 'NL.3.2',
      titel: 'Eerste schrijfvaardigheden',
      beschrijving: 'Leerlingen leren eerste woorden en zinnen schrijven',
      subdoelen: [
        'Kunnen letters schrijven',
        'Kunnen eenvoudige woorden schrijven',
        'Kunnen korte zinnen maken'
      ],
      kernwoorden: ['schrijven', 'letters', 'woorden', 'zinnen'],
      groep: 'groep3',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_2_2'],
      vervolgend: ['nl_4_2'],
      jaarVerwachting: 'Eind groep 3: Korte zinnen kunnen schrijven',
      minimumNiveau: 'Kan eigen naam en bekende woorden schrijven',
      uitbreidingNiveau: 'Kan verhaaljes van 3-4 zinnen schrijven'
    }
  ],
  groep4: [
    {
      id: 'nl_4_1',
      code: 'NL.4.1',
      titel: 'Technisch lezen AVI 4 tot AVI 6',
      beschrijving: 'Leerlingen kunnen vloeiend technisch lezen',
      subdoelen: [
        'Kunnen vloeiend lezen',
        'Begrijpen langere teksten',
        'Kunnen hardop voorlezen'
      ],
      kernwoorden: ['vloeiend lezen', 'teksten', 'voorlezen', 'AVI'],
      groep: 'groep4',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_3_1'],
      vervolgend: ['nl_5_1'],
      jaarVerwachting: 'Eind groep 4: AVI 6 niveau, vloeiend lezen',
      minimumNiveau: 'AVI 4 - korte teksten begrijpen',
      uitbreidingNiveau: 'AVI 7+ - complexere teksten met plezier lezen'
    },
    {
      id: 'nl_4_2',
      code: 'NL.4.2',
      titel: 'Spelling en schrijfvaardigheid',
      beschrijving: 'Leerlingen kunnen correct spellen en verhalen schrijven',
      subdoelen: [
        'Kunnen basisspelling toepassen',
        'Kunnen verhalen schrijven',
        'Gebruiken van leestekens'
      ],
      kernwoorden: ['spelling', 'schrijven', 'verhalen', 'leestekens'],
      groep: 'groep4',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_3_2'],
      vervolgend: ['nl_5_2'],
      jaarVerwachting: 'Eind groep 4: Verhalen van 1 pagina kunnen schrijven',
      minimumNiveau: 'Kan eenvoudige zinnen correct spellen',
      uitbreidingNiveau: 'Kan creatieve verhalen met dialoog schrijven'
    }
  ],
  groep5: [
    {
      id: 'nl_5_1',
      code: 'NL.5.1',
      titel: 'Begrijpend lezen informatieve teksten',
      beschrijving: 'Leerlingen kunnen informatieve teksten begrijpen',
      subdoelen: [
        'Kunnen hoofdgedachten herkennen',
        'Kunnen details vinden',
        'Kunnen conclusies trekken'
      ],
      kernwoorden: ['begrijpend lezen', 'informatief', 'hoofdgedachte', 'details'],
      groep: 'groep5',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_4_1'],
      vervolgend: ['nl_6_1'],
      jaarVerwachting: 'Eind groep 5: Schoolboeken zelfstandig kunnen lezen',
      minimumNiveau: 'Kan eenvoudige informatieve teksten begrijpen',
      uitbreidingNiveau: 'Kan complexe teksten analyseren en samenvatten'
    },
    {
      id: 'nl_5_2',
      code: 'NL.5.2',
      titel: 'Argumentatief schrijven basis',
      beschrijving: 'Leerlingen leren hun mening onderbouwen',
      subdoelen: [
        'Kunnen mening geven',
        'Kunnen redenen noemen',
        'Kunnen voorbeelden geven'
      ],
      kernwoorden: ['mening', 'argumenten', 'redenen', 'voorbeelden'],
      groep: 'groep5',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_4_2'],
      vervolgend: ['nl_6_2'],
      jaarVerwachting: 'Eind groep 5: Mening kunnen onderbouwen met 2-3 argumenten',
      minimumNiveau: 'Kan eigen mening uiten met 1 reden',
      uitbreidingNiveau: 'Kan overtuigende teksten schrijven met voorbeelden'
    }
  ],
  groep6: [
    {
      id: 'nl_6_1',
      code: 'NL.6.1',
      titel: 'Begrijpend lezen verhalen en gedichten',
      beschrijving: 'Leerlingen kunnen literaire teksten begrijpen',
      subdoelen: [
        'Kunnen verhaalstructuur herkennen',
        'Begrijpen van personages en motieven',
        'Kunnen eigen mening vormen'
      ],
      kernwoorden: ['verhalen', 'gedichten', 'personages', 'mening'],
      groep: 'groep6',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_5_1'],
      vervolgend: ['nl_7_1'],
      jaarVerwachting: 'Eind groep 6: Jeugdboeken zelfstandig lezen en begrijpen',
      minimumNiveau: 'Kan eenvoudige verhalen begrijpen en hoofdpersonen benoemen',
      uitbreidingNiveau: 'Kan thema\'s en boodschappen in verhalen herkennen'
    },
    {
      id: 'nl_6_2',
      code: 'NL.6.2',
      titel: 'Creatief en informatief schrijven',
      beschrijving: 'Leerlingen kunnen verschillende tekstsoorten schrijven',
      subdoelen: [
        'Kunnen verhalen schrijven',
        'Kunnen informatieve teksten maken',
        'Kunnen brieven schrijven'
      ],
      kernwoorden: ['creatief', 'informatief', 'tekstsoorten', 'brieven'],
      groep: 'groep6',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_5_2'],
      vervolgend: ['nl_7_2'],
      jaarVerwachting: 'Eind groep 6: Verschillende tekstsoorten kunnen schrijven',
      minimumNiveau: 'Kan eenvoudige verhalen en brieven schrijven',
      uitbreidingNiveau: 'Kan informatieve artikelen en creatieve verhalen schrijven'
    }
  ],
  groep7: [
    {
      id: 'nl_7_1',
      code: 'NL.7.1',
      titel: 'Kritisch lezen en analyseren',
      beschrijving: 'Leerlingen kunnen teksten kritisch lezen en analyseren',
      subdoelen: [
        'Kunnen bronnen beoordelen',
        'Kunnen impliciete informatie herkennen',
        'Kunnen verschillende perspectieven herkennen'
      ],
      kernwoorden: ['kritisch lezen', 'bronnen', 'analyse', 'perspectieven'],
      groep: 'groep7',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_6_1'],
      vervolgend: ['nl_8_1'],
      jaarVerwachting: 'Eind groep 7: Kan nieuwsartikelen en websites kritisch lezen',
      minimumNiveau: 'Kan betrouwbare van onbetrouwbare informatie onderscheiden',
      uitbreidingNiveau: 'Kan verschillende standpunten in teksten herkennen en vergelijken'
    },
    {
      id: 'nl_7_2',
      code: 'NL.7.2',
      titel: 'Gevorderd schrijven',
      beschrijving: 'Leerlingen kunnen complexere teksten schrijven',
      subdoelen: [
        'Kunnen verhaalstructuur toepassen',
        'Gebruiken van beschrijvende taal',
        'Kunnen dialogen schrijven'
      ],
      kernwoorden: ['schrijven', 'verhalen', 'creativiteit', 'dialoog'],
      groep: 'groep7',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_6_2'],
      vervolgend: ['nl_8_2'],
      jaarVerwachting: 'Eind groep 7: Kan verhalen van 2-3 pagina\'s schrijven',
      minimumNiveau: 'Kan verhalen met begin, midden en eind schrijven',
      uitbreidingNiveau: 'Kan spannende verhalen met dialoog en beschrijvingen schrijven'
    }
  ],
  groep8: [
    {
      id: 'nl_8_1',
      code: 'NL.8.1', 
      titel: 'Gevorderd kritisch lezen',
      beschrijving: 'Leerlingen kunnen complexe teksten kritisch analyseren',
      subdoelen: [
        'Kunnen auteursperspectief herkennen',
        'Kunnen impliciete boodschappen begrijpen',
        'Kunnen teksten vergelijken en evalueren'
      ],
      kernwoorden: ['kritisch', 'analyse', 'perspectief', 'evalueren'],
      groep: 'groep8',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_7_1'],
      jaarVerwachting: 'Eind groep 8: Klaar voor voortgezet onderwijs leesniveau',
      minimumNiveau: 'Kan schoolteksten begrijpen en samenvatten',
      uitbreidingNiveau: 'Kan complexe teksten analyseren en kritisch beoordelen'
    },
    {
      id: 'nl_8_2',
      code: 'NL.8.2',
      titel: 'Argumentatief schrijven',
      beschrijving: 'Leerlingen kunnen argumentatieve teksten schrijven',
      subdoelen: [
        'Kunnen argumenten formuleren',
        'Kunnen standpunten onderbouwen',
        'Gebruiken van overtuigende taal'
      ],
      kernwoorden: ['argumenteren', 'standpunt', 'overtuigen', 'onderbouwen'],
      groep: 'groep8',
      vakgebied: 'nederlands',
      voorafgaand: ['nl_7_2'],
      jaarVerwachting: 'Eind groep 8: Kan overtuigende teksten schrijven',
      minimumNiveau: 'Kan mening onderbouwen met 2-3 argumenten',
      uitbreidingNiveau: 'Kan complexe argumentatieve essays schrijven'
    }
  ]
}

// Rekenen kerndoelen
const rekenenDoelen = {
  groep1: [
    {
      id: 're_1_1',
      code: 'RE.1.1',
      titel: 'Tellen tot 10',
      beschrijving: 'Leerlingen kunnen tellen tot 10',
      subdoelen: [
        'Kunnen vooruit tellen tot 10',
        'Herkennen van getallen 1-10',
        'Begrijpen van hoeveelheden'
      ],
      kernwoorden: ['tellen', 'getallen', 'hoeveelheid', 'cijfers'],
      groep: 'groep1',
      vakgebied: 'rekenen',
      vervolgend: ['re_2_1'],
      jaarVerwachting: 'Eind groep 1: Kan tot 10 tellen en getallen herkennen',
      minimumNiveau: 'Kan tot 5 tellen en getallen 1-5 herkennen',
      uitbreidingNiveau: 'Kan tot 20 tellen en eenvoudige optellingen doen'
    }
  ],
  groep2: [
    {
      id: 're_2_1',
      code: 'RE.2.1',
      titel: 'Tellen tot 20',
      beschrijving: 'Leerlingen kunnen tellen tot 20',
      subdoelen: [
        'Kunnen vooruit en achteruit tellen',
        'Herkennen van getallen 1-20',
        'Eenvoudige optellingen'
      ],
      kernwoorden: ['tellen', 'getallen', 'optellen', 'cijfers'],
      groep: 'groep2',
      vakgebied: 'rekenen',
      voorafgaand: ['re_1_1'],
      vervolgend: ['re_3_1'],
      jaarVerwachting: 'Eind groep 2: Kan tot 20 tellen en eenvoudige sommen maken',
      minimumNiveau: 'Kan tot 10 vooruit en achteruit tellen',
      uitbreidingNiveau: 'Kan tot 100 tellen en sommen tot 10 maken'
    }
  ],
  groep3: [
    {
      id: 're_3_1',
      code: 'RE.3.1',
      titel: 'Optellen en aftrekken tot 20',
      beschrijving: 'Leerlingen kunnen optellen en aftrekken binnen het getal 20',
      subdoelen: [
        'Kunnen hoofdrekenen tot 20',
        'Begrijpen van plus en min',
        'Kunnen woordsommen oplossen'
      ],
      kernwoorden: ['optellen', 'aftrekken', 'hoofdrekenen', 'woordsommen'],
      groep: 'groep3',
      vakgebied: 'rekenen',
      voorafgaand: ['re_2_1'],
      vervolgend: ['re_4_1'],
      jaarVerwachting: 'Eind groep 3: Vlot hoofdrekenen tot 20',
      minimumNiveau: 'Kan sommen tot 10 maken',
      uitbreidingNiveau: 'Kan sommen tot 100 en eenvoudige woordsommen'
    }
  ],
  groep4: [
    {
      id: 're_4_1',
      code: 'RE.4.1',
      titel: 'Optellen en aftrekken tot 100',
      beschrijving: 'Leerlingen kunnen optellen en aftrekken binnen het getal 100',
      subdoelen: [
        'Kunnen hoofdrekenen tot 100',
        'Begrijpen van tientallen en eenheden',
        'Kunnen cijferend rekenen'
      ],
      kernwoorden: ['optellen', 'aftrekken', 'honderd', 'tientallen'],
      groep: 'groep4',
      vakgebied: 'rekenen',
      voorafgaand: ['re_3_1'],
      vervolgend: ['re_5_1'],
      jaarVerwachting: 'Eind groep 4: Vlot rekenen tot 100, tafels 1-5',
      minimumNiveau: 'Kan hoofdrekenen tot 20 en cijferend tot 100',
      uitbreidingNiveau: 'Kan alle tafels en rekenen tot 1000'
    }
  ],
  groep5: [
    {
      id: 're_5_1',
      code: 'RE.5.1',
      titel: 'Vermenigvuldigen en delen',
      beschrijving: 'Leerlingen kunnen vermenigvuldigen en delen',
      subdoelen: [
        'Kennen de tafels van vermenigvuldiging',
        'Kunnen delen met en zonder rest',
        'Begrijpen van verhoudingen'
      ],
      kernwoorden: ['vermenigvuldigen', 'delen', 'tafels', 'verhoudingen'],
      groep: 'groep5',
      vakgebied: 'rekenen',
      voorafgaand: ['re_4_1'],
      vervolgend: ['re_6_1'],
      jaarVerwachting: 'Eind groep 5: Alle tafels automatisch, delen tot 100',
      minimumNiveau: 'Kent tafels 1-5 en kan eenvoudig delen',
      uitbreidingNiveau: 'Kent alle tafels en kan complexe deelsommen'
    }
  ],
  groep6: [
    {
      id: 're_6_1',
      code: 'RE.6.1',
      titel: 'Breuken en kommagetallen',
      beschrijving: 'Leerlingen kunnen werken met breuken en kommagetallen',
      subdoelen: [
        'Begrijpen van breuken',
        'Kunnen kommagetallen lezen en schrijven',
        'Kunnen breuken vergelijken'
      ],
      kernwoorden: ['breuken', 'kommagetallen', 'vergelijken', 'decimalen'],
      groep: 'groep6',
      vakgebied: 'rekenen',
      voorafgaand: ['re_5_1'],
      vervolgend: ['re_7_1'],
      jaarVerwachting: 'Eind groep 6: Kan breuken en kommagetallen gebruiken',
      minimumNiveau: 'Begrijpt halve en kwart, kan kommagetallen lezen',
      uitbreidingNiveau: 'Kan breuken optellen en kommagetallen rekenen'
    }
  ],
  groep7: [
    {
      id: 're_7_1',
      code: 'RE.7.1',
      titel: 'Procenten en verhoudingen',
      beschrijving: 'Leerlingen kunnen werken met procenten en verhoudingen',
      subdoelen: [
        'Begrijpen van percentages',
        'Kunnen verhoudingen berekenen',
        'Toepassen in praktijksituaties'
      ],
      kernwoorden: ['procenten', 'verhoudingen', 'berekenen', 'praktijk'],
      groep: 'groep7',
      vakgebied: 'rekenen',
      voorafgaand: ['re_6_1'],
      vervolgend: ['re_8_1'],
      jaarVerwachting: 'Eind groep 7: Kan procenten en verhoudingen in praktijk toepassen',
      minimumNiveau: 'Begrijpt 50%, 25% en eenvoudige verhoudingen',
      uitbreidingNiveau: 'Kan complexe percentage berekeningen en schaalverhoudingen'
    }
  ],
  groep8: [
    {
      id: 're_8_1',
      code: 'RE.8.1',
      titel: 'Complexe berekeningen',
      beschrijving: 'Leerlingen kunnen complexe rekenkundige problemen oplossen',
      subdoelen: [
        'Kunnen meerstaps problemen oplossen',
        'Gebruiken van verschillende strategieën',
        'Kunnen resultaten controleren'
      ],
      kernwoorden: ['complex', 'meerstaps', 'strategieën', 'controleren'],
      groep: 'groep8',
      vakgebied: 'rekenen',
      voorafgaand: ['re_7_1'],
      jaarVerwachting: 'Eind groep 8: Klaar voor voortgezet onderwijs rekenvaardigheden',
      minimumNiveau: 'Kan alle basisbewerkingen en eenvoudige woordproblemen',
      uitbreidingNiveau: 'Kan complexe meerstappe problemen zelfstandig oplossen'
    }
  ]
}

// Wereldoriëntatie kerndoelen
const wereldorientatieDoelen = {
  groep1: [
    {
      id: 'wo_1_1',
      code: 'WO.1.1',
      titel: 'Ontdekken van de omgeving',
      beschrijving: 'Leerlingen ontdekken hun directe omgeving',
      subdoelen: [
        'Kunnen de school verkennen',
        'Herkennen van bekende plekken',
        'Begrijpen van veiligheidsregels'
      ],
      kernwoorden: ['omgeving', 'school', 'veiligheid', 'verkennen'],
      groep: 'groep1',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep2: [
    {
      id: 'wo_2_1',
      code: 'WO.2.1',
      titel: 'Seizoenen en weer',
      beschrijving: 'Leerlingen leren over seizoenen en weersverschijnselen',
      subdoelen: [
        'Kunnen seizoenen benoemen',
        'Herkennen van weertypes',
        'Begrijpen van kledingkeuzes'
      ],
      kernwoorden: ['seizoenen', 'weer', 'kleding', 'natuur'],
      groep: 'groep2',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep3: [
    {
      id: 'wo_3_1',
      code: 'WO.3.1',
      titel: 'Dieren en planten',
      beschrijving: 'Leerlingen leren over dieren en planten in hun omgeving',
      subdoelen: [
        'Kunnen dieren en planten benoemen',
        'Begrijpen van leefomgevingen',
        'Herkennen van verschillen en overeenkomsten'
      ],
      kernwoorden: ['dieren', 'planten', 'leefomgeving', 'natuur'],
      groep: 'groep3',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep4: [
    {
      id: 'wo_4_1',
      code: 'WO.4.1',
      titel: 'Nederland en de wereld',
      beschrijving: 'Leerlingen leren over Nederland en andere landen',
      subdoelen: [
        'Kunnen Nederland op de kaart aanwijzen',
        'Kennen belangrijke Nederlandse steden',
        'Begrijpen van cultuurverschillen'
      ],
      kernwoorden: ['Nederland', 'kaart', 'steden', 'cultuur'],
      groep: 'groep4',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep5: [
    {
      id: 'wo_5_1',
      code: 'WO.5.1',
      titel: 'Geschiedenis van Nederland',
      beschrijving: 'Leerlingen leren over de Nederlandse geschiedenis',
      subdoelen: [
        'Kennen belangrijke historische perioden',
        'Begrijpen van tijdlijnen',
        'Herkennen van historische voorwerpen'
      ],
      kernwoorden: ['geschiedenis', 'tijdlijn', 'perioden', 'voorwerpen'],
      groep: 'groep5',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep6: [
    {
      id: 'wo_6_1',
      code: 'WO.6.1',
      titel: 'Aardrijkskunde Europa',
      beschrijving: 'Leerlingen leren over Europa en de Europese Unie',
      subdoelen: [
        'Kunnen Europese landen benoemen',
        'Begrijpen van de Europese Unie',
        'Kennen hoofdsteden van Europa'
      ],
      kernwoorden: ['Europa', 'landen', 'hoofdsteden', 'EU'],
      groep: 'groep6',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep7: [
    {
      id: 'wo_7_1',
      code: 'WO.7.1',
      titel: 'Werelddelen en culturen',
      beschrijving: 'Leerlingen leren over verschillende werelddelen en culturen',
      subdoelen: [
        'Kunnen werelddelen benoemen',
        'Begrijpen van cultuurverschillen',
        'Kennen belangrijke landen en hoofdsteden'
      ],
      kernwoorden: ['werelddelen', 'culturen', 'landen', 'diversiteit'],
      groep: 'groep7',
      vakgebied: 'wereldoriëntatie'
    }
  ],
  groep8: [
    {
      id: 'wo_8_1',
      code: 'WO.8.1',
      titel: 'Maatschappelijke vraagstukken',
      beschrijving: 'Leerlingen kunnen maatschappelijke vraagstukken analyseren',
      subdoelen: [
        'Kunnen verschillende standpunten herkennen',
        'Begrijpen van oorzaak en gevolg',
        'Kunnen eigen mening vormen'
      ],
      kernwoorden: ['maatschappij', 'vraagstukken', 'standpunten', 'mening'],
      groep: 'groep8',
      vakgebied: 'wereldoriëntatie'
    }
  ]
}

// Burgerschap kerndoelen
const burgerschapDoelen = {
  groep3: [
    {
      id: 'bu_3_1',
      code: 'BU.3.1',
      titel: 'Klasregels en samenwerking',
      beschrijving: 'Leerlingen leren over regels en samenwerking in de klas',
      subdoelen: [
        'Kunnen klasregels naleven',
        'Begrijpen waarom regels belangrijk zijn',
        'Kunnen samenwerken met anderen'
      ],
      kernwoorden: ['regels', 'samenwerking', 'respect', 'klas'],
      groep: 'groep3',
      vakgebied: 'burgerschap'
    }
  ],
  groep4: [
    {
      id: 'bu_4_1',
      code: 'BU.4.1',
      titel: 'Democratie en meningsuiting',
      beschrijving: 'Leerlingen leren over democratie en het uiten van meningen',
      subdoelen: [
        'Begrijpen van stemmen en kiezen',
        'Kunnen eigen mening uiten',
        'Respecteren van andere meningen'
      ],
      kernwoorden: ['democratie', 'stemmen', 'mening', 'respect'],
      groep: 'groep4',
      vakgebied: 'burgerschap'
    }
  ],
  groep5: [
    {
      id: 'bu_5_1',
      code: 'BU.5.1',
      titel: 'Rechten en plichten',
      beschrijving: 'Leerlingen leren over rechten en plichten van kinderen',
      subdoelen: [
        'Kennen kinderrechten',
        'Begrijpen van eigen plichten',
        'Kunnen hulp zoeken bij problemen'
      ],
      kernwoorden: ['rechten', 'plichten', 'kinderen', 'hulp'],
      groep: 'groep5',
      vakgebied: 'burgerschap'
    }
  ],
  groep6: [
    {
      id: 'bu_6_1',
      code: 'BU.6.1',
      titel: 'Diversiteit en tolerantie',
      beschrijving: 'Leerlingen leren over diversiteit en tolerantie',
      subdoelen: [
        'Waarderen van verschillen',
        'Begrijpen van discriminatie',
        'Kunnen inclusief gedrag tonen'
      ],
      kernwoorden: ['diversiteit', 'tolerantie', 'discriminatie', 'inclusie'],
      groep: 'groep6',
      vakgebied: 'burgerschap'
    }
  ],
  groep7: [
    {
      id: 'bu_7_1',
      code: 'BU.7.1',
      titel: 'Maatschappelijke participatie',
      beschrijving: 'Leerlingen leren over participatie in de maatschappij',
      subdoelen: [
        'Begrijpen van maatschappelijke rollen',
        'Kunnen bijdragen aan de gemeenschap',
        'Ontwikkelen van burgerzin'
      ],
      kernwoorden: ['participatie', 'maatschappij', 'gemeenschap', 'burgerzin'],
      groep: 'groep7',
      vakgebied: 'burgerschap'
    }
  ],
  groep8: [
    {
      id: 'bu_8_1',
      code: 'BU.8.1',
      titel: 'Politiek en bestuur',
      beschrijving: 'Leerlingen leren over politiek en bestuur in Nederland',
      subdoelen: [
        'Begrijpen van democratische processen',
        'Kennen van Nederlandse politiek',
        'Kunnen kritisch nadenken over beleid'
      ],
      kernwoorden: ['politiek', 'bestuur', 'democratie', 'beleid'],
      groep: 'groep8',
      vakgebied: 'burgerschap'
    }
  ]
}

// Combineer alle doelen
export const sloKerndoelen = {
  nederlands: nederlandsDoelen,
  rekenen: rekenenDoelen,
  wereldoriëntatie: wereldorientatieDoelen,
  burgerschap: burgerschapDoelen,
  engels: {
    groep7: [
      {
        id: 'en_7_1',
        code: 'EN.7.1',
        titel: 'Luisteren naar Engels',
        beschrijving: 'Leerlingen kunnen eenvoudige Engelse teksten begrijpen',
        subdoelen: [
          'Kunnen eenvoudige instructies volgen',
          'Begrijpen van bekende woorden',
          'Herkennen van intonatie'
        ],
        kernwoorden: ['luisteren', 'instructies', 'woorden', 'intonatie'],
        groep: 'groep7',
        vakgebied: 'engels'
      }
    ],
    groep8: [
      {
        id: 'en_8_1',
        code: 'EN.8.1',
        titel: 'Spreken in het Engels',
        beschrijving: 'Leerlingen kunnen eenvoudige gesprekken voeren in het Engels',
        subdoelen: [
          'Kunnen zich voorstellen',
          'Kunnen eenvoudige vragen stellen',
          'Gebruiken van basiswoordenschat'
        ],
        kernwoorden: ['spreken', 'gesprekken', 'voorstellen', 'woordenschat'],
        groep: 'groep8',
        vakgebied: 'engels'
      }
    ]
  },
  bewegingsonderwijs: {
    groep1: [
      {
        id: 'be_1_1',
        code: 'BE.1.1',
        titel: 'Basisbewegingen',
        beschrijving: 'Leerlingen kunnen basisbewegingen uitvoeren',
        subdoelen: [
          'Kunnen lopen, rennen, springen',
          'Ontwikkelen van balans',
          'Kunnen eenvoudige spelletjes spelen'
        ],
        kernwoorden: ['bewegen', 'lopen', 'springen', 'balans'],
        groep: 'groep1',
        vakgebied: 'bewegingsonderwijs'
      }
    ]
  },
  expressie: {
    groep1: [
      {
        id: 'ex_1_1',
        code: 'EX.1.1',
        titel: 'Creatief uiten',
        beschrijving: 'Leerlingen kunnen zich creatief uiten',
        subdoelen: [
          'Kunnen tekenen en kleuren',
          'Kunnen zingen en bewegen op muziek',
          'Durven zich uit te drukken'
        ],
        kernwoorden: ['creativiteit', 'tekenen', 'zingen', 'uitdrukken'],
        groep: 'groep1',
        vakgebied: 'expressie'
      }
    ]
  },
  ict: {
    groep5: [
      {
        id: 'ic_5_1',
        code: 'IC.5.1',
        titel: 'Basisvaardigheden computer',
        beschrijving: 'Leerlingen kunnen basisvaardigheden op de computer toepassen',
        subdoelen: [
          'Kunnen inloggen en uitloggen',
          'Kunnen bestanden openen en opslaan',
          'Begrijpen van internetveiligheid'
        ],
        kernwoorden: ['computer', 'bestanden', 'internet', 'veiligheid'],
        groep: 'groep5',
        vakgebied: 'ict'
      }
    ]
  }
}

// Helper functies
export const getVoorafgaandeDoelen = (doelId: string): SLODoel[] => {
  const allDoelen = getAllDoelen()
  const huidigDoel = allDoelen.find(d => d.id === doelId)
  
  if (!huidigDoel?.voorafgaand) return []
  
  return allDoelen.filter(d => huidigDoel.voorafgaand?.includes(d.id))
}

export const getVervolgendeDoelen = (doelId: string): SLODoel[] => {
  const allDoelen = getAllDoelen()
  const huidigDoel = allDoelen.find(d => d.id === doelId)
  
  if (!huidigDoel?.vervolgend) return []
  
  return allDoelen.filter(d => huidigDoel.vervolgend?.includes(d.id))
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

export const getDoelenByGroep = (groep: string): SLODoel[] => {
  return getAllDoelen().filter(doel => doel.groep === groep)
}

export const getDoelenByVakgebied = (vakgebied: string): SLODoel[] => {
  return getAllDoelen().filter(doel => doel.vakgebied === vakgebied)
}