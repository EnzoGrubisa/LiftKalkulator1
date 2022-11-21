//import { useEffect, useState } from 'react';
import CheckBox from '../../../components/CheckBox';
import Dropdown from '../../../components/Dropdown';

import { useCalculator, useCalculatorUpdate } from '../../../contexts/CalculatorProvider'; 
import { useVoznoOknoUpdate } from '../../../contexts/VoznoOknoProvider';
import { useOvjesUpdate } from '../../../contexts/OvjesProvider';
const Dizalo = () => {

    // const [namjenaDizala, setNamjenaDizala] = useState("osobno");
    // const [ukrcavanjeVilicarem, setUkrcavanjeVilicarem] = useState(false);

    // context read
    const { namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa } = useCalculator();

    // context update functions
    const { setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa } = useCalculatorUpdate();   
    const { setBrojPostaja, setBrojUlaza, setDubinaJame } = useVoznoOknoUpdate();   
    const { setBrojNosivihUzadi, setKorisnickoDefiniranje } = useOvjesUpdate();

    const namjenaDizalaChanged = (e) => {
        setNamjenaDizala(e.target.value);
        if(e.target.value === "osobno"){
            setUkrcavanjeVilicarem(false);
        }
    };

    const ukrcavanjeVilicaremCBChanged = (e) => {
        setUkrcavanjeVilicarem(e.target.checked);
    };    

    const vrstaDizalaChanged = (e) => {
        setVrstaDizala(e.target.value);
        if(e.target.value === "elektricno"){
            setVrstaPogona("bezreduktorski");
            setFaktorOvjesa("2:1");
            setBezStrojarnice(true);
            //vozno okno
            setBrojPostaja(7);
            setBrojUlaza(7);
            setDubinaJame(1200);
            //ovjes
            setBrojNosivihUzadi(7);
            setKorisnickoDefiniranje(false);
        }else if(e.target.value === "hidraulicno"){
            setVrstaPogona("indirektni");
            setFaktorOvjesa("1:2");
            setBezStrojarnice(false);
            //vozno okno
            setBrojPostaja(6);
            setBrojUlaza(6);
            setDubinaJame(1300);
            //ovjes
            setBrojNosivihUzadi(4);
            setKorisnickoDefiniranje(false);
        }
    };

    const vrstaPogonaChanged = (e) => {
        setVrstaPogona(e.target.value);
        if(e.target.value === "reduktorski"){
            setFaktorOvjesa("1:1");

        }else if(e.target.value === "bezreduktorski"){
            setFaktorOvjesa("2:1");
        }
        else if(e.target.value === "direktni"){
            setFaktorOvjesa("1:1");
        }
        else if(e.target.value === "indirektni"){
            setFaktorOvjesa("1:2");
        }
    };
    
    const smjestajPogonaChanged = (e) => {
        setSmjestajPogona(e.target.value);
    };

    const bezStrojarniceCBChanged = (e) => {
        setBezStrojarnice(e.target.checked);
        if(vrstaDizala === "elektricno" && e.target.checked === true){
            setSmjestajPogona("uVoznomOknuNaNosacu");
        }
        else if(vrstaDizala === "hidraulicno" && e.target.checked === true){
            setSmjestajPogona("uVoznomOknu");
        }
        else if(e.target.checked === false){
            setSmjestajPogona("uStrojarniciIznadVoznogOkna");
        }
    };

    const faktorOvjesaChanged = (e) => {
        setFaktorOvjesa(e.target.value);
    };

    function logButtonClick(){
        console.log("-------");
        console.log("namjenaDizala = " + namjenaDizala);
        console.log("ukrcavanjeVilicarem = " + ukrcavanjeVilicarem);
        console.log("vrstaDizala = " + vrstaDizala);
        console.log("vrstaPogona = " + vrstaPogona);
        console.log("smjestajPogona = " + smjestajPogona);
        console.log("bezStrojarnice = " + bezStrojarnice);
        console.log("faktorOvjesa = " + faktorOvjesa);
        console.log("-------");
    }

    function getVrstaDizalaOptions(){
        return [{key: "elektricno", value: "Električno dizalo s pogonskom užnicom"}, {key: "hidraulicno", value: "Hidraulično dizalo"}];
    }

    function getVrstaPogonaOptions(){
        if(vrstaDizala === "elektricno"){
            return [{key: "reduktorski", value: "Reduktorski"}, {key: "bezreduktorski", value: "Bezreduktorski"}];
        }
        else if(vrstaDizala === "hidraulicno"){
            return [{key: "direktni", value: "Direktni"}, {key: "indirektni", value: "Indirektni"}];
        }
        else{
            return [{key: "error", value: "error"}];
        }
    }
    
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



    return (
        <div style={{display: "block"}}>
            <label >Dizalo: </label>
            <Dropdown labelWidth="200px" title="Namjena dizala" options={[{key: "osobno", value: "Osobno dizalo"}, {key: "teretno", value: "Teretno dizalo"}, {key: "osobnoTeretno", value: "Osobno teretno dizalo"}]} onChange={namjenaDizalaChanged} value={namjenaDizala}/>
            
            { namjenaDizala === "teretno" || namjenaDizala === "osobnoTeretno" ? 
            <CheckBox checked={ukrcavanjeVilicarem} title="ukrcavanje viličarem" id="ukrcavanjeVilicaremCheckBox" onChange={ukrcavanjeVilicaremCBChanged}/>
            : null }
            
            <br/>

            <Dropdown labelWidth="200px" title="Vrsta dizala" options={getVrstaDizalaOptions()} value={vrstaDizala} onChange={vrstaDizalaChanged}/>
            <Dropdown labelWidth="200px" title="Vrsta pogona" options={getVrstaPogonaOptions()} value={vrstaPogona} onChange={vrstaPogonaChanged}/>
                        
            <br/>

            <Dropdown labelWidth="200px" title="Smještaj pogona" options={getSmjestajPogonaOptions()} value={smjestajPogona} onChange={smjestajPogonaChanged}/>
            <CheckBox checked={bezStrojarnice} title="bez strojarnice" id="bezStrojarniceCheckBox" onChange={bezStrojarniceCBChanged}/>
        
            <br/>

            <Dropdown labelWidth="200px" title="Faktor ovjesa (ik)" options={getFaktorOvjesaOptions()} value={faktorOvjesa} onChange={faktorOvjesaChanged}/>

            <br/>

            <button onClick={logButtonClick}>LOG state</button>
            
            <br/>
        </div>
    );
}
  


export default Dizalo;