import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/pages';
import { Bottle } from './features/bottle/pages';
import { BuyBottle } from './features/products/pages';
import { TabletsPage } from './features/tablets';
import ScrollToTop from './shared/components/ScrollToTop';

const AppRouter: React.FC = () => {
  return (
    <Router>
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
                <Route path="/Tablete" element={<TabletsPage />} />
                <Route path="/Bottle" element={<Bottle />} />
                <Route path="/products" element={<BuyBottle />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
