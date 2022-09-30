import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import ProductCard from "../components/product-card/ProductCard";
import ProductForm from "../components/product-form/ProductForm";
import { ModalContext } from "../context/ModalContext";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getProducts } from "../redux/product/actions";

const ProductList: React.FC = () => {
  const [sort, setSort] = React.useState('name');
  const { products, loading } = useTypedSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const goToProduct = (_id: string) => {
    return navigate(`/product/:${_id}`);
  };

  const addProduct = () => {
    openModal(<ProductForm />);
  };

  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  useEffect(() => {
    dispatch(getProducts(sort));
  }, [dispatch, sort]);

  if (loading) return <Loader />;

  return (
    <>
      <Button
        onClick={addProduct}
        variant="contained"
        color="secondary"
        sx={{ my: 3 }}
      >
        Add Product
      </Button>
      <Box sx={{ width: "260px" }}>
      <FormControl fullWidth>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sort}
          label="Sort by"
          onChange={handleSort}
        >
          <MenuItem value={'name'}>Name</MenuItem>
          <MenuItem value={'count'}>Count</MenuItem>
          <MenuItem value={'weight'}>Weight</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <Grid container spacing={2} sx={{ padding: 5 }}>
        {products.map((product) => (
          <Grid
            item
            xs={4}
            key={product._id}
            onClick={() => goToProduct(product._id)}
          >
            <ProductCard img={product.imgUrl} name={product.name} id={product._id}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
