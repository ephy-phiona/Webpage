import './App.css';
import Footer from '../src/Footer/Footer';
import Navbar from '../src/Navbar/Navbar';
import About from '../src/About/About';
import Howitworks from '../src/Work/Howitworks';
import Team from '../src/Team/Team';




function App() {
  return (
    <div>
      <Navbar/>
      <About/>
       <Howitworks/>
       <Team/>
      <Footer/>  
    </div>
  );
}

export default App;
