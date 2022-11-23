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

	//prvi dio
    const [brojNosivihUzadi, setBrojNosivihUzadi]  = useState(7);
    const [tipUzadi, setTipUzadi]  = useState("1");
    const [korisnickoDefiniranje, setKorisnickoDefiniranje]  = useState(false);
    const [promjer, setPromjer]  = useState(6.5);
    const [prekidnaCvrstoca, setPrekidnaCvrstoca]  = useState(24700);
    const [masaPoDuljnomMetru, setMasaPoDuljnomMetru]  = useState(0.148);
    const [youngovModul, setYoungovModul]  = useState(6300);
    
    const [promjenaSmjeraNaStraniKabine, setPromjenaSmjeraNaStraniKabine]  = useState(true);
    const [maxRazmakNaStraniKabine, setMaxRazmakNaStraniKabine]  = useState(1300);
    const [npr_c, setNpr_c]  = useState(1);
    const [promjenaSmjeraNaStraniProtuutega, setPromjenaSmjeraNaStraniProtuutega]  = useState(false);
    const [maxRazmakNaStraniProtuutega, setMaxRazmakNaStraniProtuutega]  = useState(1300);
    const [npr_cw, setNpr_cw]  = useState(0);
    
    //drugio dio
    const [z1, setZ1]  = useState(20000);
    const [z2, setZ2]  = useState(21000);
    const [z3, setZ3]  = useState(0.01);
    const [z4, setZ4]  = useState(0.01);
    const [z5, setZ5]  = useState(20000); // hidraulicni
    const [z6, setZ6]  = useState(3000); // hidraulicni
    const [l1, setL1]  = useState(8200); // hidraulicni

    return (
        <OvjesContext.Provider value={{brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, promjer, prekidnaCvrstoca, masaPoDuljnomMetru, youngovModul, promjenaSmjeraNaStraniKabine, maxRazmakNaStraniKabine, npr_c, promjenaSmjeraNaStraniProtuutega, maxRazmakNaStraniProtuutega, npr_cw, z1, z2, z3, z4, z5, z6, l1}}>
            <OvjesUpdateContext.Provider value={{setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setPromjer, setPrekidnaCvrstoca, setMasaPoDuljnomMetru, setYoungovModul, setPromjenaSmjeraNaStraniKabine, setMaxRazmakNaStraniKabine, setNpr_c, setPromjenaSmjeraNaStraniProtuutega, setMaxRazmakNaStraniProtuutega, setNpr_cw, setZ1, setZ2, setZ3, setZ4, setZ5, setZ6, setL1}}>
                {children}
            </OvjesUpdateContext.Provider>
        </OvjesContext.Provider>
    );
}

export default OvjesProvider;