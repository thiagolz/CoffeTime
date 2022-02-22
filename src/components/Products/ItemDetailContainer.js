import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../data/data";
import ItemDetail from "./ItemDetail";
import ItemDetailContainerCss from "./ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
export default function ItemDetailContainer({ item }) {
  const [Getproduct, setGetProduct] = useState([]);
  const { itemId } = useParams();
  //   const [loading, setLoading] = useState(true);
  useEffect(() => {
    // getItems().then((item) => {
    //   console.log(item);
    //   const data = item.find((item) => item.id === Number(itemId));
    //   setGetProduct(data);
    // });
    const itemRef = doc(db, "Items", itemId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setGetProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container ">
      <Box>
        <ItemDetail item={Getproduct} />
      </Box>
    </div>
  );
}
