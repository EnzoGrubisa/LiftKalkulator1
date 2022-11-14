//import { useEffect, useState } from 'react';
import elekricnoSaStrojarnicom from '../../../assets/images/dizalo/elektricnoSaStrojarnicom.png';
import elekricnoBezStrojarnice from '../../../assets/images/dizalo/elektricnoBezStrojarnice.png';
import hirdaulicno from '../../../assets/images/dizalo/hidraulicno.png';

const SlikaDizala = () => {

    function fullscreenImage(){
        
    }

    return (
        <div>
            <img src={hirdaulicno} className="img-fluid" onClick={fullscreenImage}/>
        </div>
      
    );
}
  
export default SlikaDizala;