import axios from '../api/axios';

import useAuth from '../hooks/useAuth';

import { useProjektUpdate } from '../contexts/ProjektProvider';
import { useDizaloUpdate } from '../contexts/DizaloProvider';
import { useVoznoOknoUpdate } from '../contexts/VoznoOknoProvider';
import { useOvjesUpdate } from '../contexts/OvjesProvider';
import { useVodiliceKabineUpdate } from '../contexts/VodiliceKabineProvider';

import { useNavigate } from 'react-router-dom';

const GET_PROJECT_URL = '/getProject';


const useLoadProject = () => {

    const { auth } = useAuth();

    //--- PROJEKT
    const { setAutor, setAdresaGradAutora, setIzradio, setSuradnik, /*setDatum,*/ setUgraditelj, setAdresaGradUgraditelja } = useProjektUpdate();
    const { setNazivGradevine, setLokacijaAdresaGradevine, setRefOznakaProjekta, setTvBrojOznakaDizala } = useProjektUpdate();

    //--- DIZALO
    const { setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa, setNazivnaNosivost, setBrojOsoba, setNazivnaBrzina, setAkceleracijaDeceleracijaNormalnaVoznja, setDeceleracijaKodHitnogStopa, setBrojUkljucenjaNaSat } = useDizaloUpdate();
    const { setBrojPostaja, setBrojUlaza, setVisinaDizanja, setTlocrtnaSirina, setTlocrtnaDubina, setDubinaJame, setNadvisenje } = useVoznoOknoUpdate();

    //--- OVJES
    const { setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setPromjer, setPrekidnaCvrstoca, setMasaPoDuljnomMetru, setYoungovModul, setPromjenaSmjeraNaStraniKabine, setMaxRazmakNaStraniKabine, setNpr_c, setPromjenaSmjeraNaStraniProtuutega, setMaxRazmakNaStraniProtuutega, setNpr_cw } = useOvjesUpdate();
    const { setZ1, setZ2, setZ3, setZ4, setZ5, setZ6, setL1, setOtklonskeUzniceNaStraniKabine, setBrojIDP_c, setPromjerDDP_c, setMasaMDP_c, setInercijaJDP_c, setOtklonskeUzniceNaStraniUtega, setBrojIDP_cw, setPromjerDDP_cw, setMasaMDP_cw, setInercijaJDP_cw } = useOvjesUpdate();

    //--- VODILICE KABINE
    const {
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

    } = useVodiliceKabineUpdate();

    const navigate = useNavigate();

    const loadFromServer = async (projectId) => {
        try {
            const response = await axios.post(
                GET_PROJECT_URL,
                JSON.stringify({ projectId: projectId }),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );

            if (response?.status === 200) {
                //console.log(response?.data[0]);
                if (response?.data[0]) {
                    setAutor(response?.data[0].autor);
                    setAdresaGradAutora(response?.data[0].adresaGradAutora);
                    setIzradio(response?.data[0].izradio);
                    setSuradnik(response?.data[0].suradnik);
                    //setDatum...!!!!!!!!!!!!!
                    setUgraditelj(response?.data[0].ugraditelj);
                    setAdresaGradUgraditelja(response?.data[0].adresaGradUgraditelja);
                    //---
                    setNazivGradevine(response?.data[0].nazivGradevine);
                    setLokacijaAdresaGradevine(response?.data[0].lokacijaAdresaGradevine);
                    setRefOznakaProjekta(response?.data[0].refOznakaProjekta);
                    setTvBrojOznakaDizala(response?.data[0].tvBrojOznakaDizala);

                    //--- DIZALO
                    setNamjenaDizala(response?.data[0].namjenaDizala);
                    setUkrcavanjeVilicarem(response?.data[0].ukrcavanjeVilicarem?.data[0] === 1 ? true : false); // bit--bool
                    setVrstaDizala(response?.data[0].vrstaDizala);
                    setVrstaPogona(response?.data[0].vrstaPogona);

                    //console.log(response?.data[0].bezStrojarnice?.data[0]);
                    setBezStrojarnice(response?.data[0].bezStrojarnice?.data[0] === 1 ? true : false);
                    setSmjestajPogona(response?.data[0].smjestajPogona);

                    setFaktorOvjesa(response?.data[0].faktorOvjesa);

                    //--- **
                    setNazivnaNosivost(response?.data[0].nazivnaNosivost);
                    setBrojOsoba(response?.data[0].brojOsoba);

                    setNazivnaBrzina(response?.data[0].nazivnaBrzina);
                    setAkceleracijaDeceleracijaNormalnaVoznja(response?.data[0].akceleracijaDeceleracijaNormalnaVoznja);
                    setDeceleracijaKodHitnogStopa(response?.data[0].deceleracijaKodHitnogStopa);
                    setBrojUkljucenjaNaSat(response?.data[0].brojUkljucenjaNaSat);

                    //--- VOZNO OKNO
                    setBrojPostaja(response?.data[0].brojPostaja);
                    setBrojUlaza(response?.data[0].brojUlaza);
                    setVisinaDizanja(response?.data[0].visinaDizanja);
                    setTlocrtnaSirina(response?.data[0].tlocrtnaSirina);
                    setTlocrtnaDubina(response?.data[0].tlocrtnaDubina);
                    setDubinaJame(response?.data[0].dubinaJame);
                    setNadvisenje(response?.data[0].nadvisenje);

                    //--- OVJES prvi dio
                    setBrojNosivihUzadi(response?.data[0].brojNosivihUzadi);
                    setTipUzadi(response?.data[0].tipUzadi);
                    setKorisnickoDefiniranje(response?.data[0].korisnickoDefiniranje?.data[0] === 1 ? true : false);//bool/bit
                    setPromjer(response?.data[0].promjer);
                    setPrekidnaCvrstoca(response?.data[0].prekidnaCvrstoca);
                    setMasaPoDuljnomMetru(response?.data[0].masaPoDuljnomMetru);
                    setYoungovModul(response?.data[0].youngovModul);
                    setPromjenaSmjeraNaStraniKabine(response?.data[0].promjenaSmjeraNaStraniKabine?.data[0] === 1 ? true : false);
                    setMaxRazmakNaStraniKabine(response?.data[0].maxRazmakNaStraniKabine);
                    setNpr_c(response?.data[0].npr_c);
                    setPromjenaSmjeraNaStraniProtuutega(response?.data[0].promjenaSmjeraNaStraniProtuutega?.data[0] === 1 ? true : false);
                    setMaxRazmakNaStraniProtuutega(response?.data[0].maxRazmakNaStraniProtuutega);
                    setNpr_cw(response?.data[0].npr_cw);

                    //--- OVJES drugi dio
                    setZ1(response?.data[0].z1);
                    setZ2(response?.data[0].z2);
                    setZ3(response?.data[0].z3);
                    setZ4(response?.data[0].z4);
                    setZ5(response?.data[0].z5);
                    setZ6(response?.data[0].z6);
                    setL1(response?.data[0].l1);

                    setOtklonskeUzniceNaStraniKabine(response?.data[0].otklonskeUzniceNaStraniKabine?.data[0] === 1 ? true : false);
                    setBrojIDP_c(response?.data[0].brojIDP_c);
                    setPromjerDDP_c(response?.data[0].promjerDDP_c);
                    setMasaMDP_c(response?.data[0].masaMDP_c);
                    setInercijaJDP_c(response?.data[0].inercijaJDP_c);

                    setOtklonskeUzniceNaStraniUtega(response?.data[0].otklonskeUzniceNaStraniUtega?.data[0] === 1 ? true : false);
                    setBrojIDP_cw(response?.data[0].brojIDP_cw);
                    setPromjerDDP_cw(response?.data[0].promjerDDP_cw);
                    setMasaMDP_cw(response?.data[0].masaMDP_cw);
                    setInercijaJDP_cw(response?.data[0].inercijaJDP_cw);

                    //--- VODILICE KABINE 1.dio
                    setVk_BrojVodilica(response?.data[0].vk_brojVodilica);
                    setVk_UkupnaDuljinaVodilica(response?.data[0].vk_ukupnaDuljinaVodilica);
                    setVk_VertikalniRazmakPrihvataVodilica(response?.data[0].vk_vertikalniRazmakPrihvataVodilica);
                    setVk_MasaDodatneOpreme(response?.data[0].vk_masaDodatneOpreme);
                    setVk_UkupnaDodatnaMasa(response?.data[0].vk_ukupnaDodatnaMasa);
                    setVk_KoeficijentDodatnogOpterecenja(response?.data[0].vk_koeficijentDodatnogOpterecenja);
                    setVk_GubitciUslijedTrenja(response?.data[0].vk_gubitciUslijedTrenja);
                    setVk_KorisnickoDefiniranjeFRc(response?.data[0].vk_korisnickoDefiniranjeFRc?.data[0] === 1 ? true : false);

                    setVk_VrstaVodilice(response?.data[0].vk_vrstaVodilice);
                    setVk_TipVodilice(response?.data[0].vk_tipVodilice);
                    setVk_KorisnickoDefiniranjeVodilica(response?.data[0].vk_korisnickoDefiniranjeVodilica?.data[0] === 1 ? true : false);

                    setVk_BrojOdbojnika(response?.data[0].vk_brojOdbojnika);
                    setVk_VrstaOdbojnika(response?.data[0].vk_vrstaOdbojnika);

                    //--- VODILICE KABINE 2.dio
                    setVk_VlacnaCvrstoca(response?.data[0].vk_vlacnaCvrstoca);
                    setVk_ModulElasticnosti(response?.data[0].vk_modulElasticnosti);
                    setVk_Elongacija(response?.data[0].vk_elongacija);

                    setVk_PovrsinaPoprecnogPresjeka(response?.data[0].vk_povrsinaPoprecnogPresjeka);
                    setVk_MasaPoJedinicDuzine(response?.data[0].vk_masaPoJedinicDuzine);
                    setVk_MomentOtporaWxx(response?.data[0].vk_momentOtporaWxx);
                    setVk_MomentOtporaWyy(response?.data[0].vk_momentOtporaWyy);
                    setVk_GeometrijskaInercijaLxx(response?.data[0].vk_geometrijskaInercijaLxx);
                    setVk_GeometrijskaInercijaLyy(response?.data[0].vk_geometrijskaInercijaLyy);
                    setVk_MinRadijusInercijeIxx(response?.data[0].vk_minRadijusInercijeIxx);
                    setVk_MinRadijusInercijeIyy(response?.data[0].vk_minRadijusInercijeIyy);
                    setVk_MinRadijusInercijeImin(response?.data[0].vk_minRadijusInercijeImin);
                    setVk_Vitkost(response?.data[0].vk_vitkost);
                    setVk_Omega(response?.data[0].vk_omega);

                    //--- VODILICE KABINE 4.dio
                    setVk_b1(response?.data[0].vk_b1);
                    setVk_h1(response?.data[0].vk_h1);
                    setVk_h(response?.data[0].vk_h);
                    setVk_k(response?.data[0].vk_k);
                    setVk_n(response?.data[0].vk_n);
                    setVk_c(response?.data[0].vk_c);
                    setVk_p(response?.data[0].vk_p);
                    setVk_g(response?.data[0].vk_g);
                    setVk_f(response?.data[0].vk_f);
                    setVk_e(response?.data[0].vk_e);
                    setVk_rs(response?.data[0].vk_rs);
                    setVk_m1(response?.data[0].vk_m1);
                    setVk_m2(response?.data[0].vk_m2);
                    setVk_t1(response?.data[0].vk_t1);
                    setVk_t2(response?.data[0].vk_t2);
                    setVk_l(response?.data[0].vk_l);
                    setVk_d(response?.data[0].vk_d);
                    setVk_d1(response?.data[0].vk_d1);
                    setVk_b3(response?.data[0].vk_b3);
                    setVk_l2(response?.data[0].vk_l2);
                    setVk_l3(response?.data[0].vk_l3);
                }

            }
        } catch (err) {
            // ...
            console.log("catched error: " + err);
            navigate("/home", { replace: true });
        }
    }
    
    const loadFromLocalStorage = async (localDataJson) => {
        setAutor(localDataJson.autor);
        setAdresaGradAutora(localDataJson.adresaGradAutora);
        setIzradio(localDataJson.izradio);
        setSuradnik(localDataJson.suradnik);
        //setDatum...!!!!!!!!!!!!!
        setUgraditelj(localDataJson.ugraditelj);
        setAdresaGradUgraditelja(localDataJson.adresaGradUgraditelja);
        //---
        setNazivGradevine(localDataJson.nazivGradevine);
        setLokacijaAdresaGradevine(localDataJson.lokacijaAdresaGradevine);
        setRefOznakaProjekta(localDataJson.refOznakaProjekta);
        setTvBrojOznakaDizala(localDataJson.tvBrojOznakaDizala);

        //--- DIZALO
        setNamjenaDizala(localDataJson.namjenaDizala);
        setUkrcavanjeVilicarem(localDataJson.ukrcavanjeVilicarem); // bit--bool
        setVrstaDizala(localDataJson.vrstaDizala);
        setVrstaPogona(localDataJson.vrstaPogona);

        //console.log(localDataJson.bezStrojarnice?.data[0]);
        setBezStrojarnice(localDataJson.bezStrojarnice);
        setSmjestajPogona(localDataJson.smjestajPogona);

        setFaktorOvjesa(localDataJson.faktorOvjesa);

        //--- **
        setNazivnaNosivost(localDataJson.nazivnaNosivost);
        setBrojOsoba(localDataJson.brojOsoba);

        setNazivnaBrzina(localDataJson.nazivnaBrzina);
        setAkceleracijaDeceleracijaNormalnaVoznja(localDataJson.akceleracijaDeceleracijaNormalnaVoznja);
        setDeceleracijaKodHitnogStopa(localDataJson.deceleracijaKodHitnogStopa);
        setBrojUkljucenjaNaSat(localDataJson.brojUkljucenjaNaSat);

        //--- VOZNO OKNO
        setBrojPostaja(localDataJson.brojPostaja);
        setBrojUlaza(localDataJson.brojUlaza);
        setVisinaDizanja(localDataJson.visinaDizanja);
        setTlocrtnaSirina(localDataJson.tlocrtnaSirina);
        setTlocrtnaDubina(localDataJson.tlocrtnaDubina);
        setDubinaJame(localDataJson.dubinaJame);
        setNadvisenje(localDataJson.nadvisenje);

        //--- OVJES prvi dio
        setBrojNosivihUzadi(localDataJson.brojNosivihUzadi);
        setTipUzadi(localDataJson.tipUzadi);
        setKorisnickoDefiniranje(localDataJson.korisnickoDefiniranje);//bool/bit
        setPromjer(localDataJson.promjer);
        setPrekidnaCvrstoca(localDataJson.prekidnaCvrstoca);
        setMasaPoDuljnomMetru(localDataJson.masaPoDuljnomMetru);
        setYoungovModul(localDataJson.youngovModul);
        setPromjenaSmjeraNaStraniKabine(localDataJson.promjenaSmjeraNaStraniKabine);
        setMaxRazmakNaStraniKabine(localDataJson.maxRazmakNaStraniKabine);
        setNpr_c(localDataJson.npr_c);
        setPromjenaSmjeraNaStraniProtuutega(localDataJson.promjenaSmjeraNaStraniProtuutega);
        setMaxRazmakNaStraniProtuutega(localDataJson.maxRazmakNaStraniProtuutega);
        setNpr_cw(localDataJson.npr_cw);

        //--- OVJES drugi dio
        setZ1(localDataJson.z1);
        setZ2(localDataJson.z2);
        setZ3(localDataJson.z3);
        setZ4(localDataJson.z4);
        setZ5(localDataJson.z5);
        setZ6(localDataJson.z6);
        setL1(localDataJson.l1);

        setOtklonskeUzniceNaStraniKabine(localDataJson.otklonskeUzniceNaStraniKabine);
        setBrojIDP_c(localDataJson.brojIDP_c);
        setPromjerDDP_c(localDataJson.promjerDDP_c);
        setMasaMDP_c(localDataJson.masaMDP_c);
        setInercijaJDP_c(localDataJson.inercijaJDP_c);

        setOtklonskeUzniceNaStraniUtega(localDataJson.otklonskeUzniceNaStraniUtega);
        setBrojIDP_cw(localDataJson.brojIDP_cw);
        setPromjerDDP_cw(localDataJson.promjerDDP_cw);
        setMasaMDP_cw(localDataJson.masaMDP_cw);
        setInercijaJDP_cw(localDataJson.inercijaJDP_cw);

        //--- VODILICE KABINE 1.dio
        setVk_BrojVodilica(localDataJson.vk_brojVodilica);
        setVk_UkupnaDuljinaVodilica(localDataJson.vk_ukupnaDuljinaVodilica);
        setVk_VertikalniRazmakPrihvataVodilica(localDataJson.vk_vertikalniRazmakPrihvataVodilica);
        setVk_MasaDodatneOpreme(localDataJson.vk_masaDodatneOpreme);
        setVk_UkupnaDodatnaMasa(localDataJson.vk_ukupnaDodatnaMasa);
        setVk_KoeficijentDodatnogOpterecenja(localDataJson.vk_koeficijentDodatnogOpterecenja);
        setVk_GubitciUslijedTrenja(localDataJson.vk_gubitciUslijedTrenja);
        setVk_KorisnickoDefiniranjeFRc(localDataJson.vk_korisnickoDefiniranjeFRc);

        setVk_VrstaVodilice(localDataJson.vk_vrstaVodilice);
        setVk_TipVodilice(localDataJson.vk_tipVodilice);
        setVk_KorisnickoDefiniranjeVodilica(localDataJson.vk_korisnickoDefiniranjeVodilica);

        setVk_BrojOdbojnika(localDataJson.vk_brojOdbojnika);
        setVk_VrstaOdbojnika(localDataJson.vk_vrstaOdbojnika);

        //--- VODILICE KABINE 2.dio
        setVk_VlacnaCvrstoca(localDataJson.vk_vlacnaCvrstoca);
        setVk_ModulElasticnosti(localDataJson.vk_modulElasticnosti);
        setVk_Elongacija(localDataJson.vk_elongacija);

        setVk_PovrsinaPoprecnogPresjeka(localDataJson.vk_povrsinaPoprecnogPresjeka);
        setVk_MasaPoJedinicDuzine(localDataJson.vk_masaPoJedinicDuzine);
        setVk_MomentOtporaWxx(localDataJson.vk_momentOtporaWxx);
        setVk_MomentOtporaWyy(localDataJson.vk_momentOtporaWyy);
        setVk_GeometrijskaInercijaLxx(localDataJson.vk_geometrijskaInercijaLxx);
        setVk_GeometrijskaInercijaLyy(localDataJson.vk_geometrijskaInercijaLyy);
        setVk_MinRadijusInercijeIxx(localDataJson.vk_minRadijusInercijeIxx);
        setVk_MinRadijusInercijeIyy(localDataJson.vk_minRadijusInercijeIyy);
        setVk_MinRadijusInercijeImin(localDataJson.vk_minRadijusInercijeImin);
        setVk_Vitkost(localDataJson.vk_vitkost);
        setVk_Omega(localDataJson.vk_omega);

        //--- VODILICE KABINE 4.dio
        setVk_b1(localDataJson.vk_b1);
        setVk_h1(localDataJson.vk_h1);
        setVk_h(localDataJson.vk_h);
        setVk_k(localDataJson.vk_k);
        setVk_n(localDataJson.vk_n);
        setVk_c(localDataJson.vk_c);
        setVk_p(localDataJson.vk_p);
        setVk_g(localDataJson.vk_g);
        setVk_f(localDataJson.vk_f);
        setVk_e(localDataJson.vk_e);
        setVk_rs(localDataJson.vk_rs);
        setVk_m1(localDataJson.vk_m1);
        setVk_m2(localDataJson.vk_m2);
        setVk_t1(localDataJson.vk_t1);
        setVk_t2(localDataJson.vk_t2);
        setVk_l(localDataJson.vk_l);
        setVk_d(localDataJson.vk_d);
        setVk_d1(localDataJson.vk_d1);
        setVk_b3(localDataJson.vk_b3);
        setVk_l2(localDataJson.vk_l2);
        setVk_l3(localDataJson.vk_l3);
    }

    const loadProjectById = (projectId) => {
        //console.log("loading data");

        const localDataString = localStorage.getItem('autosavedAllData');
        const localDataJson = JSON.parse(localDataString);
        if(localDataJson && localDataJson.projectId === projectId && localDataJson.username === auth.username){
            loadFromLocalStorage(localDataJson);
        }
        else{
            loadFromServer(projectId);
        }

        
    }

    return loadProjectById;
}

export default useLoadProject;