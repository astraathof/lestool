// Uitgebreide database van werkvormen en energizers voor het Primair Onderwijs
// Gebaseerd op bewezen effectieve didactische methoden

export interface Werkvorm {
  id: string
  naam: string
  beschrijving: string
  icon: string
  categorie: 'Discussie' | 'Coöperatief' | 'Zelfstandig' | 'Dramatisering' | 'ICT' | 'Presentatie' | 'Gamification' | 'Energizer' | 'Beweging' | 'Creatief' | 'Onderzoek'
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
  variaties: string[]
  evaluatie: string[]
  wetenschappelijkeBasis?: string
}

export const werkvormenDatabase: Werkvorm[] = [
  {
    id: 'klassengesprek',
    naam: 'Klassengesprek',
    beschrijving: 'Gezamenlijke discussie met de hele klas over een onderwerp of vraagstuk',
    icon: '💬',
    categorie: 'Discussie',
    tijdsduur: '10-20 minuten',
    groepsgrootte: 'Hele klas (15-30 leerlingen)',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap', 'expressie'],
    instructiemodellen: ['directe_instructie', 'onderzoekend_leren', 'coöperatief_leren'],
    voorbereiding: 'Laag',
    materialen: ['Geen specifieke materialen nodig', 'Eventueel flipchart voor notities'],
    stappen: [
      'Stel een duidelijke, open vraag of stelling',
      'Geef leerlingen 30 seconden denktijd',
      'Laat verschillende leerlingen reageren',
      'Bouw voort op antwoorden en verbind ideeën',
      'Vat samen en trek conclusies samen met de klas'
    ],
    tips: [
      'Gebruik de 3-seconden regel na het stellen van vragen',
      'Betrek alle leerlingen door namen te noemen',
      'Stel open vragen die tot discussie uitnodigen',
      'Bouw voort op antwoorden: "Wat denk jij daarvan?"',
      'Gebruik non-verbale signalen om participatie aan te moedigen'
    ],
    differentiatie: [
      'Geef steekwoorden aan zwakkere leerlingen',
      'Laat sterke leerlingen doorvragen stellen',
      'Gebruik visuele ondersteuning voor begrip',
      'Varieer in vraagtypen: feitelijk, analytisch, evaluatief'
    ],
    energieniveau: 'Laag',
    doel: ['Discussie stimuleren', 'Begrip checken', 'Meningen delen', 'Kritisch denken ontwikkelen'],
    variaties: [
      'Fishbowl discussie met inner en outer circle',
      'Debat met voor- en tegenstanders',
      'Socratische dialoog met doorvragen',
      'Wereldcafé met roulerende gesprekken'
    ],
    evaluatie: [
      'Observeer participatie van leerlingen',
      'Let op kwaliteit van argumenten',
      'Check begrip door samenvattingen',
      'Vraag reflectie op het gesprek'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op dialogisch leren en Socratische methode'
  },
  {
    id: 'denken_delen_uitwisselen',
    naam: 'Denken-Delen-Uitwisselen',
    beschrijving: 'Individueel nadenken, in tweetallen bespreken, dan klassikaal delen van inzichten',
    icon: '🤔',
    categorie: 'Coöperatief',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Individueel → Tweetallen → Hele klas',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie', 'burgerschap'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren', 'directe_instructie'],
    voorbereiding: 'Laag',
    materialen: ['Werkblad of vragenlijst', 'Timer', 'Eventueel notitieblokjes'],
    stappen: [
      'Stel een duidelijke vraag of probleem (1 min)',
      'Leerlingen denken individueel na en maken notities (3-5 min)',
      'Bespreking in tweetallen, delen van ideeën (5-10 min)',
      'Tweetallen delen hun beste inzichten met de klas (5-8 min)',
      'Leraar vat samen en verbindt ideeën (2-3 min)'
    ],
    tips: [
      'Geef duidelijke tijdslimieten en houd deze aan',
      'Wissel de tweetallen regelmatig voor variatie',
      'Controleer of iedereen meedoet tijdens alle fases',
      'Vat de belangrijkste punten samen op het bord',
      'Gebruik een timer die voor iedereen zichtbaar is'
    ],
    differentiatie: [
      'Pas de complexiteit van vragen aan per niveau',
      'Koppel strategisch sterke aan zwakkere leerlingen',
      'Geef extra denktijd aan leerlingen die dit nodig hebben',
      'Bied verschillende manieren om ideeën te delen (tekenen, schrijven, spreken)'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Samenwerking bevorderen', 'Dieper nadenken stimuleren', 'Alle leerlingen betrekken', 'Verschillende perspectieven horen'],
    variaties: [
      'Vier hoeken: leerlingen kiezen fysiek een standpunt',
      'Snowball: van individueel naar groepjes van 4, dan 8',
      'Gallery walk: ideeën ophangen en rondlopen',
      'Speed dating: snel wisselen van gesprekspartners'
    ],
    evaluatie: [
      'Observeer kwaliteit van discussies in tweetallen',
      'Let op participatie tijdens klassikale fase',
      'Vraag leerlingen te reflecteren op wat ze geleerd hebben',
      'Check begrip door samenvattingen te laten maken'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op coöperatief leren principes van Johnson & Johnson'
  },
  {
    id: 'jigsaw',
    naam: 'Jigsaw Methode',
    beschrijving: 'Leerlingen worden expert in een deelonderwerp en onderwijzen vervolgens hun groepsgenoten',
    icon: '🧩',
    categorie: 'Coöperatief',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per thuisgroep',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'burgerschap', 'rekenen'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende teksten/bronnen per onderwerp', 'Expertbladen met vragen', 'Evaluatieformulieren', 'Presentatiematerialen'],
    stappen: [
      'Verdeel de stof in 4-6 gelijkwaardige deelonderwerpen',
      'Vorm thuisgroepen en wijs elk lid een expert-onderwerp toe',
      'Expertgroepen bestuderen hun onderwerp grondig (20-30 min)',
      'Experts keren terug naar hun thuisgroep',
      'Elke expert onderwijst zijn/haar groepsgenoten (15-20 min)',
      'Evaluatie en toetsing van alle onderwerpen'
    ],
    tips: [
      'Zorg voor gelijkwaardige en even moeilijke deelonderwerpen',
      'Geef duidelijke rollen en taken aan elke expert',
      'Monitor de expertgroepen en ondersteun waar nodig',
      'Evalueer zowel het proces als het eindresultaat',
      'Geef experts tijd om hun presentatie voor te bereiden'
    ],
    differentiatie: [
      'Pas de moeilijkheid van teksten aan per niveau',
      'Geef verschillende rollen binnen expertgroepen',
      'Bied extra ondersteuning aan beginnende experts',
      'Laat sterke leerlingen complexere verbanden leggen'
    ],
    energieniveau: 'Hoog',
    doel: ['Expertise ontwikkelen', 'Onderwijsvaardigheden', 'Samenwerking', 'Verantwoordelijkheid nemen'],
    variaties: [
      'Jigsaw II: met basismateriaal voor iedereen',
      'Online Jigsaw: met digitale bronnen en tools',
      'Reverse Jigsaw: experts bezoeken andere groepen',
      'Mini-Jigsaw: kortere versie van 20-30 minuten'
    ],
    evaluatie: [
      'Toets alle deelonderwerpen individueel',
      'Laat groepen elkaar beoordelen op presentaties',
      'Vraag reflectie op het leerproces',
      'Observeer de kwaliteit van uitleg door experts'
    ],
    wetenschappelijkeBasis: 'Ontwikkeld door Elliot Aronson, gebaseerd op interdependentie theorie'
  },
  {
    id: 'stations_leren',
    naam: 'Stations/Rouleren',
    beschrijving: 'Leerlingen werken in kleine groepen aan verschillende stations met gevarieerde activiteiten',
    icon: '🔄',
    categorie: 'Zelfstandig',
    tijdsduur: '30-60 minuten',
    groepsgrootte: '3-5 leerlingen per station',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'expressie', 'bewegingsonderwijs', 'wereldoriëntatie'],
    instructiemodellen: ['gepersonaliseerd_leren', 'spelend_leren', 'directe_instructie'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende materialen per station', 'Duidelijke instructiekaarten', 'Timer', 'Registratieformulieren', 'Antwoordenbladen'],
    stappen: [
      'Stel 4-8 verschillende stations in met gevarieerde activiteiten',
      'Leg alle opdrachten en regels duidelijk uit',
      'Verdeel leerlingen in groepen over de stations',
      'Laat groepen rouleren na afgesproken tijd (8-15 min per station)',
      'Sluit af met reflectie op activiteiten en geleerde vaardigheden'
    ],
    tips: [
      'Maak duidelijke, visuele instructies per station',
      'Zorg voor variatie in activiteiten en moeilijkheidsgraden',
      'Houd rekening met verschillende leerstijlen',
      'Plan voldoende tijd per station voor alle leerlingen',
      'Zorg voor rustige en actieve stations afgewisseld'
    ],
    differentiatie: [
      'Maak stations op verschillende niveaus',
      'Geef leerlingen keuze in volgorde van stations',
      'Bied extra uitdaging of ondersteuning per station',
      'Pas de tijd per station aan per groep'
    ],
    energieniveau: 'Hoog',
    doel: ['Zelfstandig werken', 'Variatie in activiteiten', 'Differentiatie', 'Zelfregulatie'],
    variaties: [
      'Digitale stations met tablets/computers',
      'Outdoor stations in de buitenruimte',
      'Thematische stations rond één onderwerp',
      'Keuze-stations waar leerlingen zelf kiezen'
    ],
    evaluatie: [
      'Controleer producten van elk station',
      'Observeer werkhouding en samenwerking',
      'Laat leerlingen reflecteren op favoriete stations',
      'Gebruik zelfassessment formulieren'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op multiple intelligence theorie en differentiatie principes'
  },
  {
    id: 'rollenspel',
    naam: 'Rollenspel',
    beschrijving: 'Leerlingen spelen verschillende rollen om situaties na te bootsen en te ervaren',
    icon: '🎭',
    categorie: 'Dramatisering',
    tijdsduur: '20-45 minuten',
    groepsgrootte: 'Variabel (2-8 spelers, rest publiek)',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'burgerschap', 'wereldoriëntatie', 'engels', 'expressie'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Rolkaarten met karakterbeschrijvingen', 'Eventueel kostuums/attributen', 'Scenario\'s en situatiebeschrijvingen', 'Observatieformulieren'],
    stappen: [
      'Introduceer de situatie en het probleem helder',
      'Verdeel de rollen en geef voorbereidingstijd',
      'Laat spelers zich inleven in hun karakter',
      'Voer het rollenspel uit voor de klas',
      'Bespreek en reflecteer op het proces en de uitkomst'
    ],
    tips: [
      'Kies herkenbare en relevante situaties',
      'Geef duidelijke maar niet te gedetailleerde rolbeschrijvingen',
      'Creëer een veilige sfeer waar experimenteren mag',
      'Bespreek altijd na afloop wat er gebeurd is',
      'Laat verschillende leerlingen dezelfde situatie spelen'
    ],
    differentiatie: [
      'Pas rollen aan op persoonlijkheid en vaardigheden',
      'Geef meer of minder complexe scenario\'s',
      'Laat leerlingen zelf rollen kiezen of toewijzen',
      'Varieer in groepsgrootte en complexiteit'
    ],
    energieniveau: 'Hoog',
    doel: ['Empathie ontwikkelen', 'Communicatievaardigheden', 'Perspectief nemen', 'Sociale vaardigheden'],
    variaties: [
      'Forum theater: publiek kan ingrijpen',
      'Freeze dance: stoppen en reflecteren',
      'Role reversal: rollen omdraaien',
      'Silent roleplay: zonder woorden'
    ],
    evaluatie: [
      'Observeer communicatie en inleving',
      'Vraag reflectie van spelers en publiek',
      'Bespreek alternatieve oplossingen',
      'Let op ontwikkeling van sociale vaardigheden'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op experiential learning en drama-educatie onderzoek'
  },
  {
    id: 'webquest',
    naam: 'WebQuest',
    beschrijving: 'Gestructureerd internetonderzoek met duidelijke opdrachten en betrouwbare bronnen',
    icon: '🌐',
    categorie: 'ICT',
    tijdsduur: '60-120 minuten (meerdere lessen)',
    groepsgrootte: '2-4 leerlingen per team',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands', 'burgerschap'],
    instructiemodellen: ['onderzoekend_leren', 'projectonderwijs', 'coöperatief_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Computers/tablets met internet', 'WebQuest template', 'Geselecteerde websites', 'Evaluatierubrics', 'Presentatiematerialen'],
    stappen: [
      'Introduceer het onderwerp en de centrale vraag',
      'Leg de opdracht en beoordelingscriteria uit',
      'Laat teams onderzoek doen met voorgeselecteerde bronnen',
      'Begeleid het proces en help bij problemen',
      'Teams presenteren hun bevindingen aan de klas',
      'Evalueer zowel proces als eindproduct'
    ],
    tips: [
      'Selecteer betrouwbare en begrijpelijke websites vooraf',
      'Geef duidelijke zoekstrategieën en tips',
      'Monitor de voortgang en bied hulp bij technische problemen',
      'Leer leerlingen kritisch kijken naar bronnen',
      'Zorg voor een duidelijke tijdsplanning'
    ],
    differentiatie: [
      'Geef verschillende onderzoeksvragen per niveau',
      'Varieer in complexiteit van bronnen en websites',
      'Bied verschillende presentatievormen aan',
      'Pas de hoeveelheid begeleiding aan per team'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Onderzoeksvaardigheden', 'ICT-vaardigheden', 'Kritisch denken', 'Informatievaardigheden'],
    variaties: [
      'Mini-WebQuest: kortere versie van 30-45 minuten',
      'Collaborative WebQuest: teams werken samen',
      'Mystery WebQuest: oplossen van een mysterie',
      'Design WebQuest: ontwerpen van een product'
    ],
    evaluatie: [
      'Beoordeel eindproducten met rubrics',
      'Observeer onderzoeksproces en samenwerking',
      'Laat teams elkaar beoordelen',
      'Vraag reflectie op geleerde vaardigheden'
    ],
    wetenschappelijkeBasis: 'Ontwikkeld door Bernie Dodge, gebaseerd op constructivistisch leren'
  },
  {
    id: 'gallery_walk',
    naam: 'Gallery Walk',
    beschrijving: 'Leerlingen lopen langs verschillende posters/werkstukken en geven feedback of stemmen',
    icon: '🖼️',
    categorie: 'Presentatie',
    tijdsduur: '20-40 minuten',
    groepsgrootte: 'Individueel of kleine groepjes',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['expressie', 'nederlands', 'wereldoriëntatie', 'rekenen'],
    instructiemodellen: ['coöperatief_leren', 'projectonderwijs', 'gepersonaliseerd_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Posters/werkstukken', 'Feedback formulieren', 'Stickers/markers', 'Clipboards', 'Evaluatieformulieren'],
    stappen: [
      'Hang alle werkstukken/posters zichtbaar op',
      'Leg de opdracht en feedback criteria uit',
      'Leerlingen lopen rustig rond en bekijken alle werk',
      'Geven feedback volgens afgesproken methode',
      'Bespreking van opvallende zaken en patronen'
    ],
    tips: [
      'Geef duidelijke feedback criteria vooraf',
      'Zorg voor een rustige, respectvolle sfeer',
      'Varieer in feedback methoden (stickers, post-its, formulieren)',
      'Vier de diversiteit aan werk en ideeën',
      'Laat makers trots zijn op hun werk'
    ],
    differentiatie: [
      'Pas feedback formulieren aan per niveau',
      'Geef verschillende rollen (observator, feedback gever)',
      'Varieer in presentatievormen en complexiteit',
      'Bied keuze in feedback methoden'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Feedback geven en ontvangen', 'Waardering tonen', 'Reflectie stimuleren', 'Inspiratie opdoen'],
    variaties: [
      'Silent gallery: zonder praten rondlopen',
      'Speed gallery: korte tijd per werk',
      'Themed gallery: rond specifiek thema',
      'Digital gallery: online presentatie'
    ],
    evaluatie: [
      'Analyseer feedback patronen',
      'Vraag reflectie van makers op ontvangen feedback',
      'Observeer kwaliteit van feedback',
      'Bespreek geleerde lessen'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op peer assessment en formative evaluation principes'
  },
  {
    id: 'escape_room',
    naam: 'Escape Room',
    beschrijving: 'Gamified leeromgeving waar leerlingen puzzels oplossen om te "ontsnappen" of een doel te bereiken',
    icon: '🔐',
    categorie: 'Gamification',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per team',
    geschiktVoor: ['groep5', 'groep6', 'groep7', 'groep8', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'wereldoriëntatie', 'ict'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Puzzels/raadsels', 'Sloten/dozen', 'Hints en aanwijzingen', 'Timer', 'Decoratie en props', 'Antwoordenbladen'],
    stappen: [
      'Stel de escape room in met verschillende puzzelstations',
      'Introduceer het verhaal/thema en de missie',
      'Teams beginnen met de eerste puzzels',
      'Geef hints waar nodig maar laat teams zelf ontdekken',
      'Vier het succes en bespreek de oplossingen',
      'Reflecteer op het leerproces en de samenwerking'
    ],
    tips: [
      'Test de escape room vooraf met collega\'s',
      'Zorg voor verschillende moeilijkheidsniveaus',
      'Houd de spanning erin met tijd en verhaal',
      'Maak het verhaal boeiend en relevant',
      'Bereid hints voor op verschillende niveaus'
    ],
    differentiatie: [
      'Geef teams verschillende puzzels of routes',
      'Varieer in aantal hints per team',
      'Pas de tijdslimiet aan per groep',
      'Bied verschillende rollen binnen teams'
    ],
    energieniveau: 'Hoog',
    doel: ['Probleemoplossing', 'Samenwerking', 'Motivatie verhogen', 'Kritisch denken'],
    variaties: [
      'Digital escape room: online puzzels',
      'Outdoor escape: in de buitenruimte',
      'Mini escape: 20-30 minuten versie',
      'Subject escape: specifiek voor één vak'
    ],
    evaluatie: [
      'Observeer probleemoplossingsstrategieën',
      'Vraag reflectie op samenwerking',
      'Bespreek geleerde concepten',
      'Evalueer motivatie en betrokkenheid'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op game-based learning en flow theory'
  },
  // Energizers en Bewegingswerkvormen
  {
    id: 'energizer_brain_gym',
    naam: 'Brain Gym Oefeningen',
    beschrijving: 'Korte bewegingsoefeningen om de hersenen te activeren en concentratie te verhogen',
    icon: '🧠',
    categorie: 'Energizer',
    tijdsduur: '3-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Geen specifieke materialen'],
    stappen: [
      'Laat alle leerlingen opstaan naast hun tafel',
      'Doe kruisbeweging oefeningen (links-rechts coördinatie)',
      'Voer ademhalingsoefeningen uit voor ontspanning',
      'Sluit af met korte ontspannings- of stretchoefening'
    ],
    tips: [
      'Doe zelf enthousiast mee als voorbeeld',
      'Houd de oefeningen kort en krachtig',
      'Varieer in oefeningen om verveling te voorkomen',
      'Maak het speels en niet te serieus',
      'Let op leerlingen met fysieke beperkingen'
    ],
    differentiatie: [
      'Pas intensiteit aan per leerling',
      'Bied alternatieven voor leerlingen met beperkte mobiliteit',
      'Laat gevorderde leerlingen de oefeningen leiden',
      'Varieer in complexiteit van bewegingen'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Concentratie verhogen', 'Energie opwekken', 'Ontspanning', 'Hersenen activeren'],
    variaties: [
      'Cross crawl: kruisende arm-been bewegingen',
      'Lazy 8: oneindigheids-bewegingen in de lucht',
      'Hook-ups: ontspanningsoefening zittend',
      'Brain buttons: drukpunten masseren'
    ],
    evaluatie: [
      'Observeer energie niveau na oefeningen',
      'Vraag leerlingen hoe ze zich voelen',
      'Let op concentratie in volgende activiteit',
      'Monitor participatie en enthousiasme'
    ],
    wetenschappelijkeBasis: 'Gebaseerd op Educational Kinesiology van Paul Dennison'
  },
  {
    id: 'energizer_rhythm_clap',
    naam: 'Ritme Klappen',
    beschrijving: 'Gezamenlijk ritme klappen om energie en groepsgevoel te verhogen',
    icon: '👏',
    categorie: 'Energizer',
    tijdsduur: '2-5 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['alle vakken', 'expressie'],
    instructiemodellen: ['alle modellen'],
    voorbereiding: 'Laag',
    materialen: ['Geen materialen nodig'],
    stappen: [
      'Begin met een eenvoudig ritme (bijv. klap-klap-pauze)',
      'Laat de hele klas het ritme meeklappen',
      'Varieer geleidelijk in tempo en complexiteit',
      'Sluit af met een moment van stilte'
    ],
    tips: [
      'Start altijd eenvoudig en bouw langzaam op',
      'Maak oogcontact met leerlingen',
      'Houd het kort om concentratie vast te houden',
      'Gebruik hand- en lichaamssignalen',
      'Laat leerlingen ook ritmes voorstellen'
    ],
    differentiatie: [
      'Verschillende complexiteit voor verschillende groepen',
      'Visuele ondersteuning voor leerlingen die dit nodig hebben',
      'Laat muzikale leerlingen het ritme leiden',
      'Bied alternatieven voor leerlingen met gehoorproblemen'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Concentratie verbeteren', 'Groepsgevoel versterken', 'Ritmegevoel ontwikkelen', 'Energie reguleren'],
    variaties: [
      'Body percussion: met verschillende lichaamsdelen',
      'Echo clapping: leraar klapt, klas herhaalt',
      'Cumulative clapping: steeds meer erbij',
      'Silent clapping: alleen bewegingen zonder geluid'
    ],
    evaluatie: [
      'Observeer synchronisatie van de groep',
      'Let op participatie van alle leerlingen',
      'Vraag feedback over het effect',
      'Monitor groepssfeer na de activiteit'
    ]
  },
  {
    id: 'energizer_simon_says',
    naam: 'Simon Says (Bewegingsspel)',
    beschrijving: 'Klassiek bewegingsspel dat luistervaardigheden en reactiesnelheid traint',
    icon: '🏃',
    categorie: 'Energizer',
    tijdsduur: '5-10 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['bewegingsonderwijs', 'engels', 'nederlands'],
    instructiemodellen: ['spelend_leren', 'directe_instructie'],
    voorbereiding: 'Laag',
    materialen: ['Ruimte om te bewegen'],
    stappen: [
      'Leg de spelregels uit: alleen doen als "Simon says" ervoor staat',
      'Begin met eenvoudige commando\'s',
      'Varieer in snelheid en complexiteit',
      'Laat leerlingen die "uit" zijn als scheidsrechter fungeren',
      'Wissel van leider voor variatie'
    ],
    tips: [
      'Houd het tempo hoog voor meer uitdaging',
      'Gebruik commando\'s die aansluiten bij lesstof',
      'Maak het niet te competitief',
      'Laat leerlingen ook leider zijn',
      'Varieer in soorten bewegingen'
    ],
    differentiatie: [
      'Pas complexiteit van commando\'s aan',
      'Gebruik verschillende talen (Engels, Nederlands)',
      'Geef visuele ondersteuning bij commando\'s',
      'Laat leerlingen eigen commando\'s bedenken'
    ],
    energieniveau: 'Hoog',
    doel: ['Luistervaardigheden', 'Reactiesnelheid', 'Concentratie', 'Beweging'],
    variaties: [
      'Subject Simon: met vakspecifieke commando\'s',
      'Multilingual Simon: in verschillende talen',
      'Reverse Simon: doen wat Simon NIET zegt',
      'Team Simon: in groepjes spelen'
    ],
    evaluatie: [
      'Observeer luistervaardigheden',
      'Let op reactiesnelheid en concentratie',
      'Vraag reflectie op strategieën',
      'Monitor plezier en betrokkenheid'
    ]
  },
  {
    id: 'beweging_math_walk',
    naam: 'Rekengang (Math Walk)',
    beschrijving: 'Leerlingen lopen door de ruimte en lossen rekenproblemen op bij verschillende stations',
    icon: '🚶‍♂️',
    categorie: 'Beweging',
    tijdsduur: '20-30 minuten',
    groepsgrootte: 'Individueel of tweetallen',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen'],
    instructiemodellen: ['gepersonaliseerd_leren', 'spelend_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Rekenopgaven op verschillende stations', 'Antwoordenbladen', 'Potloden', 'Timer'],
    stappen: [
      'Plaats rekenopgaven op verschillende plekken in de ruimte',
      'Leerlingen starten bij een willekeurig station',
      'Lossen de opgave op en lopen naar het volgende station',
      'Controleren antwoorden aan het eind',
      'Reflecteren op strategie en beweging'
    ],
    tips: [
      'Zorg voor voldoende ruimte tussen stations',
      'Varieer in moeilijkheidsgraad per station',
      'Gebruik verschillende soorten opgaven',
      'Monitor dat leerlingen daadwerkelijk lopen',
      'Maak het uitdagend maar haalbaar'
    ],
    differentiatie: [
      'Verschillende niveaus opgaven per station',
      'Keuze in volgorde van stations',
      'Hulpmiddelen beschikbaar per niveau',
      'Verschillende tijdslimieten'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Rekenvaardigheid', 'Beweging', 'Zelfstandigheid', 'Variatie in leren'],
    variaties: [
      'QR code hunt: met tablets scannen',
      'Team relay: in groepjes samen',
      'Outdoor math: buiten in de natuur',
      'Timed challenge: tegen de klok'
    ],
    evaluatie: [
      'Controleer juistheid van antwoorden',
      'Observeer werkhouding en inzet',
      'Vraag feedback over beweging en leren',
      'Monitor tijd per station'
    ]
  },
  {
    id: 'creatief_storytelling_circle',
    naam: 'Vertelkring',
    beschrijving: 'Leerlingen zitten in een kring en bouwen samen een verhaal op',
    icon: '📚',
    categorie: 'Creatief',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Hele klas in kring',
    geschiktVoor: ['groep1', 'groep2', 'groep3', 'groep4', 'groep5', 'groep6', 'groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['nederlands', 'expressie'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren'],
    voorbereiding: 'Laag',
    materialen: ['Eventueel vertelvoorwerp', 'Inspiratiekaarten', 'Zachte ondergrond'],
    stappen: [
      'Vorm een kring met alle leerlingen',
      'Begin het verhaal met een openingszin',
      'Geef het vertelvoorwerp door, iedereen voegt iets toe',
      'Stimuleer creativiteit en bouw voort op ideeën',
      'Sluit het verhaal samen af'
    ],
    tips: [
      'Creëer een gezellige, veilige sfeer',
      'Moedig alle bijdragen aan, ook kleine',
      'Help verlegen leerlingen met suggesties',
      'Houd het verhaal op koers maar laat creativiteit toe',
      'Vier de gezamenlijke creatie'
    ],
    differentiatie: [
      'Pas verwachtingen aan per leerling',
      'Gebruik visuele hulpmiddelen voor inspiratie',
      'Laat sterke vertellers anderen helpen',
      'Bied verschillende manieren om bij te dragen'
    ],
    energieniveau: 'Laag',
    doel: ['Creativiteit', 'Taalvaardigheid', 'Samenwerking', 'Zelfvertrouwen'],
    variaties: [
      'Thematic stories: rond specifiek thema',
      'Character stories: elk kind is een personage',
      'Picture prompt stories: met afbeeldingen',
      'Recorded stories: opnemen voor later'
    ],
    evaluatie: [
      'Observeer participatie en creativiteit',
      'Let op taalgebruik en woordenschat',
      'Vraag reflectie op het verhaal',
      'Monitor zelfvertrouwen en plezier'
    ]
  },
  {
    id: 'onderzoek_mystery_box',
    naam: 'Mystery Box Onderzoek',
    beschrijving: 'Leerlingen onderzoeken de inhoud van een gesloten doos door vragen te stellen en hypotheses te vormen',
    icon: '📦',
    categorie: 'Onderzoek',
    tijdsduur: '20-35 minuten',
    groepsgrootte: 'Kleine groepjes van 3-4',
    geschiktVoor: ['groep3', 'groep4', 'groep5', 'groep6', 'groep7', 'groep8', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'rekenen'],
    instructiemodellen: ['onderzoekend_leren', 'coöperatief_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Gesloten dozen met verschillende voorwerpen', 'Onderzoeksformulieren', 'Potloden'],
    stappen: [
      'Presenteer de mystery box aan elke groep',
      'Leerlingen stellen vragen die met ja/nee beantwoord kunnen worden',
      'Formuleren hypotheses over de inhoud',
      'Testen hypotheses door meer vragen',
      'Onthullen van de inhoud en reflectie'
    ],
    tips: [
      'Kies interessante maar niet te voor de hand liggende voorwerpen',
      'Stimuleer systematisch vragen stellen',
      'Help bij het formuleren van goede hypotheses',
      'Laat groepen hun denkproces delen',
      'Vier zowel goede vragen als juiste gissingen'
    ],
    differentiatie: [
      'Verschillende complexiteit van voorwerpen',
      'Meer of minder hints per groep',
      'Verschillende onderzoeksformulieren',
      'Variërende ondersteuning bij vragen formuleren'
    ],
    energieniveau: 'Gemiddeld',
    doel: ['Onderzoeksvaardigheden', 'Hypotheses vormen', 'Systematisch denken', 'Samenwerking'],
    variaties: [
      'Sound mystery: alleen geluid',
      'Texture mystery: alleen voelen',
      'Digital mystery: met foto\'s en hints',
      'Multi-sensory: verschillende zintuigen'
    ],
    evaluatie: [
      'Observeer kwaliteit van vragen',
      'Let op systematiek in onderzoek',
      'Beoordeel samenwerking in groep',
      'Vraag reflectie op onderzoeksproces'
    ]
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
  return werkvormenDatabase.filter(werkvorm => 
    werkvorm.categorie === 'Energizer' || werkvorm.categorie === 'Beweging'
  )
}

export const getWerkvormenByInstructieModel = (modelId: string): Werkvorm[] => {
  return werkvormenDatabase.filter(werkvorm => 
    werkvorm.instructiemodellen.includes(modelId) || werkvorm.instructiemodellen.includes('alle modellen')
  )
}