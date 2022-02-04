import img1 from "../Assets/IcedBrown.jpg";
import img2 from "../Assets/IcedChocolate.jpg";
import img3 from "../Assets/PistachioFrappuccino.jpg";
import img4 from "../Assets/PistachioLatte.jpg";

const Items = [
  {
    id: 1,
    title: "Iced Brown Sugar Oatmilk Shaken Espresso",
    description:
      "Blonde Espresso gets hand-shaken with brown sugar–flavored syrup and cinnamon, and then finished with oatmilk.",
    price: 50,
    image: img1,
  },
  {
    id: 2,
    title: "Iced Chocolate Almondmilk Shaken Espresso",
    description:
      "Blonde Espresso, cocoa and notes of malt are shaken together by hand, and then topped with almondmilk.",
    price: "50",
    image: img2,
  },
  {
    id: 3,
    title: "Pistachio Frappuccino blended beverage.",
    description:
      "Roast coffee and milk are blended with pistachio sauce. Finished with whipped cream and a brown-buttery topping.",
    price: 50,
    image: img3,
  },
  {
    id: 4,
    title: "Pistachio Latte",
    description:
      "Our rich signature espresso joins steamed milk, pistachio sauce and a brown-buttery topping.",
    price: 50,
    image: img4,
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
