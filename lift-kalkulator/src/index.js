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
import useAuth from "./hooks/useAuth";

import RequireAuth from './auth/RequireAuth';
import Layout from './components/Layout';

const App = () => {

  const { setAuth } = useAuth();

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if(localAuth){
        setAuth(JSON.parse(localAuth));
        //console.log("index.js -> local auth = " + localAuth);
    }
  }, [setAuth]);
   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>

          {/* Calculator - user routes*/}
          <Route element={<RequireAuth/>}>
            {/* <Route path='/calculator' element={<Calculator tab="projekt"/>}/> */}
            <Route path='/calculator' element={<Calculator/>}/>
            {/* <Route path='/projekt' element={<Calculator tab="projekt"/>}/>
            <Route path='/dizalo' element={<Calculator tab="dizalo"/>}/>
            <Route path='/ovjes' element={<Calculator tab="ovjes"/>}/>
            <Route path='/vodiliceKabine' element={<Calculator tab="vodiliceKabine"/>}/>
            <Route path='/vodiliceProtuutega' element={<Calculator tab="vodiliceProtuutega"/>}/>
            <Route path='/kabina' element={<Calculator tab="kabina"/>}/>
            <Route path='/protuutegIKompenzacija' element={<Calculator tab="protuutegIKompenzacija"/>}/>
            <Route path='/elektricniPogon' element={<Calculator tab="elektricniPogon"/>}/>
            <Route path='/hidraulicniPogon' element={<Calculator tab="hidraulicniPogon"/>}/>
            <Route path='/biljeske' element={<Calculator tab="biljeske"/>}/> */}
          </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProjektProvider>
          <DizaloProvider>
            <VoznoOknoProvider>
              <OvjesProvider>
                <App/>
              </OvjesProvider>
            </VoznoOknoProvider>
          </DizaloProvider>
        </ProjektProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

