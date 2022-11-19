import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home'
import Calculator from './pages/Calculator';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Calculator tab="projekt"/>}/>

        <Route path='/home' element={<Home/>}/>

        {/* Calculator */}
        <Route path='/projekt' element={<Calculator tab="projekt"/>}/>
        <Route path='/dizalo' element={<Calculator tab="dizalo"/>}/>
        <Route path='/ovjes' element={<Calculator tab="ovjes"/>}/>
        <Route path='/vodiliceKabine' element={<Calculator tab="vodiliceKabine"/>}/>
        <Route path='/vodiliceProtuutega' element={<Calculator tab="vodiliceProtuutega"/>}/>
        <Route path='/kabina' element={<Calculator tab="kabina"/>}/>
        <Route path='/protuutegIKompenzacija' element={<Calculator tab="protuutegIKompenzacija"/>}/>
        <Route path='/elektricniPogon' element={<Calculator tab="elektricniPogon"/>}/>
        <Route path='/hidraulicniPogon' element={<Calculator tab="hidraulicniPogon"/>}/>
        <Route path='/biljeske' element={<Calculator tab="biljeske"/>}/>

      </Routes>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <App/>
    </MemoryRouter>
    
  </React.StrictMode>
);

