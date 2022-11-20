import OvjesPrviDio from "./components/OvjesPrviDio";
import SlikaOvjesa from "./components/SlikaOvjesa";


const Ovjes = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <OvjesPrviDio/>
                </div>
                <div className="col-sm" style={{alignItems: "center", width: "fit-content"}}>
                       
                </div>
                <div className="col-sm" style={{minWidth: "350px"}}>
                    <SlikaOvjesa/>    
                </div>
            </div>
        </div>
    );
}
    
export default Ovjes;