import { useEffect, useState } from "react";

import CheckBox from "../../../components/CheckBox";
import Dropdown from "../../../components/Dropdown";
import TitledInput from "../../../components/TitledInput";

import { useVodiliceKabine, useVodiliceKabineUpdate } from '../../../contexts/VodiliceKabineProvider'


const VodiliceKabinePrviDio = () => {

    const {
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
    } = useVodiliceKabine();
    const {
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

        //drugi dio
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

        //cetvrti dio
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

    /* BROJ VODILICA */
    const [validVk_brojVodilica, setValidVk_brojVodilica] = useState(true);

    const vk_brojVodilicaChanged = (e) => {
        setVk_BrojVodilica(e.target.value);
    };

    useEffect(() => {
        const num = +vk_brojVodilica;
        if (num.toString() === "NaN" || num % 1 !== 0 || num > 10 || num < 2) {
            setValidVk_brojVodilica(false);
        }
        else {
            setValidVk_brojVodilica(true);
        }
    }, [vk_brojVodilica]);

    function vk_brojVodilicaOnBlur(e) {
        if (validVk_brojVodilica) {
            setVk_BrojVodilica(+(e.target.value));
        }
        else {
            setVk_BrojVodilica(2);
        }
    }

    /* UKUPNA DULJINA VODILICA */
    const [validVk_ukupnaDuljinaVodilica, setValidVk_ukupnaDuljinaVodilica] = useState(true);

    const vk_ukupnaDuljinaVodilicaChanged = (e) => {
        setVk_UkupnaDuljinaVodilica(e.target.value);
    };

    useEffect(() => {
        const num = +vk_ukupnaDuljinaVodilica;
        if (num.toString() === "NaN" || num % 1 !== 0 || num > 1000000 || num < 1) {
            setValidVk_ukupnaDuljinaVodilica(false);
        }
        else {
            setValidVk_ukupnaDuljinaVodilica(true);
        }
    }, [vk_ukupnaDuljinaVodilica]);

    function vk_ukupnaDuljinaVodilicaOnBlur(e) {
        if (validVk_ukupnaDuljinaVodilica) {
            setVk_UkupnaDuljinaVodilica(+(e.target.value));
        }
        else {
            setVk_UkupnaDuljinaVodilica(1);
        }
    }

    /* VERTIKALNI RAZMAK PRIHVATA VODILICA */
    const [validVk_vertikalniRazmakPrihvataVodilica, setValidVk_vertikalniRazmakPrihvataVodilica] = useState(true);

    const vk_vertikalniRazmakPrihvataVodilicaChanged = (e) => {
        setVk_VertikalniRazmakPrihvataVodilica(e.target.value);
    };

    useEffect(() => {
        const num = +vk_vertikalniRazmakPrihvataVodilica;
        if (num.toString() === "NaN" || num > 4175 || num < 334) {
            setValidVk_vertikalniRazmakPrihvataVodilica(false);
        }
        else {
            setValidVk_vertikalniRazmakPrihvataVodilica(true);
        }
    }, [vk_vertikalniRazmakPrihvataVodilica]);

    function vk_vertikalniRazmakPrihvataVodilicaOnBlur(e) {
        if (validVk_vertikalniRazmakPrihvataVodilica) {
            setVk_VertikalniRazmakPrihvataVodilica(+(e.target.value));
        }
        else {
            setVk_VertikalniRazmakPrihvataVodilica(4175);
        }
    }

    /* MASA DODATNE OPREME */
    const [validVk_masaDodatneOpreme, setValidVk_masaDodatneOpreme] = useState(true);

    const vk_masaDodatneOpremeChanged = (e) => {
        setVk_MasaDodatneOpreme(e.target.value);
    };

    useEffect(() => {
        const num = +vk_masaDodatneOpreme;
        if (num.toString() === "NaN" || num > 5000 || num < 0) {
            setValidVk_masaDodatneOpreme(false);
        }
        else {
            setValidVk_masaDodatneOpreme(true);
        }
    }, [vk_masaDodatneOpreme]);

    function vk_masaDodatneOpremeOnBlur(e) {
        if (validVk_masaDodatneOpreme) {
            setVk_MasaDodatneOpreme(+(e.target.value));
            setVk_UkupnaDodatnaMasa(+(e.target.value));
        }
        else {
            setVk_MasaDodatneOpreme(0);
            setVk_UkupnaDodatnaMasa(0);
        }
    }

    /* UKUPNA DODATNA MASA */
    const [validVk_ukupnaDodatnaMasa, setValidVk_ukupnaDodatnaMasa] = useState(true);

    const vk_ukupnaDodatnaMasaChanged = (e) => {
        setVk_UkupnaDodatnaMasa(e.target.value);
    };

    useEffect(() => {
        const num = +vk_ukupnaDodatnaMasa;
        if (num.toString() === "NaN" || num > 5000 || num < 0) {
            setValidVk_ukupnaDodatnaMasa(false);
        }
        else {
            setValidVk_ukupnaDodatnaMasa(true);
        }
    }, [vk_ukupnaDodatnaMasa]);

    function vk_ukupnaDodatnaMasaOnBlur(e) {
        if (validVk_ukupnaDodatnaMasa) {
            setVk_UkupnaDodatnaMasa(+(e.target.value));
        }
        else {
            setVk_UkupnaDodatnaMasa(0);
        }
    }

    /* KOEFICIJENT DODATNOG OPTEREĆENJA */
    const [validVk_koeficijentDodatnogOpterecenja, setValidVk_koeficijentDodatnogOpterecenja] = useState(true);

    const vk_koeficijentDodatnogOpterecenjaChanged = (e) => {
        setVk_KoeficijentDodatnogOpterecenja(e.target.value);
    };

    useEffect(() => {
        const num = +vk_koeficijentDodatnogOpterecenja;
        if (num.toString() === "NaN" || num > 5 || num < 0) {
            setValidVk_koeficijentDodatnogOpterecenja(false);
        }
        else {
            setValidVk_koeficijentDodatnogOpterecenja(true);
        }
    }, [vk_koeficijentDodatnogOpterecenja]);

    function vk_koeficijentDodatnogOpterecenjaOnBlur(e) {
        if (validVk_koeficijentDodatnogOpterecenja) {
            setVk_KoeficijentDodatnogOpterecenja(+(e.target.value));
        }
        else {
            setVk_KoeficijentDodatnogOpterecenja(0);
        }
    }

    /* GUBITCI USLIJED TRENJA */
    const [validVk_gubitciUslijedTrenja, setValidVk_gubitciUslijedTrenja] = useState(true);

    const vk_gubitciUslijedTrenjaChanged = (e) => {
        setVk_GubitciUslijedTrenja(e.target.value);
    };

    useEffect(() => {
        const num = +vk_gubitciUslijedTrenja;
        if (num.toString() === "NaN" || num > 20 || num < 0) {
            setValidVk_gubitciUslijedTrenja(false);
        }
        else {
            setValidVk_gubitciUslijedTrenja(true);
        }
    }, [vk_gubitciUslijedTrenja]);

    function vk_gubitciUslijedTrenjaOnBlur(e) {
        if (validVk_gubitciUslijedTrenja) {
            setVk_GubitciUslijedTrenja(+(e.target.value));
        }
        else {
            setVk_GubitciUslijedTrenja(0);
        }
    }

    /* KORISNICKO DEFINIRANJE FRc */
    const vk_korisnickoDefiniranjeFRcCBChanged = (e) => {
        setVk_KorisnickoDefiniranjeFRc(e.target.checked);
    };

    /* VRSTA VODILICE */
    const vk_vrstaVodiliceChanged = (e) => {
        setVk_VrstaVodilice(e.target.value);
    };

    function getVrstaVodiliceOptions() {
        return [{ key: "hladnoVucene", value: "Hladno vučene vodilice" }, { key: "strojnoObradene", value: "Strojno obrađene vodilice" }];
    }

    /* TIP VODILICE */
    const vk_tipVodiliceChanged = (e) => {
        setVk_TipVodilice(e.target.value);
    };

    function getTipVodiliceOptions() {
        return [{ key: "tip1", value: "Tip 1" }, { key: "tip2", value: "Tip 2" }, { key: "tip3", value: "Tip 3" }];
    }

    /* KORISNICKO DEFINIRANJE VODILICA */
    const vk_korisnickoDefiniranjeVodilicaCBChanged = (e) => {
        setVk_KorisnickoDefiniranjeVodilica(e.target.checked);
        if(e.target.checked){
            setVk_TipVodilice("");
        }
        else{
            setVk_TipVodilice("tip1");

            //drugi dio
            setVk_VlacnaCvrstoca(370);
            setVk_ModulElasticnosti(210000);
            setVk_Elongacija(22);

            setVk_PovrsinaPoprecnogPresjeka(1052);
            setVk_MasaPoJedinicDuzine(8.26);
            setVk_MomentOtporaWxx(9630);
            setVk_MomentOtporaWyy(6610);
            setVk_GeometrijskaInercijaLxx(474300);
            setVk_GeometrijskaInercijaLyy(231300);
            setVk_MinRadijusInercijeIxx(21.20);
            setVk_MinRadijusInercijeIyy(14.80);
            setVk_MinRadijusInercijeImin(14.80);
            setVk_Vitkost(135.14);
            setVk_Omega(3.08);

            //cetvrti dio
            setVk_b1(70);
            setVk_h1(70);
            setVk_h(0);
            setVk_k(8);
            setVk_n(0);
            setVk_c(8);
            setVk_p(8);
            setVk_g(0);
            setVk_f(0);
            setVk_e(20.20);
            setVk_rs(1.50);
            setVk_m1(3);
            setVk_m2(2.95);
            setVk_t1(3.5);
            setVk_t2(3);
            setVk_l(0);
            setVk_d(13);
            setVk_d1(0);
            setVk_b3(42);
            setVk_l2(105);
            setVk_l3(25);
        }
    };

    /* BROJ ODBOJNIKA */
    const [validVk_brojOdbojnika, setValidVk_brojOdbojnika] = useState(true);

    const vk_brojOdbojnikaChanged = (e) => {
        setVk_BrojOdbojnika(e.target.value);
    };

    useEffect(() => {
        const num = +vk_brojOdbojnika;
        if (num.toString() === "NaN" || num % 1 !== 0 || num > 20 || num < 1) {
            setValidVk_brojOdbojnika(false);
        }
        else {
            setValidVk_brojOdbojnika(true);
        }
    }, [vk_brojOdbojnika]);

    function vk_brojOdbojnikaOnBlur(e) {
        if (validVk_brojOdbojnika) {
            setVk_BrojOdbojnika(+(e.target.value));
        }
        else {
            setVk_BrojOdbojnika(1);
        }
    }

    /* VRSTA ODBOJNIKA */
    const vk_vrstaOdbojnikaChanged = (e) => {
        setVk_VrstaOdbojnika(e.target.value);
    };

    function getVrstaOdbojnikaOptions() {
        return [
            { key: "odbojniciSAkumulacijomEnergijeILinearnomKarakteristikom", value: "Odbojnici s akumulacijom energije i linearnom karakteristikom" }, 
            { key: "odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom", value: "Odbojnici s akumulacijom energije i nelinearnom karakteristikom" }, 
            { key: "odbojniciSDiscipacijomEnergije", value: "Odbojnici s discipacijom energije" }
        ];
    }

    const vk_vrstaOdbojnikaGetTooltip = () => {
        switch (vk_vrstaOdbojnika) {
            case "odbojniciSAkumulacijomEnergijeILinearnomKarakteristikom":
                return "Odbojnici s akumulacijom energije i linearnom karakteristikom";
            case "odbojniciSAkumulacijomEnergijeINelinearnomKarakteristikom":
                return "Odbojnici s akumulacijom energije i nelinearnom karakteristikom";
            case "odbojniciSDiscipacijomEnergije":
                return "Odbojnici s discipacijom energije";
                
            default:
                return null;
        }
    }

    return (
        <div>
            <TitledInput labelWidth="200px" inputWidth="80px" title="Broj vodilica (n_cr)" sDesna="" value={vk_brojVodilica} valid={validVk_brojVodilica} onChange={vk_brojVodilicaChanged} onBlur={vk_brojVodilicaOnBlur} tooltip="2 - 10" />
            <TitledInput labelWidth="200px" inputWidth="80px" title="Ukupna duljina vodilica (l_crt)" sDesna="mm" value={vk_ukupnaDuljinaVodilica} valid={validVk_ukupnaDuljinaVodilica} onChange={vk_ukupnaDuljinaVodilicaChanged} onBlur={vk_ukupnaDuljinaVodilicaOnBlur} tooltip="1 - 1000000" />
            <TitledInput labelWidth="200px" inputWidth="80px" title="Vertikalni razmak prihvata vodilica - međukonzolni razmak (l_cr)" sDesna="mm" value={vk_vertikalniRazmakPrihvataVodilica} valid={validVk_vertikalniRazmakPrihvataVodilica} onChange={vk_vertikalniRazmakPrihvataVodilicaChanged} onBlur={vk_vertikalniRazmakPrihvataVodilicaOnBlur} tooltip="334 - 4175" />
            <TitledInput labelWidth="200px" inputWidth="80px" title="Masa dodatne operme na kabinskim vodilicama (m_ae)" sDesna="kg" value={vk_masaDodatneOpreme} valid={validVk_masaDodatneOpreme} onChange={vk_masaDodatneOpremeChanged} onBlur={vk_masaDodatneOpremeOnBlur} tooltip="0 - 5000" />
            <TitledInput disabled labelWidth="200px" inputWidth="80px" title="Ukupna dodatna masa na kabinskim vodilicama (Maet)" sDesna="kg" value={vk_ukupnaDodatnaMasa} valid={validVk_ukupnaDodatnaMasa} onChange={vk_ukupnaDodatnaMasaChanged} onBlur={vk_ukupnaDodatnaMasaOnBlur} tooltip="0 - 5000" />
            <TitledInput labelWidth="200px" inputWidth="80px" title="Koeficijent dodatnog opterećenja (k3_c)" sDesna="" value={vk_koeficijentDodatnogOpterecenja} valid={validVk_koeficijentDodatnogOpterecenja} onChange={vk_koeficijentDodatnogOpterecenjaChanged} onBlur={vk_koeficijentDodatnogOpterecenjaOnBlur} tooltip="0 - 5" />

            <div className="okvir">
                <TitledInput disabled={!vk_korisnickoDefiniranjeFRc} labelWidth="200px" inputWidth="80px" title="Gubitci uslijed trenja (FRc)" sDesna="%" value={vk_gubitciUslijedTrenja} valid={validVk_gubitciUslijedTrenja} onChange={vk_gubitciUslijedTrenjaChanged} onBlur={vk_gubitciUslijedTrenjaOnBlur} tooltip="0 - 20" />
                <CheckBox title="korisničko definiranje" id="vk_korisnickoDefiniranjeFRcCheckBox" onChange={vk_korisnickoDefiniranjeFRcCBChanged} paddingLeft="30px" checked={vk_korisnickoDefiniranjeFRc} />
            </div>

            <br />
            <Dropdown labelWidth="200px" title="Vrsta vodilice" options={getVrstaVodiliceOptions()} value={vk_vrstaVodilice} onChange={vk_vrstaVodiliceChanged} />
            <div className="okvir">
                {vk_korisnickoDefiniranjeVodilica
                    ? <TitledInput labelWidth="200px" inputWidth="150px" title="Tip vodilice" sDesna="" value={vk_tipVodilice} valid={true} onChange={vk_tipVodiliceChanged}/>
                    : <Dropdown labelWidth="200px" title="Tip vodilice" options={getTipVodiliceOptions()} value={vk_tipVodilice} onChange={vk_tipVodiliceChanged} />
                }
                
                <CheckBox title="korisničko definiranje" id="vk_korisnickoDefiniranjeVodilicaCheckBox" onChange={vk_korisnickoDefiniranjeVodilicaCBChanged} paddingLeft="30px" checked={vk_korisnickoDefiniranjeVodilica} />
            </div>

            <div className="okvir" style={{ marginTop: "1px" }}>
                <p>Odbojnici kabine</p>
                <TitledInput labelWidth="200px" inputWidth="80px" title="Broj odbojnika (nb_c)" sDesna="" value={vk_brojOdbojnika} valid={validVk_brojOdbojnika} onChange={vk_brojOdbojnikaChanged} onBlur={vk_brojOdbojnikaOnBlur} tooltip="1 - 20" />
                <Dropdown labelWidth="200px" title="Vrsta odbojnika" options={getVrstaOdbojnikaOptions()} value={vk_vrstaOdbojnika} onChange={vk_vrstaOdbojnikaChanged} tooltip={vk_vrstaOdbojnikaGetTooltip()}/>
            </div>
        </div>
    );
}

export default VodiliceKabinePrviDio;