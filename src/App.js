import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Study from './pages/Study'
import Service from './pages/Service';
import Language from './pages/Language';
import SumUp from './pages/SumUp';
import './style/style.css'

function App() {
  return (
    <BrowserRouter className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/1' element={<Study />} />
        <Route path='/2' element={<Service/>} />
        <Route path='/3' element={<Language />} />
        <Route path='/4' element={<SumUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
