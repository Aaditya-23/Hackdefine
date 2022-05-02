import { Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/auth/" element={<Authentication />} />
      <Route path="*" element={<p>No match found</p>} />
    </Routes>
  );
}

export default App;
