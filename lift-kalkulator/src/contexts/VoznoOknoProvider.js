import { useState, createContext, useContext } from 'react';

const VoznoOknoContext = createContext();
const VoznoOknoUpdateContext = createContext();

export function useVoznoOkno(){
    return useContext(VoznoOknoContext);
}

export function useVoznoOknoUpdate(){
    return useContext(VoznoOknoUpdateContext);
}

const VoznoOknoProvider = ({children}) => {

	// const [namjenaDizala, setNamjenaDizala] = useState("osobno");
	// const [ukrcavanjeVilicarem, setUkrcavanjeVilicarem] = useState(false);
	// const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    // const [vrstaPogona, setVrstaPogona] = useState("bezreduktorski");
    // const [smjestajPogona, setSmjestajPogona] = useState("uVoznomOknuNaNosacu");
    // const [bezStrojarnice, setBezStrojarnice] = useState(true);
    // const [faktorOvjesa, setFaktorOvjesa] = useState("2:1");

    const [brojPostaja, setBrojPostaja]  = useState(7);
    const [brojUlaza, setBrojUlaza]  = useState(brojPostaja);
    const [visinaDizanja, setVisinaDizanja]  = useState(18000);
    const [tlocrtnaSirina, setTlocrtnaSirina]  = useState(1700);
    const [tlocrtnaDubina, setTlocrtnaDubina]  = useState(1800);
    const [dubinaJame, setDubinaJame]  = useState(1200);
    const [nadvisenje, setNadvisenje]  = useState(3600);

    return (
        <VoznoOknoContext.Provider value={{brojPostaja, brojUlaza, visinaDizanja, tlocrtnaSirina, tlocrtnaDubina, dubinaJame, nadvisenje}}>
            <VoznoOknoUpdateContext.Provider value={{setBrojPostaja, setBrojUlaza, setVisinaDizanja, setTlocrtnaSirina, setTlocrtnaDubina, setDubinaJame, setNadvisenje}}>
                {children}
            </VoznoOknoUpdateContext.Provider>
        </VoznoOknoContext.Provider>
    );
}

export default VoznoOknoProvider;