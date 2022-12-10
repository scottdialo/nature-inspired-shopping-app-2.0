import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation';
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
   <Navigation />
   
    <Footer />
  </BrowserRouter>
  </React.StrictMode>
);

