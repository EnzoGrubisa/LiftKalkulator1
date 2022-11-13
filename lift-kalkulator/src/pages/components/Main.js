import OsnovniPodaciOProjektu from "../../tabs/osnovniPodaciOProjektu/OsnovniPodaciOProjektu";
import OsnovniPodaciODizalu from "../../tabs/osnovniPodaciODizalu/OsnovniPodaciODizalu";
import Ovjes from "../../tabs/ovjes/Ovjes";
import VodiliceKabine from "../../tabs/vodiliceKabine/VodiliceKabine";
import VodiliceProtuutega from "../../tabs/vodiliceProtuutega/VodiliceProtuutega";
import Kabina from "../../tabs/kabina/Kabina";
import ProuutegIKompenzacija from "../../tabs/protuutegIKompenzacija/ProtuutegIKompenzacija";
import ElektricniPogon from "../../tabs/elektricniPogon/ElektricniPogon";
import HidraulicniPogon from "../../tabs/hidraulicniPogon/HidraulicniPogon";
import Biljeske from "../../tabs/biljeske/Biljeske";

const Main = (props) => {
    
    //props.postaviNaslov(props.tab);

    return (
        <div id="main">
            {props.tab === "projekt" ? <OsnovniPodaciOProjektu/> : null}
            {props.tab === "dizalo" ? <OsnovniPodaciODizalu/> : null}
            {props.tab === "ovjes" ? <Ovjes/> : null}
            {props.tab === "vodiliceKabine" ? <VodiliceKabine/> : null}
            {props.tab === "vodiliceProtuutega" ? <VodiliceProtuutega/> : null}
            {props.tab === "kabina" ? <Kabina/> : null}
            {props.tab === "protuutegIKompenzacija" ? <ProuutegIKompenzacija/> : null}
            {props.tab === "elektricniPogon" ? <ElektricniPogon/> : null}
            {props.tab === "hidraulicniPogon" ? <HidraulicniPogon/> : null}
            {props.tab === "biljeske" ? <Biljeske/> : null}
        </div>
    );
}
    
export default Main;
    
    
    
   