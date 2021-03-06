const settings = {};

settings.admin_role = '@mods';

settings.ignored_columns = ['url', '_xml', '_links', 'id', 'app', 'app:edited', 'edited', 'save', 'del'];

settings.date_column_name = 'date';
settings.time_column_name = 'time';
settings.date_format = 'DD/MM/YYYY';
settings.time_format = 'HH:mm';

settings.league_aliases = {
    rugby_world_cup: '4574', world_cup: '4574', rwc: '4574',
    prem: '4414', premiership: '4414',
};

// Should include name as listed on Ultimate Rugby
settings.competition_aliases = {
    rwc_2019: 'rwc_2019', rugby_world_cup: 'rwc_2019', rwc: 'rwc_2019', wc: 'rwc_2019', world_cup: 'rwc_2019',
    '6_nations': '6_nations', '6_n': '6_nations', '6n': '6_nations', six_nations: '6_nations',
    trc_2020: 'trc_2020', trc: 'trc_2020', the_rugby_championship: 'trc_2020',
    rugby_europe: 'rugby_europe', rec: 'rugby_europe',
    pacific_nations_cup: 'pacific_nations_cup', pnc: 'pacific_nations_cup',
    u20_championship: 'u20_championship', u20: 'u20_championship', u20wc: 'u20_chamionship',
    international_friendlies: 'international_friendlies', friendly: 'international_friendlies', international: 'international_friendlies',

    premiership_rugby: 'premiership_rugby', prem: 'premiership_rugby', premiership: 'premiership_rugby', english_prem: 'premiership_rugby', english_premiership: 'premiership_rugby', gallagher: 'premiership_rugby', proper_rugby: 'premiership_rugby',
    prem_rugby_cup: 'prem_rugby_cup', prc: 'prem_rugby_cup', prem_cup: 'prem_rugby_cup', premiership_rugby_cup: 'prem_rugby_cup', anglo_welsh: 'prem_rugby_cup', awc: 'prem_rugby_cup',
    championship: 'championship',
    pro_14: 'pro_14', pro14: 'pro_14', p14: 'pro_14', guinness: 'pro_14', master_race: 'pro_14',
    top_14: 'top_14', top14: 'top_14', t14: 'top_14',
    pro_d2: 'pro_d2', prod2: 'pro_d2',
    mlr: 'mlr', major_league_rugby: 'mlr',
    champions_cup: 'champions_cup', champions: 'champions_cup', europe: 'champions_cup',
    challenge_cup: 'challenge_cup', challenge: 'challenge_cup',

    super_rugby: 'super_rugby', sr: 'super_rugby',
    nrc: 'nrc', national_rugby_championship: 'nrc',
    mitre_10_cup: 'mitre_10_cup', mitre_10: 'mitre_10_cup', m10c: 'mitre_10_cup', m_10_c: 'mitre_10_cup',
    currie_cup: 'currie_cup', currie: 'currie_cup', cc: 'currie_cup',
    'premier_15\'s': 'premier_15\'s',
};

// No need to include name as listed on Ultimate Rugby
settings.team_aliases = {

    // England
    bath_rugby: 'bath',
    bears: 'bristol_bears',
    exeter_chiefs: 'exeter',
    quins: 'harlequins',
    tigers: 'leicester', leicester_tigers: 'leicester',
    irish: 'london_irish',
    sale_sharks: 'sale',
    sarries: 'saracens',
    worcester_warriors: 'worcester',
    falcons: 'newcastle', newcastle_falcons: 'newcastle',
    yorkshire: 'carnegie',
    cornish_pirates: 'pirates',
    bedford_blues: 'bedford',
    coventry: 'coventry_rugby',
    jersey: 'jersey_reds',
    doncaster_knights: 'doncaster',
    ealing_trailfinders: 'ealing',
    nottingham_rugby: 'nottingham',
    scottish: 'london_scottish',
    welsh: 'london_welsh',
    hartpury: 'hartpury_college', hcrfc: 'hartpury_college',
    ampthill_rufc: 'ampthill',

    // France
    bordeaux: 'union_bordeaux_begles', begles: 'union_bordeaux_begles', bordeaux_begles: 'union_bordeaux_begles',
    clermont: 'clermont_auvergne', asm: 'clermont_auvergne',
    lyon_olympique_universitaire: 'lyon', lou: 'lyon',
    aviron_bayonnais: 'bayonne',
    toulon: 'rc_toulon', rc_toulonnais: 'rc_toulon',
    castres: 'castres_olympique',
    section_paloise: 'pau',
    su_agen: 'agen',
    stade_rochelais: 'la_rochelle', rochelle: 'la_rochelle',
    stade_toulousain: 'toulouse',
    stade_français: 'stade_francais', stade_francais_paris: 'stade_francais', sf: 'stade_francais',
    racing: 'racing_92', r92: 'racing_92', r_92: 'racing_92',
    ca_brive: 'brive', club_athletique_brive: 'brive',

    // Scotland
    glasgow_warriors: 'glasgow',

    // Ireland

    // Wales
    cardiff_blues: 'cardiff',

    // Italy
    benetton: 'treviso', benetton_treviso: 'treviso',

    // New Zealand
    canes: 'hurricanes',
    saders: 'crusaders',

    // South Africa

    // Australia
    tahs: 'waratahs',

    // Argentina
    jags: 'jaguares',

    // International
    eng: 'england', good: 'england',
    wal: 'wales', cymru: 'wales',
    ire: 'ireland', éire: 'ireland', leinster_b: 'ireland',
    fra: 'france', les_bleus: 'france', la_france: 'france',
    sco: 'scotland', alba: 'scotland',
    ita: 'italy', italia: 'italy',
    nz: 'new_zealand', evil: 'new_zealand', abs: 'new_zealand', all_blacks: 'new_zealand', kiwis: 'new_zealand',
    sa: 'south_africa', za: 'south_africa', bokke: 'south_africa', springboks: 'south_africa',
    aus: 'australia', wallabies: 'australia', convicts: 'australia',
    arg: 'argentina', pumas: 'argentina', los_pumas: 'argentina',
    jap: 'japan', brave_blossoms: 'japan',
    geo: 'georgia', lelos: 'georgia',
    fij: 'fiji', flying_fijians: 'fiji',
    sam: 'samoa', manu_samoa: 'samoa',
    ton: 'tonga', ikale_tahi: 'tonga', sea_eagles: 'tonga',
    us: 'usa', united_states: 'usa', yanks: 'usa',
    spa: 'spain',
    rom: 'romania', oaks: 'romania',
    uru: 'uruguay',
    rus: 'russia',
    can: 'canada',
    por: 'portugal',
    nam: 'namibia',
    hk: 'hong_kong',
    net: 'netherlands',
    bra: 'brazil',
    bel: 'belgium',
    ger: 'germany',
    chi: 'chile',
    swi: 'switzerland',
    kor: 'korea',
    zim: 'zimbabwe',
    ken: 'kenya',
    col: 'colombia',
};

module.exports = settings;