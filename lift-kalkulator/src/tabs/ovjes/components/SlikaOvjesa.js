import ovjesElektricnoIspodIPoredVoznogOkna1na1 from '../../../assets/images/ovjes/ovjesElektricnoIspodIPoredVoznogOkna1-1.png'
import ovjesElektricnoIspodIPoredVoznogOkna2na1 from '../../../assets/images/ovjes/ovjesElektricnoIspodIPoredVoznogOkna2-1.png'
import ovjesElektricnoIznadVoznogOkna1na1 from '../../../assets/images/ovjes/ovjesElektricnoIznadVoznogOkna1-1.png'
import ovjesElektricnoIznadVoznogOkna2na1 from '../../../assets/images/ovjes/ovjesElektricnoIznadVoznogOkna2-1.png'
import ovjesElektricnoNaDnuVoznogOkna1na1 from '../../../assets/images/ovjes/ovjesElektricnoNaDnuVoznogOkna1-1.png'
import ovjesElektricnoNaDnuVoznogOkna2na1 from '../../../assets/images/ovjes/ovjesElektricnoNaDnuVoznogOkna2-1.png'
import ovjesElektricnoUVoznomOknu1na1 from '../../../assets/images/ovjes/ovjesElektricnoUVoznomOknu1-1.png'
import ovjesElektricnoUVoznomOknu2na1 from '../../../assets/images/ovjes/ovjesElektricnoUVoznomOknu2-1.png'
import ovjesHidraulicnoDirektni from '../../../assets/images/ovjes/ovjesHidraulicnoDirektni.png'
import ovjesHidraulicnoIndirektni from '../../../assets/images/ovjes/ovjesHidraulicnoIndirektni.png'

import { useCalculator } from '../../../contexts/CalculatorProvider'; 

const SlikaOvjesa = () => {

    const { vrstaDizala, vrstaPogona, smjestajPogona, faktorOvjesa } = useCalculator();
    
    function fullscreenImage(){
        
    }

    function pickImage(){
        if(vrstaDizala === 'elektricno'){
            if(smjestajPogona === "uStrojarniciIspodVoznogOkna" || smjestajPogona === "uStrojarniciPoredVoznogOkna"){
                if(faktorOvjesa === "1:1"){
                    return ovjesElektricnoIspodIPoredVoznogOkna1na1;
                }
                else if(faktorOvjesa === "2:1"){
                    return ovjesElektricnoIspodIPoredVoznogOkna2na1;
                }
            }
            else if(smjestajPogona === "uStrojarniciIznadVoznogOkna"){
                if(faktorOvjesa === "1:1"){
                    return ovjesElektricnoIznadVoznogOkna1na1;
                }   
                else if(faktorOvjesa === "2:1"){
                    return ovjesElektricnoIznadVoznogOkna2na1;
                }
            }
            else if(smjestajPogona === "naDnuVoznogOkna"){
                if(faktorOvjesa === "1:1"){
                    return ovjesElektricnoNaDnuVoznogOkna1na1;
                }
                else if(faktorOvjesa === "2:1"){
                    return ovjesElektricnoNaDnuVoznogOkna2na1;
                }
            }
            else if(smjestajPogona === "uVoznomOknuNaNosacu" || smjestajPogona === "uVoznomOknuNaVodilicama"){
                if(faktorOvjesa === "1:1"){
                    return ovjesElektricnoUVoznomOknu1na1;
                }
                else if(faktorOvjesa === "2:1"){
                    return ovjesElektricnoUVoznomOknu2na1;
                }
            }
        }
        else if(vrstaDizala === 'hidraulicno'){
            if(vrstaPogona === "direktni"){
                return ovjesHidraulicnoDirektni;
            }
            else if(vrstaPogona === "indirektni"){
                return ovjesHidraulicnoIndirektni;
            }
        }
    }

    return (
        <div>
            <img alt='slika ovjesa' src={pickImage()} className="img-fluid" onClick={fullscreenImage}/>
        </div>
      
    );
}
  
export default SlikaOvjesa;