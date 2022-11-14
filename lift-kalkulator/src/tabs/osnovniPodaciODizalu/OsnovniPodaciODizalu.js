//import { useEffect, useState } from 'react';

// import UkrcavanjeVilicarem from '../Components/UkrcavanjeVilicarem';
import Dizalo from './components/Dizalo';
import VoznoOkno from './components/VoznoOkno';
import SlikaDizala from './components/SlikaDizala';

const OsnovniPodaciODizalu = () => {
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <Dizalo/>
                </div>
                <div className="col-sm">
                    <VoznoOkno/>    
                </div>
                <div className="col-sm">
                    <SlikaDizala/>    
                </div>
            </div>
        </div>
            
    );
}
  


export default OsnovniPodaciODizalu;