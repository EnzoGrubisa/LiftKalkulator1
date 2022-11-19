import TitledInput from '../../../components/TitledInput';

const OsnovniPodaciOProjektuComponent = () => {
    
    const labelsWidth = "180px";

    return (
        //className='container'
        <div >
            <h3>Osnovni podaci o projektu</h3>
            <TitledInput labelWidth={labelsWidth} title="Naziv građevine"/>
            <TitledInput labelWidth={labelsWidth} title="Lokacija, Adresa"/>
            <TitledInput labelWidth={labelsWidth} title="Ref. oznaka projekta"/>
            <TitledInput labelWidth={labelsWidth} title="Tv. broj / Oznaka dizala"/>
        </div>
      
    );
}
  
export default OsnovniPodaciOProjektuComponent;