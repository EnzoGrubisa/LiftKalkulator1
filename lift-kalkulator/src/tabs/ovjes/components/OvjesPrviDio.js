import { useEffect, useState } from "react";

import CheckBox from "../../../components/CheckBox";
import Dropdown from "../../../components/Dropdown";
import TitledInput from "../../../components/TitledInput";

import { useDizalo, useDizaloUpdate } from "../../../contexts/DizaloProvider";
import { useOvjes, useOvjesUpdate } from "../../../contexts/OvjesProvider";

import useSaveProject from "../../../projectData/saveData";

const OvjesPrviDio = () => {

    const { smjestajPogona, faktorOvjesa, vrstaDizala, vrstaPogona, bezStrojarnice } = useDizalo();
    const { setSmjestajPogona, setFaktorOvjesa } = useDizaloUpdate();

    const { brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, promjer, prekidnaCvrstoca, masaPoDuljnomMetru, youngovModul, promjenaSmjeraNaStraniKabine, maxRazmakNaStraniKabine, npr_c, promjenaSmjeraNaStraniProtuutega, maxRazmakNaStraniProtuutega, npr_cw } = useOvjes();
    const { setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setPromjer, setPrekidnaCvrstoca, setMasaPoDuljnomMetru, setYoungovModul, setPromjenaSmjeraNaStraniKabine, setMaxRazmakNaStraniKabine, setNpr_c, setPromjenaSmjeraNaStraniProtuutega, setMaxRazmakNaStraniProtuutega, setNpr_cw } = useOvjesUpdate();

    // AUTOSAVE
    const { autosaveInLocalStorage } = useSaveProject();
    useEffect(() => { autosaveInLocalStorage(); }, [autosaveInLocalStorage, smjestajPogona, faktorOvjesa, vrstaDizala, vrstaPogona, bezStrojarnice, brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, promjer, prekidnaCvrstoca, masaPoDuljnomMetru, youngovModul, promjenaSmjeraNaStraniKabine, maxRazmakNaStraniKabine, npr_c, promjenaSmjeraNaStraniProtuutega, maxRazmakNaStraniProtuutega, npr_cw ]);

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
        switch (e.target.value) {
            //elektricno
            case "tip1":
                setPromjer(6.5);
                setPrekidnaCvrstoca(24700);
                setMasaPoDuljnomMetru(0.148);
                break;
            case "tip2":
                setPromjer(6.5);
                setPrekidnaCvrstoca(25900);
                setMasaPoDuljnomMetru(0.161);
                break;
            case "tip3":
                setPromjer(6.5);
                setPrekidnaCvrstoca(25800);
                setMasaPoDuljnomMetru(0.16);
                break;
            case "tip4":
                setPromjer(6.5);
                setPrekidnaCvrstoca(29700);
                setMasaPoDuljnomMetru(0.17);
                break;
            case "tip5":
                setPromjer(6.5);
                setPrekidnaCvrstoca(25900);
                setMasaPoDuljnomMetru(0.161);
                break;
            case "tip6":
                setPromjer(6.5);
                setPrekidnaCvrstoca(21900);
                setMasaPoDuljnomMetru(0.163);
                break;
            case "tip7":
                setPromjer(6.5);
                setPrekidnaCvrstoca(24700);
                setMasaPoDuljnomMetru(0.155);
                break;
            case "tip8":
                setPromjer(7);
                setPrekidnaCvrstoca(29400);
                setMasaPoDuljnomMetru(0.188);
                break;
                
            //hidraulicno
            case "tip9":
                setPromjer(10);
                setPrekidnaCvrstoca(48200);
                setMasaPoDuljnomMetru(0.34);
                break;
            case "tip10":
                setPromjer(10);
                setPrekidnaCvrstoca(49900);
                setMasaPoDuljnomMetru(0.35);
                break;
            case "tip11":
                setPromjer(10);
                setPrekidnaCvrstoca(48200);
                setMasaPoDuljnomMetru(0.35);
                break;
            case "tip12":
                setPromjer(10);
                setPrekidnaCvrstoca(60500);
                setMasaPoDuljnomMetru(0.385);
                break;

            default:
                break;
        }
    };

    function getTipUzadiOptions(){
        if(vrstaDizala === "elektricno"){
            return [
                {key: "tip1", value: "tip 1"}, 
                {key: "tip2", value: "tip 2"}, 
                {key: "tip3", value: "tip 3"}, 
                {key: "tip4", value: "tip 4"}, 
                {key: "tip5", value: "tip 5"}, 
                {key: "tip6", value: "tip 6"}, 
                {key: "tip7", value: "tip 7"}, 
                {key: "tip8", value: "tip 8"}
            ];
        }
        else if(vrstaDizala === "hidraulicno"){
            return [
                {key: "tip9", value: "tip 9"}, 
                {key: "tip10", value: "tip 10"}, 
                {key: "tip11", value: "tip 11"}, 
                {key: "tip12", value: "tip 12"}
            ];
        }
        
    }

    /* KORISNICKO DEFINIRANJE */
    const korisnickoDefiniranjeCBChanged = (e) => {
        setKorisnickoDefiniranje(e.target.checked);
        if(e.target.checked){
            setTipUzadi("");

            setPromjer(0);
            setPrekidnaCvrstoca(0);
            setMasaPoDuljnomMetru(0);
        }else if(!e.target.checked){
            setTipUzadi("tip1");

            setPromjer(6.5);
            setPrekidnaCvrstoca(24700);
            setMasaPoDuljnomMetru(0.148);
        }
    };

    /* PROMJER */
    const [validPromjer, setValidPromjer]  = useState(true);

    const promjerChanged = (e) => {
        setPromjer(e.target.value);
    };

    useEffect(() => {
        const num = +promjer;
        if(num.toString() === "NaN" || num > 30 || num <= 0){
            setValidPromjer(false);
        }
        else{
            setValidPromjer(true);
            setMaxRazmakNaStraniKabine(num * 200);
            setMaxRazmakNaStraniProtuutega(num * 200);
        }
    }, [promjer, setMaxRazmakNaStraniKabine, setMaxRazmakNaStraniProtuutega]);

    function promjerOnBlur(e){
        if(validPromjer){
            setPromjer(+(e.target.value));
        }
        else{
            setPromjer(0.01);
        }
    }

    /* PREKIDNA ČVRSTOĆA */
    const [validPrekidnaCvrstoca, setValidPrekidnaCvrstoca]  = useState(true);

    const prekidnaCvrstocaChanged = (e) => {
        setPrekidnaCvrstoca(e.target.value);
    };

    useEffect(() => {
        const num = +prekidnaCvrstoca;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidPrekidnaCvrstoca(false);
        }
        else{
            setValidPrekidnaCvrstoca(true);
        }
    }, [prekidnaCvrstoca]);

    function prekidnaCvrstocaOnBlur(e){
        if(validPrekidnaCvrstoca){
            setPrekidnaCvrstoca(+(e.target.value));
        }
        else{
            setPrekidnaCvrstoca(0.01);
        }
    }
    
    /* MASA PO DULJNOM METRU */
    const [validMasaPoDuljnomMetru, setValidMasaPoDuljnomMetru]  = useState(true);

    const masaPoDuljnomMetruChanged = (e) => {
        setMasaPoDuljnomMetru(e.target.value);
    };

    useEffect(() => {
        const num = +masaPoDuljnomMetru;
        if(num.toString() === "NaN" || num > 10 || num <= 0){
            setValidMasaPoDuljnomMetru(false);
        }
        else{
            setValidMasaPoDuljnomMetru(true);
        }
    }, [masaPoDuljnomMetru]);

    function masaPoDuljnomMetruOnBlur(e){
        if(validMasaPoDuljnomMetru){
            setMasaPoDuljnomMetru(+(e.target.value));
        }
        else{
            setMasaPoDuljnomMetru(0.01);
        }
    }
    
    /* YOUNGOV MODUL */
    const [validYoungovModul, setValidYoungovModul]  = useState(true);

    const youngovModulChanged = (e) => {
        setYoungovModul(e.target.value);
    };

    useEffect(() => {
        const num = +youngovModul;
        if(num.toString() === "NaN" || num > 100000 || num <= 0){
            setValidYoungovModul(false);
        }
        else{
            setValidYoungovModul(true);
        }
    }, [youngovModul]);

    function youngovModulOnBlur(e){
        if(validYoungovModul){
            setYoungovModul(+(e.target.value));
        }
        else{
            setYoungovModul(0.01);
        }
    }

    /* PROMJENA SMJERA NA STRANI KABINE */
    const promjenaSmjeraNaStraniKabineCBChanged = (e) => {
        setPromjenaSmjeraNaStraniKabine(e.target.checked);
    };
    
    /* PROMJENA SMJERA NA STRANI PROOTUUTEGA */
    const promjenaSmjeraNaStraniProtuutegaCBChanged = (e) => {
        setPromjenaSmjeraNaStraniProtuutega(e.target.checked);
    };

    /* maxRazmakNaStrani Kabine */
    const [maxRazmakNaStraniKabineValid, setMaxRazmakNaStraniKabineValid]  = useState(true);

    const maxRazmakNaStraniKabineChanged = (e) => {
        setMaxRazmakNaStraniKabine(e.target.value);
    };

    useEffect(() => {
        const num = +maxRazmakNaStraniKabine;
        if(num.toString() === "NaN" || num > 100000 || num <= 0){
            setMaxRazmakNaStraniKabineValid(false);
        }
        else{
            setMaxRazmakNaStraniKabineValid(true);
        }
    }, [maxRazmakNaStraniKabine]);

    function maxRazmakNaStraniKabineOnBlur(e){
        if(maxRazmakNaStraniKabineValid){
            setMaxRazmakNaStraniKabine(+(e.target.value));
        }
        else{
            setMaxRazmakNaStraniKabine(0.01);
        }
    }

    /* maxRazmakNaStrani Protuutega */
    const [maxRazmakNaStraniProtuutegaValid, setMaxRazmakNaStraniProtuutegaValid]  = useState(true);

    const maxRazmakNaStraniProtuutegaChanged = (e) => {
        setMaxRazmakNaStraniProtuutega(e.target.value);
    };

    useEffect(() => {
        const num = +maxRazmakNaStraniProtuutega;
        if(num.toString() === "NaN" || num > 100000 || num <= 0){
            setMaxRazmakNaStraniProtuutegaValid(false);
        }
        else{
            setMaxRazmakNaStraniProtuutegaValid(true);
        }
    }, [maxRazmakNaStraniProtuutega]);

    function maxRazmakNaStraniProtuutegaOnBlur(e){
        if(maxRazmakNaStraniProtuutegaValid){
            setMaxRazmakNaStraniProtuutega(+(e.target.value));
        }
        else{
            setMaxRazmakNaStraniProtuutega(0.01);
        }
    }
    
    /* Npr_c */
    const [npr_cValid, setNpr_cValid]  = useState(true);

    const npr_cChanged = (e) => {
        setNpr_c(e.target.value);
    };

    useEffect(() => {
        const num = +npr_c;
        if(num.toString() === "NaN" || (num !== 1 && num !== 0)){
            setNpr_cValid(false);
        }
        else{
            setNpr_cValid(true);
        }
    }, [npr_c]);

    function npr_cOnBlur(e){
        if(npr_cValid){
            setNpr_c(+(e.target.value));
        }
        else{
            setNpr_c(0);
        }
    }
    
    /* Npr_cw */
    const [npr_cwValid, setNpr_cwValid]  = useState(true);

    const npr_cwChanged = (e) => {
        setNpr_cw(e.target.value);
    };

    useEffect(() => {
        const num = +npr_cw;
        if(num.toString() === "NaN" || (num !== 1 && num !== 0)){
            setNpr_cwValid(false);
        }
        else{
            setNpr_cwValid(true);
        }
    }, [npr_cw]);

    function npr_cwOnBlur(e){
        if(npr_cwValid){
            setNpr_cw(+(e.target.value));
        }
        else{
            setNpr_cw(0);
        }
    }

    return(
        <div>
            <Dropdown labelWidth="200px" title="Faktor ovjesa (ik)" options={getFaktorOvjesaOptions()} value={faktorOvjesa} onChange={faktorOvjesaChanged}/>
            <Dropdown labelWidth="200px" title="Smještaj pogona" options={getSmjestajPogonaOptions()} value={smjestajPogona} onChange={smjestajPogonaChanged}/>
            
            <br/>
            
            
            {vrstaPogona === "direktni" ?
            null :
            <>
                <h5>Nosiva užad: </h5>

                <TitledInput labelWidth="200px" inputWidth="80px" title="Broj nosivih užadi (nr)" sDesna="" value={brojNosivihUzadi} valid={validBrojNosivihUzadi} onChange={brojNosivihUzadiChanged} onBlur={brojNosivihUzadiOnBlur} tooltip="2 - 50"/>
                <Dropdown disabled={korisnickoDefiniranje} labelWidth="200px" title="Tip" options={getTipUzadiOptions()} value={tipUzadi} onChange={tipUzadiChanged}/>
                
                {vrstaDizala === "elektricno"?
                <CheckBox title="korisničko definiranje" id="korisnickoDefiniranjeCheckBox" onChange={korisnickoDefiniranjeCBChanged} checked={korisnickoDefiniranje}/>
                : null}
                
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Promjer (dr)" sDesna="mm"                    value={promjer} valid={validPromjer} onChange={promjerChanged} onBlur={promjerOnBlur} tooltip="0 - 30"/>
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Prekidna čvrstoća (Frbl)" sDesna="N"         value={prekidnaCvrstoca} valid={validPrekidnaCvrstoca} onChange={prekidnaCvrstocaChanged} onBlur={prekidnaCvrstocaOnBlur} tooltip="0 - 1000000"/>
                <TitledInput disabled={!korisnickoDefiniranje} labelWidth="210px" inputWidth="80px" title="Masa po duljnom metru (qs)" sDesna="kg/m"    value={masaPoDuljnomMetru} valid={validMasaPoDuljnomMetru} onChange={masaPoDuljnomMetruChanged} onBlur={masaPoDuljnomMetruOnBlur} tooltip="0 - 10"/>    

                <TitledInput labelWidth="210px" inputWidth="80px" title="Young-ov modul (Eyg)" sDesna="kg/mm2"                                          value={youngovModul} valid={validYoungovModul} onChange={youngovModulChanged} onBlur={youngovModulOnBlur} tooltip=""/>

                {vrstaDizala === "elektricno"?
                <>
                    <br/>
                    <CheckBox title="Promjena smjera savijanja užadi na strani kabine" id="promjenaSmjeraNaStraniKabineCheckBox" onChange={promjenaSmjeraNaStraniKabineCBChanged} checked={promjenaSmjeraNaStraniKabine}/>
                    {promjenaSmjeraNaStraniKabine?
                    <>
                        <TitledInput disabled title="Broj stacioniranih užnica koje MIJENJAJU smjer savijanja užadi između kojih je razmak manji od" inputWidth="100px" value={maxRazmakNaStraniKabine} onChange={maxRazmakNaStraniKabineChanged} valid={maxRazmakNaStraniKabineValid} onBlur={maxRazmakNaStraniKabineOnBlur}/>
                        <TitledInput title="(Npr_c)" inputWidth="100px" value={npr_c} onChange={npr_cChanged} valid={npr_cValid} onBlur={npr_cOnBlur} tooltip="0 / 1"/>
                    </>
                    : null}
                    
                    <CheckBox title="Promjena smjera savijanja užadi na strani protuutega" id="promjenaSmjeraNaStraniProtuutegaCheckBox" onChange={promjenaSmjeraNaStraniProtuutegaCBChanged} checked={promjenaSmjeraNaStraniProtuutega}/>
                    {promjenaSmjeraNaStraniProtuutega?
                    <>
                        <TitledInput disabled title="Broj stacioniranih užnica koje MIJENJAJU smjer savijanja užadi između kojih je razmak manji od" inputWidth="100px" value={maxRazmakNaStraniProtuutega} onChange={maxRazmakNaStraniProtuutegaChanged} valid={maxRazmakNaStraniProtuutegaValid} onBlur={maxRazmakNaStraniProtuutegaOnBlur}/>
                        <TitledInput title="(Npr_cw)" inputWidth="100px" value={npr_cw} onChange={npr_cwChanged} valid={npr_cwValid} onBlur={npr_cwOnBlur}/>
                    </>
                    : null}
                    
                </>
                : null}

            </>}
        </div>
    );
}

export default OvjesPrviDio;