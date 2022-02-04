import "./item.css";
import { Box } from "@chakra-ui/react";

export default function Item({ Item }) {
  return (
    <Box bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">
      <div className="products-container">
        <img src={Item.image} alt="Product Image" />
        <div className="cards-container">
          <p className="price">$ {Item.price}</p>
          <p className="title">{Item.title}</p>
          <p className="description">{Item.description}</p>
        </div>
      </div>
    </Box>
  );
}
