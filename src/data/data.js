import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
const getData = new Promise(function (resolve, reject) {
  const itemsCollection = collection(db, "Items");
  getDocs(itemsCollection)
    .then((snapshot) => {
      //  GET PRODUCTS
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      resolve(products);
      console.log(products);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
});

function getItems() {
  return getData;
}

export { getItems };
