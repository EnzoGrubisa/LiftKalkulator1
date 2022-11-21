import { useEffect, useState } from "react";
import CheckBox from "../../../components/CheckBox";

import Dropdown from "../../../components/Dropdown";
import TitledInput from "../../../components/TitledInput";
import { useCalculator, useCalculatorUpdate } from "../../../contexts/CalculatorProvider";
import { useOvjes, useOvjesUpdate } from "../../../contexts/OvjesProvider";

// const OtklonskeUznice = () => {
//     return(
//         <Dropdown options={[]}/>
//     );
// }

const OvjesDrugiDio = () => {

    const { smjestajPogona, faktorOvjesa, vrstaDizala, vrstaPogona, bezStrojarnice } = useCalculator();
    const { setSmjestajPogona, setFaktorOvjesa } = useCalculatorUpdate();

    const { brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, z1, z2, z3, z4, z5, z6, l1 } = useOvjes();
    const { setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setZ1, setZ2, setZ3, setZ4, setZ5, setZ6, setL1 } = useOvjesUpdate();

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
            </>
            : null}


            {vrstaPogona === "reduktorski" ?
            <>
                <br/>OTKLONSKE UŽNICE
            </>
            : null}
        </div>
    );
}

export default OvjesDrugiDio;