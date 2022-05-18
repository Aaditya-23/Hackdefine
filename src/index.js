import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Assets/css/index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Features/UserSlice";
import ProductsReducer from "./Features/ProductsSlice";
import WishlistReducer from "./Features/WishlistSlice";
import CartReducer from "./Features/CartSlice";
import { Theme } from "./Components/Theme";
import { ThemeProvider } from "@mui/material/styles";

const store = configureStore({
  reducer: {
    user: UserReducer,
    products: ProductsReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
