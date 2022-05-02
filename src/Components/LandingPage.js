import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newcollection" element={<p>new collection content</p>} />

        <Route path="/shop" element={<p>shop content</p>} />
      </Routes>
    </>
  );
}
