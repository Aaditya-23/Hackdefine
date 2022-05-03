import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import SignIn from "./SignIn";

function App() {
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
