const products = [
  {
    id: 1,
    name: "PS5",
    isOutofStock: false,
    price: 4500.123,
    variant: ["Spider-Man edition", "Last of Us Edition", "Gold Edition"],
    categoryId: 1,
    sizes: [3],
  },

  {
    id: 2,
    name: "XBOX 360",
    isOutofStock: false,
    price: 4200.44,
    variant: ["Black Edition", "Thor Edition"],
    categoryId: 1,
    sizes: [4],
  },
  {
    id: 3,
    name: "Nintendo 64",
    isOutofStock: true,
    price: 200.112,
    variant: ["No Mercy Edition", "Coral white edtion"],
    categoryId: 1,
    sizes: [],
  },

  {
    id: 4,
    name: "iPhone 12",
    isOutofStock: false,
    price: 4500.123,
    variant: ["Black", "Purple", "Gold Edition"],
    categoryId: 2,
    sizes: [3],
  },

  {
    id: 5,
    name: "DELL Alienware HQ12343",
    isOutofStock: false,
    price: 45666.44,
    variant: ["Pro Game Edition", "Avengers Edition"],
    categoryId: 3,
    sizes: [4],
  },
];

export { products };
