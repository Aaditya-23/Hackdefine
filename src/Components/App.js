import { Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="*" element={<p>No match found</p>} />
      </Routes>
    </>
  );
}

export default App;
