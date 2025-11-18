import { Ethnicity } from '@/types/ethnicity';

export type Region = {
  id: string;
  name: string;
  /**
   * Very lightweight rectangular bounds for fast lookup.
   * This is intentionally approximate, not for legal borders.
   */
  bounds: {
    minLng: number;
    maxLng: number;
    minLat: number;
    maxLat: number;
  };
  ethnicities: Ethnicity[];
};

export const regions: Region[] = [
  {
    id: 'israel_core',
    name: 'Israel & Palestinian Territories (Core)',
    bounds: {
      minLng: 34.0,
      maxLng: 36.0,
      minLat: 29.0,
      maxLat: 33.7
    },
    ethnicities: [
      {
        id: 'israeli_jews',
        ethnicityName: 'Israeli Jews',
        region: 'State of Israel (core populated areas)',
        fact1:
          'Israeli Jews form the majority population in Israel, combining Ashkenazi, Mizrahi, Sephardi, Ethiopian, and Russian-speaking communities.',
        fact2:
          'Hebrew language revival, military service, and layered diaspora histories strongly shape Israeli Jewish identity.',
        share: 0.75
      },
      {
        id: 'palestinian_arabs',
        ethnicityName: 'Palestinian Arabs (Citizens of Israel)',
        region: 'Arab towns and mixed cities within Israel',
        fact1:
          'Palestinian Arabs who are citizens of Israel maintain Arabic language, local village networks, and urban communities.',
        fact2:
          'They navigate dual identities, participating in Israeli civic life while maintaining distinct Palestinian cultural traditions.',
        share: 0.2
      }
    ]
  },
  {
    id: 'palestine_wb_gaza',
    name: 'West Bank & Gaza',
    bounds: {
      minLng: 34.0,
      maxLng: 36.0,
      minLat: 31.0,
      maxLat: 32.8
    },
    ethnicities: [
      {
        id: 'palestinian_wb_gaza',
        ethnicityName: 'Palestinians',
        region: 'West Bank and Gaza Strip',
        fact1:
          'Palestinians in the West Bank and Gaza maintain dense village, refugee camp, and urban networks shaped by displacement and occupation.',
        fact2:
          'Olive harvests, tātreez embroidery, and extended family structures remain core to Palestinian daily life in the territories.',
        share: 0.9
      }
    ]
  },
  {
    id: 'us_south_texas',
    name: 'South Texas (US-Mexico Borderlands)',
    bounds: {
      minLng: -106.7,
      maxLng: -93.5,
      minLat: 25.0,
      maxLat: 30.5
    },
    ethnicities: [
      {
        id: 'mexican_american_south_tx',
        ethnicityName: 'Mexican / Hispanic Americans',
        region: 'South Texas borderlands and Rio Grande Valley',
        fact1:
          'South Texas has majority Mexican American communities with deep cross-border kinship and migration histories.',
        fact2:
          'Spanglish, conjunto and Tejano music, and shared festivals across the border shape everyday Hispanic culture in the region.',
        share: 0.7
      },
      {
        id: 'anglo_texan_south_tx',
        ethnicityName: 'Anglo Texans',
        region: 'South Texas ranching towns and suburbs',
        fact1:
          'Anglo Texans in the region often trace settler roots to cattle ranching, oil development, and frontier expansion.',
        fact2:
          'Rodeo culture, Protestant church life, and barbecue traditions are strong identity markers for many Anglo Texans.',
        share: 0.25
      }
    ]
  },
  {
    id: 'us_midwest_upper',
    name: 'Upper Midwest',
    bounds: {
      minLng: -97.0,
      maxLng: -87.0,
      minLat: 43.0,
      maxLat: 49.0
    },
    ethnicities: [
      {
        id: 'upper_midwest_white',
        ethnicityName: 'Upper Midwest White Americans',
        region: 'Upper Midwest (Minnesota, Wisconsin, Michigan)',
        fact1:
          'Upper Midwest white Americans often trace ancestry to German, Scandinavian, and other Northern European immigrant communities.',
        fact2:
          'Lutheran churches, Scandinavian festivals, and strong community traditions shape Upper Midwest identity.',
        share: 0.85,
        population: '≈ 12M',
        dominantReligion: 'Lutheranism / Catholicism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'upper_midwest_african_american',
        ethnicityName: 'Upper Midwest African Americans',
        region: 'Upper Midwest cities (Minneapolis, Milwaukee, Detroit)',
        fact1:
          'Upper Midwest African Americans often trace roots to the Great Migration from the rural South to industrial cities.',
        fact2:
          'Urban neighborhoods, gospel music, and strong church communities remain central to many Upper Midwest Black communities.',
        share: 0.08,
        population: '≈ 1.1M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'us_midwest_central',
    name: 'Central Midwest',
    bounds: {
      minLng: -95.0,
      maxLng: -87.0,
      minLat: 38.0,
      maxLat: 43.0
    },
    ethnicities: [
      {
        id: 'central_midwest_white',
        ethnicityName: 'Central Midwest White Americans',
        region: 'Central Midwest (Iowa, Illinois, Missouri)',
        fact1:
          'Central Midwest white Americans often trace ancestry to German, Irish, and other European immigrant communities.',
        fact2:
          'Agricultural traditions, county fairs, and church-based community life are central to many Central Midwest cultures.',
        share: 0.78,
        population: '≈ 15M',
        dominantReligion: 'Catholicism / Protestantism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'central_midwest_african_american',
        ethnicityName: 'Central Midwest African Americans',
        region: 'Central Midwest cities (Chicago, St. Louis, Kansas City)',
        fact1:
          'Central Midwest African Americans often trace roots to the Great Migration from the rural South to industrial cities.',
        fact2:
          'Urban neighborhoods, blues music, and strong church communities remain central to many Central Midwest Black communities.',
        share: 0.14,
        population: '≈ 2.7M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'us_southwest',
    name: 'US Southwest',
    bounds: {
      minLng: -120.0,
      maxLng: -103.0,
      minLat: 31.0,
      maxLat: 37.0
    },
    ethnicities: [
      {
        id: 'southwest_white',
        ethnicityName: 'Southwest White Americans',
        region: 'US Southwest (Arizona, New Mexico, Nevada)',
        fact1:
          'Southwest white Americans include diverse European heritage and retirees drawn to the region\'s climate.',
        fact2:
          'Desert lifestyle, outdoor recreation, and maintaining European cultural traditions.',
        share: 0.65,
        population: '≈ 8M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'southwest_hispanic',
        ethnicityName: 'Southwest Hispanic/Latino',
        region: 'Southwest Hispanic communities (Mexican, Central American)',
        fact1:
          'Southwest Hispanics maintain Spanish language, diverse Latin American cultures, and strong community networks.',
        fact2:
          'Migration from Mexico and Central America, maintaining Hispanic identity and cultural traditions.',
        share: 0.28,
        population: '≈ 3.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'us_southeast',
    name: 'US Southeast',
    bounds: {
      minLng: -90.0,
      maxLng: -75.0,
      minLat: 30.0,
      maxLat: 36.0
    },
    ethnicities: [
      {
        id: 'southeast_white',
        ethnicityName: 'Southeast White Americans',
        region: 'US Southeast (Alabama, Mississippi, Georgia, South Carolina)',
        fact1:
          'Southeast white Americans often trace ancestry to British, Irish, and other European immigrant communities.',
        fact2:
          'Southern traditions, church-based community life, and maintaining European cultural heritage.',
        share: 0.62,
        population: '≈ 18M',
        dominantReligion: 'Protestantism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'southeast_african_american',
        ethnicityName: 'Southeast African Americans',
        region: 'Southeast African American communities',
        fact1:
          'Southeast African Americans maintain deep roots in the region, with many tracing ancestry to slavery and Reconstruction.',
        fact2:
          'Gospel music, strong church communities, and maintaining Black cultural traditions shape Southeast Black identity.',
        share: 0.32,
        population: '≈ 9.3M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'western_europe_core',
    name: 'Western Europe Core',
    bounds: {
      minLng: -10.0,
      maxLng: 20.0,
      minLat: 41.0,
      maxLat: 60.0
    },
    ethnicities: [
      {
        id: 'western_europeans',
        ethnicityName: 'Western Europeans',
        region:
          'France, Germany, Benelux, UK, Ireland, Spain, Portugal, Italy (core areas)',
        fact1:
          'Western Europeans encompass diverse national groups shaped by Roman, medieval, and industrial histories.',
        fact2:
          'Dense cities, welfare states, and strong regional cultures coexist across Western Europe’s mosaic of identities.',
        share: 0.75
      },
      {
        id: 'maghrebi_diaspora_west_eu',
        ethnicityName: 'Maghrebi Diaspora Communities',
        region: 'North African diaspora in France, Spain, Belgium, and elsewhere',
        fact1:
          'Maghrebi diaspora populations bring Amazigh and Arab cultural traditions into European urban neighborhoods.',
        fact2:
          'Mosques, cafés, and transnational media connect youth culture across North Africa and European cities.',
        share: 0.2
      }
    ]
  },
  // South Asia - Exactly 32 granular regions with population and TFR data
  // Punjab split into 4 regions (2 Pakistani Punjab + 2 Indian Punjab) as requested
  {
    id: 'south_asia_karachi_urban',
    name: 'Karachi Metropolitan Region',
    bounds: {
      minLng: 66.8,
      maxLng: 68.6,
      minLat: 24.6,
      maxLat: 25.8
    },
    ethnicities: [
      {
        id: 'karachi_muhajir_communities',
        ethnicityName: 'Muhajir Communities (Karachi)',
        region: 'Inner-city and suburban Karachi neighborhoods',
        fact1:
          'Karachi hosts large Urdu-speaking Muhajir communities whose families migrated from many parts of India after Partition.',
        fact2:
          'Apartment living, dense markets, and party-based urban politics are key features of Muhajir life in Karachi.',
        share: 0.4,
        population: '≈ 7.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'karachi_sindhi_baluchi_mixtures',
        ethnicityName: 'Sindhi and Baloch Neighborhoods',
        region: 'Older quarters and peripheral districts of Karachi',
        fact1:
          'Sindhi and Baloch families in Karachi connect port work and informal settlements with ancestral villages in the interior.',
        fact2:
          'Informal housing, dock work, and village visits during holidays keep urban and rural worlds tightly linked.',
        share: 0.25,
        population: '≈ 4.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.2'
      },
      {
        id: 'karachi_pakhtun_migrants',
        ethnicityName: 'Pakhtun Migrant Workers',
        region: 'Transport hubs and construction corridors in Karachi',
        fact1:
          'Many Pashto-speaking migrants from Khyber Pakhtunkhwa and Afghanistan work driving trucks, doing construction, and running small shops.',
        fact2:
          'Long-distance travel, remittances, and neighborhood mosques are central to Pakhtun life in Karachi.',
        share: 0.2,
        population: '≈ 3.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'south_asia_lahore_urban',
    name: 'Lahore Metropolitan Region (Pakistan Punjab)',
    bounds: {
      minLng: 73.8,
      maxLng: 74.8,
      minLat: 31.2,
      maxLat: 31.8
    },
    ethnicities: [
      {
        id: 'lahori_punjabis',
        ethnicityName: 'Lahori Punjabis',
        region: 'City of Lahore and its peri-urban belt',
        fact1:
          'Lahori Punjabis inhabit a major cultural and educational center known for food streets, universities, and Sufi shrines.',
        fact2:
          'Tea stalls, literary festivals, and cricket culture mark everyday life in Lahore across class boundaries.',
        share: 0.7,
        population: '≈ 12M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.1'
      },
      {
        id: 'lahore_urdu_speakers',
        ethnicityName: 'Urdu-speaking Communities in Lahore',
        region: 'Lahore neighborhoods with Muhajir and other Urdu-speaking populations',
        fact1:
          'Urdu-speaking families in Lahore maintain connections to Partition-era migrations and contemporary urban culture.',
        fact2:
          'Educational institutions, media industries, and mixed linguistic neighborhoods characterize Lahore\'s Urdu-speaking communities.',
        share: 0.2,
        population: '≈ 3.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.9'
      }
    ]
  },
  {
    id: 'south_asia_pakistani_punjab_rural',
    name: 'Rural Pakistani Punjab (Central & Southern)',
    bounds: {
      minLng: 71.5,
      maxLng: 75.0,
      minLat: 30.0,
      maxLat: 32.5
    },
    ethnicities: [
      {
        id: 'pakistani_punjab_rural_muslims',
        ethnicityName: 'Rural Punjabi Muslims (Pakistan)',
        region: 'Canal-irrigated villages and small towns of central and southern Pakistani Punjab',
        fact1:
          'Canal-irrigated villages in Pakistani Punjab combine wheat and rice agriculture with remittances from overseas workers.',
        fact2:
          'Biradari councils, mosque networks, and seasonal fairs structure social and political life in the countryside.',
        share: 0.75,
        population: '≈ 45M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.4'
      },
      {
        id: 'pakistani_punjab_saraiki',
        ethnicityName: 'Saraiki-speaking Communities',
        region: 'Southern Punjab districts with Saraiki language dominance',
        fact1:
          'Saraiki speakers live between central Punjab and Sindh, maintaining dialects and cultural practices influenced by both regions.',
        fact2:
          'Date gardens, devotional music, and long-distance seasonal migration for work are common elements of Saraiki life.',
        share: 0.2,
        population: '≈ 12M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'south_asia_indian_punjab_amritsar',
    name: 'Indian Punjab - Amritsar & Central Districts',
    bounds: {
      minLng: 74.5,
      maxLng: 75.5,
      minLat: 30.5,
      maxLat: 31.8
    },
    ethnicities: [
      {
        id: 'sikh_punjabis_amritsar',
        ethnicityName: 'Sikh Punjabis (Amritsar Region)',
        region: 'Amritsar and central districts of Indian Punjab',
        fact1:
          'Sikh Punjabis maintain a religious and cultural tradition rooted in the teachings of the Sikh Gurus and the history of the Khalsa.',
        fact2:
          'Gurdwara community kitchens, turban-wearing practices, and strong diasporic networks frame Sikh social and spiritual life.',
        share: 0.65,
        population: '≈ 12M',
        dominantReligion: 'Sikhism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'hindu_punjabis_amritsar',
        ethnicityName: 'Hindu Punjabis (Central Punjab)',
        region: 'Hindu-majority neighborhoods in central Indian Punjab',
        fact1:
          'Hindu Punjabis often trace histories through Partition migrations and new urban middle-class neighborhoods.',
        fact2:
          'Entrepreneurship, Bollywood music, and elaborate wedding culture are prominent features of Hindu Punjabi identity.',
        share: 0.25,
        population: '≈ 4.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  {
    id: 'south_asia_indian_punjab_malwa',
    name: 'Indian Punjab - Malwa Region (South)',
    bounds: {
      minLng: 75.0,
      maxLng: 76.5,
      minLat: 29.5,
      maxLat: 31.0
    },
    ethnicities: [
      {
        id: 'sikh_punjabis_malwa',
        ethnicityName: 'Sikh Punjabis (Malwa Region)',
        region: 'Southern districts of Indian Punjab including Ludhiana and Patiala',
        fact1:
          'Malwa region Sikhs combine agricultural prosperity with industrial development and strong political participation.',
        fact2:
          'Agricultural cooperatives, gurdwara networks, and diaspora remittances shape economic and social life in Malwa.',
        share: 0.7,
        population: '≈ 10M',
        dominantReligion: 'Sikhism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'hindu_punjabis_malwa',
        ethnicityName: 'Hindu Punjabis (Malwa)',
        region: 'Hindu communities in southern Punjab towns and cities',
        fact1:
          'Hindu Punjabis in Malwa participate in trade, education, and service sectors while maintaining cultural ties to broader North India.',
        fact2:
          'Temple festivals, business networks, and educational institutions are central to Hindu Punjabi life in the region.',
        share: 0.25,
        population: '≈ 3.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'south_asia_islamabad_rawalpindi',
    name: 'Islamabad-Rawalpindi Twin Cities',
    bounds: {
      minLng: 72.8,
      maxLng: 73.5,
      minLat: 33.4,
      maxLat: 33.8
    },
    ethnicities: [
      {
        id: 'islamabad_urban_migrants',
        ethnicityName: 'Islamabad Urban Migrants',
        region: 'Capital region neighborhoods and satellite towns',
        fact1:
          'Islamabad and its twin city Rawalpindi draw civil servants, students, and service workers from across Pakistan.',
        fact2:
          'New housing sectors, security zones, and hill trails shape the daily geography of this planned capital region.',
        share: 0.7,
        population: '≈ 2.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.9'
      }
    ]
  },
  {
    id: 'south_asia_peshawar_valley',
    name: 'Peshawar Valley & Khyber Pass',
    bounds: {
      minLng: 71.0,
      maxLng: 72.5,
      minLat: 33.5,
      maxLat: 35.0
    },
    ethnicities: [
      {
        id: 'peshawar_pashtuns',
        ethnicityName: 'Peshawari Pashtuns',
        region: 'City of Peshawar and surrounding plains',
        fact1:
          'Peshawar has long linked Pashtun highlands to South Asian markets through caravan trade and now highway transport.',
        fact2:
          'Bazaar districts, roadside eateries, and refugee settlements from Afghanistan contribute to a layered urban texture.',
        share: 0.75,
        population: '≈ 4.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.6'
      }
    ]
  },
  {
    id: 'south_asia_sindh_interior',
    name: 'Interior Sindh (Hyderabad & Larkana)',
    bounds: {
      minLng: 67.5,
      maxLng: 69.5,
      minLat: 25.0,
      maxLat: 27.0
    },
    ethnicities: [
      {
        id: 'sindhi_interior_communities',
        ethnicityName: 'Sindhi Interior Communities',
        region: 'Towns and villages of interior Sindh',
        fact1:
          'Sindhi-speaking communities trace urban histories to Indus Valley civilizations and later Sufi, Hindu, and Islamic trading centers.',
        fact2:
          'Ajrak textiles, shrine pilgrimages, and agricultural livelihoods define much of interior Sindhi life.',
        share: 0.65,
        population: '≈ 12M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.3'
      }
    ]
  },
  {
    id: 'south_asia_thar_desert',
    name: 'Thar Desert (Pakistan-India Border)',
    bounds: {
      minLng: 68.5,
      maxLng: 71.0,
      minLat: 24.0,
      maxLat: 26.5
    },
    ethnicities: [
      {
        id: 'thari_hindu_communities',
        ethnicityName: 'Thari Hindu Communities',
        region: 'Villages of the Thar Desert spanning Pakistan and India',
        fact1:
          'Thari Hindus keep herds of camels, goats, and sheep while cultivating hardy crops in a low-rainfall environment.',
        fact2:
          'Folk songs, colorful dress, and shared shrines reinforce community ties across sparse settlements.',
        share: 0.4,
        population: '≈ 2.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'muslim_thari_pastoralists',
        ethnicityName: 'Muslim Thari Pastoralists',
        region: 'Muslim-majority hamlets in the Thar region',
        fact1:
          'Muslim Thari pastoralists move animals seasonally to scattered grazing patches and ephemeral water sources.',
        fact2:
          'Sufi saint veneration and cross-border kinship with Rajasthan are important in local identities.',
        share: 0.35,
        population: '≈ 2M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'south_asia_delhi_ncr',
    name: 'Delhi National Capital Region',
    bounds: {
      minLng: 76.5,
      maxLng: 78.8,
      minLat: 27.5,
      maxLat: 29.5
    },
    ethnicities: [
      {
        id: 'delhi_hindi_speakers',
        ethnicityName: 'Hindi-speaking Delhi Residents',
        region: 'Delhi city and its expanding suburbs',
        fact1:
          'Delhi\'s Hindi-speaking residents include long-settled families and recent migrants from many parts of North India.',
        fact2:
          'Metro lines, informal settlements, and historic monuments sit side by side in Delhi\'s crowded urban landscape.',
        share: 0.45,
        population: '≈ 9M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'delhi_punjabi_migrants',
        ethnicityName: 'Punjabi Migrants in Delhi',
        region: 'Neighborhoods built by post-Partition refugees and later migrants',
        fact1:
          'Punjabi-speaking communities helped build Delhi\'s post-independence commercial and political elite.',
        fact2:
          'Gurdwaras, Punjabi cuisine, and business networks remain highly visible in many parts of the city.',
        share: 0.2,
        population: '≈ 4M',
        dominantReligion: 'Sikhism / Hinduism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'delhi_urdu_speakers',
        ethnicityName: 'Urdu-speaking Communities in Delhi',
        region: 'Historic quarters such as Old Delhi and newer Muslim neighborhoods',
        fact1:
          'Urdu-speaking families in Delhi maintain memories of Mughal and later courtly cultures alongside contemporary struggles over housing and employment.',
        fact2:
          'Mosques, madrasas, and Urdu presses continue to anchor cultural production in parts of the city.',
        share: 0.15,
        population: '≈ 3M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.4'
      }
    ]
  },
  {
    id: 'south_asia_uttar_pradesh_west',
    name: 'Western Uttar Pradesh (Meerut-Agra Corridor)',
    bounds: {
      minLng: 77.0,
      maxLng: 78.5,
      minLat: 27.0,
      maxLat: 28.5
    },
    ethnicities: [
      {
        id: 'western_up_hindus',
        ethnicityName: 'Western UP Hindus',
        region: 'Meerut, Agra, and surrounding districts',
        fact1:
          'Western UP Hindus combine agricultural livelihoods with small-scale industry and service work in growing towns.',
        fact2:
          'Caste-based politics, temple festivals, and migration to Delhi and Mumbai shape social and economic life.',
        share: 0.7,
        population: '≈ 25M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.3'
      },
      {
        id: 'western_up_muslims',
        ethnicityName: 'Western UP Muslims',
        region: 'Muslim-majority towns and villages in western UP',
        fact1:
          'Muslim communities in western UP maintain Urdu and local dialects while engaging in trade, agriculture, and craft work.',
        fact2:
          'Madrasas, Sufi shrines, and participation in electoral politics are central to Muslim public life in the region.',
        share: 0.25,
        population: '≈ 9M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'south_asia_uttar_pradesh_east',
    name: 'Eastern Uttar Pradesh (Lucknow-Varanasi)',
    bounds: {
      minLng: 80.0,
      maxLng: 83.5,
      minLat: 25.0,
      maxLat: 27.5
    },
    ethnicities: [
      {
        id: 'awadhi_hindus',
        ethnicityName: 'Awadhi Hindus',
        region: 'Central Uttar Pradesh around Lucknow and Ayodhya',
        fact1:
          'Awadhi-speaking Hindus inhabit fertile plains along the middle Ganga, with livelihoods tied to farming, small-scale trade, and public employment.',
        fact2:
          'Awadhi cuisine, Urdu-Hindi literary traditions, and pilgrimage circuits around temples and shrines give the region a layered cultural identity.',
        share: 0.5,
        population: '≈ 30M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.4'
      },
      {
        id: 'bhojpuri_hindus',
        ethnicityName: 'Bhojpuri Hindus',
        region: 'Eastern Uttar Pradesh and western Bihar',
        fact1:
          'Bhojpuri-speaking Hindus have contributed massively to overseas migration, creating communities from the Caribbean to Fiji.',
        fact2:
          'Folk songs, seasonal labor migration to cities, and marriage networks linking villages are central to Bhojpuri social life.',
        share: 0.35,
        population: '≈ 21M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'south_asia_bihar_gangetic',
    name: 'Bihar Gangetic Plains',
    bounds: {
      minLng: 84.0,
      maxLng: 87.5,
      minLat: 24.5,
      maxLat: 27.0
    },
    ethnicities: [
      {
        id: 'bihar_hindus',
        ethnicityName: 'Bihar Hindus',
        region: 'Gangetic plains of Bihar',
        fact1:
          'Bihar Hindus combine agricultural work with migration to cities across India for construction, services, and informal sector jobs.',
        fact2:
          'Caste-based politics, local festivals, and remittances from migrant workers shape village and town life.',
        share: 0.7,
        population: '≈ 70M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.6'
      },
      {
        id: 'bihar_muslims',
        ethnicityName: 'Bihar Muslims',
        region: 'Muslim-majority districts and neighborhoods in Bihar',
        fact1:
          'Muslim communities in Bihar maintain Urdu and local dialects while working in agriculture, trade, and urban services.',
        fact2:
          'Madrasas, Sufi shrines, and participation in state politics are important features of Muslim public life.',
        share: 0.2,
        population: '≈ 20M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  {
    id: 'south_asia_rajasthan_marwar',
    name: 'Rajasthan Marwar Region',
    bounds: {
      minLng: 72.0,
      maxLng: 74.5,
      minLat: 25.0,
      maxLat: 27.5
    },
    ethnicities: [
      {
        id: 'rajasthani_marwar',
        ethnicityName: 'Rajasthani Marwar Communities',
        region: 'Desert and semi-arid zones of Rajasthan including Jodhpur',
        fact1:
          'Rajasthani groups include Rajputs, Jats, Meghwals, and many others who have long adapted to arid landscapes through pastoralism and trade.',
        fact2:
          'Fort cities, mirror-work textiles, folk music, and Turban fairs make Rajasthan an iconic symbol of North Indian desert culture.',
        share: 0.8,
        population: '≈ 15M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'south_asia_gujarat_ahmedabad',
    name: 'Gujarat (Ahmedabad & Saurashtra)',
    bounds: {
      minLng: 70.5,
      maxLng: 73.5,
      minLat: 21.5,
      maxLat: 24.5
    },
    ethnicities: [
      {
        id: 'gujarati_patels_traders',
        ethnicityName: 'Gujarati Patels and Trading Castes',
        region: 'Gujarat and migrant communities across western India',
        fact1:
          'Gujarati Patels and related trading castes built extensive business and diaspora networks connecting villages, port cities, and overseas communities.',
        fact2:
          'Vegetarian cuisine, mercantile acumen, and philanthropic support for schools and temples are hallmarks of many Gujarati communities.',
        share: 0.65,
        population: '≈ 35M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.9'
      },
      {
        id: 'gujarati_muslims',
        ethnicityName: 'Gujarati Muslims',
        region: 'Muslim neighborhoods in Gujarat cities and towns',
        fact1:
          'Gujarati Muslims maintain strong trading traditions and participate in both local and global business networks.',
        fact2:
          'Mosques, Sufi shrines, and community organizations play central roles in Gujarati Muslim social life.',
        share: 0.15,
        population: '≈ 8M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'south_asia_mumbai_metro',
    name: 'Mumbai Metropolitan Region',
    bounds: {
      minLng: 72.6,
      maxLng: 73.3,
      minLat: 18.7,
      maxLat: 19.5
    },
    ethnicities: [
      {
        id: 'mumbai_marathis',
        ethnicityName: 'Mumbai Marathis',
        region: 'Old neighborhoods and suburbs within the Mumbai region',
        fact1:
          'Marathi-speaking communities in Mumbai combine older working-class neighborhoods with newer middle-class suburbs.',
        fact2:
          'Ganesh festival processions, local theater, and state politics keep Marathi language visible in the metropolis.',
        share: 0.3,
        population: '≈ 4.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'mumbai_migrant_multitudes',
        ethnicityName: 'Migrant Communities from Across India',
        region: 'Chawl housing, slums, and high-rise enclaves',
        fact1:
          'Millions of migrants from Uttar Pradesh, Bihar, Gujarat, and South India work in services, construction, and entertainment.',
        fact2:
          'Crowded trains, informal work, and multilingual neighborhoods define everyday life for many of these residents.',
        share: 0.5,
        population: '≈ 7.5M',
        dominantReligion: 'Hinduism / Islam',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'south_asia_konkan_coast',
    name: 'Konkan Coast (Maharashtra & Goa)',
    bounds: {
      minLng: 72.5,
      maxLng: 75.0,
      minLat: 14.5,
      maxLat: 18.8
    },
    ethnicities: [
      {
        id: 'konkani_hindus',
        ethnicityName: 'Konkani Hindus',
        region: 'Rural and small-town Konkan belt',
        fact1:
          'Konkani-speaking Hindus maintain coconut and cashew orchards alongside fishing and remittances from Gulf migrants.',
        fact2:
          'Temple festivals, folk theater, and rice-fish meals root families in specific villages even after migration.',
        share: 0.35,
        population: '≈ 3.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'goan_catholics',
        ethnicityName: 'Goan Catholics',
        region: 'Goa\'s coastal and inland villages',
        fact1:
          'Goan Catholics trace lineages through centuries of Portuguese influence, creating distinct naming patterns and parish life.',
        fact2:
          'Konkani liturgy, tiatr theater, and overseas migration to shipping and hospitality jobs shape contemporary Goan Catholic identity.',
        share: 0.25,
        population: '≈ 0.5M',
        dominantReligion: 'Christianity (Catholic)',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'south_asia_karnataka_bangalore_mysore',
    name: 'Karnataka (Bengaluru & Mysore Region)',
    bounds: {
      minLng: 75.5,
      maxLng: 77.8,
      minLat: 11.5,
      maxLat: 13.5
    },
    ethnicities: [
      {
        id: 'bangalore_kannadigas',
        ethnicityName: 'Bengaluru Kannadigas',
        region: 'City of Bengaluru and peri-urban region',
        fact1:
          'Kannada-speaking residents of Bengaluru balance tech-sector jobs with older market and temple neighborhoods.',
        fact2:
          'IT parks, idli stalls, and neighborhood lakes frame daily life in this rapidly growing metropolis.',
        share: 0.25,
        population: '≈ 3.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'bangalore_internal_migrants',
        ethnicityName: 'Internal Migrants to Bengaluru',
        region: 'Construction sites and rental neighborhoods across the city',
        fact1:
          'Workers from North and East India live in dense rental housing while staffing construction, delivery, and service jobs.',
        fact2:
          'Long work hours, limited social services, and informal social networks define many migrant experiences in the city.',
        share: 0.25,
        population: '≈ 3.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'mysore_kannadigas',
        ethnicityName: 'Mysore Region Kannadigas',
        region: 'Mysore and surrounding districts of southern Karnataka',
        fact1:
          'Kannadigas in the Mysore region maintain strong connections to classical music, temple architecture, and royal court traditions.',
        fact2:
          'Sandalwood carving, silk production, and educational institutions shape the cultural and economic landscape.',
        share: 0.45,
        population: '≈ 8M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'south_asia_kerala_state',
    name: 'Kerala State (Malabar & Travancore)',
    bounds: {
      minLng: 74.5,
      maxLng: 77.5,
      minLat: 8.5,
      maxLat: 12.5
    },
    ethnicities: [
      {
        id: 'malayali_hindus_kerala',
        ethnicityName: 'Malayali Hindus',
        region: 'Kerala towns and villages across the state',
        fact1:
          'Malayali Hindus share space with Christian and Muslim neighbors in dense, literate villages and small towns.',
        fact2:
          'Temple festivals, matrilineal descent in some communities, backwater tourism, and state-level politics shape social life.',
        share: 0.4,
        population: '≈ 9M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'malabar_muslims_kerala',
        ethnicityName: 'Malabar Muslims (Mappila)',
        region: 'Northern Kerala coastal belt',
        fact1:
          'Mappila Muslims descend from Arab traders and local converts, with livelihoods in trade, fishing, and Gulf migration.',
        fact2:
          'Mosques, Arabi-Malayalam literary traditions, and overseas remittances are central to Malabar Muslim society.',
        share: 0.25,
        population: '≈ 5.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'kerala_christian_communities',
        ethnicityName: 'Syrian Christian Communities',
        region: 'Central and southern Kerala plantation and backwater areas',
        fact1:
          'Syrian Christian communities trace their origin narratives to early Christian missions on the Malabar Coast.',
        fact2:
          'Rubber plantations, education-focused families, and church-centered social events mark much of community life.',
        share: 0.2,
        population: '≈ 4.5M',
        dominantReligion: 'Christianity (Orthodox / Catholic)',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'south_asia_chennai_urban',
    name: 'Chennai Metropolitan Region',
    bounds: {
      minLng: 80.0,
      maxLng: 80.4,
      minLat: 12.8,
      maxLat: 13.2
    },
    ethnicities: [
      {
        id: 'chennai_tamil_urbanites',
        ethnicityName: 'Chennai Tamil Urbanites',
        region: 'City of Chennai and suburban corridors',
        fact1:
          'Residents of Chennai mix IT and port employment with strong film and classical music scenes.',
        fact2:
          'Auto-rickshaws, beach promenades, and movie posters define much of the city\'s visual culture.',
        share: 0.7,
        population: '≈ 5.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'south_asia_tamil_nadu_interior',
    name: 'Tamil Nadu Interior (Delta & Madurai)',
    bounds: {
      minLng: 77.0,
      maxLng: 80.5,
      minLat: 8.5,
      maxLat: 12.0
    },
    ethnicities: [
      {
        id: 'tamil_interior_communities',
        ethnicityName: 'Tamil Interior Communities',
        region: 'Cauvery Delta and Madurai regions of Tamil Nadu',
        fact1:
          'Tamils maintain one of the world\'s oldest literary traditions and powerful regional nationalism centered on the Tamil language.',
        fact2:
          'Temple festivals, film music, delta agriculture, and a global diaspora of professionals and laborers all contribute to contemporary Tamil identities.',
        share: 0.85,
        population: '≈ 18M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'south_asia_andhra_coastal',
    name: 'Coastal Andhra (Vishakhapatnam-Vijayawada)',
    bounds: {
      minLng: 80.0,
      maxLng: 83.5,
      minLat: 14.5,
      maxLat: 18.5
    },
    ethnicities: [
      {
        id: 'andhra_coastal_telugus',
        ethnicityName: 'Coastal Telugu Communities',
        region: 'Deltaic and coastal districts of Andhra Pradesh',
        fact1:
          'Coastal Telugus cultivate rice and chillies while working in shipping, aquaculture, and government jobs.',
        fact2:
          'Film songs, caste-based politics, and high rates of overseas education tie the region to cities around the world.',
        share: 0.85,
        population: '≈ 25M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'south_asia_telangana_hyderabad',
    name: 'Telangana (Hyderabad & Rural Plateau)',
    bounds: {
      minLng: 77.5,
      maxLng: 80.0,
      minLat: 16.0,
      maxLat: 19.0
    },
    ethnicities: [
      {
        id: 'hyderabadi_urdu_speakers',
        ethnicityName: 'Hyderabadi Urdu-speaking Communities',
        region: 'Old City neighborhoods of Hyderabad',
        fact1:
          'Urdu-speaking residents of Hyderabad inherit legacies from the Nizam\'s court and a long history of Indo-Persian culture.',
        fact2:
          'Biryani, Charminar bazaars, and Deccani Urdu storytelling are distinctive features of Hyderabadi life.',
        share: 0.2,
        population: '≈ 2.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'hyderabad_telugus',
        ethnicityName: 'Hyderabad Telugu Communities',
        region: 'Newer neighborhoods and IT corridors of Hyderabad',
        fact1:
          'Telugu-speaking residents of Hyderabad work in IT, pharmaceuticals, and government services.',
        fact2:
          'Tech parks, shopping malls, and suburban development characterize the expanding metropolitan region.',
        share: 0.25,
        population: '≈ 3M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'telangana_rural_populations',
        ethnicityName: 'Telangana Rural Populations',
        region: 'Dry plateau villages north and east of Hyderabad',
        fact1:
          'Villages in Telangana rely on tank irrigation, remittances, and seasonal migration to cities for work.',
        fact2:
          'Caste panchayats and activist movements have reshaped power balances in many Telangana districts.',
        share: 0.5,
        population: '≈ 20M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'south_asia_west_bengal_kolkata_delta',
    name: 'West Bengal (Kolkata & Sundarbans Delta)',
    bounds: {
      minLng: 88.0,
      maxLng: 89.5,
      minLat: 21.5,
      maxLat: 23.0
    },
    ethnicities: [
      {
        id: 'kolkata_bengali_urbanites',
        ethnicityName: 'Kolkata Bengali Urbanites',
        region: 'Kolkata city and adjacent towns',
        fact1:
          'Residents of Kolkata navigate crowded tram lines, coffeehouse debates, and a deep tradition of literature and theater.',
        fact2:
          'Football fandom, book fairs, and political rallies are part of everyday street life in the city.',
        share: 0.5,
        population: '≈ 5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'sundarbans_delta_communities',
        ethnicityName: 'Sundarbans Delta Communities',
        region: 'Island and riverine villages in the Sundarbans',
        fact1:
          'Families in the Sundarbans manage risk from cyclones and tigers while cultivating rice and gathering forest products.',
        fact2:
          'Boat transport, embankment labor, and religious shrines shared by Hindus and Muslims mark this fragile delta region.',
        share: 0.4,
        population: '≈ 4M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'south_asia_bangladesh_dhaka',
    name: 'Dhaka Metropolitan Region',
    bounds: {
      minLng: 90.2,
      maxLng: 90.6,
      minLat: 23.6,
      maxLat: 23.9
    },
    ethnicities: [
      {
        id: 'dhaka_bengali_muslims',
        ethnicityName: 'Dhaka Bengali Muslims',
        region: 'Dhaka city and expanding metropolitan area',
        fact1:
          'Most residents of Dhaka are Bengali Muslims whose families migrated from villages seeking education, jobs, and urban opportunities.',
        fact2:
          'Garment factories, rickshaw traffic, and dense neighborhoods define the daily rhythm of life in this megacity.',
        share: 0.85,
        population: '≈ 12M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'south_asia_bangladesh_rural',
    name: 'Rural Bangladesh (Central Delta)',
    bounds: {
      minLng: 89.0,
      maxLng: 91.5,
      minLat: 23.0,
      maxLat: 25.0
    },
    ethnicities: [
      {
        id: 'bengali_bangladesh_rural',
        ethnicityName: 'Rural Bengali Muslims (Bangladesh)',
        region: 'Bangladesh river delta and coastal zones',
        fact1:
          'Most residents of Bangladesh are Bengali Muslims whose villages and cities are threaded through by rivers, embankments, and rice paddies.',
        fact2:
          'Cyclone preparedness, garment industry work, and rich traditions of song and storytelling coexist in contemporary Bangladeshi life.',
        share: 0.9,
        population: '≈ 120M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  {
    id: 'south_asia_chittagong_hill_tracts',
    name: 'Chittagong Hill Tracts',
    bounds: {
      minLng: 91.8,
      maxLng: 93.2,
      minLat: 21.5,
      maxLat: 23.5
    },
    ethnicities: [
      {
        id: 'chakma_communities',
        ethnicityName: 'Chakma Communities',
        region: 'Valleys and hill slopes of the Chittagong Hill Tracts',
        fact1:
          'Chakma people practice Buddhism and shifting cultivation while navigating tensions with the Bangladeshi state and settlers.',
        fact2:
          'Monasteries, language activism, and cross-border ties to India and Myanmar define much of Chakma public life.',
        share: 0.35,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism',
        totalFertilityRate: '≈ 2.3'
      },
      {
        id: 'marma_and_other_jumma_groups',
        ethnicityName: 'Marma and Other Jumma Groups',
        region: 'Remote hill villages in southeastern Bangladesh',
        fact1:
          'Marma and other Jumma peoples share cultural links with neighboring Myanmar and maintain Buddhist and Indigenous rituals.',
        fact2:
          'Forest-based livelihoods and political mobilization both respond to pressures from settlement and militarization.',
        share: 0.25,
        population: '≈ 0.3M',
        dominantReligion: 'Buddhism',
        totalFertilityRate: '≈ 2.4'
      }
    ]
  },
  {
    id: 'south_asia_nepal_kathmandu',
    name: 'Kathmandu Valley Region',
    bounds: {
      minLng: 85.1,
      maxLng: 85.6,
      minLat: 27.5,
      maxLat: 27.9
    },
    ethnicities: [
      {
        id: 'urban_newars',
        ethnicityName: 'Urban Newars',
        region: 'Historic city cores of Kathmandu, Patan, and Bhaktapur',
        fact1:
          'Urban Newar communities sustain complex caste hierarchies, artisan guilds, and Buddhist-Hindu temple patronage.',
        fact2:
          'Festival calendars, masked dances, and courtyard-based housing designs continue despite rapid urbanization.',
        share: 0.4,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism / Hinduism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'kathmandu_in_migrants',
        ethnicityName: 'In-migrants to Kathmandu',
        region: 'New neighborhoods on the edges of the valley',
        fact1:
          'Families from all over Nepal move to Kathmandu seeking education, bureaucratic jobs, and access to global markets.',
        fact2:
          'Concrete houses, traffic congestion, and boarding schools reflect the valley\'s transformation into a crowded capital hub.',
        share: 0.4,
        population: '≈ 0.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'south_asia_nepal_interior',
    name: 'Nepal Interior (Terai & Hills)',
    bounds: {
      minLng: 80.5,
      maxLng: 88.0,
      minLat: 26.0,
      maxLat: 29.5
    },
    ethnicities: [
      {
        id: 'terai_madhesi_groups',
        ethnicityName: 'Madhesi Communities of the Terai',
        region: 'Lowland Terai districts along the border with India',
        fact1:
          'Madhesi populations share many linguistic and cultural traits with communities across the border in Bihar and Uttar Pradesh.',
        fact2:
          'Citizenship debates, cross-border marriage, and shared markets give the Terai a fluid and contested sense of belonging.',
        share: 0.35,
        population: '≈ 8M',
        dominantReligion: 'Hinduism / Islam',
        totalFertilityRate: '≈ 2.3'
      },
      {
        id: 'hill_brahmin_chhetri_nepal',
        ethnicityName: 'Hill Brahmin and Chhetri Communities',
        region: 'Central and western hills of Nepal',
        fact1:
          'Hill Brahmin and Chhetri families occupy many positions in government, the army, and education while still maintaining agricultural ties to villages.',
        fact2:
          'Hindu festivals, arranged marriages, and seasonal migration to Gulf labor markets combine in complex ways in many households.',
        share: 0.3,
        population: '≈ 6M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'janajati_hill_groups',
        ethnicityName: 'Janajati Hill Peoples',
        region: 'Tamang, Gurung, Magar, and related communities in central and western hills',
        fact1:
          'Janajati groups historically combined hill agriculture with military recruitment into foreign and national armies.',
        fact2:
          'Chhaupadi debates, local clan councils, and ethnic organizations shape evolving identities among these communities.',
        share: 0.25,
        population: '≈ 5M',
        dominantReligion: 'Hinduism / Buddhism',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'south_asia_assam_valley',
    name: 'Assam Brahmaputra Valley',
    bounds: {
      minLng: 90.5,
      maxLng: 95.0,
      minLat: 25.5,
      maxLat: 27.5
    },
    ethnicities: [
      {
        id: 'assamese_valley_populations',
        ethnicityName: 'Assamese Valley Populations',
        region: 'Brahmaputra valley in Assam',
        fact1:
          'Assamese-speaking valley populations farm tea, rice, and mustard while navigating complex migration and identity politics.',
        fact2:
          'Bihu dance festivals, river island settlements, and mixed Hindu-Muslim neighborhoods are defining features of Assamese society.',
        share: 0.5,
        population: '≈ 15M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.9'
      },
      {
        id: 'assam_bengali_muslims',
        ethnicityName: 'Bengali Muslims in Assam',
        region: 'Riverine and lowland districts of Assam',
        fact1:
          'Bengali-speaking Muslims in Assam include both long-settled communities and more recent migrants from Bangladesh.',
        fact2:
          'Citizenship politics, agricultural work, and integration into Assamese society are ongoing processes.',
        share: 0.3,
        population: '≈ 9M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'south_asia_northeast_india',
    name: 'Northeast India (Nagaland, Manipur, Tripura, Mizoram)',
    bounds: {
      minLng: 91.0,
      maxLng: 96.5,
      minLat: 22.5,
      maxLat: 27.5
    },
    ethnicities: [
      {
        id: 'naga_communities',
        ethnicityName: 'Naga Communities',
        region: 'Village clusters across Nagaland and neighboring states',
        fact1:
          'Naga groups maintain clan-based villages with histories of headhunting that have been reinterpreted through Christian missionization.',
        fact2:
          'Student unions, Baptist churches, and insurgent organizations all play roles in contemporary Naga politics.',
        share: 0.25,
        population: '≈ 2.5M',
        dominantReligion: 'Christianity (Baptist)',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'meitei_valley_population',
        ethnicityName: 'Meitei Valley Population',
        region: 'Imphal valley in Manipur',
        fact1:
          'Meitei society combines Vaishnavite Hindu traditions with local deities and a long history of martial arts and dance.',
        fact2:
          'Conflicts over land and identity between hill and valley communities shape Manipur\'s tense political environment.',
        share: 0.2,
        population: '≈ 1.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.9'
      },
      {
        id: 'tripuri_communities',
        ethnicityName: 'Tripuri Communities',
        region: 'Hill and valley settlements in Tripura',
        fact1:
          'Tripuri groups combine jhum (shifting) cultivation with rubber plantations and wage work in nearby towns.',
        fact2:
          'Rice beer, clan-based rituals, and multi-lingual schooling are common features of Tripuri cultural life.',
        share: 0.15,
        population: '≈ 1M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'mizo_highlanders',
        ethnicityName: 'Mizo Highlanders',
        region: 'Mizoram highlands',
        fact1:
          'Mizo communities in Mizoram are predominantly Christian and maintain strong church-centered social institutions.',
        fact2:
          'Choral singing, youth fellowships, and village councils shape daily life in these hill settlements.',
        share: 0.2,
        population: '≈ 1.2M',
        dominantReligion: 'Christianity (Presbyterian)',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  {
    id: 'south_asia_sri_lanka',
    name: 'Sri Lanka (Sinhalese & Tamil Regions)',
    bounds: {
      minLng: 79.5,
      maxLng: 81.5,
      minLat: 5.5,
      maxLat: 10.0
    },
    ethnicities: [
      {
        id: 'sinhalese_majority',
        ethnicityName: 'Sinhalese',
        region: 'Most districts of Sri Lanka outside concentrated Tamil areas',
        fact1:
          'Sinhalese communities speak Sinhala and practice a form of Theravada Buddhism with distinctive ritual and political histories.',
        fact2:
          'Temple networks, village tanks, and narratives about ancient kingdoms underpin Sinhalese understandings of place and belonging.',
        share: 0.75,
        population: '≈ 16M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 1.9'
      },
      {
        id: 'sri_lankan_tamils',
        ethnicityName: 'Sri Lankan Tamils',
        region: 'Northern and eastern Sri Lanka and diaspora settlements',
        fact1:
          'Sri Lankan Tamils experienced colonially shaped concentration in specific regions and intense civil war and displacement in the late 20th century.',
        fact2:
          'Memorial practices, transnational family ties, and political activism remain central to many Sri Lankan Tamil communities.',
        share: 0.15,
        population: '≈ 2.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  // East Asia - Specific granular regions replacing massive coastal China block
  {
    id: 'china_shanghai_metro',
    name: 'Shanghai Metropolitan Region',
    bounds: {
      minLng: 120.8,
      maxLng: 122.0,
      minLat: 30.7,
      maxLat: 31.8
    },
    ethnicities: [
      {
        id: 'shanghai_han_urban',
        ethnicityName: 'Shanghai Han Chinese',
        region: 'Shanghai city and metropolitan area',
        fact1:
          'Shanghai Han Chinese combine traditional Jiangnan culture with modern international finance and manufacturing.',
        fact2:
          'Bund architecture, xiaolongbao cuisine, and rapid urbanization shape contemporary Shanghai identity.',
        share: 0.85,
        population: '≈ 18M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.7'
      },
      {
        id: 'shanghai_migrants',
        ethnicityName: 'Internal Migrants to Shanghai',
        region: 'Construction and service sectors in Shanghai',
        fact1:
          'Millions of migrants from Anhui, Jiangsu, and other provinces work in construction, manufacturing, and services.',
        fact2:
          'Dormitory housing, remittances, and temporary residency status define many migrant experiences.',
        share: 0.1,
        population: '≈ 2.5M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'china_guangzhou_pearl_river',
    name: 'Guangzhou & Pearl River Delta',
    bounds: {
      minLng: 112.8,
      maxLng: 114.5,
      minLat: 22.5,
      maxLat: 23.8
    },
    ethnicities: [
      {
        id: 'guangzhou_cantonese',
        ethnicityName: 'Cantonese (Guangzhou)',
        region: 'Guangzhou city and Pearl River Delta',
        fact1:
          'Cantonese-speaking Han Chinese maintain distinct linguistic and culinary traditions in the Pearl River Delta.',
        fact2:
          'Dim sum culture, Cantonese opera, and export manufacturing shape daily life in the region.',
        share: 0.7,
        population: '≈ 12M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.8'
      },
      {
        id: 'pearl_river_migrants',
        ethnicityName: 'Migrant Workers (Pearl River Delta)',
        region: 'Factory towns and urban districts',
        fact1:
          'Workers from Hunan, Sichuan, and other provinces staff manufacturing and service industries.',
        fact2:
          'Factory dormitories, weekend markets, and remittances home characterize migrant life.',
        share: 0.25,
        population: '≈ 4.5M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.1'
      }
    ]
  },
  {
    id: 'china_beijing_metro',
    name: 'Beijing Metropolitan Region',
    bounds: {
      minLng: 116.0,
      maxLng: 117.5,
      minLat: 39.5,
      maxLat: 40.5
    },
    ethnicities: [
      {
        id: 'beijing_han_urban',
        ethnicityName: 'Beijing Han Chinese',
        region: 'Beijing city and metropolitan area',
        fact1:
          'Beijing Han Chinese combine imperial capital traditions with modern political and cultural institutions.',
        fact2:
          'Hutong neighborhoods, Peking duck cuisine, and government employment shape Beijing identity.',
        share: 0.8,
        population: '≈ 16M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.7'
      },
      {
        id: 'beijing_manchu_communities',
        ethnicityName: 'Manchu Communities (Beijing)',
        region: 'Historic Manchu neighborhoods in Beijing',
        fact1:
          'Manchu communities in Beijing maintain connections to Qing dynasty heritage and contemporary ethnic identity.',
        fact2:
          'Manchu language revival, traditional festivals, and participation in Beijing cultural life mark community identity.',
        share: 0.05,
        population: '≈ 1M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.8'
      }
    ]
  },
  {
    id: 'china_sichuan_basin',
    name: 'Sichuan Basin (Chengdu Region)',
    bounds: {
      minLng: 103.5,
      maxLng: 105.5,
      minLat: 30.2,
      maxLat: 31.5
    },
    ethnicities: [
      {
        id: 'sichuan_han_basin',
        ethnicityName: 'Sichuan Han Chinese',
        region: 'Chengdu and Sichuan Basin',
        fact1:
          'Sichuan Han Chinese are known for spicy cuisine, teahouse culture, and laid-back urban lifestyle.',
        fact2:
          'Panda conservation, Sichuan opera, and hot pot dining are central to regional identity.',
        share: 0.9,
        population: '≈ 20M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.0'
      }
    ]
  },
  {
    id: 'china_yangtze_delta',
    name: 'Yangtze Delta (Suzhou-Hangzhou)',
    bounds: {
      minLng: 119.5,
      maxLng: 121.0,
      minLat: 30.0,
      maxLat: 31.5
    },
    ethnicities: [
      {
        id: 'yangtze_delta_han',
        ethnicityName: 'Yangtze Delta Han Chinese',
        region: 'Suzhou, Hangzhou, and surrounding delta region',
        fact1:
          'Yangtze Delta Han Chinese maintain classical garden architecture, silk production, and refined cultural traditions.',
        fact2:
          'Tea culture, water towns, and high-tech manufacturing coexist in the delta region.',
        share: 0.9,
        population: '≈ 15M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.8'
      }
    ]
  },
  {
    id: 'china_northeast_manchuria',
    name: 'Northeast China (Manchuria)',
    bounds: {
      minLng: 120.0,
      maxLng: 130.0,
      minLat: 40.0,
      maxLat: 48.0
    },
    ethnicities: [
      {
        id: 'northeast_han_chinese',
        ethnicityName: 'Northeast Han Chinese',
        region: 'Liaoning, Jilin, and Heilongjiang provinces',
        fact1:
          'Northeast Han Chinese combine industrial heritage with Korean and Russian cultural influences.',
        fact2:
          'Heavy industry, winter sports, and distinctive Northeastern cuisine mark regional identity.',
        share: 0.85,
        population: '≈ 80M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.7'
      },
      {
        id: 'northeast_korean_chinese',
        ethnicityName: 'Korean Chinese (Yanbian)',
        region: 'Yanbian Korean Autonomous Prefecture',
        fact1:
          'Korean Chinese maintain Korean language, cuisine, and cultural practices in Northeast China.',
        fact2:
          'Korean schools, kimchi production, and cross-border family ties shape community identity.',
        share: 0.1,
        population: '≈ 2M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 0.8'
      }
    ]
  },
  // Latin America - Specific granular regions replacing massive Andes block
  {
    id: 'peru_cusco_highlands',
    name: 'Cusco Highlands (Peru)',
    bounds: {
      minLng: -72.5,
      maxLng: -71.0,
      minLat: -13.8,
      maxLat: -13.0
    },
    ethnicities: [
      {
        id: 'cusco_quechua',
        ethnicityName: 'Cusco Quechua',
        region: 'Cusco and surrounding highland valleys',
        fact1:
          'Cusco Quechua maintain Inca heritage, terraced agriculture, and Quechua language in the Sacred Valley.',
        fact2:
          'Inti Raymi festivals, alpaca herding, and tourism shape contemporary Cusco Quechua life.',
        share: 0.6,
        population: '≈ 0.8M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.5'
      },
      {
        id: 'cusco_mestizo',
        ethnicityName: 'Cusco Mestizos',
        region: 'Cusco city and market towns',
        fact1:
          'Cusco mestizos blend Quechua and Spanish heritage in urban and market contexts.',
        fact2:
          'Colonial architecture, textile markets, and tourism economy define mestizo life in Cusco.',
        share: 0.35,
        population: '≈ 0.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'peru_lima_metro',
    name: 'Lima Metropolitan Region',
    bounds: {
      minLng: -77.2,
      maxLng: -76.7,
      minLat: -12.3,
      maxLat: -11.7
    },
    ethnicities: [
      {
        id: 'lima_mestizo_urban',
        ethnicityName: 'Lima Mestizos',
        region: 'Lima city and metropolitan area',
        fact1:
          'Lima mestizos combine coastal, highland, and Amazonian influences in Peru\'s capital.',
        fact2:
          'Ceviche cuisine, colonial churches, and informal settlements characterize Lima\'s diverse neighborhoods.',
        share: 0.5,
        population: '≈ 5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'lima_andean_migrants',
        ethnicityName: 'Andean Migrants (Lima)',
        region: 'Lima\'s peripheral districts and informal settlements',
        fact1:
          'Migrants from highland Quechua and Aymara communities work in construction, services, and markets.',
        fact2:
          'Regional associations, remittances, and maintaining highland cultural practices in urban settings.',
        share: 0.3,
        population: '≈ 3M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'bolivia_la_paz_altiplano',
    name: 'La Paz & Altiplano (Bolivia)',
    bounds: {
      minLng: -69.0,
      maxLng: -67.5,
      minLat: -16.8,
      maxLat: -15.5
    },
    ethnicities: [
      {
        id: 'la_paz_aymara',
        ethnicityName: 'La Paz Aymara',
        region: 'La Paz-El Alto metropolitan region',
        fact1:
          'Aymara communities in La Paz maintain highland traditions, cholitas fashion, and Aymara language.',
        fact2:
          'Cable car transit, street markets, and political mobilization shape Aymara urban life.',
        share: 0.5,
        population: '≈ 1.5M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'altiplano_quechua',
        ethnicityName: 'Altiplano Quechua',
        region: 'High plateau villages around La Paz',
        fact1:
          'Quechua communities on the Altiplano practice potato farming and llama herding at high altitudes.',
        fact2:
          'Traditional textiles, community festivals, and migration to cities for work.',
        share: 0.3,
        population: '≈ 0.9M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  {
    id: 'ecuador_quito_highlands',
    name: 'Quito Highlands (Ecuador)',
    bounds: {
      minLng: -78.8,
      maxLng: -78.2,
      minLat: -0.5,
      maxLat: 0.3
    },
    ethnicities: [
      {
        id: 'quito_mestizo',
        ethnicityName: 'Quito Mestizos',
        region: 'Quito city and surrounding highlands',
        fact1:
          'Quito mestizos combine Spanish colonial heritage with highland Indigenous influences.',
        fact2:
          'Colonial architecture, highland markets, and Andean music shape Quito identity.',
        share: 0.7,
        population: '≈ 1.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'quito_quichua',
        ethnicityName: 'Quito Quichua',
        region: 'Quichua communities in Quito and surrounding valleys',
        fact1:
          'Quichua communities maintain Quechua language (Quichua variant) and highland agricultural practices.',
        fact2:
          'Otavalo markets, traditional dress, and migration to Quito for work.',
        share: 0.25,
        population: '≈ 0.5M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // West Africa Sahel - Specific granular regions replacing massive Sahel block
  {
    id: 'senegal_dakar_region',
    name: 'Dakar & Senegal Coast',
    bounds: {
      minLng: -17.6,
      maxLng: -16.8,
      minLat: 14.5,
      maxLat: 15.0
    },
    ethnicities: [
      {
        id: 'dakar_wolof',
        ethnicityName: 'Dakar Wolof',
        region: 'Dakar and surrounding Wolof regions',
        fact1:
          'Dakar Wolof maintain Wolof language, Islamic traditions, and urban Senegalese culture.',
        fact2:
          'Mbalax music, teranga hospitality, and Sufi brotherhoods shape Dakar identity.',
        share: 0.7,
        population: '≈ 2.5M',
        dominantReligion: 'Islam (Sufi)',
        totalFertilityRate: '≈ 3.8'
      },
      {
        id: 'dakar_fulani',
        ethnicityName: 'Dakar Fulani',
        region: 'Fulani communities in Dakar and surrounding areas',
        fact1:
          'Fulani maintain pastoral traditions, Pulaar language, and Islamic scholarship.',
        fact2:
          'Cattle herding, migration patterns, and Sufi Islamic practices.',
        share: 0.2,
        population: '≈ 0.7M',
        dominantReligion: 'Islam (Sufi)',
        totalFertilityRate: '≈ 4.2'
      }
    ]
  },
  {
    id: 'mali_bamako_region',
    name: 'Bamako & Central Mali',
    bounds: {
      minLng: -8.2,
      maxLng: -7.8,
      minLat: 12.5,
      maxLat: 12.8
    },
    ethnicities: [
      {
        id: 'bamako_bambara',
        ethnicityName: 'Bamako Bambara',
        region: 'Bamako and surrounding Bambara regions',
        fact1:
          'Bambara maintain Bamanankan language, traditional agriculture, and Islamic practices.',
        fact2:
          'Griot traditions, mud-brick architecture, and market trade shape Bamako identity.',
        share: 0.5,
        population: '≈ 2M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 5.2'
      },
      {
        id: 'bamako_fulani',
        ethnicityName: 'Bamako Fulani',
        region: 'Fulani communities in Bamako and central Mali',
        fact1:
          'Fulani maintain pastoral traditions and Pulaar language in urban and rural contexts.',
        fact2:
          'Cattle markets, Islamic education, and seasonal migration.',
        share: 0.25,
        population: '≈ 1M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 5.5'
      }
    ]
  },
  {
    id: 'niger_niamey_region',
    name: 'Niamey & Southern Niger',
    bounds: {
      minLng: 2.0,
      maxLng: 2.3,
      minLat: 13.4,
      maxLat: 13.6
    },
    ethnicities: [
      {
        id: 'niamey_hausa',
        ethnicityName: 'Niamey Hausa',
        region: 'Niamey and surrounding Hausa regions',
        fact1:
          'Hausa maintain Hausa language, Islamic traditions, and trade networks across West Africa.',
        fact2:
          'Kano architecture, textile trade, and Islamic scholarship shape Hausa identity.',
        share: 0.5,
        population: '≈ 1.2M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.2'
      },
      {
        id: 'niamey_zarma',
        ethnicityName: 'Niamey Zarma',
        region: 'Zarma communities in Niamey and surrounding areas',
        fact1:
          'Zarma maintain Zarma language, riverine agriculture, and mixed Islamic-traditional practices.',
        fact2:
          'Niger River farming, fishing, and market trade.',
        share: 0.3,
        population: '≈ 0.7M',
        dominantReligion: 'Islam / Traditional',
        totalFertilityRate: '≈ 6.0'
      }
    ]
  },
  {
    id: 'niger_tuareg_sahara',
    name: 'Tuareg Sahara (Northern Niger)',
    bounds: {
      minLng: 5.0,
      maxLng: 12.0,
      minLat: 16.0,
      maxLat: 20.0
    },
    ethnicities: [
      {
        id: 'niger_tuareg',
        ethnicityName: 'Niger Tuareg',
        region: 'Tuareg communities in northern Niger Sahara',
        fact1:
          'Tuareg maintain Tamasheq language, nomadic pastoralism, and distinctive blue veils.',
        fact2:
          'Camel herding, trans-Saharan trade, and Tuareg script (Tifinagh) mark community identity.',
        share: 0.8,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.5'
      }
    ]
  },
  // Oceania - Specific granular regions replacing massive Pacific block
  {
    id: 'hawaii_honolulu',
    name: 'Honolulu & Oahu (Hawaii)',
    bounds: {
      minLng: -158.3,
      maxLng: -157.6,
      minLat: 21.2,
      maxLat: 21.7
    },
    ethnicities: [
      {
        id: 'honolulu_hawaiian',
        ethnicityName: 'Honolulu Native Hawaiians',
        region: 'Native Hawaiian communities in Honolulu and Oahu',
        fact1:
          'Native Hawaiians maintain Hawaiian language, hula traditions, and connection to land (aina).',
        fact2:
          'Luau festivals, outrigger canoeing, and sovereignty movements shape Hawaiian identity.',
        share: 0.1,
        population: '≈ 0.15M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'honolulu_asian_american',
        ethnicityName: 'Honolulu Asian Americans',
        region: 'Asian American communities in Honolulu (Japanese, Filipino, Chinese)',
        fact1:
          'Honolulu Asian Americans maintain diverse Asian languages and cultural practices.',
        fact2:
          'Japanese temples, Filipino festivals, and mixed cultural heritage.',
        share: 0.4,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'samoa_apia',
    name: 'Apia & Upolu (Samoa)',
    bounds: {
      minLng: -172.0,
      maxLng: -171.6,
      minLat: -13.9,
      maxLat: -13.7
    },
    ethnicities: [
      {
        id: 'apia_samoans',
        ethnicityName: 'Apia Samoans',
        region: 'Samoan communities in Apia and Upolu',
        fact1:
          'Apia Samoans maintain Samoan language, fa\'a Samoa (Samoan way), and Christian practices.',
        fact2:
          'Matai system, tapa cloth, and strong family networks shape Samoan identity.',
        share: 0.95,
        population: '≈ 0.2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'fiji_suva',
    name: 'Suva & Viti Levu (Fiji)',
    bounds: {
      minLng: 178.3,
      maxLng: 178.6,
      minLat: -18.2,
      maxLat: -18.0
    },
    ethnicities: [
      {
        id: 'suva_fijians',
        ethnicityName: 'Suva Indigenous Fijians',
        region: 'Indigenous Fijian communities in Suva',
        fact1:
          'Indigenous Fijians maintain Fijian language, traditional chiefdoms, and Christian practices.',
        fact2:
          'Kava ceremonies, meke dance, and traditional land tenure shape Fijian identity.',
        share: 0.55,
        population: '≈ 0.5M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'suva_indo_fijians',
        ethnicityName: 'Suva Indo-Fijians',
        region: 'Indo-Fijian communities in Suva',
        fact1:
          'Indo-Fijians maintain Hindi language, Hindu or Muslim practices, and South Asian heritage.',
        fact2:
          'Hindu temples, Diwali festivals, and maintaining connections to India.',
        share: 0.4,
        population: '≈ 0.35M',
        dominantReligion: 'Hinduism / Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Southern Africa - Additional specific regions
  {
    id: 'botswana_gaborone',
    name: 'Gaborone & Central Botswana',
    bounds: {
      minLng: 25.8,
      maxLng: 26.0,
      minLat: -24.7,
      maxLat: -24.6
    },
    ethnicities: [
      {
        id: 'gaborone_tswana',
        ethnicityName: 'Gaborone Tswana',
        region: 'Tswana communities in Gaborone and central Botswana',
        fact1:
          'Gaborone Tswana maintain Tswana language, traditional kgotla system, and Christian practices.',
        fact2:
          'Cattle posts, traditional music, and diamond economy shape Tswana identity.',
        share: 0.9,
        population: '≈ 0.3M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.6'
      }
    ]
  },
  {
    id: 'zimbabwe_harare',
    name: 'Harare & Central Zimbabwe',
    bounds: {
      minLng: 31.0,
      maxLng: 31.2,
      minLat: -17.9,
      maxLat: -17.7
    },
    ethnicities: [
      {
        id: 'harare_shona',
        ethnicityName: 'Harare Shona',
        region: 'Shona communities in Harare and central Zimbabwe',
        fact1:
          'Harare Shona maintain Shona language, traditional spirit mediums, and Christian practices.',
        fact2:
          'Mbira music, traditional ceremonies, and maintaining Shona cultural practices.',
        share: 0.8,
        population: '≈ 1.5M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.2'
      },
      {
        id: 'harare_ndebele',
        ethnicityName: 'Harare Ndebele',
        region: 'Ndebele communities in Harare',
        fact1:
          'Ndebele maintain Ndebele language, traditional practices, and Christian practices.',
        fact2:
          'Ndebele art, migration to Harare, and maintaining Ndebele identity.',
        share: 0.15,
        population: '≈ 0.3M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.4'
      }
    ]
  },
  // US East Coast - Additional specific regions
  {
    id: 'us_atlanta_metro',
    name: 'Atlanta Metropolitan Region',
    bounds: {
      minLng: -84.5,
      maxLng: -84.2,
      minLat: 33.6,
      maxLat: 33.9
    },
    ethnicities: [
      {
        id: 'atlanta_african_american',
        ethnicityName: 'Atlanta African Americans',
        region: 'African American communities in Atlanta',
        fact1:
          'Atlanta African Americans maintain connections to civil rights movement, historically Black colleges, and contemporary Black culture.',
        fact2:
          'Hip hop, gospel, and strong community institutions shape Atlanta Black identity.',
        share: 0.5,
        population: '≈ 2.5M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'atlanta_white_americans',
        ethnicityName: 'Atlanta White Americans',
        region: 'White American communities in Atlanta',
        fact1:
          'Atlanta white Americans include diverse European heritage and business professionals.',
        fact2:
          'Suburban life, business networks, and maintaining European cultural traditions.',
        share: 0.38,
        population: '≈ 1.9M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'us_miami_metro',
    name: 'Miami Metropolitan Region',
    bounds: {
      minLng: -80.3,
      maxLng: -80.1,
      minLat: 25.7,
      maxLat: 26.0
    },
    ethnicities: [
      {
        id: 'miami_hispanic',
        ethnicityName: 'Miami Hispanic/Latino',
        region: 'Hispanic communities in Miami (Cuban, Colombian, Venezuelan)',
        fact1:
          'Miami Hispanics maintain Spanish language, diverse Latin American cultures, and strong community networks.',
        fact2:
          'Little Havana, Cuban coffee, and maintaining connections to Latin America.',
        share: 0.7,
        population: '≈ 2.1M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'miami_white_americans',
        ethnicityName: 'Miami White Americans',
        region: 'White American communities in Miami',
        fact1:
          'Miami white Americans include diverse European heritage and retirees.',
        fact2:
          'Beach culture, retirement communities, and diverse European traditions.',
        share: 0.15,
        population: '≈ 0.45M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  // US West Coast - Additional specific regions
  {
    id: 'us_san_francisco_metro',
    name: 'San Francisco Bay Area',
    bounds: {
      minLng: -122.5,
      maxLng: -122.0,
      minLat: 37.6,
      maxLat: 37.9
    },
    ethnicities: [
      {
        id: 'sf_white_americans',
        ethnicityName: 'SF White Americans',
        region: 'White American communities in San Francisco',
        fact1:
          'SF white Americans include diverse European heritage and tech industry professionals.',
        fact2:
          'Tech culture, progressive politics, and diverse European traditions.',
        share: 0.4,
        population: '≈ 0.35M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.2'
      },
      {
        id: 'sf_asian_american',
        ethnicityName: 'SF Asian Americans',
        region: 'Asian American communities in SF (Chinese, Filipino, Vietnamese)',
        fact1:
          'SF Asian Americans maintain diverse Asian languages and cultural practices.',
        fact2:
          'Chinatown, Asian business districts, and maintaining connections to Asia.',
        share: 0.35,
        population: '≈ 0.3M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'sf_hispanic',
        ethnicityName: 'SF Hispanic/Latino',
        region: 'Hispanic communities in SF',
        fact1:
          'SF Hispanics maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Mission District, maintaining connections to Latin America.',
        share: 0.15,
        population: '≈ 0.13M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'us_seattle_metro',
    name: 'Seattle Metropolitan Region',
    bounds: {
      minLng: -122.4,
      maxLng: -122.2,
      minLat: 47.5,
      maxLat: 47.7
    },
    ethnicities: [
      {
        id: 'seattle_white_americans',
        ethnicityName: 'Seattle White Americans',
        region: 'White American communities in Seattle',
        fact1:
          'Seattle white Americans include diverse European heritage and tech industry professionals.',
        fact2:
          'Coffee culture, outdoor recreation, and progressive politics.',
        share: 0.65,
        population: '≈ 0.5M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'seattle_asian_american',
        ethnicityName: 'Seattle Asian Americans',
        region: 'Asian American communities in Seattle (Chinese, Vietnamese, Filipino)',
        fact1:
          'Seattle Asian Americans maintain diverse Asian languages and cultural practices.',
        fact2:
          'International District, maintaining connections to Asia.',
        share: 0.15,
        population: '≈ 0.12M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  // Canada - Additional specific regions
  {
    id: 'canada_vancouver_metro',
    name: 'Vancouver Metropolitan Region',
    bounds: {
      minLng: -123.2,
      maxLng: -122.9,
      minLat: 49.2,
      maxLat: 49.3
    },
    ethnicities: [
      {
        id: 'vancouver_chinese',
        ethnicityName: 'Vancouver Chinese Canadians',
        region: 'Chinese communities in Vancouver',
        fact1:
          'Vancouver Chinese maintain Chinese languages and cultural practices.',
        fact2:
          'Chinatown, Chinese schools, and maintaining connections to China.',
        share: 0.2,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.2'
      },
      {
        id: 'vancouver_anglophone',
        ethnicityName: 'Vancouver Anglophone Canadians',
        region: 'Anglophone communities in Vancouver',
        fact1:
          'Vancouver anglophones maintain English language and diverse European heritage.',
        fact2:
          'Outdoor recreation, multicultural neighborhoods, and diverse European traditions.',
        share: 0.45,
        population: '≈ 1.1M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  // Eastern Europe - Additional specific regions
  {
    id: 'poland_warsaw',
    name: 'Warsaw & Central Poland',
    bounds: {
      minLng: 20.9,
      maxLng: 21.2,
      minLat: 52.1,
      maxLat: 52.3
    },
    ethnicities: [
      {
        id: 'warsaw_poles',
        ethnicityName: 'Warsaw Poles',
        region: 'Polish communities in Warsaw',
        fact1:
          'Warsaw Poles maintain Polish language, Catholic traditions, and Polish cultural identity.',
        fact2:
          'Old Town, Catholic churches, and post-communist transformation shape Warsaw identity.',
        share: 0.95,
        population: '≈ 1.8M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'romania_bucharest',
    name: 'Bucharest & Southern Romania',
    bounds: {
      minLng: 26.0,
      maxLng: 26.2,
      minLat: 44.4,
      maxLat: 44.5
    },
    ethnicities: [
      {
        id: 'bucharest_romanians',
        ethnicityName: 'Bucharest Romanians',
        region: 'Romanian communities in Bucharest',
        fact1:
          'Bucharest Romanians maintain Romanian language, Orthodox Christianity, and Romanian cultural traditions.',
        fact2:
          'Orthodox churches, Romanian cuisine, and post-communist transformation.',
        share: 0.9,
        population: '≈ 2M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'bucharest_roma',
        ethnicityName: 'Bucharest Roma',
        region: 'Roma communities in Bucharest',
        fact1:
          'Bucharest Roma maintain Romani language and distinct cultural practices.',
        fact2:
          'Roma music, maintaining Roma identity, and facing discrimination.',
        share: 0.05,
        population: '≈ 0.1M',
        dominantReligion: 'Orthodox Christianity / Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Central Asia - Additional specific regions
  {
    id: 'tajikistan_dushanbe',
    name: 'Dushanbe & Central Tajikistan',
    bounds: {
      minLng: 68.7,
      maxLng: 68.9,
      minLat: 38.5,
      maxLat: 38.6
    },
    ethnicities: [
      {
        id: 'dushanbe_tajiks',
        ethnicityName: 'Dushanbe Tajiks',
        region: 'Tajik communities in Dushanbe',
        fact1:
          'Dushanbe Tajiks maintain Tajik language (Persian variant), Islamic traditions, and Persian cultural heritage.',
        fact2:
          'Persian poetry, Islamic architecture, and maintaining Tajik identity.',
        share: 0.85,
        population: '≈ 0.8M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'kyrgyzstan_bishkek',
    name: 'Bishkek & Northern Kyrgyzstan',
    bounds: {
      minLng: 74.5,
      maxLng: 74.7,
      minLat: 42.8,
      maxLat: 42.9
    },
    ethnicities: [
      {
        id: 'bishkek_kyrgyz',
        ethnicityName: 'Bishkek Kyrgyz',
        region: 'Kyrgyz communities in Bishkek',
        fact1:
          'Bishkek Kyrgyz maintain Kyrgyz language, nomadic traditions, and Islamic practices.',
        fact2:
          'Yurt culture, epic poetry, and maintaining Kyrgyz identity.',
        share: 0.7,
        population: '≈ 0.7M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'bishkek_russians',
        ethnicityName: 'Bishkek Russians',
        region: 'Russian communities in Bishkek',
        fact1:
          'Bishkek Russians maintain Russian language and cultural practices.',
        fact2:
          'Soviet-era infrastructure, Russian schools, and maintaining Russian identity.',
        share: 0.2,
        population: '≈ 0.2M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  // Japan - Specific granular regions
  {
    id: 'japan_tokyo_metro',
    name: 'Tokyo Metropolitan Region',
    bounds: {
      minLng: 139.4,
      maxLng: 140.0,
      minLat: 35.4,
      maxLat: 35.9
    },
    ethnicities: [
      {
        id: 'tokyo_japanese',
        ethnicityName: 'Tokyo Japanese',
        region: 'Tokyo city and metropolitan area',
        fact1:
          'Tokyo Japanese combine traditional Shinto-Buddhist practices with hyper-modern urban culture and corporate life.',
        fact2:
          'Commuter trains, izakaya culture, and seasonal festivals shape Tokyo identity.',
        share: 0.9,
        population: '≈ 14M',
        dominantReligion: 'Shinto / Buddhism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'japan_osaka_kansai',
    name: 'Osaka-Kansai Region',
    bounds: {
      minLng: 135.2,
      maxLng: 135.7,
      minLat: 34.4,
      maxLat: 34.9
    },
    ethnicities: [
      {
        id: 'osaka_japanese',
        ethnicityName: 'Osaka Japanese',
        region: 'Osaka and Kansai metropolitan area',
        fact1:
          'Osaka Japanese are known for direct communication style, comedy culture, and merchant traditions.',
        fact2:
          'Takoyaki, okonomiyaki, and distinct Kansai dialect mark Osaka identity.',
        share: 0.9,
        population: '≈ 9M',
        dominantReligion: 'Shinto / Buddhism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  // Korea - Specific granular regions
  {
    id: 'korea_seoul_metro',
    name: 'Seoul Metropolitan Region',
    bounds: {
      minLng: 126.7,
      maxLng: 127.3,
      minLat: 37.4,
      maxLat: 37.7
    },
    ethnicities: [
      {
        id: 'seoul_koreans',
        ethnicityName: 'Seoul Koreans',
        region: 'Seoul city and metropolitan area',
        fact1:
          'Seoul Koreans combine Confucian traditions with K-pop, technology, and rapid modernization.',
        fact2:
          'Hanbok, kimchi, and competitive education shape Seoul life.',
        share: 0.95,
        population: '≈ 10M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 0.7'
      }
    ]
  },
  {
    id: 'korea_busan_southeast',
    name: 'Busan & Southeast Korea',
    bounds: {
      minLng: 128.8,
      maxLng: 129.5,
      minLat: 35.0,
      maxLat: 35.3
    },
    ethnicities: [
      {
        id: 'busan_koreans',
        ethnicityName: 'Busan Koreans',
        region: 'Busan city and surrounding southeast region',
        fact1:
          'Busan Koreans maintain distinct regional dialect, seafood cuisine, and port city culture.',
        fact2:
          'Beach culture, film festivals, and maritime traditions mark Busan identity.',
        share: 0.95,
        population: '≈ 3.5M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 0.8'
      }
    ]
  },
  // Indonesia - Specific granular regions replacing massive Island SEA block
  {
    id: 'indonesia_jakarta_metro',
    name: 'Jakarta Metropolitan Region',
    bounds: {
      minLng: 106.6,
      maxLng: 107.0,
      minLat: -6.4,
      maxLat: -6.1
    },
    ethnicities: [
      {
        id: 'jakarta_javanese',
        ethnicityName: 'Jakarta Javanese',
        region: 'Jakarta city and metropolitan area',
        fact1:
          'Jakarta Javanese combine Javanese cultural traditions with modern Indonesian national identity.',
        fact2:
          'Batik, wayang, and urban kampung life coexist with skyscrapers and malls.',
        share: 0.35,
        population: '≈ 4M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'jakarta_sundanese',
        ethnicityName: 'Jakarta Sundanese',
        region: 'Jakarta neighborhoods with Sundanese communities',
        fact1:
          'Sundanese migrants from West Java maintain distinct language and cultural practices in Jakarta.',
        fact2:
          'Sundanese music, cuisine, and regional associations shape community identity.',
        share: 0.15,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'jakarta_betawi',
        ethnicityName: 'Jakarta Betawi',
        region: 'Historic Betawi neighborhoods in Jakarta',
        fact1:
          'Betawi are the original inhabitants of Jakarta, with mixed Malay, Chinese, and Arab heritage.',
        fact2:
          'Ondel-ondel puppets, lenong theater, and Betawi dialect mark community identity.',
        share: 0.1,
        population: '≈ 1M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'indonesia_java_central',
    name: 'Central Java (Yogyakarta-Solo)',
    bounds: {
      minLng: 110.2,
      maxLng: 111.0,
      minLat: -7.8,
      maxLat: -7.2
    },
    ethnicities: [
      {
        id: 'yogyakarta_javanese',
        ethnicityName: 'Yogyakarta Javanese',
        region: 'Yogyakarta and surrounding central Java',
        fact1:
          'Yogyakarta Javanese maintain courtly traditions, batik production, and Javanese language preservation.',
        fact2:
          'Kraton palace, gamelan music, and traditional markets shape Yogyakarta identity.',
        share: 0.9,
        population: '≈ 3.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'indonesia_sumatra_medan',
    name: 'Medan & North Sumatra',
    bounds: {
      minLng: 98.5,
      maxLng: 99.0,
      minLat: 3.4,
      maxLat: 3.8
    },
    ethnicities: [
      {
        id: 'medan_batak',
        ethnicityName: 'Medan Batak',
        region: 'Medan and surrounding Batak regions',
        fact1:
          'Batak communities maintain clan systems, traditional houses, and Christian or Muslim religious practices.',
        fact2:
          'Ulos textiles, adat law, and migration to Medan for education and work.',
        share: 0.4,
        population: '≈ 2M',
        dominantReligion: 'Christianity / Islam',
        totalFertilityRate: '≈ 2.3'
      },
      {
        id: 'medan_malay',
        ethnicityName: 'Medan Malay',
        region: 'Malay communities in Medan and coastal North Sumatra',
        fact1:
          'Malay communities maintain Islamic traditions, coastal trade, and Malay language.',
        fact2:
          'Traditional houses, Islamic education, and cross-strait connections to Malaysia.',
        share: 0.3,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.4'
      }
    ]
  },
  // Malaysia - Specific granular regions
  {
    id: 'malaysia_klang_valley',
    name: 'Klang Valley (Kuala Lumpur)',
    bounds: {
      minLng: 101.4,
      maxLng: 101.8,
      minLat: 3.0,
      maxLat: 3.3
    },
    ethnicities: [
      {
        id: 'kl_malay',
        ethnicityName: 'Kuala Lumpur Malays',
        region: 'Kuala Lumpur and Klang Valley',
        fact1:
          'KL Malays combine traditional kampung values with modern urban life and Islamic identity.',
        fact2:
          'Nasi lemak, Friday prayers, and Malay language shape KL Malay identity.',
        share: 0.45,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'kl_chinese',
        ethnicityName: 'Kuala Lumpur Chinese',
        region: 'Chinese communities in KL and Klang Valley',
        fact1:
          'KL Chinese maintain Hokkien, Cantonese, and Hakka dialects alongside Mandarin.',
        fact2:
          'Chinese schools, temples, and business networks shape community identity.',
        share: 0.35,
        population: '≈ 1.2M',
        dominantReligion: 'Buddhism / Taoism',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'kl_indian',
        ethnicityName: 'Kuala Lumpur Indians',
        region: 'Indian communities in KL, primarily Tamil',
        fact1:
          'KL Indians maintain Tamil language, Hindu temples, and South Indian cultural practices.',
        fact2:
          'Thaipusam festivals, roti canai, and Tamil schools mark community identity.',
        share: 0.15,
        population: '≈ 0.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  // Philippines - Specific granular regions
  {
    id: 'philippines_manila_metro',
    name: 'Manila Metropolitan Region',
    bounds: {
      minLng: 120.9,
      maxLng: 121.2,
      minLat: 14.4,
      maxLat: 14.8
    },
    ethnicities: [
      {
        id: 'manila_tagalog',
        ethnicityName: 'Manila Tagalog',
        region: 'Manila and surrounding Tagalog regions',
        fact1:
          'Manila Tagalog combine Spanish colonial heritage with American influences and modern Filipino identity.',
        fact2:
          'Catholic festivals, jeepney culture, and Tagalog language shape Manila identity.',
        share: 0.6,
        population: '≈ 7M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'manila_visayan_migrants',
        ethnicityName: 'Visayan Migrants (Manila)',
        region: 'Visayan communities in Manila',
        fact1:
          'Visayan migrants from central Philippines maintain Cebuano and other Visayan languages.',
        fact2:
          'Regional associations, remittances, and maintaining Visayan cultural practices.',
        share: 0.2,
        population: '≈ 2.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'philippines_cebu_visayas',
    name: 'Cebu & Central Visayas',
    bounds: {
      minLng: 123.7,
      maxLng: 124.0,
      minLat: 10.2,
      maxLat: 10.4
    },
    ethnicities: [
      {
        id: 'cebu_visayan',
        ethnicityName: 'Cebu Visayan',
        region: 'Cebu city and surrounding Visayan islands',
        fact1:
          'Cebu Visayan maintain Cebuano language, seafaring traditions, and strong Catholic identity.',
        fact2:
          'Sinulog festival, lechon cuisine, and overseas migration shape Cebu identity.',
        share: 0.9,
        population: '≈ 3M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.4'
      }
    ]
  },
  // Additional 80+ new specific granular regions with 100+ additional ethnic groups
  // Thailand - Specific regions
  {
    id: 'thailand_bangkok_metro',
    name: 'Bangkok Metropolitan Region',
    bounds: {
      minLng: 100.3,
      maxLng: 100.8,
      minLat: 13.6,
      maxLat: 13.9
    },
    ethnicities: [
      {
        id: 'bangkok_thai',
        ethnicityName: 'Bangkok Thai',
        region: 'Bangkok city and metropolitan area',
        fact1:
          'Bangkok Thai combine Theravada Buddhist traditions with modern urban life and royal court culture.',
        fact2:
          'Tuk-tuks, street food, and wai greeting culture shape Bangkok identity.',
        share: 0.85,
        population: '≈ 8M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'bangkok_chinese_thai',
        ethnicityName: 'Bangkok Chinese Thai',
        region: 'Chinese-Thai communities in Bangkok',
        fact1:
          'Chinese-Thai maintain Teochew and other Chinese dialects alongside Thai language.',
        fact2:
          'Chinese temples, business networks, and mixed cultural practices.',
        share: 0.1,
        population: '≈ 1M',
        dominantReligion: 'Buddhism / Taoism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'thailand_chiang_mai_north',
    name: 'Chiang Mai & Northern Thailand',
    bounds: {
      minLng: 98.8,
      maxLng: 99.1,
      minLat: 18.7,
      maxLat: 18.9
    },
    ethnicities: [
      {
        id: 'chiang_mai_lanna',
        ethnicityName: 'Chiang Mai Lanna Thai',
        region: 'Chiang Mai and northern Lanna region',
        fact1:
          'Lanna Thai maintain distinct northern dialect, Lanna script, and highland cultural traditions.',
        fact2:
          'Lanna architecture, sticky rice, and hill tribe interactions shape northern Thai identity.',
        share: 0.8,
        population: '≈ 1.5M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'chiang_mai_hill_tribes',
        ethnicityName: 'Northern Hill Tribes',
        region: 'Hmong, Karen, and other hill tribes in northern Thailand',
        fact1:
          'Hill tribes maintain distinct languages, traditional agriculture, and animist or Christian practices.',
        fact2:
          'Terrace farming, traditional dress, and tourism interactions.',
        share: 0.15,
        population: '≈ 0.3M',
        dominantReligion: 'Animism / Christianity',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Vietnam - Specific regions
  {
    id: 'vietnam_ho_chi_minh_metro',
    name: 'Ho Chi Minh City Metropolitan Region',
    bounds: {
      minLng: 106.5,
      maxLng: 106.9,
      minLat: 10.6,
      maxLat: 10.9
    },
    ethnicities: [
      {
        id: 'hcmc_vietnamese',
        ethnicityName: 'Ho Chi Minh City Vietnamese',
        region: 'Ho Chi Minh City and surrounding Mekong Delta',
        fact1:
          'HCMC Vietnamese combine southern Vietnamese culture with French colonial and American influences.',
        fact2:
          'Pho cuisine, motorbike culture, and rapid economic development shape HCMC identity.',
        share: 0.9,
        population: '≈ 9M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'hcmc_chinese_vietnamese',
        ethnicityName: 'HCMC Chinese Vietnamese',
        region: 'Chinese-Vietnamese communities in HCMC (Cholon)',
        fact1:
          'Chinese-Vietnamese maintain Cantonese and Teochew dialects alongside Vietnamese.',
        fact2:
          'Chinese temples, business districts, and mixed cultural practices.',
        share: 0.05,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism / Taoism',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'vietnam_hanoi_red_river',
    name: 'Hanoi & Red River Delta',
    bounds: {
      minLng: 105.7,
      maxLng: 106.0,
      minLat: 20.9,
      maxLat: 21.1
    },
    ethnicities: [
      {
        id: 'hanoi_vietnamese',
        ethnicityName: 'Hanoi Vietnamese',
        region: 'Hanoi and Red River Delta',
        fact1:
          'Hanoi Vietnamese maintain northern Vietnamese dialect, traditional water puppetry, and Confucian traditions.',
        fact2:
          'Old Quarter architecture, pho cuisine, and political capital status shape Hanoi identity.',
        share: 0.95,
        population: '≈ 5M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  // Myanmar - Specific regions
  {
    id: 'myanmar_yangon_metro',
    name: 'Yangon Metropolitan Region',
    bounds: {
      minLng: 96.0,
      maxLng: 96.3,
      minLat: 16.7,
      maxLat: 16.9
    },
    ethnicities: [
      {
        id: 'yangon_burmese',
        ethnicityName: 'Yangon Burmese',
        region: 'Yangon city and surrounding Bamar regions',
        fact1:
          'Yangon Burmese maintain Burmese language, Theravada Buddhism, and traditional Myanmar culture.',
        fact2:
          'Shwedagon Pagoda, longyi dress, and tea shop culture shape Yangon identity.',
        share: 0.7,
        population: '≈ 5M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'yangon_karen',
        ethnicityName: 'Yangon Karen',
        region: 'Karen communities in Yangon',
        fact1:
          'Karen maintain Karen languages, Christian or Buddhist practices, and distinct cultural traditions.',
        fact2:
          'Traditional weaving, migration to Yangon for work, and maintaining Karen identity.',
        share: 0.15,
        population: '≈ 1M',
        dominantReligion: 'Christianity / Buddhism',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  // Cambodia - Specific regions
  {
    id: 'cambodia_phnom_penh',
    name: 'Phnom Penh & Central Cambodia',
    bounds: {
      minLng: 104.8,
      maxLng: 105.0,
      minLat: 11.5,
      maxLat: 11.6
    },
    ethnicities: [
      {
        id: 'phnom_penh_khmer',
        ethnicityName: 'Phnom Penh Khmer',
        region: 'Phnom Penh and central Cambodia',
        fact1:
          'Phnom Penh Khmer maintain Khmer language, Theravada Buddhism, and Angkor heritage.',
        fact2:
          'Royal palace, Khmer cuisine, and recovery from Khmer Rouge period shape Phnom Penh identity.',
        share: 0.9,
        population: '≈ 2M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Laos - Specific regions
  {
    id: 'laos_vientiane',
    name: 'Vientiane & Central Laos',
    bounds: {
      minLng: 102.5,
      maxLng: 102.7,
      minLat: 17.9,
      maxLat: 18.0
    },
    ethnicities: [
      {
        id: 'vientiane_lao',
        ethnicityName: 'Vientiane Lao',
        region: 'Vientiane and central Lao regions',
        fact1:
          'Vientiane Lao maintain Lao language, Theravada Buddhism, and Mekong riverine culture.',
        fact2:
          'Sticky rice, Buddhist temples, and French colonial architecture shape Vientiane identity.',
        share: 0.85,
        population: '≈ 0.8M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 2.6'
      },
      {
        id: 'vientiane_hmong',
        ethnicityName: 'Vientiane Hmong',
        region: 'Hmong communities in Vientiane and surrounding highlands',
        fact1:
          'Hmong maintain Hmong language, traditional agriculture, and animist or Christian practices.',
        fact2:
          'Traditional dress, shamanism, and migration to cities for work.',
        share: 0.1,
        population: '≈ 0.1M',
        dominantReligion: 'Animism / Christianity',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  // West Africa Coastal - Specific regions replacing massive block
  {
    id: 'ghana_accra_region',
    name: 'Accra & Southern Ghana',
    bounds: {
      minLng: -0.3,
      maxLng: 0.3,
      minLat: 5.5,
      maxLat: 5.7
    },
    ethnicities: [
      {
        id: 'accra_akan',
        ethnicityName: 'Accra Akan',
        region: 'Accra and surrounding Akan regions',
        fact1:
          'Accra Akan maintain Akan languages (Twi, Fante), matrilineal traditions, and Christian or traditional practices.',
        fact2:
          'Kente cloth, highlife music, and cocoa farming shape Akan identity.',
        share: 0.6,
        population: '≈ 3M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.2'
      },
      {
        id: 'accra_ga',
        ethnicityName: 'Accra Ga',
        region: 'Ga communities in Accra',
        fact1:
          'Ga maintain Ga language, fishing traditions, and coastal urban culture.',
        fact2:
          'Homowo festival, fishing, and Accra\'s original inhabitants.',
        share: 0.2,
        population: '≈ 1M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.4'
      }
    ]
  },
  {
    id: 'nigeria_lagos_metro',
    name: 'Lagos Metropolitan Region',
    bounds: {
      minLng: 3.2,
      maxLng: 3.6,
      minLat: 6.3,
      maxLat: 6.6
    },
    ethnicities: [
      {
        id: 'lagos_yoruba',
        ethnicityName: 'Lagos Yoruba',
        region: 'Lagos and surrounding Yoruba regions',
        fact1:
          'Lagos Yoruba maintain Yoruba language, òrìṣà worship, and urban Nigerian culture.',
        fact2:
          'Nollywood, jollof rice, and Yoruba music shape Lagos identity.',
        share: 0.5,
        population: '≈ 8M',
        dominantReligion: 'Islam / Christianity',
        totalFertilityRate: '≈ 4.5'
      },
      {
        id: 'lagos_igbo',
        ethnicityName: 'Lagos Igbo',
        region: 'Igbo communities in Lagos',
        fact1:
          'Igbo maintain Igbo language, entrepreneurial traditions, and Christian practices.',
        fact2:
          'Business networks, Igbo festivals, and migration to Lagos for commerce.',
        share: 0.25,
        population: '≈ 4M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.2'
      },
      {
        id: 'lagos_hausa',
        ethnicityName: 'Lagos Hausa',
        region: 'Hausa communities in Lagos',
        fact1:
          'Hausa maintain Hausa language, Islamic traditions, and northern Nigerian culture.',
        fact2:
          'Islamic education, trade networks, and maintaining Hausa identity in Lagos.',
        share: 0.15,
        population: '≈ 2.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 4.8'
      }
    ]
  },
  {
    id: 'nigeria_kano_north',
    name: 'Kano & Northern Nigeria',
    bounds: {
      minLng: 8.4,
      maxLng: 8.6,
      minLat: 12.0,
      maxLat: 12.1
    },
    ethnicities: [
      {
        id: 'kano_hausa',
        ethnicityName: 'Kano Hausa',
        region: 'Kano and surrounding Hausa regions',
        fact1:
          'Kano Hausa maintain Hausa language, Islamic traditions, and historic trading city culture.',
        fact2:
          'Ancient city walls, textile markets, and Islamic scholarship shape Kano identity.',
        share: 0.8,
        population: '≈ 4M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.0'
      },
      {
        id: 'kano_fulani',
        ethnicityName: 'Kano Fulani',
        region: 'Fulani communities in Kano and surrounding areas',
        fact1:
          'Fulani maintain Pulaar language, pastoral traditions, and Islamic practices.',
        fact2:
          'Cattle herding, Islamic education, and integration into Hausa society.',
        share: 0.15,
        population: '≈ 0.8M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.2'
      }
    ]
  },
  // East Africa - Specific regions replacing massive block
  {
    id: 'ethiopia_addis_ababa',
    name: 'Addis Ababa & Central Ethiopia',
    bounds: {
      minLng: 38.6,
      maxLng: 38.9,
      minLat: 8.9,
      maxLat: 9.1
    },
    ethnicities: [
      {
        id: 'addis_amhara',
        ethnicityName: 'Addis Ababa Amhara',
        region: 'Addis Ababa and surrounding Amhara regions',
        fact1:
          'Addis Amhara maintain Amharic language, Orthodox Christianity, and imperial Ethiopian traditions.',
        fact2:
          'Injera cuisine, Orthodox churches, and political capital status shape Addis identity.',
        share: 0.4,
        population: '≈ 2M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 3.5'
      },
      {
        id: 'addis_oromo',
        ethnicityName: 'Addis Ababa Oromo',
        region: 'Oromo communities in Addis Ababa',
        fact1:
          'Oromo maintain Oromo language, Gadaa system, and mixed Christian/Islamic practices.',
        fact2:
          'Coffee ceremony, Oromo festivals, and migration to Addis for work.',
        share: 0.35,
        population: '≈ 1.8M',
        dominantReligion: 'Islam / Christianity',
        totalFertilityRate: '≈ 3.8'
      }
    ]
  },
  {
    id: 'kenya_nairobi_metro',
    name: 'Nairobi Metropolitan Region',
    bounds: {
      minLng: 36.7,
      maxLng: 36.9,
      minLat: -1.4,
      maxLat: -1.2
    },
    ethnicities: [
      {
        id: 'nairobi_kikuyu',
        ethnicityName: 'Nairobi Kikuyu',
        region: 'Nairobi and surrounding Kikuyu regions',
        fact1:
          'Nairobi Kikuyu maintain Kikuyu language, Christian practices, and entrepreneurial traditions.',
        fact2:
          'Matatu culture, business networks, and Kikuyu music shape Nairobi identity.',
        share: 0.4,
        population: '≈ 2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.2'
      },
      {
        id: 'nairobi_luo',
        ethnicityName: 'Nairobi Luo',
        region: 'Luo communities in Nairobi',
        fact1:
          'Luo maintain Luo language, fishing traditions, and Christian practices.',
        fact2:
          'Luo music, migration to Nairobi for work, and maintaining Luo identity.',
        share: 0.2,
        population: '≈ 1M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.5'
      },
      {
        id: 'nairobi_luhya',
        ethnicityName: 'Nairobi Luhya',
        region: 'Luhya communities in Nairobi',
        fact1:
          'Luhya maintain Luhya languages, agricultural traditions, and Christian practices.',
        fact2:
          'Traditional music, migration to Nairobi, and maintaining Luhya cultural practices.',
        share: 0.15,
        population: '≈ 0.8M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.4'
      }
    ]
  },
  {
    id: 'tanzania_dar_es_salaam',
    name: 'Dar es Salaam Metropolitan Region',
    bounds: {
      minLng: 39.2,
      maxLng: 39.4,
      minLat: -6.9,
      maxLat: -6.7
    },
    ethnicities: [
      {
        id: 'dar_swahili',
        ethnicityName: 'Dar es Salaam Swahili',
        region: 'Dar es Salaam and coastal Swahili regions',
        fact1:
          'Dar Swahili maintain Swahili language, Islamic traditions, and coastal trading culture.',
        fact2:
          'Swahili architecture, Islamic festivals, and port city culture shape Dar identity.',
        share: 0.3,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.8'
      },
      {
        id: 'dar_bantu',
        ethnicityName: 'Dar es Salaam Bantu',
        region: 'Bantu communities in Dar es Salaam',
        fact1:
          'Bantu maintain various Bantu languages, agricultural traditions, and Christian or Islamic practices.',
        fact2:
          'Migration to Dar for work, maintaining rural connections, and urban adaptation.',
        share: 0.5,
        population: '≈ 2.5M',
        dominantReligion: 'Christianity / Islam',
        totalFertilityRate: '≈ 4.0'
      }
    ]
  },
  // Southern Africa - Specific regions replacing massive block
  {
    id: 'south_africa_johannesburg',
    name: 'Johannesburg Metropolitan Region',
    bounds: {
      minLng: 27.9,
      maxLng: 28.3,
      minLat: -26.3,
      maxLat: -26.0
    },
    ethnicities: [
      {
        id: 'johannesburg_zulu',
        ethnicityName: 'Johannesburg Zulu',
        region: 'Zulu communities in Johannesburg',
        fact1:
          'Johannesburg Zulu maintain Zulu language, traditional practices, and urban adaptation.',
        fact2:
          'Zulu music, migration from KwaZulu-Natal, and maintaining Zulu identity in townships.',
        share: 0.25,
        population: '≈ 1.5M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.5'
      },
      {
        id: 'johannesburg_xhosa',
        ethnicityName: 'Johannesburg Xhosa',
        region: 'Xhosa communities in Johannesburg',
        fact1:
          'Xhosa maintain Xhosa language, initiation rites, and Christian practices.',
        fact2:
          'Xhosa music, migration from Eastern Cape, and maintaining Xhosa cultural practices.',
        share: 0.2,
        population: '≈ 1.2M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.4'
      },
      {
        id: 'johannesburg_afrikaans',
        ethnicityName: 'Johannesburg Afrikaans',
        region: 'Afrikaans-speaking communities in Johannesburg',
        fact1:
          'Afrikaans maintain Afrikaans language, Dutch heritage, and mixed European-African ancestry.',
        fact2:
          'Afrikaans music, suburban life, and post-apartheid adaptation.',
        share: 0.15,
        population: '≈ 0.9M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'south_africa_cape_town',
    name: 'Cape Town & Western Cape',
    bounds: {
      minLng: 18.3,
      maxLng: 18.6,
      minLat: -34.0,
      maxLat: -33.8
    },
    ethnicities: [
      {
        id: 'cape_town_coloured',
        ethnicityName: 'Cape Town Coloured',
        region: 'Cape Town and Western Cape',
        fact1:
          'Cape Coloured maintain mixed heritage, Afrikaans or English language, and distinct Cape culture.',
        fact2:
          'Cape Malay cuisine, Coon Carnival, and unique Cape identity.',
        share: 0.45,
        population: '≈ 1.5M',
        dominantReligion: 'Christianity / Islam',
        totalFertilityRate: '≈ 2.2'
      },
      {
        id: 'cape_town_xhosa',
        ethnicityName: 'Cape Town Xhosa',
        region: 'Xhosa communities in Cape Town',
        fact1:
          'Xhosa maintain Xhosa language and cultural practices in Cape Town townships.',
        fact2:
          'Migration from Eastern Cape, maintaining Xhosa identity, and urban adaptation.',
        share: 0.3,
        population: '≈ 1M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // North America - Specific regions replacing massive US blocks
  {
    id: 'us_new_york_metro',
    name: 'New York Metropolitan Region',
    bounds: {
      minLng: -74.3,
      maxLng: -73.7,
      minLat: 40.5,
      maxLat: 40.9
    },
    ethnicities: [
      {
        id: 'nyc_white_americans',
        ethnicityName: 'NYC White Americans',
        region: 'White American communities in NYC',
        fact1:
          'NYC white Americans include Italian, Irish, Jewish, and other European heritage communities.',
        fact2:
          'Neighborhood identities, deli culture, and diverse European traditions shape NYC white identity.',
        share: 0.35,
        population: '≈ 3M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'nyc_african_american',
        ethnicityName: 'NYC African Americans',
        region: 'African American communities in NYC',
        fact1:
          'NYC African Americans maintain connections to Great Migration, Harlem Renaissance, and contemporary Black culture.',
        fact2:
          'Hip hop, gospel, and strong community institutions shape NYC Black identity.',
        share: 0.24,
        population: '≈ 2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'nyc_hispanic',
        ethnicityName: 'NYC Hispanic/Latino',
        region: 'Hispanic communities in NYC (Puerto Rican, Dominican, Mexican)',
        fact1:
          'NYC Hispanics maintain Spanish language, diverse Latin American cultures, and urban adaptation.',
        fact2:
          'Bodegas, salsa music, and maintaining connections to home countries.',
        share: 0.28,
        population: '≈ 2.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'nyc_asian_american',
        ethnicityName: 'NYC Asian Americans',
        region: 'Asian American communities in NYC (Chinese, Korean, South Asian)',
        fact1:
          'NYC Asian Americans maintain diverse Asian languages, cultural practices, and urban adaptation.',
        fact2:
          'Chinatown, Flushing, and diverse Asian business districts.',
        share: 0.13,
        population: '≈ 1.1M',
        dominantReligion: 'Buddhism / Hinduism / Christianity',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'us_los_angeles_metro',
    name: 'Los Angeles Metropolitan Region',
    bounds: {
      minLng: -118.5,
      maxLng: -117.8,
      minLat: 33.7,
      maxLat: 34.3
    },
    ethnicities: [
      {
        id: 'la_hispanic',
        ethnicityName: 'LA Hispanic/Latino',
        region: 'Hispanic communities in LA (Mexican, Central American)',
        fact1:
          'LA Hispanics maintain Spanish language, diverse Latin American cultures, and strong community networks.',
        fact2:
          'Taco trucks, mariachi, and maintaining connections to home countries.',
        share: 0.48,
        population: '≈ 6M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'la_white_americans',
        ethnicityName: 'LA White Americans',
        region: 'White American communities in LA',
        fact1:
          'LA white Americans include diverse European heritage and entertainment industry professionals.',
        fact2:
          'Suburban life, beach culture, and entertainment industry connections.',
        share: 0.28,
        population: '≈ 3.5M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'la_asian_american',
        ethnicityName: 'LA Asian Americans',
        region: 'Asian American communities in LA (Chinese, Korean, Filipino, Vietnamese)',
        fact1:
          'LA Asian Americans maintain diverse Asian languages and cultural practices.',
        fact2:
          'Koreatown, Little Saigon, and diverse Asian business districts.',
        share: 0.15,
        population: '≈ 1.9M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'us_chicago_metro',
    name: 'Chicago Metropolitan Region',
    bounds: {
      minLng: -87.9,
      maxLng: -87.5,
      minLat: 41.6,
      maxLat: 42.0
    },
    ethnicities: [
      {
        id: 'chicago_african_american',
        ethnicityName: 'Chicago African Americans',
        region: 'African American communities in Chicago',
        fact1:
          'Chicago African Americans have roots in Great Migration and maintain strong community institutions.',
        fact2:
          'Blues music, gospel, and South Side neighborhoods shape Chicago Black identity.',
        share: 0.29,
        population: '≈ 0.9M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'chicago_hispanic',
        ethnicityName: 'Chicago Hispanic/Latino',
        region: 'Hispanic communities in Chicago (Mexican, Puerto Rican)',
        fact1:
          'Chicago Hispanics maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Pilsen neighborhood, Mexican festivals, and maintaining cultural connections.',
        share: 0.29,
        population: '≈ 0.9M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.9'
      },
      {
        id: 'chicago_white_americans',
        ethnicityName: 'Chicago White Americans',
        region: 'White American communities in Chicago',
        fact1:
          'Chicago white Americans include Polish, Irish, Italian, and other European heritage.',
        fact2:
          'Neighborhood identities, deep dish pizza, and diverse European traditions.',
        share: 0.32,
        population: '≈ 1M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  // Canada - Specific regions replacing massive block
  {
    id: 'canada_toronto_metro',
    name: 'Toronto Metropolitan Region',
    bounds: {
      minLng: -79.6,
      maxLng: -79.2,
      minLat: 43.6,
      maxLat: 43.8
    },
    ethnicities: [
      {
        id: 'toronto_anglophone',
        ethnicityName: 'Toronto Anglophone Canadians',
        region: 'Anglophone communities in Toronto',
        fact1:
          'Toronto anglophones maintain English language and diverse European heritage.',
        fact2:
          'Multicultural neighborhoods, hockey culture, and diverse European traditions.',
        share: 0.45,
        population: '≈ 1.4M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'toronto_south_asian',
        ethnicityName: 'Toronto South Asians',
        region: 'South Asian communities in Toronto (Indian, Pakistani, Sri Lankan)',
        fact1:
          'Toronto South Asians maintain diverse South Asian languages and cultural practices.',
        fact2:
          'Little India, Gurdwaras, and diverse South Asian business districts.',
        share: 0.12,
        population: '≈ 0.4M',
        dominantReligion: 'Hinduism / Sikhism / Islam',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'toronto_chinese',
        ethnicityName: 'Toronto Chinese Canadians',
        region: 'Chinese communities in Toronto',
        fact1:
          'Toronto Chinese maintain Chinese languages and cultural practices.',
        fact2:
          'Chinatown, Chinese schools, and maintaining connections to China.',
        share: 0.11,
        population: '≈ 0.35M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'canada_montreal_quebec',
    name: 'Montreal & Quebec Region',
    bounds: {
      minLng: -73.7,
      maxLng: -73.5,
      minLat: 45.4,
      maxLat: 45.6
    },
    ethnicities: [
      {
        id: 'montreal_quebecois',
        ethnicityName: 'Montreal Québécois',
        region: 'Francophone Québécois in Montreal',
        fact1:
          'Montreal Québécois maintain French language, Catholic traditions, and distinct Quebec identity.',
        fact2:
          'Poutine, winter festivals, and French language preservation shape Montreal identity.',
        share: 0.65,
        population: '≈ 1.3M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'montreal_anglophone',
        ethnicityName: 'Montreal Anglophone Canadians',
        region: 'Anglophone communities in Montreal',
        fact1:
          'Montreal anglophones maintain English language and diverse heritage.',
        fact2:
          'Bilingual neighborhoods, bagels, and maintaining English in French-majority city.',
        share: 0.18,
        population: '≈ 0.35M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  // Brazil - Specific regions replacing massive block
  {
    id: 'brazil_sao_paulo_metro',
    name: 'São Paulo Metropolitan Region',
    bounds: {
      minLng: -46.8,
      maxLng: -46.3,
      minLat: -23.8,
      maxLat: -23.4
    },
    ethnicities: [
      {
        id: 'sao_paulo_pardo',
        ethnicityName: 'São Paulo Pardo',
        region: 'Pardo (mixed) communities in São Paulo',
        fact1:
          'São Paulo Pardo maintain mixed African, Indigenous, and European heritage.',
        fact2:
          'Samba, diverse neighborhoods, and Brazilian mixed identity.',
        share: 0.35,
        population: '≈ 4.5M',
        dominantReligion: 'Catholicism / Protestantism',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'sao_paulo_white',
        ethnicityName: 'São Paulo White Brazilians',
        region: 'White Brazilian communities in São Paulo',
        fact1:
          'São Paulo white Brazilians include Italian, Portuguese, and other European heritage.',
        fact2:
          'Italian neighborhoods, business districts, and European cultural influences.',
        share: 0.5,
        population: '≈ 6.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'sao_paulo_afro_brazilian',
        ethnicityName: 'São Paulo Afro-Brazilians',
        region: 'Afro-Brazilian communities in São Paulo',
        fact1:
          'São Paulo Afro-Brazilians maintain African heritage, samba, and Candomblé practices.',
        fact2:
          'Samba schools, African cultural centers, and maintaining Afro-Brazilian identity.',
        share: 0.1,
        population: '≈ 1.3M',
        dominantReligion: 'Catholicism / Candomblé',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'brazil_rio_metro',
    name: 'Rio de Janeiro Metropolitan Region',
    bounds: {
      minLng: -43.4,
      maxLng: -43.1,
      minLat: -23.0,
      maxLat: -22.8
    },
    ethnicities: [
      {
        id: 'rio_pardo',
        ethnicityName: 'Rio Pardo',
        region: 'Pardo (mixed) communities in Rio',
        fact1:
          'Rio Pardo maintain mixed heritage and Carioca culture.',
        fact2:
          'Samba, beach culture, and favela communities shape Rio identity.',
        share: 0.45,
        population: '≈ 3M',
        dominantReligion: 'Catholicism / Candomblé',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'rio_white',
        ethnicityName: 'Rio White Brazilians',
        region: 'White Brazilian communities in Rio',
        fact1:
          'Rio white Brazilians include Portuguese and other European heritage.',
        fact2:
          'Beach culture, samba schools, and European cultural influences.',
        share: 0.4,
        population: '≈ 2.7M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'brazil_salvador_bahia',
    name: 'Salvador & Bahia Region',
    bounds: {
      minLng: -38.6,
      maxLng: -38.4,
      minLat: -13.0,
      maxLat: -12.9
    },
    ethnicities: [
      {
        id: 'salvador_afro_brazilian',
        ethnicityName: 'Salvador Afro-Brazilians',
        region: 'Afro-Brazilian communities in Salvador',
        fact1:
          'Salvador Afro-Brazilians maintain strong African heritage, Candomblé, and capoeira.',
        fact2:
          'Pelourinho, African cultural centers, and maintaining Afro-Brazilian traditions.',
        share: 0.8,
        population: '≈ 2.4M',
        dominantReligion: 'Catholicism / Candomblé',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  // Eastern Europe - Specific regions replacing massive block
  {
    id: 'russia_moscow_metro',
    name: 'Moscow Metropolitan Region',
    bounds: {
      minLng: 37.3,
      maxLng: 37.9,
      minLat: 55.5,
      maxLat: 55.9
    },
    ethnicities: [
      {
        id: 'moscow_russians',
        ethnicityName: 'Moscow Russians',
        region: 'Russian communities in Moscow',
        fact1:
          'Moscow Russians maintain Russian language, Orthodox Christianity, and urban Russian culture.',
        fact2:
          'Kremlin, metro system, and political capital status shape Moscow identity.',
        share: 0.9,
        population: '≈ 12M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'moscow_tatars',
        ethnicityName: 'Moscow Tatars',
        region: 'Tatar communities in Moscow',
        fact1:
          'Moscow Tatars maintain Tatar language, Islamic traditions, and Tatar cultural practices.',
        fact2:
          'Tatar mosques, cultural centers, and maintaining Tatar identity in Moscow.',
        share: 0.05,
        population: '≈ 0.7M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'russia_st_petersburg',
    name: 'St. Petersburg & Northwest Russia',
    bounds: {
      minLng: 30.1,
      maxLng: 30.5,
      minLat: 59.8,
      maxLat: 60.0
    },
    ethnicities: [
      {
        id: 'st_petersburg_russians',
        ethnicityName: 'St. Petersburg Russians',
        region: 'Russian communities in St. Petersburg',
        fact1:
          'St. Petersburg Russians maintain Russian language, Orthodox Christianity, and imperial heritage.',
        fact2:
          'Hermitage, White Nights, and cultural capital status shape St. Petersburg identity.',
        share: 0.92,
        population: '≈ 5M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'ukraine_kyiv_region',
    name: 'Kyiv & Central Ukraine',
    bounds: {
      minLng: 30.4,
      maxLng: 30.7,
      minLat: 50.3,
      maxLat: 50.6
    },
    ethnicities: [
      {
        id: 'kyiv_ukrainians',
        ethnicityName: 'Kyiv Ukrainians',
        region: 'Ukrainian communities in Kyiv',
        fact1:
          'Kyiv Ukrainians maintain Ukrainian language, Orthodox Christianity, and distinct Ukrainian identity.',
        fact2:
          'Kyiv-Pechersk Lavra, Ukrainian cuisine, and capital city status shape Kyiv identity.',
        share: 0.85,
        population: '≈ 2.8M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.2'
      },
      {
        id: 'kyiv_russians',
        ethnicityName: 'Kyiv Russians',
        region: 'Russian communities in Kyiv',
        fact1:
          'Kyiv Russians maintain Russian language and cultural practices.',
        fact2:
          'Russian language media, maintaining Russian identity in Ukraine.',
        share: 0.1,
        population: '≈ 0.3M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.1'
      }
    ]
  },
  // Central Asia - Specific regions replacing massive block
  {
    id: 'uzbekistan_tashkent',
    name: 'Tashkent & Central Uzbekistan',
    bounds: {
      minLng: 69.1,
      maxLng: 69.4,
      minLat: 41.2,
      maxLat: 41.4
    },
    ethnicities: [
      {
        id: 'tashkent_uzbeks',
        ethnicityName: 'Tashkent Uzbeks',
        region: 'Uzbek communities in Tashkent',
        fact1:
          'Tashkent Uzbeks maintain Uzbek language, Islamic traditions, and Central Asian culture.',
        fact2:
          'Bazaars, Islamic architecture, and post-Soviet adaptation shape Tashkent identity.',
        share: 0.8,
        population: '≈ 2.4M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.4'
      },
      {
        id: 'tashkent_russians',
        ethnicityName: 'Tashkent Russians',
        region: 'Russian communities in Tashkent',
        fact1:
          'Tashkent Russians maintain Russian language and cultural practices.',
        fact2:
          'Soviet-era neighborhoods, Russian schools, and maintaining Russian identity.',
        share: 0.1,
        population: '≈ 0.3M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'kazakhstan_almaty',
    name: 'Almaty & Southeast Kazakhstan',
    bounds: {
      minLng: 76.8,
      maxLng: 77.0,
      minLat: 43.2,
      maxLat: 43.3
    },
    ethnicities: [
      {
        id: 'almaty_kazakhs',
        ethnicityName: 'Almaty Kazakhs',
        region: 'Kazakh communities in Almaty',
        fact1:
          'Almaty Kazakhs maintain Kazakh language, Islamic traditions, and nomadic heritage.',
        fact2:
          'Dombra music, yurt culture, and post-Soviet Kazakh identity.',
        share: 0.6,
        population: '≈ 1.2M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.6'
      },
      {
        id: 'almaty_russians',
        ethnicityName: 'Almaty Russians',
        region: 'Russian communities in Almaty',
        fact1:
          'Almaty Russians maintain Russian language and cultural practices.',
        fact2:
          'Soviet-era infrastructure, Russian media, and maintaining Russian identity.',
        share: 0.25,
        population: '≈ 0.5M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  // North Africa - Specific regions replacing massive block
  {
    id: 'morocco_casablanca',
    name: 'Casablanca & Western Morocco',
    bounds: {
      minLng: -7.7,
      maxLng: -7.5,
      minLat: 33.5,
      maxLat: 33.7
    },
    ethnicities: [
      {
        id: 'casablanca_arab',
        ethnicityName: 'Casablanca Arabs',
        region: 'Arab communities in Casablanca',
        fact1:
          'Casablanca Arabs maintain Arabic language, Islamic traditions, and urban Moroccan culture.',
        fact2:
          'Hassan II Mosque, medina markets, and modern urban life shape Casablanca identity.',
        share: 0.7,
        population: '≈ 3.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'casablanca_amazigh',
        ethnicityName: 'Casablanca Amazigh',
        region: 'Amazigh communities in Casablanca',
        fact1:
          'Casablanca Amazigh maintain Tamazight language and Amazigh cultural practices.',
        fact2:
          'Amazigh festivals, language revival, and maintaining Amazigh identity in urban settings.',
        share: 0.25,
        population: '≈ 1.2M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'algeria_algiers',
    name: 'Algiers & Northern Algeria',
    bounds: {
      minLng: 3.0,
      maxLng: 3.3,
      minLat: 36.7,
      maxLat: 36.8
    },
    ethnicities: [
      {
        id: 'algiers_arab',
        ethnicityName: 'Algiers Arabs',
        region: 'Arab communities in Algiers',
        fact1:
          'Algiers Arabs maintain Arabic language, Islamic traditions, and urban Algerian culture.',
        fact2:
          'Casbah, French colonial architecture, and post-independence identity shape Algiers.',
        share: 0.75,
        population: '≈ 3M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.4'
      },
      {
        id: 'algiers_amazigh',
        ethnicityName: 'Algiers Amazigh',
        region: 'Amazigh communities in Algiers (Kabyle)',
        fact1:
          'Algiers Amazigh maintain Kabyle language and Amazigh cultural practices.',
        fact2:
          'Kabyle music, language preservation, and maintaining Amazigh identity.',
        share: 0.2,
        population: '≈ 0.8M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'egypt_cairo_metro',
    name: 'Cairo Metropolitan Region',
    bounds: {
      minLng: 31.1,
      maxLng: 31.4,
      minLat: 30.0,
      maxLat: 30.2
    },
    ethnicities: [
      {
        id: 'cairo_egyptians',
        ethnicityName: 'Cairo Egyptians',
        region: 'Egyptian Arab communities in Cairo',
        fact1:
          'Cairo Egyptians maintain Arabic language, Islamic traditions, and ancient Egyptian heritage.',
        fact2:
          'Pyramids, Islamic architecture, and modern urban life shape Cairo identity.',
        share: 0.95,
        population: '≈ 10M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  // Additional specific regions to reach 100+ total
  {
    id: 'turkey_istanbul_metro',
    name: 'Istanbul Metropolitan Region',
    bounds: {
      minLng: 28.8,
      maxLng: 29.3,
      minLat: 40.9,
      maxLat: 41.2
    },
    ethnicities: [
      {
        id: 'istanbul_turks',
        ethnicityName: 'Istanbul Turks',
        region: 'Turkish communities in Istanbul',
        fact1:
          'Istanbul Turks maintain Turkish language, Islamic traditions, and Ottoman heritage.',
        fact2:
          'Hagia Sophia, bazaars, and bridge between Europe and Asia shape Istanbul identity.',
        share: 0.9,
        population: '≈ 15M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'istanbul_kurds',
        ethnicityName: 'Istanbul Kurds',
        region: 'Kurdish communities in Istanbul',
        fact1:
          'Istanbul Kurds maintain Kurdish language and cultural practices.',
        fact2:
          'Kurdish music, migration from eastern Turkey, and maintaining Kurdish identity.',
        share: 0.05,
        population: '≈ 0.8M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'iran_tehran_metro',
    name: 'Tehran Metropolitan Region',
    bounds: {
      minLng: 51.2,
      maxLng: 51.6,
      minLat: 35.6,
      maxLat: 35.8
    },
    ethnicities: [
      {
        id: 'tehran_persians',
        ethnicityName: 'Tehran Persians',
        region: 'Persian communities in Tehran',
        fact1:
          'Tehran Persians maintain Persian language, Shia Islam, and Iranian cultural traditions.',
        fact2:
          'Persian poetry, Nowruz festivals, and modern urban life shape Tehran identity.',
        share: 0.85,
        population: '≈ 8.5M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'tehran_azerbaijanis',
        ethnicityName: 'Tehran Azerbaijanis',
        region: 'Azerbaijani communities in Tehran',
        fact1:
          'Tehran Azerbaijanis maintain Azerbaijani language and cultural practices.',
        fact2:
          'Azerbaijani music, migration from northwest Iran, and maintaining Azerbaijani identity.',
        share: 0.1,
        population: '≈ 1M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'iraq_baghdad_metro',
    name: 'Baghdad & Central Iraq',
    bounds: {
      minLng: 44.3,
      maxLng: 44.5,
      minLat: 33.2,
      maxLat: 33.4
    },
    ethnicities: [
      {
        id: 'baghdad_arabs_shia',
        ethnicityName: 'Baghdad Shia Arabs',
        region: 'Shia Arab communities in Baghdad',
        fact1:
          'Baghdad Shia Arabs maintain Arabic language, Shia Islam, and Iraqi cultural traditions.',
        fact2:
          'Shia shrines, Arabic poetry, and post-conflict reconstruction shape Baghdad identity.',
        share: 0.6,
        population: '≈ 4.5M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 3.5'
      },
      {
        id: 'baghdad_arabs_sunni',
        ethnicityName: 'Baghdad Sunni Arabs',
        region: 'Sunni Arab communities in Baghdad',
        fact1:
          'Baghdad Sunni Arabs maintain Arabic language, Sunni Islam, and Iraqi cultural traditions.',
        fact2:
          'Sunni mosques, Arabic culture, and maintaining Sunni identity.',
        share: 0.25,
        population: '≈ 1.9M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 3.6'
      }
    ]
  },
  {
    id: 'saudi_arabia_riyadh',
    name: 'Riyadh & Central Saudi Arabia',
    bounds: {
      minLng: 46.5,
      maxLng: 46.8,
      minLat: 24.6,
      maxLat: 24.8
    },
    ethnicities: [
      {
        id: 'riyadh_saudis',
        ethnicityName: 'Riyadh Saudis',
        region: 'Saudi Arab communities in Riyadh',
        fact1:
          'Riyadh Saudis maintain Arabic language, Wahhabi Islam, and Saudi cultural traditions.',
        fact2:
          'Islamic architecture, traditional dress, and modern urban development shape Riyadh identity.',
        share: 0.9,
        population: '≈ 6.5M',
        dominantReligion: 'Sunni Islam (Wahhabi)',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'uae_dubai_metro',
    name: 'Dubai & UAE Coast',
    bounds: {
      minLng: 55.0,
      maxLng: 55.4,
      minLat: 25.0,
      maxLat: 25.3
    },
    ethnicities: [
      {
        id: 'dubai_emiratis',
        ethnicityName: 'Dubai Emiratis',
        region: 'Emirati Arab communities in Dubai',
        fact1:
          'Dubai Emiratis maintain Arabic language, Islamic traditions, and Gulf Arab culture.',
        fact2:
          'Modern skyscrapers, traditional souks, and rapid development shape Dubai identity.',
        share: 0.1,
        population: '≈ 0.3M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'dubai_south_asians',
        ethnicityName: 'Dubai South Asians',
        region: 'South Asian communities in Dubai (Indian, Pakistani, Bangladeshi)',
        fact1:
          'Dubai South Asians maintain diverse South Asian languages and cultural practices.',
        fact2:
          'Labor migration, remittances, and maintaining connections to home countries.',
        share: 0.5,
        population: '≈ 1.5M',
        dominantReligion: 'Hinduism / Islam',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  // Additional 50+ new specific granular regions with 80+ additional ethnic groups
  // Mexico - Specific regions
  {
    id: 'mexico_mexico_city_metro',
    name: 'Mexico City Metropolitan Region',
    bounds: {
      minLng: -99.3,
      maxLng: -98.9,
      minLat: 19.2,
      maxLat: 19.6
    },
    ethnicities: [
      {
        id: 'mexico_city_mestizo',
        ethnicityName: 'Mexico City Mestizos',
        region: 'Mestizo communities in Mexico City',
        fact1:
          'Mexico City mestizos combine Indigenous and Spanish heritage in Mexico\'s capital.',
        fact2:
          'Aztec heritage, Spanish colonial architecture, and modern urban life shape Mexico City identity.',
        share: 0.7,
        population: '≈ 9M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'mexico_city_indigenous',
        ethnicityName: 'Mexico City Indigenous',
        region: 'Indigenous communities in Mexico City (Nahuatl, Otomi, others)',
        fact1:
          'Mexico City Indigenous maintain Indigenous languages and cultural practices.',
        fact2:
          'Migration from rural areas, maintaining Indigenous identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 2M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'mexico_guadalajara',
    name: 'Guadalajara & Jalisco',
    bounds: {
      minLng: -103.4,
      maxLng: -103.3,
      minLat: 20.6,
      maxLat: 20.7
    },
    ethnicities: [
      {
        id: 'guadalajara_mestizo',
        ethnicityName: 'Guadalajara Mestizos',
        region: 'Mestizo communities in Guadalajara',
        fact1:
          'Guadalajara mestizos maintain Jalisco cultural traditions, mariachi, and tequila production.',
        fact2:
          'Mariachi music, charro culture, and maintaining Jalisco identity.',
        share: 0.9,
        population: '≈ 5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  // Colombia - Specific regions
  {
    id: 'colombia_bogota_metro',
    name: 'Bogotá Metropolitan Region',
    bounds: {
      minLng: -74.2,
      maxLng: -74.0,
      minLat: 4.5,
      maxLat: 4.8
    },
    ethnicities: [
      {
        id: 'bogota_mestizo',
        ethnicityName: 'Bogotá Mestizos',
        region: 'Mestizo communities in Bogotá',
        fact1:
          'Bogotá mestizos combine Indigenous, Spanish, and African heritage in Colombia\'s capital.',
        fact2:
          'Andean culture, Colombian cuisine, and modern urban life shape Bogotá identity.',
        share: 0.75,
        population: '≈ 7M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'bogota_afro_colombian',
        ethnicityName: 'Bogotá Afro-Colombians',
        region: 'Afro-Colombian communities in Bogotá',
        fact1:
          'Bogotá Afro-Colombians maintain African heritage, cumbia music, and distinct cultural practices.',
        fact2:
          'Migration from Pacific coast, maintaining Afro-Colombian identity, and urban adaptation.',
        share: 0.1,
        population: '≈ 0.9M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  // Argentina - Specific regions
  {
    id: 'argentina_buenos_aires_metro',
    name: 'Buenos Aires Metropolitan Region',
    bounds: {
      minLng: -58.6,
      maxLng: -58.3,
      minLat: -34.7,
      maxLat: -34.5
    },
    ethnicities: [
      {
        id: 'buenos_aires_european_argentines',
        ethnicityName: 'Buenos Aires European Argentines',
        region: 'European-descended Argentines in Buenos Aires',
        fact1:
          'Buenos Aires European Argentines include Italian, Spanish, and other European heritage.',
        fact2:
          'Tango, Italian cuisine, and European cultural influences shape Buenos Aires identity.',
        share: 0.85,
        population: '≈ 12M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'buenos_aires_mestizo',
        ethnicityName: 'Buenos Aires Mestizos',
        region: 'Mestizo communities in Buenos Aires',
        fact1:
          'Buenos Aires mestizos maintain mixed Indigenous and European heritage.',
        fact2:
          'Migration from interior provinces, maintaining mestizo identity, and urban adaptation.',
        share: 0.1,
        population: '≈ 1.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  // Chile - Specific regions
  {
    id: 'chile_santiago_metro',
    name: 'Santiago Metropolitan Region',
    bounds: {
      minLng: -70.8,
      maxLng: -70.5,
      minLat: -33.6,
      maxLat: -33.3
    },
    ethnicities: [
      {
        id: 'santiago_chileans',
        ethnicityName: 'Santiago Chileans',
        region: 'Chilean communities in Santiago',
        fact1:
          'Santiago Chileans maintain Spanish language, Catholic traditions, and Chilean cultural identity.',
        fact2:
          'Andean culture, Chilean cuisine, and modern urban life shape Santiago identity.',
        share: 0.9,
        population: '≈ 6M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'santiago_mapuche',
        ethnicityName: 'Santiago Mapuche',
        region: 'Mapuche communities in Santiago',
        fact1:
          'Santiago Mapuche maintain Mapudungun language and Mapuche cultural practices.',
        fact2:
          'Migration from southern Chile, maintaining Mapuche identity, and urban adaptation.',
        share: 0.05,
        population: '≈ 0.3M',
        dominantReligion: 'Catholicism / Traditional',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  // Western Europe - Specific regions
  {
    id: 'uk_london_metro',
    name: 'London Metropolitan Region',
    bounds: {
      minLng: -0.5,
      maxLng: 0.3,
      minLat: 51.3,
      maxLat: 51.7
    },
    ethnicities: [
      {
        id: 'london_white_british',
        ethnicityName: 'London White British',
        region: 'White British communities in London',
        fact1:
          'London white British maintain English language and diverse British heritage.',
        fact2:
          'Multicultural neighborhoods, diverse European traditions, and maintaining British identity.',
        share: 0.45,
        population: '≈ 4M',
        dominantReligion: 'Christianity / None',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'london_south_asian',
        ethnicityName: 'London South Asians',
        region: 'South Asian communities in London (Indian, Pakistani, Bangladeshi)',
        fact1:
          'London South Asians maintain diverse South Asian languages and cultural practices.',
        fact2:
          'Brick Lane, South Asian business districts, and maintaining connections to South Asia.',
        share: 0.18,
        population: '≈ 1.6M',
        dominantReligion: 'Hinduism / Islam / Sikhism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'london_black_british',
        ethnicityName: 'London Black British',
        region: 'Black British communities in London (Caribbean, African)',
        fact1:
          'London Black British maintain Caribbean and African cultural practices.',
        fact2:
          'Notting Hill Carnival, maintaining connections to Caribbean and Africa.',
        share: 0.13,
        population: '≈ 1.2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'france_paris_metro',
    name: 'Paris Metropolitan Region',
    bounds: {
      minLng: 2.2,
      maxLng: 2.5,
      minLat: 48.7,
      maxLat: 49.0
    },
    ethnicities: [
      {
        id: 'paris_french',
        ethnicityName: 'Paris French',
        region: 'French communities in Paris',
        fact1:
          'Paris French maintain French language, secular traditions, and French cultural identity.',
        fact2:
          'Café culture, art museums, and maintaining French identity.',
        share: 0.7,
        population: '≈ 7M',
        dominantReligion: 'Catholicism / None',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'paris_north_african',
        ethnicityName: 'Paris North Africans',
        region: 'North African communities in Paris (Algerian, Moroccan, Tunisian)',
        fact1:
          'Paris North Africans maintain Arabic and Berber languages and North African cultural practices.',
        fact2:
          'Migration from North Africa, maintaining North African identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.5'
      },
      {
        id: 'paris_sub_saharan_african',
        ethnicityName: 'Paris Sub-Saharan Africans',
        region: 'Sub-Saharan African communities in Paris',
        fact1:
          'Paris Sub-Saharan Africans maintain diverse African languages and cultural practices.',
        fact2:
          'Migration from West and Central Africa, maintaining African identity.',
        share: 0.08,
        population: '≈ 0.8M',
        dominantReligion: 'Christianity / Islam',
        totalFertilityRate: '≈ 2.6'
      }
    ]
  },
  {
    id: 'germany_berlin_metro',
    name: 'Berlin Metropolitan Region',
    bounds: {
      minLng: 13.2,
      maxLng: 13.6,
      minLat: 52.4,
      maxLat: 52.6
    },
    ethnicities: [
      {
        id: 'berlin_germans',
        ethnicityName: 'Berlin Germans',
        region: 'German communities in Berlin',
        fact1:
          'Berlin Germans maintain German language and German cultural traditions.',
        fact2:
          'Berlin Wall history, art scene, and maintaining German identity.',
        share: 0.75,
        population: '≈ 2.8M',
        dominantReligion: 'Protestantism / Catholicism / None',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'berlin_turkish',
        ethnicityName: 'Berlin Turks',
        region: 'Turkish communities in Berlin',
        fact1:
          'Berlin Turks maintain Turkish language and Turkish cultural practices.',
        fact2:
          'Migration from Turkey, maintaining Turkish identity, and urban adaptation.',
        share: 0.1,
        population: '≈ 0.4M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'spain_madrid_metro',
    name: 'Madrid Metropolitan Region',
    bounds: {
      minLng: -3.8,
      maxLng: -3.5,
      minLat: 40.3,
      maxLat: 40.6
    },
    ethnicities: [
      {
        id: 'madrid_spaniards',
        ethnicityName: 'Madrid Spaniards',
        region: 'Spanish communities in Madrid',
        fact1:
          'Madrid Spaniards maintain Spanish language, Catholic traditions, and Spanish cultural identity.',
        fact2:
          'Tapas culture, flamenco, and maintaining Spanish identity.',
        share: 0.8,
        population: '≈ 3.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.2'
      },
      {
        id: 'madrid_latin_american',
        ethnicityName: 'Madrid Latin Americans',
        region: 'Latin American communities in Madrid',
        fact1:
          'Madrid Latin Americans maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Migration from Latin America, maintaining Latin American identity.',
        share: 0.1,
        population: '≈ 0.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'italy_rome_metro',
    name: 'Rome Metropolitan Region',
    bounds: {
      minLng: 12.4,
      maxLng: 12.6,
      minLat: 41.8,
      maxLat: 42.0
    },
    ethnicities: [
      {
        id: 'rome_italians',
        ethnicityName: 'Rome Italians',
        region: 'Italian communities in Rome',
        fact1:
          'Rome Italians maintain Italian language, Catholic traditions, and Italian cultural identity.',
        fact2:
          'Roman history, Catholic Church, and maintaining Italian identity.',
        share: 0.85,
        population: '≈ 2.9M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'rome_romanian',
        ethnicityName: 'Rome Romanians',
        region: 'Romanian communities in Rome',
        fact1:
          'Rome Romanians maintain Romanian language and Romanian cultural practices.',
        fact2:
          'Migration from Romania, maintaining Romanian identity, and urban adaptation.',
        share: 0.08,
        population: '≈ 0.3M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  // Australia - Specific regions
  {
    id: 'australia_sydney_metro',
    name: 'Sydney Metropolitan Region',
    bounds: {
      minLng: 150.8,
      maxLng: 151.3,
      minLat: -33.9,
      maxLat: -33.7
    },
    ethnicities: [
      {
        id: 'sydney_anglo_australians',
        ethnicityName: 'Sydney Anglo-Australians',
        region: 'Anglo-Australian communities in Sydney',
        fact1:
          'Sydney Anglo-Australians maintain English language and British heritage.',
        fact2:
          'Beach culture, multicultural neighborhoods, and maintaining Australian identity.',
        share: 0.6,
        population: '≈ 3M',
        dominantReligion: 'Christianity / None',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'sydney_chinese',
        ethnicityName: 'Sydney Chinese Australians',
        region: 'Chinese communities in Sydney',
        fact1:
          'Sydney Chinese maintain Chinese languages and cultural practices.',
        fact2:
          'Chinatown, Chinese schools, and maintaining connections to China.',
        share: 0.1,
        population: '≈ 0.5M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'sydney_aboriginal',
        ethnicityName: 'Sydney Aboriginal Australians',
        region: 'Aboriginal communities in Sydney',
        fact1:
          'Sydney Aboriginal Australians maintain Aboriginal languages and cultural practices.',
        fact2:
          'Maintaining Aboriginal identity, connection to land, and urban adaptation.',
        share: 0.02,
        population: '≈ 0.1M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'australia_melbourne_metro',
    name: 'Melbourne Metropolitan Region',
    bounds: {
      minLng: 144.8,
      maxLng: 145.2,
      minLat: -37.9,
      maxLat: -37.7
    },
    ethnicities: [
      {
        id: 'melbourne_anglo_australians',
        ethnicityName: 'Melbourne Anglo-Australians',
        region: 'Anglo-Australian communities in Melbourne',
        fact1:
          'Melbourne Anglo-Australians maintain English language and British heritage.',
        fact2:
          'Coffee culture, multicultural neighborhoods, and maintaining Australian identity.',
        share: 0.65,
        population: '≈ 3.2M',
        dominantReligion: 'Christianity / None',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'melbourne_greek',
        ethnicityName: 'Melbourne Greeks',
        region: 'Greek communities in Melbourne',
        fact1:
          'Melbourne Greeks maintain Greek language and Greek cultural practices.',
        fact2:
          'Greek festivals, maintaining Greek identity, and strong community networks.',
        share: 0.05,
        population: '≈ 0.25M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'melbourne_italian',
        ethnicityName: 'Melbourne Italians',
        region: 'Italian communities in Melbourne',
        fact1:
          'Melbourne Italians maintain Italian language and Italian cultural practices.',
        fact2:
          'Italian festivals, maintaining Italian identity, and strong community networks.',
        share: 0.04,
        population: '≈ 0.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  // Additional Middle East regions
  {
    id: 'jordan_amman',
    name: 'Amman & Central Jordan',
    bounds: {
      minLng: 35.8,
      maxLng: 36.0,
      minLat: 31.9,
      maxLat: 32.0
    },
    ethnicities: [
      {
        id: 'amman_jordanians',
        ethnicityName: 'Amman Jordanians',
        region: 'Jordanian Arab communities in Amman',
        fact1:
          'Amman Jordanians maintain Arabic language, Islamic traditions, and Jordanian cultural identity.',
        fact2:
          'Bedouin heritage, Islamic architecture, and maintaining Jordanian identity.',
        share: 0.9,
        population: '≈ 2.5M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'amman_palestinians',
        ethnicityName: 'Amman Palestinians',
        region: 'Palestinian communities in Amman',
        fact1:
          'Amman Palestinians maintain Palestinian identity and cultural practices.',
        fact2:
          'Refugee heritage, maintaining Palestinian identity, and integration into Jordan.',
        share: 0.05,
        population: '≈ 0.14M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  {
    id: 'lebanon_beirut',
    name: 'Beirut & Central Lebanon',
    bounds: {
      minLng: 35.4,
      maxLng: 35.6,
      minLat: 33.8,
      maxLat: 33.9
    },
    ethnicities: [
      {
        id: 'beirut_christians',
        ethnicityName: 'Beirut Christians',
        region: 'Christian communities in Beirut (Maronite, Greek Orthodox)',
        fact1:
          'Beirut Christians maintain Arabic and other languages and Christian practices.',
        fact2:
          'Christian festivals, maintaining Christian identity, and strong community networks.',
        share: 0.4,
        population: '≈ 0.6M',
        dominantReligion: 'Christianity (Maronite / Orthodox)',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'beirut_sunni',
        ethnicityName: 'Beirut Sunni Muslims',
        region: 'Sunni Muslim communities in Beirut',
        fact1:
          'Beirut Sunnis maintain Arabic language and Sunni Islamic practices.',
        fact2:
          'Islamic festivals, maintaining Sunni identity, and strong community networks.',
        share: 0.3,
        population: '≈ 0.45M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'beirut_shia',
        ethnicityName: 'Beirut Shia Muslims',
        region: 'Shia Muslim communities in Beirut',
        fact1:
          'Beirut Shia maintain Arabic language and Shia Islamic practices.',
        fact2:
          'Shia festivals, maintaining Shia identity, and strong community networks.',
        share: 0.25,
        population: '≈ 0.38M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  // Additional African regions
  {
    id: 'uganda_kampala',
    name: 'Kampala & Central Uganda',
    bounds: {
      minLng: 32.5,
      maxLng: 32.7,
      minLat: 0.3,
      maxLat: 0.4
    },
    ethnicities: [
      {
        id: 'kampala_baganda',
        ethnicityName: 'Kampala Baganda',
        region: 'Baganda communities in Kampala',
        fact1:
          'Kampala Baganda maintain Luganda language, traditional kingdom, and Christian practices.',
        fact2:
          'Buganda kingdom, traditional music, and maintaining Baganda identity.',
        share: 0.5,
        population: '≈ 1.5M',
        dominantReligion: 'Christianity / Islam',
        totalFertilityRate: '≈ 4.2'
      },
      {
        id: 'kampala_other_bantu',
        ethnicityName: 'Kampala Other Bantu',
        region: 'Other Bantu communities in Kampala',
        fact1:
          'Kampala other Bantu maintain diverse Bantu languages and cultural practices.',
        fact2:
          'Migration from rural areas, maintaining Bantu identity, and urban adaptation.',
        share: 0.35,
        population: '≈ 1M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.5'
      }
    ]
  },
  {
    id: 'rwanda_kigali',
    name: 'Kigali & Central Rwanda',
    bounds: {
      minLng: 30.0,
      maxLng: 30.2,
      minLat: -1.9,
      maxLat: -1.8
    },
    ethnicities: [
      {
        id: 'kigali_hutu',
        ethnicityName: 'Kigali Hutu',
        region: 'Hutu communities in Kigali',
        fact1:
          'Kigali Hutu maintain Kinyarwanda language and Rwandan cultural practices.',
        fact2:
          'Post-genocide reconciliation, maintaining Rwandan identity, and urban adaptation.',
        share: 0.85,
        population: '≈ 1M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.8'
      },
      {
        id: 'kigali_tutsi',
        ethnicityName: 'Kigali Tutsi',
        region: 'Tutsi communities in Kigali',
        fact1:
          'Kigali Tutsi maintain Kinyarwanda language and Rwandan cultural practices.',
        fact2:
          'Post-genocide reconciliation, maintaining Rwandan identity, and urban adaptation.',
        share: 0.1,
        population: '≈ 0.12M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.6'
      }
    ]
  },
  {
    id: 'congo_kinshasa',
    name: 'Kinshasa & Western DRC',
    bounds: {
      minLng: 15.2,
      maxLng: 15.4,
      minLat: -4.4,
      maxLat: -4.2
    },
    ethnicities: [
      {
        id: 'kinshasa_lingala',
        ethnicityName: 'Kinshasa Lingala Speakers',
        region: 'Lingala-speaking communities in Kinshasa',
        fact1:
          'Kinshasa Lingala speakers maintain Lingala language and Congolese cultural practices.',
        fact2:
          'Congolese music (rumba, soukous), maintaining Congolese identity, and urban adaptation.',
        share: 0.4,
        population: '≈ 4M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.8'
      },
      {
        id: 'kinshasa_kikongo',
        ethnicityName: 'Kinshasa Kikongo Speakers',
        region: 'Kikongo-speaking communities in Kinshasa',
        fact1:
          'Kinshasa Kikongo speakers maintain Kikongo language and cultural practices.',
        fact2:
          'Migration from western DRC, maintaining Kikongo identity, and urban adaptation.',
        share: 0.25,
        population: '≈ 2.5M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.9'
      }
    ]
  },
  // Additional European regions
  {
    id: 'netherlands_amsterdam',
    name: 'Amsterdam & North Holland',
    bounds: {
      minLng: 4.7,
      maxLng: 5.0,
      minLat: 52.3,
      maxLat: 52.4
    },
    ethnicities: [
      {
        id: 'amsterdam_dutch',
        ethnicityName: 'Amsterdam Dutch',
        region: 'Dutch communities in Amsterdam',
        fact1:
          'Amsterdam Dutch maintain Dutch language and Dutch cultural traditions.',
        fact2:
          'Canal culture, liberal traditions, and maintaining Dutch identity.',
        share: 0.5,
        population: '≈ 0.45M',
        dominantReligion: 'Protestantism / Catholicism / None',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'amsterdam_moroccan',
        ethnicityName: 'Amsterdam Moroccans',
        region: 'Moroccan communities in Amsterdam',
        fact1:
          'Amsterdam Moroccans maintain Arabic and Berber languages and Moroccan cultural practices.',
        fact2:
          'Migration from Morocco, maintaining Moroccan identity, and urban adaptation.',
        share: 0.12,
        population: '≈ 0.11M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.2'
      },
      {
        id: 'amsterdam_turkish',
        ethnicityName: 'Amsterdam Turks',
        region: 'Turkish communities in Amsterdam',
        fact1:
          'Amsterdam Turks maintain Turkish language and Turkish cultural practices.',
        fact2:
          'Migration from Turkey, maintaining Turkish identity, and urban adaptation.',
        share: 0.08,
        population: '≈ 0.07M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'sweden_stockholm',
    name: 'Stockholm Metropolitan Region',
    bounds: {
      minLng: 18.0,
      maxLng: 18.2,
      minLat: 59.3,
      maxLat: 59.4
    },
    ethnicities: [
      {
        id: 'stockholm_swedes',
        ethnicityName: 'Stockholm Swedes',
        region: 'Swedish communities in Stockholm',
        fact1:
          'Stockholm Swedes maintain Swedish language and Swedish cultural traditions.',
        fact2:
          'Nordic culture, social welfare, and maintaining Swedish identity.',
        share: 0.7,
        population: '≈ 1.4M',
        dominantReligion: 'Lutheranism / None',
        totalFertilityRate: '≈ 1.7'
      },
      {
        id: 'stockholm_middle_eastern',
        ethnicityName: 'Stockholm Middle Easterners',
        region: 'Middle Eastern communities in Stockholm (Iraqi, Syrian, Iranian)',
        fact1:
          'Stockholm Middle Easterners maintain Arabic, Kurdish, and Persian languages.',
        fact2:
          'Refugee migration, maintaining Middle Eastern identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 0.3M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  // Additional Asian regions
  {
    id: 'mongolia_ulaanbaatar',
    name: 'Ulaanbaatar & Central Mongolia',
    bounds: {
      minLng: 106.8,
      maxLng: 107.0,
      minLat: 47.8,
      maxLat: 48.0
    },
    ethnicities: [
      {
        id: 'ulaanbaatar_mongols',
        ethnicityName: 'Ulaanbaatar Mongols',
        region: 'Mongolian communities in Ulaanbaatar',
        fact1:
          'Ulaanbaatar Mongols maintain Mongolian language, Buddhist traditions, and nomadic heritage.',
        fact2:
          'Yurt culture, Buddhist monasteries, and maintaining Mongolian identity.',
        share: 0.95,
        population: '≈ 1.4M',
        dominantReligion: 'Buddhism',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'afghanistan_kabul',
    name: 'Kabul & Central Afghanistan',
    bounds: {
      minLng: 69.1,
      maxLng: 69.3,
      minLat: 34.4,
      maxLat: 34.6
    },
    ethnicities: [
      {
        id: 'kabul_pashtuns',
        ethnicityName: 'Kabul Pashtuns',
        region: 'Pashtun communities in Kabul',
        fact1:
          'Kabul Pashtuns maintain Pashto language, Islamic traditions, and Pashtun cultural practices.',
        fact2:
          'Pashtunwali code, maintaining Pashtun identity, and urban adaptation.',
        share: 0.5,
        population: '≈ 2M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 4.2'
      },
      {
        id: 'kabul_tajiks',
        ethnicityName: 'Kabul Tajiks',
        region: 'Tajik communities in Kabul',
        fact1:
          'Kabul Tajiks maintain Dari (Persian) language and Tajik cultural practices.',
        fact2:
          'Persian poetry, maintaining Tajik identity, and urban adaptation.',
        share: 0.35,
        population: '≈ 1.4M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 4.0'
      },
      {
        id: 'kabul_hazaras',
        ethnicityName: 'Kabul Hazaras',
        region: 'Hazara communities in Kabul',
        fact1:
          'Kabul Hazaras maintain Hazaragi language (Persian variant) and Hazara cultural practices.',
        fact2:
          'Shia Islam, maintaining Hazara identity, and facing discrimination.',
        share: 0.1,
        population: '≈ 0.4M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 4.5'
      }
    ]
  },
  // Additional Latin America regions
  {
    id: 'venezuela_caracas',
    name: 'Caracas Metropolitan Region',
    bounds: {
      minLng: -66.9,
      maxLng: -66.8,
      minLat: 10.4,
      maxLat: 10.6
    },
    ethnicities: [
      {
        id: 'caracas_mestizo',
        ethnicityName: 'Caracas Mestizos',
        region: 'Mestizo communities in Caracas',
        fact1:
          'Caracas mestizos combine Indigenous, Spanish, and African heritage.',
        fact2:
          'Venezuelan cuisine, maintaining Venezuelan identity, and urban adaptation.',
        share: 0.7,
        population: '≈ 2.8M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'caracas_white',
        ethnicityName: 'Caracas White Venezuelans',
        region: 'White Venezuelan communities in Caracas',
        fact1:
          'Caracas white Venezuelans include Spanish and other European heritage.',
        fact2:
          'European cultural influences, maintaining white Venezuelan identity.',
        share: 0.2,
        population: '≈ 0.8M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'colombia_medellin',
    name: 'Medellín & Antioquia',
    bounds: {
      minLng: -75.6,
      maxLng: -75.5,
      minLat: 6.2,
      maxLat: 6.3
    },
    ethnicities: [
      {
        id: 'medellin_paisa',
        ethnicityName: 'Medellín Paisas',
        region: 'Paisa communities in Medellín',
        fact1:
          'Medellín Paisas maintain Paisa dialect, Antioquia traditions, and Colombian cultural practices.',
        fact2:
          'Coffee culture, Paisa music, and maintaining Paisa identity.',
        share: 0.85,
        population: '≈ 2.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  // Additional US regions
  {
    id: 'us_houston_metro',
    name: 'Houston Metropolitan Region',
    bounds: {
      minLng: -95.5,
      maxLng: -95.1,
      minLat: 29.6,
      maxLat: 29.9
    },
    ethnicities: [
      {
        id: 'houston_hispanic',
        ethnicityName: 'Houston Hispanic/Latino',
        region: 'Hispanic communities in Houston (Mexican, Central American)',
        fact1:
          'Houston Hispanics maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Migration from Mexico and Central America, maintaining Hispanic identity.',
        share: 0.44,
        population: '≈ 2.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'houston_white_americans',
        ethnicityName: 'Houston White Americans',
        region: 'White American communities in Houston',
        fact1:
          'Houston white Americans include diverse European heritage and energy industry professionals.',
        fact2:
          'Suburban life, business networks, and maintaining European cultural traditions.',
        share: 0.32,
        population: '≈ 1.6M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'houston_african_american',
        ethnicityName: 'Houston African Americans',
        region: 'African American communities in Houston',
        fact1:
          'Houston African Americans maintain connections to Great Migration and contemporary Black culture.',
        fact2:
          'Gospel, hip hop, and strong community institutions shape Houston Black identity.',
        share: 0.18,
        population: '≈ 0.9M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'us_philadelphia_metro',
    name: 'Philadelphia Metropolitan Region',
    bounds: {
      minLng: -75.3,
      maxLng: -75.0,
      minLat: 39.9,
      maxLat: 40.1
    },
    ethnicities: [
      {
        id: 'philadelphia_white_americans',
        ethnicityName: 'Philadelphia White Americans',
        region: 'White American communities in Philadelphia',
        fact1:
          'Philadelphia white Americans include Italian, Irish, and other European heritage.',
        fact2:
          'Neighborhood identities, cheesesteaks, and diverse European traditions.',
        share: 0.42,
        population: '≈ 0.65M',
        dominantReligion: 'Christianity / Judaism',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'philadelphia_african_american',
        ethnicityName: 'Philadelphia African Americans',
        region: 'African American communities in Philadelphia',
        fact1:
          'Philadelphia African Americans maintain connections to Great Migration and contemporary Black culture.',
        fact2:
          'Soul music, strong community institutions, and maintaining Black identity.',
        share: 0.42,
        population: '≈ 0.65M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'us_boston_metro',
    name: 'Boston Metropolitan Region',
    bounds: {
      minLng: -71.2,
      maxLng: -70.8,
      minLat: 42.2,
      maxLat: 42.5
    },
    ethnicities: [
      {
        id: 'boston_white_americans',
        ethnicityName: 'Boston White Americans',
        region: 'White American communities in Boston',
        fact1:
          'Boston white Americans include Irish, Italian, and other European heritage communities.',
        fact2:
          'Neighborhood identities, Irish pubs, and diverse European traditions shape Boston white identity.',
        share: 0.52,
        population: '≈ 0.35M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'boston_african_american',
        ethnicityName: 'Boston African Americans',
        region: 'African American communities in Boston',
        fact1:
          'Boston African Americans maintain connections to Great Migration and contemporary Black culture.',
        fact2:
          'Gospel, strong community institutions, and maintaining Black identity.',
        share: 0.24,
        population: '≈ 0.16M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.6'
      },
      {
        id: 'boston_hispanic',
        ethnicityName: 'Boston Hispanic/Latino',
        region: 'Hispanic communities in Boston (Puerto Rican, Dominican)',
        fact1:
          'Boston Hispanics maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Maintaining connections to Latin America and urban adaptation.',
        share: 0.20,
        population: '≈ 0.13M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'us_denver_metro',
    name: 'Denver Metropolitan Region',
    bounds: {
      minLng: -105.1,
      maxLng: -104.8,
      minLat: 39.6,
      maxLat: 39.9
    },
    ethnicities: [
      {
        id: 'denver_white_americans',
        ethnicityName: 'Denver White Americans',
        region: 'White American communities in Denver',
        fact1:
          'Denver white Americans include diverse European heritage and outdoor recreation enthusiasts.',
        fact2:
          'Mountain lifestyle, outdoor recreation, and maintaining European cultural traditions.',
        share: 0.68,
        population: '≈ 0.5M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 1.5'
      },
      {
        id: 'denver_hispanic',
        ethnicityName: 'Denver Hispanic/Latino',
        region: 'Hispanic communities in Denver (Mexican, Central American)',
        fact1:
          'Denver Hispanics maintain Spanish language and diverse Latin American cultures.',
        fact2:
          'Migration from Mexico and Central America, maintaining Hispanic identity.',
        share: 0.22,
        population: '≈ 0.16M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  // Additional China regions
  {
    id: 'china_xian_central',
    name: 'Xi\'an & Central China',
    bounds: {
      minLng: 108.8,
      maxLng: 109.0,
      minLat: 34.2,
      maxLat: 34.3
    },
    ethnicities: [
      {
        id: 'xian_han_chinese',
        ethnicityName: 'Xi\'an Han Chinese',
        region: 'Han Chinese communities in Xi\'an',
        fact1:
          'Xi\'an Han Chinese maintain Mandarin and local dialects, ancient capital heritage, and Chinese cultural traditions.',
        fact2:
          'Terracotta Warriors, ancient history, and maintaining Chinese identity.',
        share: 0.95,
        population: '≈ 8M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.0'
      }
    ]
  },
  {
    id: 'china_hong_kong',
    name: 'Hong Kong Special Administrative Region',
    bounds: {
      minLng: 113.8,
      maxLng: 114.4,
      minLat: 22.1,
      maxLat: 22.5
    },
    ethnicities: [
      {
        id: 'hong_kong_cantonese',
        ethnicityName: 'Hong Kong Cantonese',
        region: 'Cantonese communities in Hong Kong',
        fact1:
          'Hong Kong Cantonese maintain Cantonese language, British colonial heritage, and distinct Hong Kong identity.',
        fact2:
          'Dim sum, Cantonese opera, and maintaining Hong Kong cultural identity.',
        share: 0.9,
        population: '≈ 6.5M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.8'
      }
    ]
  },
  // Additional India regions (beyond South Asia)
  {
    id: 'india_jaipur_rajasthan',
    name: 'Jaipur & Eastern Rajasthan',
    bounds: {
      minLng: 75.7,
      maxLng: 75.9,
      minLat: 26.8,
      maxLat: 27.0
    },
    ethnicities: [
      {
        id: 'jaipur_rajasthani',
        ethnicityName: 'Jaipur Rajasthani',
        region: 'Rajasthani communities in Jaipur',
        fact1:
          'Jaipur Rajasthani maintain Rajasthani language, Rajput heritage, and desert cultural traditions.',
        fact2:
          'Pink City, fort architecture, and maintaining Rajasthani identity.',
        share: 0.85,
        population: '≈ 3.5M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  {
    id: 'india_indore_madhya_pradesh',
    name: 'Indore & Central Madhya Pradesh',
    bounds: {
      minLng: 75.8,
      maxLng: 76.0,
      minLat: 22.7,
      maxLat: 22.8
    },
    ethnicities: [
      {
        id: 'indore_hindus',
        ethnicityName: 'Indore Hindus',
        region: 'Hindu communities in Indore',
        fact1:
          'Indore Hindus maintain Hindi language and central Indian cultural traditions.',
        fact2:
          'Temple festivals, maintaining central Indian identity, and urban adaptation.',
        share: 0.8,
        population: '≈ 2M',
        dominantReligion: 'Hinduism',
        totalFertilityRate: '≈ 2.2'
      },
      {
        id: 'indore_muslims',
        ethnicityName: 'Indore Muslims',
        region: 'Muslim communities in Indore',
        fact1:
          'Indore Muslims maintain Urdu and Hindi languages and Islamic practices.',
        fact2:
          'Islamic festivals, maintaining Muslim identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 0.4M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Additional Indonesia regions
  {
    id: 'indonesia_surabaya',
    name: 'Surabaya & East Java',
    bounds: {
      minLng: 112.7,
      maxLng: 112.8,
      minLat: -7.3,
      maxLat: -7.2
    },
    ethnicities: [
      {
        id: 'surabaya_javanese',
        ethnicityName: 'Surabaya Javanese',
        region: 'Javanese communities in Surabaya',
        fact1:
          'Surabaya Javanese maintain Javanese language and Javanese cultural traditions.',
        fact2:
          'Port city culture, maintaining Javanese identity, and urban adaptation.',
        share: 0.8,
        population: '≈ 3M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      },
      {
        id: 'surabaya_madurese',
        ethnicityName: 'Surabaya Madurese',
        region: 'Madurese communities in Surabaya',
        fact1:
          'Surabaya Madurese maintain Madurese language and Madurese cultural practices.',
        fact2:
          'Migration from Madura Island, maintaining Madurese identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 0.6M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'indonesia_balinese',
    name: 'Bali Island',
    bounds: {
      minLng: 114.5,
      maxLng: 115.5,
      minLat: -8.9,
      maxLat: -8.0
    },
    ethnicities: [
      {
        id: 'bali_balinese',
        ethnicityName: 'Bali Balinese',
        region: 'Balinese communities on Bali',
        fact1:
          'Bali Balinese maintain Balinese language, Hindu-Balinese religion, and distinct Balinese culture.',
        fact2:
          'Hindu temples, traditional dance, and maintaining Balinese identity.',
        share: 0.9,
        population: '≈ 4M',
        dominantReligion: 'Hinduism (Balinese)',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  // Additional African regions
  {
    id: 'cameroon_douala',
    name: 'Douala & Coastal Cameroon',
    bounds: {
      minLng: 9.6,
      maxLng: 9.8,
      minLat: 4.0,
      maxLat: 4.1
    },
    ethnicities: [
      {
        id: 'douala_fang',
        ethnicityName: 'Douala Fang',
        region: 'Fang communities in Douala',
        fact1:
          'Douala Fang maintain Fang language and Fang cultural practices.',
        fact2:
          'Port city culture, maintaining Fang identity, and urban adaptation.',
        share: 0.3,
        population: '≈ 0.9M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.2'
      },
      {
        id: 'douala_bamileke',
        ethnicityName: 'Douala Bamileke',
        region: 'Bamileke communities in Douala',
        fact1:
          'Douala Bamileke maintain Bamileke languages and Bamileke cultural practices.',
        fact2:
          'Business networks, maintaining Bamileke identity, and urban adaptation.',
        share: 0.25,
        population: '≈ 0.75M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.0'
      }
    ]
  },
  {
    id: 'ivory_coast_abidjan',
    name: 'Abidjan & Southern Ivory Coast',
    bounds: {
      minLng: -4.1,
      maxLng: -3.9,
      minLat: 5.2,
      maxLat: 5.4
    },
    ethnicities: [
      {
        id: 'abidjan_akan',
        ethnicityName: 'Abidjan Akan',
        region: 'Akan communities in Abidjan',
        fact1:
          'Abidjan Akan maintain Akan languages and Akan cultural practices.',
        fact2:
          'Port city culture, maintaining Akan identity, and urban adaptation.',
        share: 0.4,
        population: '≈ 2M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.5'
      },
      {
        id: 'abidjan_baoule',
        ethnicityName: 'Abidjan Baoulé',
        region: 'Baoulé communities in Abidjan',
        fact1:
          'Abidjan Baoulé maintain Baoulé language and Baoulé cultural practices.',
        fact2:
          'Migration from central Ivory Coast, maintaining Baoulé identity.',
        share: 0.25,
        population: '≈ 1.25M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.6'
      }
    ]
  },
  // Additional European regions
  {
    id: 'greece_athens',
    name: 'Athens Metropolitan Region',
    bounds: {
      minLng: 23.6,
      maxLng: 23.8,
      minLat: 37.9,
      maxLat: 38.0
    },
    ethnicities: [
      {
        id: 'athens_greeks',
        ethnicityName: 'Athens Greeks',
        region: 'Greek communities in Athens',
        fact1:
          'Athens Greeks maintain Greek language, Orthodox Christianity, and Greek cultural traditions.',
        fact2:
          'Ancient history, Orthodox churches, and maintaining Greek identity.',
        share: 0.9,
        population: '≈ 3.2M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.3'
      },
      {
        id: 'athens_albanians',
        ethnicityName: 'Athens Albanians',
        region: 'Albanian communities in Athens',
        fact1:
          'Athens Albanians maintain Albanian language and Albanian cultural practices.',
        fact2:
          'Migration from Albania, maintaining Albanian identity, and urban adaptation.',
        share: 0.05,
        population: '≈ 0.18M',
        dominantReligion: 'Islam / Orthodox Christianity',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'portugal_lisbon',
    name: 'Lisbon Metropolitan Region',
    bounds: {
      minLng: -9.2,
      maxLng: -9.0,
      minLat: 38.7,
      maxLat: 38.8
    },
    ethnicities: [
      {
        id: 'lisbon_portuguese',
        ethnicityName: 'Lisbon Portuguese',
        region: 'Portuguese communities in Lisbon',
        fact1:
          'Lisbon Portuguese maintain Portuguese language, Catholic traditions, and Portuguese cultural identity.',
        fact2:
          'Fado music, Portuguese cuisine, and maintaining Portuguese identity.',
        share: 0.85,
        population: '≈ 2.1M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.2'
      },
      {
        id: 'lisbon_brazilian',
        ethnicityName: 'Lisbon Brazilians',
        region: 'Brazilian communities in Lisbon',
        fact1:
          'Lisbon Brazilians maintain Portuguese language and Brazilian cultural practices.',
        fact2:
          'Migration from Brazil, maintaining Brazilian identity, and urban adaptation.',
        share: 0.08,
        population: '≈ 0.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  // Additional Middle East regions
  {
    id: 'yemen_sanaa',
    name: 'Sana\'a & Central Yemen',
    bounds: {
      minLng: 44.1,
      maxLng: 44.3,
      minLat: 15.3,
      maxLat: 15.4
    },
    ethnicities: [
      {
        id: 'sanaa_yemenis',
        ethnicityName: 'Sana\'a Yemenis',
        region: 'Yemeni Arab communities in Sana\'a',
        fact1:
          'Sana\'a Yemenis maintain Arabic language, Islamic traditions, and Yemeni cultural practices.',
        fact2:
          'Ancient architecture, qat culture, and maintaining Yemeni identity.',
        share: 0.95,
        population: '≈ 2.5M',
        dominantReligion: 'Sunni Islam / Zaydi Shia',
        totalFertilityRate: '≈ 4.2'
      }
    ]
  },
  {
    id: 'syria_damascus',
    name: 'Damascus & Southern Syria',
    bounds: {
      minLng: 36.2,
      maxLng: 36.4,
      minLat: 33.4,
      maxLat: 33.6
    },
    ethnicities: [
      {
        id: 'damascus_sunni',
        ethnicityName: 'Damascus Sunni Arabs',
        region: 'Sunni Arab communities in Damascus',
        fact1:
          'Damascus Sunnis maintain Arabic language and Sunni Islamic practices.',
        fact2:
          'Ancient history, Islamic architecture, and maintaining Syrian identity.',
        share: 0.75,
        population: '≈ 1.5M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 2.8'
      },
      {
        id: 'damascus_alawite',
        ethnicityName: 'Damascus Alawites',
        region: 'Alawite communities in Damascus',
        fact1:
          'Damascus Alawites maintain Arabic language and Alawite religious practices.',
        fact2:
          'Alawite religious traditions, maintaining Alawite identity, and political connections.',
        share: 0.12,
        population: '≈ 0.24M',
        dominantReligion: 'Alawite Islam',
        totalFertilityRate: '≈ 2.6'
      }
    ]
  },
  // Additional Central/South American regions
  {
    id: 'guatemala_guatemala_city',
    name: 'Guatemala City & Central Highlands',
    bounds: {
      minLng: -90.5,
      maxLng: -90.4,
      minLat: 14.6,
      maxLat: 14.7
    },
    ethnicities: [
      {
        id: 'guatemala_city_mestizo',
        ethnicityName: 'Guatemala City Mestizos',
        region: 'Mestizo communities in Guatemala City',
        fact1:
          'Guatemala City mestizos combine Spanish and Indigenous heritage.',
        fact2:
          'Spanish language, maintaining mestizo identity, and urban adaptation.',
        share: 0.6,
        population: '≈ 1.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.5'
      },
      {
        id: 'guatemala_city_maya',
        ethnicityName: 'Guatemala City Maya',
        region: 'Maya communities in Guatemala City',
        fact1:
          'Guatemala City Maya maintain Mayan languages and Maya cultural practices.',
        fact2:
          'Migration from highlands, maintaining Maya identity, and urban adaptation.',
        share: 0.35,
        population: '≈ 0.7M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  {
    id: 'honduras_tegucigalpa',
    name: 'Tegucigalpa & Central Honduras',
    bounds: {
      minLng: -87.2,
      maxLng: -87.1,
      minLat: 14.0,
      maxLat: 14.1
    },
    ethnicities: [
      {
        id: 'tegucigalpa_mestizo',
        ethnicityName: 'Tegucigalpa Mestizos',
        region: 'Mestizo communities in Tegucigalpa',
        fact1:
          'Tegucigalpa mestizos combine Spanish and Indigenous heritage.',
        fact2:
          'Spanish language, maintaining mestizo identity, and urban adaptation.',
        share: 0.9,
        population: '≈ 1.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.6'
      }
    ]
  },
  // Additional African regions
  {
    id: 'sudan_khartoum',
    name: 'Khartoum & Central Sudan',
    bounds: {
      minLng: 32.4,
      maxLng: 32.7,
      minLat: 15.5,
      maxLat: 15.6
    },
    ethnicities: [
      {
        id: 'khartoum_arab',
        ethnicityName: 'Khartoum Arabs',
        region: 'Arab communities in Khartoum',
        fact1:
          'Khartoum Arabs maintain Arabic language, Islamic traditions, and Sudanese cultural practices.',
        fact2:
          'Nile culture, Islamic architecture, and maintaining Sudanese identity.',
        share: 0.7,
        population: '≈ 2.1M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 4.0'
      },
      {
        id: 'khartoum_nubian',
        ethnicityName: 'Khartoum Nubians',
        region: 'Nubian communities in Khartoum',
        fact1:
          'Khartoum Nubians maintain Nubian languages and Nubian cultural practices.',
        fact2:
          'Ancient Nubian heritage, maintaining Nubian identity, and urban adaptation.',
        share: 0.15,
        population: '≈ 0.45M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 3.8'
      }
    ]
  },
  {
    id: 'libya_tripoli',
    name: 'Tripoli & Northwestern Libya',
    bounds: {
      minLng: 13.1,
      maxLng: 13.3,
      minLat: 32.8,
      maxLat: 32.9
    },
    ethnicities: [
      {
        id: 'tripoli_arab',
        ethnicityName: 'Tripoli Arabs',
        region: 'Arab communities in Tripoli',
        fact1:
          'Tripoli Arabs maintain Arabic language, Islamic traditions, and Libyan cultural practices.',
        fact2:
          'Mediterranean culture, Islamic architecture, and maintaining Libyan identity.',
        share: 0.9,
        population: '≈ 1.2M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 2.4'
      },
      {
        id: 'tripoli_amazigh',
        ethnicityName: 'Tripoli Amazigh',
        region: 'Amazigh communities in Tripoli',
        fact1:
          'Tripoli Amazigh maintain Tamazight language and Amazigh cultural practices.',
        fact2:
          'Amazigh language revival, maintaining Amazigh identity, and urban adaptation.',
        share: 0.05,
        population: '≈ 0.07M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  // Additional Southeast Asia regions
  {
    id: 'thailand_phuket_south',
    name: 'Phuket & Southern Thailand',
    bounds: {
      minLng: 98.3,
      maxLng: 98.4,
      minLat: 7.8,
      maxLat: 7.9
    },
    ethnicities: [
      {
        id: 'phuket_thai',
        ethnicityName: 'Phuket Thai',
        region: 'Thai communities in Phuket',
        fact1:
          'Phuket Thai maintain Thai language, Theravada Buddhism, and southern Thai cultural traditions.',
        fact2:
          'Beach culture, tourism, and maintaining Thai identity.',
        share: 0.7,
        population: '≈ 0.35M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 1.4'
      },
      {
        id: 'phuket_chinese_thai',
        ethnicityName: 'Phuket Chinese Thai',
        region: 'Chinese-Thai communities in Phuket',
        fact1:
          'Phuket Chinese-Thai maintain Chinese dialects and Chinese cultural practices.',
        fact2:
          'Chinese temples, maintaining Chinese-Thai identity, and business networks.',
        share: 0.25,
        population: '≈ 0.13M',
        dominantReligion: 'Buddhism / Taoism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  // Additional Central America regions
  {
    id: 'costa_rica_san_jose',
    name: 'San José & Central Valley',
    bounds: {
      minLng: -84.1,
      maxLng: -84.0,
      minLat: 9.9,
      maxLat: 10.0
    },
    ethnicities: [
      {
        id: 'san_jose_mestizo',
        ethnicityName: 'San José Mestizos',
        region: 'Mestizo communities in San José',
        fact1:
          'San José mestizos combine Spanish and Indigenous heritage.',
        fact2:
          'Spanish language, maintaining mestizo identity, and urban adaptation.',
        share: 0.85,
        population: '≈ 1.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'panama_panama_city',
    name: 'Panama City & Canal Zone',
    bounds: {
      minLng: -79.6,
      maxLng: -79.4,
      minLat: 8.9,
      maxLat: 9.0
    },
    ethnicities: [
      {
        id: 'panama_city_mestizo',
        ethnicityName: 'Panama City Mestizos',
        region: 'Mestizo communities in Panama City',
        fact1:
          'Panama City mestizos combine Spanish, Indigenous, and African heritage.',
        fact2:
          'Canal culture, maintaining mestizo identity, and urban adaptation.',
        share: 0.65,
        population: '≈ 1.3M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.0'
      },
      {
        id: 'panama_city_afro_panamanian',
        ethnicityName: 'Panama City Afro-Panamanians',
        region: 'Afro-Panamanian communities in Panama City',
        fact1:
          'Panama City Afro-Panamanians maintain African heritage and Panamanian cultural practices.',
        fact2:
          'Canal Zone heritage, maintaining Afro-Panamanian identity, and urban adaptation.',
        share: 0.2,
        population: '≈ 0.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  // Region boxes for ethnicity points - Europe
  {
    id: 'norway_scandinavia',
    name: 'Norway',
    bounds: {
      minLng: 5.0,
      maxLng: 31.0,
      minLat: 58.0,
      maxLat: 71.0
    },
    ethnicities: [
      {
        id: 'norwegian_002',
        ethnicityName: 'Norwegians',
        region: 'Norway, Scandinavia',
        fact1: 'Norwegians are a North Germanic people shaped by maritime trade, fjord settlements, and Viking heritage.',
        fact2: 'Modern Norwegian identity blends social democracy, outdoor culture, and strong local dialect traditions.',
        share: 0.9,
        population: '≈ 5.4M',
        dominantReligion: 'Lutheranism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'sweden_scandinavia',
    name: 'Sweden',
    bounds: {
      minLng: 11.0,
      maxLng: 24.0,
      minLat: 55.0,
      maxLat: 69.0
    },
    ethnicities: [
      {
        id: 'swedish_003',
        ethnicityName: 'Swedes',
        region: 'Sweden, Scandinavia',
        fact1: 'Swedes are a North Germanic ethnic group known for Lutheran heritage and egalitarian social norms.',
        fact2: 'Contemporary Swedish culture emphasizes design minimalism, environmentalism, and collective welfare values.',
        share: 0.9,
        population: '≈ 10M',
        dominantReligion: 'Lutheranism',
        totalFertilityRate: '≈ 1.7'
      }
    ]
  },
  {
    id: 'finland_scandinavia',
    name: 'Finland',
    bounds: {
      minLng: 20.0,
      maxLng: 32.0,
      minLat: 60.0,
      maxLat: 70.0
    },
    ethnicities: [
      {
        id: 'finn_004',
        ethnicityName: 'Finns',
        region: 'Finland and Finnish diaspora',
        fact1: 'Finns are a Finno-Ugric people with a language distinct from neighboring Scandinavian tongues.',
        fact2: 'Finnish culture values silence, sauna rituals, and close ties to forested lake landscapes.',
        share: 0.9,
        population: '≈ 5.5M',
        dominantReligion: 'Lutheranism',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'lithuania_baltic',
    name: 'Lithuania',
    bounds: {
      minLng: 21.0,
      maxLng: 26.5,
      minLat: 53.5,
      maxLat: 56.5
    },
    ethnicities: [
      {
        id: 'lithuanian_005',
        ethnicityName: 'Lithuanians',
        region: 'Baltic region, Lithuania',
        fact1: 'Lithuanians are a Baltic people whose language preserves many archaic Indo-European features.',
        fact2: 'Folk song traditions, pagan Baltic symbols, and Catholic festivals coexist in modern Lithuanian culture.',
        share: 0.85,
        population: '≈ 2.8M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'latvia_baltic',
    name: 'Latvia',
    bounds: {
      minLng: 21.0,
      maxLng: 28.0,
      minLat: 55.5,
      maxLat: 58.0
    },
    ethnicities: [
      {
        id: 'latvian_006',
        ethnicityName: 'Latvians',
        region: 'Latvia, Baltic region',
        fact1: 'Latvians are a Baltic ethnic group historically shaped by Hanseatic trade and agrarian life.',
        fact2: 'Midsummer solstice celebrations, folk costumes, and choral singing remain central cultural symbols.',
        share: 0.6,
        population: '≈ 1.2M',
        dominantReligion: 'Lutheranism / Catholicism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'estonia_baltic',
    name: 'Estonia',
    bounds: {
      minLng: 23.0,
      maxLng: 28.5,
      minLat: 57.5,
      maxLat: 59.5
    },
    ethnicities: [
      {
        id: 'estonian_007',
        ethnicityName: 'Estonians',
        region: 'Estonia, Baltic Sea coast',
        fact1: 'Estonians are a Finno-Ugric people with cultural links to Finns and ancient forest settlements.',
        fact2: 'A "singing revolution" helped restore Estonian independence, highlighting the power of choral traditions.',
        share: 0.7,
        population: '≈ 0.9M',
        dominantReligion: 'Lutheranism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'slovenia_alpine',
    name: 'Slovenia',
    bounds: {
      minLng: 13.0,
      maxLng: 16.5,
      minLat: 45.5,
      maxLat: 46.9
    },
    ethnicities: [
      {
        id: 'slovene_008',
        ethnicityName: 'Slovenes',
        region: 'Slovenia and neighboring Alpine regions',
        fact1: 'Slovenes are a South Slavic people whose homeland bridges Alpine, Pannonian, and Adriatic zones.',
        fact2: 'Folk dances, polka music, and vineyard culture shape many rural Slovenian identities.',
        share: 0.85,
        population: '≈ 2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'austria_alpine',
    name: 'Austria',
    bounds: {
      minLng: 9.5,
      maxLng: 17.0,
      minLat: 46.0,
      maxLat: 49.0
    },
    ethnicities: [
      {
        id: 'austrian_009',
        ethnicityName: 'Austrians',
        region: 'Austria, Central Europe',
        fact1: 'Austrians are a German-speaking people deeply influenced by Habsburg imperial history.',
        fact2: 'Classical music, coffeehouse culture, and alpine village traditions coexist in Austrian life.',
        share: 0.9,
        population: '≈ 8.9M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'switzerland_alpine',
    name: 'Switzerland',
    bounds: {
      minLng: 6.0,
      maxLng: 10.5,
      minLat: 45.8,
      maxLat: 47.8
    },
    ethnicities: [
      {
        id: 'swiss_010',
        ethnicityName: 'Swiss (German-speaking)',
        region: 'Alpine Switzerland',
        fact1: 'German-speaking Swiss communities developed around mountain valleys, trade routes, and urban cantons.',
        fact2: 'Direct democracy, multilingualism, and local autonomy are cornerstones of Swiss civic culture.',
        share: 0.65,
        population: '≈ 5.5M',
        dominantReligion: 'Catholicism / Protestantism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'france_metropolitan',
    name: 'France',
    bounds: {
      minLng: -5.0,
      maxLng: 9.5,
      minLat: 42.0,
      maxLat: 51.0
    },
    ethnicities: [
      {
        id: 'french_011',
        ethnicityName: 'French',
        region: 'France and global Francophone diaspora',
        fact1: 'The French are a Western European people shaped by Roman, Celtic, and Frankish legacies.',
        fact2: 'Cuisine, philosophy, fashion, and language policy play strong roles in French national identity.',
        share: 0.85,
        population: '≈ 55M',
        dominantReligion: 'Catholicism / None',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'spain_castile',
    name: 'Central Spain (Castile)',
    bounds: {
      minLng: -6.0,
      maxLng: -1.0,
      minLat: 39.0,
      maxLat: 42.0
    },
    ethnicities: [
      {
        id: 'castilian_012',
        ethnicityName: 'Castilians',
        region: 'Central Spain (Castile) and Spanish-speaking world',
        fact1: 'Castilians historically led the unification of Spain and the expansion of the Spanish language.',
        fact2: 'Cervantes, Golden Age literature, and Madrid urban culture shape Castilian identity narratives.',
        share: 0.7,
        population: '≈ 15M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'spain_basque',
    name: 'Basque Country',
    bounds: {
      minLng: -3.0,
      maxLng: -1.0,
      minLat: 42.0,
      maxLat: 43.5
    },
    ethnicities: [
      {
        id: 'basque_013',
        ethnicityName: 'Basques',
        region: 'Western Pyrenees, Spain and France',
        fact1: 'Basques speak Euskara, a language isolate unrelated to surrounding Indo-European tongues.',
        fact2: 'Rural sports, txalaparta percussion, and strong local institutions support Basque cultural resilience.',
        share: 0.5,
        population: '≈ 2.2M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'spain_catalonia',
    name: 'Catalonia',
    bounds: {
      minLng: 0.0,
      maxLng: 3.5,
      minLat: 40.5,
      maxLat: 42.8
    },
    ethnicities: [
      {
        id: 'catalan_014',
        ethnicityName: 'Catalans',
        region: 'Catalonia, Valencia, Balearic Islands, Andorra',
        fact1: 'Catalans are a Romance-speaking people with distinct language, civil law, and political traditions.',
        fact2: 'Castells human towers, senyera flags, and urban modernism define much Catalan public culture.',
        share: 0.7,
        population: '≈ 7.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'italy_peninsula',
    name: 'Italy',
    bounds: {
      minLng: 6.5,
      maxLng: 18.5,
      minLat: 36.0,
      maxLat: 47.0
    },
    ethnicities: [
      {
        id: 'italian_015',
        ethnicityName: 'Italians',
        region: 'Italy and extensive global diaspora',
        fact1: 'Italians descend from diverse regional cultures unified under a modern nation-state in the 19th century.',
        fact2: 'Family networks, food rituals, and strong regional identities anchor Italian everyday life.',
        share: 0.9,
        population: '≈ 55M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'hungary_carpathian',
    name: 'Hungary',
    bounds: {
      minLng: 16.0,
      maxLng: 22.9,
      minLat: 45.7,
      maxLat: 48.6
    },
    ethnicities: [
      {
        id: 'hungarian_016',
        ethnicityName: 'Hungarians (Magyars)',
        region: 'Hungary and Carpathian Basin',
        fact1: 'Hungarians are a Uralic-speaking people whose medieval kingdom shaped Central European politics.',
        fact2: 'Csárdás dance, paprika cuisine, and Budapest café culture are iconic Hungarian markers.',
        share: 0.85,
        population: '≈ 9.6M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'belarus_eastern_europe',
    name: 'Belarus',
    bounds: {
      minLng: 23.0,
      maxLng: 32.8,
      minLat: 51.2,
      maxLat: 56.2
    },
    ethnicities: [
      {
        id: 'belarusian_020',
        ethnicityName: 'Belarusians',
        region: 'Belarus and nearby borderlands',
        fact1: 'Belarusians are an East Slavic group with historical ties to the Grand Duchy of Lithuania.',
        fact2: 'Rural crafts, forest folklore, and bilingualism shape many Belarusian local identities.',
        share: 0.85,
        population: '≈ 8M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'georgia_caucasus',
    name: 'Georgia',
    bounds: {
      minLng: 39.9,
      maxLng: 46.7,
      minLat: 41.0,
      maxLat: 43.6
    },
    ethnicities: [
      {
        id: 'georgian_021',
        ethnicityName: 'Georgians (Kartvelians)',
        region: 'Georgia, South Caucasus',
        fact1: 'Georgians are a Kartvelian-speaking people known for ancient wine-making traditions.',
        fact2: 'Polyphonic singing and supra feasts with toasting rituals structure Georgian social life.',
        share: 0.85,
        population: '≈ 3.7M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'azerbaijan_caucasus',
    name: 'Azerbaijan',
    bounds: {
      minLng: 44.8,
      maxLng: 50.4,
      minLat: 38.4,
      maxLat: 41.9
    },
    ethnicities: [
      {
        id: 'azerbaijani_022',
        ethnicityName: 'Azerbaijanis',
        region: 'Azerbaijan and northwest Iran',
        fact1: 'Azerbaijanis are a Turkic-speaking people shaped by Caspian trade and pastoralism.',
        fact2: 'Mugham music, carpet weaving, and tea culture are central to Azerbaijani aesthetics.',
        share: 0.9,
        population: '≈ 10M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'iraq_mesopotamia',
    name: 'Iraq',
    bounds: {
      minLng: 38.8,
      maxLng: 48.6,
      minLat: 29.0,
      maxLat: 37.4
    },
    ethnicities: [
      {
        id: 'arab_iraqi_023',
        ethnicityName: 'Iraqi Arabs',
        region: 'Iraq, Mesopotamian plain',
        fact1: 'Iraqi Arabs trace cultural roots to ancient Mesopotamian civilizations and Islamic scholarship.',
        fact2: 'Baghdad has long been a center of poetry, theology, and urban café storytelling traditions.',
        share: 0.75,
        population: '≈ 30M',
        dominantReligion: 'Shia Islam / Sunni Islam',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'saudi_arabia_najd',
    name: 'Central Saudi Arabia (Najd)',
    bounds: {
      minLng: 40.0,
      maxLng: 50.0,
      minLat: 20.0,
      maxLat: 28.0
    },
    ethnicities: [
      {
        id: 'arab_najdi_024',
        ethnicityName: 'Najdi Arabs',
        region: 'Central Arabian Peninsula (Najd)',
        fact1: 'Najdi Arabs historically practiced oasis farming and nomadic camel herding in central Arabia.',
        fact2: 'Poetic recitation and tribal lineages remain important in Najdi social organization and prestige.',
        share: 0.8,
        population: '≈ 12M',
        dominantReligion: 'Sunni Islam (Wahhabi)',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'palestine_levant',
    name: 'Palestine',
    bounds: {
      minLng: 34.2,
      maxLng: 35.6,
      minLat: 31.2,
      maxLat: 32.6
    },
    ethnicities: [
      {
        id: 'palestinian_025',
        ethnicityName: 'Palestinians',
        region: 'Historic Palestine and global diaspora',
        fact1: 'Palestinians are an Arab people with deep village, coastal, and urban traditions in the Levant.',
        fact2: 'Tātreez embroidery, olive harvests, and oral histories sustain Palestinian communal memory worldwide.',
        share: 0.9,
        population: '≈ 5M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'iran_persian_plateau',
    name: 'Iran',
    bounds: {
      minLng: 44.0,
      maxLng: 63.3,
      minLat: 25.0,
      maxLat: 39.8
    },
    ethnicities: [
      {
        id: 'persian_027',
        ethnicityName: 'Persians',
        region: 'Iranian plateau and diaspora',
        fact1: 'Persians speak Farsi and inherit traditions from Achaemenid, Sasanian, and Islamic empires.',
        fact2: 'Nowruz spring celebrations, classical poetry, and courtyard architecture define Persian cultural worlds.',
        share: 0.6,
        population: '≈ 50M',
        dominantReligion: 'Shia Islam',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'kurdistan_mountains',
    name: 'Kurdistan',
    bounds: {
      minLng: 38.0,
      maxLng: 48.0,
      minLat: 35.0,
      maxLat: 38.0
    },
    ethnicities: [
      {
        id: 'kurd_028',
        ethnicityName: 'Kurds',
        region: 'Mountain regions of Turkey, Iraq, Iran, and Syria',
        fact1: 'Kurds are an Iranian-speaking people with strong mountain pastoral and tribal traditions.',
        fact2: 'Newroz fires, colorful dress, and storytelling sustain Kurdish identity across national borders.',
        share: 0.9,
        population: '≈ 30M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'bangladesh_bengal',
    name: 'Bangladesh',
    bounds: {
      minLng: 88.0,
      maxLng: 92.7,
      minLat: 20.7,
      maxLat: 26.6
    },
    ethnicities: [
      {
        id: 'bengali_029',
        ethnicityName: 'Bengalis',
        region: 'Bangladesh and Indian state of West Bengal',
        fact1: 'Bengalis share a literary language shaped by poets like Rabindranath Tagore and Kazi Nazrul Islam.',
        fact2: 'Rice, river life, and Durga Puja festivities form core symbols in Bengali cultural expression.',
        share: 0.98,
        population: '≈ 170M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'china_north_plain',
    name: 'North China Plain',
    bounds: {
      minLng: 110.0,
      maxLng: 120.0,
      minLat: 32.0,
      maxLat: 42.0
    },
    ethnicities: [
      {
        id: 'han_north_036',
        ethnicityName: 'Northern Han Chinese',
        region: 'Northern China, North China Plain',
        fact1: 'Northern Han communities developed around Yellow River agriculture and imperial bureaucratic centers.',
        fact2: 'Mandarin dialects, wheat-based foods, and Confucian traditions deeply influence northern Han life.',
        share: 0.95,
        population: '≈ 400M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.0'
      }
    ]
  },
  {
    id: 'china_south_coastal',
    name: 'South China Coastal',
    bounds: {
      minLng: 108.0,
      maxLng: 118.0,
      minLat: 18.0,
      maxLat: 28.0
    },
    ethnicities: [
      {
        id: 'han_south_037',
        ethnicityName: 'Southern Han Chinese',
        region: 'Southern coastal China and overseas Chinese hubs',
        fact1: 'Southern Han societies grew along river deltas, seaborne trade, and dense urban markets.',
        fact2: 'Cantonese opera, dim sum cuisine, and clan associations shape many southern Han communities globally.',
        share: 0.95,
        population: '≈ 500M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.1'
      }
    ]
  },
  {
    id: 'china_xinjiang',
    name: 'Xinjiang',
    bounds: {
      minLng: 73.0,
      maxLng: 96.0,
      minLat: 34.0,
      maxLat: 49.0
    },
    ethnicities: [
      {
        id: 'uyghur_038',
        ethnicityName: 'Uyghurs',
        region: 'Xinjiang region, Northwest China',
        fact1: 'Uyghurs are a Turkic Muslim people historically involved in Silk Road caravan trade.',
        fact2: 'Muqam music, meshrep gatherings, and spice-rich cuisine express Uyghur cultural heritage.',
        share: 0.45,
        population: '≈ 12M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'tibet_plateau',
    name: 'Tibet',
    bounds: {
      minLng: 78.0,
      maxLng: 99.0,
      minLat: 26.0,
      maxLat: 36.0
    },
    ethnicities: [
      {
        id: 'tibetan_039',
        ethnicityName: 'Tibetans',
        region: 'Tibetan Plateau, Himalayas',
        fact1: 'Tibetans are a high-altitude people whose culture centers on Tibetan Buddhism and pastoralism.',
        fact2: 'Monasteries, prayer flags, and yak-based livelihoods structure many Tibetan landscapes and rituals.',
        share: 0.9,
        population: '≈ 6M',
        dominantReligion: 'Buddhism (Tibetan)',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'japan_archipelago',
    name: 'Japan',
    bounds: {
      minLng: 129.0,
      maxLng: 146.0,
      minLat: 31.0,
      maxLat: 46.0
    },
    ethnicities: [
      {
        id: 'japanese_040',
        ethnicityName: 'Japanese',
        region: 'Japanese archipelago',
        fact1: 'The Japanese are an East Asian people whose society balances tradition and advanced technology.',
        fact2: 'Seasonal festivals, Shinto shrines, and aesthetic concepts like wabi-sabi inform daily life in Japan.',
        share: 0.98,
        population: '≈ 125M',
        dominantReligion: 'Shinto / Buddhism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'hokkaido_ainu',
    name: 'Hokkaido',
    bounds: {
      minLng: 139.0,
      maxLng: 146.0,
      minLat: 41.0,
      maxLat: 45.5
    },
    ethnicities: [
      {
        id: 'ainu_041',
        ethnicityName: 'Ainu',
        region: 'Hokkaido, Sakhalin, and Kuril Islands',
        fact1: 'The Ainu are an Indigenous people of northern Japan with distinct language and animist traditions.',
        fact2: 'Bear rituals, carved patterns, and oral epics characterize Ainu cultural revival efforts today.',
        share: 0.01,
        population: '≈ 0.02M',
        dominantReligion: 'Animism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'korea_peninsula',
    name: 'Korea',
    bounds: {
      minLng: 124.5,
      maxLng: 130.0,
      minLat: 33.0,
      maxLat: 43.0
    },
    ethnicities: [
      {
        id: 'korean_042',
        ethnicityName: 'Koreans',
        region: 'Korean Peninsula and global diaspora',
        fact1: 'Koreans share a language and history across North and South Korean political borders.',
        fact2: 'Kimchi, Hangul script, and pop culture exports like K-pop shape Korean global visibility today.',
        share: 0.99,
        population: '≈ 77M',
        dominantReligion: 'Buddhism / Christianity',
        totalFertilityRate: '≈ 0.7'
      }
    ]
  },
  {
    id: 'thailand_central',
    name: 'Central Thailand',
    bounds: {
      minLng: 97.0,
      maxLng: 105.5,
      minLat: 5.5,
      maxLat: 20.5
    },
    ethnicities: [
      {
        id: 'thai_043',
        ethnicityName: 'Thai',
        region: 'Central Thailand and Chao Phraya basin',
        fact1: 'Thai people are a Tai-speaking group whose kingdoms flourished around rice agriculture and Buddhism.',
        fact2: 'Theravada temples, street food culture, and royal ceremonies structure many Thai social spaces.',
        share: 0.75,
        population: '≈ 50M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'vietnam_lowlands',
    name: 'Vietnam',
    bounds: {
      minLng: 102.0,
      maxLng: 109.5,
      minLat: 8.5,
      maxLat: 23.5
    },
    ethnicities: [
      {
        id: 'kinh_044',
        ethnicityName: 'Kinh (Vietnamese)',
        region: 'Lowland and coastal Vietnam',
        fact1: 'The Kinh are the majority ethnic group in Vietnam, influenced by Confucian and village institutions.',
        fact2: 'Rice paddies, ancestor worship, and phở cuisine are widely recognized aspects of Kinh culture.',
        share: 0.85,
        population: '≈ 80M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  {
    id: 'myanmar_irrawaddy',
    name: 'Myanmar',
    bounds: {
      minLng: 92.0,
      maxLng: 101.2,
      minLat: 9.8,
      maxLat: 22.5
    },
    ethnicities: [
      {
        id: 'bamar_045',
        ethnicityName: 'Bamar',
        region: 'Central Myanmar, Irrawaddy basin',
        fact1: 'The Bamar are the largest ethnic group in Myanmar, historically centered around river kingdoms.',
        fact2: 'Pagoda landscapes, Buddhist monastic life, and traditional theater mark Bamar cultural expression.',
        share: 0.68,
        population: '≈ 35M',
        dominantReligion: 'Buddhism (Theravada)',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'malaysia_peninsula',
    name: 'Malay Peninsula',
    bounds: {
      minLng: 100.0,
      maxLng: 119.3,
      minLat: 0.8,
      maxLat: 7.4
    },
    ethnicities: [
      {
        id: 'malay_046',
        ethnicityName: 'Malays',
        region: 'Malay Peninsula and maritime Southeast Asia',
        fact1: 'Malays are an Austronesian people historically active in maritime trade and Islamic scholarship.',
        fact2: 'Batiks, royal courts, and coastal fishing villages contribute to layered Malay cultural identities.',
        share: 0.65,
        population: '≈ 20M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  {
    id: 'philippines_luzon',
    name: 'Luzon (Philippines)',
    bounds: {
      minLng: 116.9,
      maxLng: 126.6,
      minLat: 12.0,
      maxLat: 18.7
    },
    ethnicities: [
      {
        id: 'tagalog_047',
        ethnicityName: 'Tagalog',
        region: 'Luzon, Philippines',
        fact1: 'Tagalog people helped shape the national language Filipino and Manila-centered urban culture.',
        fact2: 'Fiestas, Catholic devotions, and overseas migration patterns influence many Tagalog family stories.',
        share: 0.28,
        population: '≈ 30M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'south_africa_kwazulu',
    name: 'KwaZulu-Natal',
    bounds: {
      minLng: 28.0,
      maxLng: 32.9,
      minLat: -30.7,
      maxLat: -26.8
    },
    ethnicities: [
      {
        id: 'zulu_048',
        ethnicityName: 'Zulu',
        region: 'KwaZulu-Natal, South Africa',
        fact1: 'The Zulu are a Nguni-speaking people whose kingdom rose to prominence in the 19th century.',
        fact2: 'Beadwork, isicathamiya choral singing, and cattle symbolism remain important Zulu cultural forms.',
        share: 0.8,
        population: '≈ 11M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'lesotho_highlands',
    name: 'Lesotho',
    bounds: {
      minLng: 27.0,
      maxLng: 29.5,
      minLat: -30.7,
      maxLat: -28.6
    },
    ethnicities: [
      {
        id: 'sotho_049',
        ethnicityName: 'Sotho',
        region: 'Lesotho and South African highlands',
        fact1: 'Sotho communities developed in highland farming areas with strong chieftaincy systems.',
        fact2: 'Blanket clothing, mountain villages, and initiation schools characterize many Sotho traditions today.',
        share: 0.99,
        population: '≈ 2.2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 2.9'
      }
    ]
  },
  {
    id: 'kenya_central_highlands',
    name: 'Central Kenya',
    bounds: {
      minLng: 35.0,
      maxLng: 38.5,
      minLat: -1.5,
      maxLat: 1.0
    },
    ethnicities: [
      {
        id: 'kikuyu_050',
        ethnicityName: 'Kikuyu',
        region: 'Central Kenya highlands',
        fact1: 'The Kikuyu are a Bantu-speaking people who farmed fertile highland soils near Mount Kenya.',
        fact2: 'Land rights, age-set rituals, and storytelling feature prominently in Kikuyu cultural history.',
        share: 0.22,
        population: '≈ 8M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'tanzania_coast',
    name: 'Tanzania Coast',
    bounds: {
      minLng: 38.0,
      maxLng: 40.5,
      minLat: -7.5,
      maxLat: -5.0
    },
    ethnicities: [
      {
        id: 'swahili_051',
        ethnicityName: 'Swahili Coastal Communities',
        region: 'East African coast and islands',
        fact1: 'Swahili groups emerged from centuries of interaction among African, Arab, and Persian traders.',
        fact2: 'Stone towns, carved doors, and Swahili poetry reflect cosmopolitan Indian Ocean heritage.',
        share: 0.1,
        population: '≈ 1.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 3.8'
      }
    ]
  },
  {
    id: 'nigeria_yoruba',
    name: 'Southwestern Nigeria',
    bounds: {
      minLng: 2.5,
      maxLng: 6.0,
      minLat: 6.0,
      maxLat: 8.0
    },
    ethnicities: [
      {
        id: 'yoruba_052',
        ethnicityName: 'Yoruba',
        region: 'Southwestern Nigeria and Benin',
        fact1: 'The Yoruba are a large West African people with historic city-states like Ife and Oyo.',
        fact2: 'Ifá divination, talking drums, and elaborate festivals influence Yoruba communities and diaspora religions.',
        share: 0.21,
        population: '≈ 45M',
        dominantReligion: 'Islam / Christianity',
        totalFertilityRate: '≈ 4.5'
      }
    ]
  },
  {
    id: 'nigeria_hausa',
    name: 'Northern Nigeria',
    bounds: {
      minLng: 3.0,
      maxLng: 14.7,
      minLat: 6.5,
      maxLat: 13.9
    },
    ethnicities: [
      {
        id: 'hausa_053',
        ethnicityName: 'Hausa',
        region: 'Northern Nigeria and Niger',
        fact1: 'The Hausa are a Sahelian trading people with walled cities linked by caravan routes.',
        fact2: 'Islamic scholarship, radio dramas, and dye-pit crafts are notable aspects of Hausa cultural life.',
        share: 0.3,
        population: '≈ 70M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.0'
      }
    ]
  },
  {
    id: 'ghana_ashanti',
    name: 'Central Ghana',
    bounds: {
      minLng: -2.8,
      maxLng: 0.3,
      minLat: 5.5,
      maxLat: 8.0
    },
    ethnicities: [
      {
        id: 'ashanti_054',
        ethnicityName: 'Ashanti',
        region: 'Central Ghana forest zone',
        fact1: 'The Ashanti built a powerful kingdom organized around gold trade and stool-based chieftaincy.',
        fact2: 'Kente cloth, royal courts, and ancestral stools serve as enduring symbols of Ashanti sovereignty.',
        share: 0.15,
        population: '≈ 5M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'egypt_nile',
    name: 'Egypt',
    bounds: {
      minLng: 24.7,
      maxLng: 37.0,
      minLat: 22.0,
      maxLat: 31.7
    },
    ethnicities: [
      {
        id: 'egyptian_arab_055',
        ethnicityName: 'Egyptian Arabs',
        region: 'Nile Valley, Egypt',
        fact1: 'Egyptian Arabs are shaped by Pharaonic heritage, Arabization, and centuries of riverine settlement.',
        fact2: "Cairo's film industry, popular music, and colloquial Arabic influence the wider Arab world culturally.",
        share: 0.99,
        population: '≈ 105M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'nepal_himalayas',
    name: 'Nepal',
    bounds: {
      minLng: 80.0,
      maxLng: 88.2,
      minLat: 26.3,
      maxLat: 30.4
    },
    ethnicities: [
      {
        id: 'sherpa_056',
        ethnicityName: 'Sherpas',
        region: 'Eastern Nepal Himalayas',
        fact1: 'Sherpas are a Himalayan people renowned internationally for high-altitude mountaineering expertise.',
        fact2: 'Buddhist monasteries, yak herding, and trade routes shape Sherpa cultural landscapes and livelihoods.',
        share: 0.05,
        population: '≈ 0.15M',
        dominantReligion: 'Buddhism',
        totalFertilityRate: '≈ 1.8'
      },
      {
        id: 'newar_035',
        ethnicityName: 'Newars',
        region: 'Kathmandu Valley, Nepal',
        fact1: 'Newars are historically urban artisans and traders with a rich syncretic Buddhist-Hindu tradition.',
        fact2: 'Pagoda temples, elaborate festivals, and metalwork define Newar contributions to Himalayan culture.',
        share: 0.05,
        population: '≈ 1.5M',
        dominantReligion: 'Hinduism / Buddhism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'malawi_chewa',
    name: 'Malawi',
    bounds: {
      minLng: 32.7,
      maxLng: 35.9,
      minLat: -17.1,
      maxLat: -9.4
    },
    ethnicities: [
      {
        id: 'chewa_057',
        ethnicityName: 'Chewa',
        region: 'Malawi and neighboring countries',
        fact1: 'The Chewa are a Bantu-speaking people with matrilineal clans and farming traditions.',
        fact2: 'Nyau masked dances and secret societies play central roles in Chewa ritual life.',
        share: 0.35,
        population: '≈ 7M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 4.2'
      }
    ]
  },
  {
    id: 'argentina_pampas',
    name: 'Argentina',
    bounds: {
      minLng: -73.6,
      maxLng: -53.6,
      minLat: -55.0,
      maxLat: -21.8
    },
    ethnicities: [
      {
        id: 'mestizo_arg_058',
        ethnicityName: 'Argentine Mestizos',
        region: 'Argentina, Southern Cone',
        fact1: 'Many Argentines have mixed European and Indigenous ancestry, expressed through regional identities.',
        fact2: 'Tango music, gaucho lore, and European migration stories are key elements of Argentine culture.',
        share: 0.7,
        population: '≈ 32M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'chile_argentina_mapuche',
    name: 'Southern Chile & Argentina',
    bounds: {
      minLng: -73.6,
      maxLng: -66.4,
      minLat: -43.0,
      maxLat: -35.0
    },
    ethnicities: [
      {
        id: 'mapuche_059',
        ethnicityName: 'Mapuche',
        region: 'Southern Chile and Argentina',
        fact1: 'The Mapuche are an Indigenous people who resisted colonial control for centuries in the Southern Cone.',
        fact2: 'Lonko leadership, textile arts, and land rights movements remain central to Mapuche identity today.',
        share: 0.9,
        population: '≈ 1.5M',
        dominantReligion: 'Catholicism / Traditional',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'peru_andes',
    name: 'Peru Highlands',
    bounds: {
      minLng: -81.3,
      maxLng: -68.7,
      minLat: -18.4,
      maxLat: -0.0
    },
    ethnicities: [
      {
        id: 'quechua_060',
        ethnicityName: 'Quechua',
        region: 'Andean highlands, Peru and neighboring countries',
        fact1: 'Quechua peoples are descendants of Andean civilizations including the Inca Empire.',
        fact2: 'Terraced agriculture, woven patterns, and syncretic festivals shape Quechua cultural landscapes.',
        share: 0.25,
        population: '≈ 8M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'bolivia_peru_altiplano',
    name: 'Bolivia Altiplano',
    bounds: {
      minLng: -69.6,
      maxLng: -57.5,
      minLat: -22.9,
      maxLat: -9.7
    },
    ethnicities: [
      {
        id: 'aymara_061',
        ethnicityName: 'Aymara',
        region: 'Altiplano plateau, Bolivia and Peru',
        fact1: 'The Aymara are Indigenous peoples of the high plateau around Lake Titicaca.',
        fact2: 'Ritual offerings to mountain spirits and lake deities remain vibrant Aymara practices.',
        share: 0.25,
        population: '≈ 2.5M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'brazil_coastal',
    name: 'Brazil Coastal',
    bounds: {
      minLng: -73.0,
      maxLng: -34.7,
      minLat: -33.8,
      maxLat: 5.3
    },
    ethnicities: [
      {
        id: 'pardo_brazil_062',
        ethnicityName: 'Brazilian Pardo Communities',
        region: 'Brazil, especially coastal and central regions',
        fact1: 'Pardo Brazilians have mixed Indigenous, European, and African ancestries with diverse local identities.',
        fact2: 'Carnival, Afro-Brazilian religions, and regional music styles showcase blended cultural heritage in Brazil.',
        share: 0.45,
        population: '≈ 95M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'mexico_central',
    name: 'Central Mexico',
    bounds: {
      minLng: -105.0,
      maxLng: -86.8,
      minLat: 14.5,
      maxLat: 32.7
    },
    ethnicities: [
      {
        id: 'mestizo_mex_063',
        ethnicityName: 'Mexican Mestizos',
        region: 'Mexico, especially central and urban regions',
        fact1: 'Most Mexicans identify as mestizo, blending Indigenous and European ancestries and traditions.',
        fact2: 'Day of the Dead, muralism, and regional cuisines are central to modern Mexican cultural identity.',
        share: 0.75,
        population: '≈ 95M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.9'
      }
    ]
  },
  {
    id: 'mexico_oaxaca',
    name: 'Oaxaca',
    bounds: {
      minLng: -98.7,
      maxLng: -93.9,
      minLat: 15.7,
      maxLat: 18.7
    },
    ethnicities: [
      {
        id: 'mixtec_064',
        ethnicityName: 'Mixtec',
        region: 'Oaxaca and neighboring Mexican states',
        fact1: 'The Mixtec are an Indigenous Mesoamerican people with ancient codices and city-states.',
        fact2: 'Migration, artisan jewelry, and community fiestas are central to contemporary Mixtec life.',
        share: 0.4,
        population: '≈ 0.8M',
        dominantReligion: 'Catholicism (Folk)',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'colombia_antioquia',
    name: 'Antioquia (Colombia)',
    bounds: {
      minLng: -76.9,
      maxLng: -74.0,
      minLat: 5.5,
      maxLat: 8.3
    },
    ethnicities: [
      {
        id: 'paisa_065',
        ethnicityName: 'Paisa Colombians',
        region: 'Antioquia region, Colombia',
        fact1: 'Paisa identity blends Spanish settler heritage with Andean coffee-growing traditions.',
        fact2: 'Rural fincas, entrepreneurial culture, and regional music are key Paisa cultural themes.',
        share: 0.15,
        population: '≈ 7.5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'ecuador_coast',
    name: 'Coastal Ecuador',
    bounds: {
      minLng: -81.1,
      maxLng: -75.2,
      minLat: -4.2,
      maxLat: 1.5
    },
    ethnicities: [
      {
        id: 'montubio_066',
        ethnicityName: 'Montubio',
        region: 'Coastal Ecuador',
        fact1: 'Montubios are rural coastal communities noted for cattle ranching and horsemanship.',
        fact2: 'Rodeos, straw hats, and equestrian skills are emblematic of Montubio cultural expression.',
        share: 0.08,
        population: '≈ 1.4M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'guyana_interior',
    name: 'Guyana Interior',
    bounds: {
      minLng: -61.4,
      maxLng: -56.5,
      minLat: 1.2,
      maxLat: 8.5
    },
    ethnicities: [
      {
        id: 'indigenous_guyana_067',
        ethnicityName: 'Indigenous Peoples of Guyana',
        region: 'Interior forests of Guyana',
        fact1: "Guyana's Indigenous groups include Arawak, Carib, Wapishana, and others living in forested territories.",
        fact2: 'Cassava cultivation, river transport, and small-scale hunting remain important subsistence practices.',
        share: 0.1,
        population: '≈ 0.08M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.0'
      }
    ]
  },
  {
    id: 'trinidad_tobago',
    name: 'Trinidad and Tobago',
    bounds: {
      minLng: -61.9,
      maxLng: -60.5,
      minLat: 10.0,
      maxLat: 11.4
    },
    ethnicities: [
      {
        id: 'indo_trinidadian_068',
        ethnicityName: 'Indo-Trinidadians',
        region: 'Trinidad and Tobago',
        fact1: 'Indo-Trinidadians descend mainly from Indian indentured laborers brought to Caribbean plantations.',
        fact2: 'Hindu festivals, chutney music, and creolized cuisines mark Indo-Caribbean cultural innovations.',
        share: 0.35,
        population: '≈ 0.5M',
        dominantReligion: 'Hinduism / Islam',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'canada_british_columbia',
    name: 'British Columbia',
    bounds: {
      minLng: -139.1,
      maxLng: -114.0,
      minLat: 48.3,
      maxLat: 60.0
    },
    ethnicities: [
      {
        id: 'first_nations_bc_071',
        ethnicityName: 'Coastal First Nations (BC)',
        region: 'Pacific Northwest Coast, Canada',
        fact1: 'Coastal First Nations include Haida, Tlingit, and others known for complex clan systems.',
        fact2: 'Totem poles, longhouses, and potlatch ceremonies are central to northwest coastal Indigenous cultures.',
        share: 0.06,
        population: '≈ 0.2M',
        dominantReligion: 'Traditional / Christianity',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'canada_prairies',
    name: 'Canadian Prairies',
    bounds: {
      minLng: -120.0,
      maxLng: -89.0,
      minLat: 49.0,
      maxLat: 60.0
    },
    ethnicities: [
      {
        id: 'cree_072',
        ethnicityName: 'Cree',
        region: 'Subarctic Canada',
        fact1: 'The Cree are one of the largest First Nations groups, spread across vast northern territories.',
        fact2: 'Seasonal hunting, traplines, and syllabics writing are important dimensions of Cree culture.',
        share: 0.05,
        population: '≈ 0.35M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.5'
      }
    ]
  },
  {
    id: 'australia_central',
    name: 'Central Australia',
    bounds: {
      minLng: 129.0,
      maxLng: 138.0,
      minLat: -26.0,
      maxLat: -20.0
    },
    ethnicities: [
      {
        id: 'aboriginal_central_073',
        ethnicityName: 'Central Australian Aboriginal Communities',
        region: 'Central Desert, Australia',
        fact1: 'Central Australian Aboriginal peoples maintain deep connections to Country through songlines and kin ties.',
        fact2: 'Dot painting styles, bush foods, and Dreaming stories express complex cosmologies and land stewardship ethics.',
        share: 0.3,
        population: '≈ 0.1M',
        dominantReligion: 'Traditional / Christianity',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'australia_east_coast',
    name: 'Eastern Australia',
    bounds: {
      minLng: 141.0,
      maxLng: 153.7,
      minLat: -37.5,
      maxLat: -28.0
    },
    ethnicities: [
      {
        id: 'aboriginal_east_074',
        ethnicityName: 'Eastern Australian Aboriginal Communities',
        region: 'Eastern coastal Australia',
        fact1: 'Eastern Aboriginal groups experienced early colonial contact yet maintain enduring language revival efforts.',
        fact2: 'Corroboree ceremonies, dance, and contemporary activism highlight cultural continuity despite displacement.',
        share: 0.03,
        population: '≈ 0.3M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.2'
      }
    ]
  },
  {
    id: 'new_zealand_maori',
    name: 'New Zealand',
    bounds: {
      minLng: 166.5,
      maxLng: 178.6,
      minLat: -47.3,
      maxLat: -34.4
    },
    ethnicities: [
      {
        id: 'maori_075',
        ethnicityName: 'Māori',
        region: 'Aotearoa New Zealand',
        fact1: 'Māori are the Indigenous Polynesian people of New Zealand with rich canoe migration histories.',
        fact2: 'Marae meeting grounds, haka performances, and language revitalization efforts define modern Māori resurgence.',
        share: 0.17,
        population: '≈ 0.9M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 2.1'
      }
    ]
  },
  {
    id: 'karelia_finland_russia',
    name: 'Karelia',
    bounds: {
      minLng: 27.0,
      maxLng: 32.0,
      minLat: 60.5,
      maxLat: 63.0
    },
    ethnicities: [
      {
        id: 'karelian_077',
        ethnicityName: 'Karelians',
        region: 'Border regions of Finland and Russia',
        fact1: "Karelians are a Finnic people whose oral poetry influenced Finland's national epic Kalevala.",
        fact2: 'Forest villages, runo-song traditions, and cross-border kin ties are central to Karelian life.',
        share: 0.1,
        population: '≈ 0.06M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 1.4'
      }
    ]
  },
  {
    id: 'baluchistan_region',
    name: 'Baluchistan',
    bounds: {
      minLng: 55.0,
      maxLng: 70.0,
      minLat: 25.0,
      maxLat: 32.0
    },
    ethnicities: [
      {
        id: 'baluchi_078',
        ethnicityName: 'Baluch',
        region: 'Baluchistan region of Iran, Pakistan, and Afghanistan',
        fact1: 'Baluch people traditionally practiced semi-nomadic herding in arid plateau landscapes.',
        fact2: 'Epic ballads, embroidery, and strong tribal codes shape Baluch cultural expression and politics.',
        share: 0.8,
        population: '≈ 15M',
        dominantReligion: 'Sunni Islam',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'tanzania_kilimanjaro',
    name: 'Mount Kilimanjaro Region',
    bounds: {
      minLng: 36.5,
      maxLng: 38.0,
      minLat: -4.0,
      maxLat: -2.5
    },
    ethnicities: [
      {
        id: 'chagga_079',
        ethnicityName: 'Chagga',
        region: 'Slopes of Mount Kilimanjaro, Tanzania',
        fact1: 'The Chagga are mountain farmers known historically for banana and coffee cultivation.',
        fact2: 'Irrigation furrows, clan rituals, and bilingual Swahili use characterize contemporary Chagga communities.',
        share: 0.02,
        population: '≈ 1.2M',
        dominantReligion: 'Christianity',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'ethiopia_oromo',
    name: 'Oromia (Ethiopia)',
    bounds: {
      minLng: 34.5,
      maxLng: 44.0,
      minLat: 3.4,
      maxLat: 10.0
    },
    ethnicities: [
      {
        id: 'oromo_080',
        ethnicityName: 'Oromo',
        region: 'Ethiopia and northern Kenya',
        fact1: 'The Oromo are a large Cushitic-speaking people with pastoral and agrarian livelihoods.',
        fact2: 'Gadaa age-grade systems, coffee ceremonies, and Oromo-language music define key cultural arenas.',
        share: 0.34,
        population: '≈ 40M',
        dominantReligion: 'Islam / Christianity',
        totalFertilityRate: '≈ 3.8'
      }
    ]
  },
  {
    id: 'ethiopia_tigray',
    name: 'Tigray (Ethiopia)',
    bounds: {
      minLng: 36.4,
      maxLng: 40.0,
      minLat: 12.4,
      maxLat: 15.0
    },
    ethnicities: [
      {
        id: 'tigray_081',
        ethnicityName: 'Tigrayans',
        region: 'Northern Ethiopia and Eritrea',
        fact1: 'Tigrayans speak Tigrinya and inhabit highland regions with ancient Christian monasteries.',
        fact2: 'Rock-hewn churches, coffee rituals, and liturgical chant underpin many Tigrayan cultural practices.',
        share: 0.06,
        population: '≈ 7M',
        dominantReligion: 'Orthodox Christianity',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'albania_balkans',
    name: 'Albania',
    bounds: {
      minLng: 19.0,
      maxLng: 21.1,
      minLat: 39.6,
      maxLat: 42.7
    },
    ethnicities: [
      {
        id: 'albanian_082',
        ethnicityName: 'Albanians',
        region: 'Albania, Kosovo, and Balkans',
        fact1: 'Albanians speak a unique Indo-European language with ancient Balkan roots.',
        fact2: 'Kanun customary law, polyphonic singing, and migration histories shape Albanian identity narratives.',
        share: 0.95,
        population: '≈ 6M',
        dominantReligion: 'Islam / Orthodox Christianity',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'portugal_iberian',
    name: 'Portugal',
    bounds: {
      minLng: -9.5,
      maxLng: -6.2,
      minLat: 36.8,
      maxLat: 42.2
    },
    ethnicities: [
      {
        id: 'portuguese_083',
        ethnicityName: 'Portuguese',
        region: 'Portugal and Lusophone world',
        fact1: 'The Portuguese were early global navigators who established far-reaching maritime empires.',
        fact2: 'Fado music, seafaring folklore, and rural village life remain important symbols of Portuguese culture.',
        share: 0.95,
        population: '≈ 10M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.2'
      }
    ]
  },
  {
    id: 'scotland_uk',
    name: 'Scotland',
    bounds: {
      minLng: -8.2,
      maxLng: -0.7,
      minLat: 54.6,
      maxLat: 60.9
    },
    ethnicities: [
      {
        id: 'scottish_084',
        ethnicityName: 'Scots',
        region: 'Scotland and Scottish diaspora',
        fact1: 'Scots include Lowland and Highland communities with distinct languages and clan histories.',
        fact2: 'Bagpipes, tartan patterns, and literary traditions anchor many Scottish cultural expressions worldwide.',
        share: 0.85,
        population: '≈ 5.5M',
        dominantReligion: 'Presbyterianism',
        totalFertilityRate: '≈ 1.3'
      }
    ]
  },
  {
    id: 'ireland_island',
    name: 'Ireland',
    bounds: {
      minLng: -10.5,
      maxLng: -5.9,
      minLat: 51.4,
      maxLat: 55.4
    },
    ethnicities: [
      {
        id: 'irish_085',
        ethnicityName: 'Irish',
        region: 'Ireland and global Irish diaspora',
        fact1: 'Irish identity draws on Gaelic language, monastic scholarship, and colonial resistance histories.',
        fact2: "Traditional music sessions, storytelling, and Saint Patrick's Day are widely recognized Irish symbols.",
        share: 0.85,
        population: '≈ 5M',
        dominantReligion: 'Catholicism',
        totalFertilityRate: '≈ 1.6'
      }
    ]
  },
  {
    id: 'ladakh_himalayas',
    name: 'Ladakh',
    bounds: {
      minLng: 75.8,
      maxLng: 80.0,
      minLat: 32.0,
      maxLat: 35.3
    },
    ethnicities: [
      {
        id: 'ladakhi_086',
        ethnicityName: 'Ladakhi',
        region: 'Ladakh, Indian Himalayas',
        fact1: 'Ladakhis live in high-altitude valleys with Tibetan Buddhist monasteries and trade routes.',
        fact2: 'Whitewashed villages, masked dances, and sustainable irrigation systems structure Ladakhi communities.',
        share: 0.9,
        population: '≈ 0.3M',
        dominantReligion: 'Buddhism',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  },
  {
    id: 'indonesia_papua',
    name: 'West Papua',
    bounds: {
      minLng: 130.0,
      maxLng: 141.0,
      minLat: -9.5,
      maxLat: -0.9
    },
    ethnicities: [
      {
        id: 'asmat_087',
        ethnicityName: 'Asmat',
        region: 'Southwestern New Guinea, Indonesia',
        fact1: 'The Asmat are riverine peoples known for elaborate woodcarving traditions.',
        fact2: 'Ancestral pole carvings and sago-based diets are central to Asmat cultural worlds.',
        share: 0.3,
        population: '≈ 0.1M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.0'
      },
      {
        id: 'motu_088',
        ethnicityName: 'Motu',
        region: 'Papua New Guinea south coast',
        fact1: "The Motu are coastal traders whose sailing fleets historically linked villages along Papua's shores.",
        fact2: 'Hiri trade voyages, clay pot production, and ceremonial exchanges mark Motu cultural identity.',
        share: 0.2,
        population: '≈ 0.15M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.2'
      }
    ]
  },
  {
    id: 'madagascar_merina',
    name: 'Central Madagascar',
    bounds: {
      minLng: 43.2,
      maxLng: 48.0,
      minLat: -21.0,
      maxLat: -18.0
    },
    ethnicities: [
      {
        id: 'merina_089',
        ethnicityName: 'Merina',
        region: 'Central highlands, Madagascar',
        fact1: 'The Merina are a highland Malagasy group who established a dominant kingdom in the 19th century.',
        fact2: 'Rice terraces, ancestor worship, and elaborate tombs define Merina landscapes and rituals.',
        share: 0.25,
        population: '≈ 7M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 3.5'
      }
    ]
  },
  {
    id: 'madagascar_sakalava',
    name: 'Western Madagascar',
    bounds: {
      minLng: 43.2,
      maxLng: 48.0,
      minLat: -20.0,
      maxLat: -13.0
    },
    ethnicities: [
      {
        id: 'sakalava_090',
        ethnicityName: 'Sakalava',
        region: 'Western coastal Madagascar',
        fact1: 'The Sakalava are coastal Malagasy communities historically engaged in Indian Ocean trade.',
        fact2: 'Royal tombs, spirit possession ceremonies, and coastal fishing shape Sakalava cultural life.',
        share: 0.15,
        population: '≈ 4M',
        dominantReligion: 'Traditional / Christianity',
        totalFertilityRate: '≈ 3.8'
      }
    ]
  },
  {
    id: 'indonesia_aceh',
    name: 'Aceh',
    bounds: {
      minLng: 95.0,
      maxLng: 98.0,
      minLat: 2.0,
      maxLat: 6.0
    },
    ethnicities: [
      {
        id: 'acehnese_091',
        ethnicityName: 'Acehnese',
        region: 'Aceh, northern Sumatra, Indonesia',
        fact1: 'The Acehnese are a Muslim people once ruling a powerful sultanate in the Strait of Malacca.',
        fact2: 'Seudati dances, Islamic scholarship, and tsunami memories influence Acehnese contemporary culture.',
        share: 0.9,
        population: '≈ 4.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'indonesia_java',
    name: 'Java',
    bounds: {
      minLng: 105.0,
      maxLng: 114.5,
      minLat: -8.8,
      maxLat: -5.9
    },
    ethnicities: [
      {
        id: 'javanese_092',
        ethnicityName: 'Javanese',
        region: 'Java, Indonesia',
        fact1: "The Javanese are Indonesia's largest ethnic group with layered Hindu-Buddhist and Islamic histories.",
        fact2: 'Wayang shadow theater, batik textiles, and palace ceremonies are hallmarks of Javanese culture.',
        share: 0.4,
        population: '≈ 100M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.0'
      }
    ]
  },
  {
    id: 'taiwan_island',
    name: 'Taiwan',
    bounds: {
      minLng: 119.3,
      maxLng: 122.0,
      minLat: 21.9,
      maxLat: 25.3
    },
    ethnicities: [
      {
        id: 'hokkien_taiwan_094',
        ethnicityName: 'Hokkien Taiwanese',
        region: 'Taiwan, especially western plains',
        fact1: 'Hokkien Taiwanese descend largely from Fujianese settlers and Indigenous mixing.',
        fact2: 'Temple processions, night markets, and Taiwanese Hokkien media shape everyday cultural life on the island.',
        share: 0.7,
        population: '≈ 16M',
        dominantReligion: 'Buddhism / Folk Religion',
        totalFertilityRate: '≈ 0.9'
      },
      {
        id: 'amis_095',
        ethnicityName: 'Amis',
        region: 'Eastern coastal Taiwan',
        fact1: 'The Amis are the largest Indigenous group in Taiwan with coastal fishing and farming traditions.',
        fact2: 'Harvest festivals, polyphonic singing, and youth cultural movements support Amis identity today.',
        share: 0.02,
        population: '≈ 0.2M',
        dominantReligion: 'Christianity / Traditional',
        totalFertilityRate: '≈ 1.5'
      }
    ]
  },
  {
    id: 'sahel_tuareg',
    name: 'Tuareg Sahara',
    bounds: {
      minLng: -5.0,
      maxLng: 16.0,
      minLat: 15.0,
      maxLat: 25.0
    },
    ethnicities: [
      {
        id: 'tuareg_096',
        ethnicityName: 'Tuareg',
        region: 'Sahara and Sahel regions of Niger, Mali, and Algeria',
        fact1: 'Tuareg are semi-nomadic Berber peoples famed for trans-Saharan caravan routes.',
        fact2: 'Indigo veils, desert guitars, and poetic traditions convey Tuareg aesthetics and social code, the assouf.',
        share: 0.9,
        population: '≈ 2.5M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 6.5'
      }
    ]
  },
  {
    id: 'morocco_atlas',
    name: 'Atlas Mountains',
    bounds: {
      minLng: -12.0,
      maxLng: -1.0,
      minLat: 29.0,
      maxLat: 35.0
    },
    ethnicities: [
      {
        id: 'amazigh_097',
        ethnicityName: 'Amazigh (Berbers)',
        region: 'Atlas Mountains and North African interior',
        fact1: 'Amazigh communities speak diverse Berber languages across Morocco, Algeria, Tunisia, and beyond.',
        fact2: 'Amazigh jewelry, mountain agriculture, and Tifinagh script are key aspects of cultural revival movements.',
        share: 0.3,
        population: '≈ 20M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.3'
      }
    ]
  },
  {
    id: 'turkmenistan_steppe',
    name: 'Turkmenistan',
    bounds: {
      minLng: 52.4,
      maxLng: 66.7,
      minLat: 35.1,
      maxLat: 42.8
    },
    ethnicities: [
      {
        id: 'turkmen_098',
        ethnicityName: 'Turkmen',
        region: 'Turkmenistan and neighboring countries',
        fact1: 'Turkmen are a Turkic people with historical livelihoods in steppe pastoralism and caravan trade.',
        fact2: 'Carpet weaving, horse breeding, and epic storytelling are central to Turkmen cultural heritage.',
        share: 0.85,
        population: '≈ 6M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'uzbekistan_oases',
    name: 'Uzbekistan',
    bounds: {
      minLng: 56.0,
      maxLng: 73.2,
      minLat: 37.1,
      maxLat: 45.6
    },
    ethnicities: [
      {
        id: 'uzbek_099',
        ethnicityName: 'Uzbeks',
        region: 'Uzbekistan and Central Asian oases',
        fact1: 'Uzbeks are a Turkic-speaking people whose cities were hubs on the Silk Road.',
        fact2: 'Registan squares, plov rice dishes, and suzani embroidery are emblematic of Uzbek life and art.',
        share: 0.8,
        population: '≈ 35M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.4'
      }
    ]
  },
  {
    id: 'kyrgyzstan_tien_shan',
    name: 'Kyrgyzstan',
    bounds: {
      minLng: 69.2,
      maxLng: 80.3,
      minLat: 39.1,
      maxLat: 43.3
    },
    ethnicities: [
      {
        id: 'kyrgyz_100',
        ethnicityName: 'Kyrgyz',
        region: 'Kyrgyzstan and Tien Shan mountains',
        fact1: 'The Kyrgyz are traditionally nomadic herders who moved seasonally with their livestock.',
        fact2: 'Yurt dwellings, horse games like kok-boru, and the Epic of Manas shape Kyrgyz national culture.',
        share: 0.73,
        population: '≈ 6M',
        dominantReligion: 'Islam',
        totalFertilityRate: '≈ 2.8'
      }
    ]
  },
  {
    id: 'sami_arctic',
    name: 'Sámi Region',
    bounds: {
      minLng: 15.0,
      maxLng: 35.0,
      minLat: 65.0,
      maxLat: 71.0
    },
    ethnicities: [
      {
        id: 'sami_001',
        ethnicityName: 'Sámi People',
        region: 'Arctic Fennoscandia (Norway, Sweden, Finland, Russia)',
        fact1: 'The Sámi are Indigenous reindeer herders and fishers of northern Fennoscandia with distinct Uralic languages.',
        fact2: 'Traditional Sámi culture centers on seasonal migrations, joik singing, and duodji handicrafts.',
        share: 0.05,
        population: '≈ 0.08M',
        dominantReligion: 'Lutheranism / Traditional',
        totalFertilityRate: '≈ 1.8'
      }
    ]
  }
];

// Helper to expand bounds to match visual boxes (same as enforceMinimumSize in MapContainer)
function expandBoundsForClickDetection(
  minLng: number,
  maxLng: number,
  minLat: number,
  maxLat: number
): { minLng: number; maxLng: number; minLat: number; maxLat: number } {
  const MIN_BOX_SIZE = 1.0; // Must match MIN_BOX_SIZE in MapContainer
  const centerLng = (minLng + maxLng) / 2;
  const centerLat = (minLat + maxLat) / 2;
  const width = maxLng - minLng;
  const height = maxLat - minLat;

  const adjustedWidth = Math.max(width, MIN_BOX_SIZE);
  const adjustedHeight = Math.max(height, MIN_BOX_SIZE);

  return {
    minLng: centerLng - adjustedWidth / 2,
    maxLng: centerLng + adjustedWidth / 2,
    minLat: centerLat - adjustedHeight / 2,
    maxLat: centerLat + adjustedHeight / 2
  };
}

export function findRegionForCoordinates(
  lng: number,
  lat: number
): Region | null {
  // Handle dateline wrap by also checking lng+360 for regions that cross the 180° meridian.
  const candidates = [lng, lng + 360];
  let best: { region: Region; area: number } | null = null;

  for (const candidateLng of candidates) {
    for (const r of regions) {
      // Use expanded bounds to match visual boxes
      const expanded = expandBoundsForClickDetection(
        r.bounds.minLng,
        r.bounds.maxLng,
        r.bounds.minLat,
        r.bounds.maxLat
      );
      
      if (
        candidateLng >= expanded.minLng &&
        candidateLng <= expanded.maxLng &&
        lat >= expanded.minLat &&
        lat <= expanded.maxLat
      ) {
        // Use original area for smallest region selection
        const area =
          (r.bounds.maxLng - r.bounds.minLng) *
          (r.bounds.maxLat - r.bounds.minLat);
        if (!best || area < best.area) {
          best = { region: r, area };
        }
      }
    }
  }

  return best?.region ?? null;
}


