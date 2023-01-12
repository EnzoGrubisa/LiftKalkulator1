import { useState, createContext, useContext/*, useEffect*/ } from 'react';

const VodiliceKabineContext = createContext();
const VodiliceKabineUpdateContext = createContext();

export function useVodiliceKabine() {
    return useContext(VodiliceKabineContext);
}

export function useVodiliceKabineUpdate() {
    return useContext(VodiliceKabineUpdateContext);
}

const VodiliceKabineProvider = ({ children }) => {

    const [vk_brojVodilica, setVk_BrojVodilica] = useState(2);
    const [vk_ukupnaDuljinaVodilica, setVk_UkupnaDuljinaVodilica] = useState(23000);
    const [vk_vertikalniRazmakPrihvataVodilica, setVk_VertikalniRazmakPrihvataVodilica] = useState(2000);
    const [vk_masaDodatneOpreme, setVk_MasaDodatneOpreme] = useState(20);
    const [vk_ukupnaDodatnaMasa, setVk_UkupnaDodatnaMasa] = useState(20);
    const [vk_koeficijentDodatnogOpterecenja, setVk_KoeficijentDodatnogOpterecenja] = useState(1);
    const [vk_gubitciUslijedTrenja, setVk_GubitciUslijedTrenja] = useState(0.5);
    const [vk_korisnickoDefiniranjeFRc, setVk_KorisnickoDefiniranjeFRc] = useState(false);
    
    const [vk_vrstaVodilice, setVk_VrstaVodilice] = useState("hladnoVucene");
    const [vk_tipVodilice, setVk_TipVodilice] = useState("tip1");
    const [vk_korisnickoDefiniranjeVodilica, setVk_KorisnickoDefiniranjeVodilica] = useState(false);
    
    const [vk_brojOdbojnika, setVk_BrojOdbojnika] = useState(2);
    const [vk_vrstaOdbojnika, setVk_VrstaOdbojnika] = useState("odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom");


    return (
        <VodiliceKabineContext.Provider value={{
            vk_brojVodilica,
            vk_ukupnaDuljinaVodilica,
            vk_vertikalniRazmakPrihvataVodilica,
            vk_masaDodatneOpreme,
            vk_ukupnaDodatnaMasa,
            vk_koeficijentDodatnogOpterecenja,
            vk_gubitciUslijedTrenja,
            vk_korisnickoDefiniranjeFRc,

            vk_vrstaVodilice,
            vk_tipVodilice,
            vk_korisnickoDefiniranjeVodilica,

            vk_brojOdbojnika,
            vk_vrstaOdbojnika
        }}>
            <VodiliceKabineUpdateContext.Provider value={{
                setVk_BrojVodilica, 
                setVk_UkupnaDuljinaVodilica,
                setVk_VertikalniRazmakPrihvataVodilica,
                setVk_MasaDodatneOpreme,
                setVk_UkupnaDodatnaMasa,
                setVk_KoeficijentDodatnogOpterecenja,
                setVk_GubitciUslijedTrenja,
                setVk_KorisnickoDefiniranjeFRc,

                setVk_VrstaVodilice,
                setVk_TipVodilice,
                setVk_KorisnickoDefiniranjeVodilica,

                setVk_BrojOdbojnika,
                setVk_VrstaOdbojnika
            }}>
                {children}
            </VodiliceKabineUpdateContext.Provider>
        </VodiliceKabineContext.Provider>
    );
}

export default VodiliceKabineProvider;
