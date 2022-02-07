import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getItems } from "../../data/data";
import ItemDetail from "./ItemDetail";
import ItemDetailContainerCss from "./ItemDetailContainer.css";
export default function ItemDetailContainer({ item }) {
  const [Getproduct, setGetProduct] = useState([]);
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItems().then((item) => {
      console.log(item);
      const data = item.find((item) => item.id === 1);
      setGetProduct(data);
    });
  }, []);

  return (
    <div className="item-detail-container ">
      <Box>
        <ItemDetail item={Getproduct} />
      </Box>
    </div>
  );
}
