// import OvjesDrugiDio from "./components/OvjesDrugiDio";
// import OvjesPrviDio from "./components/OvjesPrviDio";
// import SlikaOvjesa from "./components/SlikaOvjesa";

const VodiliceKabine = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm">
                    {/* <OvjesPrviDio/> */}
                    VodiliceKabinePrviDio
                </div>
                <div className="col-sm" style={{alignItems: "center", width: "fit-content"}}>
                    {/* <OvjesDrugiDio/> */}
                    VodiliceKabineDrugiDio
                </div>
                <div className="col-sm" style={{minWidth: "350px"}}>
                    {/* <SlikaOvjesa/>     */}
                </div>
                <div className="col-sm">
                    {/* <SlikaOvjesa/>     */}
                    VodiliceKabineTreciDio
                </div>
            </div>
        </div>
    );
}
    
export default VodiliceKabine;