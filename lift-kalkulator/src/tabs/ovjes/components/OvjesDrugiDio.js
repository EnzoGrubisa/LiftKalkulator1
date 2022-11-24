import { useEffect, useState } from "react";

import CheckBox from "../../../components/CheckBox";
import TitledInput from "../../../components/TitledInput";

import { useDizalo } from "../../../contexts/DizaloProvider";
import { useOvjes, useOvjesUpdate } from "../../../contexts/OvjesProvider";

const OvjesDrugiDio = () => {

    const { smjestajPogona, vrstaDizala, vrstaPogona } = useDizalo();

    const { z1, z2, z3, z4, z5, z6, l1, otklonskeUzniceNaStraniKabine, brojIDP_c, promjerDDP_c, masaMDP_c, inercijaJDP_c, otklonskeUzniceNaStraniUtega, brojIDP_cw, promjerDDP_cw, masaMDP_cw, inercijaJDP_cw } = useOvjes();
    const { setZ1, setZ2, setZ3, setZ4, setZ5, setZ6/*, setL1*/, setOtklonskeUzniceNaStraniKabine, setBrojIDP_c, setPromjerDDP_c, setMasaMDP_c, setInercijaJDP_c, setOtklonskeUzniceNaStraniUtega, setBrojIDP_cw, setPromjerDDP_cw, setMasaMDP_cw, setInercijaJDP_cw } = useOvjesUpdate();

    /* Z1 */
    const [validZ1, setValidZ1]  = useState(true);
    
    function z1Changed(e){
        setZ1(e.target.value);
    }

    useEffect(() => {
        const num = +z1;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidZ1(false);
        }
        else{
            setValidZ1(true);
        }
    }, [z1]);

    function z1OnBlur(e){
        if(validZ1){
            setZ1(+(e.target.value));
        }
        else{
            setZ1(0.01);
        }
    }
    
    /* Z2 */
    const [validZ2, setValidZ2]  = useState(true);
    
    function z2Changed(e){
        setZ2(e.target.value);
    }

    useEffect(() => {
        const num = +z2;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidZ2(false);
        }
        else{
            setValidZ2(true);
        }
    }, [z2]);

    function z2OnBlur(e){
        if(validZ2){
            setZ2(+(e.target.value));
        }
        else{
            setZ2(0.01);
        }
    }
    
    /* Z3 */
    const [validZ3, setValidZ3]  = useState(true);
    
    function z3Changed(e){
        setZ3(e.target.value);
    }

    useEffect(() => {
        const num = +z3;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidZ3(false);
        }
        else{
            setValidZ3(true);
        }
    }, [z3]);

    function z3OnBlur(e){
        if(validZ3){
            setZ3(+(e.target.value));
        }
        else{
            setZ3(0.01);
        }
    }
    
    /* Z4 */
    const [validZ4, setValidZ4]  = useState(true);
    
    function z4Changed(e){
        setZ4(e.target.value);
    }

    useEffect(() => {
        const num = +z4;
        if(num.toString() === "NaN" || num > 1000000 || num <= 0){
            setValidZ4(false);
        }
        else{
            setValidZ4(true);
        }
    }, [z4]);

    function z4OnBlur(e){
        if(validZ4){
            setZ4(+(e.target.value));
        }
        else{
            setZ4(0.01);
        }
    }

    /* Z5 */
    const [validZ5, setValidZ5]  = useState(true);
    
    function z5Changed(e){
        setZ5(e.target.value);
    }

    useEffect(() => {
        const num = +z5;
        if(num.toString() === "NaN" || num > 300000 || num <= 0){
            setValidZ5(false);
        }
        else{
            setValidZ5(true);
        }
    }, [z5]);

    function z5OnBlur(e){
        if(validZ5){
            setZ5(+(e.target.value));
        }
        else{
            setZ5(0.01);
        }
    }

    /* Z6 */
    const [validZ6, setValidZ6]  = useState(true);
    
    function z6Changed(e){
        setZ6(e.target.value);
    }

    useEffect(() => {
        const num = +z6;
        if(num.toString() === "NaN" || num > 300000 || num <= 0){
            setValidZ6(false);
        }
        else{
            setValidZ6(true);
        }
    }, [z6]);

    function z6OnBlur(e){
        if(validZ6){
            setZ6(+(e.target.value));
        }
        else{
            setZ6(0.01);
        }
    }

    /* NA STRANI KABINE */
    const otklonskeUzniceNaStraniKabineCBChanged = (e) => {
        setOtklonskeUzniceNaStraniKabine(e.target.checked);
    };

    /* NA STRANI KABINE */
    const otklonskeUzniceNaStraniUtegaCBChanged = (e) => {
        setOtklonskeUzniceNaStraniUtega(e.target.checked);
    };

    /* broj iDP_c */
    const [brojIDP_cValid, setBrojIDP_cValid]  = useState(true);
    
    function brojIDP_cChanged(e){
        setBrojIDP_c(e.target.value);
    }

    useEffect(() => {
        const num = +brojIDP_c;
        if(num.toString() === "NaN" || num%1 !== 0 || num > 5 || num < 0){
            setBrojIDP_cValid(false);
        }
        else{
            setBrojIDP_cValid(true);
        }
    }, [brojIDP_c]);

    function brojIDP_cOnBlur(e){
        if(brojIDP_cValid){
            setBrojIDP_c(+(e.target.value));
        }
        else{
            setBrojIDP_c(0);
        }
    }

    /* broj iDP_cw */
    const [brojIDP_cwValid, setBrojIDP_cwValid]  = useState(true);
    
    function brojIDP_cwChanged(e){
        setBrojIDP_cw(e.target.value);
    }

    useEffect(() => {
        const num = +brojIDP_cw;
        if(num.toString() === "NaN" || num%1 !== 0 || num > 5 || num < 0){
            setBrojIDP_cwValid(false);
        }
        else{
            setBrojIDP_cwValid(true);
        }
    }, [brojIDP_cw]);

    function brojIDP_cwOnBlur(e){
        if(brojIDP_cwValid){
            setBrojIDP_cw(+(e.target.value));
        }
        else{
            setBrojIDP_cw(0);
        }
    }

    /* promjer dDP_c */
    const [promjerDDP_cValid, setPromjerDDP_cValid]  = useState(true);
    
    function promjerDDP_cChanged(e){
        setPromjerDDP_c(e.target.value);
    }

    useEffect(() => {
        const num = +promjerDDP_c;
        if(num.toString() === "NaN" || num > 2000 || num <= 0){
            setPromjerDDP_cValid(false);
        }
        else{
            setPromjerDDP_cValid(true);
        }
    }, [promjerDDP_c]);

    function promjerDDP_cOnBlur(e){
        if(promjerDDP_cValid){
            setPromjerDDP_c(+(e.target.value));
        }
        else{
            setPromjerDDP_c(0.01);
        }
    }

    /* promjer dDP_cw */
    const [promjerDDP_cwValid, setPromjerDDP_cwValid]  = useState(true);
    
    function promjerDDP_cwChanged(e){
        setPromjerDDP_cw(e.target.value);
    }

    useEffect(() => {
        const num = +promjerDDP_cw;
        if(num.toString() === "NaN" || num > 2000 || num <= 0){
            setPromjerDDP_cwValid(false);
        }
        else{
            setPromjerDDP_cwValid(true);
        }
    }, [promjerDDP_cw]);

    function promjerDDP_cwOnBlur(e){
        if(promjerDDP_cwValid){
            setPromjerDDP_cw(+(e.target.value));
        }
        else{
            setPromjerDDP_cw(0.01);
        }
    }

    /* masa mDP_c */
    const [masaMDP_cValid, setMasaMDP_cValid]  = useState(true);
    
    function masaMDP_cChanged(e){
        setMasaMDP_c(e.target.value);
    }

    useEffect(() => {
        const num = +masaMDP_c;
        if(num.toString() === "NaN" || num > 300 || num <= 0){
            setMasaMDP_cValid(false);
        }
        else{
            setMasaMDP_cValid(true);
        }
    }, [masaMDP_c]);

    function masaMDP_cOnBlur(e){
        if(masaMDP_cValid){
            setMasaMDP_c(+(e.target.value));
        }
        else{
            setMasaMDP_c(0.01);
        }
    }

    /* masa mDP_cw */
    const [masaMDP_cwValid, setMasaMDP_cwValid]  = useState(true);
    
    function masaMDP_cwChanged(e){
        setMasaMDP_cw(e.target.value);
    }

    useEffect(() => {
        const num = +masaMDP_cw;
        if(num.toString() === "NaN" || num > 300 || num <= 0){
            setMasaMDP_cwValid(false);
        }
        else{
            setMasaMDP_cwValid(true);
        }
    }, [masaMDP_cw]);

    function masaMDP_cwOnBlur(e){
        if(masaMDP_cwValid){
            setMasaMDP_cw(+(e.target.value));
        }
        else{
            setMasaMDP_cw(0.01);
        }
    }

    /* inercija JDP_c */
    const [inercijaJDP_cValid, setInercijaJDP_cValid]  = useState(true);
    
    function inercijaJDP_cChanged(e){
        setInercijaJDP_c(e.target.value);
    }

    useEffect(() => {
        const num = +inercijaJDP_c;
        if(num.toString() === "NaN" || num > 200 || num <= 0){
            setInercijaJDP_cValid(false);
        }
        else{
            setInercijaJDP_cValid(true);
        }
    }, [inercijaJDP_c]);

    function inercijaJDP_cOnBlur(e){
        if(inercijaJDP_cValid){
            setInercijaJDP_c(+(e.target.value));
        }
        else{
            setInercijaJDP_c(0.01);
        }
    }

    /* inercija JDP_cw */
    const [inercijaJDP_cwValid, setInercijaJDP_cwValid]  = useState(true);
    
    function inercijaJDP_cwChanged(e){
        setInercijaJDP_cw(e.target.value);
    }

    useEffect(() => {
        const num = +inercijaJDP_cw;
        if(num.toString() === "NaN" || num > 200 || num <= 0){
            setInercijaJDP_cwValid(false);
        }
        else{
            setInercijaJDP_cwValid(true);
        }
    }, [inercijaJDP_cw]);

    function inercijaJDP_cwOnBlur(e){
        if(inercijaJDP_cwValid){
            setInercijaJDP_cw(+(e.target.value));
        }
        else{
            setInercijaJDP_cw(0.01);
        }
    }

    return(
        <div>
            {vrstaDizala === "elektricno" ?
            <>
                <TitledInput labelWidth="50px" inputWidth="80px" title="z1" sDesna="mm"    value={z1} valid={validZ1} onChange={z1Changed} onBlur={z1OnBlur} tooltip="0 - 1000000"/>    
                <TitledInput labelWidth="50px" inputWidth="80px" title="z2" sDesna="mm"    value={z2} valid={validZ2} onChange={z2Changed} onBlur={z2OnBlur} tooltip="0 - 1000000"/>
                {smjestajPogona === "naDnuVoznogOkna" || smjestajPogona === "uStrojarniciIspodVoznogOkna" || smjestajPogona === "uStrojarniciPoredVoznogOkna" ?
                <>
                    <TitledInput labelWidth="50px" inputWidth="80px" title="z3" sDesna="mm"    value={z3} valid={validZ3} onChange={z3Changed} onBlur={z3OnBlur} tooltip="0 - 1000000"/>    
                    <TitledInput labelWidth="50px" inputWidth="80px" title="z4" sDesna="mm"    value={z4} valid={validZ4} onChange={z4Changed} onBlur={z4OnBlur} tooltip="0 - 1000000"/>    
                </>
                : null}
                <br/>
            </>
            : null}
            
            
            {vrstaDizala === "hidraulicno" ?
            <>
                {vrstaPogona === "indirektni" ?
                <>
                    <TitledInput labelWidth="50px" inputWidth="80px" title="z5" sDesna="mm"    value={z5} valid={validZ5} onChange={z5Changed} onBlur={z5OnBlur} tooltip="0 - 300000"/>    
                    <TitledInput labelWidth="50px" inputWidth="80px" title="z6" sDesna="mm"    value={z6} valid={validZ6} onChange={z6Changed} onBlur={z6OnBlur} tooltip="0 - 300000"/>    
                </>
                : null}
                <TitledInput labelWidth="50px" inputWidth="80px" title="l1" sDesna="mm" disabled value={l1} valid/>   
                <br/> 
            </>
            : null}


            {vrstaPogona === "reduktorski" ?
            <>
                <h5>Otklonke užnice - užnice za skretanje: </h5>
                
                <CheckBox title="na strani kabine" id="naStraniKabineCheckBox" onChange={otklonskeUzniceNaStraniKabineCBChanged} checked={otklonskeUzniceNaStraniKabine}/>
                {otklonskeUzniceNaStraniKabine?
                <>
                    <TitledInput labelWidth="150px" title="Broj (iDP_c)" inputWidth="100px"        value={brojIDP_c} onChange={brojIDP_cChanged} valid={brojIDP_cValid} onBlur={brojIDP_cOnBlur} tooltip="0 - 5"/>
                    <TitledInput labelWidth="150px" title="Promjer (dDP_c)" inputWidth="100px"     value={promjerDDP_c} onChange={promjerDDP_cChanged} valid={promjerDDP_cValid} onBlur={promjerDDP_cOnBlur} tooltip="0 - 2000"/>
                    <TitledInput labelWidth="150px" title="Masa (mDP_c)" inputWidth="100px"        value={masaMDP_c} onChange={masaMDP_cChanged} valid={masaMDP_cValid} onBlur={masaMDP_cOnBlur} tooltip="0 - 300"/>
                    <TitledInput labelWidth="150px" title="Inercija (JDP_c)" inputWidth="100px"    value={inercijaJDP_c} onChange={inercijaJDP_cChanged} valid={inercijaJDP_cValid} onBlur={inercijaJDP_cOnBlur} tooltip="0 - 200"/>
                </>
                : null}


                <CheckBox title="na strani utega" id="naStraniUtegaCheckBox" onChange={otklonskeUzniceNaStraniUtegaCBChanged} checked={otklonskeUzniceNaStraniUtega}/>
                {otklonskeUzniceNaStraniUtega?
                <>
                    <TitledInput labelWidth="150px" title="Broj (iDP_cw)" inputWidth="100px"       value={brojIDP_cw} onChange={brojIDP_cwChanged} valid={brojIDP_cwValid} onBlur={brojIDP_cwOnBlur} tooltip="0 - 5"/>
                    <TitledInput labelWidth="150px" title="Promjer (dDP_cw)" inputWidth="100px"    value={promjerDDP_cw} onChange={promjerDDP_cwChanged} valid={promjerDDP_cwValid} onBlur={promjerDDP_cwOnBlur} tooltip="0 - 2000"/>
                    <TitledInput labelWidth="150px" title="Masa (mDP_cw)" inputWidth="100px"       value={masaMDP_cw} onChange={masaMDP_cwChanged} valid={masaMDP_cwValid} onBlur={masaMDP_cwOnBlur} tooltip="0 - 300"/>
                    <TitledInput labelWidth="150px" title="Inercija (JDP_cw)" inputWidth="100px"   value={inercijaJDP_cw} onChange={inercijaJDP_cwChanged} valid={inercijaJDP_cwValid} onBlur={inercijaJDP_cwOnBlur} tooltip="0 - 200"/>
                </>
                : null}
            </>
            : null}
        </div>
    );
}

export default OvjesDrugiDio;