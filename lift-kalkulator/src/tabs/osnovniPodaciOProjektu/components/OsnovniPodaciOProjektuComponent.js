import TitledInput from '../../../components/TitledInput';
import { useProjekt, useProjektUpdate } from '../../../contexts/ProjektProvider';

const OsnovniPodaciOProjektuComponent = () => {
    
    const labelsWidth = "180px";

    const { nazivGradevine, lokacijaAdresaGradevine, refOznakaProjekta, tvBrojOznakaDizala } = useProjekt();
    const { setNazivGradevine, setLokacijaAdresaGradevine, setRefOznakaProjekta, setTvBrojOznakaDizala } = useProjektUpdate();

    function nazivGradevineChanged(e){
        setNazivGradevine(e.target.value);
    }

    function lokacijaAdresaGradevineChanged(e){
        setLokacijaAdresaGradevine(e.target.value);
    }

    function refOznakaProjektaChanged(e){
        setRefOznakaProjekta(e.target.value);
    }

    function tvBrojOznakaDizalaChanged(e){
        setTvBrojOznakaDizala(e.target.value);
    }

    return (
        //className='container'
        <div >
            <h5>Osnovni podaci o projektu: </h5>
            <TitledInput valid labelWidth={labelsWidth} title="Naziv građevine"           value={nazivGradevine} onChange={nazivGradevineChanged}/>
            <TitledInput valid labelWidth={labelsWidth} title="Lokacija, Adresa"          value={lokacijaAdresaGradevine} onChange={lokacijaAdresaGradevineChanged}/>
            <TitledInput valid labelWidth={labelsWidth} title="Ref. oznaka projekta"      value={refOznakaProjekta} onChange={refOznakaProjektaChanged}/>
            <TitledInput valid labelWidth={labelsWidth} title="Tv. broj / Oznaka dizala"  value={tvBrojOznakaDizala} onChange={tvBrojOznakaDizalaChanged}/>
        </div>
      
    );
}
  
export default OsnovniPodaciOProjektuComponent;