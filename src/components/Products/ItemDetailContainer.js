import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getItems } from "../../data/data";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ item }) {
  const [Getproduct, setGetProduct] = useState([]);
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems().then((item) => {
      setGetProduct(item);
      console.log(item);
      item.find((item) => item.id === 1);
    });
  }, []);
  return (
    <div>
      <ItemDetail item={Getproduct} />
    </div>
  );
}
