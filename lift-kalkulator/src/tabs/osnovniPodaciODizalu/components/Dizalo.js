import { useEffect, useState } from 'react';

import CheckBox from '../../../components/CheckBox';
import Dropdown from '../../../components/Dropdown';
import TitledInput from '../../../components/TitledInput';

import { useDizalo, useDizaloUpdate } from '../../../contexts/DizaloProvider'; 
import { useVoznoOknoUpdate } from '../../../contexts/VoznoOknoProvider';
import { useOvjesUpdate } from '../../../contexts/OvjesProvider';

const Dizalo = () => {

    // context read
    const { namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa, nazivnaNosivost, brojOsoba, nazivnaBrzina, akceleracijaDeceleracijaNormalnaVoznja, deceleracijaKodHitnogStopa, brojUkljucenjaNaSat } = useDizalo();

    // context update functions
    const { setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa, setnazivnaNosivost, setBrojOsoba, setNazivnaBrzina, setAkceleracijaDeceleracijaNormalnaVoznja, setDeceleracijaKodHitnogStopa, setBrojUkljucenjaNaSat } = useDizaloUpdate();   
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

    // function logButtonClick(){
    //     console.log("-------");
    //     console.log("namjenaDizala = " + namjenaDizala);
    //     console.log("ukrcavanjeVilicarem = " + ukrcavanjeVilicarem);
    //     console.log("vrstaDizala = " + vrstaDizala);
    //     console.log("vrstaPogona = " + vrstaPogona);
    //     console.log("smjestajPogona = " + smjestajPogona);
    //     console.log("bezStrojarnice = " + bezStrojarnice);
    //     console.log("faktorOvjesa = " + faktorOvjesa);
    //     console.log("-------");
    // }

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

    /* NAZIVNA BRZINA */
    const [nazivnaBrzinaValid, setNazivnaBrzinaValid]  = useState(true);

    const nazivnaBrzinaChanged = (e) => {
        setNazivnaBrzina(e.target.value);
    };

    useEffect(() => {
        const num = +nazivnaBrzina;
        if(num.toString() === "NaN" || num > 1 || num <= 0){
            setNazivnaBrzinaValid(false);
        }
        else{
            setNazivnaBrzinaValid(true);
        }
    }, [nazivnaBrzina]);

    function nazivnaBrzinaOnBlur(e){
        if(nazivnaBrzinaValid){
            setNazivnaBrzina(+(e.target.value));
        }
        else{
            setNazivnaBrzina(0.01);
        }
    }

    /* AKCELERACIJA / DECELERACIJA NORMALNA VOŽNJA */
    const [akceleracijaDeceleracijaNormalnaVoznjaValid, setAkceleracijaDeceleracijaNormalnaVoznjaValid]  = useState(true);

    const akceleracijaDeceleracijaNormalnaVoznjaChanged = (e) => {
        setAkceleracijaDeceleracijaNormalnaVoznja(e.target.value);
    };

    useEffect(() => {
        const num = +akceleracijaDeceleracijaNormalnaVoznja;
        if(num.toString() === "NaN" || num > 4 || num <= 0){
            setAkceleracijaDeceleracijaNormalnaVoznjaValid(false);
        }
        else{
            setAkceleracijaDeceleracijaNormalnaVoznjaValid(true);
        }
    }, [akceleracijaDeceleracijaNormalnaVoznja]);

    function akceleracijaDeceleracijaNormalnaVoznjaOnBlur(e){
        if(akceleracijaDeceleracijaNormalnaVoznjaValid){
            setAkceleracijaDeceleracijaNormalnaVoznja(+(e.target.value));
        }
        else{
            setAkceleracijaDeceleracijaNormalnaVoznja(0.01);
        }
    }

    /* DECELERACIJA KOD HITNOG STOPA */
    const [deceleracijaKodHitnogStopaValid, setDeceleracijaKodHitnogStopaValid]  = useState(true);

    const deceleracijaKodHitnogStopaChanged = (e) => {
        setDeceleracijaKodHitnogStopa(e.target.value);
    };

    useEffect(() => {
        const num = +deceleracijaKodHitnogStopa;
        if(num.toString() === "NaN" || num > 4 || num <= 0){
            setDeceleracijaKodHitnogStopaValid(false);
        }
        else{
            setDeceleracijaKodHitnogStopaValid(true);
        }
    }, [deceleracijaKodHitnogStopa]);

    function deceleracijaKodHitnogStopaOnBlur(e){
        if(deceleracijaKodHitnogStopaValid){
            setDeceleracijaKodHitnogStopa(+(e.target.value));
        }
        else{
            setDeceleracijaKodHitnogStopa(0.01);
        }
    }

    /* BROJ UKLJUČENJA NA SAT */
    const [brojUkljucenjaNaSatValid, setBrojUkljucenjaNaSatValid]  = useState(true);

    const brojUkljucenjaNaSatChanged = (e) => {
        setBrojUkljucenjaNaSat(e.target.value);
    };

    useEffect(() => {
        const num = +brojUkljucenjaNaSat;
        if(num.toString() === "NaN" || num > 1200 || num <= 120){
            setBrojUkljucenjaNaSatValid(false);
        }
        else{
            setBrojUkljucenjaNaSatValid(true);
        }
    }, [brojUkljucenjaNaSat]);

    function brojUkljucenjaNaSatOnBlur(e){
        if(brojUkljucenjaNaSatValid){
            setBrojUkljucenjaNaSat(+(e.target.value));
        }
        else{
            setBrojUkljucenjaNaSat(180);
        }
    }

    return (
        <div style={{display: "block"}}>
            <h5>Dizalo: </h5>
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

            <Dropdown labelWidth="200px" title="Nazivna nosivost (Q)" options={[{key: "630", value: "630"}]} value={nazivnaNosivost} onChange={()=>{}}/>
            <Dropdown labelWidth="200px" title="Broj osoba" options={[{key: "8", value: "8"}]} value={brojOsoba} onChange={()=>{}}/>
            
            <TitledInput labelWidth="200px" title="Nazivna brzina" sDesna="m/s" value={nazivnaBrzina} valid={nazivnaBrzinaValid} onChange={nazivnaBrzinaChanged} onBlur={nazivnaBrzinaOnBlur} tooltip="0 - 1"/>
            <TitledInput labelWidth="200px" title="Akceleracija/deceleracija normalna vožnja (a)" sDesna="m/s2" value={akceleracijaDeceleracijaNormalnaVoznja} valid={akceleracijaDeceleracijaNormalnaVoznjaValid} onChange={akceleracijaDeceleracijaNormalnaVoznjaChanged} onBlur={akceleracijaDeceleracijaNormalnaVoznjaOnBlur} tooltip="0 - 4"/>
            <TitledInput labelWidth="200px" title="Deceleracija kod hitnog stopa (ae)" sDesna="m/s2" value={deceleracijaKodHitnogStopa} valid={deceleracijaKodHitnogStopaValid} onChange={deceleracijaKodHitnogStopaChanged} onBlur={deceleracijaKodHitnogStopaOnBlur} tooltip="0 - 4"/>
            <TitledInput labelWidth="200px" title="Broj uključenja na sat (uh)" value={brojUkljucenjaNaSat} valid={brojUkljucenjaNaSatValid} onChange={brojUkljucenjaNaSatChanged} onBlur={brojUkljucenjaNaSatOnBlur} tooltip="120 - 1200"/>
        </div>
    );
}
  


export default Dizalo;