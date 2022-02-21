import { useEffect, useState } from "react";
import { getItems } from "../data/data";
import ItemList from "./Products/ItemList";
//Get products
//Save in useState
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
function ItemListContainer({ name }) {
  const [ItemsList, setItemList] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getItems()
      .then((items) => {
        if (!categoryName) {
          setItemList(items);
        } else {
          const categoryItems = items.filter((product) => {
            return product.category === categoryName;
          });
          setItemList(categoryItems);
          // console.log(items);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  useEffect(() => {
    const itemsCollection = collection(db, "Items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1 className="Title">{name}</h1>,
      {ItemsList.length > 0 ? <ItemList items={ItemsList} /> : <p>Loading..</p>}
    </div>
  );
}

export default ItemListContainer;
