import { useEffect } from 'react';

import TitledInput from '../../../components/TitledInput';

import { useProjekt, useProjektUpdate } from '../../../contexts/ProjektProvider';

import useSaveProject from "../../../projectData/saveData";

const PodaciOAutoruIUgraditeljuDizala = () => {

    const labelsWidth = "100px";

    const { autor, adresaGradAutora, izradio, suradnik, /*datum,*/ ugraditelj, adresaGradUgraditelja } = useProjekt();
    const { setAutor, setAdresaGradAutora, setIzradio, setSuradnik, /*setDatum,*/ setUgraditelj, setAdresaGradUgraditelja } = useProjektUpdate();

    // AUTOSAVE
    const { autosaveInLocalStorage } = useSaveProject();
    useEffect(() => { autosaveInLocalStorage(); }, [autosaveInLocalStorage, autor, adresaGradAutora, izradio, suradnik, /*datum,*/ ugraditelj, adresaGradUgraditelja]);

    function autorChanged(e) {
        setAutor(e.target.value);
    }

    function adresaGradAutoraChanged(e) {
        setAdresaGradAutora(e.target.value);
    }

    function izradioChanged(e) {
        setIzradio(e.target.value);
    }

    function suradnikChanged(e) {
        setSuradnik(e.target.value);
    }

    function ugraditeljChanged(e) {
        setUgraditelj(e.target.value);
    }

    function adresaGradUgraditeljaChanged(e) {
        setAdresaGradUgraditelja(e.target.value);
    }

    return (
        //className='container'
        <div>
            <h5>Podaci o autoru i ugraditelju dizala: </h5>
            <TitledInput
                valid
                labelWidth={labelsWidth}
                title="Autor"
                value={autor}
                onChange={autorChanged}
            />
            <TitledInput valid labelWidth={labelsWidth} title="Adresa, Grad" value={adresaGradAutora} onChange={adresaGradAutoraChanged} />
            <TitledInput valid labelWidth={labelsWidth} title="Izradio" value={izradio} onChange={izradioChanged} />
            <TitledInput valid labelWidth={labelsWidth} title="Suradnik" value={suradnik} onChange={suradnikChanged} />
            {/* <TitledDatePicker title="Datum"/><br/> */}
            <TitledInput valid labelWidth={labelsWidth} title="Ugraditelj" value={ugraditelj} onChange={ugraditeljChanged} />
            <TitledInput valid labelWidth={labelsWidth} title="Adresa, Grad" value={adresaGradUgraditelja} onChange={adresaGradUgraditeljaChanged} />
        </div>

    );
}

export default PodaciOAutoruIUgraditeljuDizala;