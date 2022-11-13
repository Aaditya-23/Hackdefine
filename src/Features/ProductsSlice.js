import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Products: [],
  newReleases: [],
  Categories: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/getProducts`
      );

      return response.data;
    } catch (error) {
      console.log("Internal Server Error");
      return initialState;
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories/getCategories`
      );

      return response.data;
    } catch (error) {
      console.log("Internal Server Error");
      return initialState;
    }
  }
);

export const fetchNewReleases = createAsyncThunk(
  "products/fetchNewReleases",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/getNewReleases`
      );

      return response.data;
    } catch (error) {
      console.log(`Internal Server Error`);
      return initialState;
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      const { Products } = action.payload;
      return { ...state, Products };
    },
    [fetchNewReleases.fulfilled]: (state, action) => {
      const { newReleases } = action.payload;
      return { ...state, newReleases };
    },
    [fetchCategories.fulfilled]: (state, action) => {
      const { Categories } = action.payload;
      return { ...state, Categories };
    },
  },
});

export default ProductSlice.reducer;
