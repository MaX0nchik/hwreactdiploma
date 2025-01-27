import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog.html" element={<Catalog />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/contacts.html" element={<Contacts />} />
          <Route path="/products/:id.html" element={<Product />} />
          <Route path="/cart.html" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
