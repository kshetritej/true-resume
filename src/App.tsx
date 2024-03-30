import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import EducationPage from "./components/pages/EducationPage";
import GetInformation from "./components/pages/GetInformation";
function App() {
  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content my-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/new" element={<GetInformation/>} />
              <Route path="/" element={<Header/>} />
              <Route path="/education" element={<EducationPage/>}/>
            </Routes>
          </BrowserRouter>
        </div>

        <div className="footer absolute bottom-0 mx-auto w-[100%] p-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
