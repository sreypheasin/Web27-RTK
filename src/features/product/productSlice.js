import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// GET ALL PRODUCT
export const fetchAllProduct = createAsyncThunk(
  "product/fetchAllProduct",
  async () => {
    const products = await fetch("https://dummyjson.com/products").then(
      (response) => response.json()
    );
    // console.log("products", products);
    return products;
  }
);
// GET SINGLE PRODUCT
export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const products = await fetch(`https://dummyjson.com/products/${id}`).then(
      (response) => response.json()
    );
    // console.log("products", products);
    return products;
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    product: {},
    status: "idle" // pending, fullfil, rejected
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.status = "Success";
        console.log("action in slice", action);
        state.allProducts = action.payload.products;
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.status = "Failed";
      })
      //   single product
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "Success";
        console.log("action in slice", action);
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "Failed";
      });
  }
});

export default productSlice.reducer;

export const selectAllProducts = (state) => state.productR.allProducts;
export const selectSingleProduct = (state) => state.productR.product;
export const selectStatus = (state) => state.productR.status;
