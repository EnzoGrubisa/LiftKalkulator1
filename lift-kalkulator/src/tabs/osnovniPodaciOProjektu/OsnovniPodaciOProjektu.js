import { useEffect, useState } from 'react';
import PodaciOAutoruIUgraditeljuDizala from './components/PodaciOAutoruIUgraditeljuDizala';
import OsnovniPodaciOProjektuComponent from './components/OsnovniPodaciOProjektuComponent';

const OsnovniPodaciOProjektu = () => {
    
    return (
        <div className='container' style={{backgroundColor: "#CCCCCC"}}>
            <h2>Osnovi podaci o projektu</h2>
            <PodaciOAutoruIUgraditeljuDizala/><br/>
            <OsnovniPodaciOProjektuComponent/><br/>
        </div>
      
    );
}
  


export default OsnovniPodaciOProjektu;