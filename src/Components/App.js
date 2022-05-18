import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop/Shop";
import UserProfile from "./UserProfile/UserProfile";
import { useDispatch } from "react-redux";
import { destroyUser, getUser, initialiseUser } from "../Features/UserSlice";
import {
  fetchProducts,
  fetchNewReleases,
  fetchCategories,
} from "../Features/ProductsSlice";
import NewReleases from "./NewReleases/NewReleases";
import Categories from "./Categories/Categories";
import UserWishlist from "./UserWishlist/UserWishlist";
import { destroyWishlist, getWishlist } from "../Features/WishlistSlice";
import ProductPage from "./ProductPage/ProductPage";
import UserCart from "./UserCart/UserCart";
import { getCart } from "../Features/CartSlice";
import CategoryPage from "./CategoryPage/CategoryPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = window.localStorage;
    const token = storage.getItem("token");

    const reportUser = async (token) => {
      const { response } = await getUser(token);

      if (response?.user) {
        dispatch(
          initialiseUser({
            token: token,
            user: response.user,
          })
        );
      } else {
        destroyUser();
        destroyWishlist();
      }
    };

    dispatch(fetchProducts());
    dispatch(fetchNewReleases());
    dispatch(fetchCategories());
    dispatch(getWishlist(token));
    dispatch(getCart(token));
    reportUser(token);
  }, [dispatch]);

  return (
    <Box sx={{ bgcolor: "#4B5A67" }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />

        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
            </>
          }
        />

        <Route
          path="/shop/newReleases"
          element={
            <>
              <Navbar />
              <NewReleases />
            </>
          }
        />

        <Route
          path="/shop/categories"
          element={
            <>
              <Navbar />
              <Categories />
            </>
          }
        />

        <Route
          path="/shop/categories:id"
          element={
            <>
              <Navbar />
              <CategoryPage />
            </>
          }
        />

        <Route
          path="/shop/wishlist"
          element={
            <>
              <Navbar />
              <UserWishlist />
            </>
          }
        />

        <Route
          path="/shop:id"
          element={
            <>
              <Navbar />
              <ProductPage />
            </>
          }
        />

        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route
          path="/user/profile"
          element={
            <>
              <Navbar />
              <UserProfile />
            </>
          }
        />

        <Route
          path="/user/cart"
          element={
            <>
              <Navbar />
              <UserCart />
            </>
          }
        />

        <Route path="*" element={<p>No match found</p>} />
      </Routes>
    </Box>
  );
}

export default App;
