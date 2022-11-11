import TitledInput from '../../../components/TitledInput';

const OsnovniPodaciOProjektuComponent = () => {
    
    return (
        <div className='container' style={{backgroundColor: "#CCCCCC"}}>
            <h3>Osnovni podaci o projektu</h3>
            <TitledInput title="Naziv građevine"/><br/>
            <TitledInput title="Lokacija, Adresa"/><br/>
            <TitledInput title="Ref. oznaka projekta"/><br/>
            <TitledInput title="Tv. broj / Oznaka dizala"/><br/>
        </div>
      
    );
}
  
export default OsnovniPodaciOProjektuComponent;