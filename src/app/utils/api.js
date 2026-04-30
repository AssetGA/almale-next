export const products = [
  {
    id: "ut-1",
    name: "Медный набор посуды Alma Le 1.0",
    description:
      "Это описание товара. Оно содержит основную информацию о продукте, таких как характеристики, преимущества и функции. Данный товар — отличный выбор для всех, кто ищет качество и надежность.",
    price: 395000,
    imageUrl: "/img/utensils-set.png",
  },
  {
    id: 1,
    name: "Кастрюля 3,5 л.",
    description:
      "Изготовленна из безопасных материалов. Идеальна для всех типов плит.",
    diameter: "(24 см)",
    imageUrl: "/img/utensils/pan-24.png",
  },
  {
    id: 2,
    name: "Сковородка 3,6 л.",
    description:
      "Изготовленна из безопасных материалов. Идеальна для всех типов плит.",
    diameter: "(32 см)",
    imageUrl: "/img/utensils/frying-pan-32.png",
  },
  {
    id: 3,
    name: "Кастрюля 6 л.",
    description:
      "Изготовленна из безопасных материалов. Идеальна для всех типов плит.",
    diameter: "(48 см)",
    imageUrl: "/img/utensils/pan-48.png",
  },
  {
    id: 4,
    name: "Сотейник 1,8 л.",
    description:
      "Изготовленна из безопасных материалов. Идеальна для всех типов плит.",
    diameter: "(24 см)",
    imageUrl: "/img/utensils/stewpan-24.png",
  },
];

export const buyers = [
  {
    id: 1,
    name: "Аида",
    phone: "87756999475",
  },
  {
    id: 2,
    name: "Фарида",
    phone: "87756989567",
  },
  {
    id: 3,
    name: "Бандит",
    phone: "87756879475",
  },
  {
    id: 4,
    name: "Глобус",
    phone: "87626999475",
  },
];

export const opinions = [
  {
    id: 1,
    name: "Braun Depiero",
    buyer: buyers[0],
    profession: "chef",
    imageUrl: "/img/shef3.jpg",
    message: "I am delighted with the quality of Alma Le cookware!",
  },
  {
    id: 2,
    name: "Федерико",
    buyer: buyers[1],
    profession: "шеф-повар",
    imageUrl: "/img/shef1.jpeg",
    message: "Я в восторге от качества посуды Alma Le",
  },
  {
    id: 3,
    name: "Ernesto Kabale",
    buyer: buyers[2],
    profession: "шеф-повар",
    imageUrl: "/img/shef2.png",
    message: "Эта посуда нечто к хорошему привыкаешь быстро",
  },
];

export const haracter = [
  {
    id: 1,
    name: "Индукционная плита",
    imageUrl: "/img/haracter/1.svg",
  },
  {
    id: 2,
    name: "Газовая плита",
    imageUrl: "/img/haracter/2.svg",
  },
  {
    id: 3,
    name: "Электрическая плита",
    imageUrl: "/img/haracter/3.svg",
  },
  {
    id: 4,
    name: "Керамическая плита",
    imageUrl: "/img/haracter/4.svg",
  },
  {
    id: 5,
    name: "Галогенная плита",
    imageUrl: "/img/haracter/5.svg",
  },
  {
    id: 6,
    name: "Посудомоечная машина",
    imageUrl: "/img/haracter/6.svg",
  },
];

export const deliveries = [
  {
    id: 1,
    price: 0,
  },
  {
    id: 2,
    price: 80000,
  },
];

export const videos = [
  {
    id: "video1",
    title: "Exploring the Mountains",
    url: "https://www.youtube.com/watch?v=AAHCllXUXrI&t=5s",
    img: "/img/set/3.png",
  },
  {
    id: "video2",
    title: "Ocean Adventures",
    url: "https://www.youtube.com/watch?v=nFNJUepGYHY",
    img: "/img/set/1.png",
  },
  {
    id: "video3",
    title: "City Life Vibes",
    url: "https://www.youtube.com/watch?v=5W05UwE_LQ0&t=6s",
    img: "/img/set/2.png",
  },
];

export const images = [
  { src: "/img/gallery/1.JPEG", altName: "Лудший подарок маме" },
  { src: "/img/gallery/2.JPEG", altName: "Подарок жене" },
  { src: "/img/set/1.png", altName: "Подарочный набор" },
  { src: "/img/gallery/3.JPEG", altName: "Подарок любимому человеку" },
  { src: "/img/gallery/4.JPEG", altName: "Подарок на свадьбу" },
  { src: "/img/gallery/6.JPEG", altName: "Подарок на той" },
  { src: "/img/gallery/7.JPEG", altName: "Медная посуда" },
  { src: "/img/gallery/8.JPEG", altName: "Набор медной посуды" },
  { src: "/img/gallery/9.JPEG", altName: "Лудщий подарок" },
  { src: "/img/gallery/10.JPEG", altName: "Здоровье семьи" },
  { src: "/img/gallery/11.JPEG", altName: "Медная сковорода" },
  { src: "/img/4-блок_Миссия.jpg", altName: "Медная сковорода" },
];
