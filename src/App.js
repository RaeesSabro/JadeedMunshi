import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HeaderHome from './components/HeaderHome';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from'./components/Features';
import BusinessTypes from'./components/BusinessTypes';
import Pricing from'./components/Pricing';
import Clients from'./components/Clients';
import HelpCenter from'./components/HelpCenter';
import FreeDemo from'./components/FreeDemo';
import 'bootstrap/dist/css/bootstrap.min.css';
// Features
import Sales from'./components/Features/Sales';
import Purchases from'./components/Features/Purchases';
import Accounting from'./components/Features/Accounting';
import Inventory from'./components/Features/Inventory';
import Manufacturing from'./components/Features/Manufacturing';
import POS from'./components/Features/POS';
import Reporting from'./components/Features/Reporting';
// Business Types
import Book from'./components/BusinessTypes/Book';
import GarmentsFashion from'./components/BusinessTypes/GarmentsFashion';
import RestaurantsBakers from'./components/BusinessTypes/RestaurantsBakers';
import Shoe from'./components/BusinessTypes/Shoe';
import Retail from'./components/BusinessTypes/Retail';
import DistributionWholesale from'./components/BusinessTypes/DistributionWholesale';
import ElectronicsAppliances from'./components/BusinessTypes/ElectronicsAppliances';
import ComputerAccessories from'./components/BusinessTypes/ComputerAccessories';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
            <Route path="/Sales" element={<Sales />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Manufacturing" element={<Manufacturing />} />
            <Route path="/POS" element={<POS />} />
            <Route path="/Reporting" element={<Reporting />} />
          <Route path="/BusinessTypes" element={<BusinessTypes />} />
            <Route path="/Retail" element={<Retail/>} />
            <Route path="/Book" element={<Book/>} />
            <Route path="/Shoe" element={<Shoe/>} />
            <Route path="/DistributionWholesale" element={<DistributionWholesale/>} />
            <Route path="/RestaurantsBakers" element={<RestaurantsBakers/>} />
            <Route path="/GarmentsFashion" element={<GarmentsFashion/>} />
            <Route path="/ElectronicsAppliances" element={<ElectronicsAppliances/>} />
            <Route path="/ComputerAccessories" element={<ComputerAccessories/>} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/FreeDemo" element={<FreeDemo />} />
          <Route path="/Navigation" element={<Navigation />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
