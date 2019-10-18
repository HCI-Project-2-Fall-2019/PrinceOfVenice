import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentSample from './components/ContentSample';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ContentSample />
    </div>
  );
}

export default App;
