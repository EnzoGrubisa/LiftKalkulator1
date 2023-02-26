import PodaciOAutoruIUgraditeljuDizala from './components/PodaciOAutoruIUgraditeljuDizala';
import OsnovniPodaciOProjektuComponent from './components/OsnovniPodaciOProjektuComponent';
import Logotip from './components/Logotip';

const OsnovniPodaciOProjektu = () => {
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <PodaciOAutoruIUgraditeljuDizala/>
                </div>
                <div className="col-sm" style={{alignItems: "center", width: "fit-content"}}>
                    <OsnovniPodaciOProjektuComponent/>
                </div>
                <div className="col-sm" style={{minWidth: "350px"}}>
                    <Logotip/>    
                </div>
            </div>
        </div>    
    );
}
  


export default OsnovniPodaciOProjektu;