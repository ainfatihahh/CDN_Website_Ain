//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import {Freelancer} from './pages/Freelancer';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path='/' exact element={<Home/>}/>
           <Route path='/Home' exact element={<Home/>}/>
           <Route path='/About' exact element={<About/>}/>
           <Route path='/Freelancer' exact element={<Freelancer/>}/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
