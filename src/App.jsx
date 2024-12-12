import Navigation from "./components/Navigation-Bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddToCart from "./Pages/AddToCart";

import Products from "./Pages/Products";
import ContactUs from "./Pages/ContactUs";

const App = ({ product }) => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/addtocart" element={<AddToCart />} />

          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
