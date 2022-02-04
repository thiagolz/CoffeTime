import ItemDetailCss from "./ItemDetail.css";
import { Box } from "@chakra-ui/react";
export default function ItemDetail({ item }) {
  return (
    <Box bgGradient="w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)'">
      <div className="products-container">
        <img src={item.image} alt="Product Image" />
        <div className="cards-container">
          <p className="price">$ {item.price}</p>
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </Box>
  );
}
