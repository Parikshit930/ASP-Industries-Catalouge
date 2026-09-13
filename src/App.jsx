import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        {/* Fallback wildcard to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
