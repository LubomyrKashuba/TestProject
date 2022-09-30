import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/product-form/ProductForm";
import { ModalContext } from "../context/ModalContext";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ProductI } from "../types/product";

const styles = {
  wrapper: {
    "div:nth-of-type(1n)": {
      background: "#b3b3b3",
    },
    "div:nth-of-type(2n)": {
      background: "#dddcdc",
    },
  },
  property: {
    height: "50px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  button: {
    mt: 3,
  },
};

const Product: React.FC = () => {
  const { products } = useTypedSelector((state) => state.productReducer);
  const [ product, setProduct ] = useState<ProductI>();
  const { openModal } = useContext(ModalContext);
  const { id: productId } = useParams();

  const editProduct = () => {
    openModal(<ProductForm product={product} />);
  };

  useEffect(() => {
    const item = products.find((el) => el._id === productId?.slice(1));

    setProduct(item);
  }, [productId, products]);

  return (
    <>
      <Typography variant="h3" sx={styles.property} mb={7}>
        {product?.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            component="img"
            src={product?.imgUrl}
            alt="product"
            sx={styles.img}
          />
        </Grid>
        <Grid item xs={8} sx={styles.wrapper}>
          <Typography variant="h4" sx={styles.property} mb={3}>
            Properties
          </Typography>
          <Box sx={styles.property}>Height: {product?.size.height}</Box>
          <Box sx={styles.property}>Width: {product?.size.width}</Box>
          <Box sx={styles.property}>Weight: {product?.weight}</Box>
          <Box sx={styles.property}>Count: {product?.count}</Box>
          <Button
            variant="contained"
            color="secondary"
            sx={styles.button}
            onClick={editProduct}
          >
            edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
