import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}


export default App;
