import axios from '../api/axios';

import useAuth from '../hooks/useAuth';

import { useProjekt } from '../contexts/ProjektProvider';
import { useDizalo } from '../contexts/DizaloProvider';
import { useVoznoOkno } from '../contexts/VoznoOknoProvider';
import { useOvjes } from '../contexts/OvjesProvider';
import { useVodiliceKabine } from '../contexts/VodiliceKabineProvider';

const SAVE_PROJECT_URL = '/saveProject';

const useSaveProject = () => {

    const { auth } = useAuth();

    const { projectId, autor, adresaGradAutora, izradio, suradnik, /*datum,*/ ugraditelj, adresaGradUgraditelja, nazivGradevine, lokacijaAdresaGradevine, refOznakaProjekta, tvBrojOznakaDizala } = useProjekt();

    const { namjenaDizala, ukrcavanjeVilicarem, vrstaDizala, vrstaPogona, smjestajPogona, bezStrojarnice, faktorOvjesa, nazivnaNosivost, brojOsoba, nazivnaBrzina, akceleracijaDeceleracijaNormalnaVoznja, deceleracijaKodHitnogStopa, brojUkljucenjaNaSat } = useDizalo();
    const { brojPostaja, brojUlaza, visinaDizanja, tlocrtnaSirina, tlocrtnaDubina, dubinaJame, nadvisenje } = useVoznoOkno();

    const { brojNosivihUzadi, tipUzadi, korisnickoDefiniranje, promjer, prekidnaCvrstoca, masaPoDuljnomMetru, youngovModul, promjenaSmjeraNaStraniKabine, maxRazmakNaStraniKabine, npr_c, promjenaSmjeraNaStraniProtuutega, maxRazmakNaStraniProtuutega, npr_cw } = useOvjes();
    const { z1, z2, z3, z4, z5, z6, l1, otklonskeUzniceNaStraniKabine, brojIDP_c, promjerDDP_c, masaMDP_c, inercijaJDP_c, otklonskeUzniceNaStraniUtega, brojIDP_cw, promjerDDP_cw, masaMDP_cw, inercijaJDP_cw } = useOvjes();

    const {
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
    } = useVodiliceKabine();

    const getAllDataJson = () => {
        return JSON.stringify({
            projectId: projectId,

            username: auth.username,

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
            inercijaJDP_cw: inercijaJDP_cw,

            //--- VODILICE KABINE 1. dio
            vk_brojVodilica: vk_brojVodilica,
            vk_ukupnaDuljinaVodilica: vk_ukupnaDuljinaVodilica,
            vk_vertikalniRazmakPrihvataVodilica: vk_vertikalniRazmakPrihvataVodilica,
            vk_masaDodatneOpreme: vk_masaDodatneOpreme,
            vk_ukupnaDodatnaMasa: vk_ukupnaDodatnaMasa,
            vk_koeficijentDodatnogOpterecenja: vk_koeficijentDodatnogOpterecenja,
            vk_gubitciUslijedTrenja: vk_gubitciUslijedTrenja,
            vk_korisnickoDefiniranjeFRc: vk_korisnickoDefiniranjeFRc,

            vk_vrstaVodilice: vk_vrstaVodilice,
            vk_tipVodilice: vk_tipVodilice,
            vk_korisnickoDefiniranjeVodilica: vk_korisnickoDefiniranjeVodilica,

            vk_brojOdbojnika: vk_brojOdbojnika,
            vk_vrstaOdbojnika: vk_vrstaOdbojnika,

            //--- VODILICE KABINE 2. dio
            vk_vlacnaCvrstoca: vk_vlacnaCvrstoca,
            vk_modulElasticnosti: vk_modulElasticnosti,
            vk_elongacija: vk_elongacija,

            vk_povrsinaPoprecnogPresjeka: vk_povrsinaPoprecnogPresjeka,
            vk_masaPoJedinicDuzine: vk_masaPoJedinicDuzine,
            vk_momentOtporaWxx: vk_momentOtporaWxx,
            vk_momentOtporaWyy: vk_momentOtporaWyy,
            vk_geometrijskaInercijaLxx: vk_geometrijskaInercijaLxx,
            vk_geometrijskaInercijaLyy: vk_geometrijskaInercijaLyy,
            vk_minRadijusInercijeIxx: vk_minRadijusInercijeIxx,
            vk_minRadijusInercijeIyy: vk_minRadijusInercijeIyy,
            vk_minRadijusInercijeImin: vk_minRadijusInercijeImin,
            vk_vitkost: vk_vitkost,
            vk_omega: vk_omega,

            //--- VODILICE KABINE 4. dio
            vk_b1: vk_b1,
            vk_h1: vk_h1,
            vk_h: vk_h,
            vk_k: vk_k,
            vk_n: vk_n,
            vk_c: vk_c,
            vk_p: vk_p,
            vk_g: vk_g,
            vk_f: vk_f,
            vk_e: vk_e,
            vk_rs: vk_rs,
            vk_m1: vk_m1,
            vk_m2: vk_m2,
            vk_t1: vk_t1,
            vk_t2: vk_t2,
            vk_l: vk_l,
            vk_d: vk_d,
            vk_d1: vk_d1,
            vk_b3: vk_b3,
            vk_l2: vk_l2,
            vk_l3: vk_l3
        });
    }

    const saveProjectById = async () => {
        //console.log("saving data");

        console.log(getAllDataJson());

        try {
            const response = await axios.post(
                SAVE_PROJECT_URL,
                getAllDataJson(),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );

            if (response?.status === 200) {
                //console.log("project saved");    

                localStorage.removeItem("autosavedAllData");

                alert("Projekt je spremljen.");
            }
        } catch (err) {
            // ...
            console.log("catched error: " + err);
        }
    }

    const autosaveInLocalStorage = async () => {
        localStorage.setItem('autosavedAllData', getAllDataJson());
        //console.log("saved localy");
    }

    return { saveProjectById, autosaveInLocalStorage };
}

export default useSaveProject;