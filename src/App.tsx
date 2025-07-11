import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-white text-gray-900">

        {/* ✅ Fix: Only pure CSS inside <style>. @import should be moved to index.html or CSS file */}
        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 0;
            }

            @keyframes backgroundShift {
              0% { background-position: 50% 50%; }
              50% { background-position: 60% 60%; }
              100% { background-position: 50% 50%; }
            }
          `}
        </style>

        {/* ✅ Load Google Fonts in public/index.html */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet"> */}

        <Header />

        <main className="relative z-10 pt-16 pb-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><HomePage /></motion.div>} />
              <Route path="/products" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><ProductsPage /></motion.div>} />
              <Route path="/services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><ServicesPage /></motion.div>} />
              <Route path="/contact" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><ContactPage /></motion.div>} />
              <Route path="/machine-room-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><MachineRoomLiftPage /></motion.div>} />
              <Route path="/mrl-elevator" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><MRLElevatorPage /></motion.div>} />
              <Route path="/hydraulic-passenger-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><HydraulicPassengerLiftPage /></motion.div>} />
              <Route path="/car-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><CarLiftPage /></motion.div>} />
              <Route path="/hydraulic-goods-lift" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><HydraulicGoodsLiftPage /></motion.div>} />
              <Route path="/amc-services" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><AMCPage /></motion.div>} />
              <Route path="/lift-modernization" element={<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: 'easeOut' }}><ModernizationPage /></motion.div>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-50"
        >
          <FloatingActions />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
