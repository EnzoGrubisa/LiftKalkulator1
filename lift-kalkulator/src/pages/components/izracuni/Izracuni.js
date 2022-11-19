

const Izracuni = () => {
    
    function closeIzracuni() {
        document.getElementById("divIzracuni").style.visibility = "collapse";
    } 

    return(
        <div id="divIzracuni">
            <div id="innerDivIzracuni">
                <button id="closeIzracuniButton" onClick={closeIzracuni}>X</button>
            </div>
        </div>
    );
}

export default Izracuni;