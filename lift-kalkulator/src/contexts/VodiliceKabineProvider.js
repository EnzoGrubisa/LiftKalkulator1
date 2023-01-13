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

    //PRVI DIO
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

    // DRUGI DIO
    const [vk_vlacnaCvrstoca, setVk_VlacnaCvrstoca] = useState(370);
    const [vk_modulElasticnosti, setVk_ModulElasticnosti] = useState(210000);
    const [vk_elongacija, setVk_Elongacija] = useState(22);
    
    const [vk_povrsinaPoprecnogPresjeka, setVk_PovrsinaPoprecnogPresjeka] = useState(1052);
    const [vk_masaPoJedinicDuzine, setVk_MasaPoJedinicDuzine] = useState(8.26);
    const [vk_momentOtporaWxx, setVk_MomentOtporaWxx] = useState(9630);
    const [vk_momentOtporaWyy, setVk_MomentOtporaWyy] = useState(6610);
    const [vk_geometrijskaInercijaLxx, setVk_GeometrijskaInercijaLxx] = useState(474300);
    const [vk_geometrijskaInercijaLyy, setVk_GeometrijskaInercijaLyy] = useState(231300);
    const [vk_minRadijusInercijeIxx, setVk_MinRadijusInercijeIxx] = useState(21.20);
    const [vk_minRadijusInercijeIyy, setVk_MinRadijusInercijeIyy] = useState(14.80);
    const [vk_minRadijusInercijeImin, setVk_MinRadijusInercijeImin] = useState(14.80);
    const [vk_vitkost, setVk_Vitkost] = useState(135.14);
    const [vk_omega, setVk_Omega] = useState(3.08);

    // CETVRTI DIO
    const [vk_b1, setVk_b1] = useState(70);
    const [vk_h1, setVk_h1] = useState(70);
    const [vk_h, setVk_h] = useState(0);
    const [vk_k, setVk_k] = useState(8);
    const [vk_n, setVk_n] = useState(0);
    const [vk_c, setVk_c] = useState(8);
    const [vk_p, setVk_p] = useState(8);
    const [vk_g, setVk_g] = useState(0);
    const [vk_f, setVk_f] = useState(0);
    const [vk_e, setVk_e] = useState(20.20);
    const [vk_rs, setVk_rs] = useState(1.50);
    const [vk_m1, setVk_m1] = useState(3);
    const [vk_m2, setVk_m2] = useState(2.95);
    const [vk_t1, setVk_t1] = useState(3.5);
    const [vk_t2, setVk_t2] = useState(3);
    const [vk_l, setVk_l] = useState(0);
    const [vk_d, setVk_d] = useState(13);
    const [vk_d1, setVk_d1] = useState(0);
    const [vk_b3, setVk_b3] = useState(42);
    const [vk_l2, setVk_l2] = useState(105);
    const [vk_l3, setVk_l3] = useState(25);

    return (
        <VodiliceKabineContext.Provider value={{
            
            // PRVI DIO
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
            vk_vrstaOdbojnika,

            // DRUGI DIO
            vk_vlacnaCvrstoca,
            vk_modulElasticnosti,
            vk_elongacija,

            vk_povrsinaPoprecnogPresjeka,
            vk_masaPoJedinicDuzine,
            vk_momentOtporaWxx,
            vk_momentOtporaWyy,
            vk_geometrijskaInercijaLxx,
            vk_geometrijskaInercijaLyy,
            vk_minRadijusInercijeIxx,
            vk_minRadijusInercijeIyy,
            vk_minRadijusInercijeImin,
            vk_vitkost,
            vk_omega,

            // CETVRTI DIO
            vk_b1,
            vk_h1,
            vk_h,
            vk_k,
            vk_n,
            vk_c,
            vk_p,
            vk_g,
            vk_f,
            vk_e,
            vk_rs,
            vk_m1,
            vk_m2,
            vk_t1,
            vk_t2,
            vk_l,
            vk_d,
            vk_d1,
            vk_b3,
            vk_l2,
            vk_l3
        }}>
            <VodiliceKabineUpdateContext.Provider value={{
                
                // PRVI DIO
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
                setVk_VrstaOdbojnika,

                // DRUGI DIO
                setVk_VlacnaCvrstoca,
                setVk_ModulElasticnosti,
                setVk_Elongacija,

                setVk_PovrsinaPoprecnogPresjeka,
                setVk_MasaPoJedinicDuzine,
                setVk_MomentOtporaWxx,
                setVk_MomentOtporaWyy,
                setVk_GeometrijskaInercijaLxx,
                setVk_GeometrijskaInercijaLyy,
                setVk_MinRadijusInercijeIxx,
                setVk_MinRadijusInercijeIyy,
                setVk_MinRadijusInercijeImin,
                setVk_Vitkost,
                setVk_Omega,

                // CETVRTI DIO
                setVk_b1,
                setVk_h1,
                setVk_h,
                setVk_k,
                setVk_n,
                setVk_c,
                setVk_p,
                setVk_g,
                setVk_f,
                setVk_e,
                setVk_rs,
                setVk_m1,
                setVk_m2,
                setVk_t1,
                setVk_t2,
                setVk_l,
                setVk_d,
                setVk_d1,
                setVk_b3,
                setVk_l2,
                setVk_l3
            }}>
                {children}
            </VodiliceKabineUpdateContext.Provider>
        </VodiliceKabineContext.Provider>
    );
}

export default VodiliceKabineProvider;
