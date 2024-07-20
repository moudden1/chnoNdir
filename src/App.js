import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ExpertList from './components/ExpertList';
import Footer from './components/Footer';
import ScrollingBar from './components/ScrollBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <ScrollingBar />
        <div className="main-content">
        <Routes>
          <Route path="/" element={<ExpertList />} />
          {/* Add other routes here */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
