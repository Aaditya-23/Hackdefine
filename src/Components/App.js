import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        process.env.REACT_APP_API_URL + "product-list"
      );
      console.log(data);
    };
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="*" element={<p>No match found</p>} />
    </Routes>
  );
}

export default App;
