import { useEffect, useState } from 'react';
import CheckBox from '../../../components/CheckBox';
import Dropdown from '../../../components/Dropdown';

import { useCalculator, useCalculatorUpdate } from '../../../contexts/CalculatorProvider'; 

const Dizalo = () => {
    
    const { vrstaDizala, bezStrojarnice } = useCalculator();
    const { setVrstaDizala, setBezStrojarnice } = useCalculatorUpdate();

    const [namjenaDizala, setNamjenaDizala] = useState("osobno");
    const [showUkrcavanjeVilicaremCheckBox, setShowUkrcavanjeVilicaremCheckBox] = useState(false);
    const [ukrcavanjeVilicarem, setUkrcavanjeVilicarem] = useState(false);

    //const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    const [vrstaPogona, setVrstaPogona] = useState("reduktorski");
    
    const [smjestajPogona, setSmjestajPogona] = useState("uVoznomOknuNaNosacu");
    //const [bezStrojarnice, setBezStrojarnice] = useState(true);
    
    
    const changeNamjenaDizala = (e) => {
        setNamjenaDizala(e.target.value);
    };

    const ukrcavanjeVilicaremCheckBoxClicked = (e) => {
        setUkrcavanjeVilicarem(e.target.checked);
    };
    

    const changeVrstaDizala = (e) => {
        setVrstaDizala(e.target.value);
    };


    
    const changeVrstaPogona = (e) => {
        setVrstaPogona(e.target.value);
    };

    
    const changeSmjestajPogona = (e) => {
        setSmjestajPogona(e.target.value);
    };

    const bezStrojarniceCheckBoxClicked = (e) => {
        setBezStrojarnice(e.target.checked);
    };
    

    useEffect(() => {
        if(namjenaDizala === "teretno" || namjenaDizala === "osobnoTeretno"){
            setShowUkrcavanjeVilicaremCheckBox(true);
        }else{
            setShowUkrcavanjeVilicaremCheckBox(false);
        }
    }, [namjenaDizala]);

    useEffect(() => {
        if(vrstaDizala === "elektricno"){
            setVrstaPogona("bezreduktorski");
        }else{
            setVrstaPogona("indirektni");
        }
    }, [vrstaDizala]);



    function logButtonClick(){
        console.log("-------");
        console.log("namjenaDizala = " + namjenaDizala);
        console.log("showUkrcavanjeVilicaremCheckBox = " + showUkrcavanjeVilicaremCheckBox);
        console.log("ukrcavanjeVilicarem = " + ukrcavanjeVilicarem);
        console.log("vrstaDizala = " + vrstaDizala);
        console.log("vrstaPogona = " + vrstaPogona);
        console.log("bezStrojarnice = " + bezStrojarnice);
        console.log("-------");
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

    return (
        <div style={{display: "block"}}>
            <label >Dizalo: </label>
            <Dropdown labelWidth="200px" title="Namjena dizala" options={[{key: "osobno", value: "Osobno dizalo"}, {key: "teretno", value: "Teretno dizalo"}, {key: "osobnoTeretno", value: "Osobno teretno dizalo"}]} onChange={changeNamjenaDizala} value={namjenaDizala}/>
            
            { namjenaDizala === "teretno" || namjenaDizala === "osobnoTeretno" ? 
            <CheckBox defaultChecked={ukrcavanjeVilicarem} title="ukrcavanje viličarem" id="ukrcavanjeVilicaremCheckBox" onClick={ukrcavanjeVilicaremCheckBoxClicked}/>
            : null }
            
            <br/>

            <Dropdown labelWidth="200px" title="Vrsta dizala" options={[{key: "elektricno", value: "Električno dizalo s pogonskom užnicom"}, {key: "hidraulicno", value: "Hidraulično dizalo"}]} value={vrstaDizala} onChange={changeVrstaDizala}/>
            <Dropdown labelWidth="200px" title="Vrsta pogona" options={getVrstaPogonaOptions()} value={vrstaPogona} onChange={changeVrstaPogona}/>
                        
            <br/>

            <Dropdown labelWidth="200px" title="Smještaj pogona" options={getSmjestajPogonaOptions()} value={smjestajPogona} onChange={changeSmjestajPogona}/>
            <CheckBox defaultChecked={bezStrojarnice} title="bez strojarnice" id="bezStrojarniceCheckBox" onClick={bezStrojarniceCheckBoxClicked}/>
        
            <br/>

            <br/>
            <br/>

            <button onClick={logButtonClick}>LOG state</button>
            
            <br/>
        </div>
    );
}
  


export default Dizalo;