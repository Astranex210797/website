import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import MachineRoomLiftPage from './pages/products/MachineRoomLiftPage';
import HydraulicPassengerLiftPage from './pages/products/HydraulicPassengerLiftPage';
import CarLiftPage from './pages/products/CarLiftPage';
import HydraulicGoodsLiftPage from './pages/products/HydraulicGoodsLiftPage';
import MRLElevatorPage from './pages/products/MRLElevatorPage';
import AMCPage from './pages/services/AMCPage';
import ModernizationPage from './pages/services/ModernizationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/machine-room-lift" element={<MachineRoomLiftPage />} />
            <Route path="/mrl-elevator" element={<MRLElevatorPage />} />
            <Route path="/hydraulic-passenger-lift" element={<HydraulicPassengerLiftPage />} />
            <Route path="/car-lift" element={<CarLiftPage />} />
            <Route path="/hydraulic-goods-lift" element={<HydraulicGoodsLiftPage />} />
            <Route path="/amc-services" element={<AMCPage />} />
            <Route path="/lift-modernization" element={<ModernizationPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;