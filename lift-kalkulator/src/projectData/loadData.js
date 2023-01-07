import axios from '../api/axios';

import { useProjektUpdate } from '../contexts/ProjektProvider';
import { useDizaloUpdate } from '../contexts/DizaloProvider';
import { useVoznoOknoUpdate } from '../contexts/VoznoOknoProvider';
import { useOvjesUpdate } from '../contexts/OvjesProvider';

import { useNavigate } from 'react-router-dom';

const GET_PROJECT_URL = '/getProject';


const useLoadProject = () => {
    
    //--- PROJEKT
    const { setAutor, setAdresaGradAutora, setIzradio, setSuradnik, /*setDatum,*/ setUgraditelj, setAdresaGradUgraditelja } = useProjektUpdate();
    const { setNazivGradevine, setLokacijaAdresaGradevine, setRefOznakaProjekta, setTvBrojOznakaDizala } = useProjektUpdate();

    //--- DIZALO
    const { setNamjenaDizala, setUkrcavanjeVilicarem, setVrstaDizala, setVrstaPogona, setSmjestajPogona, setBezStrojarnice, setFaktorOvjesa, setNazivnaNosivost, setBrojOsoba, setNazivnaBrzina, setAkceleracijaDeceleracijaNormalnaVoznja, setDeceleracijaKodHitnogStopa, setBrojUkljucenjaNaSat } = useDizaloUpdate(); 
    const { setBrojPostaja, setBrojUlaza, setVisinaDizanja, setTlocrtnaSirina, setTlocrtnaDubina, setDubinaJame, setNadvisenje } = useVoznoOknoUpdate(); 

    //--- OVJES
    const { setBrojNosivihUzadi, setTipUzadi, setKorisnickoDefiniranje, setPromjer, setPrekidnaCvrstoca, setMasaPoDuljnomMetru, setYoungovModul, setPromjenaSmjeraNaStraniKabine, setMaxRazmakNaStraniKabine, setNpr_c, setPromjenaSmjeraNaStraniProtuutega, setMaxRazmakNaStraniProtuutega, setNpr_cw } = useOvjesUpdate();
    const { setZ1, setZ2, setZ3, setZ4, setZ5, setZ6, setL1, setOtklonskeUzniceNaStraniKabine, setBrojIDP_c, setPromjerDDP_c, setMasaMDP_c, setInercijaJDP_c, setOtklonskeUzniceNaStraniUtega, setBrojIDP_cw, setPromjerDDP_cw, setMasaMDP_cw, setInercijaJDP_cw } = useOvjesUpdate();

    const navigate = useNavigate();
    
    const loadProjectById = async (projectId) => {
        //console.log("loading data");
    
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
                if(response?.data[0]){
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
                    setUkrcavanjeVilicarem(response?.data[0].ukrcavanjeVilicarem?.data[0] === 1? true : false); // bit--bool
                    setVrstaDizala(response?.data[0].vrstaDizala);
                    setVrstaPogona(response?.data[0].vrstaPogona);
    
                    //console.log(response?.data[0].bezStrojarnice?.data[0]);
                    setBezStrojarnice(response?.data[0].bezStrojarnice?.data[0] === 1? true : false);
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
                    setKorisnickoDefiniranje(response?.data[0].korisnickoDefiniranje?.data[0] === 1? true : false);//bool/bit
                    setPromjer(response?.data[0].promjer);
                    setPrekidnaCvrstoca(response?.data[0].prekidnaCvrstoca);
                    setMasaPoDuljnomMetru(response?.data[0].masaPoDuljnomMetru);
                    setYoungovModul(response?.data[0].youngovModul);
                    setPromjenaSmjeraNaStraniKabine(response?.data[0].promjenaSmjeraNaStraniKabine?.data[0] === 1? true : false);
                    setMaxRazmakNaStraniKabine(response?.data[0].maxRazmakNaStraniKabine);
                    setNpr_c(response?.data[0].npr_c);
                    setPromjenaSmjeraNaStraniProtuutega(response?.data[0].promjenaSmjeraNaStraniProtuutega?.data[0] === 1? true : false);
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

                    setOtklonskeUzniceNaStraniKabine(response?.data[0].otklonskeUzniceNaStraniKabine?.data[0] === 1? true : false);
                    setBrojIDP_c(response?.data[0].brojIDP_c);
                    setPromjerDDP_c(response?.data[0].promjerDDP_c);
                    setMasaMDP_c(response?.data[0].masaMDP_c);
                    setInercijaJDP_c(response?.data[0].inercijaJDP_c);
                    
                    setOtklonskeUzniceNaStraniUtega(response?.data[0].otklonskeUzniceNaStraniUtega?.data[0] === 1? true : false);
                    setBrojIDP_cw(response?.data[0].brojIDP_cw);
                    setPromjerDDP_cw(response?.data[0].promjerDDP_cw);
                    setMasaMDP_cw(response?.data[0].masaMDP_cw);
                    setInercijaJDP_cw(response?.data[0].inercijaJDP_cw);
                }
    
            }
        } catch (err) {
            // ...
            console.log("catched error: " + err);
            navigate("/home", {replace: true});
        }
    }

    return loadProjectById;
}

export default useLoadProject;