// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
import FullPageLoader from './components/FullPageLoader';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loaded) return <FullPageLoader />;

  return (
    <Router>
      <div
        className="min-h-screen relative overflow-hidden text-brand-text"
        style={{
          background: 'linear-gradient(135deg, #145943 0%, #0D3B2E 40%, #1ABC9C 80%, #F2FCF9 100%)',
        }}
      >
        <Header />

        <main className="relative z-10 pt-16 pb-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><HomePage /></motion.div>} />
              <Route path="/products" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><ProductsPage /></motion.div>} />
              <Route path="/services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><ServicesPage /></motion.div>} />
              <Route path="/contact" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><ContactPage /></motion.div>} />
              <Route path="/machine-room-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><MachineRoomLiftPage /></motion.div>} />
              <Route path="/mrl-elevator" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><MRLElevatorPage /></motion.div>} />
              <Route path="/hydraulic-passenger-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><HydraulicPassengerLiftPage /></motion.div>} />
              <Route path="/car-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><CarLiftPage /></motion.div>} />
              <Route path="/hydraulic-goods-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><HydraulicGoodsLiftPage /></motion.div>} />
              <Route path="/amc-services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><AMCPage /></motion.div>} />
              <Route path="/lift-modernization" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}><ModernizationPage /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="fixed bottom-8 right-8 z-50">
          <FloatingActions />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;