import React from 'react';
import './App.css'
import Header from '../components/Header.jsx';
import Content from '../components/Content.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Pease wish me luck cuz I am a nice guy..." />
      <Content color="green" text="TBH I think I've got it! its not that hard" />
      <Footer />
    </>
  );
}

export default App;



