import { Link } from 'react-router-dom';

import { useProjektUpdate } from '../../contexts/ProjektProvider';
import { useDizalo } from '../../contexts/DizaloProvider';

const Sidebar = (props) => {

    const { setTab } = useProjektUpdate();
    const { vrstaDizala } = useDizalo();

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } 

    return (
        <div id="mySidebar" className="sidebar">
            <Link className="closebtn" onClick={closeSidebar}>&times;</Link><hr/>

            <Link onClick={() => {closeSidebar(); setTab("projekt");}} className={props.tab === "projekt" ? 'selectedTab' : null} >Osnovni podaci o projektu</Link><hr/>
            <Link onClick={() => {closeSidebar(); setTab("dizalo");}} className={props.tab === "dizalo" ? 'selectedTab' : null} >Osnovni podaci o dizalu</Link><hr/>
            <Link onClick={() => {closeSidebar(); setTab("ovjes");}} className={props.tab === "ovjes" ? 'selectedTab' : null} >Ovjes</Link><hr/>
            <Link onClick={() => {closeSidebar(); setTab("vodiliceKabine");}} className={props.tab === "vodiliceKabine" ? 'selectedTab' : null}>Vodilice kabine</Link><hr/>
            
            {vrstaDizala === "elektricno" 
            ? <><Link onClick={() => {closeSidebar(); setTab("vodiliceProtuutega");}} className={props.tab === "vodiliceProtuutega" ? 'selectedTab' : null}>Vodilice protuutega</Link><hr/></>
            : null}

            <Link onClick={() => {closeSidebar(); setTab("kabina");}} className={props.tab === "kabina" ? 'selectedTab' : null}>Kabina</Link><hr/>
            {vrstaDizala === "elektricno" 
            ? <><Link onClick={() => {closeSidebar(); setTab("protuutegIKompenzacija");}} className={props.tab === "protuutegIKompenzacija" ? 'selectedTab' : null}>Protuuteg i kompenzacija</Link><hr/></>
            : null}

            {vrstaDizala === "elektricno" 
            ? <><Link onClick={() => {closeSidebar(); setTab("elektricniPogon");}} className={props.tab === "elektricniPogon" ? 'selectedTab' : null}>Električni pogon</Link><hr/></>
            : null}

            {vrstaDizala === "hidraulicno" 
            ? <><Link onClick={() => {closeSidebar(); setTab("hidraulicniPogon");}} className={props.tab === "hidraulicniPogon" ? 'selectedTab' : null}>Hidraulični pogon</Link><hr/></>
            : null}

            <Link onClick={() => {closeSidebar(); setTab("biljeske");}} className={props.tab === "biljeske" ? 'selectedTab' : null}>Bilješke</Link><hr/>
        </div>
    );
}

export default Sidebar;
