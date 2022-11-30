import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { /*MemoryRouter,*/ Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './pages/Home'
import Calculator from './pages/Calculator';
import Login from './pages/Login';

import DizaloProvider from "./contexts/DizaloProvider";
import VoznoOknoProvider from './contexts/VoznoOknoProvider';
import OvjesProvider from './contexts/OvjesProvider';
import ProjektProvider from './contexts/ProjektProvider';
import { AuthProvider } from './contexts/AuthProvider';

const App = () => {

  useEffect(() => {
    //console.log("[]");
    
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data.message));
  }, []);
   
  return (
    <div className="App">
      <Routes>
        
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

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
        
        <Route path='/' element={<Calculator tab="projekt"/>}/>


      </Routes>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProjektProvider>
        <DizaloProvider>
          <VoznoOknoProvider>
            <OvjesProvider>
              <BrowserRouter>
                <App/>
              </BrowserRouter>
            </OvjesProvider>
          </VoznoOknoProvider>
        </DizaloProvider>
      </ProjektProvider>
    </AuthProvider>
  </React.StrictMode>
);

