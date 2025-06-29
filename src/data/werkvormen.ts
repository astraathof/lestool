// Uitgebreide database van werkvormen en energizers voor het Primair Onderwijs

export interface Werkvorm {
  id: string
  naam: string
  beschrijving: string
  icon: string
  categorie: 'Discussie' | 'Coöperatief' | 'Zelfstandig' | 'Dramatisering' | 'ICT' | 'Presentatie' | 'Gamification' | 'Energizer' | 'Beweging'
  tijdsduur: string
  groepsgrootte: string
  geschiktVoor: string[]
  vakgebieden: string[]
  instructiemodellen: string[]
  voorbereiding: 'Laag' | 'Gemiddeld' | 'Hoog'
  materialen: string[]
  stappen: string[]
  tips: string[]
  differentiatie: string[]
  energieniveau: 'Laag' | 'Gemiddeld' | 'Hoog'
  doel: string[]
}

export const werkvormenDatabase: Werkvorm[] = [
  {
    id: 'klassengesprek',
    naam: 'Klassengesprek',
    beschrijving: 'Gezamenlijke discussie met de hele klas',
    icon: '💬',
    categorie: 'Discussie',
    tijdsduur: '10-20 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap'],
    instructiemodellen: ['directe_instructie', 'onderzoekend_leren'],
    voorbereiding: 'Laag',
    materialen: ['Geen specifieke materialen nodig'],
    stappen: [
      'Stel een duidelijke vraag of stelling',
      'Geef leerlingen denktijd',
      'Laat verschillende leerlingen reageren',
      'Vat samen en trek conclusies'
    ],
    tips: [
      'Gebruik de 3-seconden regel',
      'Betrek alle leerlingen',
      'Stel open vragen',
      'Bouw voort op antwoorden'
    ],
    differentiatie: [
      'Geef steekwoorden aan zwakkere leerlingen',
      'Laat sterke leerlingen doorvragen',
      'Gebruik visuele ondersteuning'
    ],
    energieniveau: 'Laag',
    doel: ['Discussie', 'Begrip checken', 'Meningen delen']
  },
  {
    id: 'denken_delen_uitwisselen',
    naam: 'Denken-Delen-Uitwisselen',
    beschrijving: 'Individueel nadenken, in tweetallen bespreken, dan klassikaal delen',
    icon: '🤔',
    categorie: 'Coöperatief',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Individueel → Tweetallen → Klas',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Laag',
    materialen: ['Werkblad of vraag', 'Timer'],
    stappen: [
      'Stel een vraag of probleem',
      'Leerlingen denken individueel na (2-3 min)',
      'Bespreking in tweetallen (5-10 min)',
      'Delen van inzichten met de klas'
    ],
    tips: [
      'Geef duidelijke tijdslimieten',
      'Wissel de tweetallen regelmatig',
      'Controleer of iedereen meedoet',
      'Vat de belangrijkste punten samen'
    ],
    differentiatie: [
      'Pas de complexiteit van vragen aan',
      'Koppel sterke aan zwakkere leerlingen',
      'Geef extra denktijd waar nodig'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Samenwerking', 'Dieper nadenken', 'Alle leerlingen betrekken']
  },
  {
    id: 'jigsaw',
    naam: 'Jigsaw Methode',
    beschrijving: 'Leerlingen worden expert in een deelonderwerp en onderwijzen elkaar',
    icon: '🧩',
    categorie: 'Coöperatief',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per groep',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'burgerschap'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende teksten/bronnen', 'Expertbladen', 'Evaluatieformulieren'],
    stappen: [
      'Verdeel de stof in deelonderwerpen',
      'Vorm thuisgroepen en expertgroepen',
      'Expertgroepen bestuderen hun onderwerp',
      'Experts keren terug naar thuisgroep',
      'Experts onderwijzen hun groepsgenoten',
      'Evaluatie en toetsing'
    ],
    tips: [
      'Zorg voor gelijkwaardige deelonderwerpen',
      'Geef duidelijke rollen en taken',
      'Monitor de expertgroepen',
      'Evalueer zowel proces als product'
    ],
    differentiatie: [
      'Pas de moeilijkheid van teksten aan',
      'Geef verschillende rollen binnen groepen',
      'Bied extra ondersteuning aan experts'
    ],
    energieniveau: 'Hoog',
    doel: ['Expertise ontwikkelen', 'Onderwijzen', 'Samenwerking']
  },
  {
    id: 'stations_leren',
    naam: 'Stations/Rouleren',
    beschrijving: 'Leerlingen werken in kleine groepen aan verschillende stations',
    icon: '🔄',
    categorie: 'Zelfstandig',
    tijdsduur: '30-60 minuten',
    groepsgrootte: '3-5 leerlingen per station',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'expressie', 'bewegingsonderwijs'],
    instructiemodellen: ['gepersonaliseerd_leren', 'spelend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende materialen per station', 'Instructiekaarten', 'Timer'],
    stappen: [
      'Stel verschillende stations in',
      'Leg de opdrachten per station uit',
      'Verdeel leerlingen over stations',
      'Laat groepen rouleren na afgesproken tijd',
      'Sluit af met reflectie'
    ],
    tips: [
      'Maak duidelijke instructies per station',
      'Zorg voor variatie in activiteiten',
      'Houd rekening met verschillende niveaus',
      'Plan voldoende tijd per station'
    ],
    differentiatie: [
      'Maak stations op verschillende niveaus',
      'Geef keuze in volgorde van stations',
      'Bied extra uitdaging of ondersteuning'
    ],
    energieniveau: 'Hoog',
    doel: ['Zelfstandig werken', 'Variatie', 'Differentiatie']
  },
  {
    id: 'rollenspel',
    naam: 'Rollenspel',
    beschrijving: 'Leerlingen spelen verschillende rollen om situaties na te bootsen',
    icon: '🎭',
    categorie: 'Dramatisering',
    tijdsduur: '20-45 minuten',
    groepsgrootte: 'Variabel',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'burgerschap', 'wereldoriëntatie', 'engels'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Rolkaarten', 'Eventueel kostuums/attributen', 'Scenario\'s'],
    stappen: [
      'Introduceer de situatie/het probleem',
      'Verdeel de rollen',
      'Geef voorbereidingstijd',
      'Voer het rollenspel uit',
      'Bespreek en reflecteer'
    ],
    tips: [
      'Kies herkenbare situaties',
      'Geef duidelijke rolbeschrijvingen',
      'Creëer een veilige sfeer',
      'Bespreek altijd na afloop'
    ],
    differentiatie: [
      'Pas rollen aan op persoonlijkheid',
      'Geef meer of minder complexe scenario\'s',
      'Laat leerlingen zelf rollen kiezen'
    ],
    energieniveau: 'Hoog',
    doel: ['Empathie', 'Communicatie', 'Perspectief nemen']
  },
  {
    id: 'webquest',
    naam: 'WebQuest',
    beschrijving: 'Gestructureerd internetonderzoek met duidelijke opdrachten',
    icon: '🌐',
    categorie: 'ICT',
    tijdsduur: '60-120 minuten',
    groepsgrootte: '2-4 leerlingen',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands'],
    instructiemodellen: ['onderzoekend_leren', 'projectonderwijs'],
    voorbereiding: 'Hoog',
    materialen: ['Computers/tablets', 'WebQuest template', 'Geselecteerde websites'],
    stappen: [
      'Introduceer het onderwerp en de vraag',
      'Leg de opdracht en criteria uit',
      'Laat leerlingen onderzoek doen',
      'Begeleid het proces',
      'Presentatie van resultaten',
      'Evaluatie'
    ],
    tips: [
      'Selecteer betrouwbare websites vooraf',
      'Geef duidelijke zoekstrategieën',
      'Monitor de voortgang',
      'Leer kritisch kijken naar bronnen'
    ],
    differentiatie: [
      'Geef verschillende onderzoeksvragen',
      'Varieer in complexiteit van bronnen',
      'Bied verschillende presentatievormen'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Onderzoeksvaardigheden', 'ICT-vaardigheden', 'Kritisch denken']
  },
  {
    id: 'gallery_walk',
    naam: 'Gallery Walk',
    beschrijving: 'Leerlingen lopen langs verschillende posters/werkstukken en geven feedback',
    icon: '🖼️',
    categorie: 'Presentatie',
    tijdsduur: '20-40 minuten',
    groepsgrootte: 'Individueel of kleine groepjes',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['expressie', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['coöperatief_leren', 'projectonderwijs'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Posters/werkstukken', 'Feedback formulieren', 'Stickers/markers'],
    stappen: [
      'Hang werkstukken/posters op',
      'Leg de opdracht uit',
      'Leerlingen lopen rond en bekijken werk',
      'Geven feedback of stemmen',
      'Bespreking van opvallende zaken'
    ],
    tips: [
      'Geef duidelijke feedback criteria',
      'Zorg voor rustige sfeer',
      'Varieer in feedback methoden',
      'Vier de diversiteit aan werk'
    ],
    differentiatie: [
      'Pas feedback formulieren aan',
      'Geef verschillende rollen',
      'Varieer in presentatievormen'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Feedback geven', 'Waardering', 'Reflectie']
  },
  {
    id: 'escape_room',
    naam: 'Escape Room',
    beschrijving: 'Gamified leeromgeving waar leerlingen puzzels oplossen om te "ontsnappen"',
    icon: '🔐',
    categorie: 'Gamification',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per team',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Puzzels/raadsels', 'Sloten/dozen', 'Hints', 'Timer', 'Decoratie'],
    stappen: [
      'Stel de escape room in',
      'Introduceer het verhaal/thema',
      'Teams beginnen met puzzels',
      'Geef hints waar nodig',
      'Vier het succes',
      'Reflecteer op het leerproces'
    ],
    tips: [
      'Test de escape room vooraf',
      'Zorg voor verschillende moeilijkheidsniveaus',
      'Houd de spanning erin',
      'Maak het verhaal boeiend'
    ],
    differentiatie: [
      'Geef teams verschillende puzzels',
      'Varieer in aantal hints',
      'Pas de tijdslimiet aan'
    ],
    energieniveau: 'Hoog',
    doel: ['Probleemoplossing', 'Samenwerking', 'Motivatie']
  },
  // Energizers
  {
    id: 'energizer_brain_gym',
    naam: 'Brain Gym Oefeningen',
    beschrijving: 'Korte bewegingsoefeningen om de hersenen te activeren',
    icon: '🧠',
    categorie: 'Energizer',
    tijdsduur: '3-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Geen'],
    stappen: [
      'Laat leerlingen opstaan',
      'Doe kruisbeweging oefeningen',
      'Voer ademhalingsoefeningen uit',
      'Sluit af met ontspanning'
    ],
    tips: [
      'Doe mee als leraar',
      'Houd het kort',
      'Varieer in oefeningen',
      'Maak het speels'
    ],
    differentiatie: [
      'Pas intensiteit aan',
      'Bied alternatieven voor beperkte mobiliteit',
      'Laat leerlingen leiden'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Concentratie verhogen', 'Energie opwekken', 'Ontspanning']
  },
  {
    id: 'energizer_rhythm_clap',
    naam: 'Ritme Klappen',
    beschrijving: 'Gezamenlijk ritme klappen om energie en focus te verhogen',
    icon: '👏',
    categorie: 'Energizer',
    tijdsduur: '2-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Geen'],
    stappen: [
      'Begin met eenvoudig ritme',
      'Laat klas meeklappen',
      'Varieer in tempo en complexiteit',
      'Sluit af met stilte'
    ],
    tips: [
      'Start eenvoudig',
      'Bouw geleidelijk op',
      'Maak oogcontact',
      'Houd het kort'
    ],
    differentiatie: [
      'Verschillende complexiteit',
      'Visuele ondersteuning',
      'Laat leerlingen leiden'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Concentratie', 'Groepsgevoel', 'Ritme']
  }
]

export const getWerkvormenByCategorie = (categorie: string): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => werkvorm.categorie === categorie)
}

export const getWerkvormenByGroep = (groep: string): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => werkvorm.geschiktVoor.includes(groep))
}

export const getWerkvormenByVakgebied = (vakgebied: string): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => werkvorm.vakgebieden.includes(vakgebied))
}

export const getEnergizersByNiveau = (energieNiveau: 'Laag' | 'Gemiddeld' | 'Hoog'): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => 
    werkvorm.categorie === 'Energizer' && werkvorm.energieniveau === energieNiveau
  )
}

export const getAllEnergizers = (): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => werkvorm.categorie === 'Energizer')
}