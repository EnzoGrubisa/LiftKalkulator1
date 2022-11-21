import { useEffect, useState } from "react";
import CheckBox from "../../../components/CheckBox";

import Dropdown from "../../../components/Dropdown";
import TitledInput from "../../../components/TitledInput";
import { useCalculator, useCalculatorUpdate } from "../../../contexts/CalculatorProvider";
import { useOvjes, useOvjesUpdate } from "../../../contexts/OvjesProvider";

const OvjesPrviDio = () => {

    const { smjestajPogona, faktorOvjesa, vrstaDizala, vrstaPogona, bezStrojarnice } = useCalculator();
    const { setSmjestajPogona, setFaktorOvjesa } = useCalculatorUpdate();

    const { brojNosivihUzadi, tipUzadi, korisnickoDefiniranje } = useOvjes();
    const { setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje } = useOvjesUpdate();

    function logState(){
        // console.log("-------");
        // console.log("-------");
    }

    /* FAKTOR OVJESA */
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

    /* SMJESTAJ POGONA */
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

    /* BROJ NOSIVIH UZADI */
    const [validBrojNosivihUzadi, setValidBrojNosivihUzadi]  = useState(true);

    const brojNosivihUzadiChanged = (e) => {
        setBrojNosivihUzadi(e.target.value);
    };

    useEffect(() => {
        const num = +brojNosivihUzadi;
        if(num.toString() === "NaN" || num % 1 !== 0 || num > 50 || num < 2){
            setValidBrojNosivihUzadi(false);
        }
        else{
            setValidBrojNosivihUzadi(true);
        }
    }, [brojNosivihUzadi]);

    function brojNosivihUzadiOnBlur(e){
        if(validBrojNosivihUzadi){
            setBrojNosivihUzadi(+(e.target.value));
        }
        else{
            setBrojNosivihUzadi(2);
        }
    }

    /* TIP UZADI */
    const tipUzadiChanged = (e) => {
        setTipUzadi(e.target.value);
    };

    function getTipUzadiOptions(){
        return [
            {key: "1", value: "1"}, 
            {key: "2", value: "2"}, 
            {key: "3", value: "3"}, 
            {key: "4", value: "4"}, 
            {key: "5", value: "5"}, 
            {key: "6", value: "6"}, 
            {key: "7", value: "7"}, 
            {key: "8", value: "8"}
        ];
    }

    /* KORISNICKO DEFINIRANJE */
    const korisnickoDefiniranjeCBChanged = (e) => {
        setKorisnickoDefiniranje(e.target.checked);
        if(e.target.checked){
            setTipUzadi("0");
        }else if(!e.target.checked){
            setTipUzadi("1");
        }
    };




    return(
        <div>
            <Dropdown labelWidth="200px" title="Faktor ovjesa (ik)" options={getFaktorOvjesaOptions()} value={faktorOvjesa} onChange={faktorOvjesaChanged}/>
            <Dropdown labelWidth="200px" title="Smještaj pogona" options={getSmjestajPogonaOptions()} value={smjestajPogona} onChange={smjestajPogonaChanged}/>
            
            <br/>
            
            
            {vrstaPogona === "direktni" ?
            null :
            <>
                <label>Nosiva užad: </label>

                <TitledInput labelWidth="200px" inputWidth="80px" title="Broj nosivih užadi (nr)" sDesna="" value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>
                <Dropdown disabled={korisnickoDefiniranje} labelWidth="200px" title="Tip" options={getTipUzadiOptions()} value={tipUzadi} onChange={tipUzadiChanged}/>
                
                {vrstaDizala === "elektricno"?
                <CheckBox title="korisničko definiranje" id="korisnickoDefiniranjeCheckBox" onChange={korisnickoDefiniranjeCBChanged} checked={korisnickoDefiniranje}/>
                : null}
                
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Promjer (dr)" sDesna="mm"                    value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Prekidna čvrstoća (Frbl)" sDesna="N"         value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Masa po duljnom metru (qs)" sDesna="kg/m"    value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>    

                <TitledInput labelWidth="210px" inputWidth="80px" title="Young-ov modul (Eyg)" sDesna="kg/mm2"                                          value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>

                {vrstaDizala === "elektricno"?
                <>
                Promjena smjera
                </>
                : null}
                
            </>}
            
            
            


            <button onClick={logState}>LOG</button>
        </div>
    );
}

export default OvjesPrviDio;