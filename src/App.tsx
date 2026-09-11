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
import Login from './pages/Login';


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
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </AppProvider>

  );
};

export default App;












{/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/}