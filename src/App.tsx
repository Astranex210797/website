// App.tsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import FullPageLoader from './components/FullPageLoader';

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

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoaded(true), 1200); // Add slight delay for smoothness
    };

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
      <ScrollToTop />
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
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
              <Route path="/machine-room-lift" element={<PageWrapper><MachineRoomLiftPage /></PageWrapper>} />
              <Route path="/mrl-elevator" element={<PageWrapper><MRLElevatorPage /></PageWrapper>} />
              <Route path="/hydraulic-passenger-lift" element={<PageWrapper><HydraulicPassengerLiftPage /></PageWrapper>} />
              <Route path="/car-lift" element={<PageWrapper><CarLiftPage /></PageWrapper>} />
              <Route path="/hydraulic-goods-lift" element={<PageWrapper><HydraulicGoodsLiftPage /></PageWrapper>} />
              <Route path="/amc-services" element={<PageWrapper><AMCPage /></PageWrapper>} />
              <Route path="/lift-modernization" element={<PageWrapper><ModernizationPage /></PageWrapper>} />
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

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App;