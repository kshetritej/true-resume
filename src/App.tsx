import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/Footer";
import Header from "./components/molecules/Header";
import CreateForm from "./components/pages/CreateForm";
import { ThemeProvider } from "./components/theme-provider";
import EducationForm from "./components/pages/EducationForm";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="h-[100vh] flex flex-col">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content container mx-auto my-auto">
            <BrowserRouter>
              <Routes>
                <Route path="/new" element={<CreateForm />} />
                <Route path="/" element={<Header />} />
                <Route path="/education" element={<EducationForm/>} />
              </Routes>
            </BrowserRouter>
          </div>

          <div className="footer absolute bottom-0 mx-auto w-[100%] p-4">
            <Footer />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
