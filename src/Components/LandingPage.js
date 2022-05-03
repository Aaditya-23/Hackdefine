import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import NewCollection from "./NewCollections";
import Shop from "./Shop";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/newcollection" element={<NewCollection/>} />
      </Routes>
    </>
  );
}
