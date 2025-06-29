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
  // Bestaande werkvormen...
  {
    id: 'klassengesprek',
    naam: 'Klassengesprek',
    beschrijving: 'Gezamenlijke discussie met de hele klas',
    icon: '💬',
    categorie: 'Discussie',
    tijdsduur: '10-20 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
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
    geschiktVoor: ['groep5-6', 'groep7-8'],
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

  // NIEUWE WERKVORMEN
  {
    id: 'fishbowl',
    naam: 'Fishbowl Discussie',
    beschrijving: 'Kleine groep discussieert in het midden, anderen observeren en kunnen deelnemen',
    icon: '🐠',
    categorie: 'Discussie',
    tijdsduur: '20-30 minuten',
    groepsgrootte: '4-6 in centrum, rest observeert',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['burgerschap', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['onderzoekend_leren', 'coöperatief_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Stoelen in cirkel', 'Discussieonderwerp', 'Regels poster'],
    stappen: [
      'Zet stoelen in fishbowl opstelling',
      'Leg de regels uit',
      'Start discussie met kerngroep',
      'Anderen kunnen plaatsnemen',
      'Sluit af met reflectie'
    ],
    tips: [
      'Houd discussie gefocust',
      'Moedig wisselingen aan',
      'Zorg voor veilige sfeer',
      'Evalueer de kwaliteit van argumenten'
    ],
    differentiatie: [
      'Geef verschillende rollen',
      'Pas onderwerp aan op niveau',
      'Bied steekwoorden'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Discussievaardigheden', 'Luisteren', 'Argumenteren']
  },
  {
    id: 'world_cafe',
    naam: 'World Café',
    beschrijving: 'Leerlingen rouleren tussen tafels met verschillende gespreksonderwerpen',
    icon: '☕',
    categorie: 'Discussie',
    tijdsduur: '30-45 minuten',
    groepsgrootte: '4-6 per tafel',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['burgerschap', 'wereldoriëntatie', 'nederlands'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Tafels', 'Grote vellen papier', 'Stiften', 'Vragen per tafel'],
    stappen: [
      'Stel tafels in met verschillende vragen',
      'Verdeel leerlingen over tafels',
      'Eerste ronde discussie (10 min)',
      'Rouleer naar volgende tafel',
      'Herhaal 2-3 rondes',
      'Deel inzichten klassikaal'
    ],
    tips: [
      'Kies gerelateerde onderwerpen',
      'Zorg voor goede tafelgasteer',
      'Stimuleer voortbouwen op ideeën',
      'Maak visuele samenvattingen'
    ],
    differentiatie: [
      'Verschillende complexiteit per tafel',
      'Visuele ondersteuning',
      'Keuze in onderwerpen'
    ],
    energieniveau: 'Hoog',
    doel: ['Meerdere perspectieven', 'Netwerken', 'Ideeën genereren']
  },
  {
    id: 'speed_dating',
    naam: 'Speed Dating',
    beschrijving: 'Leerlingen wisselen snel van partner en bespreken verschillende onderwerpen',
    icon: '💨',
    categorie: 'Coöperatief',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Tweetallen',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'engels', 'burgerschap'],
    instructiemodellen: ['coöperatief_leren', 'spelend_leren'],
    voorbereiding: 'Laag',
    materialen: ['Timer', 'Vragenlijst', 'Stoelen in twee rijen'],
    stappen: [
      'Zet stoelen tegenover elkaar',
      'Geef elke ronde een vraag',
      'Start timer (2-3 minuten)',
      'Laat één rij doorschuiven',
      'Herhaal met nieuwe vraag',
      'Sluit af met reflectie'
    ],
    tips: [
      'Houd rondes kort',
      'Varieer in vraagtypen',
      'Zorg voor duidelijk signaal',
      'Maak het speels'
    ],
    differentiatie: [
      'Verschillende vragen per niveau',
      'Visuele ondersteuning',
      'Flexibele tijd per ronde'
    ],
    energieniveau: 'Hoog',
    doel: ['Kennismaking', 'Spreken', 'Sociale vaardigheden']
  },
  {
    id: 'silent_discussion',
    naam: 'Silent Discussion',
    beschrijving: 'Schriftelijke discussie zonder praten, leerlingen reageren op papier',
    icon: '🤫',
    categorie: 'Discussie',
    tijdsduur: '20-30 minuten',
    groepsgrootte: '4-6 per groep',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'burgerschap', 'wereldoriëntatie'],
    instructiemodellen: ['onderzoekend_leren', 'coöperatief_leren'],
    voorbereiding: 'Laag',
    materialen: ['Grote vellen papier', 'Verschillende kleuren stiften', 'Stellingen'],
    stappen: [
      'Hang stellingen op verschillende plekken',
      'Leerlingen schrijven reacties',
      'Reageren op elkaars reacties',
      'Rouleren naar volgende stelling',
      'Bespreken van opvallende reacties'
    ],
    tips: [
      'Kies prikkelende stellingen',
      'Moedig verschillende meningen aan',
      'Zorg voor respectvolle reacties',
      'Gebruik verschillende kleuren'
    ],
    differentiatie: [
      'Verschillende complexiteit stellingen',
      'Visuele ondersteuning',
      'Keuze in reactievorm'
    ],
    energieniveau: 'Laag',
    doel: ['Reflectie', 'Schriftelijke communicatie', 'Verschillende meningen']
  },

  // ENERGIZERS
  {
    id: 'energizer_brain_gym',
    naam: 'Brain Gym Oefeningen',
    beschrijving: 'Korte bewegingsoefeningen om de hersenen te activeren',
    icon: '🧠',
    categorie: 'Energizer',
    tijdsduur: '3-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
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
    id: 'energizer_human_knot',
    naam: 'Menselijke Knoop',
    beschrijving: 'Leerlingen vormen een knoop met hun handen en proberen deze op te lossen',
    icon: '🪢',
    categorie: 'Energizer',
    tijdsduur: '5-10 minuten',
    groepsgrootte: '6-12 leerlingen',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Ruimte om te bewegen'],
    stappen: [
      'Leerlingen staan in cirkel',
      'Iedereen pakt twee verschillende handen',
      'Probeer de knoop op te lossen zonder los te laten',
      'Werk samen om oplossing te vinden'
    ],
    tips: [
      'Zorg voor veilige omgeving',
      'Moedig samenwerking aan',
      'Help waar nodig',
      'Vier het succes'
    ],
    differentiatie: [
      'Kleinere groepen voor makkelijker',
      'Extra begeleiding',
      'Alternatieve vormen'
    ],
    energieniveau: 'Hoog',
    doel: ['Samenwerking', 'Probleemoplossing', 'Beweging']
  },
  {
    id: 'energizer_rhythm_clap',
    naam: 'Ritme Klappen',
    beschrijving: 'Gezamenlijk ritme klappen om energie en focus te verhogen',
    icon: '👏',
    categorie: 'Energizer',
    tijdsduur: '2-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
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
  },
  {
    id: 'energizer_statue_dance',
    naam: 'Standbeeld Dans',
    beschrijving: 'Dansen op muziek, bij stop muziek bevriezen als standbeeld',
    icon: '🕺',
    categorie: 'Energizer',
    tijdsduur: '5-8 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Muziek', 'Speaker'],
    stappen: [
      'Zet vrolijke muziek aan',
      'Leerlingen dansen vrij',
      'Stop muziek onverwacht',
      'Iedereen bevriest als standbeeld',
      'Herhaal meerdere keren'
    ],
    tips: [
      'Kies vrolijke muziek',
      'Varieer in stopmoment',
      'Complimenteer mooie standbeelden',
      'Houd het speels'
    ],
    differentiatie: [
      'Verschillende muziekstijlen',
      'Thematische standbeelden',
      'Laat leerlingen muziek kiezen'
    ],
    energieniveau: 'Hoog',
    doel: ['Beweging', 'Plezier', 'Luistervaardigheden']
  },
  {
    id: 'energizer_word_association',
    naam: 'Woordassociatie Cirkel',
    beschrijving: 'Snel woordassociaties maken in een cirkel',
    icon: '💭',
    categorie: 'Energizer',
    tijdsduur: '3-7 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Geen'],
    stappen: [
      'Leerlingen staan in cirkel',
      'Begin met een woord',
      'Volgende leerling zegt associatie',
      'Ga snel rond de cirkel',
      'Varieer in thema\'s'
    ],
    tips: [
      'Houd het tempo hoog',
      'Accepteer alle associaties',
      'Varieer in startwoorden',
      'Maak het thematisch'
    ],
    differentiatie: [
      'Verschillende thema\'s',
      'Visuele ondersteuning',
      'Langzamer tempo'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Creativiteit', 'Snelheid', 'Woordenschat']
  },
  {
    id: 'energizer_mirror_exercise',
    naam: 'Spiegeloefening',
    beschrijving: 'Leerlingen spiegelen elkaars bewegingen',
    icon: '🪞',
    categorie: 'Energizer',
    tijdsduur: '3-6 minuten',
    groepsgrootte: 'Tweetallen',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Ruimte om te bewegen'],
    stappen: [
      'Verdeel in tweetallen',
      'Één persoon is de spiegel',
      'Ander maakt langzame bewegingen',
      'Spiegel volgt exact na',
      'Wissel van rol'
    ],
    tips: [
      'Begin langzaam',
      'Moedig oogcontact aan',
      'Varieer in bewegingen',
      'Maak het speels'
    ],
    differentiatie: [
      'Verschillende bewegingstypen',
      'Zittende variant',
      'Groepsvariant'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Concentratie', 'Samenwerking', 'Lichaamsbewustzijn']
  },

  // BEWEGINGSWERKVORMEN
  {
    id: 'beweging_corners',
    naam: 'Vier Hoeken',
    beschrijving: 'Leerlingen kiezen een hoek op basis van hun mening of antwoord',
    icon: '📐',
    categorie: 'Beweging',
    tijdsduur: '10-15 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['burgerschap', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['onderzoekend_leren', 'coöperatief_leren'],
    voorbereiding: 'Laag',
    materialen: ['Hoekborden', 'Vragen/stellingen'],
    stappen: [
      'Label vier hoeken van het lokaal',
      'Stel een vraag met vier antwoordmogelijkheden',
      'Leerlingen lopen naar hun keuze',
      'Bespreek in hoekgroepen',
      'Deel argumenten klassikaal'
    ],
    tips: [
      'Kies duidelijke labels',
      'Zorg voor gelijkwaardige opties',
      'Moedig discussie aan',
      'Respecteer alle meningen'
    ],
    differentiatie: [
      'Verschillende complexiteit vragen',
      'Visuele ondersteuning',
      'Extra uitleg per hoek'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Mening uiten', 'Beweging', 'Discussie']
  },
  {
    id: 'beweging_human_timeline',
    naam: 'Menselijke Tijdlijn',
    beschrijving: 'Leerlingen vormen een tijdlijn met hun lichaam',
    icon: '📅',
    categorie: 'Beweging',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Gebeurteniskaarten', 'Tijdlijn markering'],
    stappen: [
      'Geef elke leerling een gebeurtenis',
      'Laat ze zich chronologisch opstellen',
      'Bespreek de volgorde',
      'Corrigeer waar nodig',
      'Loop de tijdlijn af'
    ],
    tips: [
      'Kies bekende gebeurtenissen',
      'Help bij moeilijke dateringen',
      'Maak het visueel',
      'Bespreek verbanden'
    ],
    differentiatie: [
      'Verschillende complexiteit gebeurtenissen',
      'Visuele ondersteuning',
      'Groepswerk mogelijk'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Chronologie', 'Samenwerking', 'Geschiedenis']
  },
  {
    id: 'beweging_gallery_walk_active',
    naam: 'Actieve Gallery Walk',
    beschrijving: 'Gallery walk met bewegingsopdrachten tussen stations',
    icon: '🚶‍♂️',
    categorie: 'Beweging',
    tijdsduur: '25-35 minuten',
    groepsgrootte: 'Kleine groepjes',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['stations_leren', 'coöperatief_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Stations', 'Bewegingsopdrachten', 'Timer'],
    stappen: [
      'Stel stations in met inhoud',
      'Voeg bewegingsopdracht toe tussen stations',
      'Groepen starten bij verschillende stations',
      'Na elke ronde: bewegingsopdracht',
      'Rouleren naar volgend station'
    ],
    tips: [
      'Varieer in bewegingen',
      'Houd rekening met ruimte',
      'Maak bewegingen thematisch',
      'Zorg voor veiligheid'
    ],
    differentiatie: [
      'Verschillende bewegingsintensiteit',
      'Alternatieve bewegingen',
      'Keuze in opdrachten'
    ],
    energieniveau: 'Hoog',
    doel: ['Beweging', 'Leren', 'Variatie']
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