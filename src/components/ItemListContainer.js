import { useEffect, useState } from "react";
import { getItems } from "../data/data";
import ItemList from "./Products/ItemList";
//Get products
//Save in useState

function ItemListContainer({ name }) {
  const [ItemsList, setItemList] = useState([]);
  useEffect(() => {
    getItems()
      .then((items) => {
        console.log(items);
        setItemList(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <p>Welcome!,{name}</p>,
      {ItemsList.length > 0 ? <ItemList items={ItemsList} /> : <p>Loading..</p>}
    </div>
  );
}

export default ItemListContainer;
