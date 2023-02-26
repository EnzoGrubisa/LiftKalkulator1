import { useState, createContext, useContext } from 'react';

const DizaloContext = createContext();
const DizaloUpdateContext = createContext();

export function useDizalo() {
    return useContext(DizaloContext);
}

export function useDizaloUpdate() {
    return useContext(DizaloUpdateContext);
}

const DizaloProvider = ({ children }) => {

    const [namjenaDizala, setNamjenaDizala] = useState("osobno");
    const [ukrcavanjeVilicarem, setUkrcavanjeVilicarem] = useState(false);
    const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    const [vrstaPogona, setVrstaPogona] = useState("bezreduktorski");
    const [smjestajPogona, setSmjestajPogona] = useState("uVoznomOknuNaNosacu");
    const [bezStrojarnice, setBezStrojarnice] = useState(true);
    const [faktorOvjesa, setFaktorOvjesa] = useState("2:1");

    const [nazivnaNosivost, setNazivnaNosivost] = useState(630);
    const [brojOsoba, setBrojOsoba] = useState(8);
    const [nazivnaBrzina, setNazivnaBrzina] = useState(1);
    const [akceleracijaDeceleracijaNormalnaVoznja, setAkceleracijaDeceleracijaNormalnaVoznja] = useState(0.5);
    const [deceleracijaKodHitnogStopa, setDeceleracijaKodHitnogStopa] = useState(0.7);
    const [brojUkljucenjaNaSat, setBrojUkljucenjaNaSat] = useState(180);

    return (
        <DizaloContext.Provider value={{ namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa, nazivnaNosivost, brojOsoba, nazivnaBrzina, akceleracijaDeceleracijaNormalnaVoznja, deceleracijaKodHitnogStopa, brojUkljucenjaNaSat }}>
            <DizaloUpdateContext.Provider value={{ setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa, setNazivnaNosivost, setBrojOsoba, setNazivnaBrzina, setAkceleracijaDeceleracijaNormalnaVoznja, setDeceleracijaKodHitnogStopa, setBrojUkljucenjaNaSat }}>
                {children}
            </DizaloUpdateContext.Provider>
        </DizaloContext.Provider>
    );
}

export default DizaloProvider;
