import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, editProduct } from "../../redux/product/actions";
import { ProductI } from "../../types/product";

const styles = {
  form: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  element: {
    mb: 2,
    textAlign: "center",
  },
};

export interface InputsI {
  name?: string;
  imgUrl?: string;
  count?: number;
  height?: number;
  width?: number;
  weight?: string;
}

interface ProductFormProps {
  product?: ProductI;
}

const ProductForm: React.FC<ProductFormProps> = ({ product }) => {
  const [inputs, setInputs] = useState<InputsI>({
    name: product?.name,
    imgUrl: product?.imgUrl,
    count: product?.count,
    height: product?.size.height,
    width: product?.size.width,
    weight: product?.weight,
  });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (product) {
      dispatch(editProduct(product?._id, inputs || {}));
    } else {
      dispatch(addProduct(inputs || {}));
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
        <Typography sx={styles.element} variant="h4">
          Fill the form to add product
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={inputs?.name}
          onChange={handleChange}
          required
          sx={styles.element}
        />
        <TextField
          label="Image url"
          name="imgUrl"
          value={inputs?.imgUrl}
          onChange={handleChange}
          required
          sx={styles.element}
        />
        <TextField
          label="Count"
          name="count"
          value={inputs?.count}
          onChange={handleChange}
          required
          sx={styles.element}
        />
        <div>
          <TextField
            label="Height"
            name="height"
            value={inputs?.height}
            onChange={handleChange}
            required
            sx={{ ...styles.element, mr: 2 }}
          />
          <TextField
            label="Width"
            name="width"
            value={inputs?.width}
            onChange={handleChange}
            required
            sx={styles.element}
          />
        </div>
        <TextField
          label="Weight"
          name="weight"
          value={inputs?.weight}
          onChange={handleChange}
          required
          sx={styles.element}
        />
        <Button type="submit" variant="contained" color="secondary">
          submit
        </Button>
      </Box>
    </Container>
  );
};

export default ProductForm;
