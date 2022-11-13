import { Link } from 'react-router-dom';

const Sidebar = () => {

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeSidebar() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    } 

    return (
        <div id="mySidebar" className="sidebar">
            <Link className="closebtn" onClick={closeSidebar}>&times;</Link>
            <Link to="/projekt">Osnovni podaci o projektu</Link>
            <Link to="/dizalo">Osnovni podaci o dizalu</Link>
            <Link to="/ovjes">Ovjes</Link>
            <Link to="/vodiliceKabine">Vodilice kabine</Link>
            <Link to="/vodiliceProtuutega">Vodilice protuutega</Link>
            <Link to="/kabina">Kabina</Link>
            <Link to="/protuutegIKompenzacija">Protuuteg i kompenzacija</Link>
            <Link to="/elektricniPogon">Električni pogon</Link>
            <Link to="/hidraulicniPogon">Hidraulični pogon</Link>
            <Link to="/biljeske">Bilješke</Link>
        </div>
    );
}

export default Sidebar;
