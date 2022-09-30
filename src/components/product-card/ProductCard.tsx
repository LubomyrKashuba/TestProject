import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/product/actions";

interface ProductCardI {
  img: string;
  name: string;
  id: string;
}

const ProductCard: React.FC<ProductCardI> = ({ img, name, id }) => {
  const dispatch = useDispatch();

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(deleteProduct(id))
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={img} alt="product image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" variant="contained" onClick={removeProduct}>
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
