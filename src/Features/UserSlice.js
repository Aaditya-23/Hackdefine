import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
};

export const createUser = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}createUser`,
      formData
    );

    return { isCreated: true, response: response.data };
  } catch (error) {
    const response = error.response.data;
    return { isCreated: false, response };
  }
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialiseUser: (state, actions) => {
      state.user = JSON.stringify(actions.payload.user);
      state.token = actions.payload.token;
    },
  },
  extraReducers: {},
});

export const { initialiseUser } = UserSlice.actions;

export default UserSlice.reducer;
