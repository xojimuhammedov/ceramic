import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Products from "./components/Products";
import ProductAbout from "./components/ProductAbout";

function App() {
  return (
    <>
      <Box className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Form />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<ProductAbout />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
}

export default App;
