import { useEffect, useState } from "react";

import { useVodiliceKabine, useVodiliceKabineUpdate } from "../../../../contexts/VodiliceKabineProvider";

import Dropdown from "../../../../components/Dropdown";
import TitledInput from "../../../../components/TitledInput";
import IzracuniTitledInput from "../../../../components/IzracuniTitledInput";

import useSaveProject from "../../../../projectData/saveData";

const IzracunIKontrolaVodilica = () => {

    const {
        vk_brojVodilica,
        vk_ukupnaDuljinaVodilica,
        vk_vertikalniRazmakPrihvataVodilica,

        vk_korisnickoDefiniranjeVodilica,

        vk_vrstaVodilice,
        vk_tipVodilice
    } = useVodiliceKabine();

    const {
        setVk_BrojVodilica,
        setVk_UkupnaDuljinaVodilica,
        setVk_VertikalniRazmakPrihvataVodilica,

        setVk_VrstaVodilice,
        setVk_TipVodilice
    } = useVodiliceKabineUpdate();

    // AUTOSAVE
    const { autosaveInLocalStorage } = useSaveProject();
    useEffect(() => { autosaveInLocalStorage(); }, [autosaveInLocalStorage, vk_brojVodilica,
        vk_ukupnaDuljinaVodilica,
        vk_vertikalniRazmakPrihvataVodilica,

        vk_korisnickoDefiniranjeVodilica,

        vk_vrstaVodilice,
        vk_tipVodilice]);

    /* BROJ VODILICA */
    const [validVk_brojVodilica, setValidVk_brojVodilica] = useState(true);

    const vk_brojVodilicaChanged = (e) => {
        setVk_BrojVodilica(e.target.value);
        fillRandomData();
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
        fillRandomData();
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
        fillRandomData();
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

    /* VRSTA VODILICE */
    const vk_vrstaVodiliceChanged = (e) => {
        setVk_VrstaVodilice(e.target.value);
        fillRandomData();
    };

    function getVrstaVodiliceOptions() {
        return [{ key: "hladnoVucene", value: "Hladno vučene vodilice" }, { key: "strojnoObradene", value: "Strojno obrađene vodilice" }];
    }

    /* TIP VODILICE */
    const vk_tipVodiliceChanged = (e) => {
        setVk_TipVodilice(e.target.value);
        fillRandomData();
    };

    function getTipVodiliceOptions() {
        return [{ key: "tip1", value: "Tip 1" }, { key: "tip2", value: "Tip 2" }, { key: "tip3", value: "Tip 3" }];
    }

    //--------------------

    const [ sigmaX, setSigmaX ] = useState(0);
    const [ sigmaY, setSigmaY ] = useState(0);
    
    const [ sigmaM, setSigmaM ] = useState(0);
    
    const [ sigma, setSigma ] = useState(0);
    const [ sigmaF, setSigmaF ] = useState(0);
    
    const [ deltaX, setDeltaX ] = useState(0);
    const [ deltaY, setDeltaY ] = useState(0);
    
    const [ sigmaXUkrcavanje, setSigmaXUkrcavanje ] = useState(0);
    const [ sigmaYUkrcavanje, setSigmaYUkrcavanje ] = useState(0);
    
    const [ sigmaMUkrcavanje, setSigmaMUkrcavanje ] = useState(0);
    
    const [ sigmaUkrcavanje, setSigmaUkrcavanje ] = useState(0);
    const [ sigmaFUkrcavanje, setSigmaFUkrcavanje ] = useState(0);
    
    const [ deltaXUkrcavanje, setDeltaXUkrcavanje ] = useState(0);
    const [ deltaYUkrcavanje, setDeltaYUkrcavanje ] = useState(0);

    const fillRandomData = () => {
        setSigmaX(Math.random() * 200);
        setSigmaY(Math.random() * 200);
        
        setSigmaM(Math.random() * 200);
        
        setSigma(Math.random() * 200);
        setSigmaF(Math.random() * 200);
        
        setDeltaX(Math.random() * 200);
        setDeltaY(Math.random() * 200);
        
        setSigmaXUkrcavanje(Math.random() * 200);
        setSigmaYUkrcavanje(Math.random() * 200);
        
        setSigmaMUkrcavanje(Math.random() * 200);
        
        setSigmaUkrcavanje(Math.random() * 200);
        setSigmaFUkrcavanje(Math.random() * 200);
        
        setDeltaXUkrcavanje(Math.random() * 200);
        setDeltaYUkrcavanje(Math.random() * 200);
    }

    useEffect(() => {
        fillRandomData();
    }, []);



    return (
        <div>
            <h3 style={{ textAlign: "center" }}><span style={{ fontWeight: "bold" }}>Izračun i kontrola vodilica: </span><span style={{ color: "red" }}>(izračuni nisu implementirani!)</span></h3>

            <div className='container-fluid izracuniPostavkeVodilica'>
                <div className="row">
                    <div className="col-sm">
                        <>
                            <TitledInput labelWidth="200px" inputWidth="80px" title="Broj vodilica (n_cr)" sDesna="" value={vk_brojVodilica} valid={validVk_brojVodilica} onChange={vk_brojVodilicaChanged} onBlur={vk_brojVodilicaOnBlur} tooltip="2 - 10" />
                            <TitledInput labelWidth="200px" inputWidth="80px" title="Ukupna duljina vodilica (l_crt)" sDesna="mm" value={vk_ukupnaDuljinaVodilica} valid={validVk_ukupnaDuljinaVodilica} onChange={vk_ukupnaDuljinaVodilicaChanged} onBlur={vk_ukupnaDuljinaVodilicaOnBlur} tooltip="1 - 1000000" />
                            <TitledInput labelWidth="200px" inputWidth="80px" title="Vertikalni razmak prihvata vodilica - međukonzolni razmak (l_cr)" sDesna="mm" value={vk_vertikalniRazmakPrihvataVodilica} valid={validVk_vertikalniRazmakPrihvataVodilica} onChange={vk_vertikalniRazmakPrihvataVodilicaChanged} onBlur={vk_vertikalniRazmakPrihvataVodilicaOnBlur} tooltip="334 - 4175" />
                        </>
                    </div>
                    <div className="col-sm" style={{ alignItems: "center", width: "fit-content" }}>
                        <>
                            <Dropdown labelWidth="200px" title="Vrsta vodilice" options={getVrstaVodiliceOptions()} value={vk_vrstaVodilice} onChange={vk_vrstaVodiliceChanged} />
                            {vk_korisnickoDefiniranjeVodilica
                                ? <TitledInput disabled labelWidth="200px" inputWidth="150px" title="Tip vodilice" sDesna="" value={vk_tipVodilice} valid={true} onChange={vk_tipVodiliceChanged} />
                                : <Dropdown labelWidth="200px" title="Tip vodilice" options={getTipVodiliceOptions()} value={vk_tipVodilice} onChange={vk_tipVodiliceChanged} />
                            }
                        </>
                    </div>
                </div>
            </div>

            <h3>Izračunate vrijednosti:</h3>

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm">
                        <>
                            <h5>Normalan rad: </h5>
                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; x" sDesna="N/mm&sup2;" value={sigmaX} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; y" sDesna="N/mm&sup2;" value={sigmaY} valid={true} />

                            <br />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; m" sDesna="N/mm&sup2;" value={sigmaM} valid={true} />

                            <br />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma;" sDesna="N/mm&sup2;" value={sigma} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; F" sDesna="N/mm&sup2;" value={sigmaF} valid={true} />

                            <br/>

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&delta;x" sDesna="mm" value={deltaX} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&delta;y" sDesna="mm" value={deltaY} valid={true} />
                        </>
                    </div>
                    <div className="col-sm" style={{ alignItems: "center", width: "fit-content" }}>
                        <>
                            <h5>Normalan rad - ukrcavanje: </h5>
                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; x" sDesna="N/mm&sup2;" value={sigmaXUkrcavanje} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; y" sDesna="N/mm&sup2;" value={sigmaYUkrcavanje} valid={true} />

                            <br />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; m" sDesna="N/mm&sup2;" value={sigmaMUkrcavanje} valid={true} />

                            <br />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma;" sDesna="N/mm&sup2;" value={sigmaUkrcavanje} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&sigma; F" sDesna="N/mm&sup2;" value={sigmaFUkrcavanje} valid={true} />

                            <br/>

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&delta;x" sDesna="mm" value={deltaXUkrcavanje} valid={true} />

                            <IzracuniTitledInput disabled labelWidth="200px" inputWidth="150px"
                                title="&delta;y" sDesna="mm" value={deltaYUkrcavanje} valid={true} />
                        </>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default IzracunIKontrolaVodilica;