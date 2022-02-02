const Items = [
  {
    id: 1,
    title: "Iced Brown Sugar Oatmilk Shaken Espresso",
    price: 50,
    description:
      "Blonde Espresso gets hand-shaken with brown sugar–flavored syrup and cinnamon, and then finished with oatmilk.",
    image: "./Assets/IcedBrown.jpg",
  },
  {
    id: 2,
    title: "Iced Chocolate Almondmilk Shaken Espresso",
    price: "50",
    description:
      "Blonde Espresso, cocoa and notes of malt are shaken together by hand, and then topped with almondmilk.",
    image: "./Assets/IcedChocolate.jpg",
  },
  {
    id: 3,
    title: "Pistachio Frappuccino blended beverage.",

    price: 50,
    description:
      "Roast coffee and milk are blended with pistachio sauce. Finished with whipped cream and a brown-buttery topping.",
    image: "./Assets/PistachioFrappuccino.jpg",
  },
  {
    id: 4,
    title: "Pistachio Latte",
    price: 50,
    description:
      "Our rich signature espresso joins steamed milk, pistachio sauce and a brown-buttery topping.",
    image: "./Assets/PistachioLatte.jpg",
  },
];

const getData = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(Items);
    //RETURN PRODUCTS
  }, 2000);
});

function getItems() {
  return getData;
}

export { getItems };
