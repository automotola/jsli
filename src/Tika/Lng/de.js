/*!
 * de addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"en_":212612,
"er_":98528,
"_de":85811,
"ich":77459,
"der":70583,
"_di":70518,
"die":69388,
"ie_":67971,
"sch":56571,
"ein":53912,
"ch_":53758,
"_un":52654,
"ung":50103,
"che":45855,
"nd_":44410,
"den":43865,
"_da":41966,
"cht":41763,
"_be":39578,
"gen":38128,
"und":38106,
"_ei":36321,
"in_":34380,
"ng_":34359,
"ten":34283,
"es_":33601,
"_au":33306,
"_wi":31780,
"_in":30781,
"_zu":30678,
"hen":30448,
"_ge":30199,
"on_":28096,
"nde":28026,
"eit":27645,
"ine":27612,
"_vo":26131,
"ver":25977,
"ere":23829,
"men":23322,
"wir":23199,
"ht_":23170,
"ent":23092,
"ber":23063,
"_we":23010,
"lic":22696,
"te_":22547,
"ion":22420,
"_si":22298,
"_ve":21928,
"nen":20719,
"it_":20653,
"ter":19791,
"nge":19645,
"ste":19037,
"ese":18527,
"isc":18191,
"rde":18054,
"ren":17925,
"_mi":17599,
"_an":17282,
"ies":17035,
"as_":16836,
"em_":16828,
"zu_":16778,
"her":16547,
"mit":16540,
"_er":16445,
"_ko":16370,
"run":16334,
"lle":16293,
"ist":16265,
"ne_":16251,
"st_":16035,
"auf":15984,
"_ha":15980,
"ers":15463,
"aus":15387,
"ier":14586,
"sen":14337,
"ir_":14331,
"_so":14264,
"rei":14034,
"sse":14014,
"für":13527,
"aß_":13516,
"_fü":13464,
"nte":13283,
"ben":13251,
"daß":13186,
"ür_":13142,
"end":13019,
"ige":12985,
"vor":12973,
"das":12972,
"von":12898,
"_ic":12743,
"he_":12692,
"ges":12653,
"ern":12573,
"ach":12465,
"bei":12431,
"des":12271,
"wer":12200,
"_ni":12156,
"_is":12089,
"_st":11950,
"and":11857,
"_al":11768,
"ert":11570,
"omm":11562,
"sic":11525,
"len":11498,
"ge_":11405,
"_re":11377,
"_se":11228,
"nic":11202,
"eru":11090,
"abe":11066,
"kom":11050,
"uch":11046,
"_pr":11019,
"ind":10872,
"wei":10852,
"_eu":10566,
"_he":10564,
"uf_":10457,
"erd":10409,
"sta":10319,
"_es":10313,
"tig":10262,
"tio":10247,
"hte":10203,
"hre":10019,
"eur":9917,
"ner":9909,
"ser":9905,
"ell":9828,
"_me":9768,
"sie":9765,
"ens":9748,
"iss":9720,
"ech":9665,
"age":9652,
"_ab":9610,
"uro":9599,
"ege":9577,
"_im":9551,
"um_":9504,
"übe":9493,
"nn_":9394,
"rop":9378,
"_fr":9366,
"oll":9332,
"ngs":9308,
"cha":9204,
"_sc":9195,
"se_":9154,
"dem":9078,
"_en":9049,
"re_":9003,
"mme":9000,
"bes":8937,
"auc":8928,
"chl":8837,
"ite":8774,
"rn_":8764,
"wie":8744,
"est":8732,
"im_":8662,
"tli":8577,
"de_":8540,
"lie":8522,
"ati":8510,
"err":8489,
"all":8428,
"eic":8415,
"ang":8405,
"rt_":8376,
"_üb":8359,
"nt_":8299,
"rst":8116,
"haf":8115,
"rec":8067,
"tel":7937,
"mei":7917,
"le_":7887,
"_na":7840,
"tte":7823,
"_um":7791,
"an_":7767,
"hei":7712,
"iti":7707,
"eri":7651,
"ric":7646,
"uns":7638,
"rau":7623,
"ins":7567,
"tun":7559,
"ene":7556,
"kei":7517,
"ur_":7503,
"ssi":7480,
"fra":7472,
"ger":7447,
"tra":7440,
"mis":7425,
"ede":7268,
"_ma":7246,
"aft":7238,
"iel":7166,
"fen":7065,
"änd":7064,
"pro":7039,
"rag":7025,
"lei":7007,
"och":6998,
"ei_":6988,
"alt":6974,
"rte":6958,
"mmi":6906,
"lte":6905,
"hal":6893,
"at_":6843,
"gli":6829,
"ied":6819,
"sti":6809,
"ame":6804,
"sio":6720,
"ord":6714,
"ide":6691,
"opä":6650,
"ns_":6649,
"enn":6618,
"sei":6568,
"äis":6563,
"päi":6560,
"rge":6560,
"eis":6559,
"hme":6533,
"tsc":6528,
"ebe":6450,
"ehr":6443,
"wen":6434,
"nne":6401,
"etz":6367,
"lt_":6366,
"ann":6319,
"hr_":6308,
"_wa":6306,
"ls_":6301,
"hab":6292,
"_gr":6280,
"ing":6273,
"rsc":6227,
"sin":6215,
"_ih":6212,
"ini":6144,
"gt_":6121,
"als":6114,
"ate":6027,
"rbe":6007,
"ehe":6006,
"itt":6000,
"eme":5984,
"_hi":5953,
"unt":5938,
"for":5937,
"lun":5917,
"ig_":5865,
"erh":5831,
"_pa":5818,
"rat":5816,
"ft_":5799,
"ts_":5757,
"par":5693,
"nsc":5686,
"ahr":5645,
"rd_":5591,
"ete":5558,
"lit":5524,
"zie":5522,
"et_":5500,
"eil":5483,
"era":5474,
"nts":5467,
"leg":5465,
"dar":5440,
"sam":5429,
"nis":5392,
"spr":5383,
"ien":5381,
"ird":5359,
"el_":5349,
"ele":5326,
"str":5277,
"gel":5254,
"geb":5196,
"rla":5173,
"imm":5169,
"ffe":5162,
"_le":5139,
"nse":5082,
"hat":5052,
"esc":5043,
"lan":5033,
"tei":4978,
"sol":4971,
"ant":4965,
"_mö":4949,
"nun":4947,
"erf":4946,
"nst":4940,
"erb":4886,
"ar_":4875,
"zus":4862,
"gem":4840,
"zur":4837,
"one":4779,
"egi":4753,
"prä":4748,
"nac":4721,
"_ra":4707,
"kon":4694,
"reg":4639,
"ort":4615,
"us_":4613,
"chu":4535,
"oli":4513,
"org":4510,
"zen":4503,
"_no":4500,
"_ka":4496,
"_je":4479,
"ihr":4472,
"uss":4459,
"geh":4458,
"eut":4444,
"elt":4443,
"tis":4437,
"_zw":4432,
"wic":4430,
"zei":4407,
"anz":4406,
"ran":4375,
"arb":4336,
"uß_":4336,
"hie":4327,
"kan":4316,
"erw":4308,
"gun":4303,
"pol":4302,
"nie":4298,
"rin":4296,
"ale":4294,
"_wo":4288,
"hin":4273,
"_nu":4256,
"erl":4241,
"räs":4201,
"_bi":4187,
"rr_":4187,
"sid":4185,
"ass":4184,
"ken":4173,
"kti":4170,
"ntr":4149,
"äsi":4132,
"_la":4128,
"_ar":4125,
"zun":4123,
"lam":4065,
"llt":4060,
"arl":4058,
"ntw":4058,
"uni":4057,
"geg":4056,
"lag":4047,
"so_":4036,
"han":4011,
"ahm":4004,
"ll_":3999,
"rch":3972,
"aat":3969,
"ess":3966,
"gan":3963,
"art":3954,
"son":3936,
"erg":3933,
"taa":3923,
"urc":3923,
"ors":3914,
"_po":3913,
"tim":3911,
"int":3900,
"tre":3878,
"tze":3856,
"kt_":3842,
"erk":3833,
"hne":3797,
"amm":3774,
"nig":3767,
"tzt":3758,
"set":3744,
"ond":3741,
"dur":3737,
"tik":3735,
"its":3728,
"rit":3696,
"rer":3658,
"was":3645,
"or_":3616,
"üss":3615,
"rie":3613,
"tet":3613,
"nat":3609,
"seh":3592,
"hti":3590,
"_kö":3581,
"_du":3572,
"ag_":3565,
"me_":3557,
"inn":3548,
"nio":3548,
"öch":3531,
"dig":3528,
"gru":3515,
"_fo":3494,
"_ja":3487,
"kön":3479,
"_ne":3468,
"akt":3459,
"_mü":3443,
"tie":3437,
"att":3429,
"ise":3419,
"tat":3407,
"bet":3401,
"ode":3371,
"gew":3366,
"vie":3358,
"gie":3338,
"önn":3312,
"man":3303,
"hts":3298,
"ühr":3283,
"_vi":3266,
"ute":3263,
"wor":3262,
"etr":3254,
"ndl":3254,
"nah":3251,
"füh":3243,
"res":3234,
"_mu":3219,
"tzu":3211,
"möc":3206,
"itg":3193,
"rli":3184,
"chs":3176,
"mer":3176,
"ses":3164,
"tät":3161,
"eht":3157,
"hli":3137,
"lem":3113,
"noc":3107,
"eid":3104,
"war":3102,
"stä":3098,
"nkt":3089,
"chi":3082,
"fin":3078,
"chr":3075,
"_ke":3069,
"ler":3049,
"ick":3032,
"wel":3017,
"erz":2992,
"müs":2979,
"ekt":2977,
"ans":2974,
"zum":2971,
"neh":2964,
"bed":2958,
"tiv":2957,
"eue":2952,
"sel":2952,
"ona":2943,
"teh":2938,
"rts":2935,
"ndi":2932,
"orm":2921,
"tri":2909,
"dan":2904,
"län":2898,
"ons":2894,
"ehm":2889,
"lin":2886,
"ina":2885,
"nal":2871,
"tgl":2859,
"itä":2857,
"tan":2855,
"muß":2846,
"au_":2840,
"enz":2837,
"_fi":2836,
"rdn":2824,
"dun":2797,
"wis":2796,
"nz_":2789,
"jah":2769,
"wur":2769,
"ik_":2761,
"kte":2754,
"rke":2749,
"nur":2744,
"ali":2741,
"_fe":2721,
"abs":2720,
"hau":2717,
"is_":2717,
"be_":2694,
"nnt":2692,
"htl":2688,
"zt_":2686,
"usa":2675,
"nem":2672,
"ble":2670,
"_te":2669,
"nan":2665,
"gef":2660,
"rne":2659,
"nze":2652,
"_ze":2651,
"igt":2651,
"_ri":2648,
"neu":2645,
"rhe":2645,
"sem":2641,
"rha":2625,
"jed":2617,
"doc":2616,
"_wu":2610,
"unk":2590,
"_sa":2571,
"nti":2570,
"rtr":2561,
"sge":2555,
"_li":2554,
"_sp":2554,
"_gl":2551,
"chn":2548,
"sun":2548,
"ück":2544,
"net":2543,
"meh":2541,
"fal":2538,
"ara":2525,
"hun":2517,
"fol":2511,
"_fa":2501,
"inz":2491,
"off":2489,
"gke":2477,
"gra":2476,
"igk":2476,
"urd":2474,
"mög":2472,
"olg":2472,
"ank":2466,
"fre":2465,
"irt":2464,
"kol":2449,
"ive":2444,
"ntl":2441,
"_od":2440,
"rre":2439,
"sha":2439,
"rac":2435,
"ris":2433,
"il_":2426,
"_ga":2424,
"sag":2414,
"san":2412,
"ust":2405,
"twi":2397,
"eig":2382,
"eso":2378,
"sit":2360,
"ieß":2359,
"bar":2358,
"nke":2355,
"bez":2345,
"hla":2344,
"rze":2343,
"ögl":2342,
"fer":2338,
"nes":2338,
"deu":2337,
"tro":2323,
"_tr":2318,
"_do":2317,
"zwe":2312,
"del":2310,
"ßen":2307,
"itu":2306,
"enh":2304,
"dam":2289,
"inf":2272,
"bew":2271,
"bst":2269,
"_lä":2268,
"_gi":2260,
"äge":2255,
"al_":2247,
"opa":2242,
"eds":2240,
"lis":2233,
"ckl":2230,
"_ta":2225,
"uen":2225,
"chw":2221,
"ena":2218,
"rüc":2218,
"dst":2213,
"dli":2212,
"gsa":2207,
"bra":2199,
"mal":2195,
"gle":2192,
"tsp":2179,
"isi":2178,
"zug":2170,
"irk":2161,
"ieg":2153,
"lge":2152,
"äch":2148,
"usg":2139,
"ial":2137,
"sor":2137,
"ssc":2135,
"kun":2127,
"_zi":2124,
"alb":2124,
"tz_":2123,
"bt_":2114,
"eln":2106,
"ret":2096,
"ähr":2094,
"tes":2090,
"fe_":2085,
"ßer":2075,
"sbe":2068,
"uti":2063,
"fah":2051,
"_mo":2047,
"maß":2044,
"utz":2044,
"pun":2039,
"nzi":2036,
"gre":2035,
"lls":2032,
"las":2028,
"ewe":2024,
"_än":2022,
"fun":2019,
"_br":2016,
"ili":2012,
"erm":2010,
"trä":2007,
"ill":2006,
"rif":2005,
"hst":2004,
"rwe":2003,
"bil":2002,
"abg":2001,
"nsi":2001,
"fte":2000,
"rfo":1997,
"pie":1992,
"lig":1980,
"chk":1977,
"rti":1977,
"pre":1975,
"are":1967,
"ami":1966,
"min":1966,
"mmt":1963,
"am_":1961,
"ütz":1958,
"_dr":1941,
"bge":1941,
"klu":1937,
"igu":1927,
"nsa":1926,
"lch":1911,
"obl":1910,
"lau":1908,
"hri":1906,
"_ho":1901,
"beg":1900,
"uße":1897,
"ema":1890,
"mun":1890,
"vol":1890,
"lli":1888,
"hru":1885,
"chä":1883,
"wäh":1881,
"rob":1880,
"_am":1872,
"hke":1869,
"gte":1854,
"los":1847,
"bin":1844,
"_kl":1834,
"tän":1834,
"räg":1831,
"rak":1830,
"uer":1829,
"stü":1828,
"din":1821,
"_wä":1817,
"aue":1816,
"_kr":1815,
"sow":1803,
"ahl":1795,
"ufg":1792,
"mt_":1790,
"els":1789,
"rle":1784,
"uge":1782,
"tur":1781,
"mmu":1777,
"rfa":1776,
"kra":1770,
"lb_":1768,
"ari":1761,
"mac":1756,
"hrt":1753,
"ibt":1745,
"ieh":1745,
"ssa":1744,
"ät_":1741,
"_ak":1733,
"rkl":1733,
"nhe":1732,
"ark":1730,
"soz":1730,
"nha":1728,
"ltu":1723,
"ani":1719,
"hle":1715,
"ont":1710,
"ozi":1706,
"ck_":1702,
"nzu":1698,
"tru":1693,
"per":1690,
"hl_":1688,
"sat":1688,
"un_":1688,
"fes":1684,
"fri":1676,
"heu":1676,
"egt":1673,
"iff":1668,
"rkt":1666,
"elb":1664,
"rig":1664,
"stu":1658,
"fti":1641,
"äre":1640,
"bri":1637,
"zia":1633,
"tüt":1631,
"bür":1618,
"fts":1616,
"ndu":1614,
"spi":1603,
"rga":1602,
"beh":1597,
"gro":1581,
"pra":1581,
"ln_":1577,
"pri":1577,
"eni":1574,
"rbr":1571,
"egr":1569,
"tag":1566,
"zwi":1565,
"ßna":1561,
"dnu":1560,
"pa_":1558,
"fas":1556,
"ats":1554,
"aßn":1551,
"tem":1550,
"_wü":1543,
"mat":1541,
"kli":1540,
"kri":1540,
"ukt":1539,
"esa":1536,
"quo":1530,
"wür":1530,
"ogr":1528,
"nds":1521,
"edi":1519,
"hör":1519,
"nom":1519,
"bli":1514,
"woh":1514,
"htu":1513,
"äft":1513,
"roß":1512,
"ürd":1512,
"äng":1505,
"det":1503,
"rum":1498,
"edo":1496,
"gib":1495,
"ker":1491,
"enk":1489,
"mar":1484,
"ut_":1484,
"da_":1478,
"dne":1478,
"gio":1477,
"_bü":1473,
"kla":1469,
"rs_":1469,
"_eb":1467,
"_ob":1465,
"ftl":1465,
"itr":1465,
"ihn":1464,
"tür":1459,
"ral":1457,
"bie":1456,
"ika":1456,
"two":1455,
"tor":1454,
"ewi":1452,
"ürg":1450,
"hem":1447,
"let":1445,
"rem":1443,
"nre":1442,
"ram":1441,
"iet":1436,
"nsp":1435,
"ßt_":1435,
"ven":1434,
"grü":1432,
"ike":1430,
"squ":1430,
"aff":1419,
"leb":1415,
"gs_":1410,
"rog":1409,
"bek":1403,
"rol":1401,
"agt":1400,
"spe":1397,
"swe":1397,
"twe":1390,
"mpf":1388,
"eih":1386,
"eng":1385,
"erp":1378,
"nfa":1376,
"amt":1374,
"hil":1371,
"örd":1370,
"weg":1369,
"atz":1356,
"lfe":1355,
"oße":1352,
"mic":1349,
"ref":1346,
"mte":1345,
"ast":1333,
"sar":1333,
"ezi":1330,
"geo":1330,
"_ba":1329,
"eug":1324,
"_et":1323,
"rma":1320,
"cho":1319,
"uo_":1318,
"ohl":1314,
"wär":1314,
"eu_":1312,
"rtu":1312,
"eor":1308,
"häf":1306,
"ätz":1306,
"nft":1304,
"tit":1302,
"wes":1299,
"rdi":1298,
"ilf":1293,
"hlu":1291,
"the":1288,
"zte":1288,
"_ku":1280,
"tge":1277,
"ori":1273,
"dis":1268,
"cke":1266,
"tär":1266,
"mil":1265,
"rwa":1265,
"zah":1265,
"nwe":1256,
"umw":1253,
"ieb":1251,
"rrn":1250,
"izi":1249,
"bis":1248,
"owi":1248,
"ibe":1247,
"fli":1246,
"ehö":1244,
"rah":1240,
"ums":1240,
"mwe":1239,
"eno":1235,
"llu":1235,
"nve":1233,
"ze_":1230,
"ohn":1228,
"nit":1224,
"tt_":1223,
"nfo":1222,
"ett":1218,
"ost":1216,
"esh":1215,
"ruc":1215,
"daf":1213,
"yst":1213,
"_ls":1212,
"lsq":1212,
"_fl":1209,
"eha":1207,
"ile":1206,
"sys":1206,
"ume":1200,
"pfe":1199,
"lbs":1196,
"kel":1195,
"rme":1194,
"bef":1193,
"efü":1189,
"esi":1188,
"hof":1188,
"dri":1185,
"zeu":1184,
"ebi":1182,
"emo":1180,
"nma":1175,
"ade":1174,
"inb":1174,
"tin":1173,
"okr":1169,
"rf_":1166,
"ve_":1166,
"om_":1165,
"gab":1164,
"lts":1164,
"ush":1164,
"_nä":1163,
"eff":1160,
"lsc":1159,
"hwe":1158,
"gut":1157,
"sis":1147,
"_ch":1146,
"hut":1143,
"eif":1140,
"enr":1136,
"not":1133,
"suc":1132,
"auß":1126,
"eib":1123,
"nbe":1122,
"ünd":1121,
"_or":1119,
"_th":1118,
"rmi":1115,
"get":1114,
"lar":1112,
"spa":1112,
"nau":1111,
"tal":1108,
"lär":1107
};
LanguageIdentifier.addProfile('de', ngrams, 6187872);
})();
