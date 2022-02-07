import "./ItemDetail.css";
import { Box } from "@chakra-ui/react";
export default function ItemDetail({ item }) {
  return (
    <Box bgGradient="linear(red.100 20%, orange.50 5%, yellow.100 50%)">
      <div className="Item-Detail-container">
        <img src={item.image} alt="Product Image" />
        <div className="card-container">
          <p className="price">$ {item.price}</p>
          <p className="title">{item.title}</p>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </Box>
  );
}
