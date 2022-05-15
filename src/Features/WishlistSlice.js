import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishlist: [],
};

export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (token) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}user/getWishlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log("Internal Server Error");
      return { wishlist: [] };
    }
  }
);

export const updateWishlist = createAsyncThunk(
  "wishlist/UpdateWishlist",
  async (productId, { getState }) => {
    try {
      const { token } = getState().user;

      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}user/updateWishlist`,
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return { wishlist: data.wishlist };
    } catch (error) {
      console.log("Internal Server Error");
      return { wishlist: [] };
    }
  }
);

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    destroyWishlist: (state, action) => {
      return { ...state, wishlist: [] };
    },
  },
  extraReducers: {
    [getWishlist.fulfilled]: (state, action) => {
      return { ...state, wishlist: action.payload.wishlist };
    },
    [updateWishlist.fulfilled]: (state, actions) => {
      const { wishlist } = actions.payload;

      if (wishlist) state.wishlist = wishlist;
      return state;
    },
  },
});

export const { destroyWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
