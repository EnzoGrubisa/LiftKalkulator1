import axios from '../api/axios';

import { useProjekt } from '../contexts/ProjektProvider';
import { useDizalo } from '../contexts/DizaloProvider';
import { useVoznoOkno } from '../contexts/VoznoOknoProvider';
import { useOvjes } from '../contexts/OvjesProvider';

const SAVE_PROJECT_URL = '/saveProject';

const useSaveProject = () => {
    
    const { projectId, autor, adresaGradAutora, izradio, suradnik, /*datum,*/ ugraditelj, adresaGradUgraditelja, nazivGradevine, lokacijaAdresaGradevine, refOznakaProjekta, tvBrojOznakaDizala } = useProjekt();
    
    const { namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa, nazivnaNosivost, brojOsoba, nazivnaBrzina, akceleracijaDeceleracijaNormalnaVoznja, deceleracijaKodHitnogStopa, brojUkljucenjaNaSat } = useDizalo();
    const { brojPostaja, brojUlaza, visinaDizanja, tlocrtnaSirina, tlocrtnaDubina, dubinaJame, nadvisenje } = useVoznoOkno();

    const { brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, promjer, prekidnaCvrstoca, masaPoDuljnomMetru, youngovModul, promjenaSmjeraNaStraniKabine, maxRazmakNaStraniKabine, npr_c, promjenaSmjeraNaStraniProtuutega, maxRazmakNaStraniProtuutega, npr_cw } = useOvjes();
    const { z1, z2, z3, z4, z5, z6, l1, otklonskeUzniceNaStraniKabine, brojIDP_c, promjerDDP_c, masaMDP_c, inercijaJDP_c, otklonskeUzniceNaStraniUtega, brojIDP_cw, promjerDDP_cw, masaMDP_cw, inercijaJDP_cw } = useOvjes();

    const saveProjectById = async () => {
        //console.log("saving data");
    
        try {
            const response = await axios.post(
                SAVE_PROJECT_URL,
                JSON.stringify({ 
                    projectId: projectId,
                    autor: autor,
                    adresaGradAutora: adresaGradAutora,
                    izradio: izradio,
                    suradnik: suradnik,
                    // datum: datum,
                    ugraditelj: ugraditelj,
                    adresaGradUgraditelja: adresaGradUgraditelja,
                    nazivGradevine: nazivGradevine,
                    lokacijaAdresaGradevine: lokacijaAdresaGradevine,
                    refOznakaProjekta: refOznakaProjekta,
                    tvBrojOznakaDizala: tvBrojOznakaDizala,

                    //--- DIZALO
                    namjenaDizala: namjenaDizala,
                    ukrcavanjeVilicarem: ukrcavanjeVilicarem,// bool
                    vrstaDizala: vrstaDizala,
                    vrstaPogona: vrstaPogona,
                    smjestajPogona: smjestajPogona,
                    bezStrojarnice: bezStrojarnice,//bool
                    faktorOvjesa: faktorOvjesa,
                    nazivnaNosivost: nazivnaNosivost,
                    brojOsoba: brojOsoba,
                    nazivnaBrzina: nazivnaBrzina,
                    akceleracijaDeceleracijaNormalnaVoznja: akceleracijaDeceleracijaNormalnaVoznja,
                    deceleracijaKodHitnogStopa: deceleracijaKodHitnogStopa,
                    brojUkljucenjaNaSat: brojUkljucenjaNaSat,

                    //--- VOZNO OKNO
                    brojPostaja: brojPostaja,
                    brojUlaza: brojUlaza,
                    visinaDizanja: visinaDizanja,
                    tlocrtnaSirina: tlocrtnaSirina,
                    tlocrtnaDubina: tlocrtnaDubina,
                    dubinaJame: dubinaJame,
                    nadvisenje: nadvisenje,

                    //--- OVJES prvi dio
                    brojNosivihUzadi: brojNosivihUzadi,
                    tipUzadi: tipUzadi,
                    korisnickoDefiniranje: korisnickoDefiniranje,
                    promjer: promjer,
                    prekidnaCvrstoca: prekidnaCvrstoca,
                    masaPoDuljnomMetru: masaPoDuljnomMetru,
                    youngovModul: youngovModul,

                    promjenaSmjeraNaStraniKabine: promjenaSmjeraNaStraniKabine,
                    maxRazmakNaStraniKabine: maxRazmakNaStraniKabine,
                    npr_c: npr_c,
                    promjenaSmjeraNaStraniProtuutega: promjenaSmjeraNaStraniProtuutega,
                    maxRazmakNaStraniProtuutega: maxRazmakNaStraniProtuutega,
                    npr_cw: npr_cw,

                    //--- OVJES drugi dio
                    z1: z1,
                    z2: z2,
                    z3: z3,
                    z4: z4,
                    z5: z5,
                    z6: z6,
                    l1: l1,
                    
                    otklonskeUzniceNaStraniKabine: otklonskeUzniceNaStraniKabine,
                    brojIDP_c: brojIDP_c,
                    promjerDDP_c: promjerDDP_c,
                    masaMDP_c: masaMDP_c,
                    inercijaJDP_c: inercijaJDP_c,
                    
                    otklonskeUzniceNaStraniUtega: otklonskeUzniceNaStraniUtega,
                    brojIDP_cw: brojIDP_cw,
                    promjerDDP_cw: promjerDDP_cw,
                    masaMDP_cw: masaMDP_cw,
                    inercijaJDP_cw: inercijaJDP_cw
                }),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );
    
            if (response?.status === 200) {
                //console.log("project saved");    
                alert("Projekt je spremljen.");
            }
        } catch (err) {
            // ...
            console.log("catched error: " + err);
        }
    }

    return saveProjectById;
}

export default useSaveProject;