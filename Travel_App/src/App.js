import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tourdetails from "./components/Tourdetails";
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:place" element={<Tourdetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
