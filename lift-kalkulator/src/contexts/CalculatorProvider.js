import { useState, createContext, useContext/*, useEffect*/ } from 'react';

const CalculatorContext = createContext();
const CalculatorUpdateContext = createContext();

export function useCalculator(){
    return useContext(CalculatorContext);
}

export function useCalculatorUpdate(){
    return useContext(CalculatorUpdateContext);
}

const CalculatorProvider = ({children}) => {

    // SAVE TO LOCAL STORAGE FOR ACCESS AFTER REFRESH PAGE
    // const localNamjenaDizala = localStorage.getItem('namjenaDizala');
	// const [namjenaDizala, setNamjenaDizala] = useState(localNamjenaDizala? localNamjenaDizala : "osobno");
    // useEffect(()=>{
    //     localStorage.setItem('namjenaDizala', namjenaDizala);
    // },[namjenaDizala]);
    const [namjenaDizala, setNamjenaDizala] = useState("osobno");
	const [ukrcavanjeVilicarem, setUkrcavanjeVilicarem] = useState(false);
	const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    const [vrstaPogona, setVrstaPogona] = useState("bezreduktorski");
    const [smjestajPogona, setSmjestajPogona] = useState("uVoznomOknuNaNosacu");
    const [bezStrojarnice, setBezStrojarnice] = useState(true);
    const [faktorOvjesa, setFaktorOvjesa] = useState("2:1");

    return (
        <CalculatorContext.Provider value={{namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa}}>
            <CalculatorUpdateContext.Provider value={{setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa}}>
                {children}
            </CalculatorUpdateContext.Provider>
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider;
