import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [],
};

export const getCart = createAsyncThunk("cart/getCart", async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}user/getCart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log("Internal Server Error");
    return { cart: [] };
  }
});

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (formData, { getState }) => {
    try {
      const { token } = getState().user;

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}user/updateCart`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("Internal Server Error");
      const { cart } = error.response.data;
      return { cart };
    }
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      const { cart } = action.payload;
      state.cart = cart;
      return state;
    },
    [updateCart.fulfilled]: (state, action) => {
      const { cart } = action.payload;
      state.cart = cart;
      return state;
    },
  },
});

export default CartSlice.reducer;
