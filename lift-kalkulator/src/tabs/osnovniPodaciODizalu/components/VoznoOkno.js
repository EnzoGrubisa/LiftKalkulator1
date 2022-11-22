import { useEffect, useState } from 'react';

import TitledInput from "../../../components/TitledInput";

import { useVoznoOkno, useVoznoOknoUpdate } from '../../../contexts/VoznoOknoProvider'; 

const VoznoOkno = () => {

    //#region properties 

    const { brojPostaja, brojUlaza, visinaDizanja, tlocrtnaSirina, tlocrtnaDubina, dubinaJame, nadvisenje } = useVoznoOkno();   
    const { setBrojPostaja, setBrojUlaza, setVisinaDizanja, setTlocrtnaSirina, setTlocrtnaDubina, setDubinaJame, setNadvisenje } = useVoznoOknoUpdate();   

    //BROJ POSTAJA
    const [validBrojPostaja, setValidBrojPostaja]  = useState(true);
    
    

    function brojPostajaChanged(e){
        setBrojPostaja(e.target.value);
    }

    useEffect(() => {
        const num = (+brojPostaja);
        if(num.toString() === "NaN" || num % 1 !== 0 || num > 7 || num < 2){
            setValidBrojPostaja(false);
        }
        else{
            setValidBrojPostaja(true);
        }
    }, [brojPostaja]);

    function brojPostajaOnBlur(e){
        if(validBrojPostaja){
            setBrojPostaja(+(e.target.value));
            setBrojUlaza(+(e.target.value));
        }
        else{
            setBrojPostaja(6);
            setBrojUlaza(6);
        }
    }

    //BROJ ULAZA
    const [validBrojUlaza, setValidBrojUlaza]  = useState(true);
    

    function brojUlazaChanged(e){
        setBrojUlaza(e.target.value);
    }

    useEffect(() => {
        const num = (+brojUlaza);
        if(num.toString() === "NaN" || num !== brojPostaja){
            setValidBrojUlaza(false);
        }
        else{
            setValidBrojUlaza(true);
        }
    }, [brojUlaza, brojPostaja]);

    function brojUlazaOnBlur(e){
        if(validBrojUlaza){
            setBrojUlaza(+(e.target.value));
        }
        else{
            setBrojUlaza(brojPostaja);
        }
    }
    
    //VISINA DIZANJA
    const [validVisinaDizanja, setValidVisinaDizanja]  = useState(true);
    

    function visinaDizanjaChanged(e){
        setVisinaDizanja(e.target.value);
    }

    useEffect(() => {
        const num = +visinaDizanja;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidVisinaDizanja(false);
        }
        else{
            setValidVisinaDizanja(true);
        }
    }, [visinaDizanja]);

    function visinaDizanjaOnBlur(e){
        if(validVisinaDizanja){
            setVisinaDizanja(+(e.target.value));
        }
        else{
            setVisinaDizanja(0.01);
        }
    }

    //TLOCRTNA SIRINA
    const [validTlocrtnaSirina, setValidTlocrtnaSirina]  = useState(true);
    

    function tlocrtnaSirinaChanged(e){
        setTlocrtnaSirina(e.target.value);
    }

    useEffect(() => {
        const num = +tlocrtnaSirina;
        if(num.toString() === "NaN" || num > 20000 || num <= 0){
            setValidTlocrtnaSirina(false);
        }
        else{
            setValidTlocrtnaSirina(true);
        }
    }, [tlocrtnaSirina]);

    function tlocrtnaSirinaOnBlur(e){
        if(validTlocrtnaSirina){
            setTlocrtnaSirina(+(e.target.value));
        }
        else{
            setTlocrtnaSirina(0.01);
        }
    }

    //TLOCRTNA DUBINA
    const [validTlocrtnaDubina, setValidTlocrtnaDubina]  = useState(true);
    

    function tlocrtnaDubinaChanged(e){
        setTlocrtnaDubina(e.target.value);
    }

    useEffect(() => {
        const num = +tlocrtnaDubina;
        if(num.toString() === "NaN" || num > 20000 || num <= 0){
            setValidTlocrtnaDubina(false);
        }
        else{
            setValidTlocrtnaDubina(true);
        }
    }, [tlocrtnaDubina]);

    function tlocrtnaDubinaOnBlur(e){
        if(validTlocrtnaDubina){
            setTlocrtnaDubina(+(e.target.value));
        }
        else{
            setTlocrtnaDubina(0.01);
        }
    }

    //DUBINA JAME
    const [validDubinaJame, setValidDubinaJame]  = useState(true);
    

    function dubinaJameChanged(e){
        setDubinaJame(e.target.value);
    }

    useEffect(() => {
        const num = +dubinaJame;
        if(num.toString() === "NaN" || num > 10000 || num <= 0){
            setValidDubinaJame(false);
        }
        else{
            setValidDubinaJame(true);
        }
    }, [dubinaJame]);

    function dubinaJameOnBlur(e){
        if(validDubinaJame){
            setDubinaJame(+(e.target.value));
        }
        else{
            setDubinaJame(0.01);
        }
    }

    //NADVISENJE
    const [validNadvisenje, setValidNadvisenje]  = useState(true);
    

    function nadvisenjeChanged(e){
        setNadvisenje(e.target.value);
    }

    useEffect(() => {
        const num = +nadvisenje;
        if(num.toString() === "NaN" || num > 10000 || num < 2200){
            setValidNadvisenje(false);
        }
        else{
            setValidNadvisenje(true);
        }
    }, [nadvisenje]);

    function nadvisenjeOnBlur(e){
        if(validNadvisenje){
            setNadvisenje(+(e.target.value));
        }
        else{
            setNadvisenje(2200);
        }
    }

    //#endregion

    const labelsWidth = "160px";

    return (
        <div style={{width: "fit-content"}}>
            <h5>Vozno okno: </h5>
            <TitledInput labelWidth={labelsWidth} inputWidth="50px" title="Broj postaja (nst)" value={brojPostaja} onChange={brojPostajaChanged} valid={validBrojPostaja} onBlur={brojPostajaOnBlur} tooltip="2 - 7"/>
            <TitledInput labelWidth={labelsWidth} inputWidth="50px" title="Broj ulaza (netc)" value={brojUlaza} onChange={brojUlazaChanged} valid={validBrojUlaza} onBlur={brojUlazaOnBlur} tooltip="2 - 7"/>
            <br/>
            <TitledInput labelWidth={labelsWidth} inputWidth="100px" title="Visina dizanja (H)" sDesna="mm" value={visinaDizanja} onChange={visinaDizanjaChanged} valid={validVisinaDizanja} onBlur={visinaDizanjaOnBlur} tooltip="0 - 1000000"/>
            <br/>
            <TitledInput labelWidth={labelsWidth} inputWidth="100px" title="Tlocrtna širina (SW)" sDesna="mm" value={tlocrtnaSirina} onChange={tlocrtnaSirinaChanged} valid={validTlocrtnaSirina} onBlur={tlocrtnaSirinaOnBlur} tooltip="0 - 20000"/>
            <TitledInput labelWidth={labelsWidth} inputWidth="100px" title="Tlocrtna dubina (SD)" sDesna="mm" value={tlocrtnaDubina} onChange={tlocrtnaDubinaChanged} valid={validTlocrtnaDubina} onBlur={tlocrtnaDubinaOnBlur} tooltip="0 - 20000"/>
            <br/>
            <TitledInput labelWidth={labelsWidth} inputWidth="100px" title="Dubina jame (PD)" sDesna="mm" value={dubinaJame} onChange={dubinaJameChanged} valid={validDubinaJame} onBlur={dubinaJameOnBlur} tooltip="0 - 10000"/>
            <TitledInput labelWidth={labelsWidth} inputWidth="100px" title="Nadvišenje (HH)" sDesna="mm" value={nadvisenje} onChange={nadvisenjeChanged} valid={validNadvisenje} onBlur={nadvisenjeOnBlur} tooltip="2200 - 10000"/>
        </div>
      
    );
}
  
export default VoznoOkno;