import { Country, TimelineEvent } from '../types';

export const COUNTRIES_DATA: Country[] = [
  {
    id: "jpn",
    name: "Japan",
    officialName: "State of Japan",
    flagEmoji: "🇯🇵",
    continent: "Asia",
    subregion: "East Asia",
    capital: {
      name: "Tokyo",
      nativeName: "東京 (Tōkyō)",
      establishedYear: 1868,
      type: "Historical Relocation",
      pronunciation: "toh-kyoh"
    },
    history: {
      origin: "Originally a small fishing village named Edo ('estuary'), the settlement grew significantly after Tokugawa Ieyasu established the Tokugawa Shogunate here in 1603. By the 18th century, Edo had become one of the largest cities in the world.",
      whyCapital: "In 1868, during the Meiji Restoration, the 15-year-old Emperor Meiji moved his court from Kyoto to Edo. The city was renamed Tokyo, meaning 'Eastern Capital', to signify its new status as the political, economic, and imperial center of modernized Japan.",
      formerCapitals: [
        { city: "Asuka / Nara", era: "538 – 794 AD", reason: "Early imperial court relocated per Shinto traditions upon new emperors' accessions." },
        { city: "Kyoto (Heian-kyō)", era: "794 – 1868 AD", reason: "Served as Japan's imperial capital for over a millennium until the Meiji Restoration." },
        { city: "Kamakura", era: "1192 – 1333 AD", reason: "De facto military capital during the Kamakura Shogunate." }
      ],
      keyMilestones: [
        { year: "1603", title: "Establishment of Edo Shogunate", description: "Tokugawa Ieyasu designates Edo as the seat of military government." },
        { year: "1868", title: "Renamed to Tokyo", description: "Imperial capital officially moved from Kyoto to Tokyo during the Meiji Era." },
        { year: "1923", title: "Great Kantō Earthquake", description: "Reconstruction modernized the city's infrastructure and urban grid." },
        { year: "1964", title: "Summer Olympics", description: "Showcased Tokyo's post-war recovery and introduced the Shinkansen bullet train." }
      ]
    },
    facts: {
      population: 125100000,
      capitalPopulation: 14000000,
      metroPopulation: 37400000,
      landArea: 377975,
      elevation: 44,
      coordinates: { lat: 35.6762, lng: 139.6503 },
      currency: "Japanese Yen (¥, JPY)",
      officialLanguages: ["Japanese"],
      landmarks: ["Imperial Palace", "Tokyo Tower", "Sensō-ji Temple", "Shibuya Crossing", "Meiji Shrine"]
    },
    trivia: [
      {
        question: "What was Tokyo named before it became Japan's official capital in 1868?",
        options: ["Kyoto", "Edo", "Kamakura", "Osaka"],
        correct: 1,
        explanation: "Tokyo was named 'Edo' (meaning estuary) until Emperor Meiji renamed it Tokyo ('Eastern Capital') in 1868."
      },
      {
        question: "For roughly how many years was Kyoto the imperial capital of Japan?",
        options: ["200 years", "500 years", "Over 1,000 years", "150 years"],
        correct: 2,
        explanation: "Kyoto (Heian-kyō) was Japan's imperial capital for over 1,000 years from 794 to 1868 AD."
      }
    ]
  },
  {
    id: "usa",
    name: "United States",
    officialName: "United States of America",
    flagEmoji: "🇺🇸",
    continent: "North America",
    subregion: "Northern America",
    capital: {
      name: "Washington, D.C.",
      nativeName: "District of Columbia",
      establishedYear: 1790,
      type: "Political Compromise",
      pronunciation: "wash-ing-tuhn dee-see"
    },
    history: {
      origin: "Created by the Residence Act of 1790, Washington, D.C. was established as a federal territory along the Potomac River. President George Washington selected the site, and French engineer Pierre Charles L'Enfant designed its grand neoclassical street grid.",
      whyCapital: "The city was chosen as a political compromise between Northern and Southern states. Alexander Hamilton agreed to locate the permanent federal capital in the South in exchange for Southern support of federal assumption of Revolutionary War state debts.",
      formerCapitals: [
        { city: "Philadelphia, PA", era: "1774, 1790 – 1800", reason: "Primary meeting site of Continental Congress and temporary capital while D.C. was built." },
        { city: "New York City, NY", era: "1785 – 1790", reason: "First official capital under the U.S. Constitution where George Washington was inaugurated." },
        { city: "Princeton & Annapolis", era: "1783 – 1784", reason: "Transient meeting locations for Congress following mutinies and war movements." }
      ],
      keyMilestones: [
        { year: "1790", title: "Residence Act Passed", description: "Congress authorizes creating a national capital on the Potomac River." },
        { year: "1800", title: "Federal Government Relocates", description: "President John Adams moves into the uncompleted White House." },
        { year: "1814", title: "Burning of Washington", description: "British forces invade during the War of 1812, damaging the Capitol and White House." },
        { year: "1963", title: "March on Washington", description: "Civil rights historic rally at the Lincoln Memorial featuring Martin Luther King Jr." }
      ]
    },
    facts: {
      population: 333000000,
      capitalPopulation: 671000,
      metroPopulation: 6300000,
      landArea: 9833520,
      elevation: 7,
      coordinates: { lat: 38.9072, lng: -77.0369 },
      currency: "United States Dollar ($, USD)",
      officialLanguages: ["English (de facto)"],
      landmarks: ["U.S. Capitol", "White House", "Lincoln Memorial", "Washington Monument", "Smithsonian Museums"]
    },
    trivia: [
      {
        question: "Which state compromise led to the founding of Washington, D.C. as the US capital?",
        options: ["Bonn Compromise", "Compromise of 1790", "Missouri Compromise", "Great Compromise of 1850"],
        correct: 1,
        explanation: "The Compromise of 1790 between Hamilton, Jefferson, and Madison placed the capital in the South in return for debt assumption."
      },
      {
        question: "Which city served as the first U.S. capital under the current Constitution?",
        options: ["Philadelphia", "Boston", "New York City", "Baltimore"],
        correct: 2,
        explanation: "New York City was the capital from 1785 to 1790, where George Washington took his inaugural oath."
      }
    ]
  },
  {
    id: "bra",
    name: "Brazil",
    officialName: "Federative Republic of Brazil",
    flagEmoji: "🇧🇷",
    continent: "South America",
    subregion: "Latin America",
    capital: {
      name: "Brasília",
      nativeName: "Brasília",
      establishedYear: 1960,
      type: "Planned City",
      pronunciation: "bruh-zil-yuh"
    },
    history: {
      origin: "Brasília was constructed in just 41 months from 1956 to 1960 in the interior highland central plateau of Brazil. Master urban planned by Lúcio Costa in the shape of an airplane and architected by legendary modernist Oscar Niemeyer.",
      whyCapital: "Brazil moved its capital inland from coastal Rio de Janeiro to promote development of the vast central hinterland, neutralize coastal military vulnerability, and create a modern, neutral national federal district.",
      formerCapitals: [
        { city: "Salvador da Bahia", era: "1549 – 1763", reason: "First colonial capital of Portuguese Brazil focused on sugar production and trade." },
        { city: "Rio de Janeiro", era: "1763 – 1960", reason: "Capital for almost 200 years; served as imperial court of the Portuguese Empire when royalty fled Napoleon." }
      ],
      keyMilestones: [
        { year: "1891", title: "Constitutional Mandate", description: "Brazil's republican constitution mandates creating an interior capital district." },
        { year: "1956", title: "Construction Begins", description: "President Juscelino Kubitschek launches rapid construction campaign." },
        { year: "1960", title: "Official Inauguration", description: "Brasília inaugurated on April 21, 1960, transferring all federal branches." },
        { year: "1987", title: "UNESCO World Heritage", description: "Designated a UNESCO site for its unprecedented 20th-century modernist architecture." }
      ]
    },
    facts: {
      population: 215300000,
      capitalPopulation: 3100000,
      metroPopulation: 4800000,
      landArea: 8515767,
      elevation: 1172,
      coordinates: { lat: -15.7975, lng: -47.8919 },
      currency: "Brazilian Real (R$, BRL)",
      officialLanguages: ["Portuguese"],
      landmarks: ["Cathedral of Brasília", "National Congress", "Palácio do Planalto", "Three Powers Plaza", "JK Bridge"]
    },
    trivia: [
      {
        question: "Which famous modernist architect designed the iconic public buildings in Brasília?",
        options: ["Le Corbusier", "Oscar Niemeyer", "Frank Lloyd Wright", "Zaha Hadid"],
        correct: 1,
        explanation: "Oscar Niemeyer designed Brasília's landmark civic architecture including the Cathedral and Congress."
      },
      {
        question: "What city was the capital of Brazil immediately prior to Brasília's inauguration in 1960?",
        options: ["Salvador da Bahia", "São Paulo", "Rio de Janeiro", "Curitiba"],
        correct: 2,
        explanation: "Rio de Janeiro served as Brazil's capital from 1763 until Brasília was inaugurated in 1960."
      }
    ]
  },
  {
    id: "aus",
    name: "Australia",
    officialName: "Commonwealth of Australia",
    flagEmoji: "🇦🇺",
    continent: "Oceania",
    subregion: "Australasia",
    capital: {
      name: "Canberra",
      nativeName: "Canberra",
      establishedYear: 1913,
      type: "Political Compromise",
      pronunciation: "kan-buh-ruh"
    },
    history: {
      origin: "Derived from an Indigenous Ngunnawal word thought to mean 'meeting place'. The site was selected in 1908 following federation, and an international design competition was won by American architects Walter Burley Griffin and Marion Mahony Griffin.",
      whyCapital: "Chosen as an explicit compromise between Australia's two largest rival cities, Sydney and Melbourne, which both demanded to be the national capital. Section 125 of the Australian Constitution required the capital to be in New South Wales but at least 100 miles from Sydney.",
      formerCapitals: [
        { city: "Melbourne", era: "1901 – 1927", reason: "Served as temporary seat of government while Canberra was being planned and built." }
      ],
      keyMilestones: [
        { year: "1901", title: "Federation of Australia", description: "Six colonies unite into a commonwealth; Melbourne becomes temporary capital." },
        { year: "1908", title: "Site Selection", description: "Canberra region chosen after intense political debates." },
        { year: "1912", title: "Griffin Design Victory", description: "Walter Burley Griffin's geometric garden city plan wins competition." },
        { year: "1927", title: "Parliament Opens", description: "Provisional Parliament House opens; federal parliament officially transfers from Melbourne." }
      ]
    },
    facts: {
      population: 26000000,
      capitalPopulation: 456000,
      metroPopulation: 456000,
      landArea: 7692024,
      elevation: 580,
      coordinates: { lat: -35.2809, lng: 149.1300 },
      currency: "Australian Dollar ($, AUD)",
      officialLanguages: ["English"],
      landmarks: ["Parliament House", "Australian War Memorial", "Lake Burley Griffin", "National Gallery of Australia", "Black Mountain Tower"]
    },
    trivia: [
      {
        question: "Canberra was chosen as Australia's capital primarily to settle a rivalry between which two cities?",
        options: ["Sydney & Melbourne", "Brisbane & Sydney", "Melbourne & Perth", "Adelaide & Sydney"],
        correct: 0,
        explanation: "Canberra was chosen as a compromise location situated between Sydney and Melbourne."
      },
      {
        question: "Which city served as the temporary capital of Australia from 1901 to 1927?",
        options: ["Sydney", "Melbourne", "Adelaide", "Hobart"],
        correct: 1,
        explanation: "Melbourne held the federal seat of government for 26 years while Canberra was planned."
      }
    ]
  },
  {
    id: "gbr",
    name: "United Kingdom",
    officialName: "United Kingdom of Great Britain and Northern Ireland",
    flagEmoji: "🇬🇧",
    continent: "Europe",
    subregion: "Western Europe",
    capital: {
      name: "London",
      nativeName: "Londinium",
      establishedYear: 47,
      type: "Ancient",
      pronunciation: "lun-duhn"
    },
    history: {
      origin: "Founded by the Romans around 47 AD as *Londinium* near a key Thames river crossing. It grew into a major port and administrative hub of Roman Britain before becoming the seat of Anglo-Saxon and Anglo-Norman monarchs.",
      whyCapital: "Its strategic position along the River Thames allowed rapid maritime commerce, inland troop deployment, and taxation. William the Conqueror built the Tower of London here in 1066 to solidify control.",
      formerCapitals: [
        { city: "Winchester", era: "871 – 1066 AD", reason: "Capital of Wessex and early unified England under King Alfred the Great." },
        { city: "Colchester (Camulodunum)", era: "43 – 47 AD", reason: "First Roman provincial capital of Britannia before Londinium eclipsed it." }
      ],
      keyMilestones: [
        { year: "47 AD", title: "Roman Founding", description: "Londinium established as a civilian town and bridgehead." },
        { year: "1066", title: "Norman Conquest", description: "William the Conqueror crowned at Westminster Abbey." },
        { year: "1666", title: "Great Fire of London", description: "Destroyed medieval city center, leading to brick architecture and Sir Christopher Wren's rebuilt St Paul's." },
        { year: "1851", title: "Great Exhibition", description: "Cemented London as the center of global industrial empire." }
      ]
    },
    facts: {
      population: 67000000,
      capitalPopulation: 8980000,
      metroPopulation: 14800000,
      landArea: 242495,
      elevation: 11,
      coordinates: { lat: 51.5074, lng: -0.1278 },
      currency: "British Pound Sterling (£, GBP)",
      officialLanguages: ["English"],
      landmarks: ["Big Ben / Elizabeth Tower", "Tower of London", "Buckingham Palace", "Westminster Abbey", "British Museum"]
    },
    trivia: [
      {
        question: "What was the name of England's ancient capital city during the reign of King Alfred the Great?",
        options: ["York", "Winchester", "Colchester", "Canterbury"],
        correct: 1,
        explanation: "Winchester was the historic capital of the Anglo-Saxon Kingdom of Wessex and unified England."
      },
      {
        question: "What original Roman name was given to London upon its founding around 47 AD?",
        options: ["Verulamium", "Londinium", "Eboracum", "Camulodunum"],
        correct: 1,
        explanation: "The Romans named the settlement Londinium."
      }
    ]
  },
  {
    id: "ita",
    name: "Italy",
    officialName: "Italian Republic",
    flagEmoji: "🇮🇹",
    continent: "Europe",
    subregion: "Southern Europe",
    capital: {
      name: "Rome",
      nativeName: "Roma",
      establishedYear: -753,
      type: "Ancient",
      pronunciation: "rohm"
    },
    history: {
      origin: "According to legend, Rome was founded on April 21, 753 BC by twin brothers Romulus and Remus. Located along the Tiber River on seven hills, it grew from a Latin village into the heart of the Roman Republic and Empire.",
      whyCapital: "Rome was declared capital of unified Italy (Risorgimento) in 1871 due to its overwhelming historic, cultural, and spiritual symbolism as the eternal city of the Roman Empire and the Papacy.",
      formerCapitals: [
        { city: "Turin (Torino)", era: "1861 – 1865", reason: "First capital of the unified Kingdom of Italy under the House of Savoy." },
        { city: "Florence (Firenze)", era: "1865 – 1871", reason: "Interim capital while French troops guarded papal Rome." },
        { city: "Ravenna", era: "402 – 476 AD", reason: "Capital of Western Roman Empire due to swampy defensive moat." }
      ],
      keyMilestones: [
        { year: "753 BC", title: "Mythic Founding", description: "Romulus establishes Rome on the Palatine Hill." },
        { year: "27 BC", title: "Roman Empire Begins", description: "Augustus becomes first Roman Emperor, ushering Pax Romana." },
        { year: "1871", title: "Capital of Unified Italy", description: "Italian troops enter Rome; Papal States absorbed into Kingdom of Italy." },
        { year: "1929", title: "Lateran Treaty", description: "Vatican City established as an independent sovereign enclave inside Rome." }
      ]
    },
    facts: {
      population: 59000000,
      capitalPopulation: 2870000,
      metroPopulation: 4300000,
      landArea: 301340,
      elevation: 21,
      coordinates: { lat: 41.9028, lng: 12.4964 },
      currency: "Euro (€, EUR)",
      officialLanguages: ["Italian"],
      landmarks: ["Colosseum", "Roman Forum", "Pantheon", "Trevi Fountain", "St. Peter's Basilica (Vatican)"]
    },
    trivia: [
      {
        question: "Which city served as the first capital of the unified Kingdom of Italy in 1861?",
        options: ["Milan", "Florence", "Turin", "Naples"],
        correct: 2,
        explanation: "Turin was the first capital of unified Italy from 1861 to 1865."
      },
      {
        question: "In what year did Rome officially become the capital of modern Italy?",
        options: ["1861", "1871", "1914", "1946"],
        correct: 1,
        explanation: "Rome became Italy's capital in 1871 after Italian forces captured the Papal States."
      }
    ]
  },
  {
    id: "deu",
    name: "Germany",
    officialName: "Federal Republic of Germany",
    flagEmoji: "🇩🇪",
    continent: "Europe",
    subregion: "Central Europe",
    capital: {
      name: "Berlin",
      nativeName: "Berlin",
      establishedYear: 1237,
      type: "Historical Relocation",
      pronunciation: "bair-lin"
    },
    history: {
      origin: "First documented in 1237, Berlin grew on the River Spree. It became the capital of the Margraviate of Brandenburg, then Kingdom of Prussia, and eventually the unified German Empire in 1871 under Otto von Bismarck.",
      whyCapital: "Following German Reunification in 1990, the Bundestag voted in the famous 'Hauptstadtbeschluss' (1991) to move the federal government back from Bonn to Berlin, honoring historical unity and symbolic reconciliation.",
      formerCapitals: [
        { city: "Bonn", era: "1949 – 1990 (de facto to 1999)", reason: "Capital of West Germany (FRG) during Cold War division." },
        { city: "East Berlin", era: "1949 – 1990", reason: "Capital of East Germany (GDR) separated by the Berlin Wall." },
        { city: "Frankfurt am Main", era: "1848 – 1849", reason: "Seat of the revolutionary Frankfurt Parliament." }
      ],
      keyMilestones: [
        { year: "1871", title: "Capital of German Empire", description: "Proclamation of German unification under Kaiser Wilhelm I." },
        { year: "1945", title: "Division into 4 Sectors", description: "Post-WWII Allied partition leads to Cold War split." },
        { year: "1961", title: "Construction of Berlin Wall", description: "Barricade divides East and West Berlin." },
        { year: "1989", title: "Fall of Berlin Wall", description: "Peaceful revolution opens borders; prelude to German Reunification." }
      ]
    },
    facts: {
      population: 84300000,
      capitalPopulation: 3670000,
      metroPopulation: 6100000,
      landArea: 357022,
      elevation: 34,
      coordinates: { lat: 52.5200, lng: 13.4050 },
      currency: "Euro (€, EUR)",
      officialLanguages: ["German"],
      landmarks: ["Brandenburg Gate", "Reichstag Building", "Museum Island", "Berlin Wall Memorial", "Fernsehturm"]
    },
    trivia: [
      {
        question: "Which city served as the capital of West Germany (FRG) from 1949 until reunification?",
        options: ["Munich", "Frankfurt", "Bonn", "Hamburg"],
        correct: 2,
        explanation: "Bonn served as West Germany's capital throughout the Cold War."
      },
      {
        question: "What year did the German parliament vote to move the federal government back to Berlin?",
        options: ["1989", "1991", "1999", "2001"],
        correct: 1,
        explanation: "The Bundestag passed the 'Capital Decision' (Hauptstadtbeschluss) in June 1991."
      }
    ]
  },
  {
    id: "kaz",
    name: "Kazakhstan",
    officialName: "Republic of Kazakhstan",
    flagEmoji: "🇰🇿",
    continent: "Asia",
    subregion: "Central Asia",
    capital: {
      name: "Astana",
      nativeName: "Астана (Astana)",
      establishedYear: 1997,
      type: "Planned City",
      pronunciation: "uh-stah-nuh"
    },
    history: {
      origin: "Formerly known as Akmolinsk, Tselinograd, and Nur-Sultan. Located on the Ishim River in northern steppe winds, it was transformed under President Nursultan Nazarbayev into a futuristic capital designed by Japanese architect Kisho Kurokawa.",
      whyCapital: "Moved from southern Almaty in 1997 due to Almaty's earthquake vulnerability, geographic confinement near mountains, border proximity, and to stimulate economic growth and ethnic integration in central/northern steppes.",
      formerCapitals: [
        { city: "Almaty (Alma-Ata)", era: "1929 – 1997", reason: "Kazakh SSR capital; remains nation's financial and cultural megalopolis." },
        { city: "Kyzylorda", era: "1925 – 1929", reason: "Early Soviet Kazakh Autonomous Republic capital." },
        { city: "Orenburg", era: "1920 – 1925", reason: "Initial capital before border reassignment to Russia." }
      ],
      keyMilestones: [
        { year: "1997", title: "Capital Relocation", description: "Official decree moves capital from Almaty to Akmola." },
        { year: "1998", title: "Renamed to Astana", description: "City renamed Astana, meaning 'Capital' in Kazakh." },
        { year: "2019", title: "Renamed to Nur-Sultan", description: "Renamed after former President Nazarbayev." },
        { year: "2022", title: "Reverted to Astana", description: "Name reverted back to Astana following constitutional reform." }
      ]
    },
    facts: {
      population: 20000000,
      capitalPopulation: 1350000,
      metroPopulation: 1350000,
      landArea: 2724900,
      elevation: 347,
      coordinates: { lat: 51.1694, lng: 71.4491 },
      currency: "Kazakhstani Tenge (₸, KZT)",
      officialLanguages: ["Kazakh", "Russian"],
      landmarks: ["Baiterek Tower", "Khan Shatyr", "Palace of Peace and Reconciliation", "Hazrat Sultan Mosque"]
    },
    trivia: [
      {
        question: "What is the meaning of the word 'Astana' in the Kazakh language?",
        options: ["Steppe Fortress", "Capital", "Golden Sun", "Meeting Place"],
        correct: 1,
        explanation: "'Astana' literally translates to 'Capital' in Kazakh."
      },
      {
        question: "Why did Kazakhstan move its capital away from Almaty in 1997?",
        options: ["Almaty ran out of water", "Earthquake risks and geographic confinement", "Almaty was conquered", "To move closer to the sea"],
        correct: 1,
        explanation: "Almaty was ringed by high seismic activity mountains and lacked room for urban expansion."
      }
    ]
  },
  {
    id: "nga",
    name: "Nigeria",
    officialName: "Federal Republic of Nigeria",
    flagEmoji: "🇳🇬",
    continent: "Africa",
    subregion: "West Africa",
    capital: {
      name: "Abuja",
      nativeName: "Abuja",
      establishedYear: 1991,
      type: "Planned City",
      pronunciation: "uh-boo-juh"
    },
    history: {
      origin: "Planned in the 1970s and located in the center of the country within the Federal Capital Territory. Master planned by International Planning Associates (IPA) around the iconic monolith Aso Rock.",
      whyCapital: "Chosen to replace coastal Lagos in 1991 to create an ethnically and religiously neutral capital located centrally among Nigeria's 250+ ethnic groups, while relieving severe urban overcrowding in Lagos.",
      formerCapitals: [
        { city: "Lagos", era: "1914 – 1991", reason: "Colonial and post-independence capital; remains Africa's largest economic metropolis." },
        { city: "Calabar", era: "1893 – 1906", reason: "Headquarters of the Oil Rivers Protectorate under British colonial rule." }
      ],
      keyMilestones: [
        { year: "1976", title: "Decree No. 6", description: "General Murtala Mohammed decrees moving capital to central territory." },
        { year: "1991", title: "Official Transfer", description: "President Ibrahim Babangida officially relocates seat of government to Abuja." },
        { year: "1996", title: "National Mosque & Church", description: "Opening of national religious monuments symbolizing unity." }
      ]
    },
    facts: {
      population: 220000000,
      capitalPopulation: 3800000,
      metroPopulation: 3800000,
      landArea: 923768,
      elevation: 360,
      coordinates: { lat: 9.0765, lng: 7.3986 },
      currency: "Nigerian Naira (₦, NGN)",
      officialLanguages: ["English"],
      landmarks: ["Aso Rock", "Nigerian National Mosque", "National Christian Centre", "Zuma Rock (nearby)"]
    },
    trivia: [
      {
        question: "Which landmark monolith towers over the administrative center of Abuja?",
        options: ["Zuma Rock", "Aso Rock", "Olumo Rock", "Mount Patti"],
        correct: 1,
        explanation: "Aso Rock is a massive 400-meter monolith dominating the skyline behind the Presidential Complex."
      },
      {
        question: "What year did Abuja officially replace Lagos as Nigeria's capital city?",
        options: ["1976", "1985", "1991", "2000"],
        correct: 2,
        explanation: "Abuja was officially declared Nigeria's federal capital on December 12, 1991."
      }
    ]
  },
  {
    id: "egy",
    name: "Egypt",
    officialName: "Arab Republic of Egypt",
    flagEmoji: "🇪🇬",
    continent: "Africa",
    subregion: "North Africa",
    capital: {
      name: "Cairo",
      nativeName: "القاهرة (Al-Qāhirah)",
      establishedYear: 969,
      type: "Ancient",
      pronunciation: "ky-roh"
    },
    history: {
      origin: "Founded in 969 AD by Jawhar al-Siqilli of the Fatimid dynasty near ancient Memphis and Fustat. Named *Al-Qāhirah*, meaning 'The Victorious'. Grew into the cultural hub of the Arab and Islamic world.",
      whyCapital: "Located at the strategic apex of the Nile Delta, controlling river traffic between Upper and Lower Egypt and Mediterranean trade routes.",
      formerCapitals: [
        { city: "Memphis", era: "c. 3100 – 2181 BC", reason: "Ancient capital of Old Kingdom Pharaohs near Giza." },
        { city: "Thebes (Luxor)", era: "c. 2055 – 1069 BC", reason: "Religious and royal capital during Middle and New Kingdoms." },
        { city: "Alexandria", era: "331 BC – 641 AD", reason: "Ptolemaic and Roman-Egyptian Mediterranean capital." },
        { city: "New Administrative Capital", era: "Under Construction", reason: "Mega-project 45km east of Cairo built to relieve congestion." }
      ],
      keyMilestones: [
        { year: "969 AD", title: "Fatimid Founding", description: "Jawhar al-Siqilli lays foundations of Al-Qāhirah and Al-Azhar University." },
        { year: "1176", title: "Saladin Citadel", description: "Citadel of Saladin built to defend against Crusaders." },
        { year: "1922", title: "Modern Independence", description: "Cairo becomes capital of independent Kingdom of Egypt." },
        { year: "2015", title: "New Capital Announcement", description: "Egypt announces megacity transition east of Cairo." }
      ]
    },
    facts: {
      population: 109000000,
      capitalPopulation: 10100000,
      metroPopulation: 22100000,
      landArea: 1010408,
      elevation: 23,
      coordinates: { lat: 30.0444, lng: 31.2357 },
      currency: "Egyptian Pound (E£, EGP)",
      officialLanguages: ["Arabic"],
      landmarks: ["Giza Pyramid Complex", "The Great Sphinx", "Egyptian Museum", "Khan el-Khalili Bazaar", "Citadel of Saladin"]
    },
    trivia: [
      {
        question: "What does the Arabic name 'Al-Qāhirah' (Cairo) mean in English?",
        options: ["The City of Minarets", "The Victorious", "Nile Oasis", "Great Fortress"],
        correct: 1,
        explanation: "Al-Qāhirah translates to 'The Victorious' or 'The Conqueror'."
      },
      {
        question: "Which ancient city served as Egypt's capital during the Ptolemaic period under Cleopatra?",
        options: ["Memphis", "Thebes", "Alexandria", "Amarna"],
        correct: 2,
        explanation: "Alexandria was Egypt's capital for nearly a millennium from Alexander the Great until the Arab conquest."
      }
    ]
  },
  {
    id: "chn",
    name: "China",
    officialName: "People's Republic of China",
    flagEmoji: "🇨🇳",
    continent: "Asia",
    subregion: "East Asia",
    capital: {
      name: "Beijing",
      nativeName: "北京 (Běijīng)",
      establishedYear: 1421,
      type: "Historical Relocation",
      pronunciation: "bay-jing"
    },
    history: {
      origin: "Beijing's history spans over 3,000 years under various names (Ji, Yanjing, Dadu). Ming Emperor Yongle moved the imperial capital from Nanjing to Beijing in 1421, constructing the Forbidden City.",
      whyCapital: "Chosen historically for its strategic location guarding northern agricultural plains against northern nomadic invasions, near the Great Wall.",
      formerCapitals: [
        { city: "Xi'an (Chang'an)", era: "221 BC – 907 AD", reason: "Capital of Han, Sui, and Tang Dynasties; eastern terminus of the Silk Road." },
        { city: "Nanjing", era: "1368 – 1421, 1927 – 1949", reason: "'Southern Capital'; early Ming Dynasty capital and Republic of China seat." },
        { city: "Luoyang", era: "Eastern Zhou, Han, Wei", reason: "Historic central plain imperial capital." }
      ],
      keyMilestones: [
        { year: "1421", title: "Ming Capital Relocation", description: "Emperor Yongle completes Forbidden City and moves capital from Nanjing." },
        { year: "1912", title: "End of Qing Empire", description: "Puyi abdicates; Beijing becomes capital of Republic of China." },
        { year: "1949", title: "Founding of PRC", description: "Mao Zedong proclaims People's Republic of China in Tiananmen Square." },
        { year: "2008 & 2022", title: "Dual Olympic City", description: "First city to host both Summer and Winter Olympic Games." }
      ]
    },
    facts: {
      population: 1411000000,
      capitalPopulation: 21890000,
      metroPopulation: 21890000,
      landArea: 9596960,
      elevation: 43,
      coordinates: { lat: 39.9042, lng: 116.4074 },
      currency: "Chinese Yuan (¥, CNY)",
      officialLanguages: ["Standard Mandarin Chinese"],
      landmarks: ["Forbidden City", "Great Wall of China (Mutianyu)", "Tiananmen Square", "Temple of Heaven", "Summer Palace"]
    },
    trivia: [
      {
        question: "What does the name 'Beijing' literally mean in Mandarin Chinese?",
        options: ["Northern Capital", "Imperial City", "Central Harmony", "Eastern Fortress"],
        correct: 0,
        explanation: "Beijing (北京) literally means 'Northern Capital', contrasted with Nanjing (南京, 'Southern Capital')."
      },
      {
        question: "Which ancient imperial city served as the capital during the golden age of the Tang Dynasty?",
        options: ["Beijing", "Nanjing", "Xi'an (Chang'an)", "Guangzhou"],
        correct: 2,
        explanation: "Xi'an (known then as Chang'an) was the sprawling imperial capital during the Tang Dynasty."
      }
    ]
  },
  {
    id: "ind",
    name: "India",
    officialName: "Republic of India",
    flagEmoji: "🇮🇳",
    continent: "Asia",
    subregion: "South Asia",
    capital: {
      name: "New Delhi",
      nativeName: "नई दिल्ली (Naī Dillī)",
      establishedYear: 1911,
      type: "Planned City",
      pronunciation: "nyoo del-ee"
    },
    history: {
      origin: "Announced by King George V during the Delhi Durbar in 1911. Master planned by British architects Sir Edwin Lutyens and Sir Herbert Baker as a imperial garden city adjacent to Old Delhi.",
      whyCapital: "Moved from Kolkata (Calcutta) to New Delhi due to Delhi's central geographical location, historic status as seat of Mughal Emperors (Shahjahanabad), and political unrest in Bengal.",
      formerCapitals: [
        { city: "Kolkata (Calcutta)", era: "1772 – 1911", reason: "British East India Company headquarters and British Raj capital." },
        { city: "Agra", era: "1526 – 1648", reason: "Mughal Empire capital during building of Taj Mahal." },
        { city: "Pataliputra (Patna)", era: "c. 490 BC – 550 AD", reason: "Capital of Maurya and Gupta Empires." }
      ],
      keyMilestones: [
        { year: "1911", title: "Delhi Durbar Announcement", description: "Capital transfer from Calcutta to Delhi declared." },
        { year: "1931", title: "Inauguration", description: "New Delhi officially inaugurated as capital of British India." },
        { year: "1947", title: "Indian Independence", description: "New Delhi becomes capital of independent Dominion and Republic of India." }
      ]
    },
    facts: {
      population: 1428000000,
      capitalPopulation: 250000,
      metroPopulation: 32900000,
      landArea: 3287263,
      elevation: 216,
      coordinates: { lat: 28.6139, lng: 77.2090 },
      currency: "Indian Rupee (₹, INR)",
      officialLanguages: ["Hindi", "English"],
      landmarks: ["India Gate", "Rashtrapati Bhavan", "Qutub Minar", "Humayun's Tomb", "Lotus Temple"]
    },
    trivia: [
      {
        question: "Which city served as the capital of British India before it was moved to Delhi in 1911?",
        options: ["Mumbai", "Kolkata (Calcutta)", "Chennai", "Agra"],
        correct: 1,
        explanation: "Calcutta was the capital of British India from 1772 until 1911."
      },
      {
        question: "Who was the chief British architect who designed New Delhi's grand boulevard layout?",
        options: ["Sir Christopher Wren", "Sir Edwin Lutyens", "Le Corbusier", "Charles Correa"],
        correct: 1,
        explanation: "Sir Edwin Lutyens designed New Delhi, giving rise to the term 'Lutyens' Delhi'."
      }
    ]
  },
  {
    id: "fra",
    name: "France",
    officialName: "French Republic",
    flagEmoji: "🇫🇷",
    continent: "Europe",
    subregion: "Western Europe",
    capital: {
      name: "Paris",
      nativeName: "Paris (Lutetia)",
      establishedYear: 508,
      type: "Ancient",
      pronunciation: "pah-ree"
    },
    history: {
      origin: "Originally a Celtic Parisii settlement on the Île de la Cité. Conquered by Romans who named it *Lutetia*. King Clovis I of the Franks made it his capital in 508 AD.",
      whyCapital: "Centered in the fertile Île-de-France region along the Seine river, controlling river trade and wheat heartlands of Northern France.",
      formerCapitals: [
        { city: "Versailles", era: "1682 – 1789", reason: "Louis XIV moved royal court to suburban palace to distance from Paris mobs." },
        { city: "Vichy", era: "1940 – 1944", reason: "Seat of collaborationist regime during WWII German occupation." },
        { city: "Bordeaux & Tours", era: "1870, 1914, 1940", reason: "Emergency wartime capitals during German invasions." }
      ],
      keyMilestones: [
        { year: "508 AD", title: "Clovis I Capital", description: "Frankish King Clovis makes Paris capital of his Kingdom." },
        { year: "1789", title: "Storming of the Bastille", description: "French Revolution begins in Paris." },
        { year: "1853 – 1870", title: "Haussmann Renovation", description: "Baron Haussmann transforms medieval Paris into boulevard metropolis." },
        { year: "1944", title: "Liberation of Paris", description: "Allied forces and French Resistance liberate city from Nazi occupation." }
      ]
    },
    facts: {
      population: 68000000,
      capitalPopulation: 2160000,
      metroPopulation: 13000000,
      landArea: 551695,
      elevation: 35,
      coordinates: { lat: 48.8566, lng: 2.3522 },
      currency: "Euro (€, EUR)",
      officialLanguages: ["French"],
      landmarks: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe", "Sacre-Cœur"]
    },
    trivia: [
      {
        question: "Which Roman name was originally given to the settlement on the Île de la Cité (Paris)?",
        options: ["Lugdunum", "Lutetia", "Massalia", "Arelate"],
        correct: 1,
        explanation: "The Romans called the settlement Lutetia Parisiorum."
      },
      {
        question: "Where did King Louis XIV relocate the French royal court in 1682?",
        options: ["Lyon", "Versailles", "Fontainebleau", "Orléans"],
        correct: 1,
        explanation: "Louis XIV moved the royal court to the lavish Palace of Versailles outside Paris."
      }
    ]
  },
  {
    id: "can",
    name: "Canada",
    officialName: "Canada",
    flagEmoji: "🇨🇦",
    continent: "North America",
    subregion: "Northern America",
    capital: {
      name: "Ottawa",
      nativeName: "Ottawa",
      establishedYear: 1857,
      type: "Political Compromise",
      pronunciation: "ot-uh-wah"
    },
    history: {
      origin: "Founded as Bytown in 1826 during construction of the Rideau Canal. Renamed Ottawa in 1855, derived from the Algonquin word *adawe*, meaning 'to trade'.",
      whyCapital: "Selected personally by Queen Victoria in 1857 as a neutral compromise between English-speaking Upper Canada (Toronto) and French-speaking Lower Canada (Montreal/Quebec City), and defensible from US attacks across the border.",
      formerCapitals: [
        { city: "Kingston", era: "1841 – 1844", reason: "First capital of united Province of Canada." },
        { city: "Montreal", era: "1844 – 1849", reason: "Capital until Parliament building was burned down by riots." },
        { city: "Toronto & Quebec City", era: "1849 – 1857", reason: "Alternated capitals every four years due to political deadlock." }
      ],
      keyMilestones: [
        { year: "1857", title: "Queen Victoria's Selection", description: "Queen Victoria selects Ottawa as capital of Province of Canada." },
        { year: "1867", title: "Canadian Confederation", description: "Ottawa remains capital of the new Dominion of Canada." },
        { year: "1916", title: "Parliament Fire", description: "Centre Block destroyed by fire; rebuilt with Peace Tower." }
      ]
    },
    facts: {
      population: 40000000,
      capitalPopulation: 1000000,
      metroPopulation: 1400000,
      landArea: 9984670,
      elevation: 70,
      coordinates: { lat: 45.4215, lng: -75.6972 },
      currency: "Canadian Dollar ($, CAD)",
      officialLanguages: ["English", "French"],
      landmarks: ["Parliament Hill", "Rideau Canal", "National Gallery of Canada", "Canadian War Museum"]
    },
    trivia: [
      {
        question: "Which British monarch selected Ottawa to be the capital of Canada in 1857?",
        options: ["Queen Elizabeth I", "Queen Victoria", "King George III", "King Edward VII"],
        correct: 1,
        explanation: "Queen Victoria chose Ottawa as a neutral, defensible location between French and English speaking regions."
      },
      {
        question: "What was the original name of Ottawa when it was founded during canal construction?",
        options: ["Bytown", "York", "New London", "Upper Town"],
        correct: 0,
        explanation: "Ottawa was originally named Bytown after Colonel John By."
      }
    ]
  },
  {
    id: "tur",
    name: "Turkey",
    officialName: "Republic of Türkiye",
    flagEmoji: "🇹🇷",
    continent: "Asia",
    subregion: "Middle East / Europe",
    capital: {
      name: "Ankara",
      nativeName: "Ankara (Ancyra)",
      establishedYear: 1923,
      type: "Historical Relocation",
      pronunciation: "ang-kuh-ruh"
    },
    history: {
      origin: "An ancient Anatolian city with Hittite, Phrygian, and Roman roots. Mustafa Kemal Atatürk established his war headquarters here during the Turkish War of Independence.",
      whyCapital: "Atatürk relocated the capital from Ottoman Istanbul to Ankara in 1923 to symbolize a fresh break from imperial Ottoman monarchy, create a secure central Anatolian inland hub, and distance the government from European naval threats.",
      formerCapitals: [
        { city: "Istanbul (Constantinople)", era: "1453 – 1923", reason: "Ottoman Empire capital; previously Byzantine capital (330 – 1453 AD)." },
        { city: "Edirne (Adrianople)", era: "1369 – 1453", reason: "European staging capital before conquest of Constantinople." },
        { city: "Bursa", era: "1326 – 1365", reason: "First capital of the nascent Ottoman Principality." }
      ],
      keyMilestones: [
        { year: "1923", title: "Proclamation of Capital", description: "Ankara declared official capital of new Turkish Republic." },
        { year: "1953", title: "Anıtkabir Completed", description: "Mausoleum of Atatürk inaugurated as national monument." }
      ]
    },
    facts: {
      population: 85000000,
      capitalPopulation: 5750000,
      metroPopulation: 5750000,
      landArea: 783562,
      elevation: 938,
      coordinates: { lat: 39.9334, lng: 32.8597 },
      currency: "Turkish Lira (₺, TRY)",
      officialLanguages: ["Turkish"],
      landmarks: ["Anıtkabir (Atatürk Mausoleum)", "Ankara Castle", "Museum of Anatolian Civilizations", "Kocatepe Mosque"]
    },
    trivia: [
      {
        question: "Who was the founder of modern Turkey who moved the capital from Istanbul to Ankara?",
        options: ["Suleiman the Magnificent", "Mustafa Kemal Atatürk", "Ismet Inönü", "Mehmed II"],
        correct: 1,
        explanation: "Mustafa Kemal Atatürk moved the capital to Ankara in 1923 upon founding the Republic."
      },
      {
        question: "What historic name did Istanbul bear when it was the capital of the Byzantine Empire?",
        options: ["Smyrna", "Constantinople", "Antioch", "TreBizond"],
        correct: 1,
        explanation: "Istanbul was known as Constantinople from 330 AD until it was renamed."
      }
    ]
  },
  {
    id: "mmr",
    name: "Myanmar",
    officialName: "Republic of the Union of Myanmar",
    flagEmoji: "🇲🇲",
    continent: "Asia",
    subregion: "Southeast Asia",
    capital: {
      name: "Naypyidaw",
      nativeName: "နေပြည်တော် (Nay Pyi Taw)",
      establishedYear: 2005,
      type: "Planned City",
      pronunciation: "nay-pyee-daw"
    },
    history: {
      origin: "Meaning 'Abode of Kings', Naypyidaw was built in secret in a central agricultural area 320km north of Yangon. The military government began constructing the vast city in 2002.",
      whyCapital: "Moved abruptly in November 2005 from coastal Yangon due to military strategic security concerns, protection against naval invasion, and central administration over ethnic region states.",
      formerCapitals: [
        { city: "Yangon (Rangoon)", era: "1885 – 2005", reason: "British colonial capital and main port city." },
        { city: "Mandalay", era: "1857 – 1885", reason: "Last royal capital of the Konbaung Dynasty." },
        { city: "Bagan", era: "1044 – 1287", reason: "Capital of the Pagan Kingdom famous for thousands of Buddhist temples." }
      ],
      keyMilestones: [
        { year: "2005", title: "Secret Relocation", description: "Government ministries ordered to move within hours on Nov 6." },
        { year: "2006", title: "Official Naming", description: "City officially named Naypyidaw on Armed Forces Day." }
      ]
    },
    facts: {
      population: 54000000,
      capitalPopulation: 925000,
      metroPopulation: 925000,
      landArea: 676578,
      elevation: 115,
      coordinates: { lat: 19.7633, lng: 96.0785 },
      currency: "Myanmar Kyat (K, MMK)",
      officialLanguages: ["Burmese"],
      landmarks: ["Uppatasanti Pagoda", "20-Lane Highway", "Parliament Complex (Thilawa)", "National Herbal Park"]
    },
    trivia: [
      {
        question: "Naypyidaw is famous for containing which unique infrastructural feature?",
        options: ["A 20-lane wide highway", "Underground submarine tunnels", "A floating parliament", "Solar grid monorail"],
        correct: 0,
        explanation: "Naypyidaw features massive empty 20-lane wide boulevards designed for military parades and rapid access."
      },
      {
        question: "What was the former capital of Myanmar prior to the abrupt move in 2005?",
        options: ["Mandalay", "Yangon (Rangoon)", "Bagan", "Inle"],
        correct: 1,
        explanation: "Yangon served as the capital until 2005 and remains Myanmar's economic commercial center."
      }
    ]
  },
  {
    id: "esp",
    name: "Spain",
    officialName: "Kingdom of Spain",
    flagEmoji: "🇪🇸",
    continent: "Europe",
    subregion: "Southern Europe",
    capital: {
      name: "Madrid",
      nativeName: "Madrid (Mayrit)",
      establishedYear: 1561,
      type: "Historical Relocation",
      pronunciation: "muh-drid"
    },
    history: {
      origin: "Founded in the 9th century by the Umayyad Emir Muhammad I as a fortress city named *Mayrit*. King Philip II of Spain moved the royal court here in 1561.",
      whyCapital: "Chosen by Philip II because of its geographic center in the Iberian Peninsula, neutral distance from regional noble factions, and clean water supply from the Sierra de Guadarrama.",
      formerCapitals: [
        { city: "Toledo", era: "542 – 1561", reason: "Historic Visigothic and Castilian imperial seat." },
        { city: "Valladolid", era: "1601 – 1606", reason: "Brief court relocation by Duke of Lerma under Philip III." },
        { city: "Córdoba", era: "756 – 1031", reason: "Capital of the Islamic Caliphate of Córdoba." }
      ],
      keyMilestones: [
        { year: "1561", title: "Philip II Relocation", description: "Royal court transfers permanently from Toledo to Madrid." },
        { year: "1819", title: "Prado Museum Opens", description: "Establishes Madrid as a European art capital." },
        { year: "1936 – 1939", title: "Siege of Madrid", description: "Defended during the Spanish Civil War." }
      ]
    },
    facts: {
      population: 47400000,
      capitalPopulation: 3330000,
      metroPopulation: 6700000,
      landArea: 505990,
      elevation: 667,
      coordinates: { lat: 40.4168, lng: -3.7038 },
      currency: "Euro (€, EUR)",
      officialLanguages: ["Spanish (Castilian)"],
      landmarks: ["Royal Palace of Madrid", "Prado Museum", "Plaza Mayor", "Retiro Park", "Puerta del Sol"]
    },
    trivia: [
      {
        question: "Which Spanish king declared Madrid the permanent royal capital in 1561?",
        options: ["Ferdinand II", "Philip II", "Charles V", "Alfonso XIII"],
        correct: 1,
        explanation: "King Philip II chose Madrid due to its central geographical position on the Iberian Peninsula."
      },
      {
        question: "Which historic city served as the capital of Castile prior to Madrid's selection?",
        options: ["Seville", "Barcelona", "Toledo", "Granada"],
        correct: 2,
        explanation: "Toledo was the spiritual and political capital of Castile for centuries before 1561."
      }
    ]
  },
  {
    id: "zaf",
    name: "South Africa",
    officialName: "Republic of South Africa",
    flagEmoji: "🇿🇦",
    continent: "Africa",
    subregion: "Southern Africa",
    capital: {
      name: "Pretoria / Cape Town / Bloemfontein",
      nativeName: "Tshwane / Kaapstad",
      establishedYear: 1910,
      type: "Political Compromise",
      pronunciation: "pri-tor-ee-uh"
    },
    history: {
      origin: "South Africa is unique in having **three official capital cities**, established upon the Union of South Africa in 1910 to distribute power among former British colonies and Boer republics.",
      whyCapital: "Pretoria is the **Executive Capital** (seat of President and Cabinet). Cape Town is the **Legislative Capital** (seat of Parliament). Bloemfontein is the **Judicial Capital** (seat of Supreme Court of Appeal).",
      formerCapitals: [
        { city: "Pietermaritzburg", era: "1839 – 1902", reason: "Capital of Boer Republic of Natalia." }
      ],
      keyMilestones: [
        { year: "1910", title: "Union of South Africa", description: "Three-capital compromise adopted in South Africa Act." },
        { year: "1994", title: "End of Apartheid", description: "Nelson Mandela inaugurated as President at Union Buildings in Pretoria." }
      ]
    },
    facts: {
      population: 60000000,
      capitalPopulation: 2470000,
      metroPopulation: 4700000,
      landArea: 1221037,
      elevation: 1339,
      coordinates: { lat: -25.7479, lng: 28.2293 },
      currency: "South African Rand (R, ZAR)",
      officialLanguages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sotho + 7 others"],
      landmarks: ["Union Buildings (Pretoria)", "Table Mountain (Cape Town)", "Supreme Court (Bloemfontein)", "Robben Island"]
    },
    trivia: [
      {
        question: "South Africa is the only nation in the world with how many official capital cities?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "South Africa has 3 official capitals: Pretoria (Executive), Cape Town (Legislative), and Bloemfontein (Judicial)."
      },
      {
        question: "Which South African city hosts the national Parliament?",
        options: ["Pretoria", "Johannesburg", "Cape Town", "Durban"],
        correct: 2,
        explanation: "Cape Town serves as South Africa's Legislative capital."
      }
    ]
  },
  {
    id: "arg",
    name: "Argentina",
    officialName: "Argentine Republic",
    flagEmoji: "🇦🇷",
    continent: "South America",
    subregion: "Latin America",
    capital: {
      name: "Buenos Aires",
      nativeName: "Ciudad Autónoma de Buenos Aires",
      establishedYear: 1536,
      type: "Historical Relocation",
      pronunciation: "bway-nohs eye-res"
    },
    history: {
      origin: "Founded twice: first in 1536 by Pedro de Mendoza, then refounded in 1580 by Juan de Garay. Situated on the western shore of the Río de la Plata estuary.",
      whyCapital: "Became capital of Viceroyalty of the Río de la Plata in 1776 and federal capital in 1880 due to its port controlling international beef, leather, and agricultural trade.",
      formerCapitals: [
        { city: "Paraná", era: "1853 – 1861", reason: "Capital of Argentine Confederation while Buenos Aires seceded." }
      ],
      keyMilestones: [
        { year: "1810", title: "May Revolution", description: "Establishment of first local government Independent of Spain." },
        { year: "1880", title: "Federalization", description: "Buenos Aires declared autonomous Federal District." }
      ]
    },
    facts: {
      population: 46000000,
      capitalPopulation: 3120000,
      metroPopulation: 15300000,
      landArea: 2780400,
      elevation: 25,
      coordinates: { lat: -34.6037, lng: -58.3816 },
      currency: "Argentine Peso ($, ARS)",
      officialLanguages: ["Spanish"],
      landmarks: ["Casa Rosada", "Obelisco de Buenos Aires", "Teatro Colón", "La Boca & Caminito", "Recoleto Cemetery"]
    },
    trivia: [
      {
        question: "What is the famous pink executive mansion of the President of Argentina called?",
        options: ["Casa Blanca", "Casa Rosada", "Palacio de Mayo", "Quinta de Olivos"],
        correct: 1,
        explanation: "La Casa Rosada ('Pink House') is the iconic executive office of the Argentine President."
      }
    ]
  },
  {
    id: "mex",
    name: "Mexico",
    officialName: "United Mexican States",
    flagEmoji: "🇲🇽",
    continent: "North America",
    subregion: "Latin America",
    capital: {
      name: "Mexico City",
      nativeName: "Ciudad de México (Tenochtitlan)",
      establishedYear: 1325,
      type: "Ancient",
      pronunciation: "meh-hee-koh seh-tee"
    },
    history: {
      origin: "Founded in 1325 as Tenochtitlan by the Aztecs (Mexica) on an island in Lake Texcoco after observing an eagle devouring a snake on a nopal cactus.",
      whyCapital: "Conquered by Hernán Cortés in 1521 and rebuilt as capital of the Viceroyalty of New Spain, inheriting ancient Mesoamerican imperial prestige.",
      formerCapitals: [],
      keyMilestones: [
        { year: "1325", title: "Founding of Tenochtitlan", description: "Aztec capital established on Lake Texcoco island." },
        { year: "1521", title: "Spanish Conquest", description: "Fall of Tenochtitlan; rebuilt as Mexico City." },
        { year: "1821", title: "Mexican Independence", description: "City becomes capital of independent Empire and Republic." }
      ]
    },
    facts: {
      population: 128000000,
      capitalPopulation: 9200000,
      metroPopulation: 21800000,
      landArea: 1964375,
      elevation: 2240,
      coordinates: { lat: 19.4326, lng: -99.1332 },
      currency: "Mexican Peso ($, MXN)",
      officialLanguages: ["Spanish", "68 Indigenous Languages"],
      landmarks: ["Zócalo Plaza", "Templo Mayor", "Chapultepec Castle", "Palacio de Bellas Artes", "Anthropology Museum"]
    },
    trivia: [
      {
        question: "What was the ancient Aztec name for Mexico City prior to Spanish conquest?",
        options: ["Teotihuacan", "Tenochtitlan", "Tikal", "Cholula"],
        correct: 1,
        explanation: "Mexico City was built directly over Tenochtitlan, founded in 1325."
      }
    ]
  },
  {
    id: "sau",
    name: "Saudi Arabia",
    officialName: "Kingdom of Saudi Arabia",
    flagEmoji: "🇸🇦",
    continent: "Asia",
    subregion: "Middle East",
    capital: {
      name: "Riyadh",
      nativeName: "الرياض (Ar-Riyāḍ)",
      establishedYear: 1824,
      type: "Historical Relocation",
      pronunciation: "ree-yahd"
    },
    history: {
      origin: "Meaning 'The Gardens' in Arabic due to fertile seasonal wadis. Selected as capital of the Second Saudi State by Imam Turki ibn Abdallah in 1824.",
      whyCapital: "Historical stronghold of the House of Saud. King Abdulaziz (Ibn Saud) stormed Masmak Fortress in 1902, launching the unification of modern Saudi Arabia.",
      formerCapitals: [
        { city: "Diriyah", era: "1744 – 1818", reason: "First Saudi State capital; destroyed by Ottoman-Egyptian forces." }
      ],
      keyMilestones: [
        { year: "1902", title: "Battle of Riyadh", description: "Ibn Saud captures Masmak Fortress." },
        { year: "1932", title: "Kingdom Unified", description: "Riyadh proclaimed capital of unified Kingdom of Saudi Arabia." }
      ]
    },
    facts: {
      population: 36000000,
      capitalPopulation: 7600000,
      metroPopulation: 7600000,
      landArea: 2149690,
      elevation: 612,
      coordinates: { lat: 24.7136, lng: 46.6753 },
      currency: "Saudi Riyal (﷼, SAR)",
      officialLanguages: ["Arabic"],
      landmarks: ["Kingdom Centre Tower", "Masmak Fortress", "At-Turaif (Diriyah)", "Al Faisaliyah Centre"]
    },
    trivia: [
      {
        question: "What historic mudbrick fortress in Riyadh was captured by Ibn Saud in 1902 to reclaim his family legacy?",
        options: ["Masmak Fortress", "Al-Ula Citadel", "Qasr al-Hokm", "Murabba Palace"],
        correct: 0,
        explanation: "The capture of Masmak Fortress in 1902 marked the founding event of modern Saudi Arabia."
      }
    ]
  },
  {
    id: "krw",
    name: "South Korea",
    officialName: "Republic of Korea",
    flagEmoji: "🇰🇷",
    continent: "Asia",
    subregion: "East Asia",
    capital: {
      name: "Seoul",
      nativeName: "서울 (Seoul)",
      establishedYear: 1394,
      type: "Historical Relocation",
      pronunciation: "sut-ool"
    },
    history: {
      origin: "Founded as Hanyang in 1394 by King Taejo, founder of the Joseon Dynasty. Surrounded by four protective mountains along the Han River.",
      whyCapital: "Chosen for its central location on the Korean Peninsula, feng shui (Pungsu-jiri) harmony, and Han River transportation access.",
      formerCapitals: [
        { city: "Gyeongju", era: "57 BC – 935 AD", reason: "Ancient capital of Silla Kingdom." },
        { city: "Kaesong", era: "919 – 1392", reason: "Capital of Goryeo Kingdom." },
        { city: "Sejong City", era: "2012 – Present", reason: "De facto administrative secondary capital created to decentralize government." }
      ],
      keyMilestones: [
        { year: "1394", title: "Joseon Capital Founding", description: "Hanyang designated capital; Gyeongbokgung Palace built." },
        { year: "1948", title: "Republic of Korea Founded", description: "Seoul named capital of independent South Korea." },
        { year: "1988", title: "Seoul Summer Olympics", description: "Catalyzed modern global economic emergence." }
      ]
    },
    facts: {
      population: 51700000,
      capitalPopulation: 9500000,
      metroPopulation: 25600000,
      landArea: 100210,
      elevation: 38,
      coordinates: { lat: 37.5665, lng: 126.9780 },
      currency: "South Korean Won (₩, KRW)",
      officialLanguages: ["Korean"],
      landmarks: ["Gyeongbokgung Palace", "N Seoul Tower", "Bukchon Hanok Village", "Lotte World Tower", "Dongdaemun Design Plaza"]
    },
    trivia: [
      {
        question: "What was Seoul named when it became the capital of the Joseon Dynasty in 1394?",
        options: ["Hanyang", "Gyeongju", "Kaesong", "Busan"],
        correct: 0,
        explanation: "Seoul was named Hanyang (and later Hanseong) during the Joseon Dynasty."
      }
    ]
  }
];

export const CAPITAL_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "753 BC",
    country: "Ancient Rome",
    title: "Founding of Rome",
    description: "Romulus establishes Rome on the Palatine Hill, creating the epicenter of Roman civilization.",
    tag: "Ancient"
  },
  {
    year: "330 AD",
    country: "Roman Empire",
    title: "Rome to Constantinople",
    description: "Emperor Constantine moves capital of Roman Empire to Byzantium, renaming it Constantinople (modern Istanbul).",
    tag: "Ancient"
  },
  {
    year: "794 AD",
    country: "Japan",
    title: "Nara to Kyoto (Heian-kyō)",
    description: "Emperor Kanmu relocates court to Heian-kyō (Kyoto) to escape influence of Buddhist monasteries in Nara.",
    tag: "Medieval"
  },
  {
    year: "1421",
    country: "China (Ming Dynasty)",
    title: "Nanjing to Beijing",
    description: "Emperor Yongle completes the Forbidden City and shifts capital north to Beijing.",
    tag: "Dynastic"
  },
  {
    year: "1561",
    country: "Spain",
    title: "Toledo to Madrid",
    description: "King Philip II transfers the Spanish royal court to the geographically central village of Madrid.",
    tag: "Imperial"
  },
  {
    year: "1790",
    country: "United States",
    title: "New York / Philly to Washington D.C.",
    description: "Residence Act establishes permanent federal territory on Potomac River as political compromise.",
    tag: "Planned Capital"
  },
  {
    year: "1868",
    country: "Japan",
    title: "Kyoto to Tokyo (Edo)",
    description: "Emperor Meiji moves imperial court to Edo during restoration, renaming city Tokyo ('Eastern Capital').",
    tag: "Modernization"
  },
  {
    year: "1911",
    country: "British India",
    title: "Calcutta to New Delhi",
    description: "King George V announces moving British Indian capital to custom-designed Lutyens' New Delhi.",
    tag: "Colonial Era"
  },
  {
    year: "1913",
    country: "Australia",
    title: "Selection of Canberra",
    description: "Canberra chosen as new capital site between rival cities Sydney and Melbourne.",
    tag: "Compromise"
  },
  {
    year: "1923",
    country: "Turkey",
    title: "Istanbul to Ankara",
    description: "Atatürk moves republic capital inland to Anatolian Ankara away from imperial Ottoman past.",
    tag: "Republican Era"
  },
  {
    year: "1960",
    country: "Brazil",
    title: "Rio de Janeiro to Brasília",
    description: "President Kubitschek inaugurates hyper-modernist planned capital in central savannah plateau.",
    tag: "Modern Planned"
  },
  {
    year: "1991",
    country: "Nigeria",
    title: "Lagos to Abuja",
    description: "Nigeria moves capital to central planned territory of Abuja to foster ethnic neutrality.",
    tag: "Planned Capital"
  },
  {
    year: "1997",
    country: "Kazakhstan",
    title: "Almaty to Astana",
    description: "Kazakhstan shifts capital north to Astana to escape seismic hazards and stimulate steppe region.",
    tag: "Modern Planned"
  },
  {
    year: "2005",
    country: "Myanmar",
    title: "Yangon to Naypyidaw",
    description: "Military government abruptly transfers all ministries 320km north to purpose-built Naypyidaw.",
    tag: "Strategic Relocation"
  }
];
