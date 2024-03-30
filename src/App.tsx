import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalInfoPage from "./components/pages/PersonalInfoPage";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/new" element={<PersonalInfoPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
