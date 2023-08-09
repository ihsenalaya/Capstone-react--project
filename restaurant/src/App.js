import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import { Route , Routes } from 'react-router-dom';
import Reservation from './components/Reservation.js';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/reservation' element={<Reservation/>}></Route>
    </Routes>
    

    <Footer/>
        

    </>
  );
}

export default App;
