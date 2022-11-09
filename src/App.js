import React from 'react';
import { Home, Contact } from './pages';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
