const products = [
  {
    ZIP: "77778",
    NAME: " Vilniaus NORFA Zuj\u016bn\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Zuj\u016bn\u0173 g.",

    X_COORDINATE: "25.160513",
    Y_COORDINATE: "54.711004",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:28:08.090+03:00",
  },
  {
    ZIP: "10696",
    NAME: "1it postipunkt",

    A5_NAME: "S\u00f5pruse pst",

    X_COORDINATE: "24.714293",
    Y_COORDINATE: "59.420107",

    MODIFIED: "2021-04-20T13:23:07.237+03:00",
  },
  {
    ZIP: "96243",
    NAME: "Abja Coop Konsumi pakiautomaat",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Abja-Paluoja linn",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "13",

    X_COORDINATE: "25.356108",
    Y_COORDINATE: "58.125738",

    MODIFIED: "2020-11-25T02:00:03.720+02:00",
  },
  {
    ZIP: "69494",
    NAME: "Abja-Paluoja postipunkt",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Abja-Paluoja linn",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "21",

    X_COORDINATE: "25.353927",
    Y_COORDINATE: "58.126151",
    SERVICE_HOURS: "E,T,K,N,R 09:00-18:00 L 09:00-14:00 P SULETUD",

    MODIFIED: "2021-05-24T06:34:07.260+03:00",
  },
  {
    ZIP: "48094",
    NAME: "Adavere postipunkt (Coop)",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "P\u00f5ltsamaa vald",
    A3_NAME: "Adavere alevik",

    A5_NAME: "Tallinna mnt",

    X_COORDINATE: "25.899187",
    Y_COORDINATE: "58.706409",
    SERVICE_HOURS: "Alates 10.03.2021: E,T,K,N,R,L,P 09:00-19:00",

    MODIFIED: "2021-03-05T09:27:58.447+02:00",
  },
  {
    ZIP: "74594",
    NAME: "Aegviidu postipunkt",

    A2_NAME: "Anija vald",
    A3_NAME: "Aegviidu alev",

    A5_NAME: "Piibe mnt",

    X_COORDINATE: "25.606648",
    Y_COORDINATE: "59.288389",
    SERVICE_HOURS: "E,T,N,R,P 10:00-16:00 K,L SULETUD",

    MODIFIED: "2021-02-12T11:03:01.520+02:00",
  },
  {
    ZIP: "63794",
    NAME: "Ahja postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "Ahja alevik",

    A5_NAME: "Illimari tn",

    X_COORDINATE: "27.069935",
    Y_COORDINATE: "58.206921",
    SERVICE_HOURS: "E,T 16:00-18:00 K,N,R 11:00-13:00 L,P SULETUD",

    MODIFIED: "2021-03-29T12:53:42.587+03:00",
  },
  {
    ZIP: "96142",
    NAME: "Ahtme Grossi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "Ahtme linnaosa",

    A5_NAME: "Maleva tn",

    A7_NAME: "23",

    X_COORDINATE: "27.420557",
    Y_COORDINATE: "59.327631",

    MODIFIED: "2021-05-27T05:15:23.323+03:00",
  },
  {
    ZIP: "96123",
    NAME: "Ahtme Maxima XX pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "Ahtme linnaosa",

    A5_NAME: "Puru tee",

    A7_NAME: "77",

    X_COORDINATE: "27.420312",
    Y_COORDINATE: "59.337327",

    MODIFIED: "2021-05-28T05:19:46.867+03:00",
  },
  {
    ZIP: "12994",
    NAME: "Aiandi postipunkt (Roserii looduspood)",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Mustam\u00e4e tee",

    A7_NAME: "60",

    X_COORDINATE: "24.688512",
    Y_COORDINATE: "59.413446",
    SERVICE_HOURS:
      "T,K,N,R 12:30-14:30 E,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "21.06.2021 kuni 29.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "29.06.2021",

    MODIFIED: "2021-06-04T08:43:24.560+03:00",
  },
  {
    ZIP: "9950",
    NAME: "Aizkraukles T/C Iga pakom\u0101ts",

    A1_NAME: "Aizkraukles novads",
    A2_NAME: "Aizkraukle",
    A3_NAME: "",

    A5_NAME: "Gaismas iela",

    A7_NAME: "35",

    X_COORDINATE: "25.259438",
    Y_COORDINATE: "56.610274",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-13T07:25:29.713+02:00",
  },
  {
    ZIP: "9980",
    NAME: "Aizputes Zvaig\u017e\u0146u ielas TOP pakom\u0101ts",

    A1_NAME: "Aizputes novads",
    A2_NAME: "Aizpute",
    A3_NAME: "",

    A5_NAME: "Zvaig\u017e\u0146u iela",

    X_COORDINATE: "21.607600",
    Y_COORDINATE: "56.722417",

    comment_lav: "Pie otr\u0101s T/C ieejas",

    MODIFIED: "2021-01-14T07:03:32.723+02:00",
  },
  {
    ZIP: "55583",
    NAME: "Akmen\u0117s NORFA Daukanto pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Akmen\u0117s r. sav.",
    A3_NAME: "Akmen\u0117s m.",

    A5_NAME: "S. Daukanto g.",

    X_COORDINATE: "22.752311",
    Y_COORDINATE: "56.243503",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:25:55.770+02:00",
  },
  {
    ZIP: "9183",
    NAME: "Akn\u012bstes VESKO pakom\u0101ts",

    A1_NAME: "Akn\u012bstes novads",
    A2_NAME: "Akn\u012bste",
    A3_NAME: "",

    A5_NAME: "Skolas iela",

    X_COORDINATE: "25.741318",
    Y_COORDINATE: "56.161816",

    MODIFIED: "2020-11-13T05:47:19.243+02:00",
  },
  {
    ZIP: "68594",
    NAME: "Ala postipunkt (Coop)",

    A1_NAME: "Valga maakond",
    A2_NAME: "T\u00f5rva vald",
    A3_NAME: "Ala k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Ala kauplus",
    A7_NAME: "",

    X_COORDINATE: "25.701894",
    Y_COORDINATE: "58.009938",
    SERVICE_HOURS: "E,T,K,N,R 10:00-19:00 L,P 10:00-15:00",

    MODIFIED: "2021-01-30T09:30:31.090+02:00",
  },
  {
    ZIP: "60294",
    NAME: "Alatskivi postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Peipsi\u00e4\u00e4re vald",
    A3_NAME: "Alatskivi alevik",

    A5_NAME: "Hirveaia tn",

    A7_NAME: "11",

    X_COORDINATE: "27.134852",
    Y_COORDINATE: "58.601971",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-16:00 L,P 10:00-16:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-05T12:03:25.597+02:00",
  },
  {
    ZIP: "74494",
    NAME: "Alavere postipunkt",

    A2_NAME: "Anija vald",
    A3_NAME: "Alavere k\u00fcla",

    A5_NAME: "Oja tn",

    X_COORDINATE: "25.328382",
    Y_COORDINATE: "59.245232",
    SERVICE_HOURS:
      "E,T,K,N,R,L 10:00-19:00 P 10:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:45:14.620+03:00",
  },
  {
    ZIP: "9192",
    NAME: "Alojas Mini TOP pakom\u0101ts",

    A1_NAME: "Alojas novads",
    A2_NAME: "Aloja",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A8_NAME: "4",
    X_COORDINATE: "24.882478",
    Y_COORDINATE: "57.766744",

    MODIFIED: "2021-01-14T07:02:07.937+02:00",
  },
  {
    ZIP: "79696",
    NAME: "Alu postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Alu alevik",

    A5_NAME: "Keskuse tee",

    X_COORDINATE: "24.762430",
    Y_COORDINATE: "59.023026",
    SERVICE_HOURS: "E,T,K,N,R 10:00-20:00 L 10:00-19:00 P 10:00-18:00",

    MODIFIED: "2021-05-06T12:49:04.540+03:00",
  },
  {
    ZIP: "55507",
    NAME: "Alytaus IKI Juozapavi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus m. sav.",
    A3_NAME: "Alytaus m.",

    A5_NAME: "A. Juozapavi\u010diaus g.",

    A7_NAME: "13",

    X_COORDINATE: "24.059837",
    Y_COORDINATE: "54.403245",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-02-04T14:44:56.027+02:00",
  },
  {
    ZIP: "55599",
    NAME: "Alytaus NORFA Jurgi\u0161ki\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus m. sav.",
    A3_NAME: "Alytaus m.",

    A5_NAME: "Jurgi\u0161ki\u0173 g.",

    X_COORDINATE: "24.013238",
    Y_COORDINATE: "54.399716",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:26:30.143+03:00",
  },
  {
    ZIP: "88895",
    NAME: "Alytaus NORFA Topoli\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus m. sav.",
    A3_NAME: "Alytaus m.",

    A5_NAME: "Topoli\u0173 g.",

    X_COORDINATE: "24.028121",
    Y_COORDINATE: "54.396665",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 parkavimo aik\u0161tel\u0117s pus\u0117s",
    MODIFIED: "2021-05-27T07:21:29.773+03:00",
  },
  {
    ZIP: "88854",
    NAME: "Alytaus PC ARENA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus m. sav.",
    A3_NAME: "Alytaus m.",

    A5_NAME: "\u016adrijos g.",

    X_COORDINATE: "24.016728",
    Y_COORDINATE: "54.407767",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je pagrindinio \u012f\u0117jimo pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T06:27:27.410+03:00",
  },
  {
    ZIP: "88855",
    NAME: "Alytaus RIMI Pulko pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus m. sav.",
    A3_NAME: "Alytaus m.",

    A5_NAME: "Pulko g.",

    A7_NAME: "51A",

    X_COORDINATE: "24.043778",
    Y_COORDINATE: "54.387953",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:28:32.953+03:00",
  },
  {
    ZIP: "9951",
    NAME: "Al\u016bksnes Maxima X pakom\u0101ts",

    A1_NAME: "Al\u016bksnes novads",
    A2_NAME: "Al\u016bksne",
    A3_NAME: "",

    A5_NAME: "Pils iela",

    A7_NAME: "9B",

    X_COORDINATE: "27.039393",
    Y_COORDINATE: "57.430149",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2021-01-14T07:04:16.200+02:00",
  },
  {
    ZIP: "96118",
    NAME: "Antsla Coop Konsumi pakiautomaat",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Antsla vald",
    A3_NAME: "Antsla linn",

    A5_NAME: "F. R. Kreutzwaldi tn",

    A7_NAME: "4a",

    X_COORDINATE: "26.529708",
    Y_COORDINATE: "57.828535",

    MODIFIED: "2021-04-07T08:01:18.083+03:00",
  },
  {
    ZIP: "66401",
    NAME: "Antsla postkontor",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Antsla vald",
    A3_NAME: "Antsla linn",

    A5_NAME: "F. R. Kreutzwaldi tn",

    X_COORDINATE: "26.529298",
    Y_COORDINATE: "57.829043",
    SERVICE_HOURS: "E,K 11:00-18:00 T,N,R 09:00-16:00 L,P SULETUD",

    MODIFIED: "2021-04-05T12:42:50.113+03:00",
  },
  {
    ZIP: "88800",
    NAME: "Anyk\u0161\u010di\u0173 NORFA Vilniaus g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Anyk\u0161\u010di\u0173 r. sav.",
    A3_NAME: "Anyk\u0161\u010di\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "22",

    X_COORDINATE: "25.098617",
    Y_COORDINATE: "55.522851",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T07:27:28.780+02:00",
  },
  {
    ZIP: "55570",
    NAME: "Anyk\u0161\u010di\u0173 NORFA \u017diburio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Anyk\u0161\u010di\u0173 r. sav.",
    A3_NAME: "Anyk\u0161\u010di\u0173 m.",

    A5_NAME: "\u017diburio g.",

    A7_NAME: "12",

    X_COORDINATE: "25.118836",
    Y_COORDINATE: "55.524932",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:32:50.250+02:00",
  },
  {
    ZIP: "96230",
    NAME: "Aravete Meie kaupluse pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "J\u00e4rva vald",
    A3_NAME: "Aravete alevik",

    A5_NAME: "Piibe mnt",

    A7_NAME: "16",

    X_COORDINATE: "25.751375",
    Y_COORDINATE: "59.144516",

    MODIFIED: "2021-04-22T13:11:17.583+03:00",
  },
  {
    ZIP: "73594",
    NAME: "Aravete postipunkt",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "J\u00e4rva vald",
    A3_NAME: "Aravete alevik",

    A5_NAME: "Piibe mnt",

    A7_NAME: "16",

    X_COORDINATE: "25.751514",
    Y_COORDINATE: "59.144414",
    SERVICE_HOURS: "E 09:00-12:00 T,K,N,R 09:00-15:00 L 10:00-13:00 P SULETUD",

    MODIFIED: "2021-04-16T12:08:31.310+03:00",
  },
  {
    ZIP: "75095",
    NAME: "Ardu postipunkt",

    A2_NAME: "Kose vald",
    A3_NAME: "Ardu alevik",

    A5_NAME: "Kesk tee",

    X_COORDINATE: "25.358704",
    Y_COORDINATE: "59.099963",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-12:30, 13:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "12.07.2021 kuni 06.08.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "06.08.2021",

    MODIFIED: "2021-06-03T09:53:30.087+03:00",
  },
  {
    ZIP: "55508",
    NAME: "Ariogalos R\u016aTA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Raseini\u0173 r. sav.",
    A3_NAME: "Ariogalos m.",

    A5_NAME: "Melioratori\u0173 g.",

    X_COORDINATE: "23.481931",
    Y_COORDINATE: "55.262334",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T10:59:00.603+02:00",
  },
  {
    ZIP: "11701",
    NAME: "Arsenali postkontor",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Erika tn",

    A7_NAME: "14",

    X_COORDINATE: "24.717816",
    Y_COORDINATE: "59.451722",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-19T12:36:38.687+03:00",
  },
  {
    ZIP: "96204",
    NAME: "Aruk\u00fcla Coop Konsumi pakiautomaat ",

    A2_NAME: "Raasiku vald",
    A3_NAME: "Aruk\u00fcla alevik",

    A5_NAME: "Tallinna mnt",

    X_COORDINATE: "25.078001",
    Y_COORDINATE: "59.370744",

    MODIFIED: "2021-04-09T07:59:50.867+03:00",
  },
  {
    ZIP: "75291",
    NAME: "Aruk\u00fcla postkontor",

    A2_NAME: "Raasiku vald",
    A3_NAME: "Aruk\u00fcla alevik",

    A5_NAME: "Tallinna mnt",

    X_COORDINATE: "25.078082",
    Y_COORDINATE: "59.370878",
    SERVICE_HOURS:
      "T,K,R 09:30-14:30 N 10:30-18:00 L 10:00-13:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "15.06.2021 kuni 19.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "19.06.2021",

    MODIFIED: "2021-05-20T14:24:21.010+03:00",
  },
  {
    ZIP: "96211",
    NAME: "Aseri Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Aseri alevik",

    A5_NAME: "Tehase tn",

    A7_NAME: "23",

    X_COORDINATE: "26.866788",
    Y_COORDINATE: "59.449630",

    MODIFIED: "2019-08-21T09:07:10.457+03:00",
  },
  {
    ZIP: "43494",
    NAME: "Aseri postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Aseri alevik",

    A5_NAME: "Keskp\u00f5ik",

    X_COORDINATE: "26.869575",
    Y_COORDINATE: "59.452887",
    SERVICE_HOURS:
      "T,K,N 10:00-14:00 R,L 12:00-16:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:39:38.847+03:00",
  },
  {
    ZIP: "93794",
    NAME: "Aste postipunkt",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Aste alevik",

    A5_NAME: "Soo tn",

    X_COORDINATE: "22.444697",
    Y_COORDINATE: "58.346347",
    SERVICE_HOURS:
      "E 10:00-18:00 T,K,N 09:00-17:00 R 09:00-13:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS:
      "14.06.2021: SULETUD;23.06.2021 kuni 22.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "22.07.2021",
    TEMP_SERVICE_HOURS_2: "22.06.2021: 09:00-14:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "22.06.2021",

    MODIFIED: "2021-06-01T11:06:06.450+03:00",
  },
  {
    ZIP: "9158",
    NAME: "Auces TOP pakom\u0101ts",

    A1_NAME: "Auces novads",
    A2_NAME: "Auce",
    A3_NAME: "",

    A5_NAME: "Bazn\u012bcas iela",

    X_COORDINATE: "22.892116",
    Y_COORDINATE: "56.464791",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-20T09:22:18.740+02:00",
  },
  {
    ZIP: "96238",
    NAME: "Audru osavallakeskuse pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "Audru alevik",

    A5_NAME: "P\u00e4rna allee",

    X_COORDINATE: "24.356293",
    Y_COORDINATE: "58.407850",

    MODIFIED: "2021-05-24T13:21:59.393+03:00",
  },
  {
    ZIP: "88300",
    NAME: "Audru postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "Audru alevik",

    A5_NAME: "P\u00e4rna allee",

    X_COORDINATE: "24.356331",
    Y_COORDINATE: "58.407778",
    SERVICE_HOURS:
      "E,T 09:00-18:00 K,N,R 09:00-16:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-10T11:51:24.303+03:00",
  },
  {
    ZIP: "9193",
    NAME: "Aug\u0161l\u012bgatnes ELVI pakom\u0101ts",

    A1_NAME: "L\u012bgatnes novads",
    A2_NAME: "L\u012bgatnes pagasts",
    A3_NAME: "Aug\u0161l\u012bgatne",

    A5_NAME: "N\u012btaures iela",

    X_COORDINATE: "25.035167",
    Y_COORDINATE: "57.183272",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-13T05:58:34.347+02:00",
  },
  {
    ZIP: "11294",
    NAME: "Avera postipunkt",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Suur-M\u00e4nniku tn",

    X_COORDINATE: "24.716222",
    Y_COORDINATE: "59.369251",
    SERVICE_HOURS: "E,T,K,N,R 09:00-17:00 L,P SULETUD",

    MODIFIED: "2021-03-31T09:28:01.420+03:00",
  },
  {
    ZIP: "42095",
    NAME: "Avinurme postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "Mustvee vald",
    A3_NAME: "Avinurme alevik",

    A5_NAME: "V\u00f5idu tn",

    A7_NAME: "18",

    X_COORDINATE: "26.870152",
    Y_COORDINATE: "58.986011",
    SERVICE_HOURS: "E,T,K,N,R,L,P 09:00-19:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:57:51.940+03:00",
  },
  {
    ZIP: "9182",
    NAME: "Bab\u012btes ELVI pakom\u0101ts",

    A1_NAME: "Bab\u012btes novads",
    A2_NAME: "Bab\u012btes pagasts",
    A3_NAME: "Bab\u012bte",

    A5_NAME: "Liepu aleja",

    A7_NAME: "15A",

    X_COORDINATE: "23.948282",
    Y_COORDINATE: "56.956401",

    comment_lav: "Pa kreisi no T/C ieejas",

    MODIFIED: "2020-11-13T10:46:28.923+02:00",
  },
  {
    ZIP: "55584",
    NAME: "Baisogalos NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Radvili\u0161kio r. sav.",
    A3_NAME: "Baisogalos mstl.",

    A5_NAME: "Maironio g.",

    A7_NAME: "11",

    X_COORDINATE: "23.721187",
    Y_COORDINATE: "55.639392",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:54:17.003+02:00",
  },
  {
    ZIP: "9127",
    NAME: "Baldones Mego pakom\u0101ts",

    A1_NAME: "Baldones novads",
    A2_NAME: "Baldone",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "79",

    X_COORDINATE: "24.397414",
    Y_COORDINATE: "56.742731",

    comment_lav: "Pa labi no galven\u0101s ieejas",

    MODIFIED: "2020-11-12T13:19:25.660+02:00",
  },
  {
    ZIP: "9970",
    NAME: "Balo\u017eu Mego pakom\u0101ts",

    A1_NAME: "\u0136ekavas novads",
    A2_NAME: "Balo\u017ei",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "14",

    X_COORDINATE: "24.118521",
    Y_COORDINATE: "56.875234",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:04:35.603+02:00",
  },
  {
    ZIP: "77756",
    NAME: "Baltosios Vok\u0117s KOOPS pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160al\u010dinink\u0173 r. sav.",
    A3_NAME: "Baltosios Vok\u0117s m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "14A",

    X_COORDINATE: "25.125602",
    Y_COORDINATE: "54.455460",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:29:36.457+03:00",
  },
  {
    ZIP: "9982",
    NAME: "Balvu TOP pakom\u0101ts",

    A1_NAME: "Balvu novads",
    A2_NAME: "Balvi",
    A3_NAME: "",

    A5_NAME: "Partiz\u0101nu iela",

    X_COORDINATE: "27.263968",
    Y_COORDINATE: "57.132165",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T08:42:07.693+02:00",
  },
  {
    ZIP: "9940",
    NAME: "Bauskas Mini RIMI pakom\u0101ts",

    A1_NAME: "Bauskas novads",
    A2_NAME: "Bauska",
    A3_NAME: "",

    A5_NAME: "Za\u013c\u0101 iela",

    X_COORDINATE: "24.194196",
    Y_COORDINATE: "56.407070",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:58:55.463+02:00",
  },
  {
    ZIP: "9201",
    NAME: "Bauskas Pionieru ielas RIMI pakom\u0101ts",

    A1_NAME: "Bauskas novads",
    A2_NAME: "Bauska",
    A3_NAME: "",

    A5_NAME: "Pionieru iela",

    X_COORDINATE: "24.188877",
    Y_COORDINATE: "56.405837",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T10:43:46.233+02:00",
  },
  {
    ZIP: "55510",
    NAME: "Bir\u0161tono IKI Dariaus ir Gir\u0117no pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Bir\u0161tono sav.",
    A3_NAME: "Bir\u0161tono m.",

    A5_NAME: "S. Dariaus ir S. Gir\u0117no g.",

    A7_NAME: "24",

    X_COORDINATE: "24.028976",
    Y_COORDINATE: "54.605420",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:21:03.300+02:00",
  },
  {
    ZIP: "55571",
    NAME: "Bir\u017e\u0173 MAXIMA Vabalninko g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Bir\u017e\u0173 r. sav.",
    A3_NAME: "Bir\u017e\u0173 m.",

    A5_NAME: "Vabalninko g.",

    A7_NAME: "8A",

    X_COORDINATE: "24.737010",
    Y_COORDINATE: "56.201059",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:25:56.047+02:00",
  },
  {
    ZIP: "88866",
    NAME: "Bir\u017e\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Bir\u017e\u0173 r. sav.",
    A3_NAME: "Bir\u017e\u0173 m.",

    A5_NAME: "Respublikos g.",

    X_COORDINATE: "24.769034",
    Y_COORDINATE: "56.193955",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je parduotuv\u0117s \u012f\u0117jimo pus\u0117je",
    MODIFIED: "2020-12-27T09:00:46.980+02:00",
  },
  {
    ZIP: "9997",
    NAME: "Broc\u0113nu Mego pakom\u0101ts",

    A1_NAME: "Broc\u0113nu novads",
    A2_NAME: "Broc\u0113ni",
    A3_NAME: "",

    A5_NAME: "Lielcieceres iela",

    X_COORDINATE: "22.566372",
    Y_COORDINATE: "56.683105",

    comment_lav: "Pa labi no galven\u0101s ieejas",

    MODIFIED: "2020-11-13T10:41:39.767+02:00",
  },
  {
    ZIP: "9988",
    NAME: "Carnikavas Mego pakom\u0101ts",

    A1_NAME: "Carnikavas novads",
    A2_NAME: "",
    A3_NAME: "Carnikava",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "14",

    X_COORDINATE: "24.276075",
    Y_COORDINATE: "57.128330",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T09:33:15.713+02:00",
  },
  {
    ZIP: "9137",
    NAME: "C\u0113su Gaujas ielas Maxima X pakom\u0101ts",

    A1_NAME: "C\u0113su novads",
    A2_NAME: "C\u0113sis",
    A3_NAME: "",

    A5_NAME: "Gaujas iela",

    A7_NAME: "1/3",

    X_COORDINATE: "25.267205",
    Y_COORDINATE: "57.309659",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:04:54.733+02:00",
  },
  {
    ZIP: "9194",
    NAME: "C\u0113su T/C Globuss pakom\u0101ts",

    A1_NAME: "C\u0113su novads",
    A2_NAME: "C\u0113sis",
    A3_NAME: "",

    A5_NAME: "Rai\u0146a iela",

    A7_NAME: "26/28",

    X_COORDINATE: "25.276853",
    Y_COORDINATE: "57.309283",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T05:59:01.853+02:00",
  },
  {
    ZIP: "9921",
    NAME: "C\u0113su Valmieras ielas Maxima XX pakom\u0101ts",

    A1_NAME: "C\u0113su novads",
    A2_NAME: "C\u0113sis",
    A3_NAME: "",

    A5_NAME: "Valmieras iela",

    A7_NAME: "17A",

    X_COORDINATE: "25.280035",
    Y_COORDINATE: "57.317123",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:05:17.613+02:00",
  },
  {
    ZIP: "9989",
    NAME: "Dagdas TOP pakom\u0101ts",

    A1_NAME: "Dagdas novads",
    A2_NAME: "Dagda",
    A3_NAME: "",

    A5_NAME: "Daugavpils iela",

    X_COORDINATE: "27.539632",
    Y_COORDINATE: "56.095797",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T09:35:33.373+02:00",
  },
  {
    ZIP: "9211",
    NAME: "Daugavpils Arhitektu ielas Maxima X pakom\u0101ts",

    A1_NAME: "Daugavpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Arhitektu iela",

    X_COORDINATE: "26.559830",
    Y_COORDINATE: "55.891602",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:06:26.533+02:00",
  },
  {
    ZIP: "9916",
    NAME: "Daugavpils T/C Ave\u0146u centrs pakom\u0101ts",

    A1_NAME: "Daugavpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Raipoles iela",

    A7_NAME: "11",

    X_COORDINATE: "26.526382",
    Y_COORDINATE: "55.901089",

    comment_lav: "Ave\u0146u centra centr\u0101l\u0101s fas\u0101des pus\u0113",

    MODIFIED: "2021-01-14T07:07:43.227+02:00",
  },
  {
    ZIP: "9918",
    NAME: "Daugavpils T/C Ditton pakom\u0101ts",

    A1_NAME: "Daugavpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Cietok\u0161\u0146a iela",

    A7_NAME: "60",

    X_COORDINATE: "26.516401",
    Y_COORDINATE: "55.874596",

    comment_lav: "Krustojum\u0101 ar Kandavas ielu",

    MODIFIED: "2020-11-13T06:33:32.823+02:00",
  },
  {
    ZIP: "9998",
    NAME: "Daugavpils Valkas ielas Mego pakom\u0101ts",

    A1_NAME: "Daugavpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Valkas iela",

    X_COORDINATE: "26.561261",
    Y_COORDINATE: "55.879532",

    MODIFIED: "2021-01-14T07:08:30.350+02:00",
  },
  {
    ZIP: "9941",
    NAME: "Dobeles Br\u012bv\u012bbas ielas RIMI pakom\u0101ts",

    A1_NAME: "Dobeles novads",
    A2_NAME: "Dobele",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    A7_NAME: "30",

    X_COORDINATE: "23.283044",
    Y_COORDINATE: "56.624913",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:09:33.090+02:00",
  },
  {
    ZIP: "9202",
    NAME: "Dobeles Za\u013c\u0101s ielas Maxima X pakom\u0101ts",

    A1_NAME: "Dobeles novads",
    A2_NAME: "Dobele",
    A3_NAME: "",

    A5_NAME: "Za\u013c\u0101 iela",

    A7_NAME: "19",

    X_COORDINATE: "23.284410",
    Y_COORDINATE: "56.619777",

    MODIFIED: "2021-01-14T07:09:57.320+02:00",
  },
  {
    ZIP: "88865",
    NAME: "Druskinink\u0173 IKI \u010ciurlionio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Druskinink\u0173 sav.",
    A3_NAME: "Druskinink\u0173 m.",

    A5_NAME: "M. K. \u010ciurlionio g.",

    A7_NAME: "107",

    X_COORDINATE: "23.990209",
    Y_COORDINATE: "54.011307",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-02-17T06:05:21.030+02:00",
  },
  {
    ZIP: "55517",
    NAME: "Druskinink\u0173 TOPO CENTRAS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Druskinink\u0173 sav.",
    A3_NAME: "Druskinink\u0173 m.",

    A5_NAME: "M. K. \u010ciurlionio g.",

    A7_NAME: "55",

    X_COORDINATE: "23.971283",
    Y_COORDINATE: "54.016991",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T06:30:27.577+03:00",
  },
  {
    ZIP: "9163",
    NAME: "Dundagas Citro pakom\u0101ts",

    A1_NAME: "Dundagas novads",
    A2_NAME: "Dundagas pagasts",
    A3_NAME: "Dundaga",

    A5_NAME: "Talsu iela",

    X_COORDINATE: "22.351583",
    Y_COORDINATE: "57.509805",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T05:37:18.817+02:00",
  },
  {
    ZIP: "55572",
    NAME: "Duset\u0173 SVAITA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Zaras\u0173 r. sav.",
    A3_NAME: "Duset\u0173 m.",

    A5_NAME: "K. B\u016bgos g.",

    A7_NAME: "12",

    X_COORDINATE: "25.839465",
    Y_COORDINATE: "55.746157",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-29T09:27:43.057+02:00",
  },
  {
    ZIP: "50600",
    NAME: "Eedeni postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Kalda tee",

    A7_NAME: "1c",

    X_COORDINATE: "26.748826",
    Y_COORDINATE: "58.373434",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:25:35.970+03:00",
  },
  {
    ZIP: "88896",
    NAME: "Ei\u0161i\u0161ki\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160al\u010dinink\u0173 r. sav.",
    A3_NAME: "Ei\u0161i\u0161ki\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "19",

    X_COORDINATE: "24.997107",
    Y_COORDINATE: "54.171449",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T07:11:18.583+03:00",
  },
  {
    ZIP: "9156",
    NAME: "Elejas TOP pakom\u0101ts",

    A1_NAME: "Jelgavas novads",
    A2_NAME: "Elejas pagasts",
    A3_NAME: "Eleja",

    A5_NAME: "Stacijas iela",

    X_COORDINATE: "23.681133",
    Y_COORDINATE: "56.408564",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-12T14:25:24.957+02:00",
  },
  {
    ZIP: "88853",
    NAME: "Elektr\u0117n\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Elektr\u0117n\u0173 sav.",
    A3_NAME: "Elektr\u0117n\u0173 m.",

    A5_NAME: "Rungos g.",

    X_COORDINATE: "24.657607",
    Y_COORDINATE: "54.785381",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:31:47.237+03:00",
  },
  {
    ZIP: "55500",
    NAME: "Elektr\u0117n\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Elektr\u0117n\u0173 sav.",
    A3_NAME: "Elektr\u0117n\u0173 m.",

    A5_NAME: "Sabali\u0161ki\u0173 g.",

    A7_NAME: "1J",

    X_COORDINATE: "24.680564",
    Y_COORDINATE: "54.788298",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-27T07:58:19.987+03:00",
  },
  {
    ZIP: "96179",
    NAME: "Elva Arbim\u00e4e Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Elva linn",

    A5_NAME: "Kirde tn",

    X_COORDINATE: "26.414854",
    Y_COORDINATE: "58.234052",

    MODIFIED: "2020-12-15T11:42:30.450+02:00",
  },
  {
    ZIP: "96047",
    NAME: "Elva Turuplatsi Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Elva linn",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "26.408695",
    Y_COORDINATE: "58.220997",

    MODIFIED: "2021-05-07T05:59:36.077+03:00",
  },
  {
    ZIP: "61599",
    NAME: "Elva postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Elva linn",

    A5_NAME: "Puiestee tn",

    X_COORDINATE: "26.406515",
    Y_COORDINATE: "58.221024",
    SERVICE_HOURS:
      "E,K 11:00-15:00, 15:30-19:00 T,N,R 10:00-15:00, 15:30-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:31:25.183+02:00",
  },
  {
    ZIP: "92094",
    NAME: "Emmaste postipunkt (Coop)",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "Emmaste k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "22.596592",
    Y_COORDINATE: "58.704999",
    SERVICE_HOURS:
      "E,T,K,N,R,L 10:00-20:00 P 10:00-16:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T13:06:25.570+03:00",
  },
  {
    ZIP: "9204",
    NAME: "Engures Citro pakom\u0101ts",

    A1_NAME: "Engures novads",
    A2_NAME: "Engures pagasts",
    A3_NAME: "Engure",

    A5_NAME: "J\u016bras iela",

    A7_NAME: "81",

    X_COORDINATE: "23.229213",
    Y_COORDINATE: "57.161086",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:19:21.167+02:00",
  },
  {
    ZIP: "10195",
    NAME: "Finest postkontor",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "22",

    X_COORDINATE: "24.745200",
    Y_COORDINATE: "59.431631",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-19T12:37:06.637+03:00",
  },
  {
    ZIP: "55552",
    NAME: "Garg\u017ed\u0173 MAXIMA Cvirkos pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos r. sav.",
    A3_NAME: "Garg\u017ed\u0173 m.",

    A5_NAME: "P. Cvirkos g.",

    X_COORDINATE: "21.396652",
    Y_COORDINATE: "55.709622",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:32:48.543+03:00",
  },
  {
    ZIP: "88801",
    NAME: "Garg\u017ed\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos r. sav.",
    A3_NAME: "Garg\u017ed\u0173 m.",

    A5_NAME: "Klaip\u0117dos g.",

    A7_NAME: "41",

    X_COORDINATE: "21.380646",
    Y_COORDINATE: "55.712518",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:33:09.853+03:00",
  },
  {
    ZIP: "9126",
    NAME: "Grobi\u0146as TOP pakom\u0101ts",

    A1_NAME: "Grobi\u0146as novads",
    A2_NAME: "Grobi\u0146a",
    A3_NAME: "",

    A5_NAME: "Liel\u0101 iela",

    A7_NAME: "74",

    X_COORDINATE: "21.168189",
    Y_COORDINATE: "56.535089",

    comment_lav: "Veikala pagalm\u0101",

    MODIFIED: "2020-11-12T13:21:49.707+02:00",
  },
  {
    ZIP: "9948",
    NAME: "Gulbenes N\u0101kotnes ielas TOP pakom\u0101ts",

    A1_NAME: "Gulbenes novads",
    A2_NAME: "Gulbene",
    A3_NAME: "",

    A5_NAME: "N\u0101kotnes iela",

    X_COORDINATE: "26.769707",
    Y_COORDINATE: "57.166166",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T07:23:45.850+02:00",
  },
  {
    ZIP: "96206",
    NAME: "Haabneeme Coop Konsumi pakiautomaat",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Haabneeme alevik",

    A5_NAME: "Rohuneeme tee",

    A7_NAME: "32",

    X_COORDINATE: "24.819998",
    Y_COORDINATE: "59.512982",

    MODIFIED: "2021-05-19T05:36:33.630+03:00",
  },
  {
    ZIP: "65047",
    NAME: "Haanja postipunkt",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "Haanja k\u00fcla",

    A5_NAME: "V\u00f5ru tee",

    X_COORDINATE: "27.051338",
    Y_COORDINATE: "57.720644",
    SERVICE_HOURS:
      "Kuni 02.05.2021: E,T,K,N,R,L,P 10:00-19:00;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2: "Kuni 31.08.2021: E,T,K,N,R,L,P 10:00-20:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "31.08.2021",

    MODIFIED: "2021-04-26T08:48:39.983+03:00",
  },
  {
    ZIP: "96128",
    NAME: "Haapsalu Kastani pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Haapsalu linn",
    A3_NAME: "Haapsalu linn",

    A5_NAME: "Kuuse tn",

    A7_NAME: "28",

    X_COORDINATE: "23.552364",
    Y_COORDINATE: "58.936219",

    MODIFIED: "2021-05-26T05:28:15.527+03:00",
  },
  {
    ZIP: "96033",
    NAME: "Haapsalu Kaubamaja pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Haapsalu linn",
    A3_NAME: "Haapsalu linn",

    A5_NAME: "Tallinna mnt",

    X_COORDINATE: "23.542456",
    Y_COORDINATE: "58.940430",

    MODIFIED: "2021-04-26T07:58:59.657+03:00",
  },
  {
    ZIP: "90501",
    NAME: "Haapsalu postkontor",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Haapsalu linn",
    A3_NAME: "Haapsalu linn",

    A5_NAME: "Nurme tn",

    X_COORDINATE: "23.543124",
    Y_COORDINATE: "58.941265",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T12:52:55.003+03:00",
  },
  {
    ZIP: "60501",
    NAME: "Haava postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "K\u00f5rvek\u00fcla alevik",

    A5_NAME: "Haava tn",

    X_COORDINATE: "26.765100",
    Y_COORDINATE: "58.418631",
    SERVICE_HOURS:
      "E,T,N,R 08:00-12:30 K 11:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "Kuni 30.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "30.06.2021",

    MODIFIED: "2021-05-24T14:35:27.287+03:00",
  },
  {
    ZIP: "79697",
    NAME: "Hagudi postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Hagudi alevik",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "24.808493",
    Y_COORDINATE: "59.064609",
    SERVICE_HOURS:
      "E,T,N,R 10:00-18:00 K 15:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-07T07:14:22.550+03:00",
  },
  {
    ZIP: "96324",
    NAME: "Haljala Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Haljala vald",
    A3_NAME: "Haljala alevik",

    A5_NAME: "V\u00f5su mnt",

    X_COORDINATE: "26.266585",
    Y_COORDINATE: "59.433786",

    MODIFIED: "2020-12-11T10:03:57.293+02:00",
  },
  {
    ZIP: "45395",
    NAME: "Haljala postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Haljala vald",
    A3_NAME: "Haljala alevik",

    A5_NAME: "Rakvere mnt",

    X_COORDINATE: "26.266103",
    Y_COORDINATE: "59.432174",
    SERVICE_HOURS: "E,T,K,N,R 10:00-15:00 L,P SULETUD",

    MODIFIED: "2021-04-06T07:38:57.337+03:00",
  },
  {
    ZIP: "69594",
    NAME: "Halliste postipunkt (Leerimaja)",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Kulla k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Leerimaja",
    A7_NAME: "",

    X_COORDINATE: "25.427000",
    Y_COORDINATE: "58.155413",
    SERVICE_HOURS: "E,T,N 10:00-17:00 K 10:00-18:00 R 10:00-16:00 L,P SULETUD",
    TEMP_SERVICE_HOURS:
      "18.06.2021: SULETUD;23.06.2021 kuni 24.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "24.06.2021",
    TEMP_SERVICE_HOURS_2: "09.06.2021: 10:00-12:00;22.06.2021: 10:00-14:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "22.06.2021",

    MODIFIED: "2021-06-04T08:51:07.887+03:00",
  },
  {
    ZIP: "68094",
    NAME: "Hargla postipunkt",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "Hargla k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.398820",
    Y_COORDINATE: "57.613742",
    SERVICE_HOURS: "E,T,K,N,R 10:00-16:00 L,P SULETUD",

    MODIFIED: "2021-01-21T08:41:30.087+02:00",
  },
  {
    ZIP: "76992",
    NAME: "Harku postkontor",

    A2_NAME: "Harku vald",
    A3_NAME: "Harku alevik",

    A5_NAME: "Instituudi tee",

    X_COORDINATE: "24.580372",
    Y_COORDINATE: "59.391082",
    SERVICE_HOURS: "T,K,R,L 09:00-12:00 N 15:00-18:00 E,P SULETUD",

    MODIFIED: "2021-04-19T12:30:04.447+03:00",
  },
  {
    ZIP: "45294",
    NAME: "Hulja postipunkt (Reeda pood)",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Kadrina vald",
    A3_NAME: "Hulja alevik",

    A5_NAME: "Vandu tee",

    X_COORDINATE: "26.216172",
    Y_COORDINATE: "59.353102",
    SERVICE_HOURS: "E,T,K,N,R,L 10:00-19:00 P SULETUD",

    MODIFIED: "2020-03-17T09:39:40.600+02:00",
  },
  {
    ZIP: "68494",
    NAME: "Hummuli postipunkt (Coop)",

    A1_NAME: "Valga maakond",
    A2_NAME: "T\u00f5rva vald",
    A3_NAME: "Hummuli alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.054607",
    Y_COORDINATE: "57.906246",
    SERVICE_HOURS: "E,T,K,N,R 10:00-19:00 L 10:00-18:00 P SULETUD",

    MODIFIED: "2021-04-13T12:32:22.390+03:00",
  },
  {
    ZIP: "96233",
    NAME: "H\u00e4\u00e4demeeste Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "H\u00e4\u00e4demeeste vald",
    A3_NAME: "H\u00e4\u00e4demeeste alevik",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "40",

    X_COORDINATE: "24.498367",
    Y_COORDINATE: "58.078554",

    MODIFIED: "2021-05-24T13:24:03.037+03:00",
  },
  {
    ZIP: "86000",
    NAME: "H\u00e4\u00e4demeeste postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "H\u00e4\u00e4demeeste vald",
    A3_NAME: "H\u00e4\u00e4demeeste alevik",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "22",

    X_COORDINATE: "24.501509",
    Y_COORDINATE: "58.082205",
    SERVICE_HOURS: "E,T,N,R 08:30-15:00 K 08:30-17:30 L,P SULETUD",

    TEMP_SERVICE_HOURS_2: "10.06.2021: 08:30-14:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "10.06.2021",

    MODIFIED: "2021-05-24T14:34:52.437+03:00",
  },
  {
    ZIP: "9987",
    NAME: "Iecavas Maxima X pakom\u0101ts",

    A1_NAME: "Iecavas novads",
    A2_NAME: "",
    A3_NAME: "Iecava",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "27",

    X_COORDINATE: "24.196917",
    Y_COORDINATE: "56.597866",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T09:32:43.357+02:00",
  },
  {
    ZIP: "88802",
    NAME: "Ignalinos NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Ignalinos r. sav.",
    A3_NAME: "Ignalinos m.",

    A5_NAME: "Taikos g.",

    A7_NAME: "20",

    X_COORDINATE: "26.170464",
    Y_COORDINATE: "55.342583",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T07:29:41.743+02:00",
  },
  {
    ZIP: "96170",
    NAME: "Ihaste Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Luunja vald",
    A3_NAME: "Veibri k\u00fcla",

    A5_NAME: "Kasesalu tee",

    A7_NAME: "51",

    X_COORDINATE: "26.789050",
    Y_COORDINATE: "58.350777",

    MODIFIED: "2021-05-03T06:13:50.690+03:00",
  },
  {
    ZIP: "31001",
    NAME: "Iidla postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "Ahtme linnaosa",

    A5_NAME: "Maleva tn",

    A7_NAME: "23",

    X_COORDINATE: "27.420584",
    Y_COORDINATE: "59.327394",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:16:13.657+02:00",
  },
  {
    ZIP: "96189",
    NAME: "Iisaku Grossi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Alutaguse vald",
    A3_NAME: "Iisaku alevik",

    A5_NAME: "Tartu mnt",

    A7_NAME: "55",

    X_COORDINATE: "27.314466",
    Y_COORDINATE: "59.094808",

    MODIFIED: "2021-04-22T10:53:20.297+03:00",
  },
  {
    ZIP: "41194",
    NAME: "Iisaku postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Alutaguse vald",
    A3_NAME: "Iisaku alevik",

    A5_NAME: "Tartu mnt",

    A7_NAME: "46",

    X_COORDINATE: "27.310516",
    Y_COORDINATE: "59.099539",
    SERVICE_HOURS:
      "E,T,N,R,P 10:00-16:00 K,L SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-19T13:12:01.343+02:00",
  },
  {
    ZIP: "9125",
    NAME: "Ik\u0161\u0137iles Maxima X pakom\u0101ts",

    A1_NAME: "Ik\u0161\u0137iles novads",
    A2_NAME: "Ik\u0161\u0137ile",
    A3_NAME: "",

    A5_NAME: "Skolas iela",

    A7_NAME: "4A",

    X_COORDINATE: "24.496981",
    Y_COORDINATE: "56.838140",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T13:03:56.477+02:00",
  },
  {
    ZIP: "61494",
    NAME: "Ilmatsalu postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Ilmatsalu alevik",

    A5_NAME: "Kooli tee",

    X_COORDINATE: "26.561483",
    Y_COORDINATE: "58.384632",

    MODIFIED: "2021-03-29T12:08:44.037+03:00",
  },
  {
    ZIP: "9104",
    NAME: "Il\u016bkstes Pilskalnes ielas TOP pakom\u0101ts",

    A1_NAME: "Il\u016bkstes novads",
    A2_NAME: "Il\u016bkste",
    A3_NAME: "",

    A5_NAME: "Pilskalnes iela",

    A7_NAME: "2A",

    X_COORDINATE: "26.295770",
    Y_COORDINATE: "55.977275",

    comment_lav: "Blakus ieejai",

    MODIFIED: "2020-11-12T11:13:34.473+02:00",
  },
  {
    ZIP: "9140",
    NAME: "In\u010dukalna Aibe pakom\u0101ts",

    A1_NAME: "In\u010dukalna novads",
    A2_NAME: "In\u010dukalna pagasts",
    A3_NAME: "In\u010dukalns",

    A5_NAME: "Atmodas iela",

    X_COORDINATE: "24.686591",
    Y_COORDINATE: "57.098333",

    MODIFIED: "2021-03-11T06:29:33.173+02:00",
  },
  {
    ZIP: "9212",
    NAME: "Jaunjelgavas Mini Top pakom\u0101ts",

    A1_NAME: "Jaunjelgavas novads",
    A2_NAME: "Jaunjelgava",
    A3_NAME: "",

    A5_NAME: "Jelgavas iela",

    A7_NAME: "44",

    X_COORDINATE: "25.089069",
    Y_COORDINATE: "56.617638",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:13:05.807+02:00",
  },
  {
    ZIP: "9155",
    NAME: "Jaunm\u0101rupes Mazcenu alejas pakom\u0101ts",

    A1_NAME: "M\u0101rupes novads",
    A2_NAME: "",
    A3_NAME: "Jaunm\u0101rupe",

    A5_NAME: "Mazcenu aleja",

    X_COORDINATE: "23.941965",
    Y_COORDINATE: "56.882096",

    MODIFIED: "2021-01-14T07:13:33.493+02:00",
  },
  {
    ZIP: "9106",
    NAME: "Jaunolaines TOP pakom\u0101ts",

    A1_NAME: "Olaines novads",
    A2_NAME: "Olaines pagasts",
    A3_NAME: "Jaunolaine",

    A5_NAME: "Bazn\u012bcas iela",

    X_COORDINATE: "23.985214",
    Y_COORDINATE: "56.801767",

    MODIFIED: "2021-05-12T11:22:16.413+03:00",
  },
  {
    ZIP: "9170",
    NAME: "Jaunpils TOP pakom\u0101ts",

    A1_NAME: "Jaunpils novads",
    A2_NAME: "Jaunpils pagasts",
    A3_NAME: "Jaunpils",

    A5_NAME: "",
    A6_NAME: "J\u0101\u0146krogs",
    A7_NAME: "",

    X_COORDINATE: "23.014097",
    Y_COORDINATE: "56.731211",

    MODIFIED: "2021-01-07T07:33:50.147+02:00",
  },
  {
    ZIP: "77760",
    NAME: "Ja\u0161i\u016bn\u0173 VIADA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160al\u010dinink\u0173 r. sav.",
    A3_NAME: "Ja\u0161i\u016bn\u0173 mstl.",

    A5_NAME: "Lydos g.",

    A7_NAME: "13",

    X_COORDINATE: "25.327295",
    Y_COORDINATE: "54.439646",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:25:42.450+03:00",
  },
  {
    ZIP: "9199",
    NAME: "Jelgavas R\u016bpniec\u012bbas ielas ELVI pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u016bpniec\u012bbas iela",

    A7_NAME: "77A",

    X_COORDINATE: "23.705346",
    Y_COORDINATE: "56.636728",

    MODIFIED: "2020-11-13T06:10:12.103+02:00",
  },
  {
    ZIP: "9981",
    NAME: "Jelgavas Satiksmes ielas RIMI pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Satiksmes iela",

    A7_NAME: "35",

    X_COORDINATE: "23.699648",
    Y_COORDINATE: "56.656704",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:14:21.923+02:00",
  },
  {
    ZIP: "9198",
    NAME: "Jelgavas T/C Pils\u0113tas Pas\u0101\u017ea pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Driksas iela",

    X_COORDINATE: "23.724160",
    Y_COORDINATE: "56.650893",

    MODIFIED: "2021-01-14T07:13:57.957+02:00",
  },
  {
    ZIP: "9919",
    NAME: "Jelgavas T/C RAF pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "48",

    X_COORDINATE: "23.760634",
    Y_COORDINATE: "56.667986",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:34:03.687+02:00",
  },
  {
    ZIP: "9131",
    NAME: "Jelgavas T/C Valdeka pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "11A",

    X_COORDINATE: "23.746231",
    Y_COORDINATE: "56.661889",

    MODIFIED: "2021-01-14T07:14:46.437+02:00",
  },
  {
    ZIP: "9929",
    NAME: "Jelgavas T/C Vivo centrs pakom\u0101ts",

    A1_NAME: "Jelgava",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kato\u013cu iela",

    A7_NAME: "18",

    X_COORDINATE: "23.726500",
    Y_COORDINATE: "56.647499",

    comment_lav: "Pie ieejas no st\u0101vlaukuma puses",

    MODIFIED: "2021-01-20T09:22:57.000+02:00",
  },
  {
    ZIP: "55525",
    NAME: "Jonavos IKI Kosmonaut\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Jonavos r. sav.",
    A3_NAME: "Jonavos m.",

    A5_NAME: "Kosmonaut\u0173 g.",

    X_COORDINATE: "24.275152",
    Y_COORDINATE: "55.078645",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T10:53:00.650+02:00",
  },
  {
    ZIP: "55524",
    NAME: "Jonavos NORFA Chemik\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Jonavos r. sav.",
    A3_NAME: "Jonavos m.",

    A5_NAME: "Chemik\u0173 g.",

    X_COORDINATE: "24.258964",
    Y_COORDINATE: "55.072818",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:33:59.470+03:00",
  },
  {
    ZIP: "88897",
    NAME: "Jonavos NORFA \u017deimi\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Jonavos r. sav.",
    A3_NAME: "Jonavos m.",

    A5_NAME: "\u017deimi\u0173 g.",

    A7_NAME: "26A",

    X_COORDINATE: "24.273500",
    Y_COORDINATE: "55.084500",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T09:24:31.623+02:00",
  },
  {
    ZIP: "88867",
    NAME: "Jonavos RIMI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Jonavos r. sav.",
    A3_NAME: "Jonavos m.",

    A5_NAME: "Vasario 16-osios g.",

    X_COORDINATE: "24.276370",
    Y_COORDINATE: "55.073180",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T09:02:08.453+02:00",
  },
  {
    ZIP: "88803",
    NAME: "Joni\u0161kio NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Joni\u0161kio r. sav.",
    A3_NAME: "Joni\u0161kio m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "47B",

    X_COORDINATE: "23.604966",
    Y_COORDINATE: "56.228091",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-20T06:45:26.190+03:00",
  },
  {
    ZIP: "55526",
    NAME: "Jurbarko MAXIMA Algirdo pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Jurbarko r. sav.",
    A3_NAME: "Jurbarko m.",

    A5_NAME: "Algirdo g.",

    A7_NAME: "1A",

    X_COORDINATE: "22.769920",
    Y_COORDINATE: "55.085596",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:38:39.537+02:00",
  },
  {
    ZIP: "88864",
    NAME: "Jurbarko MAXIMA CENTRO pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Jurbarko r. sav.",
    A3_NAME: "Jurbarko m.",

    A5_NAME: "Dariaus ir Gir\u0117no g.",

    A7_NAME: "66",

    X_COORDINATE: "22.767208",
    Y_COORDINATE: "55.077386",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T09:02:44.100+02:00",
  },
  {
    ZIP: "79493",
    NAME: "Juuru postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Juuru alevik",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "15",

    X_COORDINATE: "24.963126",
    Y_COORDINATE: "59.058274",
    SERVICE_HOURS:
      "E,T,K,N,R,L 09:00-17:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2020-10-12T12:30:59.787+03:00",
  },
  {
    ZIP: "96157",
    NAME: "J\u00e4rva-Jaani Grossi pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "J\u00e4rva vald",
    A3_NAME: "J\u00e4rva-Jaani alev",

    A5_NAME: "Lai tn",

    A7_NAME: "23",

    X_COORDINATE: "25.884285",
    Y_COORDINATE: "59.038191",

    MODIFIED: "2019-10-18T05:25:16.800+03:00",
  },
  {
    ZIP: "96224",
    NAME: "J\u00e4rvakandi Kandi Konsumi pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kehtna vald",
    A3_NAME: "J\u00e4rvakandi alev",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "37",

    X_COORDINATE: "24.816606",
    Y_COORDINATE: "58.773403",

    MODIFIED: "2021-03-25T14:09:59.180+02:00",
  },
  {
    ZIP: "79194",
    NAME: "J\u00e4rvakandi postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kehtna vald",
    A3_NAME: "J\u00e4rvakandi alev",

    A5_NAME: "Pargi tn",

    X_COORDINATE: "24.815135",
    Y_COORDINATE: "58.776425",
    SERVICE_HOURS:
      "E,T,K,N,P 10:00-15:00 R,L SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-12T11:05:56.853+02:00",
  },
  {
    ZIP: "79191",
    NAME: "J\u00e4rvakandi postkontor",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kehtna vald",
    A3_NAME: "J\u00e4rvakandi alev",

    A5_NAME: "Turu tn",

    X_COORDINATE: "24.817942",
    Y_COORDINATE: "58.774380",
    SERVICE_HOURS:
      "E,K,N,R 10:30-13:30 T 10:30-16:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:42:29.357+03:00",
  },
  {
    ZIP: "11801",
    NAME: "J\u00e4rve keskuse postkontor",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "238",

    X_COORDINATE: "24.719128",
    Y_COORDINATE: "59.393147",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:28:27.207+03:00",
  },
  {
    ZIP: "86894",
    NAME: "J\u00f5esuu postipunkt (K\u00fclakohvik)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "J\u00f5esuu k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.902119",
    Y_COORDINATE: "58.494928",
    SERVICE_HOURS: "E,T,K,N,R 11:30-19:00 L,P SULETUD",

    MODIFIED: "2021-05-14T11:48:00.947+03:00",
  },
  {
    ZIP: "96044",
    NAME: "J\u00f5geva Postkontori pakiautomaat",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "J\u00f5geva linn",

    A5_NAME: "Aia tn",

    X_COORDINATE: "26.396317",
    Y_COORDINATE: "58.747120",

    MODIFIED: "2021-05-03T05:50:27.003+03:00",
  },
  {
    ZIP: "48301",
    NAME: "J\u00f5geva postkontor",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "J\u00f5geva linn",

    A5_NAME: "Aia tn",

    X_COORDINATE: "26.396166",
    Y_COORDINATE: "58.747303",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-17:30 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:16:42.240+02:00",
  },
  {
    ZIP: "96191",
    NAME: "J\u00f5hvi Grossi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "J\u00f5hvi linn",

    A5_NAME: "Tartu mnt",

    A7_NAME: "15a",

    X_COORDINATE: "27.412086",
    Y_COORDINATE: "59.353167",

    MODIFIED: "2021-04-22T13:09:13.433+03:00",
  },
  {
    ZIP: "96030",
    NAME: "J\u00f5hvi Jewe kaubanduskeskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "J\u00f5hvi linn",

    A5_NAME: "Narva mnt",

    X_COORDINATE: "27.417864",
    Y_COORDINATE: "59.357304",

    MODIFIED: "2021-04-13T13:42:31.447+03:00",
  },
  {
    ZIP: "96089",
    NAME: "J\u00f5hvi Maxima XX pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "J\u00f5hvi linn",

    A5_NAME: "Rakvere tn",

    A7_NAME: "29",

    X_COORDINATE: "27.401077",
    Y_COORDINATE: "59.362392",

    MODIFIED: "2021-04-19T05:28:48.133+03:00",
  },
  {
    ZIP: "96235",
    NAME: "J\u00f5hvi Pargi keskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "J\u00f5hvi linn",

    A5_NAME: "Puru tee",

    X_COORDINATE: "27.419731",
    Y_COORDINATE: "59.352488",

    MODIFIED: "2019-11-29T02:00:05.113+02:00",
  },
  {
    ZIP: "41501",
    NAME: "J\u00f5hvi postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "J\u00f5hvi linn",

    A5_NAME: "Narva mnt",

    X_COORDINATE: "27.418224",
    Y_COORDINATE: "59.357694",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-04T13:12:25.323+03:00",
  },
  {
    ZIP: "88394",
    NAME: "J\u00f5\u00f5pre postipunkt (Kauplus Meie)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "J\u00f5\u00f5pre k\u00fcla",

    A5_NAME: "Aisa tee",

    A8_NAME: "6",
    X_COORDINATE: "24.325127",
    Y_COORDINATE: "58.473453",
    SERVICE_HOURS: "E,T,K,N,R,L,P 11:00-15:00",

    MODIFIED: "2021-02-22T12:10:13.627+02:00",
  },
  {
    ZIP: "96079",
    NAME: "J\u00fcri Coop Konsumi pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "J\u00fcri alevik",

    A5_NAME: "Aruk\u00fcla tee",

    A7_NAME: "29",

    X_COORDINATE: "24.912175",
    Y_COORDINATE: "59.358314",

    MODIFIED: "2021-05-26T07:23:25.170+03:00",
  },
  {
    ZIP: "96188",
    NAME: "J\u00fcri Grossi pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "J\u00fcri alevik",

    A5_NAME: "Aruk\u00fcla tee",

    X_COORDINATE: "24.893037",
    Y_COORDINATE: "59.354071",

    MODIFIED: "2020-12-14T07:46:38.900+02:00",
  },
  {
    ZIP: "75391",
    NAME: "J\u00fcri postkontor",

    A2_NAME: "Rae vald",
    A3_NAME: "J\u00fcri alevik",

    A5_NAME: "Aruk\u00fcla tee",

    A7_NAME: "29",

    X_COORDINATE: "24.912100",
    Y_COORDINATE: "59.358280",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T08:33:23.330+02:00",
  },
  {
    ZIP: "9969",
    NAME: "J\u0113kabpils R\u012bgas ielas Maxima X pakom\u0101ts",

    A1_NAME: "J\u0113kabpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "109",

    X_COORDINATE: "25.873101",
    Y_COORDINATE: "56.501431",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:16:24.660+02:00",
  },
  {
    ZIP: "9213",
    NAME: "J\u0113kabpils T/C S\u0113lija pakom\u0101ts",

    A1_NAME: "J\u0113kabpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Vien\u012bbas iela",

    X_COORDINATE: "25.877830",
    Y_COORDINATE: "56.495381",

    comment_lav: "Pa kreisi no T/C centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T06:22:26.133+02:00",
  },
  {
    ZIP: "9924",
    NAME: "J\u0113kabpils Vien\u012bbas ielas Mego pakom\u0101ts",

    A1_NAME: "J\u0113kabpils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Vien\u012bbas iela",

    A7_NAME: "1A",

    X_COORDINATE: "25.875120",
    Y_COORDINATE: "56.493420",

    comment_lav: "Blakus ieejai no autoostas puses",

    MODIFIED: "2021-01-14T07:16:57.897+02:00",
  },
  {
    ZIP: "9107",
    NAME: "J\u016brmalas Dubultu TOP pakom\u0101ts",

    A1_NAME: "J\u016brmala",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Str\u0113lnieku prospekts",

    X_COORDINATE: "23.769877",
    Y_COORDINATE: "56.967444",

    comment_lav: "Blakus T/C \u0161osejas pus\u0113",

    MODIFIED: "2020-11-12T12:52:12.550+02:00",
  },
  {
    ZIP: "9920",
    NAME: "J\u016brmalas Kauguru RIMI pakom\u0101ts",

    A1_NAME: "J\u016brmala",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Talsu \u0161oseja",

    A7_NAME: "29",

    X_COORDINATE: "23.615583",
    Y_COORDINATE: "56.960899",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-19T10:36:24.093+02:00",
  },
  {
    ZIP: "9943",
    NAME: "J\u016brmalas Lielupes RIMI pakom\u0101ts",

    A1_NAME: "J\u016brmala",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Viestura iela",

    A7_NAME: "22",

    X_COORDINATE: "23.859030",
    Y_COORDINATE: "56.974873",

    comment_lav: "Blakus T/C \u0161osejas pus\u0113",

    MODIFIED: "2020-11-13T07:11:57.400+02:00",
  },
  {
    ZIP: "9142",
    NAME: "J\u016brmalas Slokas T/C Liedags pakom\u0101ts",

    A1_NAME: "J\u016brmala",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Ventspils \u0161oseja",

    A7_NAME: "32",

    X_COORDINATE: "23.617819",
    Y_COORDINATE: "56.946610",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-12T13:47:21.430+02:00",
  },
  {
    ZIP: "74296",
    NAME: "Kaberneeme postipunkt",

    A2_NAME: "J\u00f5el\u00e4htme vald",
    A3_NAME: "Kaberneeme k\u00fcla",

    A5_NAME: "Kaberneeme p\u00f5ik",

    X_COORDINATE: "25.274517",
    Y_COORDINATE: "59.517897",
    SERVICE_HOURS: "Alates 04.05.2021: E,T,K,N,R,L,P 10:00-20:00",

    MODIFIED: "2021-05-04T11:05:47.057+03:00",
  },
  {
    ZIP: "12694",
    NAME: "Kadaka postipunkt (kpl Autov\u00e4rvid)",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Kadaka tee",

    A7_NAME: "84a",

    X_COORDINATE: "24.647783",
    Y_COORDINATE: "59.401636",
    SERVICE_HOURS: "Alates 08.06.2021: E,T,K,N,R 14:00-16:00;L,P SULETUD",

    MODIFIED: "2021-06-04T01:00:03.003+03:00",
  },
  {
    ZIP: "96117",
    NAME: "Kadrina Coop Konsumi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Kadrina vald",
    A3_NAME: "Kadrina alevik",

    A5_NAME: "Viitna tee",

    X_COORDINATE: "26.130579",
    Y_COORDINATE: "59.343827",

    MODIFIED: "2021-04-29T06:27:15.470+03:00",
  },
  {
    ZIP: "45295",
    NAME: "Kadrina postipunkt (Talutehnika)",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Kadrina vald",
    A3_NAME: "Kadapiku k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Talutehnika",
    A7_NAME: "",

    X_COORDINATE: "26.124196",
    Y_COORDINATE: "59.346522",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-16:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-29T12:15:00.880+03:00",
  },
  {
    ZIP: "79394",
    NAME: "Kaiu postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Kaiu alevik",

    A5_NAME: "Leandri tee",

    X_COORDINATE: "25.050320",
    Y_COORDINATE: "59.013649",
    SERVICE_HOURS:
      "Kuni 30.04.2021: E,K,R 10:00-17:00 T,N 11:00-18:00;Alates 01.05.2021: E,T,K,N,R 10:00-17:00;L,P SULETUD",

    MODIFIED: "2021-04-29T14:46:45.383+03:00",
  },
  {
    ZIP: "55527",
    NAME: "Kai\u0161iadori\u0173 AIB\u0116 Vytauto Did\u017eiojo 35 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kai\u0161iadori\u0173 r. sav.",
    A3_NAME: "Kai\u0161iadori\u0173 m.",

    A5_NAME: "Vytauto Did\u017eiojo g.",

    A7_NAME: "35",

    X_COORDINATE: "24.463350",
    Y_COORDINATE: "54.865164",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:39:37.673+02:00",
  },
  {
    ZIP: "88804",
    NAME: "Kai\u0161iadori\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kai\u0161iadori\u0173 r. sav.",
    A3_NAME: "Kai\u0161iadori\u0173 m.",

    A5_NAME: "Gedimino g.",

    A7_NAME: "115A",

    X_COORDINATE: "24.443790",
    Y_COORDINATE: "54.856109",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie sienos kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-18T13:15:18.570+02:00",
  },
  {
    ZIP: "60101",
    NAME: "Kallaste postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Peipsi\u00e4\u00e4re vald",
    A3_NAME: "Kallaste linn",

    A5_NAME: "Oja tn",

    A7_NAME: "22",

    X_COORDINATE: "27.161628",
    Y_COORDINATE: "58.662407",
    SERVICE_HOURS:
      "E,T,K,N,R 11:00-13:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "14.06.2021 kuni 29.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "29.06.2021",

    MODIFIED: "2021-06-01T13:21:49.170+03:00",
  },
  {
    ZIP: "55528",
    NAME: "Kalvarijos IKI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Kalvarijos sav.",
    A3_NAME: "Kalvarijos m.",

    A5_NAME: "Dariaus ir Gir\u0117no g.",

    A7_NAME: "25",

    X_COORDINATE: "23.226036",
    Y_COORDINATE: "54.414815",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T09:35:45.677+02:00",
  },
  {
    ZIP: "96242",
    NAME: "Kambja Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kambja vald",
    A3_NAME: "Kambja alevik",

    A5_NAME: "Kesk tn",

    A7_NAME: "2a",

    X_COORDINATE: "26.694959",
    Y_COORDINATE: "58.235105",

    MODIFIED: "2020-11-24T02:00:03.537+02:00",
  },
  {
    ZIP: "62094",
    NAME: "Kambja postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kambja vald",
    A3_NAME: "Kambja alevik",

    A5_NAME: "V\u00f5ru mnt",

    A7_NAME: "2f",

    X_COORDINATE: "26.689736",
    Y_COORDINATE: "58.239241",
    SERVICE_HOURS:
      "Kuni 31.05.2021: E,K 16:00-18:00 T,N,R 11:00-15:00;Alates 01.06.2021: E,R 11:00-15:00 T,N 16:00-18:00 K 09:00-14:00;L,P SULETUD",

    MODIFIED: "2021-05-24T13:35:48.507+03:00",
  },
  {
    ZIP: "9979",
    NAME: "Kandavas Maxima X pakom\u0101ts",

    A1_NAME: "Kandavas novads",
    A2_NAME: "Kandava",
    A3_NAME: "",

    A5_NAME: "Abavas iela",

    A7_NAME: "4B",

    X_COORDINATE: "22.781886",
    Y_COORDINATE: "57.036085",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T08:40:14.337+02:00",
  },
  {
    ZIP: "63195",
    NAME: "Kanepi postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "Kanepi vald",
    A3_NAME: "Kanepi alevik",

    A5_NAME: "A. Weizenbergi tn",

    A7_NAME: "2b",

    X_COORDINATE: "26.760743",
    Y_COORDINATE: "57.985713",
    SERVICE_HOURS:
      "L 10:00-15:00;Kuni 27.12.2020: E,T,K,N,R 08:30-18:00 P 10:00-13:00;Alates 28.12.2020: E,T,K,N,R 09:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2020-12-21T06:35:33.707+02:00",
  },
  {
    ZIP: "69194",
    NAME: "Karksi- Nuia postipunkt",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Karksi-Nuia linn",

    A5_NAME: "Rahum\u00e4e tn",

    A7_NAME: "2a",

    X_COORDINATE: "25.546922",
    Y_COORDINATE: "58.104135",
    SERVICE_HOURS: "E,T,K,N,R 09:00-16:00 L 09:00-14:00 P SULETUD",

    MODIFIED: "2021-05-03T12:03:14.953+03:00",
  },
  {
    ZIP: "96110",
    NAME: "Karksi-Nuia Coop Konsum pakiautomaat",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Karksi-Nuia linn",

    A5_NAME: "Rahum\u00e4e tn",

    X_COORDINATE: "25.548253",
    Y_COORDINATE: "58.104206",

    MODIFIED: "2020-12-09T07:28:18.257+02:00",
  },
  {
    ZIP: "55534",
    NAME: "Kauno Akademijos EXPRESS MARKET pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Akademijos mstl.",

    A5_NAME: "Pil\u0117n\u0173 g.",

    X_COORDINATE: "23.823386",
    Y_COORDINATE: "54.895925",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:18:12.640+02:00",
  },
  {
    ZIP: "55509",
    NAME: "Kauno Babt\u0173 ANC\u0116 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Babt\u0173 mstl.",

    A5_NAME: "Nev\u0117\u017eio g.",

    X_COORDINATE: "23.795923",
    Y_COORDINATE: "55.087926",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T20:27:07.820+02:00",
  },
  {
    ZIP: "55512",
    NAME: "Kauno EXPRESS MARKET Donelai\u010dio pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "K. Donelai\u010dio g.",

    A7_NAME: "44A",

    X_COORDINATE: "23.919342",
    Y_COORDINATE: "54.898899",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T09:36:54.893+02:00",
  },
  {
    ZIP: "55544",
    NAME: "Kauno EXPRESS MARKET Paneri\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Paneri\u0173 g.",

    A7_NAME: "166",

    X_COORDINATE: "23.901078",
    Y_COORDINATE: "54.922539",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T09:37:48.023+02:00",
  },
  {
    ZIP: "77749",
    NAME: "Kauno EXPRESS MARKET Vytauto pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Vytauto pr.",

    A7_NAME: "11",

    X_COORDINATE: "23.928630",
    Y_COORDINATE: "54.887966",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:57:37.620+02:00",
  },
  {
    ZIP: "55520",
    NAME: "Kauno Garliavos IKI Vytauto pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Garliavos m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "67",

    X_COORDINATE: "23.872581",
    Y_COORDINATE: "54.822478",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-18T13:57:55.877+02:00",
  },
  {
    ZIP: "88876",
    NAME: "Kauno Garliavos NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Garliavos m.",

    A5_NAME: "Atgimimo g.",

    X_COORDINATE: "23.873354",
    Y_COORDINATE: "54.829127",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-03-25T14:37:43.717+02:00",
  },
  {
    ZIP: "55521",
    NAME: "Kauno Girait\u0117s VIADA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Girait\u0117s k.",

    A5_NAME: "Automagistral\u0117s g.",

    X_COORDINATE: "23.864333",
    Y_COORDINATE: "54.959108",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-04T11:34:09.703+03:00",
  },
  {
    ZIP: "55535",
    NAME: "Kauno IKI Ateities pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Ateities pl.",

    A7_NAME: "4A",

    X_COORDINATE: "24.012768",
    Y_COORDINATE: "54.896213",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-24T05:49:30.180+03:00",
  },
  {
    ZIP: "88875",
    NAME: "Kauno IKI Girstu\u010dio pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Kovo 11-osios g.",

    A7_NAME: "22",

    X_COORDINATE: "23.974659",
    Y_COORDINATE: "54.905754",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:35:44.137+03:00",
  },
  {
    ZIP: "55515",
    NAME: "Kauno IKI Kr\u0117v\u0117s 57 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "V. Kr\u0117v\u0117s pr.",

    A7_NAME: "57",

    X_COORDINATE: "23.972965",
    Y_COORDINATE: "54.920684",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo, \u0161alia taromato",
    MODIFIED: "2021-01-15T09:49:23.137+02:00",
  },
  {
    ZIP: "55513",
    NAME: "Kauno IKI Partizan\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Partizan\u0173 g.",

    A7_NAME: "134",

    X_COORDINATE: "23.986349",
    Y_COORDINATE: "54.930346",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:36:32.930+03:00",
  },
  {
    ZIP: "88829",
    NAME: "Kauno IKI Sukil\u0117li\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Sukil\u0117li\u0173 pr.",

    A7_NAME: "84",

    X_COORDINATE: "23.929296",
    Y_COORDINATE: "54.925103",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2021-01-15T09:51:25.983+02:00",
  },
  {
    ZIP: "55523",
    NAME: "Kauno IKI Taikos pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Taikos pr.",

    A7_NAME: "81",

    X_COORDINATE: "23.970039",
    Y_COORDINATE: "54.912341",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T10:56:11.157+02:00",
  },
  {
    ZIP: "55550",
    NAME: "Kauno IKI Tvirtov\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Tvirtov\u0117s al.",

    A7_NAME: "12A",

    X_COORDINATE: "23.920659",
    Y_COORDINATE: "54.914115",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:53:20.327+03:00",
  },
  {
    ZIP: "77700",
    NAME: "Kauno IKI Varni\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Varni\u0173 g.",

    A7_NAME: "38A",

    X_COORDINATE: "23.896850",
    Y_COORDINATE: "54.914510",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Varni\u0173 g. pus\u0117s",
    MODIFIED: "2021-01-15T10:34:43.523+02:00",
  },
  {
    ZIP: "88830",
    NAME: "Kauno IKI Veiveri\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Veiveri\u0173 g.",

    A7_NAME: "150A",

    X_COORDINATE: "23.885950",
    Y_COORDINATE: "54.862465",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Lazdij\u0173 gatv\u0117s pus\u0117s",
    MODIFIED: "2021-06-04T11:46:22.770+03:00",
  },
  {
    ZIP: "55516",
    NAME: "Kauno KUR\u0160I\u0172 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Kur\u0161i\u0173 g.",

    X_COORDINATE: "23.885730",
    Y_COORDINATE: "54.936092",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Kur\u0161i\u0173 g. pus\u0117s",
    MODIFIED: "2021-01-15T10:50:20.950+02:00",
  },
  {
    ZIP: "55529",
    NAME: "Kauno Karm\u0117lavos EXPRESS MARKET pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Karm\u0117lavos mstl.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "54",

    X_COORDINATE: "24.065069",
    Y_COORDINATE: "54.969890",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T10:39:33.430+02:00",
  },
  {
    ZIP: "88883",
    NAME: "Kauno MAXIMA Masiulio pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "T. Masiulio g.",

    A7_NAME: "16E",

    X_COORDINATE: "24.005181",
    Y_COORDINATE: "54.885999",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T10:51:15.780+02:00",
  },
  {
    ZIP: "55546",
    NAME: "Kauno MAXIMA Raudondvario pl. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Raudondvario pl.",

    A7_NAME: "284A",

    X_COORDINATE: "23.821326",
    Y_COORDINATE: "54.921134",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T10:54:23.497+02:00",
  },
  {
    ZIP: "55519",
    NAME: "Kauno MAXIMA \u0160iaur\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "\u0160iaur\u0117s pr.",

    A7_NAME: "8D",

    X_COORDINATE: "23.930825",
    Y_COORDINATE: "54.932507",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:54:19.630+03:00",
  },
  {
    ZIP: "55543",
    NAME: "Kauno NORFA Balt\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Balt\u0173 pr.",

    A7_NAME: "195",

    X_COORDINATE: "23.863531",
    Y_COORDINATE: "54.916223",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-29T08:52:39.457+02:00",
  },
  {
    ZIP: "88863",
    NAME: "Kauno PC AKROPOLIS pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Karaliaus Mindaugo pr.",

    A7_NAME: "49",

    X_COORDINATE: "23.919338",
    Y_COORDINATE: "54.890926",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, 1-ame parkavimo aik\u0161tel\u0117s auk\u0161te, I-A \u012f\u0117jimas",
    MODIFIED: "2020-12-27T08:37:09.347+02:00",
  },
  {
    ZIP: "77702",
    NAME: "Kauno PC MOLAS pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "K. Bar\u0161ausko g.",

    A7_NAME: "66",

    X_COORDINATE: "23.966688",
    Y_COORDINATE: "54.899482",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je pagrindinio \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2021-01-15T10:57:07.907+02:00",
  },
  {
    ZIP: "88827",
    NAME: "Kauno PC RIVER MALL pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Jonavos g.",

    A7_NAME: "60",

    X_COORDINATE: "23.898021",
    Y_COORDINATE: "54.903282",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je pagrindinio \u012f\u0117jimo \u012f prekybos </br> centr\u0105 pus\u0117je",
    MODIFIED: "2021-06-04T11:33:28.780+03:00",
  },
  {
    ZIP: "55518",
    NAME: "Kauno PC SAVAS pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Savanori\u0173 pr.",

    A7_NAME: "346",

    X_COORDINATE: "23.963799",
    Y_COORDINATE: "54.922035",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e taromato",
    MODIFIED: "2021-06-04T11:28:51.783+03:00",
  },
  {
    ZIP: "88881",
    NAME: "Kauno PLC MEGA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Islandijos pl.",

    A7_NAME: "32",

    X_COORDINATE: "23.889493",
    Y_COORDINATE: "54.939640",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f Rimi pus\u0117je\u00a0i\u0161 Islandijos pl.",
    MODIFIED: "2021-01-15T10:59:22.847+02:00",
  },
  {
    ZIP: "77703",
    NAME: "Kauno PM URMAS pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Pramon\u0117s pr.",

    A7_NAME: "16",

    X_COORDINATE: "23.987959",
    Y_COORDINATE: "54.916401",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, \u012fva\u017eiav\u0119 per 1C vartus prie Vakarin\u0117s galerijos </br> esan\u010dio traukinio",
    MODIFIED: "2020-12-23T14:21:57.853+02:00",
  },
  {
    ZIP: "77704",
    NAME: "Kauno RIMI Baltijos pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Baltijos g.",

    A7_NAME: "58",

    X_COORDINATE: "23.879733",
    Y_COORDINATE: "54.920581",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T14:17:00.303+02:00",
  },
  {
    ZIP: "88882",
    NAME: "Kauno RIMI Europos pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Europos pr.",

    A7_NAME: "43",

    X_COORDINATE: "23.912434",
    Y_COORDINATE: "54.875631",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T11:01:49.443+02:00",
  },
  {
    ZIP: "77705",
    NAME: "Kauno RIMI Juozapavi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "A. Juozapavi\u010diaus pr.",

    A7_NAME: "11",

    X_COORDINATE: "23.945235",
    Y_COORDINATE: "54.864965",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:44:41.153+03:00",
  },
  {
    ZIP: "88836",
    NAME: "Kauno RIMI Kr\u0117v\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "V. Kr\u0117v\u0117s pr.",

    A7_NAME: "43A",

    X_COORDINATE: "23.966171",
    Y_COORDINATE: "54.917362",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos,kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:03:43.487+02:00",
  },
  {
    ZIP: "55541",
    NAME: "Kauno RIMI Pranc\u016bz\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Pranc\u016bz\u0173 g.",

    A7_NAME: "81",

    X_COORDINATE: "23.949162",
    Y_COORDINATE: "54.891485",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:04:31.487+02:00",
  },
  {
    ZIP: "88874",
    NAME: "Kauno RIMI Raudondvario pl. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Raudondvario pl.",

    A7_NAME: "94B",

    X_COORDINATE: "23.865946",
    Y_COORDINATE: "54.908863",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie sienos kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:05:24.693+02:00",
  },
  {
    ZIP: "88884",
    NAME: "Kauno RIMI Savanori\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Savanori\u0173 pr.",

    A7_NAME: "321",

    X_COORDINATE: "23.950340",
    Y_COORDINATE: "54.919866",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo (netoli taromato)",
    MODIFIED: "2021-01-15T11:06:19.537+02:00",
  },
  {
    ZIP: "55522",
    NAME: "Kauno RIMI Student\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Student\u0173 g.",

    A7_NAME: "19",

    X_COORDINATE: "23.951539",
    Y_COORDINATE: "54.908499",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:06:58.037+02:00",
  },
  {
    ZIP: "88898",
    NAME: "Kauno Ramu\u010di\u0173 IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Ramu\u010di\u0173 k.",

    A5_NAME: "Centrin\u0117 g.",

    A7_NAME: "56",

    X_COORDINATE: "24.031606",
    Y_COORDINATE: "54.954036",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Plento g. pus\u0117s",
    MODIFIED: "2021-05-24T05:51:04.833+03:00",
  },
  {
    ZIP: "55537",
    NAME: "Kauno Raudondvario IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Raudondvario k.",

    A5_NAME: "J. Naujalio g.",

    A7_NAME: "20B",

    X_COORDINATE: "23.773677",
    Y_COORDINATE: "54.940752",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T06:55:04.363+03:00",
  },
  {
    ZIP: "77701",
    NAME: "Kauno Ringaud\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Ringaud\u0173 k.",

    A5_NAME: "G\u0117li\u0173 g.",

    A7_NAME: "2B",

    X_COORDINATE: "23.803991",
    Y_COORDINATE: "54.890196",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T09:10:47.657+02:00",
  },
  {
    ZIP: "55538",
    NAME: "Kauno Rok\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Rok\u0173 g.",

    A7_NAME: "17",

    X_COORDINATE: "23.948407",
    Y_COORDINATE: "54.840800",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:07:41.827+02:00",
  },
  {
    ZIP: "77706",
    NAME: "Kauno Romaini\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Romaini\u0173 g.",

    A7_NAME: "67C",

    X_COORDINATE: "23.813120",
    Y_COORDINATE: "54.942814",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:10:03.100+02:00",
  },
  {
    ZIP: "55505",
    NAME: "Kauno VC AVC pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Veiveri\u0173 g.",

    A7_NAME: "134",

    X_COORDINATE: "23.889431",
    Y_COORDINATE: "54.873353",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, kair\u0117je \u012f\u0117jimo \u012f verslo centr\u0105 pus\u0117je, u\u017e kampo </br>  prie galin\u0117s pastato sienos",
    MODIFIED: "2021-01-15T11:42:01.550+02:00",
  },
  {
    ZIP: "55549",
    NAME: "Kauno VC NORDIC pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Savanori\u0173 pr.",

    A7_NAME: "192",

    X_COORDINATE: "23.934400",
    Y_COORDINATE: "54.910637",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f verslo centr\u0105  pus\u0117je, </br> einant link \u017demgulio g.",
    MODIFIED: "2021-01-15T11:42:41.610+02:00",
  },
  {
    ZIP: "55542",
    NAME: "Kauno VIADA Juozapavi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "A. Juozapavi\u010diaus pr.",

    A7_NAME: "90",

    X_COORDINATE: "23.934133",
    Y_COORDINATE: "54.878079",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T10:40:48.303+02:00",
  },
  {
    ZIP: "55545",
    NAME: "Kauno Vai\u0161vydavos IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Did\u017eioji g.",

    A7_NAME: "98",

    X_COORDINATE: "24.013375",
    Y_COORDINATE: "54.854425",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-04T11:39:26.343+03:00",
  },
  {
    ZIP: "88828",
    NAME: "Kauno \u0160ILAS Balt\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Balt\u0173 pr.",

    A7_NAME: "18",

    X_COORDINATE: "23.884138",
    Y_COORDINATE: "54.929909",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:11:09.037+02:00",
  },
  {
    ZIP: "88831",
    NAME: "Kauno \u0160ILAS Baranausko pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "A. Baranausko g.",

    A7_NAME: "26",

    X_COORDINATE: "23.956149",
    Y_COORDINATE: "54.909912",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-13T08:58:10.043+02:00",
  },
  {
    ZIP: "88832",
    NAME: "Kauno \u0160ILAS Juozapavi\u010diaus 81A pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "A. Juozapavi\u010diaus pr.",

    A7_NAME: "81A",

    X_COORDINATE: "23.935761",
    Y_COORDINATE: "54.875165",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-13T08:58:35.730+02:00",
  },
  {
    ZIP: "55506",
    NAME: "Kauno \u0160ILAS Sprangausko pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "K. Sprangausko g.",

    A7_NAME: "1A",

    X_COORDINATE: "23.880278",
    Y_COORDINATE: "54.848074",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T11:14:04.340+02:00",
  },
  {
    ZIP: "55514",
    NAME: "Kauno \u0160ILAS Taikos pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Taikos pr.",

    A7_NAME: "31A",

    X_COORDINATE: "23.946887",
    Y_COORDINATE: "54.911603",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:15:42.967+02:00",
  },
  {
    ZIP: "77708",
    NAME: "Kauno \u0160ILAS Vand\u017eiogalos pl. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "Vand\u017eiogalos pl.",

    A7_NAME: "22",

    X_COORDINATE: "23.882664",
    Y_COORDINATE: "54.945361",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:16:49.797+02:00",
  },
  {
    ZIP: "77707",
    NAME: "Kauno \u0160ILAS \u0160kirpos pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno m. sav.",
    A3_NAME: "Kauno m.",

    A5_NAME: "K. \u0160kirpos g.",

    A7_NAME: "17",

    X_COORDINATE: "23.943316",
    Y_COORDINATE: "54.930281",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T07:46:48.860+03:00",
  },
  {
    ZIP: "77739",
    NAME: "Kazl\u0173 R\u016bdos MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Kazl\u0173 R\u016bdos sav.",
    A3_NAME: "Kazl\u0173 R\u016bdos m.",

    A5_NAME: "M. Valan\u010diaus g.",

    X_COORDINATE: "23.493249",
    Y_COORDINATE: "54.751551",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:53:39.933+02:00",
  },
  {
    ZIP: "96114",
    NAME: "Kehra Coop Konsumi pakiautomaat",

    A2_NAME: "Anija vald",
    A3_NAME: "Kehra linn",

    A5_NAME: "Kose mnt",

    X_COORDINATE: "25.332838",
    Y_COORDINATE: "59.333827",

    MODIFIED: "2021-05-28T08:05:31.180+03:00",
  },
  {
    ZIP: "74301",
    NAME: "Kehra postkontor",

    A2_NAME: "Anija vald",
    A3_NAME: "Kehra linn",

    A5_NAME: "Kose mnt",

    X_COORDINATE: "25.333074",
    Y_COORDINATE: "59.334658",
    SERVICE_HOURS:
      "E,K 12:00-18:00 T,N 10:00-16:00 R 10:00-14:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-21T12:20:24.440+03:00",
  },
  {
    ZIP: "96221",
    NAME: "Kehtna Coop kaupluse pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kehtna vald",
    A3_NAME: "Kehtna alevik",

    A5_NAME: "Lasteaia tn",

    A7_NAME: "12",

    X_COORDINATE: "24.871838",
    Y_COORDINATE: "58.925939",

    MODIFIED: "2020-12-30T07:46:04.543+02:00",
  },
  {
    ZIP: "96172",
    NAME: "Keila Grossi pakiautomaat",

    A2_NAME: "Keila linn",
    A3_NAME: "",

    A5_NAME: "Piiri tn",

    X_COORDINATE: "24.417712",
    Y_COORDINATE: "59.312345",

    MODIFIED: "2021-04-12T06:06:55.373+03:00",
  },
  {
    ZIP: "96229",
    NAME: "Keila Maxima X pakiautomaat",

    A2_NAME: "Keila linn",
    A3_NAME: "",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "25",

    X_COORDINATE: "24.432466",
    Y_COORDINATE: "59.310667",

    MODIFIED: "2020-12-14T07:52:04.400+02:00",
  },
  {
    ZIP: "96049",
    NAME: "Keila R\u00f5\u00f5mu kaubamaja pakiautomaat",

    A2_NAME: "Keila linn",
    A3_NAME: "",

    A5_NAME: "Haapsalu mnt",

    A7_NAME: "57a",

    X_COORDINATE: "24.398912",
    Y_COORDINATE: "59.307554",

    MODIFIED: "2021-05-26T06:37:50.800+03:00",
  },
  {
    ZIP: "76601",
    NAME: "Keila postkontor",

    A2_NAME: "Keila linn",
    A3_NAME: "",

    A5_NAME: "Jaama tn",

    X_COORDINATE: "24.413942",
    Y_COORDINATE: "59.306799",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:21:30.297+03:00",
  },
  {
    ZIP: "88805",
    NAME: "Kelm\u0117s MAXIMA Vytauto Did\u017eiojo pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Kelm\u0117s r. sav.",
    A3_NAME: "Kelm\u0117s m.",

    A5_NAME: "Vytauto Did\u017eiojo g.",

    A7_NAME: "49",

    X_COORDINATE: "22.930892",
    Y_COORDINATE: "55.629949",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:46:25.460+03:00",
  },
  {
    ZIP: "87494",
    NAME: "Kergu postipunkt (Coop)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "Kergu k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.754664",
    Y_COORDINATE: "58.667508",
    SERVICE_HOURS: "E,T,K,N,R,L 09:00-18:00 P SULETUD",

    MODIFIED: "2021-04-13T13:09:13.360+03:00",
  },
  {
    ZIP: "93395",
    NAME: "Kihelkonna postipunkt",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Kihelkonna alevik",

    A5_NAME: "L\u00fcmanda mnt",

    X_COORDINATE: "22.039274",
    Y_COORDINATE: "58.359766",
    SERVICE_HOURS:
      "E,T,N 08:30-16:30 K 08:30-18:00 R 08:30-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2: "E,T,N 12:00-16:30 K 12:00-18:00 R 12:00-15:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-22T13:21:59.203+03:00",
  },
  {
    ZIP: "88091",
    NAME: "Kihnu postipunkt (Rahvamaja)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Kihnu vald",
    A3_NAME: "S\u00e4\u00e4re k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Kurase",
    A7_NAME: "",

    X_COORDINATE: "23.982302",
    Y_COORDINATE: "58.132289",
    SERVICE_HOURS:
      "E,T,K,N 13:00-16:00 R,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-05T06:17:22.197+03:00",
  },
  {
    ZIP: "96155",
    NAME: "Kiili Coop Konsumi pakiautomaat",

    A2_NAME: "Kiili vald",
    A3_NAME: "Kiili alev",

    A5_NAME: "Nabala tee",

    X_COORDINATE: "24.837485",
    Y_COORDINATE: "59.307490",

    MODIFIED: "2021-05-28T10:40:56.000+03:00",
  },
  {
    ZIP: "75492",
    NAME: "Kiili postipunkt",

    A2_NAME: "Kiili vald",
    A3_NAME: "Kiili alev",

    A5_NAME: "Vaela tee",

    X_COORDINATE: "24.834292",
    Y_COORDINATE: "59.310014",
    SERVICE_HOURS:
      "E,T,K,N,R 14:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "23.06.2021 kuni 25.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "25.06.2021",

    MODIFIED: "2021-06-04T08:46:51.410+03:00",
  },
  {
    ZIP: "96159",
    NAME: "Kiisa Coop kaupluse pakiautomaat",

    A2_NAME: "Saku vald",
    A3_NAME: "Kiisa alevik",

    A5_NAME: "Kurtna tee",

    X_COORDINATE: "24.690235",
    Y_COORDINATE: "59.234306",

    MODIFIED: "2021-05-31T12:50:40.857+03:00",
  },
  {
    ZIP: "75594",
    NAME: "Kiisa postipunkt",

    A2_NAME: "Saku vald",
    A3_NAME: "Kiisa alevik",

    A5_NAME: "Kurtna tee",

    X_COORDINATE: "24.689330",
    Y_COORDINATE: "59.234109",
    SERVICE_HOURS:
      "E,T,K,N,R 12:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "Kuni 04.06.2021: R SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-05-11T10:48:44.597+03:00",
  },
  {
    ZIP: "96320",
    NAME: "Kilingi-N\u00f5mme Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Saarde vald",
    A3_NAME: "Kilingi-N\u00f5mme linn",

    A5_NAME: "P\u00e4rnu tn",

    A7_NAME: "37",

    X_COORDINATE: "24.949428",
    Y_COORDINATE: "58.148012",

    MODIFIED: "2021-05-24T13:31:33.243+03:00",
  },
  {
    ZIP: "86399",
    NAME: "Kilingi-N\u00f5mme postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Saarde vald",
    A3_NAME: "Kilingi-N\u00f5mme linn",

    A5_NAME: "P\u00e4rnu tn",

    A7_NAME: "44",

    X_COORDINATE: "24.950664",
    Y_COORDINATE: "58.148526",
    SERVICE_HOURS: "E,R 10:00-16:00 K 12:00-18:00 T,N,L,P SULETUD",
    TEMP_SERVICE_HOURS: "04.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-05-26T09:19:46.747+03:00",
  },
  {
    ZIP: "78091",
    NAME: "Kivi-Vigala postkontor",

    A1_NAME: "Rapla maakond",
    A2_NAME: "M\u00e4rjamaa vald",
    A3_NAME: "Kivi-Vigala k\u00fcla",

    A5_NAME: "S\u00e4\u00e4la tee",

    X_COORDINATE: "24.365815",
    Y_COORDINATE: "58.713802",
    SERVICE_HOURS: "E,T,N,R 08:00-11:00 K 09:00-14:00 L,P SULETUD",

    TEMP_SERVICE_HOURS_2:
      "Kuni 04.06.2021: SULETUD;05.06.2021 kuni 13.06.2021: E,T,K,N,R 08:00-10:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "13.06.2021",

    MODIFIED: "2021-05-24T14:38:23.497+03:00",
  },
  {
    ZIP: "96176",
    NAME: "Kivi\u00f5li Grossi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "Kivi\u00f5li linn",

    A5_NAME: "Keskpuiestee",

    X_COORDINATE: "26.974969",
    Y_COORDINATE: "59.356588",

    MODIFIED: "2021-04-22T11:36:30.317+03:00",
  },
  {
    ZIP: "96090",
    NAME: "Kivi\u00f5li Maxima X pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "Kivi\u00f5li linn",

    A5_NAME: "Viru tn",

    X_COORDINATE: "26.973209",
    Y_COORDINATE: "59.358844",

    MODIFIED: "2021-04-22T11:35:45.260+03:00",
  },
  {
    ZIP: "43101",
    NAME: "Kivi\u00f5li postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "Kivi\u00f5li linn",

    A5_NAME: "Metsa tn",

    X_COORDINATE: "26.975619",
    Y_COORDINATE: "59.356736",
    SERVICE_HOURS:
      "E,T,K,R 10:00-14:30 N 10:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:43:10.513+03:00",
  },
  {
    ZIP: "55565",
    NAME: "Klaip\u0117dos Dercekli\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos r. sav.",
    A3_NAME: "Dercekli\u0173 k.",

    A5_NAME: "Nidos g.",

    X_COORDINATE: "21.270966",
    Y_COORDINATE: "55.578410",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T07:05:39.337+03:00",
  },
  {
    ZIP: "77742",
    NAME: "Klaip\u0117dos HERKAUS GALERIJA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "H. Manto g.",

    A7_NAME: "22",

    X_COORDINATE: "21.130218",
    Y_COORDINATE: "55.715201",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Ligonin\u0117s g. pus\u0117s",
    MODIFIED: "2021-04-22T12:05:07.110+03:00",
  },
  {
    ZIP: "55560",
    NAME: "Klaip\u0117dos IKI Debreceno pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Debreceno g.",

    A7_NAME: "54",

    X_COORDINATE: "21.172714",
    Y_COORDINATE: "55.682740",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:30:46.577+03:00",
  },
  {
    ZIP: "55559",
    NAME: "Klaip\u0117dos IKI Nidos g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Nidos g.",

    X_COORDINATE: "21.156567",
    Y_COORDINATE: "55.678735",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:20:02.163+02:00",
  },
  {
    ZIP: "55553",
    NAME: "Klaip\u0117dos Klip\u0161\u010di\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos r. sav.",
    A3_NAME: "Slengi\u0173 k.",

    A5_NAME: "\u017daliakelio g.",

    X_COORDINATE: "21.175073",
    Y_COORDINATE: "55.752530",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:21:59.670+02:00",
  },
  {
    ZIP: "88885",
    NAME: "Klaip\u0117dos MAXIMA \u0160ilut\u0117s pl.68 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "\u0160ilut\u0117s pl.",

    A7_NAME: "68",

    X_COORDINATE: "21.189166",
    Y_COORDINATE: "55.676559",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> netoli taromato",
    MODIFIED: "2021-05-20T06:28:29.820+03:00",
  },
  {
    ZIP: "88877",
    NAME: "Klaip\u0117dos NORFA Tauralaukio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Tauralaukio g.",

    X_COORDINATE: "21.142760",
    Y_COORDINATE: "55.753475",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, po stogu",
    MODIFIED: "2020-12-27T07:43:21.477+02:00",
  },
  {
    ZIP: "88872",
    NAME: "Klaip\u0117dos NORFA Vingio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Vingio g.",

    A7_NAME: "21A",

    X_COORDINATE: "21.195697",
    Y_COORDINATE: "55.668081",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie sienos kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:22:51.623+03:00",
  },
  {
    ZIP: "88837",
    NAME: "Klaip\u0117dos PC ARENA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Taikos pr.",

    A7_NAME: "64",

    X_COORDINATE: "21.155785",
    Y_COORDINATE: "55.687225",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f Rimi pus\u0117je",
    MODIFIED: "2020-12-27T08:47:15.313+02:00",
  },
  {
    ZIP: "55555",
    NAME: "Klaip\u0117dos PC BANGINIS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "\u0160ilut\u0117s pl.",

    A7_NAME: "35A",

    X_COORDINATE: "21.183192",
    Y_COORDINATE: "55.692883",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je, \u0161alia </br>  Senuk\u0173 i\u0161kabos",
    MODIFIED: "2020-12-27T12:41:25.360+02:00",
  },
  {
    ZIP: "55557",
    NAME: "Klaip\u0117dos PC LUIZ\u0116 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "\u0160iaur\u0117s pr.",

    A7_NAME: "15",

    X_COORDINATE: "21.141304",
    Y_COORDINATE: "55.727229",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2020-12-27T19:57:40.027+02:00",
  },
  {
    ZIP: "88841",
    NAME: "Klaip\u0117dos PC MOLAS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Taikos pr.",

    A7_NAME: "139",

    X_COORDINATE: "21.177448",
    Y_COORDINATE: "55.664533",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, \u012f\u0117jimo \u012f RIMI parduotuv\u0119 kair\u0117je </br> i\u0161 Liubeko g. pus\u0117s",
    MODIFIED: "2021-06-03T07:18:09.303+03:00",
  },
  {
    ZIP: "55558",
    NAME: "Klaip\u0117dos PC SATURNAS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Taikos pr.",

    X_COORDINATE: "21.142256",
    Y_COORDINATE: "55.705206",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f vaistin\u0119 pus\u0117je, \u0161alia bankomato",
    MODIFIED: "2021-05-06T07:39:25.520+03:00",
  },
  {
    ZIP: "88839",
    NAME: "Klaip\u0117dos PC STUDLENDAS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "H. Manto g.",

    A7_NAME: "90",

    X_COORDINATE: "21.125150",
    Y_COORDINATE: "55.729055",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f IKI pus\u0117je, i\u0161 \u0160iaur\u0117s pr.",
    MODIFIED: "2021-05-20T06:25:49.947+03:00",
  },
  {
    ZIP: "55556",
    NAME: "Klaip\u0117dos RIMI Liepojos pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Liepojos g.",

    A7_NAME: "27",

    X_COORDINATE: "21.130231",
    Y_COORDINATE: "55.751524",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:20:01.023+03:00",
  },
  {
    ZIP: "77710",
    NAME: "Klaip\u0117dos Slengi\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos r. sav.",
    A3_NAME: "Slengi\u0173 k.",

    A5_NAME: "Dangaus g.",

    A7_NAME: "34",

    X_COORDINATE: "21.191775",
    Y_COORDINATE: "55.736670",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-06T07:36:57.177+03:00",
  },
  {
    ZIP: "88873",
    NAME: "Klaip\u0117dos TECHNORAMA Taikos 39 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Taikos pr.",

    A7_NAME: "39",

    X_COORDINATE: "21.149172",
    Y_COORDINATE: "55.698207",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:21:03.580+03:00",
  },
  {
    ZIP: "55554",
    NAME: "Klaip\u0117dos TIL\u017d\u0116S TURGUS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Til\u017e\u0117s g.",

    A7_NAME: "51",

    X_COORDINATE: "21.165810",
    Y_COORDINATE: "55.705836",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie tvoros, kair\u0117je \u012f\u0117jimo \u012f turg\u0173 pus\u0117je",
    MODIFIED: "2020-12-27T19:59:10.680+02:00",
  },
  {
    ZIP: "88838",
    NAME: "Klaip\u0117dos VIADA Priesto\u010dio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Priesto\u010dio g.",

    A7_NAME: "28",

    X_COORDINATE: "21.141022",
    Y_COORDINATE: "55.719124",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:46:29.467+02:00",
  },
  {
    ZIP: "77781",
    NAME: "Klaip\u0117dos \u010cIA MARKET Mogiliovo pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Klaip\u0117dos m. sav.",
    A3_NAME: "Klaip\u0117dos m.",

    A5_NAME: "Mogiliovo g.",

    A7_NAME: "12",

    X_COORDINATE: "21.200064",
    Y_COORDINATE: "55.663737",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T12:25:18.793+02:00",
  },
  {
    ZIP: "76791",
    NAME: "Klooga postipunkt",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Klooga alevik",

    A5_NAME: "Pargi tn",

    X_COORDINATE: "24.227849",
    Y_COORDINATE: "59.319776",
    SERVICE_HOURS: "E,T,K,N,R 09:00-21:00 L,P SULETUD",

    MODIFIED: "2021-05-04T10:08:34.677+03:00",
  },
  {
    ZIP: "96147",
    NAME: "Koeru Vallamaja pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "J\u00e4rva vald",
    A3_NAME: "Koeru alevik",

    A5_NAME: "Paide tee",

    X_COORDINATE: "26.024905",
    Y_COORDINATE: "58.962329",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96094",
    NAME: "Kohila Coop Konsumi pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kohila vald",
    A3_NAME: "Kohila alev",

    A5_NAME: "Vabaduse tn",

    X_COORDINATE: "24.750722",
    Y_COORDINATE: "59.167176",

    MODIFIED: "2021-04-19T05:55:36.570+03:00",
  },
  {
    ZIP: "79891",
    NAME: "Kohila postkontor",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kohila vald",
    A3_NAME: "Kohila alev",

    A5_NAME: "L\u00f5una tn",

    X_COORDINATE: "24.749749",
    Y_COORDINATE: "59.167226",
    SERVICE_HOURS:
      "E,K 11:00-18:00 T,N,R 11:00-14:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:46:51.793+03:00",
  },
  {
    ZIP: "96139",
    NAME: "Kohtla-J\u00e4rve Keskallee Maxima X pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "J\u00e4rve linnaosa",

    A5_NAME: "Keskallee",

    A7_NAME: "12",

    X_COORDINATE: "27.284854",
    Y_COORDINATE: "59.402352",

    MODIFIED: "2021-04-22T11:33:53.520+03:00",
  },
  {
    ZIP: "96307",
    NAME: "Kohtla-J\u00e4rve M\u00f5isa tee Maxima X pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "J\u00e4rve linnaosa",

    A5_NAME: "M\u00f5isa tee",

    X_COORDINATE: "27.290852",
    Y_COORDINATE: "59.406581",

    MODIFIED: "2021-04-22T11:32:59.220+03:00",
  },
  {
    ZIP: "96036",
    NAME: "Kohtla-J\u00e4rve Rimi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "J\u00e4rve linnaosa",

    A5_NAME: "P\u00f5hja allee",

    X_COORDINATE: "27.284822",
    Y_COORDINATE: "59.407391",

    MODIFIED: "2021-04-13T13:51:01.147+03:00",
  },
  {
    ZIP: "96093",
    NAME: "Kohtla-J\u00e4rve Vironia keskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "J\u00e4rve linnaosa",

    A5_NAME: "J\u00e4rvek\u00fcla tee",

    A7_NAME: "50",

    X_COORDINATE: "27.285897",
    Y_COORDINATE: "59.398106",

    MODIFIED: "2021-05-31T05:29:55.927+03:00",
  },
  {
    ZIP: "30301",
    NAME: "Kohtla-J\u00e4rve postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Kohtla-J\u00e4rve linn",
    A3_NAME: "J\u00e4rve linnaosa",

    A5_NAME: "J\u00e4rvek\u00fcla tee",

    A7_NAME: "50",

    X_COORDINATE: "27.286075",
    Y_COORDINATE: "59.397948",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:21:42.880+02:00",
  },
  {
    ZIP: "30591",
    NAME: "Kohtla-N\u00f5mme postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Toila vald",
    A3_NAME: "Kohtla-N\u00f5mme alev",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "27.193088",
    Y_COORDINATE: "59.354615",
    SERVICE_HOURS:
      "E,T,N,R 10:00-17:00 K 11:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-08T11:16:06.417+03:00",
  },
  {
    ZIP: "9141",
    NAME: "Kokneses Maxima X pakom\u0101ts",

    A1_NAME: "Kokneses novads",
    A2_NAME: "Kokneses pagasts",
    A3_NAME: "Koknese",

    A5_NAME: "1905. gada iela",

    A7_NAME: "8A",

    X_COORDINATE: "25.434312",
    Y_COORDINATE: "56.644379",

    MODIFIED: "2021-01-14T07:17:57.747+02:00",
  },
  {
    ZIP: "70319",
    NAME: "Kolga-Jaani postiautomaat",

    A2_NAME: "Viljandi vald",
    A3_NAME: "Kolga-Jaani alevik",

    A5_NAME: "Viljandi mnt",

    X_COORDINATE: "25.943015",
    Y_COORDINATE: "58.534119",

    MODIFIED: "2021-01-21T02:00:05.653+02:00",
  },
  {
    ZIP: "70394",
    NAME: "Kolga-Jaani postipunkt",

    A2_NAME: "Viljandi vald",
    A3_NAME: "Kolga-Jaani alevik",

    A5_NAME: "Viljandi mnt",

    X_COORDINATE: "25.943085",
    Y_COORDINATE: "58.533573",
    SERVICE_HOURS:
      "E,T,K,N,R 08:00-19:00 L,P 09:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T13:10:03.583+03:00",
  },
  {
    ZIP: "60394",
    NAME: "Kolkja postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Peipsi\u00e4\u00e4re vald",
    A3_NAME: "Kolkja alevik",

    A5_NAME: "Suur tee",

    A7_NAME: "39",

    X_COORDINATE: "27.213315",
    Y_COORDINATE: "58.550503",
    SERVICE_HOURS:
      "E,T,K,N,R 08:30-14:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "23.06.2021 kuni 24.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "24.06.2021",
    TEMP_SERVICE_HOURS_2: "22.06.2021: 08:30-13:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "22.06.2021",

    MODIFIED: "2021-06-04T11:33:12.220+03:00",
  },
  {
    ZIP: "61218",
    NAME: "Konguta postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Annikoru k\u00fcla",

    A5_NAME: "Annikoru tee",

    A8_NAME: "10",
    X_COORDINATE: "26.308054",
    Y_COORDINATE: "58.267280",
    SERVICE_HOURS: "E 12:00-18:00 T,K,N 13:00-19:00 R 09:00-15:00 L,P SULETUD",

    MODIFIED: "2021-04-28T13:19:11.883+03:00",
  },
  {
    ZIP: "88443",
    NAME: "Koonga postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Koonga k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Valla",

    X_COORDINATE: "24.149549",
    Y_COORDINATE: "58.580114",

    MODIFIED: "2021-04-05T06:17:54.373+03:00",
  },
  {
    ZIP: "96096",
    NAME: "Kose Grossi pakiautomaat",

    A2_NAME: "Kose vald",
    A3_NAME: "Kose alevik",

    A5_NAME: "Kodu tn",

    X_COORDINATE: "25.164630",
    Y_COORDINATE: "59.184000",

    MODIFIED: "2021-05-26T08:52:47.863+03:00",
  },
  {
    ZIP: "75191",
    NAME: "Kose postkontor (Harju)",

    A2_NAME: "Kose vald",
    A3_NAME: "Kose alevik",

    A5_NAME: "Pikk tn",

    X_COORDINATE: "25.163287",
    Y_COORDINATE: "59.186915",
    SERVICE_HOURS: "E,K 10:00-15:00 T,N 10:00-18:00 R 10:00-13:30 L,P SULETUD",

    TEMP_SERVICE_HOURS_2: "07.06.2021 kuni 13.06.2021: T,N 10:00-18:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "13.06.2021",

    MODIFIED: "2021-05-24T14:33:20.000+03:00",
  },
  {
    ZIP: "75193",
    NAME: "Kose-Uuem\u00f5isa postipunkt",

    A2_NAME: "Kose vald",
    A3_NAME: "Kose-Uuem\u00f5isa alevik",

    A5_NAME: "Tiigi tn",

    X_COORDINATE: "25.103158",
    Y_COORDINATE: "59.203652",
    SERVICE_HOURS:
      "E,T,N,R 09:00-13:00, 14:00-17:00 K 11:00-15:00, 16:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-27T12:21:12.470+03:00",
  },
  {
    ZIP: "96160",
    NAME: "Kostivere Meie kaupluse pakiautomaat",

    A2_NAME: "J\u00f5el\u00e4htme vald",
    A3_NAME: "Kostivere alevik",

    A5_NAME: "M\u00f5isa tee",

    X_COORDINATE: "25.094629",
    Y_COORDINATE: "59.428523",

    MODIFIED: "2021-04-12T13:16:31.030+03:00",
  },
  {
    ZIP: "20201",
    NAME: "Kreenholmi postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Kreenholmi tn",

    A7_NAME: "39b",

    X_COORDINATE: "28.188135",
    Y_COORDINATE: "59.366202",

    MODIFIED: "2021-04-14T08:51:43.457+03:00",
  },
  {
    ZIP: "55573",
    NAME: "Krekenavos KOOPS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio r. sav.",
    A3_NAME: "Krekenavos mstl.",

    A5_NAME: "Ba\u017eny\u010dios g.",

    X_COORDINATE: "24.097792",
    Y_COORDINATE: "55.543391",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-29T09:19:10.253+02:00",
  },
  {
    ZIP: "88806",
    NAME: "Kretingos MAXIMA Rotu\u0161\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Kretingos r. sav.",
    A3_NAME: "Kretingos m.",

    A5_NAME: "Rotu\u0161\u0117s a.",

    A7_NAME: "15",

    X_COORDINATE: "21.240982",
    Y_COORDINATE: "55.889772",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-04T14:50:43.750+02:00",
  },
  {
    ZIP: "88893",
    NAME: "Kretingos NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Kretingos r. sav.",
    A3_NAME: "Kretingos m.",

    A5_NAME: "\u0160ventosios g.",

    A7_NAME: "25H",

    X_COORDINATE: "21.232680",
    Y_COORDINATE: "55.892349",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 parkavimo aik\u0161tel\u0117s pus\u0117s",
    MODIFIED: "2021-04-15T13:28:32.260+03:00",
  },
  {
    ZIP: "10701",
    NAME: "Kristiine postkontor",

    A5_NAME: "Endla tn",

    A7_NAME: "45",

    X_COORDINATE: "24.722686",
    Y_COORDINATE: "59.426694",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-19T12:37:38.193+03:00",
  },
  {
    ZIP: "63594",
    NAME: "Krootuse postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "Kanepi vald",
    A3_NAME: "Krootuse k\u00fcla",

    A5_NAME: "Krootuse tee",

    X_COORDINATE: "26.841014",
    Y_COORDINATE: "58.075504",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2020-03-17T09:17:48.193+02:00",
  },
  {
    ZIP: "9984",
    NAME: "Kr\u0101slavas Maxima X pakom\u0101ts",

    A1_NAME: "Kr\u0101slavas novads",
    A2_NAME: "Kr\u0101slava",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "28",

    X_COORDINATE: "27.161997",
    Y_COORDINATE: "55.896968",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T08:42:57.893+02:00",
  },
  {
    ZIP: "55531",
    NAME: "Kudirkos Naumies\u010dio AIB\u0116 \u0160aki\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "\u0160aki\u0173 r. sav.",
    A3_NAME: "Kudirkos Naumies\u010dio m.",

    A5_NAME: "\u0160aki\u0173 g.",

    X_COORDINATE: "22.865438",
    Y_COORDINATE: "54.778235",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T11:55:13.543+02:00",
  },
  {
    ZIP: "79392",
    NAME: "Kuimetsa postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Kuimetsa k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Niidu",
    A7_NAME: "",

    X_COORDINATE: "25.123558",
    Y_COORDINATE: "59.041622",
    SERVICE_HOURS: "E,T,K,N,R 09:00-18:00 L,P SULETUD",

    MODIFIED: "2021-04-14T09:02:35.447+03:00",
  },
  {
    ZIP: "94794",
    NAME: "Kuivastu postipunkt (Sadam)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Muhu vald",
    A3_NAME: "Kuivastu k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Kuivastu sadam",
    A7_NAME: "",

    X_COORDINATE: "23.390366",
    Y_COORDINATE: "58.572826",
    SERVICE_HOURS:
      "T,K,N,R,L 10:00-13:30, 14:00-18:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:58:38.370+03:00",
  },
  {
    ZIP: "66520",
    NAME: "Kuldre postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Antsla vald",
    A3_NAME: "Kuldre k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.499606",
    Y_COORDINATE: "57.893036",
    SERVICE_HOURS: "E,T,K,N,R 13:00-15:00 L,P SULETUD",

    MODIFIED: "2021-02-11T08:55:14.463+02:00",
  },
  {
    ZIP: "9205",
    NAME: "Kuld\u012bgas Gravas ielas ELVI pakom\u0101ts",

    A1_NAME: "Kuld\u012bgas novads",
    A2_NAME: "Kuld\u012bga",
    A3_NAME: "",

    A5_NAME: "Gravas iela",

    X_COORDINATE: "21.957910",
    Y_COORDINATE: "56.973249",

    MODIFIED: "2021-01-14T07:18:31.857+02:00",
  },
  {
    ZIP: "9930",
    NAME: "Kuld\u012bgas S\u016bru ielas RIMI pakom\u0101ts",

    A1_NAME: "Kuld\u012bgas novads",
    A2_NAME: "Kuld\u012bga",
    A3_NAME: "",

    A5_NAME: "S\u016bru iela",

    X_COORDINATE: "21.958281",
    Y_COORDINATE: "56.967018",

    comment_lav: "Pie ieejas no st\u0101vlaukuma puses",

    MODIFIED: "2021-01-14T07:18:56.560+02:00",
  },
  {
    ZIP: "90794",
    NAME: "Kullamaa postipunkt (Vaibatuba)",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Kullamaa k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.079395",
    Y_COORDINATE: "58.880466",
    SERVICE_HOURS: "E,T,N,R 10:00-12:00 K 16:00-18:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "23.06.2021 kuni 25.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "25.06.2021",

    MODIFIED: "2021-06-04T10:45:56.953+03:00",
  },
  {
    ZIP: "96122",
    NAME: "Kunda Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Kunda linn",

    A5_NAME: "Kasem\u00e4e tn",

    A7_NAME: "12",

    X_COORDINATE: "26.518565",
    Y_COORDINATE: "59.500489",

    MODIFIED: "2020-12-09T07:24:53.627+02:00",
  },
  {
    ZIP: "44194",
    NAME: "Kunda postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Kunda linn",

    A5_NAME: "Koidu tn",

    A7_NAME: "75",

    X_COORDINATE: "26.504913",
    Y_COORDINATE: "59.504890",
    SERVICE_HOURS: "T,K,N 10:00-14:00 R,L 12:00-16:00 E,P SULETUD",

    MODIFIED: "2021-04-16T10:37:46.657+03:00",
  },
  {
    ZIP: "44101",
    NAME: "Kunda postkontor",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Kunda linn",

    A5_NAME: "Kasem\u00e4e tn",

    A7_NAME: "12",

    X_COORDINATE: "26.518254",
    Y_COORDINATE: "59.500520",
    SERVICE_HOURS:
      "E,T,K,N 16:00-18:00 R 10:00-12:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS:
      "09.06.2021 kuni 15.06.2021: SULETUD;22.06.2021 kuni 29.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "29.06.2021",

    MODIFIED: "2021-05-26T09:19:11.447+03:00",
  },
  {
    ZIP: "77740",
    NAME: "Kupi\u0161kio NORFA Pur\u0117no pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Kupi\u0161kio r. sav.",
    A3_NAME: "Kupi\u0161kio m.",

    A5_NAME: "A. Pur\u0117no g.",

    X_COORDINATE: "24.993626",
    Y_COORDINATE: "55.836344",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T15:03:38.400+02:00",
  },
  {
    ZIP: "48494",
    NAME: "Kuremaa postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "Kuremaa alevik",

    A5_NAME: "Keskasula tn",

    X_COORDINATE: "26.539560",
    Y_COORDINATE: "58.734271",
    SERVICE_HOURS: "E,T,K,N,R 10:00-18:00 L 10:00-17:00 P SULETUD",

    MODIFIED: "2020-12-09T10:29:50.257+02:00",
  },
  {
    ZIP: "96034",
    NAME: "Kuressaare Maxima XX pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Kuressaare linn",

    A5_NAME: "Tallinna tn",

    A7_NAME: "64",

    X_COORDINATE: "22.504776",
    Y_COORDINATE: "58.260402",

    MODIFIED: "2021-04-22T13:20:15.550+03:00",
  },
  {
    ZIP: "96065",
    NAME: "Kuressaare Smuuli Coop Konsumi pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Kuressaare linn",

    A5_NAME: "J. Smuuli tn",

    X_COORDINATE: "22.484936",
    Y_COORDINATE: "58.262168",

    MODIFIED: "2021-04-29T06:26:26.557+03:00",
  },
  {
    ZIP: "93801",
    NAME: "Kuressaare postkontor",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Kuressaare linn",

    A5_NAME: "Tallinna tn",

    A7_NAME: "19a",

    X_COORDINATE: "22.490114",
    Y_COORDINATE: "58.254609",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T12:18:38.313+02:00",
  },
  {
    ZIP: "88886",
    NAME: "Kur\u0161\u0117n\u0173 MAXIMA Vilniaus g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 r. sav.",
    A3_NAME: "Kur\u0161\u0117n\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "43",

    X_COORDINATE: "22.949889",
    Y_COORDINATE: "56.000459",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T13:10:14.680+02:00",
  },
  {
    ZIP: "96108",
    NAME: "Kuusalu Coop Konsumi pakiautomaat",

    A2_NAME: "Kuusalu vald",
    A3_NAME: "Kuusalu alevik",

    A5_NAME: "Kuusalu tee",

    A7_NAME: "13",

    X_COORDINATE: "25.441136",
    Y_COORDINATE: "59.445371",

    MODIFIED: "2021-05-28T08:07:35.047+03:00",
  },
  {
    ZIP: "74691",
    NAME: "Kuusalu postkontor",

    A2_NAME: "Kuusalu vald",
    A3_NAME: "Kuusalu alevik",

    A5_NAME: "Kuusalu tee",

    A7_NAME: "22",

    X_COORDINATE: "25.439015",
    Y_COORDINATE: "59.446046",
    SERVICE_HOURS: "E,N 12:00-18:00 T,K,R 08:00-13:00 L,P SULETUD",

    TEMP_SERVICE_HOURS_2: "07.06.2021: 12:00-16:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "07.06.2021",

    MODIFIED: "2021-06-04T08:45:18.650+03:00",
  },
  {
    ZIP: "51099",
    NAME: "Kvartali keskuse postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Riia tn",

    X_COORDINATE: "26.729174",
    Y_COORDINATE: "58.377225",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-19:00 L 09:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:26:09.070+03:00",
  },
  {
    ZIP: "55530",
    NAME: "Kybart\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Vilkavi\u0161kio r. sav.",
    A3_NAME: "Kybart\u0173 m.",

    A5_NAME: "Vi\u0161ty\u010dio g.",

    A7_NAME: "40",

    X_COORDINATE: "22.755781",
    Y_COORDINATE: "54.630970",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:43:32.013+02:00",
  },
  {
    ZIP: "96156",
    NAME: "K\u00e4ina Coop Konsumi pakiautomaat",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00e4ina alevik",

    A5_NAME: "Hiiu mnt",

    A7_NAME: "19",

    X_COORDINATE: "22.772387",
    Y_COORDINATE: "58.826620",

    MODIFIED: "2020-11-11T07:52:09.463+02:00",
  },
  {
    ZIP: "92194",
    NAME: "K\u00e4ina postipunkt",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00e4ina alevik",

    A5_NAME: "Hiiu mnt",

    A7_NAME: "13",

    X_COORDINATE: "22.775384",
    Y_COORDINATE: "58.826754",
    SERVICE_HOURS: "T,K,N,R 10:00-17:00 L 10:00-14:00 E,P SULETUD",

    MODIFIED: "2021-04-28T13:24:17.143+03:00",
  },
  {
    ZIP: "96046",
    NAME: "K\u00e4rdla Hiiu Coop Konsumi pakiautomaat",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00e4rdla linn",

    A5_NAME: "Keskv\u00e4ljak",

    X_COORDINATE: "22.746984",
    Y_COORDINATE: "58.998562",

    MODIFIED: "2020-11-11T07:52:33.440+02:00",
  },
  {
    ZIP: "96210",
    NAME: "K\u00e4rdla Tormi Coop Konsumi pakiautomaat",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00e4rdla linn",

    A5_NAME: "Heltermaa mnt",

    A7_NAME: "14a",

    X_COORDINATE: "22.754470",
    Y_COORDINATE: "58.990240",

    MODIFIED: "2020-11-11T07:52:53.810+02:00",
  },
  {
    ZIP: "92401",
    NAME: "K\u00e4rdla postkontor",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00e4rdla linn",

    A5_NAME: "Keskv\u00e4ljak",

    X_COORDINATE: "22.747884",
    Y_COORDINATE: "58.998630",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T12:53:50.547+03:00",
  },
  {
    ZIP: "93594",
    NAME: "K\u00e4rla postipunkt (Tankla)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "K\u00e4rla alevik",

    A5_NAME: "",
    A6_NAME: "Tankla",
    A7_NAME: "",

    X_COORDINATE: "22.264339",
    Y_COORDINATE: "58.335195",
    SERVICE_HOURS: "E,T,K,N,R,L,P 07:30-21:00",

    MODIFIED: "2021-01-30T17:10:34.580+02:00",
  },
  {
    ZIP: "69750",
    NAME: "K\u00e4rstna postipunkt (Coop)",

    A2_NAME: "Viljandi vald",
    A3_NAME: "K\u00e4rstna k\u00fcla",

    A5_NAME: "",
    A6_NAME: "K\u00e4rstnapoe",
    A7_NAME: "",

    X_COORDINATE: "25.805897",
    Y_COORDINATE: "58.143794",
    SERVICE_HOURS: "E,T,K,N,R,L 10:00-18:00 P 10:00-15:00",

    MODIFIED: "2021-01-30T09:42:40.857+02:00",
  },
  {
    ZIP: "49394",
    NAME: "K\u00e4\u00e4pa postipunkt (Coop)",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "Mustvee vald",
    A3_NAME: "K\u00e4\u00e4pa k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.849026",
    Y_COORDINATE: "58.699183",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P 10:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-11T10:59:57.157+02:00",
  },
  {
    ZIP: "90191",
    NAME: "K\u00f5msi postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "K\u00f5msi k\u00fcla",

    A5_NAME: "Keskuse tee",

    X_COORDINATE: "23.632892",
    Y_COORDINATE: "58.623432",

    MODIFIED: "2021-01-20T10:39:58.510+02:00",
  },
  {
    ZIP: "70594",
    NAME: "K\u00f5o postipunkt",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "K\u00f5o k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "25.724093",
    Y_COORDINATE: "58.631901",
    SERVICE_HOURS: "E,T,K,N,R 09:00-19:00 L,P 10:00-16:00",

    MODIFIED: "2021-01-21T07:55:14.010+02:00",
  },
  {
    ZIP: "71294",
    NAME: "K\u00f5pu postipunkt (Coop)",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "K\u00f5pu alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "25.303130",
    Y_COORDINATE: "58.326961",
    SERVICE_HOURS: "E,T,K,N,R,L,P 09:00-20:00",

    MODIFIED: "2021-03-29T12:44:00.137+03:00",
  },
  {
    ZIP: "92293",
    NAME: "K\u00f5rgessaare postipunkt",

    A1_NAME: "Hiiu maakond",
    A2_NAME: "Hiiumaa vald",
    A3_NAME: "K\u00f5rgessaare alevik",

    A5_NAME: "T\u00f6\u00f6stuse tee",

    X_COORDINATE: "22.471855",
    Y_COORDINATE: "58.982051",
    SERVICE_HOURS:
      "Kuni 28.05.2021: E,T,K,N,R,L 10:00-20:00 P 10:00-16:00;Alates 29.05.2021: E,T,K,N,R,L,P 10:00-20:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-24T07:09:42.897+03:00",
  },
  {
    ZIP: "96169",
    NAME: "K\u00f5rvek\u00fcla Coop kaupluse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "K\u00f5rvek\u00fcla alevik",

    A5_NAME: "Vasula tee",

    X_COORDINATE: "26.761363",
    Y_COORDINATE: "58.419839",

    MODIFIED: "2020-12-14T08:38:12.737+02:00",
  },
  {
    ZIP: "9162",
    NAME: "K\u0101rsavas TOP pakom\u0101ts",

    A1_NAME: "K\u0101rsavas novads",
    A2_NAME: "K\u0101rsava",
    A3_NAME: "",

    A5_NAME: "Sporta iela",

    X_COORDINATE: "27.675301",
    Y_COORDINATE: "56.786290",

    comment_lav: "Pie ieejas veikal\u0101",

    MODIFIED: "2020-11-13T05:36:52.193+02:00",
  },
  {
    ZIP: "88861",
    NAME: "K\u0117daini\u0173 MAXIMA Basanavi\u010diaus 93 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "K\u0117daini\u0173 r. sav.",
    A3_NAME: "K\u0117daini\u0173 m.",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "93",

    X_COORDINATE: "23.959059",
    Y_COORDINATE: "55.277651",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-02-04T14:59:59.360+02:00",
  },
  {
    ZIP: "77709",
    NAME: "K\u0117daini\u0173 MAXIMA Dariaus ir Gir\u0117no pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "K\u0117daini\u0173 r. sav.",
    A3_NAME: "K\u0117daini\u0173 m.",

    A5_NAME: "S. Dariaus ir S. Gir\u0117no g.",

    A7_NAME: "50A",

    X_COORDINATE: "23.978985",
    Y_COORDINATE: "55.308590",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T09:17:59.000+02:00",
  },
  {
    ZIP: "77770",
    NAME: "K\u0117daini\u0173 NORFA Basanavi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "K\u0117daini\u0173 r. sav.",
    A3_NAME: "K\u0117daini\u0173 m.",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "49",

    X_COORDINATE: "23.974796",
    Y_COORDINATE: "55.287902",

    comment_lit:
      "Pa\u0161omat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je, u\u017e kampo",
    MODIFIED: "2020-12-27T20:28:07.333+02:00",
  },
  {
    ZIP: "13697",
    NAME: "Laagna postipunkt (Bonfortuno O\u00dc)",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Vikerlase tn",

    A7_NAME: "23",

    X_COORDINATE: "24.845265",
    Y_COORDINATE: "59.439628",
    SERVICE_HOURS: "E,T,K,N,R 12:00-14:00 L,P SULETUD",

    MODIFIED: "2020-09-28T06:17:52.117+03:00",
  },
  {
    ZIP: "96067",
    NAME: "Laagri Coop Maksimarketi pakiautomaat",

    A2_NAME: "Saue vald",
    A3_NAME: "Laagri alevik",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "558a",

    X_COORDINATE: "24.614282",
    Y_COORDINATE: "59.341743",

    MODIFIED: "2021-05-26T07:18:20.510+03:00",
  },
  {
    ZIP: "96200",
    NAME: "Laagri Veskitammi Selver ABC pakiautomaat",

    A2_NAME: "Saue vald",
    A3_NAME: "Laagri alevik",

    A5_NAME: "Veskitammi tn",

    X_COORDINATE: "24.612130",
    Y_COORDINATE: "59.351120",

    MODIFIED: "2021-05-13T05:59:38.057+03:00",
  },
  {
    ZIP: "76491",
    NAME: "Laagri postkontor",

    A2_NAME: "Saue vald",
    A3_NAME: "Laagri alevik",

    A5_NAME: "Veskitammi tn",

    X_COORDINATE: "24.612169",
    Y_COORDINATE: "59.351013",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:22:42.290+03:00",
  },
  {
    ZIP: "60601",
    NAME: "Laeva postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "Laeva k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.378727",
    Y_COORDINATE: "58.491120",
    SERVICE_HOURS: "E 11:00-14:00 T,K,N,R 09:00-12:00 L,P SULETUD",

    MODIFIED: "2021-04-20T06:47:36.047+03:00",
  },
  {
    ZIP: "96183",
    NAME: "Lagedi Keskusehoone pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "Lagedi alevik",

    A5_NAME: "Kooli tn",

    A7_NAME: "18b",

    X_COORDINATE: "24.941626",
    Y_COORDINATE: "59.402187",

    MODIFIED: "2021-05-24T05:24:55.400+03:00",
  },
  {
    ZIP: "48495",
    NAME: "Laiuse postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "Laiuse alevik",

    A5_NAME: "Kuremaa tee",

    A7_NAME: "34",

    X_COORDINATE: "26.498710",
    Y_COORDINATE: "58.783189",
    SERVICE_HOURS:
      "E,T,K,N,R 08:00-19:00 L,P 10:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-29T12:13:51.510+03:00",
  },
  {
    ZIP: "9187",
    NAME: "Lapme\u017eciema Citro pakom\u0101ts",

    A1_NAME: "Engures novads",
    A2_NAME: "Lapme\u017eciema pagasts",
    A3_NAME: "Lapme\u017eciems",

    A5_NAME: "",
    A6_NAME: "Talsu \u0161osejas 8 km",
    A7_NAME: "",

    X_COORDINATE: "23.522089",
    Y_COORDINATE: "56.993750",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:55:12.703+02:00",
  },
  {
    ZIP: "13801",
    NAME: "Lasnam\u00e4e Centrum postkontor",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Mustakivi tee",

    A7_NAME: "13",

    X_COORDINATE: "24.862649",
    Y_COORDINATE: "59.440569",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-19T12:38:22.360+03:00",
  },
  {
    ZIP: "13698",
    NAME: "Lasnam\u00e4e pakipunkt",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Pae tn",

    A7_NAME: "80",

    X_COORDINATE: "24.820930",
    Y_COORDINATE: "59.436173",
    SERVICE_HOURS: "P SULETUD",

    TEMP_SERVICE_HOURS_2: "E,T,K,N,R 12:00-19:00 L 11:00-15:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-09T08:52:04.367+03:00",
  },
  {
    ZIP: "65416",
    NAME: "Lasva postipunkt",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru vald",
    A3_NAME: "Lasva k\u00fcla",

    A5_NAME: "P\u00e4ss\u00e4 p\u00f5ik",

    X_COORDINATE: "27.176851",
    Y_COORDINATE: "57.863347",
    SERVICE_HOURS:
      "Alates 04.05.2021: E,T,K,N,R,L,P 10:00-21:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-04T10:12:02.320+03:00",
  },
  {
    ZIP: "96245",
    NAME: "Laulasmaa Selver ABC pakiautomaat",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Laulasmaa k\u00fcla",

    A5_NAME: "Kloogaranna tee",

    A7_NAME: "26",

    X_COORDINATE: "24.238867",
    Y_COORDINATE: "59.378706",

    MODIFIED: "2021-05-04T05:59:39.303+03:00",
  },
  {
    ZIP: "87000",
    NAME: "Lavassaare postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "Lavassaare alev",

    A5_NAME: "P\u00e4rna tn",

    X_COORDINATE: "24.370468",
    Y_COORDINATE: "58.513864",
    SERVICE_HOURS: "T,K,N 09:00-12:30 E,R,L,P SULETUD",

    MODIFIED: "2021-05-03T08:10:13.607+03:00",
  },
  {
    ZIP: "88807",
    NAME: "Lazdij\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Lazdij\u0173 r. sav.",
    A3_NAME: "Lazdij\u0173 m.",

    A5_NAME: "Dz\u016bk\u0173 g.",

    X_COORDINATE: "23.511732",
    Y_COORDINATE: "54.238907",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie sienos kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2021-01-15T11:56:07.310+02:00",
  },
  {
    ZIP: "64295",
    NAME: "Leevi postipunkt (kauplus)",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "Leevi k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Leevi kauplus",
    A7_NAME: "",

    X_COORDINATE: "27.214848",
    Y_COORDINATE: "57.946853",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-18:00",

    MODIFIED: "2021-04-13T12:38:59.647+03:00",
  },
  {
    ZIP: "73694",
    NAME: "Lehtse postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Lehtse alevik",

    A5_NAME: "Pikk tn",

    A7_NAME: "14",

    X_COORDINATE: "25.826594",
    Y_COORDINATE: "59.253449",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-15T11:53:57.317+02:00",
  },
  {
    ZIP: "94292",
    NAME: "Leisi postkontor",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Leisi alevik",

    A5_NAME: "Mustjala mnt",

    X_COORDINATE: "22.682144",
    Y_COORDINATE: "58.571764",
    SERVICE_HOURS:
      "E,T,K,R 10:00-13:00 N 12:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-03T08:13:02.013+03:00",
  },
  {
    ZIP: "79098",
    NAME: "Lelle postipunkt",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Kehtna vald",
    A3_NAME: "Lelle alevik",

    A5_NAME: "Viljandi mnt",

    A7_NAME: "46",

    X_COORDINATE: "25.005284",
    Y_COORDINATE: "58.860625",
    SERVICE_HOURS:
      "E,T,N,R 10:00-17:00 L,P SULETUD;Alates 10.05.2021: K 14:00-18:00",

    MODIFIED: "2021-05-10T07:19:56.123+03:00",
  },
  {
    ZIP: "77731",
    NAME: "Lentvario IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Trak\u0173 r. sav.",
    A3_NAME: "Lentvario m.",

    A5_NAME: "Gele\u017einkelio g.",

    A7_NAME: "38",

    X_COORDINATE: "25.046643",
    Y_COORDINATE: "54.644196",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:54:56.663+03:00",
  },
  {
    ZIP: "87294",
    NAME: "Libatse postipunkt (raamatukogu)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "Libatse k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.482989",
    Y_COORDINATE: "58.658579",
    SERVICE_HOURS:
      "E 10:00-12:00, 12:30-17:00 N 11:00-12:00, 12:30-18:00 T,K,R,L,P SULETUD",
    TEMP_SERVICE_HOURS: "07.06.2021: E 13:00-17:00;21.06.2021: 13:00-17:00",
    TEMP_SERVICE_HOURS_UNTIL: "21.06.2021",

    MODIFIED: "2021-06-04T08:34:02.407+03:00",
  },
  {
    ZIP: "9124",
    NAME: "Lielv\u0101rdes Maxima X pakom\u0101ts",

    A1_NAME: "Lielv\u0101rdes novads",
    A2_NAME: "Lielv\u0101rde",
    A3_NAME: "",

    A5_NAME: "L\u0101\u010dpl\u0113\u0161a iela",

    A7_NAME: "14",

    X_COORDINATE: "24.814776",
    Y_COORDINATE: "56.718228",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T13:03:25.653+02:00",
  },
  {
    ZIP: "9206",
    NAME: "Liep\u0101jas Gan\u012bbu ielas ELVI pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gan\u012bbu iela",

    A7_NAME: "69/71",

    X_COORDINATE: "21.019120",
    Y_COORDINATE: "56.502580",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:24:02.690+02:00",
  },
  {
    ZIP: "9108",
    NAME: "Liep\u0101jas Gan\u012bbu ielas JYSK pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gan\u012bbu iela",

    A7_NAME: "187",

    X_COORDINATE: "21.016235",
    Y_COORDINATE: "56.484127",

    comment_lav: "Pie veikala fas\u0101des, tramvaja slie\u017eu pus\u0113",

    MODIFIED: "2021-04-29T10:13:47.443+03:00",
  },
  {
    ZIP: "9926",
    NAME: "Liep\u0101jas Ro\u017eu laukums pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Liel\u0101 iela",

    A7_NAME: "13",

    X_COORDINATE: "21.010697",
    Y_COORDINATE: "56.507489",

    comment_lav: "Blakus restor\u0101na Barons Bumbieris ieejai",

    MODIFIED: "2020-11-13T06:43:03.710+02:00",
  },
  {
    ZIP: "9917",
    NAME: "Liep\u0101jas T/C Baata pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Klaip\u0113das iela",

    A7_NAME: "104C",

    X_COORDINATE: "21.004957",
    Y_COORDINATE: "56.486786",

    comment_lav: "Blakus T/C ieejai no st\u0101vlaukuma puses",

    MODIFIED: "2021-01-14T07:19:23.597+02:00",
  },
  {
    ZIP: "9966",
    NAME: "Liep\u0101jas T/C Rietumu centrs pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Jaun\u0101 ostmala",

    A7_NAME: "3/5",

    X_COORDINATE: "21.018219",
    Y_COORDINATE: "56.515010",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-12T12:51:44.547+02:00",
  },
  {
    ZIP: "9938",
    NAME: "Liep\u0101jas Zieme\u013cu ielas RIMI pakom\u0101ts",

    A1_NAME: "Liep\u0101ja",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Zieme\u013cu iela",

    A7_NAME: "13",

    X_COORDINATE: "21.012732",
    Y_COORDINATE: "56.535186",

    MODIFIED: "2020-11-13T06:55:59.460+02:00",
  },
  {
    ZIP: "96119",
    NAME: "Lihula Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Lihula linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "12",

    X_COORDINATE: "23.834367",
    Y_COORDINATE: "58.688219",

    MODIFIED: "2020-11-16T06:28:30.513+02:00",
  },
  {
    ZIP: "90394",
    NAME: "Lihula postipunkt (raamatukogu)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Lihula linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "25",

    X_COORDINATE: "23.834562",
    Y_COORDINATE: "58.687289",
    SERVICE_HOURS:
      "Alates 28.05.2021: T,K,N,R 11:00-15:00 L 12:00-14:00;E,P SULETUD",

    MODIFIED: "2021-05-28T07:46:13.973+03:00",
  },
  {
    ZIP: "69005",
    NAME: "Lilli postipunkt (Lilli K\u00fclamaja)",

    A2_NAME: "Mulgi vald",
    A3_NAME: "Lilli k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "25.536624",
    Y_COORDINATE: "57.993114",
    SERVICE_HOURS: "E,T,K,N,R 09:00-15:00 L,P SULETUD",

    MODIFIED: "2021-05-24T14:33:58.047+03:00",
  },
  {
    ZIP: "9942",
    NAME: "Limba\u017eu Maxima XX pakom\u0101ts",

    A1_NAME: "Limba\u017eu novads",
    A2_NAME: "Limba\u017ei",
    A3_NAME: "",

    A5_NAME: "Stacijas iela",

    X_COORDINATE: "24.722431",
    Y_COORDINATE: "57.513751",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T07:11:13.670+02:00",
  },
  {
    ZIP: "91092",
    NAME: "Linnam\u00e4e postipunkt",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Linnam\u00e4e k\u00fcla",

    A5_NAME: "Hansuk\u00fcla tee",

    A7_NAME: "2/1",

    X_COORDINATE: "23.718437",
    Y_COORDINATE: "58.995820",
    SERVICE_HOURS:
      "E,K 09:00-17:00 T,N 13:00-19:00 R,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-10T11:50:02.947+03:00",
  },
  {
    ZIP: "96134",
    NAME: "Loksa Grossi pakiautomaat",

    A2_NAME: "Loksa linn",
    A3_NAME: "",

    A5_NAME: "Rohuaia tn",

    X_COORDINATE: "25.727932",
    Y_COORDINATE: "59.579123",

    MODIFIED: "2021-05-28T08:30:48.113+03:00",
  },
  {
    ZIP: "74801",
    NAME: "Loksa postkontor",

    A2_NAME: "Loksa linn",
    A3_NAME: "",

    A5_NAME: "Papli tn",

    X_COORDINATE: "25.721530",
    Y_COORDINATE: "59.582049",
    SERVICE_HOURS: "E,K 10:00-16:00 T,N 10:00-18:00 R 10:00-15:00 L,P SULETUD",

    MODIFIED: "2021-04-19T12:24:13.060+03:00",
  },
  {
    ZIP: "96171",
    NAME: "Loo Grossi pakiautomaat",

    A2_NAME: "J\u00f5el\u00e4htme vald",
    A3_NAME: "Loo alevik",

    A5_NAME: "Saha tee",

    X_COORDINATE: "24.947421",
    Y_COORDINATE: "59.434441",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "74291",
    NAME: "Loo postkontor",

    A2_NAME: "J\u00f5el\u00e4htme vald",
    A3_NAME: "Loo alevik",

    A5_NAME: "Saha tee",

    A7_NAME: "11",

    X_COORDINATE: "24.948194",
    Y_COORDINATE: "59.434983",
    SERVICE_HOURS:
      "E 15:00-19:00 T,N 14:00-18:00 K,R 10:00-13:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-06-01T11:12:50.527+03:00",
  },
  {
    ZIP: "9217",
    NAME: "Lub\u0101nas O.Kalpaka ielas Vesko pakom\u0101ts",

    A1_NAME: "Lub\u0101nas novads",
    A2_NAME: "Lub\u0101na",
    A3_NAME: "",

    A5_NAME: "Oskara Kalpaka iela",

    X_COORDINATE: "26.721942",
    Y_COORDINATE: "56.902109",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:00:25.400+02:00",
  },
  {
    ZIP: "9985",
    NAME: "Ludzas Maxima X pakom\u0101ts",

    A1_NAME: "Ludzas novads",
    A2_NAME: "Ludza",
    A3_NAME: "",

    A5_NAME: "Latgales iela",

    A7_NAME: "61",

    X_COORDINATE: "27.711395",
    Y_COORDINATE: "56.543853",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T08:43:57.407+02:00",
  },
  {
    ZIP: "65622",
    NAME: "Luha postkontor",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru linn",
    A3_NAME: "",

    A5_NAME: "J\u00fcri tn",

    A7_NAME: "22a",

    X_COORDINATE: "26.997745",
    Y_COORDINATE: "57.846349",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-12:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "17.06.2021 kuni 02.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "02.07.2021",

    MODIFIED: "2021-06-01T13:23:54.883+03:00",
  },
  {
    ZIP: "48093",
    NAME: "Lustivere postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "P\u00f5ltsamaa vald",
    A3_NAME: "Lustivere k\u00fcla",

    A5_NAME: "Kooli tee",

    X_COORDINATE: "26.092542",
    Y_COORDINATE: "58.662041",
    SERVICE_HOURS:
      "Kuni 09.03.2021: E,T,K,N,R 10:00-17:00;Alates 10.03.2021: E,T,K,N,R,L,P 09:00-19:00",

    MODIFIED: "2021-03-05T09:27:11.943+02:00",
  },
  {
    ZIP: "62223",
    NAME: "Luunja postiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Luunja vald",
    A3_NAME: "Luunja alevik",

    A5_NAME: "Puiestee tn",

    X_COORDINATE: "26.882264",
    Y_COORDINATE: "58.356181",

    MODIFIED: "2021-01-22T02:00:06.530+02:00",
  },
  {
    ZIP: "62294",
    NAME: "Luunja postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Luunja vald",
    A3_NAME: "Luunja alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.885681",
    Y_COORDINATE: "58.358796",
    SERVICE_HOURS: "T,N 10:00-18:00 K,R 10:00-17:00 L 10:00-14:00 E,P SULETUD",
    TEMP_SERVICE_HOURS: "AJUTISELT SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2020-11-16T06:40:40.327+02:00",
  },
  {
    ZIP: "88444",
    NAME: "L\u00f5pe postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "L\u00f5pe k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Klubi",

    X_COORDINATE: "23.987402",
    Y_COORDINATE: "58.571145",

    MODIFIED: "2021-04-05T06:17:35.673+03:00",
  },
  {
    ZIP: "50500",
    NAME: "L\u00f5unakeskuse postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Ringtee tn",

    A7_NAME: "75",

    X_COORDINATE: "26.677611",
    Y_COORDINATE: "58.357394",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:24:17.063+03:00",
  },
  {
    ZIP: "93394",
    NAME: "L\u00fcmanda postipunkt (Kultuurimaja)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "L\u00fcmanda k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Keskusehoone",
    A7_NAME: "",

    X_COORDINATE: "22.025563",
    Y_COORDINATE: "58.285500",
    SERVICE_HOURS: "T,K,R 10:00-17:00 E,N,L,P SULETUD",

    MODIFIED: "2021-03-30T11:34:47.413+03:00",
  },
  {
    ZIP: "9983",
    NAME: "L\u012bv\u0101nu Rimi pakom\u0101ts",

    A1_NAME: "L\u012bv\u0101nu novads",
    A2_NAME: "L\u012bv\u0101ni",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "89",

    X_COORDINATE: "26.174534",
    Y_COORDINATE: "56.354633",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T08:42:35.553+02:00",
  },
  {
    ZIP: "96300",
    NAME: "Maardu Maxima X pakiautomaat",

    A2_NAME: "Maardu linn",
    A3_NAME: "",

    A5_NAME: "Keemikute tn",

    A7_NAME: "37",

    X_COORDINATE: "25.017147",
    Y_COORDINATE: "59.482743",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96081",
    NAME: "Maardu Maxima XX pakiautomaat",

    A2_NAME: "Maardu linn",
    A3_NAME: "",

    A5_NAME: "Keemikute tn",

    X_COORDINATE: "25.019637",
    Y_COORDINATE: "59.473515",

    MODIFIED: "2021-05-26T07:26:29.060+03:00",
  },
  {
    ZIP: "96130",
    NAME: "Maardu P\u00e4rli Keskuse pakiautomaat",

    A2_NAME: "Maardu linn",
    A3_NAME: "",

    A5_NAME: "Nurga tn",

    X_COORDINATE: "25.017923",
    Y_COORDINATE: "59.486818",

    MODIFIED: "2021-05-28T08:11:35.837+03:00",
  },
  {
    ZIP: "74101",
    NAME: "Maardu postkontor",

    A2_NAME: "Maardu linn",
    A3_NAME: "",

    A5_NAME: "Keemikute tn",

    X_COORDINATE: "25.020554",
    Y_COORDINATE: "59.473620",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:24:07.487+03:00",
  },
  {
    ZIP: "9186",
    NAME: "Madlienas ELVI pakom\u0101ts",

    A1_NAME: "Ogres novads",
    A2_NAME: "Madlienas pagasts",
    A3_NAME: "Madliena",

    A5_NAME: "",
    A6_NAME: "Tirdzniec\u012bbas centrs",
    A7_NAME: "",
    A8_NAME: "1",
    X_COORDINATE: "25.156732",
    Y_COORDINATE: "56.846573",

    MODIFIED: "2021-01-14T07:02:33.503+02:00",
  },
  {
    ZIP: "9944",
    NAME: "Madonas Maxima XX pakom\u0101ts",

    A1_NAME: "Madonas novads",
    A2_NAME: "Madona",
    A3_NAME: "",

    A5_NAME: "R\u016bpniec\u012bbas iela",

    A7_NAME: "49",

    X_COORDINATE: "26.231100",
    Y_COORDINATE: "56.860005",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T07:12:25.277+02:00",
  },
  {
    ZIP: "9195",
    NAME: "Madonas Saules ielas 4 pakom\u0101ts",

    A1_NAME: "Madonas novads",
    A2_NAME: "Madona",
    A3_NAME: "",

    A5_NAME: "Saules iela",

    X_COORDINATE: "26.220383",
    Y_COORDINATE: "56.851163",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:59:36.127+02:00",
  },
  {
    ZIP: "77798",
    NAME: "Mai\u0161iagalos MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Mai\u0161iagalos mstl.",

    A5_NAME: "Mokyklos g.",

    X_COORDINATE: "25.064253",
    Y_COORDINATE: "54.870770",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:20:44.367+03:00",
  },
  {
    ZIP: "55532",
    NAME: "Marijampol\u0117s IKI Vilkavi\u0161kio g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Marijampol\u0117s sav.",
    A3_NAME: "Marijampol\u0117s m.",

    A5_NAME: "Vilkavi\u0161kio g.",

    A7_NAME: "72",

    X_COORDINATE: "23.332504",
    Y_COORDINATE: "54.563469",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-03-04T14:23:05.443+02:00",
  },
  {
    ZIP: "55533",
    NAME: "Marijampol\u0117s IKI Vytauto pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Marijampol\u0117s sav.",
    A3_NAME: "Marijampol\u0117s m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "48A",

    X_COORDINATE: "23.345657",
    Y_COORDINATE: "54.545745",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-03-25T14:39:04.720+02:00",
  },
  {
    ZIP: "88899",
    NAME: "Marijampol\u0117s MAXIMA Ba\u017eny\u010dios pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Marijampol\u0117s sav.",
    A3_NAME: "Marijampol\u0117s m.",

    A5_NAME: "Ba\u017eny\u010dios g.",

    A7_NAME: "38",

    X_COORDINATE: "23.346449",
    Y_COORDINATE: "54.556047",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Laisv\u0117s g. pus\u0117s",
    MODIFIED: "2021-02-17T06:04:37.717+02:00",
  },
  {
    ZIP: "88856",
    NAME: "Marijampol\u0117s PC ARENA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Marijampol\u0117s sav.",
    A3_NAME: "Marijampol\u0117s m.",

    A5_NAME: "Dariaus ir Gir\u0117no g.",

    A7_NAME: "3A",

    X_COORDINATE: "23.354530",
    Y_COORDINATE: "54.560951",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f JYSK pus\u0117je",
    MODIFIED: "2021-02-11T10:30:28.550+02:00",
  },
  {
    ZIP: "90694",
    NAME: "Martna postipunkt (raamatukogu)",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Martna k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "23.802975",
    Y_COORDINATE: "58.856442",
    SERVICE_HOURS: "E,K,R 09:30-12:00, 13:00-16:30 T,N,L,P SULETUD",

    MODIFIED: "2021-02-11T13:28:37.550+02:00",
  },
  {
    ZIP: "77711",
    NAME: "Ma\u017eeiki\u0173 IKI Ventos pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Ma\u017eeiki\u0173 r. sav.",
    A3_NAME: "Ma\u017eeiki\u0173 m.",

    A5_NAME: "Ventos g.",

    A7_NAME: "10B",

    X_COORDINATE: "22.324128",
    Y_COORDINATE: "56.308725",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-20T06:47:13.863+03:00",
  },
  {
    ZIP: "55585",
    NAME: "Ma\u017eeiki\u0173 MAXIMA Laisv\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Ma\u017eeiki\u0173 r. sav.",
    A3_NAME: "Ma\u017eeiki\u0173 m.",

    A5_NAME: "Laisv\u0117s g.",

    A7_NAME: "56",

    X_COORDINATE: "22.340442",
    Y_COORDINATE: "56.317254",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T06:48:10.500+03:00",
  },
  {
    ZIP: "88857",
    NAME: "Ma\u017eeiki\u0173 PC EIFELIS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Ma\u017eeiki\u0173 r. sav.",
    A3_NAME: "Ma\u017eeiki\u0173 m.",

    A5_NAME: "\u017demaitijos g.",

    A7_NAME: "72",

    X_COORDINATE: "22.353653",
    Y_COORDINATE: "56.299740",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f NORFA pus\u0117je",
    MODIFIED: "2020-12-23T12:15:09.970+02:00",
  },
  {
    ZIP: "55586",
    NAME: "Ma\u017eeiki\u0173 RIMI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Ma\u017eeiki\u0173 r. sav.",
    A3_NAME: "Ma\u017eeiki\u0173 m.",

    A5_NAME: "\u017demaitijos g.",

    A7_NAME: "38",

    X_COORDINATE: "22.340116",
    Y_COORDINATE: "56.302722",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:50:49.547+03:00",
  },
  {
    ZIP: "62594",
    NAME: "Mehikoorma postipunkt (Coop)",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "Mehikoorma alevik",

    A5_NAME: "Kesk tn",

    A7_NAME: "20",

    X_COORDINATE: "27.469604",
    Y_COORDINATE: "58.235507",
    SERVICE_HOURS: "E,T,K,N,R 10:00-15:00 L,P 10:00-13:00",

    MODIFIED: "2021-04-13T12:39:38.503+03:00",
  },
  {
    ZIP: "62320",
    NAME: "Melliste postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kastre vald",
    A3_NAME: "Melliste k\u00fcla",

    A5_NAME: "Aabitsa tee",

    X_COORDINATE: "26.982968",
    Y_COORDINATE: "58.331882",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-01-21T13:46:58.043+02:00",
  },
  {
    ZIP: "65046",
    NAME: "Misso postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "Misso alevik",

    A5_NAME: "Riia mnt",

    A7_NAME: "23",

    X_COORDINATE: "27.226391",
    Y_COORDINATE: "57.600610",
    SERVICE_HOURS:
      "Alates 04.05.2021: E,T,K,N,R,L,P 10:00-21:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-04T10:12:51.113+03:00",
  },
  {
    ZIP: "77712",
    NAME: "Mol\u0117t\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Mol\u0117t\u0173 r. sav.",
    A3_NAME: "Mol\u0117t\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "99",

    X_COORDINATE: "25.405169",
    Y_COORDINATE: "55.224741",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:37:37.530+03:00",
  },
  {
    ZIP: "64691",
    NAME: "Mooste postipunkt (M\u00f5isa k\u00fclalistemaja)",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "Mooste alevik",

    A5_NAME: "M\u00f5isahoovi tee",

    X_COORDINATE: "27.195050",
    Y_COORDINATE: "58.161737",
    SERVICE_HOURS:
      "E,T,N,R 10:00-14:00 K 13:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-13T13:11:02.157+03:00",
  },
  {
    ZIP: "96161",
    NAME: "Muhu Liiva Alexela pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Muhu vald",
    A3_NAME: "Liiva k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Liiva tankla",
    A7_NAME: "",

    X_COORDINATE: "23.235961",
    Y_COORDINATE: "58.605250",

    MODIFIED: "2020-06-29T07:00:22.913+03:00",
  },
  {
    ZIP: "96239",
    NAME: "Muraste Coop Konsumi pakiautomaat ",

    A2_NAME: "Harku vald",
    A3_NAME: "Muraste k\u00fcla",

    A5_NAME: "Lee tee",

    X_COORDINATE: "24.443963",
    Y_COORDINATE: "59.454904",

    MODIFIED: "2021-05-19T05:35:04.513+03:00",
  },
  {
    ZIP: "13401",
    NAME: "Mustam\u00e4e postkontor",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "S\u00f5pruse pst",

    A7_NAME: "209",

    X_COORDINATE: "24.694601",
    Y_COORDINATE: "59.400239",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-12T06:10:46.663+03:00",
  },
  {
    ZIP: "12701",
    NAME: "Mustika postkontor",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Karjav\u00e4lja tn",

    X_COORDINATE: "24.681539",
    Y_COORDINATE: "59.410937",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:28:01.630+03:00",
  },
  {
    ZIP: "93694",
    NAME: "Mustjala postipunkt",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Mustjala k\u00fcla",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "22.230322",
    Y_COORDINATE: "58.463265",
    SERVICE_HOURS: "E,T,K,N 08:00-16:00 R,L,P SULETUD",
    TEMP_SERVICE_HOURS: "21.06.2021 kuni 06.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "06.07.2021",

    MODIFIED: "2021-06-03T13:14:30.260+03:00",
  },
  {
    ZIP: "69794",
    NAME: "Mustla postipunkt",

    A2_NAME: "Viljandi vald",
    A3_NAME: "Mustla alevik",

    A5_NAME: "Posti tn",

    A7_NAME: "52b",

    X_COORDINATE: "25.866224",
    Y_COORDINATE: "58.234933",
    SERVICE_HOURS: "E,K,N,R 09:00-17:00 T 09:00-18:00 L 09:00-14:00 P SULETUD",
    TEMP_SERVICE_HOURS: "07.06.2021: SULETUD;09.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "09.06.2021",

    MODIFIED: "2021-05-25T12:34:03.297+03:00",
  },
  {
    ZIP: "96163",
    NAME: "Mustvee Coop Konsumi pakiautomaat",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "Mustvee vald",
    A3_NAME: "Mustvee linn",

    A5_NAME: "Tartu tn",

    X_COORDINATE: "26.944813",
    Y_COORDINATE: "58.847951",

    MODIFIED: "2020-11-11T07:55:12.710+02:00",
  },
  {
    ZIP: "49694",
    NAME: "Mustvee postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "Mustvee vald",
    A3_NAME: "Mustvee linn",

    A5_NAME: "Tartu tn",

    X_COORDINATE: "26.941730",
    Y_COORDINATE: "58.848209",
    SERVICE_HOURS:
      "E,T,K,R 10:00-17:00 P 10:00-14:00 N,L SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T09:04:11.933+03:00",
  },
  {
    ZIP: "96228",
    NAME: "Muuga Maxima X pakiautomaat",

    A2_NAME: "Maardu linn",
    A3_NAME: "",

    A5_NAME: "Altmetsa tee",

    X_COORDINATE: "24.916478",
    Y_COORDINATE: "59.474072",

    MODIFIED: "2021-05-24T05:28:13.887+03:00",
  },
  {
    ZIP: "41394",
    NAME: "M\u00e4etaguse postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Alutaguse vald",
    A3_NAME: "M\u00e4etaguse alevik",

    A5_NAME: "Kooli tn",

    A7_NAME: "21",

    X_COORDINATE: "27.292325",
    Y_COORDINATE: "59.221872",
    SERVICE_HOURS:
      "E,T,K,N,R 10:30-13:00, 14:00-17:30 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-29T14:45:03.863+03:00",
  },
  {
    ZIP: "96051",
    NAME: "M\u00e4rjamaa Maxima X pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "M\u00e4rjamaa vald",
    A3_NAME: "M\u00e4rjamaa alev",

    A5_NAME: "Kasti tee",

    X_COORDINATE: "24.433376",
    Y_COORDINATE: "58.909754",

    MODIFIED: "2021-04-16T08:52:28.783+03:00",
  },
  {
    ZIP: "78391",
    NAME: "M\u00e4rjamaa postkontor",

    A1_NAME: "Rapla maakond",
    A2_NAME: "M\u00e4rjamaa vald",
    A3_NAME: "M\u00e4rjamaa alev",

    A5_NAME: "Veski tn",

    X_COORDINATE: "24.427775",
    Y_COORDINATE: "58.903772",
    SERVICE_HOURS:
      "E,K,N,R 10:00-17:00 T 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2: "05.06.2021 kuni 13.06.2021: E,T,K,N,R 12:00-16:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "13.06.2021",

    MODIFIED: "2021-05-24T14:39:24.833+03:00",
  },
  {
    ZIP: "69394",
    NAME: "M\u00f5isak\u00fcla postipunkt",

    A2_NAME: "Mulgi vald",
    A3_NAME: "M\u00f5isak\u00fcla linn",

    A5_NAME: "J. Sihveri tn",

    X_COORDINATE: "25.186386",
    Y_COORDINATE: "58.092428",
    SERVICE_HOURS: "T,K,N,R 10:00-15:00 L 10:00-14:00 E,P SULETUD",

    MODIFIED: "2021-05-06T13:57:16.020+03:00",
  },
  {
    ZIP: "66094",
    NAME: "M\u00f5niste postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "M\u00f5niste k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.608240",
    Y_COORDINATE: "57.613922",
    SERVICE_HOURS:
      "E,T,K,N,R 13:00-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-01-30T09:44:06.080+02:00",
  },
  {
    ZIP: "9145",
    NAME: "M\u0101lpils Pirts ielas TOP pakom\u0101ts",

    A1_NAME: "M\u0101lpils novads",
    A2_NAME: "",
    A3_NAME: "M\u0101lpils",

    A5_NAME: "Pirts iela",

    X_COORDINATE: "24.959374",
    Y_COORDINATE: "57.011393",

    MODIFIED: "2020-11-12T13:57:29.177+02:00",
  },
  {
    ZIP: "9967",
    NAME: "M\u0101rupes RIMI pakom\u0101ts",

    A1_NAME: "M\u0101rupes novads",
    A2_NAME: "",
    A3_NAME: "M\u0101rupe",

    A5_NAME: "Daugavas iela",

    A7_NAME: "29",

    X_COORDINATE: "24.055647",
    Y_COORDINATE: "56.905257",

    comment_lav: "pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-02-02T07:30:36.993+02:00",
  },
  {
    ZIP: "96028",
    NAME: "Narva Astri Keskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "41",

    X_COORDINATE: "28.176048",
    Y_COORDINATE: "59.380584",

    MODIFIED: "2021-04-13T13:45:57.483+03:00",
  },
  {
    ZIP: "96072",
    NAME: "Narva Fama keskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Fama tn",

    X_COORDINATE: "28.185732",
    Y_COORDINATE: "59.378607",

    MODIFIED: "2021-05-31T05:29:16.430+03:00",
  },
  {
    ZIP: "96218",
    NAME: "Narva Kerese keskuse pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "P. Kerese tn",

    X_COORDINATE: "28.192250",
    Y_COORDINATE: "59.375589",

    MODIFIED: "2020-12-21T12:16:35.367+02:00",
  },
  {
    ZIP: "96091",
    NAME: "Narva Kreenholmi Maxima XX pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Kreenholmi tn",

    A7_NAME: "52",

    X_COORDINATE: "28.187015",
    Y_COORDINATE: "59.364556",

    MODIFIED: "2020-12-09T07:28:42.077+02:00",
  },
  {
    ZIP: "96217",
    NAME: "Narva Megamarketi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Rakvere tn",

    A7_NAME: "71",

    X_COORDINATE: "28.184184",
    Y_COORDINATE: "59.385803",

    MODIFIED: "2019-07-23T11:14:10.740+03:00",
  },
  {
    ZIP: "96125",
    NAME: "Narva Prisma pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Kangelaste prospekt",

    A7_NAME: "29",

    X_COORDINATE: "28.179041",
    Y_COORDINATE: "59.386675",

    MODIFIED: "2020-12-21T12:04:05.757+02:00",
  },
  {
    ZIP: "21001",
    NAME: "Narva Tempo postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "52",

    X_COORDINATE: "28.165026",
    Y_COORDINATE: "59.382033",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:52:42.630+03:00",
  },
  {
    ZIP: "96182",
    NAME: "Narva Tiimani Maxima XX pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "A-A. Tiimanni tn",

    A7_NAME: "20",

    X_COORDINATE: "28.165240",
    Y_COORDINATE: "59.380655",

    MODIFIED: "2021-05-14T10:20:31.207+03:00",
  },
  {
    ZIP: "29094",
    NAME: "Narva-J\u00f5esuu postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva-J\u00f5esuu linn",
    A3_NAME: "Narva-J\u00f5esuu linn",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "28.041597",
    Y_COORDINATE: "59.459856",
    SERVICE_HOURS:
      "E,T,K,N,R 12:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-21T08:02:09.647+03:00",
  },
  {
    ZIP: "29001",
    NAME: "Narva-J\u00f5esuu postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva-J\u00f5esuu linn",
    A3_NAME: "Narva-J\u00f5esuu linn",

    A5_NAME: "Koidu tn",

    A7_NAME: "25",

    X_COORDINATE: "28.041185",
    Y_COORDINATE: "59.460552",
    SERVICE_HOURS: "E,T,K,N,R 11:00-13:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "AJUTISELT SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-14T08:53:19.927+03:00",
  },
  {
    ZIP: "96326",
    NAME: "Narva-J\u00f5esuu raamatukogu pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva-J\u00f5esuu linn",
    A3_NAME: "Narva-J\u00f5esuu linn",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "28.041597",
    Y_COORDINATE: "59.459858",

    MODIFIED: "2021-03-01T08:54:04.290+02:00",
  },
  {
    ZIP: "88808",
    NAME: "Naujosios Akmen\u0117s NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Akmen\u0117s r. sav.",
    A3_NAME: "Naujosios Akmen\u0117s m.",

    A5_NAME: "Respublikos g.",

    A7_NAME: "30",

    X_COORDINATE: "22.873482",
    Y_COORDINATE: "56.319827",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119, u\u017e kampo ",
    MODIFIED: "2020-12-23T14:59:53.897+02:00",
  },
  {
    ZIP: "77799",
    NAME: "Nemen\u010din\u0117s AIB\u0116 \u0160ven\u010dioni\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Nemen\u010din\u0117s m.",

    A5_NAME: "\u0160ven\u010dioni\u0173 g.",

    A7_NAME: "72",

    X_COORDINATE: "25.470759",
    Y_COORDINATE: "54.850996",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:29:41.920+03:00",
  },
  {
    ZIP: "9214",
    NAME: "Neretas TOP pakom\u0101ts",

    A1_NAME: "Neretas novads",
    A2_NAME: "Neretas pagasts",
    A3_NAME: "Nereta",

    A5_NAME: "Rai\u0146a iela",

    X_COORDINATE: "25.307617",
    Y_COORDINATE: "56.204237",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:21:54.733+02:00",
  },
  {
    ZIP: "55561",
    NAME: "Nidos AUTOBUS\u0172 STOTIS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Neringos sav.",
    A3_NAME: "Neringos m.",

    A5_NAME: "Nagli\u0173 g.",

    A7_NAME: "18E",

    X_COORDINATE: "21.007158",
    Y_COORDINATE: "55.304031",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f pastat\u0105 pus\u0117je",
    MODIFIED: "2020-12-27T20:03:52.457+02:00",
  },
  {
    ZIP: "13591",
    NAME: "Nurmenuku postkontor",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "\u00d5ism\u00e4e tee",

    A7_NAME: "1b",

    X_COORDINATE: "24.654743",
    Y_COORDINATE: "59.413873",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:28:49.703+03:00",
  },
  {
    ZIP: "11601",
    NAME: "N\u00f5mme postkontor",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Jaama tn",

    X_COORDINATE: "24.684545",
    Y_COORDINATE: "59.387709",
    SERVICE_HOURS: "E,T,K,N,R 10:00-19:00 L,P SULETUD",

    MODIFIED: "2021-03-23T08:47:11.563+02:00",
  },
  {
    ZIP: "61625",
    NAME: "N\u00f5o postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "N\u00f5o vald",
    A3_NAME: "N\u00f5o alevik",

    A5_NAME: "Voika tn",

    A7_NAME: "23",

    X_COORDINATE: "26.521201",
    Y_COORDINATE: "58.272552",
    SERVICE_HOURS: "E,T,K,R 09:00-11:00 N 15:00-17:00 L,P SULETUD",
    TEMP_SERVICE_HOURS:
      "15.06.2021: SULETUD;21.06.2021 kuni 06.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "06.07.2021",

    MODIFIED: "2021-06-01T11:08:22.137+03:00",
  },
  {
    ZIP: "96152",
    NAME: "N\u00f5o vallamaja pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "N\u00f5o vald",
    A3_NAME: "N\u00f5o alevik",

    A5_NAME: "Voika tn",

    A7_NAME: "23",

    X_COORDINATE: "26.521202",
    Y_COORDINATE: "58.272562",

    MODIFIED: "2020-12-14T07:54:23.307+02:00",
  },
  {
    ZIP: "91194",
    NAME: "N\u00f5va postipunkt (raamatukogu)",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "N\u00f5va k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "23.678420",
    Y_COORDINATE: "59.221736",
    SERVICE_HOURS:
      "E,T,K 09:00-15:00 N 11:00-18:00 R,L SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2:
      "14.06.2021 kuni 31.08.2021: E,T,K 10:00-16:00 P 10:00-17:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "31.08.2021",

    MODIFIED: "2021-06-04T08:56:44.600+03:00",
  },
  {
    ZIP: "65394",
    NAME: "Obinitsa postipunkt (raamatukogu)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Setomaa vald",
    A3_NAME: "Obinitsa k\u00fcla",

    A5_NAME: "Muuseumi tn",

    A7_NAME: "",

    X_COORDINATE: "27.446219",
    Y_COORDINATE: "57.811928",
    SERVICE_HOURS:
      "Kuni 14.06.2021: E,K,R 09:00-15:30 T,N 09:00-17:30;Alates 15.06.2021: E,K,R 09:30-15:00 T,N 09:30-17:30;L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "09.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "09.06.2021",

    MODIFIED: "2021-06-01T13:28:21.043+03:00",
  },
  {
    ZIP: "9133",
    NAME: "Ogres R\u012bgas ielas RIMI pakom\u0101ts",

    A1_NAME: "Ogres novads",
    A2_NAME: "Ogre",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    X_COORDINATE: "24.576959",
    Y_COORDINATE: "56.817546",

    comment_lav: "Pa kreisi no T/C ieejas",

    MODIFIED: "2020-11-12T13:38:11.087+02:00",
  },
  {
    ZIP: "9953",
    NAME: "Ogres T/C Dauga pakom\u0101ts",

    A1_NAME: "Ogres novads",
    A2_NAME: "Ogre",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "23",

    X_COORDINATE: "24.585355",
    Y_COORDINATE: "56.816508",

    comment_lav:
      "Iebraucot T/C Dauga auto st\u0101vviet\u0101, pa labi no ieejas uz st\u016bra",

    MODIFIED: "2020-11-13T07:31:26.077+02:00",
  },
  {
    ZIP: "9925",
    NAME: "Ogres T/C Ogres presti\u017es pakom\u0101ts",

    A1_NAME: "Ogres novads",
    A2_NAME: "Ogre",
    A3_NAME: "",

    A5_NAME: "Mednieku iela",

    A7_NAME: "21/23",

    X_COORDINATE: "24.602722",
    Y_COORDINATE: "56.825130",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:41:44.143+02:00",
  },
  {
    ZIP: "72391",
    NAME: "Oisu postipunkt",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "T\u00fcri vald",
    A3_NAME: "Oisu alevik",

    A5_NAME: "Retla tee",

    X_COORDINATE: "25.565153",
    Y_COORDINATE: "58.757114",
    SERVICE_HOURS: "E,T,K,N,R 10:00-17:00 L,P SULETUD",

    MODIFIED: "2021-05-24T14:32:03.257+03:00",
  },
  {
    ZIP: "9949",
    NAME: "Olaines Maxima X pakom\u0101ts",

    A1_NAME: "Olaines novads",
    A2_NAME: "Olaine",
    A3_NAME: "",

    A5_NAME: "Vesel\u012bbas iela",

    X_COORDINATE: "23.936511",
    Y_COORDINATE: "56.784570",

    comment_lav: "T/C labaj\u0101 pus\u0113",

    MODIFIED: "2020-11-13T07:24:29.383+02:00",
  },
  {
    ZIP: "70494",
    NAME: "Olustvere postipunkt",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "Olustvere alevik",

    A5_NAME: "P\u00e4ikese tn",

    X_COORDINATE: "25.557936",
    Y_COORDINATE: "58.555909",
    SERVICE_HOURS: "E,T,K,N,R,L,P 09:00-20:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-29T12:34:19.493+03:00",
  },
  {
    ZIP: "96106",
    NAME: "Orissaare Coop Konsumi pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Orissaare alevik",

    A5_NAME: "Kuivastu mnt",

    A7_NAME: "28",

    X_COORDINATE: "23.082607",
    Y_COORDINATE: "58.558767",

    MODIFIED: "2020-11-11T07:56:32.190+02:00",
  },
  {
    ZIP: "94691",
    NAME: "Orissaare postkontor",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Orissaare alevik",

    A5_NAME: "Sadama tn",

    X_COORDINATE: "23.083900",
    Y_COORDINATE: "58.559627",
    SERVICE_HOURS: "E,K,N 09:00-14:00 T,R,L,P SULETUD",
    TEMP_SERVICE_HOURS: "16.06.2021 kuni 01.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "01.07.2021",

    MODIFIED: "2021-06-01T11:14:14.230+03:00",
  },
  {
    ZIP: "66643",
    NAME: "Osula postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru vald",
    A3_NAME: "Osula k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.822875",
    Y_COORDINATE: "57.885244",
    SERVICE_HOURS:
      "Alates 04.05.2021: E,T,K,N,R,L,P 10:00-21:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-04T10:13:39.770+03:00",
  },
  {
    ZIP: "96137",
    NAME: "Otep\u00e4\u00e4 Maxima X pakiautomaat",

    A1_NAME: "Valga maakond",
    A2_NAME: "Otep\u00e4\u00e4 vald",
    A3_NAME: "Otep\u00e4\u00e4 linn",

    A5_NAME: "Valga mnt",

    A7_NAME: "1b",

    X_COORDINATE: "26.497438",
    Y_COORDINATE: "58.058788",

    MODIFIED: "2020-11-11T07:57:03.900+02:00",
  },
  {
    ZIP: "67401",
    NAME: "Otep\u00e4\u00e4 postkontor",

    A1_NAME: "Valga maakond",
    A2_NAME: "Otep\u00e4\u00e4 vald",
    A3_NAME: "Otep\u00e4\u00e4 linn",

    A5_NAME: "Tartu mnt",

    X_COORDINATE: "26.497395",
    Y_COORDINATE: "58.059266",
    SERVICE_HOURS:
      "E,K 11:00-18:00 T,N,R 10:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-03T12:53:52.777+03:00",
  },
  {
    ZIP: "9994",
    NAME: "Ozolnieku TOP pakom\u0101ts",

    A1_NAME: "Ozolnieku novads",
    A2_NAME: "Ozolnieku pagasts",
    A3_NAME: "Ozolnieki",

    A5_NAME: "Skolas iela",

    A7_NAME: "1B",

    X_COORDINATE: "23.787478",
    Y_COORDINATE: "56.691704",

    MODIFIED: "2020-11-13T10:40:24.013+02:00",
  },
  {
    ZIP: "77713",
    NAME: "Pabrad\u0117s NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160ven\u010dioni\u0173 r. sav.",
    A3_NAME: "Pabrad\u0117s m.",

    A5_NAME: "Mol\u0117t\u0173 g.",

    A7_NAME: "4A",

    X_COORDINATE: "25.755954",
    Y_COORDINATE: "54.979617",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:51:08.427+03:00",
  },
  {
    ZIP: "76091",
    NAME: "Padise postkontor",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Padise k\u00fcla",
    A4_NAME: "Padise keskus",
    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.143746",
    Y_COORDINATE: "59.225831",
    SERVICE_HOURS: "E,N,R 08:00-10:00 T 16:00-18:00 K 08:00-11:00 L,P SULETUD",

    MODIFIED: "2021-04-27T12:56:53.517+03:00",
  },
  {
    ZIP: "55562",
    NAME: "Pag\u0117gi\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Pag\u0117gi\u0173 sav.",
    A3_NAME: "Pag\u0117gi\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "18A",

    X_COORDINATE: "21.907641",
    Y_COORDINATE: "55.135591",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-04-01T13:12:17.787+03:00",
  },
  {
    ZIP: "96207",
    NAME: "Paide Hesburgeri pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "Paide linn",
    A3_NAME: "Paide linn",

    A5_NAME: "Raudtee tn",

    A7_NAME: "29",

    X_COORDINATE: "25.542020",
    Y_COORDINATE: "58.886600",

    MODIFIED: "2019-07-23T11:43:57.863+03:00",
  },
  {
    ZIP: "96037",
    NAME: "Paide Selveri pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "Paide linn",
    A3_NAME: "Paide linn",

    A5_NAME: "Aiavilja tn",

    X_COORDINATE: "25.563311",
    Y_COORDINATE: "58.885469",

    MODIFIED: "2021-05-13T05:55:14.357+03:00",
  },
  {
    ZIP: "72701",
    NAME: "Paide postkontor",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "Paide linn",
    A3_NAME: "Paide linn",

    A5_NAME: "Telliskivi tn",

    X_COORDINATE: "25.556579",
    Y_COORDINATE: "58.885621",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:24:23.460+02:00",
  },
  {
    ZIP: "96158",
    NAME: "Paikuse Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "Paikuse alev",

    A5_NAME: "P\u00e4rnade pst",

    X_COORDINATE: "24.618326",
    Y_COORDINATE: "58.373772",

    MODIFIED: "2021-05-24T13:39:05.100+03:00",
  },
  {
    ZIP: "69694",
    NAME: "Paistu postipunkt",

    A2_NAME: "Viljandi vald",
    A3_NAME: "Paistu k\u00fcla",

    A5_NAME: "Raamatukogu tee",

    X_COORDINATE: "25.629211",
    Y_COORDINATE: "58.271411",
    SERVICE_HOURS: "E 12:00-19:00 T,K,N 09:30-18:00 R 09:00-16:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "07.06.2021: SULETUD;09.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "09.06.2021",

    MODIFIED: "2021-06-04T08:52:51.920+03:00",
  },
  {
    ZIP: "77714",
    NAME: "Pakruojo NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Pakruojo r. sav.",
    A3_NAME: "Pakruojo m.",

    A5_NAME: "Statybinink\u0173 g.",

    A7_NAME: "2A",

    X_COORDINATE: "23.856688",
    Y_COORDINATE: "55.980039",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:47:50.323+03:00",
  },
  {
    ZIP: "49494",
    NAME: "Pala postipunkt (Coop)",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Peipsi\u00e4\u00e4re vald",
    A3_NAME: "Pala k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "27.020065",
    Y_COORDINATE: "58.672268",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-17:00",

    MODIFIED: "2021-04-13T12:47:59.340+03:00",
  },
  {
    ZIP: "49294",
    NAME: "Palamuse postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "Palamuse alevik",

    A5_NAME: "Uus tn",

    A7_NAME: "14",

    X_COORDINATE: "26.585891",
    Y_COORDINATE: "58.685572",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P 10:00-17:00;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "AJUTISELT SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-29T14:29:46.570+03:00",
  },
  {
    ZIP: "55563",
    NAME: "Palangos MAXIMA Klaip\u0117dos pl. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Palangos m. sav.",
    A3_NAME: "Palangos m.",

    A5_NAME: "Klaip\u0117dos pl.",

    A7_NAME: "42",

    X_COORDINATE: "21.077526",
    Y_COORDINATE: "55.912817",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br>  pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-01-15T11:57:00.873+02:00",
  },
  {
    ZIP: "88870",
    NAME: "Palangos RIMI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Palangos m. sav.",
    A3_NAME: "Palangos m.",

    A5_NAME: "Mal\u016bno g.",

    X_COORDINATE: "21.075963",
    Y_COORDINATE: "55.921020",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, i\u0161 Klaip\u0117dos pl.",
    MODIFIED: "2021-01-15T11:57:51.123+02:00",
  },
  {
    ZIP: "96203",
    NAME: "Paldiski Coop Konsumi pakiautomaat",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Paldiski linn",

    A5_NAME: "Rae tn",

    A7_NAME: "38",

    X_COORDINATE: "24.055970",
    Y_COORDINATE: "59.352623",

    MODIFIED: "2020-11-11T07:59:44.780+02:00",
  },
  {
    ZIP: "96097",
    NAME: "Paldiski Maxima X pakiautomaat",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Paldiski linn",

    A5_NAME: "Rae tn",

    A7_NAME: "14b",

    X_COORDINATE: "24.062820",
    Y_COORDINATE: "59.347514",

    MODIFIED: "2021-05-26T08:45:59.083+03:00",
  },
  {
    ZIP: "76894",
    NAME: "Paldiski postipunkt",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Paldiski linn",

    A5_NAME: "Rae tn",

    A7_NAME: "38",

    X_COORDINATE: "24.056393",
    Y_COORDINATE: "59.352600",
    SERVICE_HOURS:
      "E,K 08:30-12:00, 13:00-17:00 T,N 08:30-12:00, 13:00-18:00 R 08:30-12:00, 13:00-14:00 L,P SULETUD",

    MODIFIED: "2021-05-11T06:43:53.120+03:00",
  },
  {
    ZIP: "76891",
    NAME: "Paldiski postkontor",

    A2_NAME: "L\u00e4\u00e4ne-Harju vald",
    A3_NAME: "Paldiski linn",

    A5_NAME: "Rae tn",

    A7_NAME: "14b",

    X_COORDINATE: "24.062748",
    Y_COORDINATE: "59.347600",
    SERVICE_HOURS:
      "E,T,K,N,R 14:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2: "Kuni 30.06.2021: T,N 11:00-18:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "30.06.2021",

    MODIFIED: "2021-05-21T12:21:46.397+03:00",
  },
  {
    ZIP: "19098",
    NAME: "Pallasti postkontor",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Pallasti tn",

    A7_NAME: "28",

    X_COORDINATE: "24.792423",
    Y_COORDINATE: "59.430153",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T08:49:40.407+02:00",
  },
  {
    ZIP: "88849",
    NAME: "Panev\u0117\u017eio MAXIMA L\u0116VUO pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Klaip\u0117dos g.",

    A7_NAME: "103",

    X_COORDINATE: "24.324492",
    Y_COORDINATE: "55.729027",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:34:41.057+03:00",
  },
  {
    ZIP: "55575",
    NAME: "Panev\u0117\u017eio MAXIMA Ramygalos 44 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Ramygalos g.",

    A7_NAME: "44",

    X_COORDINATE: "24.361649",
    Y_COORDINATE: "55.723247",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:44:37.547+02:00",
  },
  {
    ZIP: "55576",
    NAME: "Panev\u0117\u017eio MAXIMA Respublikos pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Respublikos g.",

    A7_NAME: "71",

    X_COORDINATE: "24.356314",
    Y_COORDINATE: "55.736744",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:49:53.177+02:00",
  },
  {
    ZIP: "88847",
    NAME: "Panev\u0117\u017eio MAXIMA TURGAUS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Ukmerg\u0117s g.",

    A7_NAME: "23",

    X_COORDINATE: "24.370111",
    Y_COORDINATE: "55.728699",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:54:12.023+02:00",
  },
  {
    ZIP: "77715",
    NAME: "Panev\u0117\u017eio NORFA Ber\u017e\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Ber\u017e\u0173 g.",

    A7_NAME: "27",

    X_COORDINATE: "24.371639",
    Y_COORDINATE: "55.718180",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:43:24.063+03:00",
  },
  {
    ZIP: "55574",
    NAME: "Panev\u0117\u017eio NORFA Molaini\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Molaini\u0173 g.",

    A7_NAME: "11",

    X_COORDINATE: "24.331191",
    Y_COORDINATE: "55.721789",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:53:28.633+02:00",
  },
  {
    ZIP: "77716",
    NAME: "Panev\u0117\u017eio NORFA Sm\u0117lyn\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Sm\u0117lyn\u0117s g.",

    A7_NAME: "85",

    X_COORDINATE: "24.369602",
    Y_COORDINATE: "55.744326",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T14:27:12.167+02:00",
  },
  {
    ZIP: "88846",
    NAME: "Panev\u0117\u017eio RIMI Klaip\u0117dos g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Panev\u0117\u017eio m. sav.",
    A3_NAME: "Panev\u0117\u017eio m.",

    A5_NAME: "Klaip\u0117dos g.",

    A7_NAME: "82",

    X_COORDINATE: "24.342098",
    Y_COORDINATE: "55.728561",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:52:03.770+02:00",
  },
  {
    ZIP: "55577",
    NAME: "Pasvalio MAXIMA Avi\u017eonio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Pasvalio r. sav.",
    A3_NAME: "Pasvalio m.",

    A5_NAME: "P. Avi\u017eonio g.",

    X_COORDINATE: "24.399381",
    Y_COORDINATE: "56.060460",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:20:04.163+02:00",
  },
  {
    ZIP: "88809",
    NAME: "Pasvalio NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Pasvalio r. sav.",
    A3_NAME: "Pasvalio m.",

    A5_NAME: "E\u017eero g.",

    X_COORDINATE: "24.411162",
    Y_COORDINATE: "56.059595",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T12:30:12.703+02:00",
  },
  {
    ZIP: "96234",
    NAME: "Peetri Keskuse pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "Peetri alevik",

    A5_NAME: "K\u00fcti tee",

    X_COORDINATE: "24.805431",
    Y_COORDINATE: "59.397668",

    MODIFIED: "2021-04-16T08:58:02.013+03:00",
  },
  {
    ZIP: "96082",
    NAME: "Peetri Selveri pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "Peetri alevik",

    A5_NAME: "Veesaare tee",

    X_COORDINATE: "24.811046",
    Y_COORDINATE: "59.402735",

    MODIFIED: "2021-05-26T07:29:06.663+03:00",
  },
  {
    ZIP: "73194",
    NAME: "Peetri postipunkt",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "J\u00e4rva vald",
    A3_NAME: "Peetri alevik",

    A5_NAME: "Kesktee",

    A7_NAME: "11",

    X_COORDINATE: "25.835227",
    Y_COORDINATE: "58.944197",
    SERVICE_HOURS:
      "E,T,R 09:00-17:00 K,N,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "04.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-06-01T11:21:22.823+03:00",
  },
  {
    ZIP: "13694",
    NAME: "Pinna postipunkt (Minuarvuti.ee kauplus)",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Punane tn",

    A7_NAME: "40",

    X_COORDINATE: "24.835843",
    Y_COORDINATE: "59.434125",
    SERVICE_HOURS: "T,K,N,R 15:00-17:00 L 13:00-15:00 E,P SULETUD",

    MODIFIED: "2021-04-14T08:35:02.683+03:00",
  },
  {
    ZIP: "11996",
    NAME: "Pirita pakipunkt",

    A5_NAME: "Meriv\u00e4lja tee",

    A7_NAME: "24",

    X_COORDINATE: "24.835383",
    Y_COORDINATE: "59.468695",
    SERVICE_HOURS: "P SULETUD",

    TEMP_SERVICE_HOURS_2: "E,T,K,N,R 13:00-19:00 L 11:00-17:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-08T01:00:05.397+03:00",
  },
  {
    ZIP: "11901",
    NAME: "Pirita postkontor",

    A5_NAME: "Meriv\u00e4lja tee",

    A7_NAME: "24",

    X_COORDINATE: "24.834973",
    Y_COORDINATE: "59.468976",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:24:59.670+03:00",
  },
  {
    ZIP: "9117",
    NAME: "Pi\u0146\u0137u Elvi pakom\u0101ts",

    A1_NAME: "Bab\u012btes novads",
    A2_NAME: "Bab\u012btes pagasts",
    A3_NAME: "Pi\u0146\u0137i",

    A5_NAME: "R\u012bgas iela",

    X_COORDINATE: "23.909464",
    Y_COORDINATE: "56.944447",

    MODIFIED: "2020-11-12T12:58:44.630+02:00",
  },
  {
    ZIP: "13695",
    NAME: "Plasti postipunkt",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Punane tn",

    A7_NAME: "56",

    X_COORDINATE: "24.847341",
    Y_COORDINATE: "59.435779",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:35:24.147+03:00",
  },
  {
    ZIP: "88894",
    NAME: "Plung\u0117s IKI Laisv\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Plung\u0117s r. sav.",
    A3_NAME: "Plung\u0117s m.",

    A5_NAME: "Laisv\u0117s g.",

    X_COORDINATE: "21.857606",
    Y_COORDINATE: "55.908780",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f turg\u0173 pus\u0117je",
    MODIFIED: "2020-12-23T14:05:26.613+02:00",
  },
  {
    ZIP: "55564",
    NAME: "Plung\u0117s IKI Senamies\u010dio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Plung\u0117s r. sav.",
    A3_NAME: "Plung\u0117s m.",

    A5_NAME: "Senamies\u010dio a.",

    X_COORDINATE: "21.845882",
    Y_COORDINATE: "55.913172",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:26:08.507+02:00",
  },
  {
    ZIP: "88810",
    NAME: "Plung\u0117s NORFA Kalni\u0161ki\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Plung\u0117s r. sav.",
    A3_NAME: "Plung\u0117s m.",

    A5_NAME: "Kalni\u0161ki\u0173 g.",

    A7_NAME: "18",

    X_COORDINATE: "21.843836",
    Y_COORDINATE: "55.904941",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo  ",
    MODIFIED: "2021-05-20T06:24:42.350+03:00",
  },
  {
    ZIP: "74002",
    NAME: "Prangli postkontor",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Idaotsa k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Prangli rahvamaja",
    A7_NAME: "",

    X_COORDINATE: "25.010052",
    Y_COORDINATE: "59.629530",
    SERVICE_HOURS: "T,K,N,R,L 10:00-13:00 E,P SULETUD",

    MODIFIED: "2021-04-16T10:30:41.533+03:00",
  },
  {
    ZIP: "9958",
    NAME: "Prei\u013cu Maxima X pakom\u0101ts",

    A1_NAME: "Prei\u013cu novads",
    A2_NAME: "Prei\u013ci",
    A3_NAME: "",

    A5_NAME: "R\u0113zeknes iela",

    X_COORDINATE: "26.725437",
    Y_COORDINATE: "56.294435",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-13T07:41:17.223+02:00",
  },
  {
    ZIP: "9130",
    NAME: "Priekules TOP pakom\u0101ts",

    A1_NAME: "Priekules novads",
    A2_NAME: "Priekule",
    A3_NAME: "",

    A5_NAME: "Galven\u0101 iela",

    X_COORDINATE: "21.585171",
    Y_COORDINATE: "56.447360",

    comment_lav: "Pie ieejas",

    MODIFIED: "2020-11-12T13:20:55.163+02:00",
  },
  {
    ZIP: "88812",
    NAME: "Prien\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Prien\u0173 r. sav.",
    A3_NAME: "Prien\u0173 m.",

    A5_NAME: "Revuonos g.",

    A7_NAME: "66",

    X_COORDINATE: "23.945186",
    Y_COORDINATE: "54.642956",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:34:59.170+03:00",
  },
  {
    ZIP: "96150",
    NAME: "Puhja Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Puhja alevik",

    A5_NAME: "Nooruse tn",

    X_COORDINATE: "26.313350",
    Y_COORDINATE: "58.335163",

    MODIFIED: "2020-11-11T08:00:42.000+02:00",
  },
  {
    ZIP: "67294",
    NAME: "Puka postipunkt",

    A1_NAME: "Valga maakond",
    A2_NAME: "Otep\u00e4\u00e4 vald",
    A3_NAME: "Puka alevik",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "26.227945",
    Y_COORDINATE: "58.052314",
    SERVICE_HOURS: "E,K 11:00-17:30 N 08:30-14:30 T,R,L,P SULETUD",

    MODIFIED: "2021-05-13T09:01:22.653+03:00",
  },
  {
    ZIP: "11995",
    NAME: "Purje postipunkt",

    A5_NAME: "Purje tn",

    X_COORDINATE: "24.826291",
    Y_COORDINATE: "59.465672",
    SERVICE_HOURS:
      "Kuni 03.06.2021: T,K,N,R 12:00-18:00 L 12:00-16:00;Alates 04.06.2021: E,T,K,N,R 11:00-17:00;P SULETUD",
    TEMP_SERVICE_HOURS: "23.06.2021 kuni 25.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "25.06.2021",

    MODIFIED: "2021-06-03T13:58:20.787+03:00",
  },
  {
    ZIP: "43394",
    NAME: "Purtse postipunkt (AldarMarket)",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "Purtse k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Purtse kauplus",
    A7_NAME: "",

    X_COORDINATE: "27.025185",
    Y_COORDINATE: "59.412478",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-21:00",

    MODIFIED: "2021-04-30T10:42:34.640+03:00",
  },
  {
    ZIP: "49094",
    NAME: "Puurmani postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "P\u00f5ltsamaa vald",
    A3_NAME: "Puurmani alevik",

    A5_NAME: "J\u00f5geva mnt",

    X_COORDINATE: "26.290502",
    Y_COORDINATE: "58.577010",
    SERVICE_HOURS:
      "Kuni 09.03.2021: E,T,K,N,R 10:00-15:00;Alates 10.03.2021: E,T,K,N,R,L,P 09:00-19:00",

    MODIFIED: "2021-03-05T10:02:48.843+02:00",
  },
  {
    ZIP: "20601",
    NAME: "P\u00e4hklim\u00e4e postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva linn",
    A3_NAME: "",

    A5_NAME: "Rakvere tn",

    A7_NAME: "71",

    X_COORDINATE: "28.184249",
    Y_COORDINATE: "59.385937",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:54:43.010+03:00",
  },
  {
    ZIP: "96076",
    NAME: "P\u00e4rnu Coop Maksimarketi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "Papsaare k\u00fcla",

    A5_NAME: "Haapsalu mnt",

    A7_NAME: "43",

    X_COORDINATE: "24.458071",
    Y_COORDINATE: "58.395589",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96026",
    NAME: "P\u00e4rnu Jannseni Rimi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "J. V. Jannseni tn",

    A7_NAME: "3/1",

    X_COORDINATE: "24.493918",
    Y_COORDINATE: "58.392043",

    MODIFIED: "2021-06-03T11:27:07.583+03:00",
  },
  {
    ZIP: "96040",
    NAME: "P\u00e4rnu Kaubamajaka pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Papiniidu tn",

    X_COORDINATE: "24.550329",
    Y_COORDINATE: "58.371106",

    MODIFIED: "2021-04-13T13:57:17.503+03:00",
  },
  {
    ZIP: "96027",
    NAME: "P\u00e4rnu Maxima XXX pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Riia mnt",

    A7_NAME: "131",

    X_COORDINATE: "24.536591",
    Y_COORDINATE: "58.375126",

    MODIFIED: "2021-05-03T05:57:39.717+03:00",
  },
  {
    ZIP: "96315",
    NAME: "P\u00e4rnu Oja Selver ABC pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Liblika tn",

    X_COORDINATE: "24.530942",
    Y_COORDINATE: "58.390403",

    MODIFIED: "2021-05-19T05:38:28.127+03:00",
  },
  {
    ZIP: "96062",
    NAME: "P\u00e4rnu Port Artur 2 pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Lai tn",

    A7_NAME: "11",

    X_COORDINATE: "24.504472",
    Y_COORDINATE: "58.387448",

    MODIFIED: "2020-09-24T10:29:57.173+03:00",
  },
  {
    ZIP: "96197",
    NAME: "P\u00e4rnu Tiina Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Riia mnt",

    A7_NAME: "74",

    X_COORDINATE: "24.527491",
    Y_COORDINATE: "58.379842",

    MODIFIED: "2020-11-11T08:04:15.400+02:00",
  },
  {
    ZIP: "96198",
    NAME: "P\u00e4rnu Turu pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Suur-Sepa tn",

    A7_NAME: "18",

    X_COORDINATE: "24.509748",
    Y_COORDINATE: "58.381923",

    MODIFIED: "2020-06-30T12:41:05.000+03:00",
  },
  {
    ZIP: "80501",
    NAME: "P\u00e4rnu postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Hommiku tn",

    X_COORDINATE: "24.503295",
    Y_COORDINATE: "58.385906",
    SERVICE_HOURS:
      "Kuni 30.06.2021: E,T,K,N,R 09:00-18:30 L 10:00-14:00;Alates 01.07.2021: E,T,K,N,R 09:00-18:00;P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-06-04T08:42:05.147+03:00",
  },
  {
    ZIP: "96077",
    NAME: "P\u00e4rnu \u00dclej\u00f5e Selveri pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "93a",

    X_COORDINATE: "24.494573",
    Y_COORDINATE: "58.408281",

    MODIFIED: "2021-05-24T05:28:58.657+03:00",
  },
  {
    ZIP: "96109",
    NAME: "P\u00e4rnu-Jaagupi Grossi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "P\u00e4rnu-Jaagupi alev",

    A5_NAME: "Uus tn",

    A7_NAME: "20a",

    X_COORDINATE: "24.504647",
    Y_COORDINATE: "58.609379",

    MODIFIED: "2021-05-24T13:40:25.997+03:00",
  },
  {
    ZIP: "87295",
    NAME: "P\u00e4rnu-Jaagupi postipunkt",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "P\u00e4rnu-Jaagupi alev",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "17",

    X_COORDINATE: "24.501599",
    Y_COORDINATE: "58.606013",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-21:00",

    MODIFIED: "2021-04-13T13:14:31.540+03:00",
  },
  {
    ZIP: "44494",
    NAME: "P\u00f5hjakeskuse postipunkt (kpl Sokisahtel)",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere vald",
    A3_NAME: "T\u00f5rrem\u00e4e k\u00fcla",

    A5_NAME: "Haljala tee",

    X_COORDINATE: "26.339349",
    Y_COORDINATE: "59.363940",
    SERVICE_HOURS: "Alates 07.05.2021: E,T,K,N,R 10:00-20:00;L,P SULETUD",

    MODIFIED: "2021-05-07T07:15:58.097+03:00",
  },
  {
    ZIP: "96048",
    NAME: "P\u00f5ltsamaa Selveri pakiautomaat",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "P\u00f5ltsamaa vald",
    A3_NAME: "P\u00f5ltsamaa linn",

    A5_NAME: "J\u00f5geva mnt",

    A7_NAME: "1a",

    X_COORDINATE: "25.980644",
    Y_COORDINATE: "58.653975",

    MODIFIED: "2021-03-25T14:07:44.530+02:00",
  },
  {
    ZIP: "48101",
    NAME: "P\u00f5ltsamaa postkontor",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "P\u00f5ltsamaa vald",
    A3_NAME: "P\u00f5ltsamaa linn",

    A5_NAME: "Silla tn",

    X_COORDINATE: "25.973202",
    Y_COORDINATE: "58.653564",
    SERVICE_HOURS:
      "E,T 09:00-13:00, 13:30-17:00 K,N,R 09:00-13:00, 13:30-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-25T06:25:02.813+02:00",
  },
  {
    ZIP: "96045",
    NAME: "P\u00f5lva Kaubamaja pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "P\u00f5lva linn",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "27.055806",
    Y_COORDINATE: "58.054354",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96201",
    NAME: "P\u00f5lva Meie Ostumarketi pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "P\u00f5lva linn",

    A5_NAME: "Lao tn",

    A7_NAME: "14",

    X_COORDINATE: "27.092520",
    Y_COORDINATE: "58.066847",

    MODIFIED: "2020-11-11T08:01:42.837+02:00",
  },
  {
    ZIP: "96073",
    NAME: "P\u00f5lva Selveri pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "P\u00f5lva linn",

    A5_NAME: "Jaama tn",

    A7_NAME: "12",

    X_COORDINATE: "27.071194",
    Y_COORDINATE: "58.063698",

    MODIFIED: "2020-10-23T05:32:19.693+03:00",
  },
  {
    ZIP: "63301",
    NAME: "P\u00f5lva postkontor",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "P\u00f5lva linn",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "27.055791",
    Y_COORDINATE: "58.054317",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-13:00, 13:30-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-27T13:29:04.583+03:00",
  },
  {
    ZIP: "91291",
    NAME: "P\u00fcrksi postkontor",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "P\u00fcrksi k\u00fcla / Birkas",
    A4_NAME: "P\u00fcrksi keskus",
    A5_NAME: "",

    X_COORDINATE: "23.521030",
    Y_COORDINATE: "59.006707",
    SERVICE_HOURS: "E,T,K,N,R 10:00-12:00 L,P SULETUD",

    MODIFIED: "2021-05-03T08:33:19.527+03:00",
  },
  {
    ZIP: "43294",
    NAME: "P\u00fcssi postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "P\u00fcssi linn",

    A5_NAME: "Viru tn",

    X_COORDINATE: "27.040165",
    Y_COORDINATE: "59.363319",
    SERVICE_HOURS:
      "Kuni 28.02.2021: E,T,K,N,R,L,P 08:00-11:00;Alates 01.03.2021: T,K,N,L,P 08:00-16:00",

    MODIFIED: "2021-02-19T06:55:57.320+02:00",
  },
  {
    ZIP: "9207",
    NAME: "P\u0101vilostas TOP pakom\u0101ts",

    A1_NAME: "P\u0101vilostas novads",
    A2_NAME: "P\u0101vilosta",
    A3_NAME: "",

    A5_NAME: "Dzintaru iela",

    A7_NAME: "69",

    X_COORDINATE: "21.189200",
    Y_COORDINATE: "56.887210",

    MODIFIED: "2020-11-13T06:24:32.997+02:00",
  },
  {
    ZIP: "9990",
    NAME: "P\u013cavi\u0146u TOP pakom\u0101ts",

    A1_NAME: "P\u013cavi\u0146u novads",
    A2_NAME: "P\u013cavi\u0146as",
    A3_NAME: "",

    A5_NAME: "Daugavas iela",

    A7_NAME: "85",

    X_COORDINATE: "25.734234",
    Y_COORDINATE: "56.617788",

    MODIFIED: "2020-11-13T09:41:04.013+02:00",
  },
  {
    ZIP: "50301",
    NAME: "Raadi postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Narva mnt",

    A7_NAME: "112",

    X_COORDINATE: "26.730412",
    Y_COORDINATE: "58.391808",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:36:24.567+03:00",
  },
  {
    ZIP: "96105",
    NAME: "Raasiku Coop Konsumi pakiautomaat",

    A2_NAME: "Raasiku vald",
    A3_NAME: "Raasiku alevik",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "19",

    X_COORDINATE: "25.182569",
    Y_COORDINATE: "59.369367",

    MODIFIED: "2021-05-26T08:44:55.373+03:00",
  },
  {
    ZIP: "75293",
    NAME: "Raasiku postkontor",

    A2_NAME: "Raasiku vald",
    A3_NAME: "Raasiku alevik",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "19",

    X_COORDINATE: "25.182280",
    Y_COORDINATE: "59.369640",
    SERVICE_HOURS:
      "E,K 12:00-18:00 T,N,R 09:00-13:30 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-03T14:02:46.657+03:00",
  },
  {
    ZIP: "88817",
    NAME: "Radvili\u0161kio GR\u016aST\u0116 Au\u0161ros pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Radvili\u0161kio r. sav.",
    A3_NAME: "Radvili\u0161kio m.",

    A5_NAME: "Au\u0161ros a.",

    X_COORDINATE: "23.538315",
    Y_COORDINATE: "55.807849",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je, u\u017e kampo",
    MODIFIED: "2020-12-23T12:40:33.453+02:00",
  },
  {
    ZIP: "55587",
    NAME: "Radvili\u0161kio MAXIMA Gedimino 42 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Radvili\u0161kio r. sav.",
    A3_NAME: "Radvili\u0161kio m.",

    A5_NAME: "Gedimino g.",

    A7_NAME: "42A",

    X_COORDINATE: "23.548772",
    Y_COORDINATE: "55.812696",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T20:00:55.180+02:00",
  },
  {
    ZIP: "75399",
    NAME: "Rae postkontor",

    A2_NAME: "Rae vald",
    A3_NAME: "Peetri alevik",

    A5_NAME: "Veesaare tee",

    X_COORDINATE: "24.811533",
    Y_COORDINATE: "59.402353",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T08:55:19.433+02:00",
  },
  {
    ZIP: "9152",
    NAME: "Raganas ELVI pakom\u0101ts",

    A1_NAME: "Krimuldas novads",
    A2_NAME: "Krimuldas pagasts",
    A3_NAME: "Ragana",

    A5_NAME: "Tirgus iela",

    X_COORDINATE: "24.715102",
    Y_COORDINATE: "57.181323",

    MODIFIED: "2021-01-14T07:20:43.617+02:00",
  },
  {
    ZIP: "46335",
    NAME: "Rakke postiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "V\u00e4ike-Maarja vald",
    A3_NAME: "Rakke alevik",

    A5_NAME: "F. R. Faehlmanni tee",

    A7_NAME: "15",

    X_COORDINATE: "26.241747",
    Y_COORDINATE: "58.987667",

    MODIFIED: "2021-01-27T02:00:03.413+02:00",
  },
  {
    ZIP: "46333",
    NAME: "Rakke postkontor",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "V\u00e4ike-Maarja vald",
    A3_NAME: "Rakke alevik",

    A5_NAME: "F. R. Faehlmanni tee",

    A7_NAME: "18",

    X_COORDINATE: "26.246144",
    Y_COORDINATE: "58.987011",
    SERVICE_HOURS: "E,T,K,N,R 09:30-13:00 L,P SULETUD",

    MODIFIED: "2021-04-14T08:55:06.073+03:00",
  },
  {
    ZIP: "96232",
    NAME: "Rakvere Lilleoru kaupluse pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere linn",
    A3_NAME: "",

    A5_NAME: "Tartu tn",

    A7_NAME: "55",

    X_COORDINATE: "26.365073",
    Y_COORDINATE: "59.327798",

    MODIFIED: "2021-04-28T07:23:45.163+03:00",
  },
  {
    ZIP: "96078",
    NAME: "Rakvere P\u00f5hjakeskuse pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere vald",
    A3_NAME: "T\u00f5rrem\u00e4e k\u00fcla",

    A5_NAME: "Haljala tee",

    X_COORDINATE: "26.339553",
    Y_COORDINATE: "59.364081",

    MODIFIED: "2021-03-25T14:10:40.413+02:00",
  },
  {
    ZIP: "96031",
    NAME: "Rakvere Turutare pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere linn",
    A3_NAME: "",

    A5_NAME: "Laada tn",

    A7_NAME: "18",

    X_COORDINATE: "26.364466",
    Y_COORDINATE: "59.347187",

    MODIFIED: "2021-04-13T13:47:28.643+03:00",
  },
  {
    ZIP: "96167",
    NAME: "Rakvere Vaala Keskuse pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere linn",
    A3_NAME: "",

    A5_NAME: "L\u00f5\u00f5tspilli tn",

    X_COORDINATE: "26.383605",
    Y_COORDINATE: "59.354905",

    MODIFIED: "2021-04-16T07:27:16.000+03:00",
  },
  {
    ZIP: "44301",
    NAME: "Rakvere postkontor",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere linn",
    A3_NAME: "",

    A5_NAME: "F. G. Adoffi tn",

    A7_NAME: "11",

    X_COORDINATE: "26.364142",
    Y_COORDINATE: "59.348662",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T08:55:52.387+03:00",
  },
  {
    ZIP: "71126",
    NAME: "Ramsi postipunkt (kpl Coop)",

    A2_NAME: "Viljandi vald",
    A3_NAME: "Ramsi alevik",

    A5_NAME: "Keskuse tee",

    X_COORDINATE: "25.540757",
    Y_COORDINATE: "58.307564",
    SERVICE_HOURS: "E,T,K,N,R,L,P 09:00-20:00",

    MODIFIED: "2021-02-02T09:45:38.357+02:00",
  },
  {
    ZIP: "61194",
    NAME: "Rannu postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "Rannu alevik",

    A5_NAME: "Elva tee",

    X_COORDINATE: "26.216638",
    Y_COORDINATE: "58.239309",
    SERVICE_HOURS: "E,R 10:00-14:00 K 14:00-18:00 T,N,L,P SULETUD",

    MODIFIED: "2021-05-04T10:09:39.067+03:00",
  },
  {
    ZIP: "96043",
    NAME: "Rapla Maxima X pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Rapla linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "50a",

    X_COORDINATE: "24.790758",
    Y_COORDINATE: "58.998251",

    MODIFIED: "2020-12-11T10:03:35.080+02:00",
  },
  {
    ZIP: "96220",
    NAME: "Rapla Vestis Coop Konsumi pakiautomaat",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Rapla linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "16",

    X_COORDINATE: "24.793198",
    Y_COORDINATE: "59.005183",

    MODIFIED: "2021-04-22T07:10:06.887+03:00",
  },
  {
    ZIP: "79501",
    NAME: "Rapla postkontor",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Rapla linn",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "17",

    X_COORDINATE: "24.794818",
    Y_COORDINATE: "59.004320",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:26:45.503+02:00",
  },
  {
    ZIP: "88819",
    NAME: "Raseini\u0173 MAXIMA Maironio pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Raseini\u0173 r. sav.",
    A3_NAME: "Raseini\u0173 m.",

    A5_NAME: "Maironio g.",

    A7_NAME: "64",

    X_COORDINATE: "23.126625",
    Y_COORDINATE: "55.386380",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T12:33:49.803+02:00",
  },
  {
    ZIP: "55536",
    NAME: "Raseini\u0173 MAXIMA Vilniaus g. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Raseini\u0173 r. sav.",
    A3_NAME: "Raseini\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "93",

    X_COORDINATE: "23.113923",
    Y_COORDINATE: "55.379334",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T20:19:32.457+02:00",
  },
  {
    ZIP: "90494",
    NAME: "Ridala postipunkt",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Haapsalu linn",
    A3_NAME: "Panga k\u00fcla",

    A5_NAME: "Panga tee",

    X_COORDINATE: "23.586368",
    Y_COORDINATE: "58.831468",
    SERVICE_HOURS: "E,T,K,N,R 13:00-18:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "05.06.2021 kuni 01.09.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "01.09.2021",

    MODIFIED: "2021-05-27T12:46:33.803+03:00",
  },
  {
    ZIP: "77717",
    NAME: "Rietavo MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Rietavo sav.",
    A3_NAME: "Rietavo m.",

    A5_NAME: "Plung\u0117s g.",

    X_COORDINATE: "21.932441",
    Y_COORDINATE: "55.724254",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie galin\u0117s parduotuv\u0117s pastato sienos",
    MODIFIED: "2021-04-08T07:19:45.223+03:00",
  },
  {
    ZIP: "80006",
    NAME: "Riia Maja postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "P\u00e4rnu linn",

    A5_NAME: "Riia mnt",

    A7_NAME: "169a",

    X_COORDINATE: "24.546886",
    Y_COORDINATE: "58.370119",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T12:34:39.413+02:00",
  },
  {
    ZIP: "68794",
    NAME: "Riidaja postipunkt (Coop)",

    A1_NAME: "Valga maakond",
    A2_NAME: "T\u00f5rva vald",
    A3_NAME: "Riidaja k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "25.895333",
    Y_COORDINATE: "58.096497",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P 10:00-14:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-11T12:58:07.420+02:00",
  },
  {
    ZIP: "76292",
    NAME: "Riisipere postkontor",

    A2_NAME: "Saue vald",
    A3_NAME: "Riisipere alevik",

    A5_NAME: "Metsa tn",

    X_COORDINATE: "24.315220",
    Y_COORDINATE: "59.106485",
    SERVICE_HOURS:
      "T,N,R,L 10:00-13:00 K 14:00-18:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "11.06.2021 kuni 26.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "26.06.2021",

    MODIFIED: "2021-05-20T14:26:24.977+03:00",
  },
  {
    ZIP: "50191",
    NAME: "Ringtee postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "V\u00f5ru tn",

    A7_NAME: "167",

    X_COORDINATE: "26.713430",
    Y_COORDINATE: "58.344923",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-19:00 L 09:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:25:08.477+03:00",
  },
  {
    ZIP: "90994",
    NAME: "Risti postipunkt",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Risti alevik",

    A5_NAME: "L\u00f5una tn",

    X_COORDINATE: "24.062521",
    Y_COORDINATE: "58.996843",
    SERVICE_HOURS: "E,K 10:00-16:00 T,N 10:00-18:00 R,L,P SULETUD",

    MODIFIED: "2021-05-04T10:10:55.723+03:00",
  },
  {
    ZIP: "96196",
    NAME: "Risti vallamaja pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Risti alevik",

    A5_NAME: "Tallinna mnt",

    X_COORDINATE: "24.058671",
    Y_COORDINATE: "58.998311",

    MODIFIED: "2021-04-19T05:34:40.727+03:00",
  },
  {
    ZIP: "46694",
    NAME: "Roela postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Vinni vald",
    A3_NAME: "Roela alevik",

    A5_NAME: "Tartu mnt",

    A7_NAME: "11",

    X_COORDINATE: "26.585755",
    Y_COORDINATE: "59.165103",
    SERVICE_HOURS: "Alates 01.05.2021: E,T,K,N,R,L,P 09:00-21:00",

    MODIFIED: "2021-04-30T10:42:12.363+03:00",
  },
  {
    ZIP: "62194",
    NAME: "Roiu postipunkt (raamatukogu)",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kastre vald",
    A3_NAME: "Roiu alevik",

    A5_NAME: "Oja tn",

    X_COORDINATE: "26.866513",
    Y_COORDINATE: "58.299381",
    SERVICE_HOURS:
      "E,T,N,R 10:00-14:00 K 14:00-16:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS:
      "16.06.2021 kuni 18.06.2021: SULETUD;23.06.2021 kuni 24.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "24.06.2021",

    MODIFIED: "2021-06-04T10:08:38.513+03:00",
  },
  {
    ZIP: "9136",
    NAME: "Rojas Maxima X pakom\u0101ts",

    A1_NAME: "Rojas novads",
    A2_NAME: "",
    A3_NAME: "Roja",

    A5_NAME: "Selgas iela",

    X_COORDINATE: "22.801112",
    Y_COORDINATE: "57.505699",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:21:03.470+02:00",
  },
  {
    ZIP: "55578",
    NAME: "Roki\u0161kio MAXIMA Respublikos 111B pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Roki\u0161kio r. sav.",
    A3_NAME: "Roki\u0161kio m.",

    A5_NAME: "Respublikos g.",

    A7_NAME: "111B",

    X_COORDINATE: "25.589929",
    Y_COORDINATE: "55.952926",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:44:07.080+03:00",
  },
  {
    ZIP: "88821",
    NAME: "Roki\u0161kio NORFA Panev\u0117\u017eio g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Panev\u0117\u017eio apskr.",
    A2_NAME: "Roki\u0161kio r. sav.",
    A3_NAME: "Roki\u0161kio m.",

    A5_NAME: "Panev\u0117\u017eio g.",

    A7_NAME: "1D",

    X_COORDINATE: "25.588392",
    Y_COORDINATE: "55.947001",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T13:05:52.963+02:00",
  },
  {
    ZIP: "75520",
    NAME: "Roobuka postiautomaat",

    A2_NAME: "Saku vald",
    A3_NAME: "Roobuka k\u00fcla",

    A5_NAME: "Roheluse tee",

    X_COORDINATE: "24.671790",
    Y_COORDINATE: "59.221647",

    MODIFIED: "2021-01-27T02:00:03.413+02:00",
  },
  {
    ZIP: "73290",
    NAME: "Roosna-Alliku postipunkt",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "Paide linn",
    A3_NAME: "Roosna-Alliku alevik",

    A5_NAME: "Pargi tn",

    X_COORDINATE: "25.708606",
    Y_COORDINATE: "59.029900",
    SERVICE_HOURS:
      "E,T,K,N 09:00-13:00, 14:00-16:00 R 09:00-13:00, 14:00-15:00 L,P SULETUD",

    MODIFIED: "2021-03-30T11:33:53.450+03:00",
  },
  {
    ZIP: "9138",
    NAME: "Ropa\u017eu Lats Pakom\u0101ts",

    A1_NAME: "Ropa\u017eu novads",
    A2_NAME: "",
    A3_NAME: "Ropa\u017ei",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "12",

    X_COORDINATE: "24.633702",
    Y_COORDINATE: "56.971875",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T13:44:43.070+02:00",
  },
  {
    ZIP: "77796",
    NAME: "Rudaminos IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Rudaminos k.",

    A5_NAME: "Gamyklos g.",

    A7_NAME: "26",

    X_COORDINATE: "25.341576",
    Y_COORDINATE: "54.592888",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, \u0161alia taromato",
    MODIFIED: "2021-03-21T10:11:19.473+02:00",
  },
  {
    ZIP: "93091",
    NAME: "Ruhnu postipunkt (raamatukogu)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Ruhnu vald",
    A3_NAME: "Ruhnu k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Raamatukogu",
    A7_NAME: "",

    X_COORDINATE: "23.245469",
    Y_COORDINATE: "57.802511",
    SERVICE_HOURS: "T,K,R 13:00-14:00 E,N,L,P SULETUD",

    MODIFIED: "2021-04-20T12:32:11.793+03:00",
  },
  {
    ZIP: "76393",
    NAME: "Ruila postipunkt (Ruila kauplus)",

    A2_NAME: "Saue vald",
    A3_NAME: "Ruila k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.437248",
    Y_COORDINATE: "59.192804",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-18:00",

    MODIFIED: "2021-01-30T17:20:01.457+02:00",
  },
  {
    ZIP: "55539",
    NAME: "Rum\u0161i\u0161ki\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kai\u0161iadori\u0173 r. sav.",
    A3_NAME: "Rum\u0161i\u0161ki\u0173 mstl.",

    A5_NAME: "L. Lekavi\u010diaus g.",

    A7_NAME: "32",

    X_COORDINATE: "24.214849",
    Y_COORDINATE: "54.872861",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:53:38.073+02:00",
  },
  {
    ZIP: "65048",
    NAME: "Ruusm\u00e4e postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "Ruusm\u00e4e k\u00fcla",

    A5_NAME: "Tammiku tee",

    A7_NAME: "17",

    X_COORDINATE: "27.088644",
    Y_COORDINATE: "57.635218",
    SERVICE_HOURS:
      "Alates 04.05.2021: E,T,K,N,R,L,P 10:00-19:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-04T10:14:21.890+03:00",
  },
  {
    ZIP: "96186",
    NAME: "R\u00e4pina Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "R\u00e4pina linn",

    A5_NAME: "Kooli tn",

    A7_NAME: "14a",

    X_COORDINATE: "27.459483",
    Y_COORDINATE: "58.095065",

    MODIFIED: "2020-11-11T08:18:44.947+02:00",
  },
  {
    ZIP: "96095",
    NAME: "R\u00e4pina Maxima X pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "R\u00e4pina linn",

    A5_NAME: "Pargi p\u00f5ik",

    X_COORDINATE: "27.451331",
    Y_COORDINATE: "58.096083",

    MODIFIED: "2020-11-11T08:18:26.567+02:00",
  },
  {
    ZIP: "64594",
    NAME: "R\u00e4pina postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "R\u00e4pina linn",

    A5_NAME: "V\u00f5handu tn",

    A7_NAME: "29",

    X_COORDINATE: "27.458669",
    Y_COORDINATE: "58.094524",
    SERVICE_HOURS: "E,T,K,N,R 14:00-16:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "17.06.2021 kuni 02.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "02.07.2021",

    MODIFIED: "2021-06-01T13:24:41.653+03:00",
  },
  {
    ZIP: "96151",
    NAME: "R\u00f5ngu Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Elva vald",
    A3_NAME: "R\u00f5ngu alevik",

    A5_NAME: "Tartu mnt",

    X_COORDINATE: "26.248487",
    Y_COORDINATE: "58.144093",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "90692",
    NAME: "R\u00f5ude postipunkt (k\u00fclamaja)",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "R\u00f5ude k\u00fcla",

    A5_NAME: "Siimu tee",

    A7_NAME: "",

    X_COORDINATE: "23.924808",
    Y_COORDINATE: "58.771811",
    SERVICE_HOURS: "T,K,N,R,L 11:00-13:00 E,P SULETUD",

    MODIFIED: "2021-05-07T10:08:33.140+03:00",
  },
  {
    ZIP: "66198",
    NAME: "R\u00f5uge postipunkt",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "R\u00f5uge alevik",

    A5_NAME: "S\u00e4nna mnt",

    X_COORDINATE: "26.911840",
    Y_COORDINATE: "57.726363",
    SERVICE_HOURS:
      "T,N,R 09:00-12:30, 13:00-17:00 L 09:00-15:00 E,K,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "12.06.2021 kuni 27.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "27.06.2021",
    TEMP_SERVICE_HOURS_2: "05.06.2021: L 09:00-13:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "05.06.2021",

    MODIFIED: "2021-06-04T10:48:12.640+03:00",
  },
  {
    ZIP: "9922",
    NAME: "R\u0113zeknes Atbr\u012bvo\u0161anas alejas Maxima XX pakom\u0101ts",

    A1_NAME: "R\u0113zekne",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Atbr\u012bvo\u0161anas aleja",

    A7_NAME: "141",

    X_COORDINATE: "27.339478",
    Y_COORDINATE: "56.524147",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-21T09:31:39.943+02:00",
  },
  {
    ZIP: "9974",
    NAME: "R\u0113zeknes Galdnieku ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u0113zekne",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Galdnieku iela",

    X_COORDINATE: "27.330051",
    Y_COORDINATE: "56.502257",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:21:34.667+02:00",
  },
  {
    ZIP: "9216",
    NAME: "R\u0113zeknes Kr. Valdem\u0101ra ielas Mego pakom\u0101ts",

    A1_NAME: "R\u0113zekne",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kr. Valdem\u0101ra iela",

    A7_NAME: "16A",

    X_COORDINATE: "27.335793",
    Y_COORDINATE: "56.514032",

    MODIFIED: "2020-11-13T06:13:47.030+02:00",
  },
  {
    ZIP: "9174",
    NAME: "R\u012bga, Br\u012bv\u012bbas g. 386 Neste pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas gatve",

    A7_NAME: "386",

    X_COORDINATE: "24.219941",
    Y_COORDINATE: "56.986521",

    comment_lav: "DUS teritorij\u0101",

    MODIFIED: "2021-01-14T07:38:38.077+02:00",
  },
  {
    ZIP: "9111",
    NAME: "R\u012bgas A.Bri\u0101na ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kri\u0161j\u0101\u0146a Valdem\u0101ra iela",

    A7_NAME: "62A",

    X_COORDINATE: "24.131107",
    Y_COORDINATE: "56.966025",

    comment_lav: "Pa labi no galven\u0101s ieejas",

    MODIFIED: "2021-05-31T08:19:48.797+03:00",
  },
  {
    ZIP: "9169",
    NAME: "R\u012bgas A.Deglava 110 Rimi pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Augusta Deglava iela",

    A7_NAME: "110",

    X_COORDINATE: "24.193661",
    Y_COORDINATE: "56.947535",

    MODIFIED: "2020-11-13T05:40:37.813+02:00",
  },
  {
    ZIP: "9902",
    NAME: "R\u012bgas Anni\u0146mui\u017eas bulv\u0101ra RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Anni\u0146mui\u017eas bulv\u0101ris",

    A7_NAME: "40A",

    X_COORDINATE: "24.012615",
    Y_COORDINATE: "56.960407",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:23:03.837+02:00",
  },
  {
    ZIP: "9116",
    NAME: "R\u012bgas Autoostas pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Pr\u0101gas iela",

    X_COORDINATE: "24.114689",
    Y_COORDINATE: "56.945046",

    comment_lav: "Ieeja autoost\u0101 blakus kan\u0101lam",

    MODIFIED: "2020-11-12T12:57:11.917+02:00",
  },
  {
    ZIP: "9160",
    NAME: "R\u012bgas Bi\u0137ernieku ielas 16a MEGO pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Bi\u0137ernieku iela",

    A7_NAME: "16A",

    X_COORDINATE: "24.180611",
    Y_COORDINATE: "56.970468",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:24:25.173+02:00",
  },
  {
    ZIP: "9933",
    NAME: "R\u012bgas Bi\u0137ernieku ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Bi\u0137ernieku iela",

    A7_NAME: "160 k-6",

    X_COORDINATE: "24.253370",
    Y_COORDINATE: "56.956909",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-03-11T06:29:53.540+02:00",
  },
  {
    ZIP: "9960",
    NAME: "R\u012bgas Bolder\u0101jas Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gobas iela",

    A7_NAME: "13",

    X_COORDINATE: "24.048143",
    Y_COORDINATE: "57.033239",

    comment_lav: "Blakus T/C centr\u0101lai ieejai",

    MODIFIED: "2020-11-13T07:43:15.233+02:00",
  },
  {
    ZIP: "9975",
    NAME: "R\u012bgas Bot\u0101nisk\u0101 d\u0101rza Maxima pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Dzirciema iela",

    X_COORDINATE: "24.053630",
    Y_COORDINATE: "56.949429",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:24:41.877+02:00",
  },
  {
    ZIP: "9968",
    NAME: "R\u012bgas Br\u012bv\u012bbas g. 253 Neste pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas gatve",

    A7_NAME: "253",

    X_COORDINATE: "24.181891",
    Y_COORDINATE: "56.978119",

    comment_lav: "DUS teritorij\u0101",

    MODIFIED: "2021-01-14T07:30:17.707+02:00",
  },
  {
    ZIP: "9115",
    NAME: "R\u012bgas Br\u012bv\u012bbas ielas 35 pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    A7_NAME: "35",

    X_COORDINATE: "24.119659",
    Y_COORDINATE: "56.955587",

    comment_lav: "Autost\u0101vvietas teritorij\u0101",

    MODIFIED: "2020-11-19T10:38:00.950+02:00",
  },
  {
    ZIP: "9946",
    NAME: "R\u012bgas B\u0113rnu pasaules RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Mat\u012bsa iela",

    A7_NAME: "25",

    X_COORDINATE: "24.134079",
    Y_COORDINATE: "56.957136",

    MODIFIED: "2021-05-31T08:20:33.430+03:00",
  },
  {
    ZIP: "9904",
    NAME: "R\u012bgas Deglava ielas Maxima XXX pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Augusta Deglava iela",

    A7_NAME: "67",

    X_COORDINATE: "24.186979",
    Y_COORDINATE: "56.950617",

    comment_lav: "Pa kreisi no T/C centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:25:47.440+02:00",
  },
  {
    ZIP: "9143",
    NAME: "R\u012bgas Duntes ielas Neste pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Dambja iela",

    X_COORDINATE: "24.130643",
    Y_COORDINATE: "56.987889",

    comment_lav: "DUS teritorij\u0101",

    MODIFIED: "2021-02-02T07:30:03.823+02:00",
  },
  {
    ZIP: "9962",
    NAME: "R\u012bgas Dzelzavas ielas Mini RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Dzelzavas iela",

    A7_NAME: "86",

    X_COORDINATE: "24.204955",
    Y_COORDINATE: "56.954144",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T07:58:46.583+02:00",
  },
  {
    ZIP: "9909",
    NAME: "R\u012bgas G.Astras ielas VIADA pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gun\u0101ra Astras iela",

    X_COORDINATE: "24.189278",
    Y_COORDINATE: "56.956886",

    comment_lav: "DUS VIADA teritorij\u0101",

    MODIFIED: "2020-11-13T06:27:39.080+02:00",
  },
  {
    ZIP: "9908",
    NAME: "R\u012bgas Gramzdas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Imantas 15. l\u012bnija",

    X_COORDINATE: "24.011006",
    Y_COORDINATE: "56.944584",

    comment_lav: "Pa kreisi no centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:38:57.667+02:00",
  },
  {
    ZIP: "9972",
    NAME: "R\u012bgas Grostonas ielas Maxima XXX pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Grostonas iela",

    X_COORDINATE: "24.119061",
    Y_COORDINATE: "56.964547",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:27:22.023+02:00",
  },
  {
    ZIP: "9185",
    NAME: "R\u012bgas Jaunciema gatves Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Jaunciema gatve",

    A7_NAME: "174",

    X_COORDINATE: "24.173750",
    Y_COORDINATE: "57.043955",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:27:51.327+02:00",
  },
  {
    ZIP: "9164",
    NAME: "R\u012bgas Juglas ielas 45 Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Juglas iela",

    A7_NAME: "45",

    X_COORDINATE: "24.253292",
    Y_COORDINATE: "56.978237",

    comment_lav: "Aiz veikala st\u016bra Juglas ielas pus\u0113",

    MODIFIED: "2021-05-31T08:21:29.193+03:00",
  },
  {
    ZIP: "9161",
    NAME: "R\u012bgas J\u016brmalas gatves RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Anni\u0146mui\u017eas bulv\u0101ris",

    A7_NAME: "90",

    X_COORDINATE: "24.007918",
    Y_COORDINATE: "56.954165",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T14:28:23.310+02:00",
  },
  {
    ZIP: "9147",
    NAME: "R\u012bgas Kalnciema ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kalnciema iela",

    A7_NAME: "41",

    X_COORDINATE: "24.062696",
    Y_COORDINATE: "56.942354",

    comment_lav: "Pie ieejas veikal\u0101",

    MODIFIED: "2020-11-12T14:00:38.870+02:00",
  },
  {
    ZIP: "9178",
    NAME: "R\u012bgas Kato\u013cu ielas Neste pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kato\u013cu iela",

    X_COORDINATE: "24.138074",
    Y_COORDINATE: "56.940763",

    comment_lav: "DUS teritorij\u0101",

    MODIFIED: "2020-11-13T05:46:11.733+02:00",
  },
  {
    ZIP: "9150",
    NAME: "R\u012bgas Kleistu ielas Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kleistu iela",

    X_COORDINATE: "24.022067",
    Y_COORDINATE: "56.962575",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T14:16:25.197+02:00",
  },
  {
    ZIP: "9939",
    NAME: "R\u012bgas Kr.Valdem\u0101ra ielas 112 RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kri\u0161j\u0101\u0146a Valdem\u0101ra iela",

    A7_NAME: "112",

    X_COORDINATE: "24.135998",
    Y_COORDINATE: "56.974503",

    comment_lav: "Blakus st\u0101vlaukumam Valdem\u0101ra ielas pus\u0113",

    MODIFIED: "2021-04-14T06:34:20.387+03:00",
  },
  {
    ZIP: "9123",
    NAME: "R\u012bgas Kurzemes prospekta Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kurzemes prospekts",

    A7_NAME: "132",

    X_COORDINATE: "24.000171",
    Y_COORDINATE: "56.962186",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-12T13:02:35.113+02:00",
  },
  {
    ZIP: "9171",
    NAME: "R\u012bgas Le\u013c\u013cu te\u0101tra pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Elizabetes iela",

    A7_NAME: "81",

    X_COORDINATE: "24.121591",
    Y_COORDINATE: "56.950652",

    comment_lav: "Pie autost\u0101vvietas iebrauktuves",

    MODIFIED: "2021-05-31T08:27:48.533+03:00",
  },
  {
    ZIP: "9122",
    NAME: "R\u012bgas Lido\u0146u ielas Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Lido\u0146u iela",

    A7_NAME: "27 k-1",

    X_COORDINATE: "24.059747",
    Y_COORDINATE: "56.968914",

    comment_lav: "Autost\u0101vvietas teritorij\u0101",

    MODIFIED: "2020-11-12T13:02:02.193+02:00",
  },
  {
    ZIP: "9907",
    NAME: "R\u012bgas Maz\u0101s stacijas ielas Drogas pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Maz\u0101 Stacijas iela",

    A7_NAME: "2A",

    X_COORDINATE: "24.051041",
    Y_COORDINATE: "56.959834",

    comment_lav: "Pie aptiekas Dzirciema ielas pus\u0113",

    MODIFIED: "2021-06-03T08:44:57.077+03:00",
  },
  {
    ZIP: "9977",
    NAME: "R\u012bgas Me\u017eciema RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Sergeja Eizen\u0161teina iela",

    A7_NAME: "29",

    X_COORDINATE: "24.232268",
    Y_COORDINATE: "56.969052",

    comment_lav: "Autost\u0101viet\u0101 pie apsarga b\u016bdas",

    MODIFIED: "2020-11-13T08:21:06.607+02:00",
  },
  {
    ZIP: "9173",
    NAME: "R\u012bgas Miera ielas 2 pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Miera iela",

    X_COORDINATE: "24.129450",
    Y_COORDINATE: "56.960288",

    comment_lav: "\u0112kas gal\u0101, Br\u012bv\u012bbas ielas pus\u0113",

    MODIFIED: "2020-11-13T05:42:43.457+02:00",
  },
  {
    ZIP: "9976",
    NAME: "R\u012bgas M\u012blgr\u0101vja ielas RIMI pakom\u0101ts ",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "M\u012blgr\u0101vja iela",

    A7_NAME: "14",

    X_COORDINATE: "24.139263",
    Y_COORDINATE: "57.025539",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:41:33.790+02:00",
  },
  {
    ZIP: "9177",
    NAME: "R\u012bgas M\u016bkusalas Maxima XX pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "M\u016bkusalas iela",

    A7_NAME: "73",

    X_COORDINATE: "24.106749",
    Y_COORDINATE: "56.922959",

    MODIFIED: "2020-11-13T05:44:49.353+02:00",
  },
  {
    ZIP: "9112",
    NAME: "R\u012bgas N\u012bcgales ielas 53 T/C GREEN pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "N\u012bcgales iela",

    A7_NAME: "53",

    X_COORDINATE: "24.173276",
    Y_COORDINATE: "56.945157",

    MODIFIED: "2021-01-14T07:39:43.010+02:00",
  },
  {
    ZIP: "9903",
    NAME: "R\u012bgas P.Brie\u017ea ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Pulkve\u017ea Brie\u017ea iela",

    X_COORDINATE: "24.105871",
    Y_COORDINATE: "56.964867",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:23:24.547+02:00",
  },
  {
    ZIP: "9151",
    NAME: "R\u012bgas Par\u0101des ielas Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Par\u0101des iela",

    A7_NAME: "5B",

    X_COORDINATE: "24.028616",
    Y_COORDINATE: "57.039927",

    MODIFIED: "2020-11-12T14:17:06.163+02:00",
  },
  {
    ZIP: "9129",
    NAME: "R\u012bgas Pr\u016b\u0161u ielas 2 Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Pr\u016b\u0161u iela",

    X_COORDINATE: "24.177618",
    Y_COORDINATE: "56.914860",

    MODIFIED: "2021-01-14T07:29:43.487+02:00",
  },
  {
    ZIP: "9179",
    NAME: "R\u012bgas Pr\u016b\u0161u ielas 22a Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Pr\u016b\u0161u iela",

    A7_NAME: "22A",

    X_COORDINATE: "24.188408",
    Y_COORDINATE: "56.913259",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:46:46.477+02:00",
  },
  {
    ZIP: "9176",
    NAME: "R\u012bgas R\u012btupes ielas Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012btupes iela",

    X_COORDINATE: "24.167999",
    Y_COORDINATE: "56.932168",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:44:14.970+02:00",
  },
  {
    ZIP: "9175",
    NAME: "R\u012bgas Saharova ielas Maxima XXX pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Andreja Saharova iela",

    A7_NAME: "20A",

    X_COORDINATE: "24.207170",
    Y_COORDINATE: "56.940965",

    comment_lav: "Blakus veikala Jysk ieejai",

    MODIFIED: "2020-11-13T05:43:44.103+02:00",
  },
  {
    ZIP: "9906",
    NAME: "R\u012bgas Saharova ielas Mego pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Andreja Saharova iela",

    A7_NAME: "14",

    X_COORDINATE: "24.204168",
    Y_COORDINATE: "56.937157",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:25:04.707+02:00",
  },
  {
    ZIP: "9109",
    NAME: "R\u012bgas Stirnu ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Stirnu iela",

    A7_NAME: "26",

    X_COORDINATE: "24.185951",
    Y_COORDINATE: "56.958986",

    MODIFIED: "2021-05-31T08:28:26.437+03:00",
  },
  {
    ZIP: "9937",
    NAME: "R\u012bgas T/C A7 pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Ziepniekkalna iela",

    A7_NAME: "50",

    X_COORDINATE: "24.139598",
    Y_COORDINATE: "56.895823",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:55:16.873+02:00",
  },
  {
    ZIP: "9101",
    NAME: "R\u012bgas T/C Akropole pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Maskavas iela",

    A7_NAME: "257",

    X_COORDINATE: "24.175240",
    Y_COORDINATE: "56.923813",

    comment_lav:
      "Lokomot\u012bves ielas pus\u0113 pie ieejas blakus ramp\u0101m",

    MODIFIED: "2020-11-12T10:36:47.163+02:00",
  },
  {
    ZIP: "9180",
    NAME: "R\u012bgas T/C Aleja pakom\u0101ts ",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Vien\u012bbas gatve",

    A7_NAME: "194A",

    X_COORDINATE: "24.078595",
    Y_COORDINATE: "56.896874",

    comment_lav: "T/C St\u0101vviet\u0101 pie RIMI drive-in",

    MODIFIED: "2020-11-13T10:45:27.577+02:00",
  },
  {
    ZIP: "9901",
    NAME: "R\u012bgas T/C Alfa pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas gatve",

    A7_NAME: "372",

    X_COORDINATE: "24.203503",
    Y_COORDINATE: "56.982670",

    comment_lav:
      "Daudzst\u0101vu auto st\u0101vvietas pirmaj\u0101 st\u0101v\u0101, pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:01:02.493+02:00",
  },
  {
    ZIP: "9113",
    NAME: "R\u012bgas T/C DOMINA pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Ieri\u0137u iela",

    X_COORDINATE: "24.161228",
    Y_COORDINATE: "56.966325",

    comment_lav: "Pa kreisi no galven\u0101s ieejas",

    MODIFIED: "2021-01-14T07:42:14.283+02:00",
  },
  {
    ZIP: "9935",
    NAME: "R\u012bgas T/C Damme pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Kurzemes prospekts",

    A7_NAME: "1A",

    X_COORDINATE: "24.037701",
    Y_COORDINATE: "56.953259",

    comment_lav: "Blakus T/C ieejai",

    MODIFIED: "2020-11-13T06:50:00.510+02:00",
  },
  {
    ZIP: "9905",
    NAME: "R\u012bgas T/C Dole pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Maskavas iela",

    A7_NAME: "357",

    X_COORDINATE: "24.191380",
    Y_COORDINATE: "56.905651",

    comment_lav: "Pie k\u0101pn\u0113m, kas ved uz 2. st\u0101va ieeju",

    MODIFIED: "2020-11-13T06:24:16.917+02:00",
  },
  {
    ZIP: "9159",
    NAME: "R\u012bgas T/C Elkor Plaza pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas gatve",

    A7_NAME: "201",

    X_COORDINATE: "24.162946",
    Y_COORDINATE: "56.974645",

    MODIFIED: "2021-04-14T05:51:09.540+03:00",
  },
  {
    ZIP: "9188",
    NAME: "R\u012bgas T/C Gai\u013cezers pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gai\u013cezera iela",

    X_COORDINATE: "24.236748",
    Y_COORDINATE: "56.968075",

    comment_lav: "Blakus T/C centr\u0101lai ieejai",

    MODIFIED: "2021-05-31T08:29:06.857+03:00",
  },
  {
    ZIP: "9181",
    NAME: "R\u012bgas T/C IXO pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Anni\u0146mui\u017eas iela",

    A7_NAME: "17",

    X_COORDINATE: "24.017936",
    Y_COORDINATE: "56.943368",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T10:45:59.983+02:00",
  },
  {
    ZIP: "9915",
    NAME: "R\u012bgas T/C Juglas Centrs pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Juglas iela",

    X_COORDINATE: "24.244250",
    Y_COORDINATE: "56.988595",

    comment_lav: "Pie st\u0101vlaukuma Juglas ielas pus\u0113",

    MODIFIED: "2020-11-13T06:31:34.833+02:00",
  },
  {
    ZIP: "9954",
    NAME: "R\u012bgas T/C Minska pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "N\u012bcgales iela",

    X_COORDINATE: "24.174548",
    Y_COORDINATE: "56.959053",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2021-05-31T08:29:23.633+03:00",
  },
  {
    ZIP: "9911",
    NAME: "R\u012bgas T/C Mols pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Krasta iela",

    A7_NAME: "46",

    X_COORDINATE: "24.142799",
    Y_COORDINATE: "56.934696",

    comment_lav: "Blakus iebrauktuvei uz daudzst\u0101vu autost\u0101vvietu",

    MODIFIED: "2020-11-13T06:29:21.537+02:00",
  },
  {
    ZIP: "9934",
    NAME: "R\u012bgas T/C Olimpia pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "\u0100zenes iela",

    X_COORDINATE: "24.081280",
    Y_COORDINATE: "56.949924",

    comment_lav: "Blakus iebrauktuvei pazemes autost\u0101vviet\u0101",

    MODIFIED: "2020-11-13T06:49:33.347+02:00",
  },
  {
    ZIP: "9965",
    NAME: "R\u012bgas T/C Origo pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Stacijas laukums",

    X_COORDINATE: "24.118524",
    Y_COORDINATE: "56.946970",

    comment_lav: "Pa kreisi no Hesburger ieejas",

    MODIFIED: "2020-11-13T08:00:37.543+02:00",
  },
  {
    ZIP: "9114",
    NAME: "R\u012bgas T/C Riga Plaza pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "M\u016bkusalas iela",

    A7_NAME: "71",

    X_COORDINATE: "24.103152",
    Y_COORDINATE: "56.926608",

    comment_lav: "Pa kreisi no \u0145ujorkas ieejas",

    MODIFIED: "2021-01-14T07:43:26.257+02:00",
  },
  {
    ZIP: "9914",
    NAME: "R\u012bgas T/C Spice pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Lielirbes iela",

    A7_NAME: "29",

    X_COORDINATE: "24.036562",
    Y_COORDINATE: "56.929756",

    comment_lav: "Blakus E ieejai uz RIMI ",

    MODIFIED: "2021-02-23T07:15:53.667+02:00",
  },
  {
    ZIP: "9995",
    NAME: "R\u012bgas T/C ZOOM pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Maskavas iela",

    A7_NAME: "400",

    X_COORDINATE: "24.204341",
    Y_COORDINATE: "56.897933",

    comment_lav: "T/C labaj\u0101 pus\u0113",

    MODIFIED: "2021-01-14T07:43:49.233+02:00",
  },
  {
    ZIP: "9128",
    NAME: "R\u012bgas Tilta ielas RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Tilta iela",

    A7_NAME: "32",

    X_COORDINATE: "24.129916",
    Y_COORDINATE: "56.995475",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:40:02.343+02:00",
  },
  {
    ZIP: "9172",
    NAME: "R\u012bgas T\u0113ri\u0146u ielas ELVI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "T\u0113ri\u0146u iela",

    A7_NAME: "62",

    X_COORDINATE: "24.067190",
    Y_COORDINATE: "56.912665",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T10:47:35.797+02:00",
  },
  {
    ZIP: "9971",
    NAME: "R\u012bgas Ulbrokas ielas Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Ulbrokas iela",

    X_COORDINATE: "24.217193",
    Y_COORDINATE: "56.940718",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:29:15.623+02:00",
  },
  {
    ZIP: "9215",
    NAME: "R\u012bgas Valde\u0137u ielas 10 Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Valde\u0137u iela",

    X_COORDINATE: "24.097515",
    Y_COORDINATE: "56.915883",

    MODIFIED: "2021-01-14T07:44:52.180+02:00",
  },
  {
    ZIP: "9144",
    NAME: "R\u012bgas Valsts Ie\u0146\u0113mumu Dienesta pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Talejas iela",

    X_COORDINATE: "24.170110",
    Y_COORDINATE: "56.990924",

    MODIFIED: "2020-11-12T13:53:15.043+02:00",
  },
  {
    ZIP: "9146",
    NAME: "R\u012bgas Vecm\u012blgr\u0101vja Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Augusta Dombrovska iela",

    A7_NAME: "74",

    X_COORDINATE: "24.098121",
    Y_COORDINATE: "57.036187",

    comment_lav: "Blakus T/C centr\u0101lai ieejai",

    MODIFIED: "2021-01-14T07:45:25.460+02:00",
  },
  {
    ZIP: "9959",
    NAME: "R\u012bgas Vecm\u012blgr\u0101vja RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Augusta Dombrovska iela",

    A7_NAME: "23",

    X_COORDINATE: "24.109413",
    Y_COORDINATE: "57.031557",

    comment_lav: "Blakus T/C centr\u0101lai ieejai",

    MODIFIED: "2021-04-08T05:55:44.220+03:00",
  },
  {
    ZIP: "9191",
    NAME: "R\u012bgas Vec\u0101\u0137u VESKO pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Manga\u013cu prospekts",

    A7_NAME: "29",

    X_COORDINATE: "24.102267",
    Y_COORDINATE: "57.070489",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:57:35.643+02:00",
  },
  {
    ZIP: "9912",
    NAME: "R\u012bgas Vien\u012bbas gatves 144 Neste pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Vien\u012bbas gatve",

    A7_NAME: "144",

    X_COORDINATE: "24.087246",
    Y_COORDINATE: "56.910175",

    comment_lav: "DUS Neste teritorij\u0101 labaj\u0101 pus\u0113 no Narvessen",

    MODIFIED: "2020-11-13T06:29:49.947+02:00",
  },
  {
    ZIP: "9961",
    NAME: "R\u012bgas Ziepniekkalna MEGO pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Di\u017eozolu iela",

    X_COORDINATE: "24.094935",
    Y_COORDINATE: "56.902811",

    comment_lav: "Blakus T/C centr\u0101lai ieejai",

    MODIFIED: "2020-11-13T07:58:07.537+02:00",
  },
  {
    ZIP: "9964",
    NAME: "R\u012bgas \u0100genskalna Maxima X pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Pilso\u0146u iela",

    X_COORDINATE: "24.069245",
    Y_COORDINATE: "56.935109",

    comment_lav: "Pa kreisi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-13T07:59:39.753+02:00",
  },
  {
    ZIP: "9103",
    NAME: "R\u012bgas \u0100genskalna RIMI pakom\u0101ts",

    A1_NAME: "R\u012bga",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "M\u0101rupes iela",

    A7_NAME: "10A",

    X_COORDINATE: "24.072957",
    Y_COORDINATE: "56.931969",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:45:58.250+02:00",
  },
  {
    ZIP: "77797",
    NAME: "R\u016bdi\u0161ki\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Trak\u0173 r. sav.",
    A3_NAME: "R\u016bdi\u0161ki\u0173 m.",

    A5_NAME: "Trak\u0173 g.",

    A7_NAME: "10A",

    X_COORDINATE: "24.834814",
    Y_COORDINATE: "54.521332",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T07:24:59.490+03:00",
  },
  {
    ZIP: "9991",
    NAME: "R\u016bjienas TOP pakom\u0101ts",

    A1_NAME: "R\u016bjienas novads",
    A2_NAME: "R\u016bjiena",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    X_COORDINATE: "25.324608",
    Y_COORDINATE: "57.897406",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T10:36:26.840+02:00",
  },
  {
    ZIP: "96199",
    NAME: "Saaremaa Kaubamaja pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Kuressaare linn",

    A5_NAME: "Raekoja tn",

    X_COORDINATE: "22.485453",
    Y_COORDINATE: "58.251784",

    MODIFIED: "2021-05-24T06:22:28.447+03:00",
  },
  {
    ZIP: "96050",
    NAME: "Saku Coop Konsumi pakiautomaat",

    A2_NAME: "Saku vald",
    A3_NAME: "Saku alevik",

    A5_NAME: "Pargi tn",

    X_COORDINATE: "24.662315",
    Y_COORDINATE: "59.300088",

    MODIFIED: "2021-04-12T12:19:40.967+03:00",
  },
  {
    ZIP: "96301",
    NAME: "Saku Selveri pakiautomaat",

    A2_NAME: "Saku vald",
    A3_NAME: "Saku alevik",

    A5_NAME: "\u00dcksnurme tee",

    X_COORDINATE: "24.656249",
    Y_COORDINATE: "59.293669",

    MODIFIED: "2021-04-12T12:20:50.343+03:00",
  },
  {
    ZIP: "75591",
    NAME: "Saku postkontor",

    A2_NAME: "Saku vald",
    A3_NAME: "Saku alevik",

    A5_NAME: "Teaduse tn",

    X_COORDINATE: "24.658406",
    Y_COORDINATE: "59.299626",
    SERVICE_HOURS: "E,T,N 12:00-18:00 K 09:00-14:00 R 09:00-13:30 L,P SULETUD",

    TEMP_SERVICE_HOURS_2: "Kuni 04.06.2021: E,K,R 11:00-18:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "04.06.2021",

    MODIFIED: "2021-05-25T10:57:19.993+03:00",
  },
  {
    ZIP: "9121",
    NAME: "Salacgr\u012bvas Maxima X pakom\u0101ts",

    A1_NAME: "Salacgr\u012bvas novads",
    A2_NAME: "Salacgr\u012bva",
    A3_NAME: "",

    A5_NAME: "Vidzemes iela",

    A7_NAME: "3A",

    X_COORDINATE: "24.359126",
    Y_COORDINATE: "57.751799",

    MODIFIED: "2020-11-12T13:01:21.220+02:00",
  },
  {
    ZIP: "9189",
    NAME: "Salaspils R\u012bgas ielas Sen\u0101s Bodes pakom\u0101ts",

    A1_NAME: "Salaspils novads",
    A2_NAME: "Salaspils",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "38",

    X_COORDINATE: "24.350649",
    Y_COORDINATE: "56.861699",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:46:59.907+02:00",
  },
  {
    ZIP: "9947",
    NAME: "Salaspils Skolas ielas RIMI pakom\u0101ts",

    A1_NAME: "Salaspils novads",
    A2_NAME: "Salaspils",
    A3_NAME: "",

    A5_NAME: "Skolas iela",

    A7_NAME: "4A",

    X_COORDINATE: "24.333762",
    Y_COORDINATE: "56.856382",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:46:33.970+02:00",
  },
  {
    ZIP: "9936",
    NAME: "Saldus Br\u012bv\u012bbas ielas Maxima XX pakom\u0101ts",

    A1_NAME: "Saldus novads",
    A2_NAME: "Saldus",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    A7_NAME: "30",

    X_COORDINATE: "22.490301",
    Y_COORDINATE: "56.668266",

    comment_lav: "Blakus T/C ieejai",

    MODIFIED: "2020-11-13T06:50:31.543+02:00",
  },
  {
    ZIP: "9208",
    NAME: "Saldus Stri\u0137u ielas Maxima X pakom\u0101ts",

    A1_NAME: "Saldus novads",
    A2_NAME: "Saldus",
    A3_NAME: "",

    A5_NAME: "Stri\u0137u iela",

    A7_NAME: "10C",

    X_COORDINATE: "22.495103",
    Y_COORDINATE: "56.665591",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T10:44:23.207+02:00",
  },
  {
    ZIP: "96318",
    NAME: "Salme Rannapargi tee pakiautomaat",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Salme alevik",

    A5_NAME: "Rannapargi tee",

    X_COORDINATE: "22.254761",
    Y_COORDINATE: "58.163316",

    MODIFIED: "2019-07-23T12:52:34.803+03:00",
  },
  {
    ZIP: "93294",
    NAME: "Salme postipunkt",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Salme alevik",

    A5_NAME: "S\u00f5rve mnt",

    X_COORDINATE: "22.251243",
    Y_COORDINATE: "58.163520",
    SERVICE_HOURS:
      "E,T,K 09:00-12:00, 13:00-16:00 N 10:00-12:00, 13:00-17:00 R 09:00-12:00, 13:00-14:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "14.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "14.06.2021",

    MODIFIED: "2021-06-03T13:16:27.600+03:00",
  },
  {
    ZIP: "94195",
    NAME: "Sandla postipunkt (Maapood)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Sandla k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "22.819882",
    Y_COORDINATE: "58.305516",
    SERVICE_HOURS: "E,T,K,N,R 09:30-18:00 L,P 10:00-16:00",

    MODIFIED: "2021-03-22T08:53:38.940+02:00",
  },
  {
    ZIP: "67094",
    NAME: "Sangaste postipunkt",

    A1_NAME: "Valga maakond",
    A2_NAME: "Otep\u00e4\u00e4 vald",
    A3_NAME: "Sangaste alevik",

    A5_NAME: "Valga mnt",

    X_COORDINATE: "26.330912",
    Y_COORDINATE: "57.925608",
    SERVICE_HOURS: "E,T,N,R 10:00-14:00 K 12:00-16:00 L,P SULETUD",

    MODIFIED: "2021-03-30T11:36:18.030+03:00",
  },
  {
    ZIP: "96184",
    NAME: "Saue Grossi pakiautomaat",

    A2_NAME: "Saue vald",
    A3_NAME: "Saue linn",

    A5_NAME: "P\u00e4rnasalu p\u00f5ik",

    A7_NAME: "1b",

    X_COORDINATE: "24.556463",
    Y_COORDINATE: "59.321936",

    MODIFIED: "2020-12-14T07:53:48.873+02:00",
  },
  {
    ZIP: "96055",
    NAME: "Saue Kaubakeskuse pakiautomaat",

    A2_NAME: "Saue vald",
    A3_NAME: "Saue linn",

    A5_NAME: "Ridva tn",

    A7_NAME: "15",

    X_COORDINATE: "24.552558",
    Y_COORDINATE: "59.324906",

    MODIFIED: "2021-05-26T06:39:34.837+03:00",
  },
  {
    ZIP: "76501",
    NAME: "Saue postkontor",

    A2_NAME: "Saue vald",
    A3_NAME: "Saue linn",

    A5_NAME: "K\u00fctise tn",

    X_COORDINATE: "24.553621",
    Y_COORDINATE: "59.324550",
    SERVICE_HOURS:
      "E,T,K,N 10:00-18:00 R 10:00-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-12T13:21:42.207+03:00",
  },
  {
    ZIP: "96148",
    NAME: "Sauga Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "Sauga alevik",

    A5_NAME: "Kuldnoka tn",

    X_COORDINATE: "24.497332",
    Y_COORDINATE: "58.429088",

    MODIFIED: "2021-05-24T13:46:40.523+03:00",
  },
  {
    ZIP: "85000",
    NAME: "Sauga postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "Sauga alevik",

    A5_NAME: "Kuldnoka tn",

    X_COORDINATE: "24.497619",
    Y_COORDINATE: "58.429052",
    SERVICE_HOURS:
      "E,K,R 09:00-15:30 T,N,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    TEMP_SERVICE_HOURS_2: "09.06.2021: 09:00-13:00;14:30-15:30",
    TEMP_SERVICE_HOURS_2_UNTIL: "09.06.2021",

    MODIFIED: "2021-06-03T09:59:33.950+03:00",
  },
  {
    ZIP: "9149",
    NAME: "Saulkrastu TOP pakom\u0101ts",

    A1_NAME: "Saulkrastu novads",
    A2_NAME: "Saulkrasti",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "51",

    X_COORDINATE: "24.401234",
    Y_COORDINATE: "57.243198",

    MODIFIED: "2020-11-12T14:15:51.533+02:00",
  },
  {
    ZIP: "9986",
    NAME: "Siguldas ELVI Vidus iela pakom\u0101ts",

    A1_NAME: "Siguldas novads",
    A2_NAME: "Sigulda",
    A3_NAME: "",

    A5_NAME: "Vidus iela",

    X_COORDINATE: "24.847944",
    Y_COORDINATE: "57.153237",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:47:24.563+02:00",
  },
  {
    ZIP: "9932",
    NAME: "Siguldas T/C \u0160okol\u0101de pakom\u0101ts",

    A1_NAME: "Siguldas novads",
    A2_NAME: "Sigulda",
    A3_NAME: "",

    A5_NAME: "Str\u0113lnieku iela",

    X_COORDINATE: "24.844282",
    Y_COORDINATE: "57.143288",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2020-11-13T06:48:27.007+02:00",
  },
  {
    ZIP: "96054",
    NAME: "Sillam\u00e4e Coop Maksimarketi pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Sillam\u00e4e linn",
    A3_NAME: "",

    A5_NAME: "Viru pst",

    A7_NAME: "5a",

    X_COORDINATE: "27.777892",
    Y_COORDINATE: "59.391665",

    MODIFIED: "2020-12-09T07:29:08.483+02:00",
  },
  {
    ZIP: "96222",
    NAME: "Sillam\u00e4e Viru pst Maxima X pakiautomaat",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Sillam\u00e4e linn",
    A3_NAME: "",

    A5_NAME: "Viru pst",

    A7_NAME: "35",

    X_COORDINATE: "27.790681",
    Y_COORDINATE: "59.391200",

    MODIFIED: "2020-11-11T08:21:03.883+02:00",
  },
  {
    ZIP: "40201",
    NAME: "Sillam\u00e4e postkontor",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Sillam\u00e4e linn",
    A3_NAME: "",

    A5_NAME: "I. Pavlovi tn",

    A7_NAME: "2a",

    X_COORDINATE: "27.773496",
    Y_COORDINATE: "59.392925",
    SERVICE_HOURS:
      "Kuni 13.06.2021: E,T,R 10:00-15:00 K,N 12:00-17:00;Alates 14.06.2021: E,T,R 11:00-15:00 K,N 11:00-18:00;L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-06-01T11:24:52.567+03:00",
  },
  {
    ZIP: "55540",
    NAME: "Simno KOOPS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Alytaus r. sav.",
    A3_NAME: "Simno m.",

    A5_NAME: "Alytaus g.",

    X_COORDINATE: "23.650367",
    Y_COORDINATE: "54.383568",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T11:58:45.293+02:00",
  },
  {
    ZIP: "46294",
    NAME: "Simuna postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "V\u00e4ike-Maarja vald",
    A3_NAME: "Simuna alevik",

    A5_NAME: "Lai tn",

    X_COORDINATE: "26.400488",
    Y_COORDINATE: "59.045637",
    SERVICE_HOURS: "E,T,K,N,R 11:00-15:00 L,P SULETUD",

    MODIFIED: "2021-04-14T09:15:37.267+03:00",
  },
  {
    ZIP: "96316",
    NAME: "Sindi Maxima X pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "Sindi linn",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "57",

    X_COORDINATE: "24.659602",
    Y_COORDINATE: "58.407817",

    MODIFIED: "2021-05-24T13:52:38.987+03:00",
  },
  {
    ZIP: "86701",
    NAME: "Sindi postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "Sindi linn",

    A5_NAME: "Jaama tn",

    X_COORDINATE: "24.651648",
    Y_COORDINATE: "58.404795",
    SERVICE_HOURS:
      "E,K,R 09:00-16:00 T,N 11:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-03T08:33:51.183+03:00",
  },
  {
    ZIP: "40194",
    NAME: "Sinim\u00e4e postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Narva-J\u00f5esuu linn",
    A3_NAME: "Sinim\u00e4e alevik",

    A5_NAME: "Kesk tn",

    X_COORDINATE: "27.874325",
    Y_COORDINATE: "59.374295",
    SERVICE_HOURS:
      "T,K,N,R 10:00-18:00 L 10:00-14:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:36:52.390+03:00",
  },
  {
    ZIP: "9203",
    NAME: "Skaistkalnes VESKO pakom\u0101ts",

    A1_NAME: "Vecumnieku novads",
    A2_NAME: "Skaistkalnes pagasts",
    A3_NAME: "Skaistkalne",

    A5_NAME: "R\u012bgas iela",

    X_COORDINATE: "24.645080",
    Y_COORDINATE: "56.379066",

    MODIFIED: "2020-11-13T06:14:47.200+02:00",
  },
  {
    ZIP: "55566",
    NAME: "Skaudvil\u0117s MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Taurag\u0117s r. sav.",
    A3_NAME: "Skaudvil\u0117s m.",

    A5_NAME: "Liaudies a.",

    A7_NAME: "16",

    X_COORDINATE: "22.582196",
    Y_COORDINATE: "55.407203",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-20T06:30:11.323+03:00",
  },
  {
    ZIP: "9992",
    NAME: "Skrundas ELVI pakom\u0101ts",

    A1_NAME: "Skrundas novads",
    A2_NAME: "Skrunda",
    A3_NAME: "",

    A5_NAME: "Ventas iela",

    A7_NAME: "13",

    X_COORDINATE: "22.013655",
    Y_COORDINATE: "56.673478",

    comment_lav: "Veikala aizmugur\u0113, pret\u012b autoostai",

    MODIFIED: "2021-01-14T07:03:14.397+02:00",
  },
  {
    ZIP: "9190",
    NAME: "Skr\u012bveru TOP pakom\u0101ts",

    A1_NAME: "Skr\u012bveru novads",
    A2_NAME: "",
    A3_NAME: "Skr\u012bveri",

    A5_NAME: "Daugavas iela",

    A7_NAME: "97",

    X_COORDINATE: "25.121094",
    Y_COORDINATE: "56.649837",

    MODIFIED: "2020-11-13T05:56:59.463+02:00",
  },
  {
    ZIP: "77718",
    NAME: "Skuodo MAXIMA Mos\u0117d\u017eio g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "Skuodo r. sav.",
    A3_NAME: "Skuodo m.",

    A5_NAME: "Mos\u0117d\u017eio g.",

    X_COORDINATE: "21.531304",
    Y_COORDINATE: "56.267784",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Mos\u0117d\u017eio g. pus\u0117s",
    MODIFIED: "2021-03-25T14:55:54.617+02:00",
  },
  {
    ZIP: "9955",
    NAME: "Smiltenes T/C Centrs pakom\u0101ts",

    A1_NAME: "Smiltenes novads",
    A2_NAME: "Smiltene",
    A3_NAME: "",

    A5_NAME: "Bazn\u012bcas laukums",

    X_COORDINATE: "25.903996",
    Y_COORDINATE: "57.423920",

    comment_lav: "Pa kreisi no T/C ieejas",

    MODIFIED: "2020-11-13T07:40:08.297+02:00",
  },
  {
    ZIP: "43094",
    NAME: "Sonda postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "L\u00fcganuse vald",
    A3_NAME: "Sonda alevik",

    A5_NAME: "Uljaste tee",

    X_COORDINATE: "26.845085",
    Y_COORDINATE: "59.350016",
    SERVICE_HOURS: "E,T,K,N,R,L 09:00-21:00 P 09:00-18:00",

    MODIFIED: "2021-04-30T10:43:10.647+03:00",
  },
  {
    ZIP: "74493",
    NAME: "Soodla postipunkt (kauplus)",

    A2_NAME: "Anija vald",
    A3_NAME: "Soodla k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "25.364580",
    Y_COORDINATE: "59.387178",
    SERVICE_HOURS:
      "E,T,K,N,R,L 08:00-19:00 P 10:00-17:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:38:24.653+03:00",
  },
  {
    ZIP: "9196",
    NAME: "Straupes VIADA pakom\u0101ts",

    A1_NAME: "P\u0101rgaujas novads",
    A2_NAME: "Straupes pagasts",
    A3_NAME: "Straupe",

    A5_NAME: "",
    A6_NAME: "Aleta",
    A7_NAME: "",

    X_COORDINATE: "24.951033",
    Y_COORDINATE: "57.351429",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T06:07:58.127+02:00",
  },
  {
    ZIP: "9139",
    NAME: "Stren\u010du TOP pakom\u0101ts",

    A1_NAME: "Stren\u010du novads",
    A2_NAME: "Stren\u010di",
    A3_NAME: "",

    A5_NAME: "Valkas iela",

    X_COORDINATE: "25.688806",
    Y_COORDINATE: "57.627043",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-05T07:38:23.930+02:00",
  },
  {
    ZIP: "55501",
    NAME: "Suderv\u0117s AIB\u0116 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Suderv\u0117s k.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "17",

    X_COORDINATE: "25.091028",
    Y_COORDINATE: "54.779111",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:33:32.743+03:00",
  },
  {
    ZIP: "96231",
    NAME: "Suure-Jaani Tervisekoja pakiautomaat",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "Suure-Jaani linn",

    A5_NAME: "P\u00e4rnu tn",

    X_COORDINATE: "25.465239",
    Y_COORDINATE: "58.535571",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "71500",
    NAME: "Suure-Jaani postkontor",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "Suure-Jaani linn",

    A5_NAME: "P\u00e4rnu tn",

    X_COORDINATE: "25.465324",
    Y_COORDINATE: "58.536369",
    SERVICE_HOURS: "E,T,N,R 10:00-13:00 K 12:30-18:00 L,P SULETUD",

    MODIFIED: "2021-05-03T08:34:24.657+03:00",
  },
  {
    ZIP: "10394",
    NAME: "S\u00f5le postipunkt",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "S\u00f5le tn",

    A7_NAME: "59",

    X_COORDINATE: "24.697502",
    Y_COORDINATE: "59.449228",
    SERVICE_HOURS: "E,T,K,N,R 12:00-14:00 L,P SULETUD",

    MODIFIED: "2021-04-14T08:35:47.163+03:00",
  },
  {
    ZIP: "96071",
    NAME: "Tabasalu Rimi pakiautomaat",

    A2_NAME: "Harku vald",
    A3_NAME: "Tabasalu alevik",

    A5_NAME: "Klooga mnt",

    A7_NAME: "10b",

    X_COORDINATE: "24.543398",
    Y_COORDINATE: "59.429912",

    MODIFIED: "2021-05-26T07:21:58.293+03:00",
  },
  {
    ZIP: "76991",
    NAME: "Tabasalu postkontor",

    A2_NAME: "Harku vald",
    A3_NAME: "Tabasalu alevik",

    A5_NAME: "Klooga mnt",

    A7_NAME: "10b",

    X_COORDINATE: "24.543648",
    Y_COORDINATE: "59.430059",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T11:26:53.120+03:00",
  },
  {
    ZIP: "96212",
    NAME: "Tabivere Saadj\u00e4rve Coop kaupluse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "Tabivere alevik",

    A5_NAME: "Kalda tn",

    X_COORDINATE: "26.600014",
    Y_COORDINATE: "58.552056",

    MODIFIED: "2021-05-10T06:12:58.397+03:00",
  },
  {
    ZIP: "49101",
    NAME: "Tabivere postkontor",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "Tabivere alevik",

    A5_NAME: "Kalda tn",

    X_COORDINATE: "26.600014",
    Y_COORDINATE: "58.551959",
    SERVICE_HOURS:
      "E,T,N,R 09:00-14:00 K 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-29T14:35:26.927+03:00",
  },
  {
    ZIP: "90894",
    NAME: "Taebla postipunkt",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "L\u00e4\u00e4ne-Nigula vald",
    A3_NAME: "Taebla alevik",

    A5_NAME: "Lasteaia tn",

    A7_NAME: "11",

    X_COORDINATE: "23.744724",
    Y_COORDINATE: "58.953567",
    SERVICE_HOURS:
      "E 09:00-13:00 T 13:00-19:00 N 09:30-15:00 R 09:30-14:00 K,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "Kuni 04.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-05-27T12:49:02.037+03:00",
  },
  {
    ZIP: "63291",
    NAME: "Taevaskoja postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "Taevaskoja k\u00fcla",

    A5_NAME: "Neitsikoopa tee",

    X_COORDINATE: "27.044551",
    Y_COORDINATE: "58.101491",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-14:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-18T07:49:57.690+02:00",
  },
  {
    ZIP: "86194",
    NAME: "Tali postipunkt  (Coop)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Saarde vald",
    A3_NAME: "Tali k\u00fcla",

    A5_NAME: "Kase tee",

    X_COORDINATE: "24.784131",
    Y_COORDINATE: "58.061328",
    SERVICE_HOURS: "E,T,K,N,R 08:00-15:00 L,P SULETUD",

    MODIFIED: "2021-01-30T09:46:05.580+02:00",
  },
  {
    ZIP: "96003",
    NAME: "Tallinna Akadeemia Coop Konsumi pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Akadeemia tee",

    A7_NAME: "35",

    X_COORDINATE: "24.655613",
    Y_COORDINATE: "59.403370",

    MODIFIED: "2021-05-19T05:34:25.000+03:00",
  },
  {
    ZIP: "96133",
    NAME: "Tallinna Arsenali Keskuse pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Erika tn",

    A7_NAME: "14",

    X_COORDINATE: "24.718214",
    Y_COORDINATE: "59.451157",

    MODIFIED: "2021-05-20T05:03:01.330+03:00",
  },
  {
    ZIP: "96001",
    NAME: "Tallinna Balti Jaama pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Toompuiestee",

    A7_NAME: "37",

    X_COORDINATE: "24.736745",
    Y_COORDINATE: "59.439673",

    MODIFIED: "2021-05-13T06:00:24.360+03:00",
  },
  {
    ZIP: "96219",
    NAME: "Tallinna Coca-Cola Plaza pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Hobujaama tn",

    X_COORDINATE: "24.756419",
    Y_COORDINATE: "59.438277",

    MODIFIED: "2020-11-02T07:03:48.753+02:00",
  },
  {
    ZIP: "96216",
    NAME: "Tallinna Ehitajate tee Grossi pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Ehitajate tee",

    A7_NAME: "41",

    X_COORDINATE: "24.668583",
    Y_COORDINATE: "59.401768",

    MODIFIED: "2021-05-24T05:26:38.807+03:00",
  },
  {
    ZIP: "96303",
    NAME: "Tallinna Ehitajate tee Maxima XXX pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "Ehitajate tee",

    A7_NAME: "148",

    X_COORDINATE: "24.651157",
    Y_COORDINATE: "59.420973",

    MODIFIED: "2020-12-15T06:33:04.257+02:00",
  },
  {
    ZIP: "96111",
    NAME: "Tallinna Haabersti Rimi pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "Haabersti tn",

    X_COORDINATE: "24.644102",
    Y_COORDINATE: "59.424517",

    MODIFIED: "2021-05-28T07:45:52.190+03:00",
  },
  {
    ZIP: "96202",
    NAME: "Tallinna Idakeskuse pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Punane tn",

    A7_NAME: "16",

    X_COORDINATE: "24.824641",
    Y_COORDINATE: "59.432134",

    MODIFIED: "2019-10-23T07:53:06.227+03:00",
  },
  {
    ZIP: "96195",
    NAME: "Tallinna Juhkentali Rimi pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Juhkentali tn",

    A7_NAME: "35",

    X_COORDINATE: "24.770040",
    Y_COORDINATE: "59.427553",

    MODIFIED: "2019-10-23T07:49:22.617+03:00",
  },
  {
    ZIP: "96016",
    NAME: "Tallinna J\u00e4rve Keskuse pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "238",

    X_COORDINATE: "24.721088",
    Y_COORDINATE: "59.393138",

    MODIFIED: "2021-04-13T13:30:02.197+03:00",
  },
  {
    ZIP: "96138",
    NAME: "Tallinna J\u00e4rveotsa Grossi pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "J\u00e4rveotsa tee",

    A7_NAME: "35b",

    X_COORDINATE: "24.640639",
    Y_COORDINATE: "59.407278",

    MODIFIED: "2021-05-28T08:34:08.483+03:00",
  },
  {
    ZIP: "96018",
    NAME: "Tallinna Kadaka Selveri pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Kadaka tee",

    A7_NAME: "56a",

    X_COORDINATE: "24.666952",
    Y_COORDINATE: "59.412235",

    MODIFIED: "2021-05-20T05:03:30.563+03:00",
  },
  {
    ZIP: "96015",
    NAME: "Tallinna Kakum\u00e4e Selveri pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "Rannam\u00f5isa tee",

    X_COORDINATE: "24.626459",
    Y_COORDINATE: "59.428507",

    MODIFIED: "2021-05-18T05:51:42.517+03:00",
  },
  {
    ZIP: "96237",
    NAME: "Tallinna Kari Grossipoe pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Kari tn",

    X_COORDINATE: "24.697859",
    Y_COORDINATE: "59.447718",

    MODIFIED: "2019-10-11T12:26:21.333+03:00",
  },
  {
    ZIP: "96190",
    NAME: "Tallinna Kivila Grossi pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Kivila tn",

    A7_NAME: "26",

    X_COORDINATE: "24.873086",
    Y_COORDINATE: "59.443612",

    MODIFIED: "2021-05-03T05:49:49.993+03:00",
  },
  {
    ZIP: "96069",
    NAME: "Tallinna Kolde Rimi pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "S\u00f5le tn",

    A7_NAME: "27",

    X_COORDINATE: "24.707627",
    Y_COORDINATE: "59.438651",

    MODIFIED: "2021-05-31T05:30:42.787+03:00",
  },
  {
    ZIP: "96226",
    NAME: "Tallinna Kollase keskuse pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "\u00d5ism\u00e4e tee",

    A7_NAME: "107",

    X_COORDINATE: "24.637067",
    Y_COORDINATE: "59.411428",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96007",
    NAME: "Tallinna Kristiine Keskuse pakiautomaat",

    A5_NAME: "Endla tn",

    A7_NAME: "45",

    X_COORDINATE: "24.725468",
    Y_COORDINATE: "59.425773",

    MODIFIED: "2021-05-04T07:44:31.033+03:00",
  },
  {
    ZIP: "96162",
    NAME: "Tallinna K\u00e4rberi Keskuse pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "K. K\u00e4rberi tn",

    A7_NAME: "20a",

    X_COORDINATE: "24.882733",
    Y_COORDINATE: "59.444079",

    MODIFIED: "2020-12-16T13:33:09.080+02:00",
  },
  {
    ZIP: "96135",
    NAME: "Tallinna Lasnam\u00e4e Centrumi A pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Mustakivi tee",

    A7_NAME: "13",

    X_COORDINATE: "24.864429",
    Y_COORDINATE: "59.440970",

    MODIFIED: "2020-10-29T06:39:04.907+02:00",
  },
  {
    ZIP: "96041",
    NAME: "Tallinna Lasnam\u00e4e Centrumi B pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Mustakivi tee",

    A7_NAME: "13",

    X_COORDINATE: "24.863056",
    Y_COORDINATE: "59.440746",

    MODIFIED: "2021-04-13T14:09:42.913+03:00",
  },
  {
    ZIP: "96066",
    NAME: "Tallinna Lasnam\u00e4e Prisma pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Mustakivi tee",

    A7_NAME: "17",

    X_COORDINATE: "24.863035",
    Y_COORDINATE: "59.442965",

    MODIFIED: "2021-05-26T07:16:05.943+03:00",
  },
  {
    ZIP: "96180",
    NAME: "Tallinna Lastekodu Grossi pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Lastekodu tn",

    A7_NAME: "14",

    X_COORDINATE: "24.768011",
    Y_COORDINATE: "59.430303",

    MODIFIED: "2020-12-10T13:30:24.820+02:00",
  },
  {
    ZIP: "96116",
    NAME: "Tallinna Linnam\u00e4e Maxima XXX pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Linnam\u00e4e tee",

    A7_NAME: "57",

    X_COORDINATE: "24.880353",
    Y_COORDINATE: "59.450026",

    MODIFIED: "2021-05-28T08:03:35.353+03:00",
  },
  {
    ZIP: "96194",
    NAME: "Tallinna L\u00e4\u00e4nemere Rimi pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "L\u00e4\u00e4nemere tee",

    A7_NAME: "2c",

    X_COORDINATE: "24.861733",
    Y_COORDINATE: "59.450896",

    MODIFIED: "2020-12-21T12:32:12.293+02:00",
  },
  {
    ZIP: "96173",
    NAME: "Tallinna L\u00e4\u00e4nemere Selveri pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "L\u00e4\u00e4nemere tee",

    A7_NAME: "28",

    X_COORDINATE: "24.874879",
    Y_COORDINATE: "59.452802",

    MODIFIED: "2021-04-29T06:10:15.303+03:00",
  },
  {
    ZIP: "96086",
    NAME: "Tallinna Magdaleena pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "106",

    X_COORDINATE: "24.739149",
    Y_COORDINATE: "59.414992",

    MODIFIED: "2021-05-26T07:36:51.773+03:00",
  },
  {
    ZIP: "96056",
    NAME: "Tallinna Magistrali Keskuse pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "S\u00f5pruse pst",

    A7_NAME: "201",

    X_COORDINATE: "24.697046",
    Y_COORDINATE: "59.401372",

    MODIFIED: "2021-05-26T06:41:22.630+03:00",
  },
  {
    ZIP: "96098",
    NAME: "Tallinna Marienthali keskuse pakiautomaat",

    A5_NAME: "Mustam\u00e4e tee",

    A7_NAME: "16",

    X_COORDINATE: "24.697158",
    Y_COORDINATE: "59.422699",

    MODIFIED: "2021-05-26T08:37:21.817+03:00",
  },
  {
    ZIP: "96129",
    NAME: "Tallinna Merimetsa Selveri pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Paldiski mnt",

    A7_NAME: "56",

    X_COORDINATE: "24.697194",
    Y_COORDINATE: "59.430016",

    MODIFIED: "2021-05-28T08:10:06.127+03:00",
  },
  {
    ZIP: "96010",
    NAME: "Tallinna Mustakivi Keskuse pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Mahtra tn",

    X_COORDINATE: "24.874044",
    Y_COORDINATE: "59.442406",

    MODIFIED: "2021-05-25T05:27:41.750+03:00",
  },
  {
    ZIP: "96141",
    NAME: "Tallinna Mustam\u00e4e Keskuse pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "A. H. Tammsaare tee",

    A7_NAME: "104a",

    X_COORDINATE: "24.689152",
    Y_COORDINATE: "59.408292",

    MODIFIED: "2021-05-28T10:18:42.847+03:00",
  },
  {
    ZIP: "96115",
    NAME: "Tallinna Mustika Keskuse pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "Karjav\u00e4lja tn",

    X_COORDINATE: "24.682702",
    Y_COORDINATE: "59.410280",

    MODIFIED: "2021-05-25T05:21:17.377+03:00",
  },
  {
    ZIP: "96236",
    NAME: "Tallinna M\u00e4nniku Rimi pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "M\u00e4nniku tee",

    A7_NAME: "100",

    X_COORDINATE: "24.716576",
    Y_COORDINATE: "59.372145",

    MODIFIED: "2020-12-14T07:51:47.597+02:00",
  },
  {
    ZIP: "96174",
    NAME: "Tallinna Nautica Keskuse pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Ahtri tn",

    X_COORDINATE: "24.762454",
    Y_COORDINATE: "59.441344",

    MODIFIED: "2020-11-02T07:03:27.277+02:00",
  },
  {
    ZIP: "96004",
    NAME: "Tallinna Nurmenuku pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "Ehitajate tee",

    A7_NAME: "107",

    X_COORDINATE: "24.654758",
    Y_COORDINATE: "59.414396",

    MODIFIED: "2021-05-03T05:58:47.677+03:00",
  },
  {
    ZIP: "96327",
    NAME: "Tallinna N\u00f5mme tee 23 Maxima X pakiautomaat",

    A5_NAME: "N\u00f5mme tee",

    A7_NAME: "23",

    X_COORDINATE: "24.721360",
    Y_COORDINATE: "59.417796",

    MODIFIED: "2021-05-25T05:24:11.097+03:00",
  },
  {
    ZIP: "96101",
    NAME: "Tallinna N\u00f5mme turu pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Turu plats",

    X_COORDINATE: "24.683427",
    Y_COORDINATE: "59.388861",

    MODIFIED: "2021-05-26T08:41:14.230+03:00",
  },
  {
    ZIP: "96193",
    NAME: "Tallinna Paasiku Grossi pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Paasiku tn",

    A7_NAME: "2a",

    X_COORDINATE: "24.845112",
    Y_COORDINATE: "59.448399",

    MODIFIED: "2021-05-28T05:19:24.863+03:00",
  },
  {
    ZIP: "96131",
    NAME: "Tallinna Paepargi Maxima XX pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Paepargi tn",

    A7_NAME: "57",

    X_COORDINATE: "24.811635",
    Y_COORDINATE: "59.435160",

    MODIFIED: "2021-05-28T08:18:34.150+03:00",
  },
  {
    ZIP: "96146",
    NAME: "Tallinna Pallasti pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Pallasti tn",

    A7_NAME: "28",

    X_COORDINATE: "24.792250",
    Y_COORDINATE: "59.430188",

    MODIFIED: "2021-04-13T10:10:20.680+03:00",
  },
  {
    ZIP: "96017",
    NAME: "Tallinna Pelgulinna Selveri pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "S\u00f5le tn",

    A7_NAME: "51",

    X_COORDINATE: "24.700754",
    Y_COORDINATE: "59.444612",

    MODIFIED: "2021-04-13T13:38:17.870+03:00",
  },
  {
    ZIP: "96205",
    NAME: "Tallinna Pirita Keskuse pakiautomaat",

    A5_NAME: "Meriv\u00e4lja tee",

    A7_NAME: "24",

    X_COORDINATE: "24.835387",
    Y_COORDINATE: "59.468699",

    MODIFIED: "2021-06-03T11:26:07.203+03:00",
  },
  {
    ZIP: "96012",
    NAME: "Tallinna Pirita Selveri pakiautomaat",

    A5_NAME: "Rummu tee",

    X_COORDINATE: "24.827687",
    Y_COORDINATE: "59.462298",

    MODIFIED: "2021-05-24T05:28:33.267+03:00",
  },
  {
    ZIP: "96083",
    NAME: "Tallinna Punase Selveri pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Punane tn",

    A7_NAME: "46",

    X_COORDINATE: "24.840675",
    Y_COORDINATE: "59.435010",

    MODIFIED: "2021-06-02T05:15:37.633+03:00",
  },
  {
    ZIP: "96304",
    NAME: "Tallinna P\u00e4rnu mnt 390b Maxima X pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "390",

    X_COORDINATE: "24.659324",
    Y_COORDINATE: "59.380491",

    MODIFIED: "2021-05-07T08:05:23.453+03:00",
  },
  {
    ZIP: "96008",
    NAME: "Tallinna P\u00e4\u00e4sk\u00fcla RIMI pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "453e",

    X_COORDINATE: "24.630545",
    Y_COORDINATE: "59.360991",

    MODIFIED: "2021-04-13T13:28:40.063+03:00",
  },
  {
    ZIP: "96181",
    NAME: "Tallinna P\u00f5hja pst Neste pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "P\u00f5hja pst",

    A7_NAME: "17a",

    X_COORDINATE: "24.743526",
    Y_COORDINATE: "59.444468",

    MODIFIED: "2021-05-19T05:35:33.607+03:00",
  },
  {
    ZIP: "96084",
    NAME: "Tallinna Raudalu Coop Konsumi pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Viljandi mnt",

    A7_NAME: "41a",

    X_COORDINATE: "24.759516",
    Y_COORDINATE: "59.366249",

    MODIFIED: "2021-05-31T05:29:36.870+03:00",
  },
  {
    ZIP: "96005",
    NAME: "Tallinna Rocca al Mare pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "Paldiski mnt",

    A7_NAME: "102",

    X_COORDINATE: "24.653359",
    Y_COORDINATE: "59.426429",

    MODIFIED: "2021-04-13T13:26:40.373+03:00",
  },
  {
    ZIP: "96009",
    NAME: "Tallinna Sikupilli pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Tartu mnt",

    A7_NAME: "87b",

    X_COORDINATE: "24.785391",
    Y_COORDINATE: "59.425876",

    MODIFIED: "2021-04-13T13:27:46.750+03:00",
  },
  {
    ZIP: "96080",
    NAME: "Tallinna Smuuli Maxima XX pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "J. Smuuli tee",

    X_COORDINATE: "24.822486",
    Y_COORDINATE: "59.443633",

    MODIFIED: "2021-05-31T05:28:03.613+03:00",
  },
  {
    ZIP: "96140",
    NAME: "Tallinna Solaris Keskuse pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Estonia pst",

    X_COORDINATE: "24.751343",
    Y_COORDINATE: "59.433827",

    MODIFIED: "2021-05-28T08:35:35.910+03:00",
  },
  {
    ZIP: "96057",
    NAME: "Tallinna Stockmanni pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Liivalaia tn",

    A7_NAME: "53",

    X_COORDINATE: "24.761180",
    Y_COORDINATE: "59.431700",

    MODIFIED: "2021-05-26T06:43:34.440+03:00",
  },
  {
    ZIP: "96154",
    NAME: "Tallinna Stroomi Keskuse pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Tuulemaa tn",

    A7_NAME: "20",

    X_COORDINATE: "24.692322",
    Y_COORDINATE: "59.446947",

    MODIFIED: "2021-05-28T10:38:11.930+03:00",
  },
  {
    ZIP: "96166",
    NAME: "Tallinna S\u00f5le Rimi (Paavli 10) pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Paavli tn",

    X_COORDINATE: "24.702325",
    Y_COORDINATE: "59.446929",

    MODIFIED: "2020-12-09T06:24:40.197+02:00",
  },
  {
    ZIP: "96014",
    NAME: "Tallinna S\u00f5pruse Rimi pakiautomaat",

    A5_NAME: "S\u00f5pruse pst",

    A7_NAME: "174",

    X_COORDINATE: "24.707578",
    Y_COORDINATE: "59.414724",

    MODIFIED: "2021-05-24T05:27:55.460+03:00",
  },
  {
    ZIP: "96306",
    NAME: "Tallinna S\u00f5pruse pst 171 Maxima X pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "S\u00f5pruse pst",

    A7_NAME: "171",

    X_COORDINATE: "24.704592",
    Y_COORDINATE: "59.407310",

    MODIFIED: "2021-05-07T08:07:35.473+03:00",
  },
  {
    ZIP: "96175",
    NAME: "Tallinna S\u00fctiste Maxima X pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "J. S\u00fctiste tee",

    A7_NAME: "28",

    X_COORDINATE: "24.690599",
    Y_COORDINATE: "59.397683",

    MODIFIED: "2021-05-19T05:39:05.360+03:00",
  },
  {
    ZIP: "96323",
    NAME: "Tallinna T1 Keskuse pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Peterburi tee",

    X_COORDINATE: "24.793946",
    Y_COORDINATE: "59.424303",

    MODIFIED: "2019-07-23T05:07:27.270+03:00",
  },
  {
    ZIP: "96305",
    NAME: "Tallinna Tammsaare Maxima XX pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "A. H. Tammsaare tee",

    A7_NAME: "133",

    X_COORDINATE: "24.675510",
    Y_COORDINATE: "59.408740",

    MODIFIED: "2020-12-16T07:22:08.777+02:00",
  },
  {
    ZIP: "96214",
    NAME: "Tallinna Tammsaare \u00c4rikeskuse pakiautomaat",

    A5_NAME: "A. H. Tammsaare tee",

    A7_NAME: "47",

    X_COORDINATE: "24.717464",
    Y_COORDINATE: "59.401398",

    MODIFIED: "2019-10-18T05:37:13.917+03:00",
  },
  {
    ZIP: "96240",
    NAME: "Tallinna Tatari Rimi pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Tatari tn",

    A7_NAME: "64",

    X_COORDINATE: "24.745081",
    Y_COORDINATE: "59.425373",

    MODIFIED: "2021-05-18T05:49:49.733+03:00",
  },
  {
    ZIP: "96058",
    NAME: "Tallinna Telliskivi Rimi pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Telliskivi tn",

    A7_NAME: "61",

    X_COORDINATE: "24.730230",
    Y_COORDINATE: "59.441534",

    MODIFIED: "2021-05-26T06:44:57.573+03:00",
  },
  {
    ZIP: "96006",
    NAME: "Tallinna Tondi Selveri pakiautomaat",

    A5_NAME: "A. H. Tammsaare tee",

    A7_NAME: "62",

    X_COORDINATE: "24.714367",
    Y_COORDINATE: "59.403079",

    MODIFIED: "2021-04-13T13:27:12.967+03:00",
  },
  {
    ZIP: "96153",
    NAME: "Tallinna Tondi \u00c4rikeskuse pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "P\u00e4rnu mnt",

    A7_NAME: "142",

    X_COORDINATE: "24.736499",
    Y_COORDINATE: "59.410291",

    MODIFIED: "2021-05-28T10:33:22.433+03:00",
  },
  {
    ZIP: "96038",
    NAME: "Tallinna Torupilli Selveri pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Vesiv\u00e4rava tn",

    A7_NAME: "37",

    X_COORDINATE: "24.780674",
    Y_COORDINATE: "59.432211",

    MODIFIED: "2021-05-03T05:59:22.740+03:00",
  },
  {
    ZIP: "96302",
    NAME: "Tallinna T\u00e4hesaju Selveri pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "T\u00e4hesaju tee",

    X_COORDINATE: "24.849979",
    Y_COORDINATE: "59.441912",

    MODIFIED: "2020-12-23T07:29:17.893+02:00",
  },
  {
    ZIP: "96185",
    NAME: "Tallinna T\u00f6\u00f6stuse Rimi pakiautomaat",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "T\u00f6\u00f6stuse tn",

    A7_NAME: "101",

    X_COORDINATE: "24.705562",
    Y_COORDINATE: "59.453692",

    MODIFIED: "2020-12-14T08:04:25.890+02:00",
  },
  {
    ZIP: "96145",
    NAME: "Tallinna Valdeku Maxima X pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Valdeku tn",

    A7_NAME: "114",

    X_COORDINATE: "24.712072",
    Y_COORDINATE: "59.376315",

    MODIFIED: "2021-05-28T10:31:53.373+03:00",
  },
  {
    ZIP: "96132",
    NAME: "Tallinna Valdeku Selver ABC pakiautomaat",

    A3_NAME: "N\u00f5mme linnaosa",

    A5_NAME: "Vabaduse pst",

    A7_NAME: "54b",

    X_COORDINATE: "24.700960",
    Y_COORDINATE: "59.381385",

    MODIFIED: "2021-05-28T08:29:34.657+03:00",
  },
  {
    ZIP: "96215",
    NAME: "Tallinna Vikerlase Rimi pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Vikerlase tn",

    A7_NAME: "19",

    X_COORDINATE: "24.844028",
    Y_COORDINATE: "59.439551",

    MODIFIED: "2021-05-31T05:28:29.307+03:00",
  },
  {
    ZIP: "96143",
    NAME: "Tallinna Vilde tee Maxima XX pakiautomaat",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "E. Vilde tee",

    A7_NAME: "75",

    X_COORDINATE: "24.686321",
    Y_COORDINATE: "59.402791",

    MODIFIED: "2021-05-28T10:30:40.907+03:00",
  },
  {
    ZIP: "96104",
    NAME: "Tallinna Viru Bussiterminali pakiautomaat",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Viru v\u00e4ljak",

    X_COORDINATE: "24.756196",
    Y_COORDINATE: "59.436135",

    MODIFIED: "2020-10-27T08:08:46.147+02:00",
  },
  {
    ZIP: "96103",
    NAME: "Tallinna \u00d5ism\u00e4e Maxima XX pakiautomaat",

    A3_NAME: "Haabersti linnaosa",

    A5_NAME: "\u00d5ism\u00e4e tee",

    A7_NAME: "46",

    X_COORDINATE: "24.647600",
    Y_COORDINATE: "59.411406",

    MODIFIED: "2021-05-26T08:42:59.420+03:00",
  },
  {
    ZIP: "96208",
    NAME: "Tallinna \u00dclemiste City Selveri pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Sepapaja tn",

    X_COORDINATE: "24.803190",
    Y_COORDINATE: "59.421569",

    MODIFIED: "2019-07-23T05:25:16.763+03:00",
  },
  {
    ZIP: "96113",
    NAME: "Tallinna \u00dclemiste keskuse pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "Suur-S\u00f5jam\u00e4e tn",

    X_COORDINATE: "24.793658",
    Y_COORDINATE: "59.422836",

    MODIFIED: "2021-05-28T07:47:40.070+03:00",
  },
  {
    ZIP: "96059",
    NAME: "Tallinna \u00dcmera Maxima XX pakiautomaat",

    A3_NAME: "Lasnam\u00e4e linnaosa",

    A5_NAME: "\u00dcmera tn",

    A7_NAME: "3b",

    X_COORDINATE: "24.888924",
    Y_COORDINATE: "59.444379",

    MODIFIED: "2021-05-31T05:28:57.520+03:00",
  },
  {
    ZIP: "9931",
    NAME: "Talsu Dundagas ielas RIMI pakom\u0101ts",

    A1_NAME: "Talsu novads",
    A2_NAME: "Talsi",
    A3_NAME: "",

    A5_NAME: "Dundagas iela",

    A7_NAME: "18",

    X_COORDINATE: "22.578781",
    Y_COORDINATE: "57.248009",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:48:12.290+02:00",
  },
  {
    ZIP: "9135",
    NAME: "Talsu R\u012bgas ielas Maxima XX pakom\u0101ts",

    A1_NAME: "Talsu novads",
    A2_NAME: "Talsi",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    X_COORDINATE: "22.585088",
    Y_COORDINATE: "57.238631",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-02-15T11:48:24.053+02:00",
  },
  {
    ZIP: "78494",
    NAME: "Tamme postipunkt (Kauplus Meie)",

    A1_NAME: "Rapla maakond",
    A2_NAME: "Rapla vald",
    A3_NAME: "Kabala k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.651373",
    Y_COORDINATE: "58.929050",
    SERVICE_HOURS: "E,K,N,R 11:00-18:00 L 11:00-15:00 T,P SULETUD",

    MODIFIED: "2021-02-12T11:09:46.867+02:00",
  },
  {
    ZIP: "41510",
    NAME: "Tammiku postipunkt (raamatukogu)",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "J\u00f5hvi vald",
    A3_NAME: "Tammiku alevik",

    A5_NAME: "Tamme tn",

    A7_NAME: "17",

    X_COORDINATE: "27.382858",
    Y_COORDINATE: "59.334583",
    SERVICE_HOURS: "E,T,K,R 14:00-16:00 N 14:00-18:00 L,P SULETUD",

    MODIFIED: "2021-06-01T11:11:46.120+03:00",
  },
  {
    ZIP: "85094",
    NAME: "Tammiste postipunkt",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Tori vald",
    A3_NAME: "Tammiste k\u00fcla",

    A5_NAME: "Suur-Kaare tn",

    X_COORDINATE: "24.597146",
    Y_COORDINATE: "58.381743",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-20:00",

    MODIFIED: "2020-09-28T13:52:54.093+03:00",
  },
  {
    ZIP: "12997",
    NAME: "Tammsaare postipunkt (Kukolka O\u00dc lillepood)",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "A. H. Tammsaare tee",

    A7_NAME: "137",

    X_COORDINATE: "24.674729",
    Y_COORDINATE: "59.408430",
    SERVICE_HOURS: "E,T,K,N,R 12:00-14:00 L,P SULETUD",

    MODIFIED: "2021-02-25T14:15:38.233+02:00",
  },
  {
    ZIP: "96120",
    NAME: "Tamsalu Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Tamsalu linn",

    A5_NAME: "Tehnika tn",

    A7_NAME: "24",

    X_COORDINATE: "26.112304",
    Y_COORDINATE: "59.162231",

    MODIFIED: "2020-11-02T07:04:23.967+02:00",
  },
  {
    ZIP: "46194",
    NAME: "Tamsalu postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Tamsalu linn",

    A5_NAME: "Raudtee tn",

    X_COORDINATE: "26.112984",
    Y_COORDINATE: "59.160224",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T11:00:26.063+03:00",
  },
  {
    ZIP: "96092",
    NAME: "Tapa Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Tapa linn",

    A5_NAME: "Jaama tn",

    X_COORDINATE: "25.963173",
    Y_COORDINATE: "59.264539",

    MODIFIED: "2020-12-11T10:01:58.323+02:00",
  },
  {
    ZIP: "45191",
    NAME: "Tapa postkontor",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Tapa linn",

    A5_NAME: "Pikk tn",

    X_COORDINATE: "25.964265",
    Y_COORDINATE: "59.264638",
    SERVICE_HOURS: "E 10:00-17:30 T,K,N,R 10:00-13:30 L,P SULETUD",

    MODIFIED: "2021-04-22T13:23:50.317+03:00",
  },
  {
    ZIP: "96308",
    NAME: "Tapa\u00a0Maxima X pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Tapa linn",

    A5_NAME: "Pikk tn",

    X_COORDINATE: "25.967679",
    Y_COORDINATE: "59.259038",

    MODIFIED: "2020-11-11T08:27:54.293+02:00",
  },
  {
    ZIP: "96310",
    NAME: "Tartu Aardla Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "V\u00f5ru tn",

    A7_NAME: "75b",

    X_COORDINATE: "26.721733",
    Y_COORDINATE: "58.357733",

    MODIFIED: "2021-04-16T07:15:30.313+03:00",
  },
  {
    ZIP: "96319",
    NAME: "Tartu Anne 40 Maxima X pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Anne tn",

    A7_NAME: "40",

    X_COORDINATE: "26.749988",
    Y_COORDINATE: "58.378669",

    MODIFIED: "2020-11-11T08:28:21.173+02:00",
  },
  {
    ZIP: "96126",
    NAME: "Tartu Anne Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Kalda tee",

    A7_NAME: "43",

    X_COORDINATE: "26.766639",
    Y_COORDINATE: "58.368422",

    MODIFIED: "2021-04-26T07:48:53.493+03:00",
  },
  {
    ZIP: "96020",
    NAME: "Tartu Eedeni pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Kalda tee",

    A7_NAME: "1c",

    X_COORDINATE: "26.749930",
    Y_COORDINATE: "58.373779",

    MODIFIED: "2021-04-13T13:36:49.963+03:00",
  },
  {
    ZIP: "96241",
    NAME: "Tartu Ilmatsalu Maxima X pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Ilmatsalu tn",

    A7_NAME: "11",

    X_COORDINATE: "26.685048",
    Y_COORDINATE: "58.378307",

    MODIFIED: "2020-11-11T08:28:48.320+02:00",
  },
  {
    ZIP: "96213",
    NAME: "Tartu Jaamam\u00f5isa Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Jaama tn",

    A7_NAME: "74",

    X_COORDINATE: "26.751181",
    Y_COORDINATE: "58.381751",

    MODIFIED: "2021-04-28T07:24:24.153+03:00",
  },
  {
    ZIP: "96187",
    NAME: "Tartu Karete Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Jalaka tn",

    A7_NAME: "34",

    X_COORDINATE: "26.723909",
    Y_COORDINATE: "58.349940",

    MODIFIED: "2020-11-11T08:29:15.150+02:00",
  },
  {
    ZIP: "96061",
    NAME: "Tartu Kesklinna Keskuse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "K\u00fc\u00fcni tn",

    X_COORDINATE: "26.724781",
    Y_COORDINATE: "58.378165",

    MODIFIED: "2021-04-16T07:33:35.387+03:00",
  },
  {
    ZIP: "96068",
    NAME: "Tartu Kivilinna Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Jaama tn",

    A7_NAME: "173",

    X_COORDINATE: "26.764323",
    Y_COORDINATE: "58.379510",

    MODIFIED: "2021-05-10T06:08:42.127+03:00",
  },
  {
    ZIP: "96165",
    NAME: "Tartu Kvartali Keskuse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Riia tn",

    X_COORDINATE: "26.728903",
    Y_COORDINATE: "58.376914",

    MODIFIED: "2021-04-19T05:47:03.123+03:00",
  },
  {
    ZIP: "96074",
    NAME: "Tartu Lembitu Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Lembitu tn",

    X_COORDINATE: "26.709853",
    Y_COORDINATE: "58.369952",

    MODIFIED: "2020-12-11T10:04:19.470+02:00",
  },
  {
    ZIP: "96019",
    NAME: "Tartu L\u00f5unakeskuse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Ringtee tn",

    A7_NAME: "75",

    X_COORDINATE: "26.678577",
    Y_COORDINATE: "58.358285",

    MODIFIED: "2021-04-29T08:07:17.563+03:00",
  },
  {
    ZIP: "96127",
    NAME: "Tartu Raadi Maxima XX pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Narva mnt",

    A7_NAME: "112",

    X_COORDINATE: "26.729907",
    Y_COORDINATE: "58.391841",

    MODIFIED: "2020-12-15T06:31:47.467+02:00",
  },
  {
    ZIP: "96087",
    NAME: "Tartu Rebase Rimi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Rebase tn",

    X_COORDINATE: "26.739126",
    Y_COORDINATE: "58.368345",

    MODIFIED: "2021-04-16T08:49:44.123+03:00",
  },
  {
    ZIP: "96088",
    NAME: "Tartu Ringtee Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Aardla tn",

    A7_NAME: "114",

    X_COORDINATE: "26.686381",
    Y_COORDINATE: "58.353113",

    MODIFIED: "2021-04-08T12:35:08.800+03:00",
  },
  {
    ZIP: "96136",
    NAME: "Tartu Saare Maxima X pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Anne tn",

    A7_NAME: "57",

    X_COORDINATE: "26.756571",
    Y_COORDINATE: "58.375060",

    MODIFIED: "2020-11-11T08:33:17.883+02:00",
  },
  {
    ZIP: "96021",
    NAME: "Tartu S\u00f5brakeskuse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "V\u00f5ru tn",

    A7_NAME: "55f",

    X_COORDINATE: "26.719352",
    Y_COORDINATE: "58.364613",

    MODIFIED: "2021-04-13T13:43:09.250+03:00",
  },
  {
    ZIP: "96039",
    NAME: "Tartu Tasku keskuse pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Turu tn",

    X_COORDINATE: "26.731127",
    Y_COORDINATE: "58.377805",

    MODIFIED: "2021-04-13T14:00:17.577+03:00",
  },
  {
    ZIP: "96321",
    NAME: "Tartu Tuglase Rimi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "F. Tuglase tn",

    A7_NAME: "19",

    X_COORDINATE: "26.691921",
    Y_COORDINATE: "58.385073",

    MODIFIED: "2020-05-20T07:44:43.947+03:00",
  },
  {
    ZIP: "96022",
    NAME: "Tartu Ujula Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Ujula tn",

    X_COORDINATE: "26.724305",
    Y_COORDINATE: "58.386338",

    MODIFIED: "2021-04-30T07:52:31.117+03:00",
  },
  {
    ZIP: "96309",
    NAME: "Tartu Vahi Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Vahi tn",

    A7_NAME: "62",

    X_COORDINATE: "26.720767",
    Y_COORDINATE: "58.401726",

    MODIFIED: "2021-05-06T05:23:21.820+03:00",
  },
  {
    ZIP: "96060",
    NAME: "Tartu Veeriku Selveri pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu linn",
    A3_NAME: "Tartu linn",

    A5_NAME: "Vitamiini tn",

    X_COORDINATE: "26.697007",
    Y_COORDINATE: "58.376350",

    MODIFIED: "2021-05-13T06:02:01.703+03:00",
  },
  {
    ZIP: "55569",
    NAME: "Taurag\u0117s IKI \u0160ilal\u0117s g. pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Taurag\u0117s r. sav.",
    A3_NAME: "Taurag\u0117s m.",

    A5_NAME: "\u0160ilal\u0117s g.",

    A7_NAME: "83A",

    X_COORDINATE: "22.287432",
    Y_COORDINATE: "55.266002",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:27:57.237+03:00",
  },
  {
    ZIP: "88851",
    NAME: "Taurag\u0117s NORFA Gedimino pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "Taurag\u0117s r. sav.",
    A3_NAME: "Taurag\u0117s m.",

    A5_NAME: "Gedimino g.",

    A7_NAME: "28",

    X_COORDINATE: "22.298812",
    Y_COORDINATE: "55.251360",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos,  de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:04:28.690+03:00",
  },
  {
    ZIP: "55596",
    NAME: "Tel\u0161i\u0173 IKI Mas\u010dio pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Tel\u0161i\u0173 r. sav.",
    A3_NAME: "Tel\u0161i\u0173 m.",

    A5_NAME: "Mas\u010dio g.",

    X_COORDINATE: "22.264979",
    Y_COORDINATE: "55.977661",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T19:24:30.947+02:00",
  },
  {
    ZIP: "88868",
    NAME: "Tel\u0161i\u0173 NORFA Gedimino pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Tel\u0161i\u0173 r. sav.",
    A3_NAME: "Tel\u0161i\u0173 m.",

    A5_NAME: "Gedimino g.",

    X_COORDINATE: "22.238605",
    Y_COORDINATE: "55.981785",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:06:49.213+02:00",
  },
  {
    ZIP: "88891",
    NAME: "Tel\u0161i\u0173 PC TULP\u0116 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Tel\u0161i\u0173 apskr.",
    A2_NAME: "Tel\u0161i\u0173 r. sav.",
    A3_NAME: "Tel\u0161i\u0173 m.",

    A5_NAME: "K\u0119stu\u010dio g.",

    X_COORDINATE: "22.249681",
    Y_COORDINATE: "55.983843",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2020-12-23T15:18:06.200+02:00",
  },
  {
    ZIP: "86294",
    NAME: "Tihemetsa postipunkt",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "Saarde vald",
    A3_NAME: "Tihemetsa alevik",

    A5_NAME: "Peahoone tee",

    X_COORDINATE: "25.044483",
    Y_COORDINATE: "58.149290",
    SERVICE_HOURS: "E,T,K,N,R 08:00-20:00 L,P SULETUD",

    MODIFIED: "2021-01-18T10:39:23.103+02:00",
  },
  {
    ZIP: "10201",
    NAME: "Toompea postkontor",

    A3_NAME: "Kesklinna linnaosa",

    A5_NAME: "Lossi plats",

    X_COORDINATE: "24.739044",
    Y_COORDINATE: "59.436081",
    SERVICE_HOURS: "E,T,K,N,R 10:00-17:00 L,P SULETUD",

    MODIFIED: "2021-05-14T11:54:33.613+03:00",
  },
  {
    ZIP: "10495",
    NAME: "Toompuiestee pakipunkt",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Toompuiestee",

    A7_NAME: "33a",

    X_COORDINATE: "24.732631",
    Y_COORDINATE: "59.437430",
    SERVICE_HOURS: "P SULETUD",

    TEMP_SERVICE_HOURS_2: "E,T,K,N,R 12:00-19:00 L 11:00-15:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-09T08:48:48.710+03:00",
  },
  {
    ZIP: "10494",
    NAME: "Toompuiestee postipunkt",

    A3_NAME: "P\u00f5hja-Tallinna linnaosa",

    A5_NAME: "Toompuiestee",

    A7_NAME: "33a",

    X_COORDINATE: "24.732633",
    Y_COORDINATE: "59.437432",
    SERVICE_HOURS: "E,T,K,N,R 09:00-11:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "AJUTISELT SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-14T08:36:18.600+03:00",
  },
  {
    ZIP: "87591",
    NAME: "Tootsi postipunkt",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "Tootsi alev",

    A5_NAME: "Kesk tn",

    A7_NAME: "8a",

    X_COORDINATE: "24.785687",
    Y_COORDINATE: "58.586590",
    SERVICE_HOURS: "E,T,K,N,R 08:00-17:00 L,P SULETUD",

    MODIFIED: "2021-03-30T11:35:16.210+03:00",
  },
  {
    ZIP: "93194",
    NAME: "Torgu postipunkt (raamatukogus)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Iide k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Koolimaja",
    A7_NAME: "",

    X_COORDINATE: "22.078555",
    Y_COORDINATE: "57.977436",
    SERVICE_HOURS: "E,T,K,N,R 08:00-15:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "Kuni 30.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "30.06.2021",
    TEMP_SERVICE_HOURS_2:
      "08.06.2021: 08:00-15:00;15.06.2021: 08:00-15:00;22.06.2021: 08:00-15:00;29.06.2021: 08:00-15:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "29.06.2021",

    MODIFIED: "2021-05-25T10:32:19.593+03:00",
  },
  {
    ZIP: "96121",
    NAME: "Torma Coop kaupluse pakiautomaat",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "Torma alevik",

    A5_NAME: "Kesk tn",

    A7_NAME: "1a",

    X_COORDINATE: "26.739653",
    Y_COORDINATE: "58.819063",

    MODIFIED: "2020-11-11T08:36:30.660+02:00",
  },
  {
    ZIP: "48594",
    NAME: "Torma postipunkt",

    A1_NAME: "J\u00f5geva maakond",
    A2_NAME: "J\u00f5geva vald",
    A3_NAME: "Torma alevik",

    A5_NAME: "Kesk tn",

    A7_NAME: "1a",

    X_COORDINATE: "26.739710",
    Y_COORDINATE: "58.818968",
    SERVICE_HOURS:
      "E,T,K,N,R,L 08:00-18:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-02-19T08:37:12.377+02:00",
  },
  {
    ZIP: "94594",
    NAME: "Tornim\u00e4e postipunkt (raamatukogus)",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Tornim\u00e4e k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Rahvamaja",
    A7_NAME: "",

    X_COORDINATE: "23.114788",
    Y_COORDINATE: "58.503570",
    SERVICE_HOURS: "E,K 09:00-16:00 T,N 09:00-18:00 R,L,P SULETUD",
    TEMP_SERVICE_HOURS: "06.06.2021 kuni 27.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "27.06.2021",

    MODIFIED: "2021-05-24T13:33:38.307+03:00",
  },
  {
    ZIP: "77724",
    NAME: "Trak\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Trak\u0173 r. sav.",
    A3_NAME: "Trak\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "15C",

    X_COORDINATE: "24.945936",
    Y_COORDINATE: "54.627725",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:46:30.043+03:00",
  },
  {
    ZIP: "86025",
    NAME: "Treimani postipunkt (Kalbuse kauplus)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "H\u00e4\u00e4demeeste vald",
    A3_NAME: "Treimani k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Kalbuse",
    A7_NAME: "",

    X_COORDINATE: "24.387963",
    Y_COORDINATE: "57.921157",
    SERVICE_HOURS: "E,T,N,R 10:00-13:00 K 15:00-18:00 L,P SULETUD",

    MODIFIED: "2021-01-30T17:02:49.103+02:00",
  },
  {
    ZIP: "68394",
    NAME: "Tsirguliina postipunkt",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "Tsirguliina alevik",

    A5_NAME: "Nooruse tn",

    X_COORDINATE: "26.191459",
    Y_COORDINATE: "57.864481",
    SERVICE_HOURS:
      "E,T 08:00-17:00 K 11:00-18:00 N 08:00-16:00 R 08:00-15:00 L,P SULETUD",

    MODIFIED: "2021-05-24T14:36:40.447+03:00",
  },
  {
    ZIP: "66394",
    NAME: "Tsooru postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Antsla vald",
    A3_NAME: "Tsooru k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Kaupluse",
    A7_NAME: "",

    X_COORDINATE: "26.651857",
    Y_COORDINATE: "57.741855",
    SERVICE_HOURS:
      "E,T,K,N,R 13:00-15:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-22T07:42:47.240+02:00",
  },
  {
    ZIP: "46695",
    NAME: "Tudu postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Vinni vald",
    A3_NAME: "Tudu alevik",

    A5_NAME: "Rakvere mnt",

    X_COORDINATE: "26.854177",
    Y_COORDINATE: "59.180072",
    SERVICE_HOURS: "E,T,K,N,R,L,P 10:00-21:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-30T10:47:52.017+03:00",
  },
  {
    ZIP: "42294",
    NAME: "Tudulinna postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Alutaguse vald",
    A3_NAME: "Tudulinna alevik",

    A5_NAME: "Pikk tn",

    X_COORDINATE: "27.081454",
    Y_COORDINATE: "59.035903",
    SERVICE_HOURS: "E,T,K,N,R 10:00-21:00 L,P SULETUD",

    MODIFIED: "2021-06-01T12:22:12.517+03:00",
  },
  {
    ZIP: "9120",
    NAME: "Tukuma Kurzemes ielas Maxima XX pakom\u0101ts",

    A1_NAME: "Tukuma novads",
    A2_NAME: "Tukums",
    A3_NAME: "",

    A5_NAME: "Kurzemes iela",

    A7_NAME: "36",

    X_COORDINATE: "23.153785",
    Y_COORDINATE: "56.971491",

    comment_lav: "Pa kreisi no galven\u0101s ieejas",

    MODIFIED: "2021-01-14T07:48:34.853+02:00",
  },
  {
    ZIP: "9927",
    NAME: "Tukuma Pasta ielas RIMI pakom\u0101ts",

    A1_NAME: "Tukuma novads",
    A2_NAME: "Tukums",
    A3_NAME: "",

    A5_NAME: "Pasta iela",

    A7_NAME: "14",

    X_COORDINATE: "23.158829",
    Y_COORDINATE: "56.967484",

    comment_lav: "Blakus RIMI ieejai no autost\u0101vvietas puses",

    MODIFIED: "2021-01-14T07:49:09.387+02:00",
  },
  {
    ZIP: "96223",
    NAME: "Turba kaupluse pakiautomaat",

    A2_NAME: "Saue vald",
    A3_NAME: "Turba alevik",

    A5_NAME: "",
    A6_NAME: "Tehase t\u00e4nav",
    A7_NAME: "",

    X_COORDINATE: "24.238641",
    Y_COORDINATE: "59.079758",

    MODIFIED: "2021-04-14T07:17:19.083+03:00",
  },
  {
    ZIP: "55597",
    NAME: "Tytuv\u0117n\u0173 SIGITA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Kelm\u0117s r. sav.",
    A3_NAME: "Tytuv\u0117n\u0173 m.",

    A5_NAME: "Maironio g.",

    X_COORDINATE: "23.198590",
    Y_COORDINATE: "55.597189",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T12:36:11.720+02:00",
  },
  {
    ZIP: "96053",
    NAME: "T\u00f5rva Maxima X pakiautomaat",

    A1_NAME: "Valga maakond",
    A2_NAME: "T\u00f5rva vald",
    A3_NAME: "T\u00f5rva linn",

    A5_NAME: "Tamme tn",

    X_COORDINATE: "25.932639",
    Y_COORDINATE: "57.997766",

    MODIFIED: "2020-11-11T08:36:48.987+02:00",
  },
  {
    ZIP: "68699",
    NAME: "T\u00f5rva postkontor",

    A1_NAME: "Valga maakond",
    A2_NAME: "T\u00f5rva vald",
    A3_NAME: "T\u00f5rva linn",

    A5_NAME: "Valga tn",

    X_COORDINATE: "25.922269",
    Y_COORDINATE: "58.002604",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-03T12:54:34.357+03:00",
  },
  {
    ZIP: "96178",
    NAME: "T\u00f5rvandi Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kambja vald",
    A3_NAME: "T\u00f5rvandi alevik",

    A5_NAME: "M\u00fc\u00fcrsepa tn",

    X_COORDINATE: "26.710670",
    Y_COORDINATE: "58.323037",

    MODIFIED: "2021-05-13T06:02:58.573+03:00",
  },
  {
    ZIP: "61794",
    NAME: "T\u00f5rvandi postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kambja vald",
    A3_NAME: "T\u00f5rvandi alevik",

    A5_NAME: "Papli tn",

    X_COORDINATE: "26.705921",
    Y_COORDINATE: "58.322162",
    SERVICE_HOURS:
      "E,R 08:00-12:00 T,K,N 13:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "14.06.2021 kuni 30.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "30.06.2021",

    MODIFIED: "2021-06-03T10:01:48.163+03:00",
  },
  {
    ZIP: "88122",
    NAME: "T\u00f5stamaa postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "T\u00f5stamaa alevik",

    A5_NAME: "Varbla mnt",

    X_COORDINATE: "23.994025",
    Y_COORDINATE: "58.334620",

    MODIFIED: "2021-04-05T14:00:13.077+03:00",
  },
  {
    ZIP: "88100",
    NAME: "T\u00f5stamaa postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00e4rnu linn",
    A3_NAME: "T\u00f5stamaa alevik",

    A5_NAME: "Varbla mnt",

    X_COORDINATE: "23.994026",
    Y_COORDINATE: "58.334619",
    SERVICE_HOURS:
      "Kuni 16.05.2021: E,T,K,N,R 09:00-12:00;Alates 17.05.2021: E,T,K,N,R 10:00-12:00;L,P SULETUD",

    MODIFIED: "2021-05-14T11:50:07.087+03:00",
  },
  {
    ZIP: "96052",
    NAME: "T\u00fcri Maxima X pakiautomaat",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "T\u00fcri vald",
    A3_NAME: "T\u00fcri linn",

    A5_NAME: "Viljandi tn",

    X_COORDINATE: "25.427680",
    Y_COORDINATE: "58.806033",

    MODIFIED: "2020-11-11T08:37:44.353+02:00",
  },
  {
    ZIP: "72201",
    NAME: "T\u00fcri postkontor",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "T\u00fcri vald",
    A3_NAME: "T\u00fcri linn",

    A5_NAME: "Viljandi tn",

    A7_NAME: "1a",

    X_COORDINATE: "25.428840",
    Y_COORDINATE: "58.807438",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-17:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T10:28:36.370+02:00",
  },
  {
    ZIP: "44294",
    NAME: "Ubja postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Rakvere vald",
    A3_NAME: "Ubja k\u00fcla",

    A5_NAME: "Jaaniku tee",

    X_COORDINATE: "26.435587",
    Y_COORDINATE: "59.416099",

    MODIFIED: "2020-01-21T11:23:30.287+02:00",
  },
  {
    ZIP: "9209",
    NAME: "Ug\u0101les ELVI pakom\u0101ts",

    A1_NAME: "Ventspils novads",
    A2_NAME: "Ug\u0101les pagasts",
    A3_NAME: "Ug\u0101le",

    A5_NAME: "Skolas iela",

    X_COORDINATE: "22.017880",
    Y_COORDINATE: "57.277342",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-11T08:52:02.860+02:00",
  },
  {
    ZIP: "88892",
    NAME: "Ukmerg\u0117s IKI Vilniaus g. pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Ukmerg\u0117s r. sav.",
    A3_NAME: "Ukmerg\u0117s m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "62",

    X_COORDINATE: "24.773200",
    Y_COORDINATE: "55.244184",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos,  kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> netoli taromato",
    MODIFIED: "2021-05-20T06:35:30.330+03:00",
  },
  {
    ZIP: "88869",
    NAME: "Ukmerg\u0117s MAXIMA \u017diedo pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Ukmerg\u0117s r. sav.",
    A3_NAME: "Ukmerg\u0117s m.",

    A5_NAME: "\u017diedo g.",

    X_COORDINATE: "24.743681",
    Y_COORDINATE: "55.242989",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T12:18:32.640+02:00",
  },
  {
    ZIP: "55579",
    NAME: "Ukmerg\u0117s RIMI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Ukmerg\u0117s r. sav.",
    A3_NAME: "Ukmerg\u0117s m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "60",

    X_COORDINATE: "24.776571",
    Y_COORDINATE: "55.254599",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T20:13:04.933+02:00",
  },
  {
    ZIP: "9110",
    NAME: "Ulbrokas TOP pakom\u0101ts",

    A1_NAME: "Stopi\u0146u novads",
    A2_NAME: "",
    A3_NAME: "Ulbroka",

    A5_NAME: "Peldu iela",

    X_COORDINATE: "24.291820",
    Y_COORDINATE: "56.939479",

    MODIFIED: "2020-11-12T12:53:45.887+02:00",
  },
  {
    ZIP: "46794",
    NAME: "Ulvi postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Vinni vald",
    A3_NAME: "Ulvi k\u00fcla",

    A5_NAME: "M\u00f5isa tee",

    X_COORDINATE: "26.630600",
    Y_COORDINATE: "59.324873",
    SERVICE_HOURS: "E,K,N,R 11:00-19:00 L 11:00-15:00 T,P SULETUD",

    MODIFIED: "2021-04-01T13:03:17.287+03:00",
  },
  {
    ZIP: "9184",
    NAME: "Upesciema Lats pakom\u0101ts",

    A1_NAME: "Garkalnes novads",
    A2_NAME: "",
    A3_NAME: "Upesciems",

    A5_NAME: "Ziedu iela",

    X_COORDINATE: "24.335710",
    Y_COORDINATE: "56.980450",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-04T07:59:21.307+02:00",
  },
  {
    ZIP: "55580",
    NAME: "Utenos MAXIMA Au\u0161ros pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Utenos r. sav.",
    A3_NAME: "Utenos m.",

    A5_NAME: "Au\u0161ros g.",

    X_COORDINATE: "25.596654",
    Y_COORDINATE: "55.508019",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:44:47.040+03:00",
  },
  {
    ZIP: "55581",
    NAME: "Utenos MAXIMA Basanavi\u010diaus 108B pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Utenos r. sav.",
    A3_NAME: "Utenos m.",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "108B",

    X_COORDINATE: "25.623609",
    Y_COORDINATE: "55.505753",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T09:17:10.997+02:00",
  },
  {
    ZIP: "88860",
    NAME: "Utenos RIMI-SENUKAI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Utenos r. sav.",
    A3_NAME: "Utenos m.",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "52",

    X_COORDINATE: "25.596356",
    Y_COORDINATE: "55.498111",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie prekybos centro sienos i\u0161 autobus\u0173 stoties pus\u0117s",
    MODIFIED: "2020-12-27T08:07:42.073+02:00",
  },
  {
    ZIP: "96164",
    NAME: "Uuem\u00f5isa Coop Konsumi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Haapsalu linn",
    A3_NAME: "Uuem\u00f5isa alevik",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "84",

    X_COORDINATE: "23.582382",
    Y_COORDINATE: "58.940366",

    MODIFIED: "2021-04-29T06:12:01.910+03:00",
  },
  {
    ZIP: "96244",
    NAME: "Vaida Coop kaupluse pakiautomaat",

    A2_NAME: "Rae vald",
    A3_NAME: "Vaida alevik",

    A5_NAME: "Vana-Vaida tee",

    X_COORDINATE: "24.976524",
    Y_COORDINATE: "59.285628",

    MODIFIED: "2020-12-01T06:34:23.087+02:00",
  },
  {
    ZIP: "75395",
    NAME: "Vaida postipunkt",

    A2_NAME: "Rae vald",
    A3_NAME: "Vaida alevik",

    A5_NAME: "Vana-Vaida tee",

    X_COORDINATE: "24.977156",
    Y_COORDINATE: "59.285452",
    SERVICE_HOURS: "E,T,K,N,R 11:00-18:00 L 10:00-14:00 P SULETUD",

    TEMP_SERVICE_HOURS_2: "Kuni 31.08.2021: E,T,K,N,R 11:00-18:00",
    TEMP_SERVICE_HOURS_2_UNTIL: "31.08.2021",

    MODIFIED: "2021-05-27T12:51:39.843+03:00",
  },
  {
    ZIP: "46094",
    NAME: "Vajangu postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Tapa vald",
    A3_NAME: "Vajangu k\u00fcla",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "26.007271",
    Y_COORDINATE: "59.109334",
    SERVICE_HOURS: "E,T,K,N,R 13:30-17:00 L,P SULETUD",

    MODIFIED: "2021-04-14T09:18:10.190+03:00",
  },
  {
    ZIP: "9134",
    NAME: "Valdlau\u010du TOP pakom\u0101ts",

    A1_NAME: "\u0136ekavas novads",
    A2_NAME: "\u0136ekavas pagasts",
    A3_NAME: "Valdlau\u010di",

    A5_NAME: "Atp\u016btas iela",

    X_COORDINATE: "24.147541",
    Y_COORDINATE: "56.904139",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-12T13:38:51.630+02:00",
  },
  {
    ZIP: "96042",
    NAME: "Valga Maxima XX pakiautomaat",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "Valga linn",

    A5_NAME: "Jaama pst",

    A7_NAME: "2b",

    X_COORDINATE: "26.044140",
    Y_COORDINATE: "57.774392",

    MODIFIED: "2021-04-13T13:58:33.220+03:00",
  },
  {
    ZIP: "96227",
    NAME: "Valga Siili Coop Konsumi pakiautomaat",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "Valga linn",

    A5_NAME: "A. Neulandi tn",

    X_COORDINATE: "26.036988",
    Y_COORDINATE: "57.778938",

    MODIFIED: "2021-05-13T06:05:42.447+03:00",
  },
  {
    ZIP: "68299",
    NAME: "Valga postkontor",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "Valga linn",

    A5_NAME: "A. Neulandi tn",

    X_COORDINATE: "26.036680",
    Y_COORDINATE: "57.778976",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-17T08:46:20.847+03:00",
  },
  {
    ZIP: "94394",
    NAME: "Valjala postipunkt",

    A1_NAME: "Saare maakond",
    A2_NAME: "Saaremaa vald",
    A3_NAME: "Valjala alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "22.790170",
    Y_COORDINATE: "58.409050",
    SERVICE_HOURS:
      "T,K,N,R 09:00-17:00 L 09:00-15:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:45:55.033+03:00",
  },
  {
    ZIP: "9956",
    NAME: "Valkas T/C Walk pakom\u0101ts",

    A1_NAME: "Valkas novads",
    A2_NAME: "Valka",
    A3_NAME: "",

    A5_NAME: "Ausek\u013ca iela",

    A7_NAME: "54",

    X_COORDINATE: "26.014727",
    Y_COORDINATE: "57.785275",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-13T07:40:29.513+02:00",
  },
  {
    ZIP: "74394",
    NAME: "Valkla postipunkt",

    A2_NAME: "Kuusalu vald",
    A3_NAME: "Valkla k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Valkla m\u00f5is",
    A7_NAME: "",

    X_COORDINATE: "25.333830",
    Y_COORDINATE: "59.479272",
    SERVICE_HOURS:
      "T,K,N,R,L 10:00-18:00 E,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-29T09:04:23.093+03:00",
  },
  {
    ZIP: "9119",
    NAME: "Valmieras N\u0101kotnes ielas Maxima X pakom\u0101ts",

    A1_NAME: "Valmiera",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "N\u0101kotnes iela",

    X_COORDINATE: "25.427624",
    Y_COORDINATE: "57.530158",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:50:10.710+02:00",
  },
  {
    ZIP: "9166",
    NAME: "Valmieras Rubenes ielas RIMI pakom\u0101ts",

    A1_NAME: "Valmiera",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Rubenes iela",

    A7_NAME: "51",

    X_COORDINATE: "25.419684",
    Y_COORDINATE: "57.547085",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:39:12.723+02:00",
  },
  {
    ZIP: "9197",
    NAME: "Valmieras R\u012bgas ielas TOP pakom\u0101ts",

    A1_NAME: "Valmiera",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "64",

    X_COORDINATE: "25.398035",
    Y_COORDINATE: "57.533559",

    MODIFIED: "2020-11-13T06:08:36.570+02:00",
  },
  {
    ZIP: "9928",
    NAME: "Valmieras T/C Valleta pakom\u0101ts",

    A1_NAME: "Valmiera",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "R\u012bgas iela",

    X_COORDINATE: "25.423716",
    Y_COORDINATE: "57.538544",

    comment_lav: "T/C aizmugur\u0113, pa kreisi no ieejas",

    MODIFIED: "2021-01-05T07:38:52.793+02:00",
  },
  {
    ZIP: "9148",
    NAME: "Vanga\u017eu Aibes pakom\u0101ts",

    A1_NAME: "In\u010dukalna novads",
    A2_NAME: "Vanga\u017ei",
    A3_NAME: "",

    A5_NAME: "Gaujas iela",

    A7_NAME: "19A",

    X_COORDINATE: "24.544350",
    Y_COORDINATE: "57.092692",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-02-23T07:15:28.543+02:00",
  },
  {
    ZIP: "88241",
    NAME: "Varbla postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Varbla k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Vallamaja",
    A7_NAME: "",

    X_COORDINATE: "23.753702",
    Y_COORDINATE: "58.430278",

    MODIFIED: "2021-04-05T13:59:55.737+03:00",
  },
  {
    ZIP: "88294",
    NAME: "Varbla postipunkt (raamatukogus)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Varbla k\u00fcla",

    A5_NAME: "",
    A6_NAME: "Vallamaja",
    A7_NAME: "",

    X_COORDINATE: "23.753539",
    Y_COORDINATE: "58.430137",
    SERVICE_HOURS:
      "E 12:00-15:00 K,R 09:00-17:00 N 09:00-18:30 L 09:00-13:00 T,P SULETUD",
    TEMP_SERVICE_HOURS: "05.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "05.06.2021",

    MODIFIED: "2021-06-03T08:32:25.567+03:00",
  },
  {
    ZIP: "78296",
    NAME: "Varbola postipunkt (Rita pood)",

    A1_NAME: "Rapla maakond",
    A2_NAME: "M\u00e4rjamaa vald",
    A3_NAME: "Varbola k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "24.450007",
    Y_COORDINATE: "59.045235",
    SERVICE_HOURS: "E,T,K,N,R 10:00-16:00 L,P SULETUD",

    MODIFIED: "2021-04-14T09:18:36.847+03:00",
  },
  {
    ZIP: "66194",
    NAME: "Varstu postipunkt",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "R\u00f5uge vald",
    A3_NAME: "Varstu alevik",

    A5_NAME: "Kultuuri tn",

    X_COORDINATE: "26.668325",
    Y_COORDINATE: "57.646922",
    SERVICE_HOURS:
      "E,T,R 08:30-12:30, 13:00-16:00 N 09:30-12:30, 13:00-17:00 K,L,P SULETUD",

    MODIFIED: "2021-03-29T11:55:30.883+03:00",
  },
  {
    ZIP: "88834",
    NAME: "Var\u0117nos IKI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Alytaus apskr.",
    A2_NAME: "Var\u0117nos r. sav.",
    A3_NAME: "Var\u0117nos m.",

    A5_NAME: "Sporto g.",

    X_COORDINATE: "24.563966",
    Y_COORDINATE: "54.215275",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-06T07:49:44.893+03:00",
  },
  {
    ZIP: "71310",
    NAME: "Vastem\u00f5isa postipunkt (Coop)",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "Vastem\u00f5isa k\u00fcla",

    A5_NAME: "Vastem\u00f5isa tee",

    X_COORDINATE: "25.440900",
    Y_COORDINATE: "58.442228",
    SERVICE_HOURS: "E,T,K,N,R 09:00-18:00 L,P 09:00-16:00",

    MODIFIED: "2021-05-03T07:47:14.963+03:00",
  },
  {
    ZIP: "96322",
    NAME: "Vastse-Kuuste Coop kaupluse pakiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "Vastse-Kuuste alevik",

    A5_NAME: "Keskt\u00e4nav",

    A7_NAME: "16",

    X_COORDINATE: "26.932484",
    Y_COORDINATE: "58.166376",

    MODIFIED: "2020-12-14T07:54:07.080+02:00",
  },
  {
    ZIP: "63600",
    NAME: "Vastse-Kuuste postkontor",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "P\u00f5lva vald",
    A3_NAME: "Vastse-Kuuste alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.941752",
    Y_COORDINATE: "58.171663",
    SERVICE_HOURS: "E,T,K,N,R 09:00-12:30 L,P SULETUD",

    MODIFIED: "2021-05-03T08:35:38.037+03:00",
  },
  {
    ZIP: "65200",
    NAME: "Vastseliina postkontor",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru vald",
    A3_NAME: "Vastseliina alevik",

    A5_NAME: "V\u00f5idu tn",

    A7_NAME: "21",

    X_COORDINATE: "27.284067",
    Y_COORDINATE: "57.731987",
    SERVICE_HOURS:
      "E,T,K,R 09:00-12:00 N 14:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-05T12:42:11.113+03:00",
  },
  {
    ZIP: "9993",
    NAME: "Vecpiebalgas TOP pakom\u0101ts",

    A1_NAME: "Vecpiebalgas novads",
    A2_NAME: "Vecpiebalgas pagasts",
    A3_NAME: "Vecpiebalga",

    A5_NAME: "Alauksta iela",

    X_COORDINATE: "25.816964",
    Y_COORDINATE: "57.060458",

    MODIFIED: "2020-11-13T10:37:12.993+02:00",
  },
  {
    ZIP: "9154",
    NAME: "Vecumnieku Lats pakom\u0101ts",

    A1_NAME: "Vecumnieku novads",
    A2_NAME: "Vecumnieku pagasts",
    A3_NAME: "Vecumnieki",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "24B",

    X_COORDINATE: "24.520181",
    Y_COORDINATE: "56.606484",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-12T14:24:15.647+02:00",
  },
  {
    ZIP: "55598",
    NAME: "Ventos NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Akmen\u0117s r. sav.",
    A3_NAME: "Ventos m.",

    A5_NAME: "Plento g.",

    A7_NAME: "2A",

    X_COORDINATE: "22.679323",
    Y_COORDINATE: "56.193186",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T20:06:09.677+02:00",
  },
  {
    ZIP: "9210",
    NAME: "Ventspils Celtnieku ielas ELVI pakom\u0101ts",

    A1_NAME: "Ventspils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Celtnieku iela",

    X_COORDINATE: "21.596744",
    Y_COORDINATE: "57.408242",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2021-01-14T07:50:33.930+02:00",
  },
  {
    ZIP: "9923",
    NAME: "Ventspils Gan\u012bbu ielas Mego pakom\u0101ts",

    A1_NAME: "Ventspils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Gan\u012bbu iela",

    A7_NAME: "22/24",

    X_COORDINATE: "21.562643",
    Y_COORDINATE: "57.389889",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:51:08.637+02:00",
  },
  {
    ZIP: "9102",
    NAME: "Ventspils Poruka ielas RIMI pakom\u0101ts",

    A1_NAME: "Ventspils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "J. Poruka iela",

    X_COORDINATE: "21.549223",
    Y_COORDINATE: "57.386794",

    comment_lav: "Blakus T/C centr\u0101lajai ieejai",

    MODIFIED: "2021-01-14T07:51:52.030+02:00",
  },
  {
    ZIP: "9963",
    NAME: "Ventspils T/C Tobago pakom\u0101ts",

    A1_NAME: "Ventspils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "Lielais prospekts",

    A7_NAME: "3/5",

    X_COORDINATE: "21.580209",
    Y_COORDINATE: "57.387718",

    comment_lav: "Pa kreisi no T/C otr\u0101s ieejas",

    MODIFIED: "2020-11-19T11:18:34.053+02:00",
  },
  {
    ZIP: "9957",
    NAME: "Ventspils T\u0101rgales ielas Mini RIMI pakom\u0101ts",

    A1_NAME: "Ventspils",
    A2_NAME: "",
    A3_NAME: "",

    A5_NAME: "T\u0101rgales iela",

    A7_NAME: "62",

    X_COORDINATE: "21.602782",
    Y_COORDINATE: "57.400019",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2021-01-14T07:52:16.560+02:00",
  },
  {
    ZIP: "64234",
    NAME: "Veriora postiautomaat",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "Veriora alevik",

    A5_NAME: "R\u00e4pina mnt",

    X_COORDINATE: "27.347572",
    Y_COORDINATE: "58.004384",

    MODIFIED: "2021-01-22T02:00:06.527+02:00",
  },
  {
    ZIP: "64294",
    NAME: "Veriora postipunkt",

    A1_NAME: "P\u00f5lva maakond",
    A2_NAME: "R\u00e4pina vald",
    A3_NAME: "Veriora alevik",

    A5_NAME: "R\u00e4pina mnt",

    X_COORDINATE: "27.347183",
    Y_COORDINATE: "58.005125",
    SERVICE_HOURS:
      "T,N 09:00-13:30, 14:00-18:00 K 09:00-13:30, 14:00-19:00 L 09:00-14:00 E,R,P SULETUD",

    MODIFIED: "2021-04-16T10:46:58.180+03:00",
  },
  {
    ZIP: "9167",
    NAME: "Vies\u012btes TOP pakom\u0101ts",

    A1_NAME: "Vies\u012btes novads",
    A2_NAME: "Vies\u012bte",
    A3_NAME: "",

    A5_NAME: "Rai\u0146a iela",

    A7_NAME: "23",

    X_COORDINATE: "25.556421",
    Y_COORDINATE: "56.345913",

    comment_lav: "Blakus veikala ieejai",

    MODIFIED: "2020-11-13T05:39:38.160+02:00",
  },
  {
    ZIP: "55502",
    NAME: "Vievio MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Elektr\u0117n\u0173 sav.",
    A3_NAME: "Vievio m.",

    A5_NAME: "Kauno g.",

    A7_NAME: "22",

    X_COORDINATE: "24.817913",
    Y_COORDINATE: "54.772036",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, \u0161alia taromato",
    MODIFIED: "2021-06-02T06:51:39.070+03:00",
  },
  {
    ZIP: "87640",
    NAME: "Vihtra postipunkt (raamatukogu)",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "Vihtra k\u00fcla",

    A5_NAME: "J\u00f5esuu tee",

    X_COORDINATE: "25.019895",
    Y_COORDINATE: "58.585790",
    SERVICE_HOURS:
      "Alates 01.06.2021: T,N 11:00-13:00, 13:30-18:00 R 10:00-13:00, 13:30-17:00;E,K,L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-06-01T09:58:10.400+03:00",
  },
  {
    ZIP: "96013",
    NAME: "Viimsi Kaubanduskeskuse pakiautomaat",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Haabneeme alevik",

    A5_NAME: "Randvere tee",

    X_COORDINATE: "24.830353",
    Y_COORDINATE: "59.506255",

    MODIFIED: "2021-05-20T05:02:32.613+03:00",
  },
  {
    ZIP: "96124",
    NAME: "Viimsi P\u00e4rnam\u00e4e Rimi pakiautomaat",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Laiak\u00fcla",

    A5_NAME: "Lilleoru tee",

    X_COORDINATE: "24.905474",
    Y_COORDINATE: "59.462159",

    MODIFIED: "2021-05-19T05:37:14.393+03:00",
  },
  {
    ZIP: "96209",
    NAME: "Viimsi Rimi pakiautomaat",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Haabneeme alevik",

    A5_NAME: "Randvere tee",

    X_COORDINATE: "24.828047",
    Y_COORDINATE: "59.505763",

    MODIFIED: "2021-05-18T05:50:23.513+03:00",
  },
  {
    ZIP: "74094",
    NAME: "Viimsi postkontor",

    A2_NAME: "Viimsi vald",
    A3_NAME: "Haabneeme alevik",

    A5_NAME: "Paadi tee",

    X_COORDINATE: "24.826322",
    Y_COORDINATE: "59.503662",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-19:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T09:06:59.940+02:00",
  },
  {
    ZIP: "12996",
    NAME: "Vilde postipunkt",

    A3_NAME: "Mustam\u00e4e linnaosa",

    A5_NAME: "E. Vilde tee",

    A7_NAME: "73",

    X_COORDINATE: "24.686509",
    Y_COORDINATE: "59.402265",
    SERVICE_HOURS: "E,T,K,N,R 13:00-15:00 L,P SULETUD",

    MODIFIED: "2021-03-04T08:12:51.820+02:00",
  },
  {
    ZIP: "96032",
    NAME: "Viljandi Bussijaama pakiautomaat",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "Ilmarise tn",

    X_COORDINATE: "25.598762",
    Y_COORDINATE: "58.369069",

    MODIFIED: "2021-05-04T07:43:41.177+03:00",
  },
  {
    ZIP: "96070",
    NAME: "Viljandi Coop Maksimarketi pakiautomaat",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "L\u00e4\u00e4ne tn",

    X_COORDINATE: "25.583164",
    Y_COORDINATE: "58.370653",

    MODIFIED: "2021-04-26T07:57:30.963+03:00",
  },
  {
    ZIP: "96063",
    NAME: "Viljandi M\u00e4nnim\u00e4e Selveri pakiautomaat",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "Riia mnt",

    A7_NAME: "35",

    X_COORDINATE: "25.584300",
    Y_COORDINATE: "58.352996",

    MODIFIED: "2021-05-20T05:04:50.207+03:00",
  },
  {
    ZIP: "96313",
    NAME: "Viljandi Tallinna 60 Maxima X pakiautomaat",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "Tallinna tn",

    A7_NAME: "60",

    X_COORDINATE: "25.598462",
    Y_COORDINATE: "58.376676",

    MODIFIED: "2020-11-11T08:39:39.550+02:00",
  },
  {
    ZIP: "96312",
    NAME: "Viljandi Vaksali Maxima X pakiautomaat",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "Vaksali tn",

    A7_NAME: "11b",

    X_COORDINATE: "25.582631",
    Y_COORDINATE: "58.361816",

    MODIFIED: "2020-06-30T12:37:21.527+03:00",
  },
  {
    ZIP: "71098",
    NAME: "Viljandi postkontor",

    A2_NAME: "Viljandi linn",
    A3_NAME: "",

    A5_NAME: "Tallinna tn",

    A7_NAME: "41",

    X_COORDINATE: "25.597390",
    Y_COORDINATE: "58.369826",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-13T13:02:44.167+03:00",
  },
  {
    ZIP: "55547",
    NAME: "Vilkavi\u0161kio IKI Vytauto pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Vilkavi\u0161kio r. sav.",
    A3_NAME: "Vilkavi\u0161kio m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "101",

    X_COORDINATE: "23.032291",
    Y_COORDINATE: "54.648337",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:09:49.077+03:00",
  },
  {
    ZIP: "88835",
    NAME: "Vilkavi\u0161kio NORFA Nepriklausomyb\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "Vilkavi\u0161kio r. sav.",
    A3_NAME: "Vilkavi\u0161kio m.",

    A5_NAME: "Nepriklausomyb\u0117s g.",

    A7_NAME: "61",

    X_COORDINATE: "23.030156",
    Y_COORDINATE: "54.658581",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:48:26.257+03:00",
  },
  {
    ZIP: "55548",
    NAME: "Vilkijos AIB\u0116 pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kauno r. sav.",
    A3_NAME: "Vilkijos m.",

    A5_NAME: "Kauno g.",

    A7_NAME: "51",

    X_COORDINATE: "23.591206",
    Y_COORDINATE: "55.040367",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T12:26:53.027+02:00",
  },
  {
    ZIP: "77784",
    NAME: "Vilniaus 3 BUR\u0116S PARKINGAS Krokuvos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Lvovo g.",

    A7_NAME: "25",

    X_COORDINATE: "25.279793",
    Y_COORDINATE: "54.697507",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie VC 3 BUR\u0116S ant\u017eeminio parkavimo aik\u0161tel\u0117s </br> pastato i\u0161 Krokuvos g. pus\u0117s",
    MODIFIED: "2020-12-27T19:22:52.597+02:00",
  },
  {
    ZIP: "77754",
    NAME: "Vilniaus Avi\u017eieni\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "U\u017eubali\u0173 k.",

    A5_NAME: "Saul\u0117s g.",

    X_COORDINATE: "25.193652",
    Y_COORDINATE: "54.763884",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:58:59.047+03:00",
  },
  {
    ZIP: "77755",
    NAME: "Vilniaus Balsi\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dali\u0173j\u0173 E\u017eer\u0173 g.",

    A7_NAME: "207",

    X_COORDINATE: "25.348863",
    Y_COORDINATE: "54.800556",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T08:04:58.203+03:00",
  },
  {
    ZIP: "88871",
    NAME: "Vilniaus CUP pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Up\u0117s g.",

    X_COORDINATE: "25.276537",
    Y_COORDINATE: "54.694023",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite kair\u0117je 3-ojo auk\u0161to \u012f\u0117jimo pus\u0117je, \u0161alia automobili\u0173 stov\u0117jimo </br>  aik\u0161tel\u0117s",
    MODIFIED: "2021-06-03T07:49:18.007+03:00",
  },
  {
    ZIP: "77765",
    NAME: "Vilniaus EXPRESS MARKET Jasinskio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "J. Jasinskio g.",

    X_COORDINATE: "25.267651",
    Y_COORDINATE: "54.688005",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-06T08:41:10.577+03:00",
  },
  {
    ZIP: "77794",
    NAME: "Vilniaus EXPRESS MARKET Paribio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Paribio g.",

    A7_NAME: "30B",

    X_COORDINATE: "25.244228",
    Y_COORDINATE: "54.699918",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-29T08:27:11.750+02:00",
  },
  {
    ZIP: "77751",
    NAME: "Vilniaus EXPRESS MARKET Sapiegos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "L. Sapiegos g.",

    A7_NAME: "1C",

    X_COORDINATE: "25.310487",
    Y_COORDINATE: "54.696357",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-02T08:13:05.367+03:00",
  },
  {
    ZIP: "77753",
    NAME: "Vilniaus Galgi\u0173 IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Galgi\u0173 k.",

    A5_NAME: "Centrin\u0117 g.",

    A7_NAME: "62",

    X_COORDINATE: "25.412895",
    Y_COORDINATE: "54.725091",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T10:55:07.717+02:00",
  },
  {
    ZIP: "88888",
    NAME: "Vilniaus Grigi\u0161ki\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A3_NAME: "Grigi\u0161ki\u0173 m.",

    A5_NAME: "Kovo 11-osios g.",

    A7_NAME: "38",

    X_COORDINATE: "25.098455",
    Y_COORDINATE: "54.670221",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:14:44.987+03:00",
  },
  {
    ZIP: "77744",
    NAME: "Vilniaus IKI Bajor\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Bajor\u0173 kel.",

    X_COORDINATE: "25.261733",
    Y_COORDINATE: "54.754760",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T07:09:36.883+03:00",
  },
  {
    ZIP: "77725",
    NAME: "Vilniaus IKI Buivydi\u0161ki\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Buivydi\u0161ki\u0173 g.",

    A7_NAME: "17",

    X_COORDINATE: "25.238334",
    Y_COORDINATE: "54.713679",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, u\u017e taromato",
    MODIFIED: "2021-05-27T07:37:39.350+03:00",
  },
  {
    ZIP: "88850",
    NAME: "Vilniaus IKI Didlaukio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Didlaukio g.",

    A7_NAME: "80A",

    X_COORDINATE: "25.269791",
    Y_COORDINATE: "54.728806",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, parkinge i\u0161 Baltupio g. pus\u0117s, prie sienos",
    MODIFIED: "2021-06-03T07:50:15.767+03:00",
  },
  {
    ZIP: "77769",
    NAME: "Vilniaus IKI Dz\u016bk\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Dz\u016bk\u0173 g.",

    X_COORDINATE: "25.275839",
    Y_COORDINATE: "54.665135",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:32:46.290+03:00",
  },
  {
    ZIP: "77795",
    NAME: "Vilniaus IKI Franko pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "J. Franko g.",

    A7_NAME: "2A",

    X_COORDINATE: "25.283548",
    Y_COORDINATE: "54.760744",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-13T13:13:57.677+03:00",
  },
  {
    ZIP: "77776",
    NAME: "Vilniaus IKI Gabijos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Gabijos g.",

    A7_NAME: "36",

    X_COORDINATE: "25.223963",
    Y_COORDINATE: "54.736066",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, \u0161alia taromato",
    MODIFIED: "2021-06-03T07:52:31.857+03:00",
  },
  {
    ZIP: "88862",
    NAME: "Vilniaus IKI Jeruzal\u0117s pa\u0161tomatas ",

    A0_NAME: "LT",

    A5_NAME: "Jeruzal\u0117s g.",

    A7_NAME: "17",

    X_COORDINATE: "25.278166",
    Y_COORDINATE: "54.743055",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je </br> u\u017e kampo",
    MODIFIED: "2021-05-27T07:33:35.490+03:00",
  },
  {
    ZIP: "77763",
    NAME: "Vilniaus IKI Jona\u017eoli\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Jona\u017eoli\u0173 g.",

    X_COORDINATE: "25.214963",
    Y_COORDINATE: "54.667056",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T07:53:33.073+03:00",
  },
  {
    ZIP: "77779",
    NAME: "Vilniaus IKI Juodojo Kelio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Juodasis kel.",

    A7_NAME: "35A",

    X_COORDINATE: "25.341917",
    Y_COORDINATE: "54.662288",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-02T07:17:01.727+03:00",
  },
  {
    ZIP: "77766",
    NAME: "Vilniaus IKI Mindaugo pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Mindaugo g.",

    A7_NAME: "25",

    X_COORDINATE: "25.273988",
    Y_COORDINATE: "54.673122",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie pastato sienos, kuri ribojasi su tvora, kair\u0117je </br>  \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-02T08:18:32.367+03:00",
  },
  {
    ZIP: "77748",
    NAME: "Vilniaus IKI Saul\u0117tekio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Saul\u0117tekio al.",

    A7_NAME: "43",

    X_COORDINATE: "25.342202",
    Y_COORDINATE: "54.725093",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, greta taromato.",
    MODIFIED: "2021-05-27T07:48:01.250+03:00",
  },
  {
    ZIP: "77727",
    NAME: "Vilniaus IKI Stanevi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "S. Stanevi\u010diaus g.",

    A7_NAME: "23",

    X_COORDINATE: "25.254926",
    Y_COORDINATE: "54.723805",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je pagrindinio \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:45:18.547+03:00",
  },
  {
    ZIP: "88852",
    NAME: "Vilniaus IKI \u0160e\u0161kin\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u0160e\u0161kin\u0117s g.",

    A7_NAME: "32",

    X_COORDINATE: "25.245829",
    Y_COORDINATE: "54.715510",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:31:51.917+03:00",
  },
  {
    ZIP: "77775",
    NAME: "Vilniaus IKI \u017demynos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017demynos g.",

    X_COORDINATE: "25.225327",
    Y_COORDINATE: "54.725731",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je, u\u017e kampo",
    MODIFIED: "2020-12-29T09:05:31.167+02:00",
  },
  {
    ZIP: "77793",
    NAME: "Vilniaus IKI \u017dirm\u016bn\u0173 145 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dirm\u016bn\u0173 g.",

    A7_NAME: "145",

    X_COORDINATE: "25.297677",
    Y_COORDINATE: "54.722431",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T20:11:55.687+02:00",
  },
  {
    ZIP: "77791",
    NAME: "Vilniaus IKI \u017dirm\u016bn\u0173 2 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dirm\u016bn\u0173 g.",

    X_COORDINATE: "25.299597",
    Y_COORDINATE: "54.697362",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie tolimosios sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br>  pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-02T06:58:32.650+03:00",
  },
  {
    ZIP: "77745",
    NAME: "Vilniaus IMPULS Asanavi\u010di\u016bt\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Loretos Asanavi\u010di\u016bt\u0117s g.",

    A7_NAME: "15",

    X_COORDINATE: "25.209832",
    Y_COORDINATE: "54.689000",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f sporto klub\u0105 pus\u0117je",
    MODIFIED: "2021-06-03T07:54:19.193+03:00",
  },
  {
    ZIP: "77764",
    NAME: "Vilniaus LPSK Basanavi\u010diaus 29A pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "29A",

    X_COORDINATE: "25.267909",
    Y_COORDINATE: "54.681997",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f pastat\u0105 pus\u0117je",
    MODIFIED: "2021-06-03T07:55:03.430+03:00",
  },
  {
    ZIP: "77728",
    NAME: "Vilniaus MAXIMA Antakalnio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Antakalnio g.",

    A7_NAME: "75A",

    X_COORDINATE: "25.316486",
    Y_COORDINATE: "54.715466",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:04:08.820+03:00",
  },
  {
    ZIP: "77729",
    NAME: "Vilniaus MAXIMA Architekt\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Architekt\u0173 g.",

    A7_NAME: "152",

    X_COORDINATE: "25.213272",
    Y_COORDINATE: "54.682997",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:05:47.000+03:00",
  },
  {
    ZIP: "77758",
    NAME: "Vilniaus MAXIMA Gedvyd\u017ei\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Gedvyd\u017ei\u0173 g.",

    A7_NAME: "17",

    X_COORDINATE: "25.238612",
    Y_COORDINATE: "54.736906",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:06:27.470+03:00",
  },
  {
    ZIP: "88887",
    NAME: "Vilniaus MAXIMA Grybo pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "V. Grybo g.",

    A7_NAME: "21",

    X_COORDINATE: "25.315857",
    Y_COORDINATE: "54.703756",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je pastato pus\u0117je, \u0161alia taromato",
    MODIFIED: "2021-06-02T07:01:41.483+03:00",
  },
  {
    ZIP: "77730",
    NAME: "Vilniaus MAXIMA K\u0119stu\u010dio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "K\u0119stu\u010dio g.",

    A7_NAME: "37",

    X_COORDINATE: "25.251019",
    Y_COORDINATE: "54.693534",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T15:22:21.083+02:00",
  },
  {
    ZIP: "77777",
    NAME: "Vilniaus MAXIMA Medeinos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Medeinos g.",

    A7_NAME: "39",

    X_COORDINATE: "25.220814",
    Y_COORDINATE: "54.727851",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:25:22.480+02:00",
  },
  {
    ZIP: "77767",
    NAME: "Vilniaus MAXIMA Mindaugo pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Mindaugo g.",

    A7_NAME: "11",

    X_COORDINATE: "25.273446",
    Y_COORDINATE: "54.677870",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite 2-ame parkavimo aik\u0161tel\u0117s auk\u0161te, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je, u\u017e kampo, prie pastato sienos",
    MODIFIED: "2021-06-03T08:07:45.283+03:00",
  },
  {
    ZIP: "77768",
    NAME: "Vilniaus MAXIMA Morav\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Morav\u0173 g.",

    X_COORDINATE: "25.324703",
    Y_COORDINATE: "54.650452",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f PC pus\u0117je",
    MODIFIED: "2021-03-30T05:45:42.207+03:00",
  },
  {
    ZIP: "77732",
    NAME: "Vilniaus MAXIMA Naugarduko pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Naugarduko g.",

    A7_NAME: "84",

    X_COORDINATE: "25.258687",
    Y_COORDINATE: "54.669187",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Naugarduko g. pus\u0117s",
    MODIFIED: "2021-06-03T08:20:06.810+03:00",
  },
  {
    ZIP: "77772",
    NAME: "Vilniaus MAXIMA Pergal\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Pergal\u0117s g.",

    A7_NAME: "42",

    X_COORDINATE: "25.414166",
    Y_COORDINATE: "54.681630",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:20:55.873+03:00",
  },
  {
    ZIP: "77733",
    NAME: "Vilniaus MAXIMA Pilait\u0117s pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Pilait\u0117s pr.",

    A7_NAME: "31",

    X_COORDINATE: "25.188054",
    Y_COORDINATE: "54.709252",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos i\u0161 Pilait\u0117s pr. pus\u0117s",
    MODIFIED: "2021-06-02T07:06:02.220+03:00",
  },
  {
    ZIP: "88822",
    NAME: "Vilniaus MAXIMA Sausio 13-os pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Sausio 13-osios g.",

    X_COORDINATE: "25.221203",
    Y_COORDINATE: "54.692828",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je ",
    MODIFIED: "2021-05-20T07:04:40.710+03:00",
  },
  {
    ZIP: "77726",
    NAME: "Vilniaus MAXIMA Savanori\u0173 31 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Savanori\u0173 pr.",

    A7_NAME: "31",

    X_COORDINATE: "25.247727",
    Y_COORDINATE: "54.673846",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:55:51.557+03:00",
  },
  {
    ZIP: "77747",
    NAME: "Vilniaus MAXIMA Taikos 162A pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Taikos g.",

    A7_NAME: "162A",

    X_COORDINATE: "25.215334",
    Y_COORDINATE: "54.712458",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:23:58.857+03:00",
  },
  {
    ZIP: "88813",
    NAME: "Vilniaus MAXIMA Tuskul\u0117n\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Tuskul\u0117n\u0173 g.",

    A7_NAME: "66",

    X_COORDINATE: "25.288749",
    Y_COORDINATE: "54.702362",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:26:29.830+03:00",
  },
  {
    ZIP: "77774",
    NAME: "Vilniaus MAXIMA Ukmerg\u0117s g. 282 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ukmerg\u0117s g.",

    A7_NAME: "282",

    X_COORDINATE: "25.239511",
    Y_COORDINATE: "54.727454",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:58:35.850+02:00",
  },
  {
    ZIP: "88820",
    NAME: "Vilniaus MAXIMA Vir\u0161uli\u0161ki\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Vir\u0161uli\u0161ki\u0173 g.",

    A7_NAME: "30",

    X_COORDINATE: "25.222248",
    Y_COORDINATE: "54.709389",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012fva\u017eiavimo \u012f po\u017eemin\u0119 stov\u0117jimo </br> aik\u0161tel\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:24:51.990+03:00",
  },
  {
    ZIP: "88889",
    NAME: "Vilniaus MAXIMA \u0160altkalvi\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u0160altkalvi\u0173 g.",

    X_COORDINATE: "25.272317",
    Y_COORDINATE: "54.661525",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke,  prie pastato sienos \u0161alia taromato",
    MODIFIED: "2021-06-03T08:22:04.863+03:00",
  },
  {
    ZIP: "77785",
    NAME: "Vilniaus MAXIMA \u017dalgirio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dalgirio g.",

    A7_NAME: "105",

    X_COORDINATE: "25.282689",
    Y_COORDINATE: "54.704300",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:25:37.627+03:00",
  },
  {
    ZIP: "77786",
    NAME: "Vilniaus NORFA Ateities pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ateities g.",

    X_COORDINATE: "25.267757",
    Y_COORDINATE: "54.737135",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:47:30.937+03:00",
  },
  {
    ZIP: "77788",
    NAME: "Vilniaus NORFA BAZ\u0116 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Savanori\u0173 pr.",

    A7_NAME: "176",

    X_COORDINATE: "25.226200",
    Y_COORDINATE: "54.652326",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:35:47.747+03:00",
  },
  {
    ZIP: "88848",
    NAME: "Vilniaus NORFA Geni\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Geni\u0173 g.",

    A7_NAME: "10A",

    X_COORDINATE: "25.421732",
    Y_COORDINATE: "54.688179",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke, prie sienos kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T07:07:55.860+03:00",
  },
  {
    ZIP: "77752",
    NAME: "Vilniaus NORFA Gvazdik\u0173 Sod\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Gvazdik\u0173 Sod\u0173 1-oji g.",

    X_COORDINATE: "25.368341",
    Y_COORDINATE: "54.756815",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T07:08:57.083+03:00",
  },
  {
    ZIP: "77761",
    NAME: "Vilniaus NORFA Kavoliuko pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Algimanto Petro Kavoliuko g.",

    X_COORDINATE: "25.211137",
    Y_COORDINATE: "54.697605",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T07:26:35.837+03:00",
  },
  {
    ZIP: "88878",
    NAME: "Vilniaus NORFA Minsko pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Minsko pl.",

    X_COORDINATE: "25.305245",
    Y_COORDINATE: "54.652141",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T07:34:07.213+02:00",
  },
  {
    ZIP: "88890",
    NAME: "Vilniaus NORFA Mol\u0117t\u0173 pl. pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Mol\u0117t\u0173 pl.",

    A7_NAME: "47",

    X_COORDINATE: "25.272245",
    Y_COORDINATE: "54.772084",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie pastato sienos, i\u0161 Mol\u0117t\u0173 pl. pus\u0117s",
    MODIFIED: "2021-06-03T08:26:28.567+03:00",
  },
  {
    ZIP: "77762",
    NAME: "Vilniaus NORFA Parod\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Parod\u0173 g.",

    A7_NAME: "1A",

    X_COORDINATE: "25.223609",
    Y_COORDINATE: "54.673947",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T10:40:14.990+02:00",
  },
  {
    ZIP: "77734",
    NAME: "Vilniaus NORFA Rygos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Rygos g.",

    A7_NAME: "49",

    X_COORDINATE: "25.212569",
    Y_COORDINATE: "54.719025",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Rygos g. pus\u0117s",
    MODIFIED: "2021-06-03T08:27:19.250+03:00",
  },
  {
    ZIP: "88879",
    NAME: "Vilniaus NORFA \u017dvalg\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Kalvarij\u0173 g.",

    A7_NAME: "151",

    X_COORDINATE: "25.287830",
    Y_COORDINATE: "54.721530",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-03T08:32:40.367+03:00",
  },
  {
    ZIP: "77783",
    NAME: "Vilniaus PC AKROPOLIS pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ozo g.",

    A7_NAME: "25",

    X_COORDINATE: "25.263246",
    Y_COORDINATE: "54.711370",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, 5 \u012f\u0117jimo \u012f PC\u00a0de\u0161in\u0117je, netoli\u00a0parduotuv\u0117s Ermita\u017eas",
    MODIFIED: "2021-06-03T08:34:56.017+03:00",
  },
  {
    ZIP: "88811",
    NAME: "Vilniaus PC DOMUS PRO pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ukmerg\u0117s g.",

    A7_NAME: "308",

    X_COORDINATE: "25.225183",
    Y_COORDINATE: "54.740274",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie pastato sienos, i\u0161 Ukmerg\u0117s g. pus\u0117s",
    MODIFIED: "2021-06-03T08:36:49.197+03:00",
  },
  {
    ZIP: "88814",
    NAME: "Vilniaus PC MANDARINAS pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ateities g.",

    A7_NAME: "91",

    X_COORDINATE: "25.246227",
    Y_COORDINATE: "54.731491",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2021-05-27T07:27:55.090+03:00",
  },
  {
    ZIP: "77787",
    NAME: "Vilniaus PC OZAS pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ozo g.",

    A7_NAME: "18",

    X_COORDINATE: "25.276921",
    Y_COORDINATE: "54.714811",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je pagrindinio \u012f\u0117jimo \u012f PC pus\u0117je, </br> netoli parkingo",
    MODIFIED: "2021-06-03T08:37:55.450+03:00",
  },
  {
    ZIP: "77773",
    NAME: "Vilniaus Pagiri\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Pagiri\u0173 k.",

    A5_NAME: "Durpi\u0173 g.",

    A7_NAME: "36",

    X_COORDINATE: "25.201983",
    Y_COORDINATE: "54.578411",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:41:32.420+03:00",
  },
  {
    ZIP: "88858",
    NAME: "Vilniaus RIMI Architekt\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Architekt\u0173 g.",

    A7_NAME: "19",

    X_COORDINATE: "25.213588",
    Y_COORDINATE: "54.673672",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T08:57:48.593+03:00",
  },
  {
    ZIP: "77735",
    NAME: "Vilniaus RIMI Fabijoni\u0161ki\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ukmerg\u0117s g.",

    A7_NAME: "233",

    X_COORDINATE: "25.244926",
    Y_COORDINATE: "54.720839",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Ukmerg\u0117s g. pus\u0117s",
    MODIFIED: "2020-12-23T14:52:24.857+02:00",
  },
  {
    ZIP: "77736",
    NAME: "Vilniaus RIMI Kareivi\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Kareivi\u0173 g.",

    A7_NAME: "11A",

    X_COORDINATE: "25.299687",
    Y_COORDINATE: "54.717590",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-05-20T07:14:47.107+03:00",
  },
  {
    ZIP: "77737",
    NAME: "Vilniaus RIMI Medeinos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Medeinos g.",

    X_COORDINATE: "25.226908",
    Y_COORDINATE: "54.729681",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T08:59:22.350+03:00",
  },
  {
    ZIP: "88859",
    NAME: "Vilniaus RIMI Rygos pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Rygos g.",

    X_COORDINATE: "25.224671",
    Y_COORDINATE: "54.715875",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-20T07:02:02.657+03:00",
  },
  {
    ZIP: "88815",
    NAME: "Vilniaus RIMI Savanori\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Kedr\u0173 g.",

    X_COORDINATE: "25.257998",
    Y_COORDINATE: "54.675640",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je pagrindinio i\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je",
    MODIFIED: "2021-06-04T11:42:18.900+03:00",
  },
  {
    ZIP: "88823",
    NAME: "Vilniaus RIMI Vyd\u016bno pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Vyd\u016bno g.",

    X_COORDINATE: "25.188892",
    Y_COORDINATE: "54.707191",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:36:05.453+03:00",
  },
  {
    ZIP: "77738",
    NAME: "Vilniaus RIMI Zaras\u0173 g. pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Zaras\u0173 g.",

    A7_NAME: "5A",

    X_COORDINATE: "25.311927",
    Y_COORDINATE: "54.680978",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T07:47:16.527+03:00",
  },
  {
    ZIP: "77771",
    NAME: "Vilniaus RIMI \u0160iaur\u0117s g. pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u0160iaur\u0117s g.",

    A7_NAME: "37",

    X_COORDINATE: "25.411762",
    Y_COORDINATE: "54.701116",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-06-03T09:01:34.757+03:00",
  },
  {
    ZIP: "88816",
    NAME: "Vilniaus RIMI \u017dirm\u016bn\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dirm\u016bn\u0173 g.",

    A7_NAME: "64",

    X_COORDINATE: "25.300741",
    Y_COORDINATE: "54.712017",

    comment_lit:
      'Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je "Topo centro" \u012f\u0117jimo pus\u0117je',
    MODIFIED: "2021-05-27T07:28:56.717+03:00",
  },
  {
    ZIP: "77780",
    NAME: "Vilniaus Rie\u0161\u0117s MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Rie\u0161\u0117s k.",

    A5_NAME: "Ber\u017e\u0173 g.",

    A7_NAME: "2E",

    X_COORDINATE: "25.235768",
    Y_COORDINATE: "54.808076",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-27T08:04:06.427+03:00",
  },
  {
    ZIP: "77789",
    NAME: "Vilniaus SM\u0116LIO ARENA pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Justini\u0161ki\u0173 g.",

    A7_NAME: "12",

    X_COORDINATE: "25.219334",
    Y_COORDINATE: "54.703390",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f Sm\u0117lio Aren\u0105 pus\u0117je",
    MODIFIED: "2021-05-20T07:20:43.550+03:00",
  },
  {
    ZIP: "77759",
    NAME: "Vilniaus Salinink\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Salinink\u0173 g.",

    A7_NAME: "129A",

    X_COORDINATE: "25.263751",
    Y_COORDINATE: "54.605224",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-03T09:03:11.403+03:00",
  },
  {
    ZIP: "77757",
    NAME: "Vilniaus Tarand\u0117s RIMI pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Vaivadi\u0161ki\u0173 g.",

    X_COORDINATE: "25.203208",
    Y_COORDINATE: "54.748370",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f turg\u0173 pus\u0117je",
    MODIFIED: "2021-06-03T09:04:31.870+03:00",
  },
  {
    ZIP: "77750",
    NAME: "Vilniaus VC 2000 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Jogailos g.",

    X_COORDINATE: "25.278709",
    Y_COORDINATE: "54.686245",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite VC 2000 pastato viduje, kair\u0117je pus\u0117je. Ie\u0161kokite </br>  Omniva lipduko ant pastato dur\u0173",
    MODIFIED: "2021-06-02T08:53:34.157+03:00",
  },
  {
    ZIP: "77782",
    NAME: "Vilniaus VC EVOLUTION pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Ukmerg\u0117s g.",

    A7_NAME: "223",

    X_COORDINATE: "25.248924",
    Y_COORDINATE: "54.715259",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f VC pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-03T09:52:17.920+03:00",
  },
  {
    ZIP: "77792",
    NAME: "Vilniaus VC SIGMA pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Kalvarij\u0173 g.",

    A7_NAME: "127",

    X_COORDINATE: "25.286792",
    Y_COORDINATE: "54.711762",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 </br> DROGAS pus\u0117je, u\u017e kampo",
    MODIFIED: "2021-06-04T11:41:13.393+03:00",
  },
  {
    ZIP: "77743",
    NAME: "Vilniaus VC \u017dALGIRIO 135 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "\u017dalgirio g.",

    A7_NAME: "135",

    X_COORDINATE: "25.272422",
    Y_COORDINATE: "54.704980",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, prie \u012fva\u017eiavimo \u012f vidin\u012f kiem\u0105 i\u0161 \u017dalgirio g. pus\u0117s",
    MODIFIED: "2021-05-20T07:17:15.673+03:00",
  },
  {
    ZIP: "88818",
    NAME: "Vilniaus VIADA Saltoni\u0161ki\u0173 pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Saltoni\u0161ki\u0173 g.",

    A7_NAME: "12",

    X_COORDINATE: "25.259948",
    Y_COORDINATE: "54.699262",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je degalin\u0117s \u012f\u0117jimo pus\u0117je",
    MODIFIED: "2021-06-03T09:53:23.033+03:00",
  },
  {
    ZIP: "88826",
    NAME: "Vilniaus VIADA Saul\u0117tekio pa\u0161tomatas",

    A0_NAME: "LT",

    A5_NAME: "Nemen\u010din\u0117s pl.",

    X_COORDINATE: "25.326769",
    Y_COORDINATE: "54.726292",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, galin\u0117je degalin\u0117s pus\u0117je",
    MODIFIED: "2021-06-04T11:53:48.210+03:00",
  },
  {
    ZIP: "77790",
    NAME: "Vilniaus Zuj\u016bn\u0173 IKI pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Vilniaus r. sav.",
    A3_NAME: "Ante\u017eeri\u0173 k.",

    A5_NAME: "\u017dalioji g.",

    A7_NAME: "22A",

    X_COORDINATE: "25.183948",
    Y_COORDINATE: "54.730687",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T09:54:42.730+03:00",
  },
  {
    ZIP: "96149",
    NAME: "Vinni Spordikompleksi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Vinni vald",
    A3_NAME: "Vinni alevik",

    A5_NAME: "S\u00f5pruse tn",

    A7_NAME: "16",

    X_COORDINATE: "26.425841",
    Y_COORDINATE: "59.289998",

    MODIFIED: "2019-10-14T06:47:11.707+03:00",
  },
  {
    ZIP: "90119",
    NAME: "Virtsu postiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Virtsu alevik",

    A5_NAME: "Tallinna mnt",

    A7_NAME: "13",

    X_COORDINATE: "23.514918",
    Y_COORDINATE: "58.572393",

    MODIFIED: "2021-01-19T02:00:03.230+02:00",
  },
  {
    ZIP: "90195",
    NAME: "Virtsu postipunkt",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "L\u00e4\u00e4neranna vald",
    A3_NAME: "Virtsu alevik",

    A5_NAME: "T\u00f6\u00f6stuse tn",

    A7_NAME: "9a",

    X_COORDINATE: "23.531970",
    Y_COORDINATE: "58.578724",
    SERVICE_HOURS:
      "E,T,K,N,R 10:00-17:00 L 10:00-15:00 P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-16T10:32:15.807+03:00",
  },
  {
    ZIP: "44094",
    NAME: "Viru-Nigula postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Viru-Nigula vald",
    A3_NAME: "Viru-Nigula alevik",

    A5_NAME: "Kirikaia tn",

    X_COORDINATE: "26.689319",
    Y_COORDINATE: "59.447138",
    SERVICE_HOURS:
      "E,T,K 10:00-14:00 N 14:00-18:00 R 12:00-14:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-14T09:19:01.283+03:00",
  },
  {
    ZIP: "55582",
    NAME: "Visagino NORFA Taikos pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Visagino sav.",
    A3_NAME: "Visagino m.",

    A5_NAME: "Taikos pr.",

    X_COORDINATE: "26.431304",
    Y_COORDINATE: "55.603540",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:22:03.770+02:00",
  },
  {
    ZIP: "88840",
    NAME: "Visagino VIADA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Visagino sav.",
    A3_NAME: "Visagino m.",

    A5_NAME: "Statybinink\u0173 g.",

    X_COORDINATE: "26.438763",
    Y_COORDINATE: "55.594513",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2020-12-23T12:41:34.253+02:00",
  },
  {
    ZIP: "9157",
    NAME: "Vi\u013cakas Balvu ielas pakom\u0101ts",

    A1_NAME: "Vi\u013cakas novads",
    A2_NAME: "Vi\u013caka",
    A3_NAME: "",

    A5_NAME: "Balvu iela",

    X_COORDINATE: "27.671238",
    Y_COORDINATE: "57.184162",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2020-11-12T14:25:48.973+02:00",
  },
  {
    ZIP: "9118",
    NAME: "Vi\u013c\u0101nu Br\u012bv\u012bbas ielas pakom\u0101ts",

    A1_NAME: "Vi\u013c\u0101nu novads",
    A2_NAME: "Vi\u013c\u0101ni",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    A7_NAME: "13",

    X_COORDINATE: "26.924004",
    Y_COORDINATE: "56.548100",

    MODIFIED: "2021-01-14T07:52:42.277+02:00",
  },
  {
    ZIP: "41794",
    NAME: "Voka postipunkt",

    A1_NAME: "Ida-Viru maakond",
    A2_NAME: "Toila vald",
    A3_NAME: "Voka alevik",

    A5_NAME: "Narva mnt",

    X_COORDINATE: "27.581833",
    Y_COORDINATE: "59.403539",
    SERVICE_HOURS: "E,T,N,R 09:00-13:00 K 15:00-18:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "AJUTISELT SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-04-29T14:39:49.740+03:00",
  },
  {
    ZIP: "91391",
    NAME: "Vormsi postkontor",

    A1_NAME: "L\u00e4\u00e4ne maakond",
    A2_NAME: "Vormsi vald",
    A3_NAME: "Hullo k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "23.245776",
    Y_COORDINATE: "58.993702",
    SERVICE_HOURS:
      "E,T,K,N,R 11:00-13:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "21.06.2021 kuni 06.07.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "06.07.2021",

    MODIFIED: "2021-06-03T14:01:08.903+03:00",
  },
  {
    ZIP: "96107",
    NAME: "V\u00e4ike-Maarja Grossi pakiautomaat",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "V\u00e4ike-Maarja vald",
    A3_NAME: "V\u00e4ike-Maarja alevik",

    A5_NAME: "Pikk tn",

    X_COORDINATE: "26.252066",
    Y_COORDINATE: "59.130045",

    MODIFIED: "2021-05-04T06:07:02.800+03:00",
  },
  {
    ZIP: "46295",
    NAME: "V\u00e4ike-Maarja postipunkt",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "V\u00e4ike-Maarja vald",
    A3_NAME: "V\u00e4ike-Maarja alevik",

    A5_NAME: "Simuna mnt",

    X_COORDINATE: "26.253397",
    Y_COORDINATE: "59.129286",
    SERVICE_HOURS: "E,T,K,N,R 09:00-12:30, 13:00-17:30 L 09:00-14:00",
    TEMP_SERVICE_HOURS: "AJUTISELT L,P SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "04.06.2021",

    MODIFIED: "2021-03-08T07:55:19.297+02:00",
  },
  {
    ZIP: "65570",
    NAME: "V\u00e4imela postipunkt (Coop)",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru vald",
    A3_NAME: "V\u00e4imela alevik",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "27.010640",
    Y_COORDINATE: "57.891797",
    SERVICE_HOURS: "E,T,K,N,R,L,P 09:00-20:00;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-01T13:06:30.467+03:00",
  },
  {
    ZIP: "96168",
    NAME: "V\u00e4ndra Coop Konsumi pakiautomaat",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "V\u00e4ndra alev",

    A5_NAME: "P\u00e4rnu-Paide mnt",

    A7_NAME: "21",

    X_COORDINATE: "25.038013",
    Y_COORDINATE: "58.654111",

    MODIFIED: "2021-05-24T13:59:06.693+03:00",
  },
  {
    ZIP: "87700",
    NAME: "V\u00e4ndra postkontor",

    A1_NAME: "P\u00e4rnu maakond",
    A2_NAME: "P\u00f5hja-P\u00e4rnumaa vald",
    A3_NAME: "V\u00e4ndra alev",

    A5_NAME: "P\u00e4rnu-Paide mnt",

    X_COORDINATE: "25.032231",
    Y_COORDINATE: "58.653109",
    SERVICE_HOURS:
      "Kuni 13.06.2021: E,T,K,N,R 09:00-16:00;L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",
    TEMP_SERVICE_HOURS: "04.06.2021: SULETUD;Alates 14.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "14.06.2021",

    MODIFIED: "2021-06-01T10:25:48.500+03:00",
  },
  {
    ZIP: "64094",
    NAME: "V\u00e4rska postipunkt",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "Setomaa vald",
    A3_NAME: "V\u00e4rska alevik",

    A5_NAME: "Pikk tn",

    A7_NAME: "12",

    X_COORDINATE: "27.633784",
    Y_COORDINATE: "57.957979",
    SERVICE_HOURS:
      "E,T,K,N,R 08:30-12:00, 12:30-16:30 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-06-01T11:29:05.487+03:00",
  },
  {
    ZIP: "96325",
    NAME: "V\u00e4\u00e4na-J\u00f5esuu kauplus Maksis pakiautomaat",

    A2_NAME: "Harku vald",
    A3_NAME: "V\u00e4\u00e4na-J\u00f5esuu k\u00fcla",

    A5_NAME: "",
    A6_NAME: "11390 Tallinn-Rannam\u00f5isa-Kloogaranna maantee",
    A7_NAME: "",

    X_COORDINATE: "24.367206",
    Y_COORDINATE: "59.433292",

    MODIFIED: "2021-05-03T05:51:23.853+03:00",
  },
  {
    ZIP: "72891",
    NAME: "V\u00e4\u00e4tsa postipunkt",

    A1_NAME: "J\u00e4rva maakond",
    A2_NAME: "T\u00fcri vald",
    A3_NAME: "V\u00e4\u00e4tsa alevik",

    A5_NAME: "Kooli tn",

    A7_NAME: "12",

    X_COORDINATE: "25.448629",
    Y_COORDINATE: "58.887844",
    SERVICE_HOURS: "E,T,K,R 10:00-17:00 N 11:00-18:00 L,P SULETUD",

    MODIFIED: "2021-03-08T08:07:08.943+02:00",
  },
  {
    ZIP: "70610",
    NAME: "V\u00f5hma postiautomaat",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "V\u00f5hma linn",

    A5_NAME: "Tallinna tn",

    A7_NAME: "17",

    X_COORDINATE: "25.557507",
    Y_COORDINATE: "58.630942",

    MODIFIED: "2021-03-23T14:03:11.743+02:00",
  },
  {
    ZIP: "70600",
    NAME: "V\u00f5hma postkontor",

    A2_NAME: "P\u00f5hja-Sakala vald",
    A3_NAME: "V\u00f5hma linn",

    A5_NAME: "Tallinna tn",

    A7_NAME: "26",

    X_COORDINATE: "25.558136",
    Y_COORDINATE: "58.630491",
    SERVICE_HOURS:
      "E 12:30-18:00 T,K,N,R 10:00-13:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-04-05T12:39:11.460+03:00",
  },
  {
    ZIP: "62494",
    NAME: "V\u00f5nnu postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kastre vald",
    A3_NAME: "V\u00f5nnu alevik",

    A5_NAME: "Tartu tn",

    A7_NAME: "24",

    X_COORDINATE: "27.047288",
    Y_COORDINATE: "58.283697",
    SERVICE_HOURS: "E,T,N,R 09:00-12:00 K 13:00-17:00 L,P SULETUD",

    MODIFIED: "2021-05-14T11:47:27.010+03:00",
  },
  {
    ZIP: "96035",
    NAME: "V\u00f5ru Coop Maksimarketi pakiautomaat",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru linn",
    A3_NAME: "",

    A5_NAME: "J\u00fcri tn",

    A7_NAME: "83",

    X_COORDINATE: "27.010698",
    Y_COORDINATE: "57.835449",

    MODIFIED: "2021-04-13T13:55:59.570+03:00",
  },
  {
    ZIP: "96064",
    NAME: "V\u00f5ru Maxima XX pakiautomaat",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru linn",
    A3_NAME: "",

    A5_NAME: "Kooli tn",

    X_COORDINATE: "27.004895",
    Y_COORDINATE: "57.847794",

    MODIFIED: "2020-12-09T07:29:41.553+02:00",
  },
  {
    ZIP: "96314",
    NAME: "V\u00f5ru kesklinna Circle K pakiautomaat",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru linn",
    A3_NAME: "",

    A5_NAME: "J\u00fcri tn",

    A7_NAME: "45",

    X_COORDINATE: "27.006980",
    Y_COORDINATE: "57.842166",

    MODIFIED: "2020-06-30T12:37:49.413+03:00",
  },
  {
    ZIP: "65601",
    NAME: "V\u00f5ru postkontor",

    A1_NAME: "V\u00f5ru maakond",
    A2_NAME: "V\u00f5ru linn",
    A3_NAME: "",

    A5_NAME: "Vilja tn",

    A7_NAME: "14b",

    X_COORDINATE: "27.010010",
    Y_COORDINATE: "57.848336",
    SERVICE_HOURS:
      "E,T,K,N,R 09:00-18:00 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-03-23T12:42:21.823+02:00",
  },
  {
    ZIP: "45453",
    NAME: "V\u00f5su postkontor",

    A1_NAME: "L\u00e4\u00e4ne-Viru maakond",
    A2_NAME: "Haljala vald",
    A3_NAME: "V\u00f5su alevik",

    A5_NAME: "Posti tn",

    X_COORDINATE: "25.960992",
    Y_COORDINATE: "59.575815",
    SERVICE_HOURS:
      "E,T,N,R 10:00-13:00 K 10:00-15:30 L,P SULETUD;Ligip\u00e4\u00e4s ratastooliga",

    MODIFIED: "2021-05-06T14:01:47.513+03:00",
  },
  {
    ZIP: "88845",
    NAME: "Zaras\u0173 IKI Vytauto pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Utenos apskr.",
    A2_NAME: "Zaras\u0173 r. sav.",
    A3_NAME: "Zaras\u0173 m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "54",

    X_COORDINATE: "26.264804",
    Y_COORDINATE: "55.736347",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-23T14:58:19.010+02:00",
  },
  {
    ZIP: "9168",
    NAME: "Zilupes TOP pakom\u0101ts",

    A1_NAME: "Zilupes novads",
    A2_NAME: "Zilupe",
    A3_NAME: "",

    A5_NAME: "Br\u012bv\u012bbas iela",

    A7_NAME: "34",

    X_COORDINATE: "28.121364",
    Y_COORDINATE: "56.388579",

    comment_lav: "Pie ieejas veikal\u0101",

    MODIFIED: "2021-01-21T09:31:08.610+02:00",
  },
  {
    ZIP: "60594",
    NAME: "\u00c4ksi postipunkt",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Tartu vald",
    A3_NAME: "\u00c4ksi alevik",

    A5_NAME: "Saadj\u00e4rve tn",

    A7_NAME: "22",

    X_COORDINATE: "26.676259",
    Y_COORDINATE: "58.526246",
    SERVICE_HOURS: "E,T,K,N,R 15:00-17:00 L,P SULETUD",
    TEMP_SERVICE_HOURS: "21.06.2021 kuni 30.06.2021: SULETUD",
    TEMP_SERVICE_HOURS_UNTIL: "30.06.2021",

    MODIFIED: "2021-06-01T13:22:18.677+03:00",
  },
  {
    ZIP: "67194",
    NAME: "\u00d5ru postipunkt (Epre kauplus)",

    A1_NAME: "Valga maakond",
    A2_NAME: "Valga vald",
    A3_NAME: "\u00d5ruste k\u00fcla",

    A5_NAME: "",

    A7_NAME: "",

    X_COORDINATE: "26.179380",
    Y_COORDINATE: "57.922601",
    SERVICE_HOURS: "E,T,K,N,R 09:00-13:00 L,P SULETUD",

    MODIFIED: "2021-01-30T17:00:13.767+02:00",
  },
  {
    ZIP: "96177",
    NAME: "\u00dclenurme Coop Konsumi pakiautomaat",

    A1_NAME: "Tartu maakond",
    A2_NAME: "Kambja vald",
    A3_NAME: "\u00dclenurme alevik",

    A5_NAME: "V\u00f5ru mnt",

    X_COORDINATE: "26.722099",
    Y_COORDINATE: "58.315109",

    MODIFIED: "2021-05-13T06:04:22.320+03:00",
  },
  {
    ZIP: "9952",
    NAME: "\u0100da\u017eu Gaujas ielas Mini RIMI pakom\u0101ts",

    A1_NAME: "\u0100da\u017eu novads",
    A2_NAME: "",
    A3_NAME: "\u0100da\u017ei",

    A5_NAME: "Gaujas iela",

    X_COORDINATE: "24.322602",
    Y_COORDINATE: "57.076475",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2021-01-14T07:53:14.577+02:00",
  },
  {
    ZIP: "9105",
    NAME: "\u0100da\u017eu T/C Apels\u012bns pakom\u0101ts",

    A1_NAME: "\u0100da\u017eu novads",
    A2_NAME: "",
    A3_NAME: "\u0100da\u017ei",

    A5_NAME: "R\u012bgas gatve",

    X_COORDINATE: "24.320132",
    Y_COORDINATE: "57.071200",

    comment_lav: "Pa labi no T/C ieejas",

    MODIFIED: "2020-11-30T13:10:12.723+02:00",
  },
  {
    ZIP: "9153",
    NAME: "\u0112rg\u013cu Za\u013c\u0101s ielas TOP pakom\u0101ts",

    A1_NAME: "\u0112rg\u013cu novads",
    A2_NAME: "\u0112rg\u013cu pagasts",
    A3_NAME: "\u0112rg\u013ci",

    A5_NAME: "Za\u013c\u0101 iela",

    X_COORDINATE: "25.644425",
    Y_COORDINATE: "56.898307",

    comment_lav: "Blakus ieejai",

    MODIFIED: "2020-11-12T14:20:37.013+02:00",
  },
  {
    ZIP: "9165",
    NAME: "\u0136eguma ELVI pakom\u0101ts",

    A1_NAME: "\u0136eguma novads",
    A2_NAME: "\u0136egums",
    A3_NAME: "",

    A5_NAME: "\u0136eguma prospekts",

    A7_NAME: "5C",

    X_COORDINATE: "24.718090",
    Y_COORDINATE: "56.743747",

    comment_lav: "Pa kreisi no ieejas",

    MODIFIED: "2020-11-13T05:38:42.040+02:00",
  },
  {
    ZIP: "9978",
    NAME: "\u0136ekavas T/C Liiba pakom\u0101ts",

    A1_NAME: "\u0136ekavas novads",
    A2_NAME: "\u0136ekavas pagasts",
    A3_NAME: "\u0136ekava",

    A5_NAME: "R\u012bgas iela",

    A7_NAME: "22",

    X_COORDINATE: "24.232268",
    Y_COORDINATE: "56.831886",

    comment_lav: "Pa labi no T/C Centr\u0101l\u0101s ieejas",

    MODIFIED: "2021-01-14T07:53:53.203+02:00",
  },
  {
    ZIP: "88833",
    NAME: "\u0160ILUT\u0116S PREKYBA Lietuvinink\u0173 37 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "\u0160ilut\u0117s r. sav.",
    A3_NAME: "\u0160ilut\u0117s m.",

    A5_NAME: "Lietuvinink\u0173 g.",

    A7_NAME: "37",

    X_COORDINATE: "21.471326",
    Y_COORDINATE: "55.343228",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2021-01-15T12:01:30.963+02:00",
  },
  {
    ZIP: "88824",
    NAME: "\u0160aki\u0173 NORFA \u0160auli\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Marijampol\u0117s apskr.",
    A2_NAME: "\u0160aki\u0173 r. sav.",
    A3_NAME: "\u0160aki\u0173 m.",

    A5_NAME: "\u0160auli\u0173 g.",

    A7_NAME: "49",

    X_COORDINATE: "23.031196",
    Y_COORDINATE: "54.960777",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-01-15T11:59:43.167+02:00",
  },
  {
    ZIP: "77719",
    NAME: "\u0160al\u010dinink\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160al\u010dinink\u0173 r. sav.",
    A3_NAME: "\u0160al\u010dinink\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "2B",

    X_COORDINATE: "25.383699",
    Y_COORDINATE: "54.317755",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-02T08:00:50.510+03:00",
  },
  {
    ZIP: "77720",
    NAME: "\u0160eduvos NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "Radvili\u0161kio r. sav.",
    A3_NAME: "\u0160eduvos m.",

    A5_NAME: "Panev\u0117\u017eio g.",

    X_COORDINATE: "23.762329",
    Y_COORDINATE: "55.756257",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-23T15:25:05.947+02:00",
  },
  {
    ZIP: "55594",
    NAME: "\u0160iauli\u0173 Gink\u016bn\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 r. sav.",
    A3_NAME: "Gink\u016bn\u0173 k.",

    A5_NAME: "Rasos g.",

    A7_NAME: "1A",

    X_COORDINATE: "23.356550",
    Y_COORDINATE: "55.953647",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T19:35:36.960+02:00",
  },
  {
    ZIP: "55590",
    NAME: "\u0160iauli\u0173 IKI Gardino pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Gardino g.",

    X_COORDINATE: "23.273090",
    Y_COORDINATE: "55.913581",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo, \u0161alia laipt\u0173",
    MODIFIED: "2020-12-29T08:38:03.647+02:00",
  },
  {
    ZIP: "55588",
    NAME: "\u0160iauli\u0173 IKI Gegu\u017ei\u0173 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Gegu\u017ei\u0173 g.",

    A7_NAME: "21",

    X_COORDINATE: "23.266545",
    Y_COORDINATE: "55.902484",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-05-20T06:48:29.250+03:00",
  },
  {
    ZIP: "55589",
    NAME: "\u0160iauli\u0173 IKI Lyros pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Lyros g.",

    A7_NAME: "19A",

    X_COORDINATE: "23.262413",
    Y_COORDINATE: "55.914849",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-05-20T06:49:13.720+03:00",
  },
  {
    ZIP: "55593",
    NAME: "\u0160iauli\u0173 IKI Vilniaus 15E pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "15E",

    X_COORDINATE: "23.348021",
    Y_COORDINATE: "55.923165",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:47:36.407+02:00",
  },
  {
    ZIP: "55592",
    NAME: "\u0160iauli\u0173 KUBAS Vytauto pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Vytauto g.",

    A7_NAME: "122",

    X_COORDINATE: "23.304701",
    Y_COORDINATE: "55.932324",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:55:31.620+02:00",
  },
  {
    ZIP: "88844",
    NAME: "\u0160iauli\u0173 MOKI-VE\u017dI pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Pramon\u0117s g.",

    X_COORDINATE: "23.301418",
    Y_COORDINATE: "55.917301",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie stiklin\u0117s vitrinos,  kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:51:03.767+02:00",
  },
  {
    ZIP: "55591",
    NAME: "\u0160iauli\u0173 NORFA Gumbin\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Gumbin\u0117s g.",

    A7_NAME: "145A",

    X_COORDINATE: "23.282849",
    Y_COORDINATE: "55.941648",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:59:25.450+02:00",
  },
  {
    ZIP: "77721",
    NAME: "\u0160iauli\u0173 NORFA Til\u017e\u0117s 13A pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Til\u017e\u0117s g.",

    A7_NAME: "13A",

    X_COORDINATE: "23.268283",
    Y_COORDINATE: "55.911591",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 parkavimo aik\u0161tel\u0117s pus\u0117s",
    MODIFIED: "2020-12-23T14:10:25.403+02:00",
  },
  {
    ZIP: "88880",
    NAME: "\u0160iauli\u0173 NORFA Valan\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "M. Valan\u010diaus g.",

    A7_NAME: "18",

    X_COORDINATE: "23.305211",
    Y_COORDINATE: "55.938639",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f prekybos centr\u0105 pus\u0117je",
    MODIFIED: "2020-12-27T07:42:10.833+02:00",
  },
  {
    ZIP: "88842",
    NAME: "\u0160iauli\u0173 PC ARENA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Gegu\u017ei\u0173 g.",

    A7_NAME: "30",

    X_COORDINATE: "23.258636",
    Y_COORDINATE: "55.906536",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f JYSK pus\u0117je",
    MODIFIED: "2021-02-18T13:18:54.590+02:00",
  },
  {
    ZIP: "77741",
    NAME: "\u0160iauli\u0173 PC SAUL\u0116S MIESTAS pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Til\u017e\u0117s g.",

    A7_NAME: "109",

    X_COORDINATE: "23.307622",
    Y_COORDINATE: "55.928760",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, i\u0161 Autobus\u0173 stoties perono pus\u0117s",
    MODIFIED: "2020-12-23T14:19:44.347+02:00",
  },
  {
    ZIP: "55511",
    NAME: "\u0160iauli\u0173 VC YOUR SANDBOX pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Til\u017e\u0117s g.",

    A7_NAME: "157",

    X_COORDINATE: "23.315796",
    Y_COORDINATE: "55.932059",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f verslo centr\u0105 pus\u0117je",
    MODIFIED: "2020-12-27T12:45:31.123+02:00",
  },
  {
    ZIP: "55595",
    NAME: "\u0160iauli\u0173 VIADA Basanavi\u010diaus pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "J. Basanavi\u010diaus g.",

    A7_NAME: "122A",

    X_COORDINATE: "23.315962",
    Y_COORDINATE: "55.954719",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je, u\u017e kampo",
    MODIFIED: "2020-12-27T13:01:06.710+02:00",
  },
  {
    ZIP: "88843",
    NAME: "\u0160iauli\u0173 VIADA Til\u017e\u0117s pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "\u0160iauli\u0173 apskr.",
    A2_NAME: "\u0160iauli\u0173 m. sav.",
    A3_NAME: "\u0160iauli\u0173 m.",

    A5_NAME: "Til\u017e\u0117s g.",

    A7_NAME: "274",

    X_COORDINATE: "23.331217",
    Y_COORDINATE: "55.944092",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T08:48:59.107+02:00",
  },
  {
    ZIP: "55567",
    NAME: "\u0160ilal\u0117s MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "\u0160ilal\u0117s r. sav.",
    A3_NAME: "\u0160ilal\u0117s m.",

    A5_NAME: "Dariaus ir Gir\u0117no g.",

    A7_NAME: "12",

    X_COORDINATE: "22.179654",
    Y_COORDINATE: "55.490680",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-27T19:37:42.380+02:00",
  },
  {
    ZIP: "88825",
    NAME: "\u0160ilal\u0117s NORFA pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Taurag\u0117s apskr.",
    A2_NAME: "\u0160ilal\u0117s r. sav.",
    A3_NAME: "\u0160ilal\u0117s m.",

    A5_NAME: "Taurag\u0117s g.",

    X_COORDINATE: "22.194947",
    Y_COORDINATE: "55.487667",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2020-12-27T09:15:08.143+02:00",
  },
  {
    ZIP: "77746",
    NAME: "\u0160ilut\u0117s MAXIMA Mi\u0161ko pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "\u0160ilut\u0117s r. sav.",
    A3_NAME: "\u0160ilut\u0117s m.",

    A5_NAME: "Mi\u0161ko g.",

    X_COORDINATE: "21.479475",
    Y_COORDINATE: "55.350704",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie \u0161onin\u0117s sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> u\u017e kampo",
    MODIFIED: "2021-01-15T12:00:38.683+02:00",
  },
  {
    ZIP: "77722",
    NAME: "\u0160irvint\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160irvint\u0173 r. sav.",
    A3_NAME: "\u0160irvint\u0173 m.",

    A5_NAME: "I. \u0160einiaus g.",

    A7_NAME: "19",

    X_COORDINATE: "24.954113",
    Y_COORDINATE: "55.038301",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:19:50.463+03:00",
  },
  {
    ZIP: "55503",
    NAME: "\u0160irvint\u0173 VIADA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160irvint\u0173 r. sav.",
    A3_NAME: "\u0160irvint\u0173 m.",

    A5_NAME: "Plento g.",

    X_COORDINATE: "24.942564",
    Y_COORDINATE: "55.045696",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f degalin\u0119 pus\u0117je",
    MODIFIED: "2021-05-27T08:01:37.053+03:00",
  },
  {
    ZIP: "77723",
    NAME: "\u0160ven\u010dioni\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160ven\u010dioni\u0173 r. sav.",
    A3_NAME: "\u0160ven\u010dioni\u0173 m.",

    A5_NAME: "Vilniaus g.",

    A7_NAME: "37",

    X_COORDINATE: "26.150636",
    Y_COORDINATE: "55.129934",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, kair\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-04T11:48:42.720+03:00",
  },
  {
    ZIP: "55504",
    NAME: "\u0160ven\u010dion\u0117li\u0173 NORFA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "\u0160ven\u010dioni\u0173 r. sav.",
    A3_NAME: "\u0160ven\u010dion\u0117li\u0173 m.",

    A5_NAME: "\u017demutin\u0117 g.",

    A7_NAME: "26",

    X_COORDINATE: "26.003876",
    Y_COORDINATE: "55.169391",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2020-12-29T08:23:54.910+02:00",
  },
  {
    ZIP: "55568",
    NAME: "\u0160v\u0117k\u0161nos AIB\u0116 Ba\u017eny\u010dios 7 pa\u0161tomatas",

    A0_NAME: "LT",
    A1_NAME: "Klaip\u0117dos apskr.",
    A2_NAME: "\u0160ilut\u0117s r. sav.",
    A3_NAME: "\u0160v\u0117k\u0161nos mstl.",

    A5_NAME: "Ba\u017eny\u010dios g.",

    X_COORDINATE: "21.620041",
    Y_COORDINATE: "55.516879",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je",
    MODIFIED: "2021-06-03T07:36:50.720+03:00",
  },
  {
    ZIP: "55551",
    NAME: "\u017die\u017emari\u0173 MAXIMA pa\u0161tomatas",

    A0_NAME: "LT",

    A2_NAME: "Kai\u0161iadori\u0173 r. sav.",
    A3_NAME: "\u017die\u017emari\u0173 m.",

    A5_NAME: "\u017dasli\u0173 g.",

    X_COORDINATE: "24.451277",
    Y_COORDINATE: "54.811513",

    comment_lit:
      "Pa\u0161tomat\u0105 rasite lauke prie sienos, de\u0161in\u0117je \u012f\u0117jimo \u012f parduotuv\u0119 pus\u0117je, </br> \u0161alia taromato",
    MODIFIED: "2021-01-15T12:08:27.630+02:00",
  },
];

export default products;
