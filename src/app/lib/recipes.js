const t = (ru, en, kz, de, ar) => ({ ru, en, kz, de, ar });

export const recipeUi = {
  ru: {
    title: "Рецепты для набора Alma Le",
    lead: "Шесть домашних блюд для кастрюль, сковороды и сотейника. Кухни Европы, Азии и Центральной Азии.",
    open: "Открыть рецепт",
    back: "Все рецепты",
    ingredients: "Ингредиенты",
    steps: "Как готовить",
    serves: "4 порции",
    catalog: "Готовить в наборе Alma Le",
    channel: "Видео готовки на YouTube",
  },
  en: {
    title: "Recipes for the Alma Le set",
    lead: "Six home dishes for the pots, frying pan and saucepan. Cuisines of Europe, Asia and Central Asia.",
    open: "Open recipe",
    back: "All recipes",
    ingredients: "Ingredients",
    steps: "Method",
    serves: "4 servings",
    catalog: "Cook with the Alma Le set",
    channel: "Cooking videos on YouTube",
  },
  kz: {
    title: "Alma Le жиынтығына арналған рецепттер",
    lead: "Кастрюль, таба және сотейникке арналған алты үй тағамы. Еуропа, Азия және Орталық Азия асханасы.",
    open: "Рецептті ашу",
    back: "Барлық рецепт",
    ingredients: "Құрамы",
    steps: "Дайындау",
    serves: "4 порция",
    catalog: "Alma Le жиынтығында дайындау",
    channel: "YouTube-тағы дайындау видеосы",
  },
  de: {
    title: "Rezepte für das Alma Le Set",
    lead: "Sechs Hausgerichte für Töpfe, Pfanne und Stielkasserolle. Küchen aus Europa, Asien und Zentralasien.",
    open: "Rezept öffnen",
    back: "Alle Rezepte",
    ingredients: "Zutaten",
    steps: "Zubereitung",
    serves: "4 Portionen",
    catalog: "Im Alma Le Set kochen",
    channel: "Kochvideos auf YouTube",
  },
  ar: {
    title: "وصفات لطقم Alma Le",
    lead: "ست أطباق منزلية للقدور والمقلاة ووعاء الصلصة. مطابخ أوروبا وآسيا وآسيا الوسطى.",
    open: "افتح الوصفة",
    back: "كل الوصفات",
    ingredients: "المكونات",
    steps: "الطريقة",
    serves: "4 حصص",
    catalog: "اطبخ بطقم Alma Le",
    channel: "فيديو الطبخ على يوتيوب",
  },
};

export const regions = [
  {
    id: "europe",
    tone: "bg-yellow text-black",
    name: t("Европа", "Europe", "Еуропа", "Europa", "أوروبا"),
  },
  {
    id: "asia",
    tone: "bg-orange text-black",
    name: t("Азия", "Asia", "Азия", "Asien", "آسيا"),
  },
  {
    id: "central",
    tone: "bg-green-light text-white",
    name: t(
      "Центральная Азия",
      "Central Asia",
      "Орталық Азия",
      "Zentralasien",
      "آسيا الوسطى"
    ),
  },
];

export const recipes = [
  {
    slug: "tomato-sauce",
    region: "europe",
    image: "/img/carousel/sousepan-2.webp",
    minutes: 25,
    vessel: t(
      "Сотейник 1,8 л",
      "1.8 L saucepan",
      "1,8 л сотейник",
      "Stielkasserolle 1,8 l",
      "وعاء صلصة 1.8 لتر"
    ),
    title: t(
      "Томатный соус",
      "Tomato sauce",
      "Қызанақ тұздығы",
      "Tomatensoße",
      "صلصة الطماطم"
    ),
    lead: t(
      "Густой соус для пасты и мяса. В сотейнике он прогревается ровно и не пригорает по краю.",
      "A thick sauce for pasta and meat. The saucepan heats it evenly.",
      "Паста мен етке қою тұздық. Сотейникте біркелкі қызады.",
      "Eine dicke Soße für Pasta und Fleisch. Die Stielkasserolle erwärmt sie gleichmäßig.",
      "صلصة كثيفة للمعكرونة واللحم. وعاء الصلصة يسخّنها بالتساوي."
    ),
    ingredients: t(
      [
        "400 г спелых помидоров или томатов в собственном соку",
        "1 луковица",
        "2 зубчика чеснока",
        "2 ст. л. масла",
        "соль, сахар, лист базилика",
      ],
      [
        "400 g ripe tomatoes or canned tomatoes",
        "1 onion",
        "2 garlic cloves",
        "2 tbsp oil",
        "salt, a pinch of sugar, basil",
      ],
      [
        "400 г піскен қызанақ",
        "1 пияз",
        "2 түйір сарымсақ",
        "2 ас қасық май",
        "тұз, қант, райхан",
      ],
      [
        "400 g reife Tomaten",
        "1 Zwiebel",
        "2 Knoblauchzehen",
        "2 EL Öl",
        "Salz, eine Prise Zucker, Basilikum",
      ],
      [
        "400 غ طماطم ناضجة",
        "بصلة",
        "فصّان من الثوم",
        "ملعقتان من الزيت",
        "ملح وقليل من السكر وريحان",
      ]
    ),
    steps: t(
      [
        "Лук мелко нарежьте и прогрейте в масле на среднем огне, пока он не станет мягким.",
        "Добавьте чеснок и помидоры. Потомите 15 минут под крышкой.",
        "Разомните ложкой, посолите и положите щепотку сахара.",
        "Снимите с огня и вмешайте базилик.",
      ],
      [
        "Chop the onion and soften it in oil over medium heat.",
        "Add garlic and tomatoes. Simmer 15 minutes with the lid on.",
        "Crush with a spoon, then add salt and a pinch of sugar.",
        "Take off the heat and stir in basil.",
      ],
      [
        "Пиязды майда турап, орташа отта майға жұмсарғанша қуырыңыз.",
        "Сарымсақ пен қызанақты қосып, қақпақпен 15 минут бұқтырыңыз.",
        "Қасықпен езіп, тұз бен қант себіңіз.",
        "Оттан алып, райханды араластырыңыз.",
      ],
      [
        "Die Zwiebel fein schneiden und in Öl bei mittlerer Hitze weich dünsten.",
        "Knoblauch und Tomaten zugeben. 15 Minuten mit Deckel köcheln.",
        "Mit dem Löffel zerdrücken, salzen und eine Prise Zucker zugeben.",
        "Vom Herd nehmen und Basilikum unterrühren.",
      ],
      [
        "افرمي البصل وحمّريه في الزيت على نار متوسطة حتى يلين.",
        "أضيفي الثوم والطماطم واتركيها 15 دقيقة تحت الغطاء.",
        "اهرسيها بالملعقة ثم أضيفي الملح وقليلًا من السكر.",
        "ارفعيها عن النار وأضيفي الريحان.",
      ]
    ),
  },
  {
    slug: "beef-stew",
    region: "europe",
    image: "/img/carousel/pan6-2.webp",
    minutes: 90,
    vessel: t(
      "Кастрюля 3,5 л",
      "3.5 L pot",
      "3,5 л кастрюль",
      "Topf 3,5 l",
      "قدر 3.5 لتر"
    ),
    title: t(
      "Тушёная говядина с овощами",
      "Beef stew with vegetables",
      "Көкөніспен бұқтырылған сиыр еті",
      "Geschmortes Rind mit Gemüse",
      "لحم بقر مطهو مع الخضار"
    ),
    lead: t(
      "Мясо сначала схватывается на дне, потом тихо томится. Кастрюля 3,5 л как раз на четыре тарелки.",
      "The meat browns on the base, then simmers gently. The 3.5 L pot is enough for four plates.",
      "Ет алдымен түбіне жабысып қуырылады, содан кейін баяу бұқтырылады.",
      "Das Fleisch bräunt am Boden und schmort dann ruhig. Der 3,5-l-Topf reicht für vier Teller.",
      "اللحم يتحمّر في القاع ثم يُطهى بهدوء. قدر 3.5 لتر يكفي أربعة أطباق."
    ),
    ingredients: t(
      [
        "600 г говядины куском",
        "2 моркови",
        "1 луковица",
        "2 картофелины",
        "лавр, соль, перец, вода",
      ],
      [
        "600 g beef in pieces",
        "2 carrots",
        "1 onion",
        "2 potatoes",
        "bay leaf, salt, pepper, water",
      ],
      [
        "600 г сиыр еті",
        "2 сәбіз",
        "1 пияз",
        "2 картоп",
        "лавр, тұз, бұрыш, су",
      ],
      [
        "600 g Rindfleisch in Stücken",
        "2 Möhren",
        "1 Zwiebel",
        "2 Kartoffeln",
        "Lorbeer, Salz, Pfeffer, Wasser",
      ],
      [
        "600 غ لحم بقر قطعًا",
        "جزرتان",
        "بصلة",
        "حبتا بطاطس",
        "ورق غار وملح وفلفل وماء",
      ]
    ),
    steps: t(
      [
        "Мясо обсушите и обжарьте порциями на сильном огне до корочки.",
        "Добавьте лук и морковь, готовьте ещё 5 минут.",
        "Залейте водой почти до края мяса, положите лавр. Томите под крышкой 70 минут.",
        "За 20 минут до конца положите картофель. Посолите в конце.",
      ],
      [
        "Pat the beef dry and brown it in batches over high heat.",
        "Add onion and carrot and cook 5 minutes more.",
        "Add water to almost cover the meat, plus the bay leaf. Simmer 70 minutes with the lid on.",
        "Add potato 20 minutes before the end. Salt at the finish.",
      ],
      [
        "Етті құрғатып, қатты отта бөлек-бөлек қызарғанша қуырыңыз.",
        "Пияз бен сәбізді қосып, тағы 5 минут ұстаңыз.",
        "Етті жауып кететіндей су құйып, лавр салыңыз. Қақпақпен 70 минут бұқтырыңыз.",
        "Соңына 20 минут қалғанда картоп салыңыз. Тұзды соңында себіңіз.",
      ],
      [
        "Das Fleisch trocken tupfen und portionsweise bei starker Hitze anbraten.",
        "Zwiebel und Möhre zugeben und weitere 5 Minuten braten.",
        "Mit Wasser fast bedecken, Lorbeer dazu. 70 Minuten mit Deckel schmoren.",
        "20 Minuten vor Schluss die Kartoffeln zugeben. Zum Schluss salzen.",
      ],
      [
        "جففي اللحم وحمّريه على دفعات على نار قوية.",
        "أضيفي البصل والجزر واتركيه 5 دقائق.",
        "أضيفي ماءً يكاد يغطي اللحم وورق الغار. اطهيه 70 دقيقة تحت الغطاء.",
        "قبل النهاية بـ20 دقيقة أضيفي البطاطس. الملح في الآخر.",
      ]
    ),
  },
  {
    slug: "ginger-chicken",
    region: "asia",
    image: "/img/carousel/fryingpan-2.webp",
    minutes: 30,
    vessel: t(
      "Сковорода 3,6 л",
      "3.6 L frying pan",
      "3,6 л таба",
      "Pfanne 3,6 l",
      "مقلاة 3.6 لتر"
    ),
    title: t(
      "Курица с имбирём",
      "Ginger chicken",
      "Зімбірлі тауық",
      "Hähnchen mit Ingwer",
      "دجاج بالزنجبيل"
    ),
    lead: t(
      "Быстрое блюдо на сковороде: курица остаётся сочной, соус собирается на широком дне.",
      "A quick pan dish. The chicken stays juicy and the sauce collects on the wide base.",
      "Табадағы жылдам тағам: тауық шырынды қалады.",
      "Ein schnelles Pfannengericht. Das Hähnchen bleibt saftig.",
      "طبق سريع في المقلاة. الدجاج يبقى طريًا."
    ),
    ingredients: t(
      [
        "500 г куриного филе",
        "3 см свежего имбиря",
        "1 морковь",
        "2 ст. л. соевого соуса",
        "1 ч. л. мёда, масло",
      ],
      [
        "500 g chicken fillet",
        "3 cm fresh ginger",
        "1 carrot",
        "2 tbsp soy sauce",
        "1 tsp honey, oil",
      ],
      [
        "500 г тауық филесі",
        "3 см жаңа зімбір",
        "1 сәбіз",
        "2 ас қасық соя тұздығы",
        "1 шай қасық бал, май",
      ],
      [
        "500 g Hähnchenfilet",
        "3 cm frischer Ingwer",
        "1 Möhre",
        "2 EL Sojasoße",
        "1 TL Honig, Öl",
      ],
      [
        "500 غ فيليه دجاج",
        "3 سم زنجبيل طازج",
        "جزرة",
        "ملعقتان صلصة صويا",
        "ملعقة صغيرة عسل وزيت",
      ]
    ),
    steps: t(
      [
        "Филе нарежьте полосками. Имбирь и морковь — тонкой соломкой.",
        "Курицу обжарьте на сильном огне 4 минуты, не мешая каждую секунду.",
        "Добавьте овощи и готовьте ещё 3 минуты.",
        "Влейте соевый соус с мёдом и прогрейте минуту, пока соус не станет блестящим.",
      ],
      [
        "Cut the fillet into strips. Slice ginger and carrot thinly.",
        "Fry the chicken over high heat for 4 minutes.",
        "Add the vegetables and cook 3 minutes more.",
        "Pour in soy sauce and honey and heat for a minute until the sauce shines.",
      ],
      [
        "Филені таспалап тураңыз. Зімбір мен сәбізді жіңішке кесіңіз.",
        "Тауықты қатты отта 4 минут қуырыңыз.",
        "Көкөністі қосып, тағы 3 минут ұстаңыз.",
        "Соя тұздығы мен балды құйып, тұздық жылтыр болғанша бір минут қыздырыңыз.",
      ],
      [
        "Das Filet in Streifen schneiden. Ingwer und Möhre fein hobeln.",
        "Das Hähnchen 4 Minuten bei starker Hitze braten.",
        "Gemüse zugeben und weitere 3 Minuten braten.",
        "Sojasoße und Honig angießen und eine Minute erhitzen, bis die Soße glänzt.",
      ],
      [
        "قطّعي الفيليه شرائح. ابرشي الزنجبيل والجزر رفيعًا.",
        "حمّري الدجاج 4 دقائق على نار قوية.",
        "أضيفي الخضار واتركيها 3 دقائق.",
        "صبّي الصويا والعسل وسخّني دقيقة حتى تلمع الصلصة.",
      ]
    ),
  },
  {
    slug: "noodle-soup",
    region: "asia",
    image: "/img/carousel/pan6-1.webp",
    minutes: 40,
    vessel: t(
      "Кастрюля 6 л",
      "6 L pot",
      "6 л кастрюль",
      "Topf 6 l",
      "قدر 6 لتر"
    ),
    title: t(
      "Суп с лапшой",
      "Noodle soup",
      "Кеспе сорпа",
      "Nudelsuppe",
      "شوربة النودلز"
    ),
    lead: t(
      "Прозрачный бульон в большой кастрюле. Лапшу кладут в самом конце, чтобы она не разварилась.",
      "A clear broth in the large pot. The noodles go in at the end so they stay firm.",
      "Үлкен кастрюльдегі мөлдір сорпа. Кеспені ең соңында салады.",
      "Eine klare Brühe im großen Topf. Die Nudeln kommen erst am Schluss hinein.",
      "مرق صافٍ في القدر الكبير. النودلز في النهاية حتى لا تتهرّى."
    ),
    ingredients: t(
      [
        "300 г курицы на кости",
        "1 морковь",
        "зелёный лук",
        "150 г яичной лапши",
        "соль, перец",
      ],
      [
        "300 g chicken on the bone",
        "1 carrot",
        "spring onion",
        "150 g egg noodles",
        "salt, pepper",
      ],
      [
        "300 г сүйекті тауық",
        "1 сәбіз",
        "жасыл пияз",
        "150 г жұмыртқа кеспесі",
        "тұз, бұрыш",
      ],
      [
        "300 g Hähnchen mit Knochen",
        "1 Möhre",
        "Frühlingszwiebel",
        "150 g Eiernudeln",
        "Salz, Pfeffer",
      ],
      [
        "300 غ دجاج بالعظم",
        "جزرة",
        "بصل أخضر",
        "150 غ نودلز بالبيض",
        "ملح وفلفل",
      ]
    ),
    steps: t(
      [
        "Курицу залейте холодной водой и доведите до кипения. Пену снимите.",
        "Добавьте морковь и варите 25 минут на тихом огне.",
        "Мясо достаньте, разберите. Бульон посолите.",
        "Лапшу варите 3–4 минуты в бульоне и разложите по тарелкам с мясом и луком.",
      ],
      [
        "Cover the chicken with cold water and bring it to a boil. Skim the foam.",
        "Add the carrot and cook 25 minutes at a gentle simmer.",
        "Lift out the meat and shred it. Salt the broth.",
        "Cook the noodles in the broth for 3–4 minutes and serve with meat and onion.",
      ],
      [
        "Тауыққа суық су құйып, қайнатыңыз. Көбігін алыңыз.",
        "Сәбізді салып, баяу отта 25 минут пісіріңіз.",
        "Етті алып, бөлшектеңіз. Сорпаны тұздаңыз.",
        "Кеспені сорпада 3–4 минут пісіріп, ет пен пиязбен таратыңыз.",
      ],
      [
        "Das Hähnchen mit kaltem Wasser aufgießen und aufkochen. Den Schaum abschöpfen.",
        "Die Möhre zugeben und 25 Minuten sanft köcheln.",
        "Das Fleisch herausnehmen und zerpflücken. Die Brühe salzen.",
        "Die Nudeln 3–4 Minuten in der Brühe garen und mit Fleisch und Zwiebel servieren.",
      ],
      [
        "غطي الدجاج بماء بارد واتركيه يغلي. أزيلي الرغوة.",
        "أضيفي الجزر واطهيه 25 دقيقة على نار هادئة.",
        "أخرجي اللحم وفتّتيه. ملّحي المرق.",
        "اطهي النودلز في المرق 3–4 دقائق وقدّميها مع اللحم والبصل.",
      ]
    ),
  },
  {
    slug: "beef-plov",
    region: "central",
    image: "/img/carousel/set-3.webp",
    minutes: 80,
    vessel: t(
      "Кастрюля 6 л",
      "6 L pot",
      "6 л кастрюль",
      "Topf 6 l",
      "قدر 6 لتر"
    ),
    title: t(
      "Плов с говядиной",
      "Beef pilaf",
      "Сиыр етімен палау",
      "Pilaw mit Rind",
      "بيلاف بلحم البقر"
    ),
    lead: t(
      "Рис и зирвак готовятся в одной большой кастрюле. Крышка держит пар, рис доходит без лишней воды.",
      "Rice and the meat base cook in one large pot. The lid keeps the steam in.",
      "Күріш пен ет бір үлкен кастрюльде піседі. Қақпақ буды ұстайды.",
      "Reis und die Fleischbasis garen in einem großen Topf. Der Deckel hält den Dampf.",
      "الأرز واللحم في قدر واحد كبير. الغطاء يحفظ البخار."
    ),
    ingredients: t(
      [
        "500 г говядины",
        "2 луковицы",
        "2 моркови",
        "400 г риса",
        "масло, соль, зира, чеснок",
      ],
      [
        "500 g beef",
        "2 onions",
        "2 carrots",
        "400 g rice",
        "oil, salt, cumin, garlic",
      ],
      [
        "500 г сиыр еті",
        "2 пияз",
        "2 сәбіз",
        "400 г күріш",
        "май, тұз, зире, сарымсақ",
      ],
      [
        "500 g Rindfleisch",
        "2 Zwiebeln",
        "2 Möhren",
        "400 g Reis",
        "Öl, Salz, Kreuzkümmel, Knoblauch",
      ],
      [
        "500 غ لحم بقر",
        "بصَلتان",
        "جزرتان",
        "400 غ أرز",
        "زيت وملح وكمون وثوم",
      ]
    ),
    steps: t(
      [
        "Мясо нарежьте кубиками и обжарьте в масле до цвета.",
        "Добавьте лук, затем морковь соломкой. Готовьте 10 минут.",
        "Влейте горячую воду так, чтобы она покрыла мясо. Посолите, положите зиру и варите 30 минут.",
        "Рис промойте и ровным слоем выложите сверху. Вода должна чуть покрывать рис. Под крышкой 20 минут, не мешая.",
      ],
      [
        "Cut the beef into cubes and brown it in oil.",
        "Add the onion, then the carrot in strips. Cook 10 minutes.",
        "Pour in hot water to cover the meat. Salt, add cumin and cook 30 minutes.",
        "Rinse the rice and spread it on top. The water should just cover the rice. 20 minutes under the lid, without stirring.",
      ],
      [
        "Етті текшелеп, майда түсі шыққанша қуырыңыз.",
        "Пиязды, содан кейін сәбізді таспалап салыңыз. 10 минут ұстаңыз.",
        "Етті жабатын ыстық су құйыңыз. Тұз бен зире салып, 30 минут пісіріңіз.",
        "Күрішті жуып, үстіне тегіс жайыңыз. Су күрішті әрең жабуы керек. Қақпақпен 20 минут, араластырмай.",
      ],
      [
        "Das Fleisch würfeln und in Öl braun braten.",
        "Zwiebel, dann Möhre in Streifen zugeben. 10 Minuten braten.",
        "Heißes Wasser angießen, bis das Fleisch bedeckt ist. Salzen, Kreuzkümmel dazu und 30 Minuten kochen.",
        "Den Reis waschen und darauf verteilen. Das Wasser soll den Reis gerade bedecken. 20 Minuten mit Deckel, ohne Rühren.",
      ],
      [
        "قطّعي اللحم مكعبات وحمّريه في الزيت.",
        "أضيفي البصل ثم الجزر شرائح. اطهي 10 دقائق.",
        "صبّي ماءً ساخنًا يغطي اللحم. ملّحي وأضيفي الكمون واطهي 30 دقيقة.",
        "اغسلي الأرز وافرديه فوق اللحم. الماء يلامس سطح الأرز فقط. 20 دقيقة تحت الغطاء من غير تحريك.",
      ]
    ),
  },
  {
    slug: "lamb-soup",
    region: "central",
    image: "/img/carousel/pan6-4.webp",
    minutes: 70,
    vessel: t(
      "Кастрюля 3,5 л",
      "3.5 L pot",
      "3,5 л кастрюль",
      "Topf 3,5 l",
      "قدر 3.5 لتر"
    ),
    title: t(
      "Шурпа с овощами",
      "Vegetable meat soup",
      "Көкөністі сорпа",
      "Fleischsuppe mit Gemüse",
      "شوربة لحم وخضار"
    ),
    lead: t(
      "Сытная домашняя шурпа. Крупные овощи кладут так, чтобы они держали форму.",
      "A hearty home soup. The vegetables stay in large pieces so they keep their shape.",
      "Тойлы үй сорпасы. Көкөніс ірі тілініп, пішінін сақтайды.",
      "Eine kräftige Haussuppe. Das Gemüse bleibt in groben Stücken.",
      "شوربة بيتية دسمة. الخضار تبقى قطعًا كبيرة فتحفظ شكلها."
    ),
    ingredients: t(
      [
        "500 г говядины или баранины",
        "2 картофелины",
        "1 морковь",
        "1 сладкий перец",
        "лук, соль, зелень",
      ],
      [
        "500 g beef or lamb",
        "2 potatoes",
        "1 carrot",
        "1 sweet pepper",
        "onion, salt, herbs",
      ],
      [
        "500 г сиыр еті немесе қой еті",
        "2 картоп",
        "1 сәбіз",
        "1 тәтті бұрыш",
        "пияз, тұз, көк",
      ],
      [
        "500 g Rind oder Lamm",
        "2 Kartoffeln",
        "1 Möhre",
        "1 Paprika",
        "Zwiebel, Salz, Kräuter",
      ],
      [
        "500 غ لحم بقر أو ضأن",
        "حبتا بطاطس",
        "جزرة",
        "فلفل حلو",
        "بصل وملح وأعشاب",
      ]
    ),
    steps: t(
      [
        "Мясо крупно нарежьте, залейте водой и варите 40 минут, снимая пену.",
        "Картофель и морковь нарежьте крупно и положите в кастрюлю.",
        "Через 15 минут добавьте перец и лук.",
        "Посолите и дайте постоять 5 минут под крышкой. Посыпьте зеленью в тарелке.",
      ],
      [
        "Cut the meat large, cover with water and cook 40 minutes, skimming the foam.",
        "Cut potato and carrot large and add them.",
        "After 15 minutes add pepper and onion.",
        "Salt and rest 5 minutes with the lid on. Add herbs in the bowl.",
      ],
      [
        "Етті ірі турап, суға салып, 40 минут пісіріңіз. Көбігін алыңыз.",
        "Картоп пен сәбізді ірі кесіп, кастрюльге салыңыз.",
        "15 минуттан соң бұрыш пен пиязды қосыңыз.",
        "Тұздап, қақпақпен 5 минут ұстаңыз. Тәрелкеде көк себіңіз.",
      ],
      [
        "Das Fleisch grob schneiden, mit Wasser bedecken und 40 Minuten kochen. Schaum abschöpfen.",
        "Kartoffeln und Möhre grob schneiden und zugeben.",
        "Nach 15 Minuten Paprika und Zwiebel zugeben.",
        "Salzen und 5 Minuten mit Deckel ziehen lassen. Kräuter erst im Teller.",
      ],
      [
        "قطّعي اللحم قطعًا كبيرة، غطّيه بالماء واطهيه 40 دقيقة. أزيلي الرغوة.",
        "قطّعي البطاطس والجزر كبيرًا وأضيفيهما.",
        "بعد 15 دقيقة أضيفي الفلفل والبصل.",
        "ملّحي واتركيها 5 دقائق تحت الغطاء. الأعشاب في الصحن.",
      ]
    ),
  },
];

export function getRecipe(slug) {
  return recipes.find((item) => item.slug === slug) || null;
}

export function pick(field, lang) {
  return field[lang] || field.ru;
}
