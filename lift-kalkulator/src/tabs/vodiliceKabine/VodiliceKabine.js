// import OvjesDrugiDio from "./components/OvjesDrugiDio";
// import OvjesPrviDio from "./components/OvjesPrviDio";
// import SlikaOvjesa from "./components/SlikaOvjesa";

import VodiliceKabineCetvrtiDio from "./components/VodiliceKabineCetvrtiDio";
import VodiliceKabineDrugiDio from "./components/VodiliceKabineDrugiDio";
import VodiliceKabinePrviDio from "./components/VodiliceKabinePrviDio";
import VodiliceKabineTreciDioSlika from "./components/VodiliceKabineTreciDioSlika";

const VodiliceKabine = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <VodiliceKabinePrviDio/>
                </div>
                <div className="col-sm" style={{alignItems: "center", width: "fit-content"}}>
                    <VodiliceKabineDrugiDio/>
                </div>
                <div className="col-sm" style={{minWidth: "350px"}}>
                    <VodiliceKabineTreciDioSlika/>
                </div>
                <div className="col-sm">
                    <VodiliceKabineCetvrtiDio/>
                </div>
            </div>
        </div>
    );
}
    
export default VodiliceKabine;