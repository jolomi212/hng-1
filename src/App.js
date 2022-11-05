import logo from './logo.svg';
// import './App.css';
import Profile from './components/profile';
import Links from './components/links';
import Contact from './pages/contact';
import Footer from './components/footer';
import Home from './pages/home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <section className="content">
          <Routes>
            <Route  index element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
          </Routes>
        </section>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;