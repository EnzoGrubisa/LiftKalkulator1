import { useState, createContext, useContext/*, useEffect*/ } from 'react';

const DizaloContext = createContext();
const DizaloUpdateContext = createContext();

export function useDizalo(){
    return useContext(DizaloContext);
}

export function useDizaloUpdate(){
    return useContext(DizaloUpdateContext);
}

const DizaloProvider = ({children}) => {

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
    
    const [nazivnaNosivost, setnazivnaNosivost] = useState(630);
    const [brojOsoba, setBrojOsoba] = useState(8);
    const [nazivnaBrzina, setNazivnaBrzina] = useState(1);
    const [akceleracijaDeceleracijaNormalnaVoznja, setAkceleracijaDeceleracijaNormalnaVoznja] = useState(0.5);
    const [deceleracijaKodHitnogStopa, setDeceleracijaKodHitnogStopa] = useState(0.7);
    const [brojUkljucenjaNaSat, setBrojUkljucenjaNaSat] = useState(180);

    return (
        <DizaloContext.Provider value={{namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa, nazivnaNosivost, brojOsoba, nazivnaBrzina, akceleracijaDeceleracijaNormalnaVoznja, deceleracijaKodHitnogStopa, brojUkljucenjaNaSat}}>
            <DizaloUpdateContext.Provider value={{setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa, setnazivnaNosivost, setBrojOsoba, setNazivnaBrzina, setAkceleracijaDeceleracijaNormalnaVoznja, setDeceleracijaKodHitnogStopa, setBrojUkljucenjaNaSat}}>
                {children}
            </DizaloUpdateContext.Provider>
        </DizaloContext.Provider>
    );
}

export default DizaloProvider;
