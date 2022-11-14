import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } 

    return (
        <div id="mySidebar" className="sidebar">
            <Link className="closebtn" onClick={closeSidebar}>&times;</Link><hr/>

            <Link onClick={closeSidebar} className={props.tab === "projekt" ? 'selectedTab' : null} to="/projekt">Osnovni podaci o projektu</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "dizalo" ? 'selectedTab' : null} to="/dizalo">Osnovni podaci o dizalu</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "ovjes" ? 'selectedTab' : null} to="/ovjes">Ovjes</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "vodiliceKabine" ? 'selectedTab' : null} to="/vodiliceKabine">Vodilice kabine</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "vodiliceProtuutega" ? 'selectedTab' : null} to="/vodiliceProtuutega">Vodilice protuutega</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "kabina" ? 'selectedTab' : null} to="/kabina">Kabina</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "protuutegIKompenzacija" ? 'selectedTab' : null} to="/protuutegIKompenzacija">Protuuteg i kompenzacija</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "elektricniPogon" ? 'selectedTab' : null} to="/elektricniPogon">Električni pogon</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "hidraulicniPogon" ? 'selectedTab' : null} to="/hidraulicniPogon">Hidraulični pogon</Link><hr/>
            <Link onClick={closeSidebar} className={props.tab === "biljeske" ? 'selectedTab' : null} to="/biljeske">Bilješke</Link><hr/>
        </div>
    );
}

export default Sidebar;
