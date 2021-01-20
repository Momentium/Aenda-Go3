import React, { useEffect } from 'react';
import Header from './components/Header';
import Description from './components/Description';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    console.log('App mounted');
  }, []);

  return (
    <div className="App">
      <Header/>
      <Description/>
      <Section/>
      <Footer/>
    </div>
  );
}
export default App;
