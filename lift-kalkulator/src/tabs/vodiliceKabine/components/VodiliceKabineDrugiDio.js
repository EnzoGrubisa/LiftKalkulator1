import { useEffect, useState } from "react";

import TitledInput from "../../../components/TitledInput";

import { useVodiliceKabine, useVodiliceKabineUpdate } from '../../../contexts/VodiliceKabineProvider'

const VodiliceKabineDrugiDio = () => {
    
    const {
        vk_korisnickoDefiniranjeVodilica,

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
        vk_omega
    } = useVodiliceKabine();
    const {
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
        setVk_Omega
    } = useVodiliceKabineUpdate();

    /* VLACNA CVRSTOCA */
    const [validVk_vlacnaCvrstoca, setValidVk_vlacnaCvrstoca] = useState(true);

    const vk_vlacnaCvrstocaChanged = (e) => {
        setVk_VlacnaCvrstoca(e.target.value);
    };

    useEffect(() => {
        const num = +vk_vlacnaCvrstoca;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_vlacnaCvrstoca(false);
        }
        else {
            setValidVk_vlacnaCvrstoca(true);
        }
    }, [vk_vlacnaCvrstoca]);

    function vk_vlacnaCvrstocaOnBlur(e) {
        if (validVk_vlacnaCvrstoca) {
            setVk_VlacnaCvrstoca(+(e.target.value));
        }
        else {
            setVk_VlacnaCvrstoca(0); 
        }
    }

    /* MODUL ELASTICNOSTI */
    const [validVk_modulElasticnosti, setValidVk_modulElasticnosti] = useState(true);

    const vk_modulElasticnostiChanged = (e) => {
        setVk_ModulElasticnosti(e.target.value);
    };

    useEffect(() => {
        const num = +vk_modulElasticnosti;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_modulElasticnosti(false);
        }
        else {
            setValidVk_modulElasticnosti(true);
        }
    }, [vk_modulElasticnosti]);

    function vk_modulElasticnostiOnBlur(e) {
        if (validVk_modulElasticnosti) {
            setVk_ModulElasticnosti(+(e.target.value));
        }
        else {
            setVk_ModulElasticnosti(0); 
        }
    }

    /* ELONGACIJA */
    const [validVk_elongacija, setValidVk_elongacija] = useState(true);

    const vk_elongacijaChanged = (e) => {
        setVk_Elongacija(e.target.value);
    };

    useEffect(() => {
        const num = +vk_elongacija;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_elongacija(false);
        }
        else {
            setValidVk_elongacija(true);
        }
    }, [vk_elongacija]);

    function vk_elongacijaOnBlur(e) {
        if (validVk_elongacija) {
            setVk_Elongacija(+(e.target.value));
        }
        else {
            setVk_Elongacija(0); 
        }
    }

    /* POVRSINA POPRECNOG PRESJEKA */
    const [validVk_povrsinaPoprecnogPresjeka, setValidVk_povrsinaPoprecnogPresjeka] = useState(true);

    const vk_povrsinaPoprecnogPresjekaChanged = (e) => {
        setVk_PovrsinaPoprecnogPresjeka(e.target.value);
    };

    useEffect(() => {
        const num = +vk_povrsinaPoprecnogPresjeka;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_povrsinaPoprecnogPresjeka(false);
        }
        else {
            setValidVk_povrsinaPoprecnogPresjeka(true);
        }
    }, [vk_povrsinaPoprecnogPresjeka]);

    function vk_povrsinaPoprecnogPresjekaOnBlur(e) {
        if (validVk_povrsinaPoprecnogPresjeka) {
            setVk_PovrsinaPoprecnogPresjeka(+(e.target.value));
        }
        else {
            setVk_PovrsinaPoprecnogPresjeka(0); 
        }
    }
    
    /* MASA PO JEDINICI DUZINE */
    const [validVk_masaPoJedinicDuzine, setValidVk_masaPoJedinicDuzine] = useState(true);

    const vk_masaPoJedinicDuzineChanged = (e) => {
        setVk_MasaPoJedinicDuzine(e.target.value);
    };

    useEffect(() => {
        const num = +vk_masaPoJedinicDuzine;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_masaPoJedinicDuzine(false);
        }
        else {
            setValidVk_masaPoJedinicDuzine(true);
        }
    }, [vk_masaPoJedinicDuzine]);

    function vk_masaPoJedinicDuzineOnBlur(e) {
        if (validVk_masaPoJedinicDuzine) {
            setVk_MasaPoJedinicDuzine(+(e.target.value));
        }
        else {
            setVk_MasaPoJedinicDuzine(0); 
        }
    }
    
    /* MOMENT OTPORA Wxx */
    const [validVk_momentOtporaWxx, setValidVk_momentOtporaWxx] = useState(true);

    const vk_momentOtporaWxxChanged = (e) => {
        setVk_MomentOtporaWxx(e.target.value);
    };

    useEffect(() => {
        const num = +vk_momentOtporaWxx;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_momentOtporaWxx(false);
        }
        else {
            setValidVk_momentOtporaWxx(true);
        }
    }, [vk_momentOtporaWxx]);

    function vk_momentOtporaWxxOnBlur(e) {
        if (validVk_momentOtporaWxx) {
            setVk_MomentOtporaWxx(+(e.target.value));
        }
        else {
            setVk_MomentOtporaWxx(0); 
        }
    }
    
    /* MOMENT OTPORA Wyy */
    const [validVk_momentOtporaWyy, setValidVk_momentOtporaWyy] = useState(true);

    const vk_momentOtporaWyyChanged = (e) => {
        setVk_MomentOtporaWyy(e.target.value);
    };

    useEffect(() => {
        const num = +vk_momentOtporaWyy;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_momentOtporaWyy(false);
        }
        else {
            setValidVk_momentOtporaWyy(true);
        }
    }, [vk_momentOtporaWyy]);

    function vk_momentOtporaWyyOnBlur(e) {
        if (validVk_momentOtporaWyy) {
            setVk_MomentOtporaWyy(+(e.target.value));
        }
        else {
            setVk_MomentOtporaWyy(0); 
        }
    }
    
    /* GEOMETRIJSKA INERCIJA lxx */
    const [validVk_geometrijskaInercijaLxx, setValidVk_geometrijskaInercijaLxx] = useState(true);

    const vk_geometrijskaInercijaLxxChanged = (e) => {
        setVk_GeometrijskaInercijaLxx(e.target.value);
    };

    useEffect(() => {
        const num = +vk_geometrijskaInercijaLxx;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_geometrijskaInercijaLxx(false);
        }
        else {
            setValidVk_geometrijskaInercijaLxx(true);
        }
    }, [vk_geometrijskaInercijaLxx]);

    function vk_geometrijskaInercijaLxxOnBlur(e) {
        if (validVk_geometrijskaInercijaLxx) {
            setVk_GeometrijskaInercijaLxx(+(e.target.value));
        }
        else {
            setVk_GeometrijskaInercijaLxx(0); 
        }
    }
    
    /* GEOMETRIJSKA INERCIJA lyy */
    const [validVk_geometrijskaInercijaLyy, setValidVk_geometrijskaInercijaLyy] = useState(true);

    const vk_geometrijskaInercijaLyyChanged = (e) => {
        setVk_GeometrijskaInercijaLyy(e.target.value);
    };

    useEffect(() => {
        const num = +vk_geometrijskaInercijaLyy;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_geometrijskaInercijaLyy(false);
        }
        else {
            setValidVk_geometrijskaInercijaLyy(true);
        }
    }, [vk_geometrijskaInercijaLyy]);

    function vk_geometrijskaInercijaLyyOnBlur(e) {
        if (validVk_geometrijskaInercijaLyy) {
            setVk_GeometrijskaInercijaLyy(+(e.target.value));
        }
        else {
            setVk_GeometrijskaInercijaLyy(0); 
        }
    }
    
    /* MIN RADIJUS INERCIJE ixx */
    const [validVk_minRadijusInercijeIxx, setValidVk_minRadijusInercijeIxx] = useState(true);

    const vk_minRadijusInercijeIxxChanged = (e) => {
        setVk_MinRadijusInercijeIxx(e.target.value);
    };

    useEffect(() => {
        const num = +vk_minRadijusInercijeIxx;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_minRadijusInercijeIxx(false);
        }
        else {
            setValidVk_minRadijusInercijeIxx(true);
        }
    }, [vk_minRadijusInercijeIxx]);

    function vk_minRadijusInercijeIxxOnBlur(e) {
        if (validVk_minRadijusInercijeIxx) {
            setVk_MinRadijusInercijeIxx(+(e.target.value));
        }
        else {
            setVk_MinRadijusInercijeIxx(0); 
        }
    }
    
    /* MIN RADIJUS INERCIJE iyy */
    const [validVk_minRadijusInercijeIyy, setValidVk_minRadijusInercijeIyy] = useState(true);

    const vk_minRadijusInercijeIyyChanged = (e) => {
        setVk_MinRadijusInercijeIyy(e.target.value);
    };

    useEffect(() => {
        const num = +vk_minRadijusInercijeIyy;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_minRadijusInercijeIyy(false);
        }
        else {
            setValidVk_minRadijusInercijeIyy(true);
        }
    }, [vk_minRadijusInercijeIyy]);

    function vk_minRadijusInercijeIyyOnBlur(e) {
        if (validVk_minRadijusInercijeIyy) {
            setVk_MinRadijusInercijeIyy(+(e.target.value));
        }
        else {
            setVk_MinRadijusInercijeIyy(0); 
        }
    }
    
    /* MIN RADIJUS INERCIJE imin */
    const [validVk_minRadijusInercijeImin, setValidVk_minRadijusInercijeImin] = useState(true);

    const vk_minRadijusInercijeIminChanged = (e) => {
        setVk_MinRadijusInercijeImin(e.target.value);
    };

    useEffect(() => {
        const num = +vk_minRadijusInercijeImin;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_minRadijusInercijeImin(false);
        }
        else {
            setValidVk_minRadijusInercijeImin(true);
        }
    }, [vk_minRadijusInercijeImin]);

    function vk_minRadijusInercijeIminOnBlur(e) {
        if (validVk_minRadijusInercijeImin) {
            setVk_MinRadijusInercijeImin(+(e.target.value));
        }
        else {
            setVk_MinRadijusInercijeImin(0); 
        }
    }
    
    /* VITKOST */
    const [validVk_vitkost, setValidVk_vitkost] = useState(true);

    const vk_vitkostChanged = (e) => {
        setVk_Vitkost(e.target.value);
    };

    useEffect(() => {
        const num = +vk_vitkost;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_vitkost(false);
        }
        else {
            setValidVk_vitkost(true);
        }
    }, [vk_vitkost]);

    function vk_vitkostOnBlur(e) {
        if (validVk_vitkost) {
            setVk_Vitkost(+(e.target.value));
        }
        else {
            setVk_Vitkost(0); 
        }
    }
    
    /* OMEGA */
    const [validVk_omega, setValidVk_omega] = useState(true);

    const vk_omegaChanged = (e) => {
        setVk_Omega(e.target.value);
    };

    useEffect(() => {
        const num = +vk_omega;
        if (num.toString() === "NaN" || num > 1000000000000 || num < 0) { 
            setValidVk_omega(false);
        }
        else {
            setValidVk_omega(true);
        }
    }, [vk_omega]);

    function vk_omegaOnBlur(e) {
        if (validVk_omega) {
            setVk_Omega(+(e.target.value));
        }
        else {
            setVk_Omega(0); 
        }
    }

    return (
        <div>
            <div className="okvir">
                <p>Karakteristike materijala</p>
                <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Vlačna čvrstoća (Rm)" sDesna="N/mm&sup2;" value={vk_vlacnaCvrstoca} valid={validVk_vlacnaCvrstoca} onChange={vk_vlacnaCvrstocaChanged} onBlur={vk_vlacnaCvrstocaOnBlur} tooltip="0 - 1000000000000" />
                <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Modul elastičnosti (E)" sDesna="N/mm&sup2;" value={vk_modulElasticnosti} valid={validVk_modulElasticnosti} onChange={vk_modulElasticnostiChanged} onBlur={vk_modulElasticnostiOnBlur} tooltip="0 - 1000000000000" />
                <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Elongacija (A5)" sDesna="%" value={vk_elongacija} valid={validVk_elongacija} onChange={vk_elongacijaChanged} onBlur={vk_elongacijaOnBlur} tooltip="0 - 1000000000000" />
            </div>

            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Površina poprečnog presjeka (A)" sDesna="mm&sup2;" value={vk_povrsinaPoprecnogPresjeka} valid={validVk_povrsinaPoprecnogPresjeka} onChange={vk_povrsinaPoprecnogPresjekaChanged} onBlur={vk_povrsinaPoprecnogPresjekaOnBlur} tooltip="0 - 1000000000000" />
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Masa po jedinici dužine (q1)" sDesna="kg/m" value={vk_masaPoJedinicDuzine} valid={validVk_masaPoJedinicDuzine} onChange={vk_masaPoJedinicDuzineChanged} onBlur={vk_masaPoJedinicDuzineOnBlur} tooltip="0 - 1000000000000" />
            
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Moment otpora (Wxx)" sDesna="mm&sup3;" value={vk_momentOtporaWxx} valid={validVk_momentOtporaWxx} onChange={vk_momentOtporaWxxChanged} onBlur={vk_momentOtporaWxxOnBlur} tooltip="0 - 1000000000000" />
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Moment otpora (Wyy)" sDesna="mm&sup3;" value={vk_momentOtporaWyy} valid={validVk_momentOtporaWyy} onChange={vk_momentOtporaWyyChanged} onBlur={vk_momentOtporaWyyOnBlur} tooltip="0 - 1000000000000" />
            
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Geometrijska inercija (lxx)" sDesna="mm&#8308;" value={vk_geometrijskaInercijaLxx} valid={validVk_geometrijskaInercijaLxx} onChange={vk_geometrijskaInercijaLxxChanged} onBlur={vk_geometrijskaInercijaLxxOnBlur} tooltip="0 - 1000000000000" />
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Geometrijska inercija (lyy)" sDesna="mm&#8308;" value={vk_geometrijskaInercijaLyy} valid={validVk_geometrijskaInercijaLyy} onChange={vk_geometrijskaInercijaLyyChanged} onBlur={vk_geometrijskaInercijaLyyOnBlur} tooltip="0 - 1000000000000" />
            
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Min. radijus inercije (ixx)" sDesna="mm" value={vk_minRadijusInercijeIxx} valid={validVk_minRadijusInercijeIxx} onChange={vk_minRadijusInercijeIxxChanged} onBlur={vk_minRadijusInercijeIxxOnBlur} tooltip="0 - 1000000000000" />
            <TitledInput disabled={!vk_korisnickoDefiniranjeVodilica} labelWidth="200px" inputWidth="80px" title="Min. radijus inercije (iyy)" sDesna="mm" value={vk_minRadijusInercijeIyy} valid={validVk_minRadijusInercijeIyy} onChange={vk_minRadijusInercijeIyyChanged} onBlur={vk_minRadijusInercijeIyyOnBlur} tooltip="0 - 1000000000000" />
            <TitledInput disabled labelWidth="200px" inputWidth="80px" title="Min. radijus inercije (imin)" sDesna="mm" value={vk_minRadijusInercijeImin} valid={validVk_minRadijusInercijeImin} onChange={vk_minRadijusInercijeIminChanged} onBlur={vk_minRadijusInercijeIminOnBlur} tooltip="" />
            
            <TitledInput disabled labelWidth="200px" inputWidth="80px" title="Vitkost (&lambda;)" sDesna="" value={vk_vitkost} valid={validVk_vitkost} onChange={vk_vitkostChanged} onBlur={vk_vitkostOnBlur} tooltip="" />
            <TitledInput disabled labelWidth="200px" inputWidth="80px" title="&omega;" sDesna="" value={vk_omega} valid={validVk_omega} onChange={vk_omegaChanged} onBlur={vk_omegaOnBlur} tooltip="" />
        </div>
    );
}
    
export default VodiliceKabineDrugiDio;