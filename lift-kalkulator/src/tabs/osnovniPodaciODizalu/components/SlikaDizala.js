//import { useEffect, useState } from 'react';
import elektricnoSaStrojarnicom from '../../../assets/images/dizalo/elektricnoSaStrojarnicom.png';
import elektricnoBezStrojarnice from '../../../assets/images/dizalo/elektricnoBezStrojarnice.png';
import hidraulicno from '../../../assets/images/dizalo/hidraulicno.png';

import { useCalculator } from '../../../contexts/CalculatorProvider'; 

const SlikaDizala = () => {


    const { vrstaDizala, bezStrojarnice } = useCalculator();

    function fullscreenImage(){
        
    }

    function pickImage(){
        if(vrstaDizala === 'elektricno'){
            if(bezStrojarnice === false){
                return elektricnoSaStrojarnicom;
            }
            else if(bezStrojarnice === true){
                return elektricnoBezStrojarnice;
            }
        }
        else if(vrstaDizala === 'hidraulicno'){
            return hidraulicno;
        }
    }

    return (
        <div>
            <img alt='slika dizala' src={pickImage()} className="img-fluid" onClick={fullscreenImage}/>
        </div>
      
    );
}
  
export default SlikaDizala;