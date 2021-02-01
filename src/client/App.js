import React from 'react';
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Container/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
