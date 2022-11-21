import { useState, createContext, useContext } from 'react';

const OvjesContext = createContext();
const OvjesUpdateContext = createContext();

export function useOvjes(){
    return useContext(OvjesContext);
}

export function useOvjesUpdate(){
    return useContext(OvjesUpdateContext);
}

const OvjesProvider = ({children}) => {

	// const [brojPostaja, setBrojPostaja]  = useState(7);
    // const [brojUlaza, setBrojUlaza]  = useState(brojPostaja);
    // const [visinaDizanja, setVisinaDizanja]  = useState(18000);
    // const [tlocrtnaSirina, setTlocrtnaSirina]  = useState(1700);
    // const [tlocrtnaDubina, setTlocrtnaDubina]  = useState(1800);
    // const [dubinaJame, setDubinaJame]  = useState(1200);
    // const [nadvisenje, setNadvisenje]  = useState(3600);
    
    const [brojNosivihUzadi, setBrojNosivihUzadi]  = useState(7);
    const [tipUzadi, setTipUzadi]  = useState("1");
    const [korisnickoDefiniranje, setKorisnickoDefiniranje]  = useState(false);
    const [z1, setZ1]  = useState(20000);
    const [z2, setZ2]  = useState(21000);
    const [z3, setZ3]  = useState(0.01);
    const [z4, setZ4]  = useState(0.01);
    const [z5, setZ5]  = useState(20000); // hidraulicni
    const [z6, setZ6]  = useState(3000); // hidraulicni
    const [l1, setL1]  = useState(8200); // hidraulicni

    return (
        <OvjesContext.Provider value={{brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, z1, z2, z3, z4, z5, z6, l1}}>
            <OvjesUpdateContext.Provider value={{setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setZ1, setZ2, setZ3, setZ4, setZ5, setZ6, setL1}}>
                {children}
            </OvjesUpdateContext.Provider>
        </OvjesContext.Provider>
    );
}

export default OvjesProvider;