import { useState, createContext, useContext } from 'react';

const ProjektContext = createContext();
const ProjektUpdateContext = createContext();

export function useProjekt() {
    return useContext(ProjektContext);
}

export function useProjektUpdate() {
    return useContext(ProjektUpdateContext);
}

const ProjektProvider = ({ children }) => {

    const [projectId, setProjectId] = useState(0);
    const [projectName, setProjectName] = useState("");

    const [tab, setTab] = useState("projekt");

    const [autor, setAutor] = useState("");
    const [adresaGradAutora, setAdresaGradAutora] = useState("");
    const [izradio, setIzradio] = useState("");
    const [suradnik, setSuradnik] = useState("");
    const [datum, setDatum] = useState("");
    const [ugraditelj, setUgraditelj] = useState("");
    const [adresaGradUgraditelja, setAdresaGradUgraditelja] = useState("");

    const [nazivGradevine, setNazivGradevine] = useState("");
    const [lokacijaAdresaGradevine, setLokacijaAdresaGradevine] = useState("");
    const [refOznakaProjekta, setRefOznakaProjekta] = useState("");
    const [tvBrojOznakaDizala, setTvBrojOznakaDizala] = useState("");


    return (
        <ProjektContext.Provider value={{ projectId, projectName, tab, autor, adresaGradAutora, izradio, suradnik, datum, ugraditelj, adresaGradUgraditelja, nazivGradevine, lokacijaAdresaGradevine, refOznakaProjekta, tvBrojOznakaDizala }}>
            <ProjektUpdateContext.Provider value={{ setProjectId, setProjectName, setTab, setAutor, setAdresaGradAutora, setIzradio, setSuradnik, setDatum, setUgraditelj, setAdresaGradUgraditelja, setNazivGradevine, setLokacijaAdresaGradevine, setRefOznakaProjekta, setTvBrojOznakaDizala }}>
                {children}
            </ProjektUpdateContext.Provider>
        </ProjektContext.Provider>
    );
}

export default ProjektProvider;
