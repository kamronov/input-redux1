import { Route, Routes } from 'react-router-dom';
import './App.css';
import City from './pages/City/City';
import Fio from './pages/Fio/Fio';
import Phone from './pages/Phone/Phone';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Fio/>}/>
      <Route path='/phone' element={<Phone/>}/>
      <Route path='/city' element={<City/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
    </div>
  );
}

export default App;
