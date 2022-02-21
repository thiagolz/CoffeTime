import img1 from "../Assets/IcedBrown.jpg";
import img2 from "../Assets/IcedChocolate.jpg";
import img3 from "../Assets/PistachioFrappuccino.jpg";
import img4 from "../Assets/PistachioLatte.jpg";
import img5 from "../Assets/Protein-ForwardSandwiches.jpg";
import img6 from "../Assets/EggBitesWithCage-FreeEggs.jpg";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
const Items = [
  {
    id: 1,
    title: "Iced Brown Sugar Oatmilk Shaken Espresso",
    description:
      "Blonde Espresso gets hand-shaken with brown sugar–flavored syrup and cinnamon, and then finished with oatmilk.",
    price: 50,
    image: img1,
    category: "drinks",
  },
  {
    id: 2,
    title: "Iced Chocolate Almondmilk Shaken Espresso",
    description:
      "Blonde Espresso, cocoa and notes of malt are shaken together by hand, and then topped with almondmilk.",
    price: 50,
    image: img2,
    category: "drinks",
  },
  {
    id: 3,
    title: "Pistachio Frappuccino blended beverage.",
    description:
      "Roast coffee and milk are blended with pistachio sauce. Finished with whipped cream and a brown-buttery topping.",
    price: 50,
    image: img3,
    category: "drinks",
  },
  {
    id: 4,
    title: "Pistachio Latte",
    description:
      "Our rich signature espresso joins steamed milk, pistachio sauce and a brown-buttery topping.",
    price: 50,
    image: img4,
    category: "drinks",
  },
  {
    id: 5,
    title: "Protein-Forward Sandwiches",
    description:
      "Power up with the Bacon, Gouda & Egg Sandwich or Double-Smoked Bacon, Cheddar & Egg Sandwich.",
    price: 40,
    image: img5,
    category: "food",
  },
  {
    id: 6,
    title: "Egg Bites With Cage-Free Eggs",
    description:
      "For vegetarian goodness anytime, choose our Kale & Mushroom Egg Bites or Egg White & Roasted Red Pepper Egg Bites.",
    price: 30,
    image: img6,
    category: "food",
  },
];

const getData = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(Items);
    //RETURN PRODUCTS
  }, 500);
});

function getItems() {
  return getData;
}

export { getItems };
