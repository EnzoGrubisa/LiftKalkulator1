
import Dropdown from "../../../components/Dropdown";
import { useCalculator, useCalculatorUpdate } from "../../../contexts/CalculatorProvider";

const OvjesPrviDio = () => {

    const { smjestajPogona, faktorOvjesa, vrstaDizala, vrstaPogona, bezStrojarnice } = useCalculator();
    const { setSmjestajPogona, setFaktorOvjesa } = useCalculatorUpdate();

    function logState(){
        // console.log("-------");
        // console.log("-------");
    }

    const faktorOvjesaChanged = (e) => {
        setFaktorOvjesa(e.target.value);
    };

    function getFaktorOvjesaOptions(){
        if(vrstaDizala === "elektricno"){
            return [{key: "1:1", value: "1:1"}, {key: "2:1", value: "2:1"}];
        }
        else if(vrstaDizala === "hidraulicno"){
            if(vrstaPogona === "direktni"){
                return [{key: "1:1", value: "1:1"}];
            }else if(vrstaPogona === "indirektni"){
                return [{key: "1:2", value: "1:2"}];
            }else{
                return [];
            }
        }
        else{
            return [];
        }
    }

    const smjestajPogonaChanged = (e) => {
        setSmjestajPogona(e.target.value);
    };

    function getSmjestajPogonaOptions(){
        if(vrstaDizala === "elektricno" && bezStrojarnice === true){
            return [{key: "uVoznomOknuNaNosacu", value: "U voznom oknu - na nosaču"}, {key: "uVoznomOknuNaVodilicama", value: "U voznom oknu - na vodilicama"}, {key: "naDnuVoznogOkna", value: "Na dnu voznog okna"}];
        }
        else if(vrstaDizala === "hidraulicno" && bezStrojarnice === true){
            return [{key: "uVoznomOknu", value: "U voznom oknu"}];
        }
        else if(bezStrojarnice === false){
            return [{key: "uStrojarniciIznadVoznogOkna", value: "U strojarnici iznad voznog okna"}, {key: "uStrojarniciIspodVoznogOkna", value: "U strojarnici ispod voznog okna"}, {key: "uStrojarniciPoredVoznogOkna", value: "U strojarnici pored voznog okna"}];
        }
        else{
            return [{key: "error", value: "error"}];
        }
    }

    return(
        <div>
            <Dropdown labelWidth="200px" title="Faktor ovjesa (ik)" options={getFaktorOvjesaOptions()} value={faktorOvjesa} onChange={faktorOvjesaChanged}/>
            <Dropdown labelWidth="200px" title="Smještaj pogona" options={getSmjestajPogonaOptions()} value={smjestajPogona} onChange={smjestajPogonaChanged}/>
            
            <br/>
            
            <button onClick={logState}>LOG</button>
        </div>
    );
}

export default OvjesPrviDio;