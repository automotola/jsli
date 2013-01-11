/*!
 * el addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"αι_":73292,
"_χ_":72116,
"_τη":67413,
"_κα":66823,
"_το":61620,
"ου_":58182,
"να_":51915,
"ης_":50982,
"_πρ":50886,
"και":44545,
"_να":42766,
"ων_":42218,
"ια_":39929,
"_στ":38665,
"ην_":37376,
"την":36472,
"με_":36145,
"_πο":35813,
"ει_":35673,
"το_":34708,
"ση_":33913,
"_επ":32206,
"_απ":31689,
"τικ":31116,
"του":31099,
"της":29811,
"ας_":29544,
"_συ":29493,
"τα_":29344,
"_με":26939,
"_αν":26136,
"προ":25989,
"_δι":25857,
"ις_":25679,
"ία_":25305,
"_η_":24782,
"ες_":24638,
"των":24440,
"που":24082,
"_γι":22457,
"_αυ":22034,
"για":21684,
"αυτ":21185,
"ών_":20933,
"_εί":20414,
"ική":20053,
"τη_":20028,
"_τω":19621,
"επι":19352,
"στη":18905,
"ής_":18677,
"ται":17329,
"_θα":16927,
"ματ":16894,
"ος_":16877,
"τι_":16833,
"θα_":16699,
"ές_":16670,
"δια":16531,
"υς_":16512,
"σει":16489,
"ους":16463,
"είν":16459,
"κατ":16414,
"οι_":16395,
"ως_":16295,
"εί_":16276,
"σε_":16078,
"κή_":16060,
"ον_":15967,
"στο":15711,
"_υπ":15611,
"πολ":15525,
"οπο":15499,
"_δε":15021,
"σης":14828,
"ναι":14699,
"ίνα":14581,
"ουμ":14531,
"υμε":14346,
"_ευ":14263,
"από":14186,
"_πα":14039,
"ότι":14014,
"_σε":13929,
"τις":13852,
"παρ":13503,
"ουν":13481,
"_τα":13419,
"υν_":13392,
"_ότ":13385,
"ατα":13313,
"εν_":13301,
"συν":13188,
"περ":13128,
"ετα":13105,
"πό_":13057,
"τρο":12829,
"ιο_":12789,
"_οι":12740,
"μα_":12475,
"μέν":12474,
"ντα":12467,
"_πε":12327,
"ηση":12080,
"_τι":12050,
"ροπ":11987,
"_έ_":11888,
"ερι":11865,
"κά_":11796,
"_εν":11735,
"απο":11708,
"ιστ":11698,
"τον":11604,
"ευρ":11565,
"ικά":11562,
"δεν":11364,
"_ει":11261,
"πει":11098,
"πρό":11044,
"εις":11034,
"_κο":10943,
"τερ":10760,
"αν_":10723,
"τε_":10698,
"ανα":10526,
"τό_":10388,
"ίας":10369,
"αντ":10365,
"ικό":10049,
"οιν":9986,
"_μι":9981,
"πιτ":9846,
"ρα_":9784,
"κοι":9749,
"φορ":9615,
"ού_":9464,
"συμ":9361,
"ημα":9284,
"στι":9263,
"έπε":9222,
"κής":9207,
"ισμ":9165,
"ποί":9103,
"ωση":9064,
"υτό":9009,
"οντ":8911,
"μια":8832,
"δικ":8605,
"σου":8568,
"ένα":8537,
"ρισ":8473,
"κό_":8448,
"_εκ":8395,
"ιτρ":8346,
"ικο":8331,
"στα":8304,
"στε":8266,
"ούν":8262,
"τά_":8261,
"ρωπ":8246,
"_ου":8210,
"_αρ":8180,
"ρέπ":8012,
"_οπ":7931,
"τητ":7885,
"_μέ":7831,
"αστ":7785,
"πορ":7719,
"μετ":7665,
"ροσ":7661,
"νου":7648,
"πρέ":7532,
"ολο":7516,
"υρω":7488,
"σία":7480,
"ότη":7463,
"ωπα":7339,
"ατο":7335,
"_εξ":7266,
"_θέ":7253,
"νομ":7248,
"_έν":7244,
"ντι":7234,
"_μα":7225,
"ικα":7136,
"οπή":7088,
"αϊκ":7081,
"ποι":7043,
"ύν_":6974,
"μπο":6902,
"επί":6861,
"ός_":6816,
"παϊ":6811,
"_πλ":6799,
"λογ":6789,
"ατά":6787,
"ολι":6777,
"_ο_":6775,
"τασ":6735,
"αλλ":6679,
"θεσ":6665,
"κών":6651,
"εια":6594,
"νικ":6582,
"θεί":6549,
"ασί":6533,
"ρά_":6490,
"ατι":6481,
"κές":6440,
"υτή":6360,
"τή_":6359,
"ίες":6350,
"αση":6291,
"αφο":6286,
"σημ":6261,
"_μπ":6244,
"αρα":6220,
"νο_":6177,
"νει":6176,
"υπο":6121,
"ητα":6120,
"άλλ":6114,
"ήσε":6062,
"_τρ":6049,
"_κά":6010,
"ινο":6003,
"_σ_":6002,
"ικέ":5940,
"ικώ":5913,
"νων":5777,
"όσο":5754,
"ίου":5748,
"καν":5668,
"_θε":5583,
"κού":5580,
"_ση":5573,
"τος":5571,
"ώς_":5553,
"βου":5550,
"ούμ":5535,
"ετι":5498,
"ουλ":5496,
"πως":5491,
"μας":5486,
"πισ":5471,
"λιτ":5457,
"οτε":5443,
"ποτ":5440,
"μικ":5433,
"_αλ":5380,
"ιτι":5369,
"ιση":5343,
"ερα":5333,
"ύρι":5289,
"ύμε":5282,
"ταν":5183,
"ρού":5121,
"_δη":5079,
"_κρ":5077,
"ρία":5071,
"ορά":5067,
"τελ":5063,
"_ή_":5059,
"λά_":5028,
"ρο_":5021,
"τού":4969,
"γμα":4959,
"ελε":4916,
"λου":4886,
"_όλ":4882,
"_ετ":4878,
"νισ":4864,
"ρατ":4843,
"εδρ":4822,
"_κύ":4786,
"μεν":4786,
"ότε":4779,
"οβο":4761,
"πή_":4750,
"καθ":4730,
"ένο":4724,
"μερ":4719,
"_αφ":4716,
"λει":4710,
"λλο":4697,
"σο_":4684,
"λευ":4661,
"νωσ":4657,
"υνα":4646,
"ρικ":4636,
"ριο":4628,
"κύρ":4613,
"ργα":4602,
"εργ":4564,
"λα_":4555,
"εων":4553,
"ρου":4498,
"_μο":4489,
"τησ":4486,
"εση":4475,
"ομι":4472,
"_κυ":4433,
"κρι":4424,
"άσε":4313,
"ορι":4295,
"βού":4281,
"σεω":4276,
"υμβ":4246,
"λλά":4236,
"μη_":4210,
"τών":4199,
"ανά":4197,
"δημ":4179,
"ερο":4173,
"νη_":4173,
"ομέ":4167,
"_ορ":4163,
"ριε":4152,
"μού":4145,
"ίνε":4125,
"απα":4091,
"σμο":4088,
"οικ":4087,
"_ερ":4047,
"τηρ":4044,
"_ακ":4032,
"ονο":4029,
"μεί":4020,
"ήμα":4018,
"τάσ":3997,
"υνε":3994,
"_ελ":3968,
"οστ":3966,
"τας":3963,
"_σύ":3947,
"ούλ":3935,
"_όπ":3934,
"ιών":3934,
"ραγ":3916,
"τομ":3914,
"τεί":3884,
"ουρ":3880,
"ιε_":3877,
"_γε":3869,
"γία":3859,
"λόγ":3858,
"ρος":3846,
"θέσ":3844,
"ϊκή":3842,
"ορο":3830,
"ιμέ":3829,
"πάρ":3827,
"ύλι":3794,
"καλ":3788,
"ορε":3778,
"νοβ":3752,
"τήσ":3752,
"κει":3746,
"ολύ":3718,
"_ό_":3716,
"ιας":3688,
"ρόε":3687,
"ίς_":3686,
"όεδ":3685,
"μου":3684,
"διά":3683,
"αρ_":3670,
"_νο":3668,
"ρει":3660,
"σω_":3642,
"λιο":3639,
"σμό":3633,
"ιδι":3626,
"_σα":3624,
"_πι":3611,
"αρά":3604,
"θού":3602,
"νες":3602,
"ρεί":3581,
"λη_":3568,
"κον":3557,
"γρα":3549,
"πίσ":3535,
"στό":3525,
"_εμ":3519,
"_ώρ":3518,
"αμε":3511,
"ρε_":3505,
"σα_":3496,
"πρα":3480,
"ύτε":3478,
"_νω":3472,
"ύς_":3472,
"δρε":3471,
"ανο":3467,
"_έκ":3456,
"ίο_":3443,
"οία":3440,
"τές":3431,
"σμα":3426,
"_δυ":3424,
"ευτ":3410,
"φέρ":3408,
"υπά":3396,
"ξη_":3393,
"ούς":3375,
"_ισ":3323,
"ιακ":3319,
"συγ":3316,
"ρώπ":3303,
"δυν":3294,
"τες":3292,
"ρες":3288,
"φων":3268,
"ουσ":3258,
"_άλ":3255,
"_λό":3241,
"υλί":3239,
"διε":3237,
"άτω":3220,
"εξα":3189,
"όνο":3189,
"ίζο":3156,
"εία":3155,
"ροτ":3146,
"μασ":3138,
"μαν":3123,
"μάτ":3122,
"κυρ":3120,
"ρίζ":3119,
"ώσε":3117,
"υρώ":3096,
"ήσο":3085,
"λύ_":3071,
"_τε":3070,
"αγμ":3066,
"μό_":3066,
"τημ":3066,
"ιότ":3063,
"ποσ":3058,
"επε":3043,
"_ασ":3039,
"νία":3009,
"_πω":3004,
"διο":3003,
"ρήσ":3003,
"εκτ":3002,
"νον":2999,
"ρότ":2998,
"_ως":2996,
"έσε":2994,
"όπο":2986,
"μβο":2984,
"ορί":2979,
"ίτε":2974,
"τοι":2964,
"ότα":2953,
"ύσε":2946,
"λεί":2933,
"λικ":2928,
"ιατ":2927,
"ταξ":2917,
"βασ":2915,
"_μό":2910,
"ψη_":2901,
"ημε":2899,
"ίση":2895,
"μία":2894,
"στή":2894,
"υρί":2894,
"θηκ":2890,
"άρ_":2874,
"ίζε":2863,
"_αγ":2861,
"μεγ":2857,
"ζου":2849,
"_βο":2847,
"τιμ":2845,
"ωνι":2842,
"ρη_":2841,
"εσμ":2838,
"ερί":2837,
"νατ":2836,
"_ομ":2833,
"κρα":2833,
"ράτ":2822,
"ήθε":2821,
"λον":2816,
"όπω":2810,
"μόν":2805,
"ευθ":2803,
"όλο":2801,
"πο_":2790,
"λο_":2786,
"είς":2785,
"αρμ":2782,
"όν_":2776,
"ήτη":2771,
"ατε":2763,
"κθε":2753,
"μέλ":2748,
"γασ":2743,
"ούσ":2742,
"υση":2731,
"ένω":2725,
"κολ":2719,
"θέμ":2718,
"κρά":2710,
"αιρ":2709,
"ραμ":2695,
"ρησ":2692,
"ντο":2688,
"τόσ":2685,
"_όσ":2680,
"αδι":2674,
"έμα":2668,
"μφω":2655,
"ογι":2655,
"_εγ":2651,
"ανε":2644,
"ειρ":2637,
"υγκ":2637,
"ρον":2632,
"ζητ":2627,
"υστ":2623,
"έκθ":2621,
"_γν":2618,
"σμέ":2616,
"κόμ":2609,
"_ωρ":2596,
"υργ":2581,
"έα_":2575,
"οίο":2568,
"όμε":2566,
"ροφ":2565,
"ασφ":2561,
"νός":2558,
"ράσ":2558,
"ιες":2557,
"ζήτ":2549,
"λίο":2549,
"εντ":2546,
"αφέ":2542,
"υμφ":2533,
"στρ":2527,
"_ιδ":2522,
"πικ":2522,
"ειτ":2520,
"γικ":2513,
"ρωτ":2511,
"πής":2510,
"οδο":2509,
"οί_":2504,
"οβλ":2497,
"ινω":2494,
"τήρ":2491,
"άστ":2487,
"ονι":2481,
"έρο":2467,
"ωρί":2467,
"ροβ":2466,
"_όμ":2464,
"ακο":2462,
"ναν":2456,
"οιο":2454,
"μμα":2453,
"σια":2452,
"υτο":2444,
"τρα":2438,
"θετ":2436,
"ληρ":2429,
"ωστ":2428,
"ιαφ":2420,
"εισ":2415,
"εμπ":2411,
"τεύ":2411,
"ίνο":2408,
"κασ":2407,
"παν":2405,
"_κ_":2395,
"κε_":2388,
"άδε":2383,
"αρι":2382,
"ίων":2379,
"ενο":2378,
"ρώτ":2375,
"κεί":2372,
"άπο":2367,
"εωρ":2365,
"ζει":2361,
"υσι":2357,
"ειδ":2356,
"νετ":2355,
"βάλ":2342,
"ρια":2342,
"ροκ":2342,
"ρασ":2338,
"_τέ":2337,
"ρών":2329,
"_ρη":2321,
"κότ":2316,
"ονό":2313,
"ημο":2311,
"συζ":2309,
"ώρα":2307,
"άθε":2300,
"πλη":2300,
"ρετ":2300,
"ιασ":2298,
"ακό":2295,
"ητή":2290,
"οτι":2284,
"όμα":2280,
"ιου":2276,
"γνω":2263,
"στά":2261,
"_νέ":2258,
"_τό":2254,
"ναφ":2251,
"_εδ":2248,
"σιο":2243,
"αγω":2242,
"ενι":2235,
"έρε":2229,
"γορ":2214,
"σκο":2213,
"ιαδ":2205,
"ζετ":2204,
"υτέ":2203,
"υπό":2193,
"ώπη":2193,
"νθρ":2190,
"αίτ":2189,
"εθν":2189,
"ογί":2174,
"ριμ":2174,
"πτυ":2172,
"ελα":2168,
"άς_":2165,
"σας":2163,
"_εφ":2159,
"γον":2159,
"πλα":2158,
"είτ":2152,
"ερη":2152,
"λισ":2147,
"ηκε":2146,
"_βα":2138,
"σήμ":2137,
"_οδ":2135,
"γκε":2134,
"_δρ":2129,
"ένε":2129,
"άνο":2127,
"υνο":2126,
"μβά":2123,
"_ρό":2119,
"έλο":2119,
"άνε":2116,
"γάλ":2116,
"αίν":2115,
"έλε":2110,
"ρόν":2107,
"ψηφ":2106,
"ρίσ":2103,
"έτο":2087,
"ατό":2084,
"ετά":2080,
"_ολ":2072,
"μως":2071,
"έση":2068,
"τισ":2068,
"λού":2066,
"ριβ":2066,
"ερε":2064,
"θελ":2064,
"μέσ":2061,
"ναλ":2060,
"σύν":2052,
"μελ":2045,
"είμ":2044,
"έλη":2041,
"αλύ":2035,
"_αξ":2033,
"λύτ":2033,
"νερ":2030,
"νησ":2029,
"ιτα":2028,
"ίσε":2023,
"νε_":2010,
"αιτ":2008,
"ίσο":2006,
"ένη":2005,
"ρώ_":2001,
"οδη":1995,
"ομά":1992,
"γο_":1991,
"σον":1988,
"άση":1986,
"νότ":1986,
"ατη":1984,
"όμω":1980,
"ισ_":1979,
"λλα":1978,
"στώ":1977,
"σότ":1974,
"ομο":1969,
"θει":1964,
"ηθε":1962,
"σαν":1962,
"άτη":1959,
"_σή":1958,
"αξι":1956,
"_ήθ":1950,
"ατί":1950,
"τέλ":1941,
"_σο":1940,
"ακρ":1940,
"σκε":1939,
"ξει":1935,
"_μη":1932,
"ολλ":1924,
"σφα":1921,
"_βρ":1916,
"θέλ":1914,
"ανθ":1911,
"οφο":1908,
"λαί":1906,
"ευσ":1905,
"δο_":1903,
"τοπ":1898,
"_ρε":1896,
"ιμε":1895,
"ρακ":1894,
"δει":1893,
"_άρ":1891,
"ωνί":1891,
"εγά":1888,
"λοι":1888,
"ρμο":1884,
"αμμ":1882,
"ρων":1881,
"σιμ":1881,
"ινή":1878,
"μαι":1877,
"δηγ":1876,
"λαμ":1872,
"ιμο":1867,
"επα":1866,
"ζον":1865,
"μάδ":1865,
"αίσ":1864,
"_αμ":1856,
"_πά":1847,
"ακτ":1841,
"ούτ":1835,
"τρό":1832,
"ετε":1824,
"ντί":1823,
"άλε":1822,
"γή_":1822,
"ενδ":1819,
"οκρ":1818,
"υλε":1818,
"κεκ":1811,
"εκρ":1809,
"ίσι":1804,
"πρά":1802,
"λες":1801,
"κάν":1800,
"αμβ":1796,
"είο":1795,
"οθε":1791,
"νοι":1788,
"οίη":1787,
"θερ":1785,
"ίησ":1784,
"εφα":1783,
"μιο":1783,
"_ζη":1778,
"ώρε":1775,
"φερ":1772,
"αρο":1768,
"ποδ":1767,
"γου":1765,
"υξη":1763,
"σσό":1760,
"ογρ":1759,
"ζω_":1758,
"φαλ":1755,
"αθε":1754,
"βάσ":1753,
"μέρ":1753,
"οια":1750,
"ριν":1750,
"θεω":1745,
"λος":1745,
"λλε":1743,
"ημι":1741,
"όγο":1739,
"κτι":1738,
"ώμα":1737,
"υπε":1736,
"_σκ":1733,
"ρόπ":1733,
"κάπ":1731,
"_δύ":1730,
"ίδι":1713,
"υντ":1709,
"τής":1708,
"υτά":1708,
"άν_":1699,
"αλι":1699,
"ήμε":1698,
"ράγ":1695,
"_φο":1691,
"ανι":1689,
"πε_":1689,
"άμε":1684,
"ομα":1683,
"ισσ":1681,
"παι":1680,
"γαλ":1679,
"_βά":1678,
"ηρί":1674,
"ητι":1669,
"πίτ":1657,
"κρί":1655,
"γισ":1653,
"νω_":1649,
"πρώ":1645,
"ητο":1644,
"σή_":1643,
"δα_":1641,
"λεσ":1641,
"ελέ":1639,
"ίμα":1638,
"λλη":1634,
"εγκ":1633,
"ενό":1632,
"δή_":1628,
"νοτ":1625,
"ειμ":1621,
"μέα":1620,
"ρόκ":1620,
"εδο":1617,
"τρέ":1613,
"τατ":1612,
"λησ":1609,
"βλη":1606,
"αγο":1605,
"γει":1604,
"_κό":1603,
"μισ":1602,
"έρω":1601,
"ηρο":1601,
"όντ":1599,
"ποφ":1595,
"τότ":1594,
"ορέ":1592,
"τυξ":1591,
"ίζω":1588,
"ραφ":1588,
"ποκ":1584,
"όκε":1584,
"πάν":1583,
"ύντ":1582,
"άδα":1579,
"λημ":1579,
"ξύ_":1579,
"μβα":1578,
"_πό":1576,
"ρεσ":1575,
"αξύ":1574,
"πη_":1573,
"γίν":1571,
"ασμ":1570,
"ριθ":1568,
"_γί":1564,
"άζε":1564,
"ομί":1561,
"_λα":1555,
"ιγμ":1555,
"ιάσ":1554,
"κιν":1554,
"ήρι":1552,
"νση":1552,
"ρωσ":1549,
"λή_":1547,
"υνέ":1542,
"βάν":1536,
"_ίδ":1535,
"γεν":1535,
"ιαί":1534,
"εάν":1533,
"ευ_":1527,
"τευ":1527,
"φαρ":1526,
"ωτι":1524,
"γκρ":1522,
"αιώ":1521,
"ασι":1519,
"δη_":1518,
"λών":1514,
"άλο":1511,
"νας":1511,
"ίως":1509,
"νωρ":1509,
"κλη":1508,
"νή_":1508,
"_εά":1505,
"ρημ":1505,
"_ήτ":1500,
"_λε":1500,
"θήκ":1497,
"_ψη":1492,
"λων":1488,
"κυβ":1486,
"σικ":1486,
"τόν":1486,
"εξε":1484,
"πιο":1484,
"ανό":1481,
"μον":1479,
"ήτα":1477,
"ταλ":1476,
"δομ":1472,
"_λο":1470,
"ρομ":1469,
"θρω":1466,
"ρόσ":1463,
"φασ":1461,
"ωμέ":1461,
"ημέ":1458,
"υνά":1455,
"ηρε":1453,
"ώτη":1453,
"όμη":1451,
"ίστ":1450,
"θυμ":1450,
"εκπ":1440,
"γεί":1437,
"νια":1437,
"άπτ":1435,
"_κε":1431,
"κοπ":1431,
"ξου":1431,
"ίπε":1430,
"ογή":1430,
"τήμ":1428,
"ωρώ":1428,
"αφε":1425,
"_εθ":1420,
"τυ_":1420,
"νης":1418,
"εγο":1416,
"ενε":1410,
"νόμ":1410,
"_ον":1409,
"δρο":1407,
"πεδ":1406,
"αρκ":1405,
"φάλ":1404,
"γεγ":1399,
"ενη":1397,
"αγκ":1395,
"μός":1395,
"εκε":1393,
"υμπ":1393,
"αθώ":1391,
"ινό":1391,
"_αι":1389,
"κάθ":1389,
"πρω":1388,
"σαφ":1388,
"_μί":1385,
"νάπ":1383,
"υζή":1383,
"τώσ":1382,
"λάβ":1380,
"ταγ":1380,
"πηρ":1378,
"αίω":1376,
"λία":1376,
"τία":1375,
"όγω":1375,
"ρές":1372,
"ργί":1371,
"_ι_":1369,
"γω_":1368,
"ίτρ":1366,
"ολί":1363,
"πιθ":1361,
"νού":1360,
"ύσα":1360,
"ιβά":1357,
"_ωσ":1356,
"υνθ":1355,
"γνώ":1349
};
LanguageIdentifier.addProfile('el', ngrams, 5581755);
})();