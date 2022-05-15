import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
};


export const createUser = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}user/createUser`,
      formData
    );

    return { isCreated: true, response: response.data };
  } catch (error) {
    const response = error.response.data;
    return { isCreated: false, response };
  }
};

export const createSession = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}user/createSession`,
      formData
    );

    return { isCreated: true, response: response.data };
  } catch (error) {
    const response = error.response.data;
    return { isCreated: false, response };
  }
};

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}user/getUser`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { response: data };
  } catch (error) {
    console.log("Internal Server Error");
    return { response: null, terminateSession: true };
  }
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialiseUser: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
    },
    destroyUser: (state, actions) => {
      const storage = window.localStorage;
      storage.removeItem("token");
      storage.removeItem("user");
      return { token: null, user: null };
    },
  },
});

export const { initialiseUser, destroyUser } = UserSlice.actions;

export default UserSlice.reducer;
