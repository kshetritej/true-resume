import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import Navbar from "../molecules/Navbar";
import PersonalInfoPage from "./PersonalInfoPage";
import { useState } from "react";
const LandingPage = () => {
const [header, setHeader ] = useState(true);
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="header my-auto">
      {header ? <Header/> : <PersonalInfoPage/>}
      </div>

      <div className="footer absolute bottom-0 mx-auto w-[100%] p-4">
        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
