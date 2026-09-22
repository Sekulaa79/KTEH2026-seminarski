import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Explore from './pages/Explore';
import DestinationDetails from './pages/DestinationDetails';
import MyTrip from './pages/MyTrip';
import Auth from './pages/Auth';


const App: React.FC = () => {
  return (
    <AppProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/putuj" element={<Explore />} />
        <Route path="/putuj/:id" element={<DestinationDetails />} /> 
        <Route path="/moj-put" element={<MyTrip />} />
        <Route path="/login" element={<Auth isRegister={false} />} />
        <Route path="/registracija" element={<Auth isRegister={true} />} />
      </Routes>
    </Router>
    </AppProvider>

  );
};

export default App;












