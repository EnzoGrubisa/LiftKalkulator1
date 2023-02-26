import Dizalo from './components/Dizalo';
import VoznoOkno from './components/VoznoOkno';
import SlikaDizala from './components/SlikaDizala';

const OsnovniPodaciODizalu = () => {
    
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <Dizalo/>
                </div>
                <div className="col-sm" style={{alignItems: "center", width: "fit-content"}}>
                    <VoznoOkno/>    
                </div>
                <div className="col-sm" style={{minWidth: "350px"}}>
                    <SlikaDizala/>    
                </div>
            </div>
        </div>
            
    );
}
  
export default OsnovniPodaciODizalu;