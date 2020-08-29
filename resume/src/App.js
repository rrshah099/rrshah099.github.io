import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects'
import Resume from './Components/Resume';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Projects />
        <Footer />
      </div>
    );
  }
}
export default App;
