import IzracunIKontrolaVodilica from "./components/IzracunIKontrolaVodilica";

const Izracuni = () => {

    function closeIzracuni() {
        document.getElementById("divIzracuni").style.visibility = "collapse";
    }

    return (
        <div id="divIzracuni">
            <div id="innerDivIzracuni">
                <button id="closeIzracuniButton" className="btn btn-danger" onClick={closeIzracuni}>X</button>
                <IzracunIKontrolaVodilica />
            </div>
        </div>
    );
}

export default Izracuni;