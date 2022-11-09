import { useEffect, useState } from 'react';

// import UkrcavanjeVilicarem from '../Components/UkrcavanjeVilicarem';


const OsnovniPodaciODizalu = () => {
    
    const [namjenaDizala, setNamjenaDizala] = useState("osobno");
    const [showUkrcavanjeVilicaremCheckBox, setShowUkrcavanjeVilicaremCheckBox] = useState(false);
    const [ukrcavanjeVilicaremBool, setUkrcavanjeVilicaremBool] = useState(false);

    const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    const [vrstaPogona, setVrstaPogona] = useState("reduktorski");
    
    const [smjestajPogona, setSmjestajPogona] = useState("uVoznomOknuNaNosacu");
    const [bezStrojarnice, setBezStrojarnice] = useState(true);
    
    
    const changeNamjenaDizala = (e) => {
        setNamjenaDizala(e.target.value);
    };

    const ukrcavanjeVilicaremCheckBoxClick = (e) => {
        setUkrcavanjeVilicaremBool(e.target.checked);
    };
    

    const changeVrstaDizala = (e) => {
        setVrstaDizala(e.target.value);
    };


    
    const changeVrstaPogona = (e) => {
        setVrstaPogona(e.target.value);
    };

    
    const changeSmjestajPogona = (e) => {
        setSmjestajPogona(e.target.value);
    };

    const bezStrojarniceClick = (e) => {
        setBezStrojarnice(e.target.value);
    };
    

    useEffect(() => {
        if(namjenaDizala === "teretno" || namjenaDizala === "osobnoTeretno"){
            setShowUkrcavanjeVilicaremCheckBox(true);
        }else{
            setShowUkrcavanjeVilicaremCheckBox(false);
        }
    }, [namjenaDizala]);

    useEffect(() => {
        if(vrstaDizala === "elektricno"){
            setVrstaPogona("reduktorski");
        }else{
            setVrstaPogona("direktni");
        }
    }, [vrstaDizala]);

    

    function logButtonClick(){
        console.log("-------");
        console.log("namjenaDizala = " + namjenaDizala);
        console.log("showUkrcavanjeVilicaremCheckBox = " + showUkrcavanjeVilicaremCheckBox);
        console.log("ukrcavanjeVilicaremBool = " + ukrcavanjeVilicaremBool);
        console.log("vrstaDizala = " + vrstaDizala);
        console.log("vrstaPogona = " + vrstaPogona);
        console.log("-------");
    }

    function izracuniButtonClick(){
        console.log("izracune treba napravit!");
    }

    return (
        <div className='container-sm'>
            <h2>Osnovni podaci o dizalu</h2>
            
            <div>
                <label>Namjena dizala: </label>
            </div>
            <div>
                
                <select onChange={changeNamjenaDizala} defaultValue={namjenaDizala} className="form-select" aria-label="Default select example">
                    <option value="osobno">Osobno dizalo</option>
                    <option value="teretno">Teretno dizalo</option>
                    <option value="osobnoTeretno">Osobno teretno dizalo</option>
                </select>
                <br/>
                {/* { showUkrcavanjeVilicaremCheckBox ? <UkrcavanjeVilicarem ukrcavanjeVilicaremBool={ukrcavanjeVilicaremBool}/> : null } */}
                { showUkrcavanjeVilicaremCheckBox ? 
                <div>
                    <input onClick={ukrcavanjeVilicaremCheckBoxClick} className="form-check-input" type="checkbox" value="" id="ukrcavanjeVilicaremCheckBox"/>
                    <label className="form-check-label" htmlFor="ukrcavanjeVilicaremCheckBox">ukrcavanje viličarem</label>
                </div> 
                : null 
                }
            </div>
            <br/>

            <div>
                <label>Vrsta dizala: </label>
            </div>
            <div>
                <select onChange={changeVrstaDizala} defaultValue={vrstaDizala} className="form-select" aria-label="Default select example">
                    <option value="elektricno">Električno dizalo s pogonskom užnicom</option>
                    <option value="hidraulicno">Hidraulično dizalo</option>
                </select>
            </div>

            <div>
                <label>Vrsta pogona: </label>
            </div>
            <div>
                <select value={vrstaPogona} onChange={changeVrstaPogona} className="form-select" aria-label="Default select example">
                    {vrstaDizala === "elektricno" ? <option value="bezreduktorski">Bezreduktorski</option> : null}
                    {vrstaDizala === "elektricno" ? <option value="reduktorski">Reduktorski</option> : null}
                    {vrstaDizala === "hidraulicno" ? <option value="indirektni">Indirektni</option> : null}
                    {vrstaDizala === "hidraulicno" ? <option value="direktni">Direktni</option> : null}
                </select>
            </div>
            <br/>

            <div>
                <label>Smještaj pogona: </label>
            </div>
            <div>
                <select value={smjestajPogona} onChange={changeSmjestajPogona} className="form-select" aria-label="Default select example">
                    {vrstaDizala === "elektricno" && bezStrojarnice === true ?
                    <>
                        <option value="uVoznomOknuNaNosacu">U voznom oknu - na nosaču</option>
                        <option value="uVoznomOknuNaVodilicama">U voznom oknu - na vodilicama</option>
                        <option value="naDnuVoznogOkna">Na dnu voznog okna</option>
                    </>
                    : null}

                    {vrstaDizala === "hidraulicno" && bezStrojarnice === true ?
                    <>
                        <option value="uVoznomOknu">U voznom oknu</option>
                    </>
                    : null}
                    
                    {bezStrojarnice === false ?
                    <>
                        <option value="uStrojarniciIznadVoznogOkna">U strojarnici iznad voznog okna</option>
                        <option value="uStrojarniciIspodVoznogOkna">U strojarnici ispod voznog okna</option>
                        <option value="uStrojarniciPoredVoznogOkna">U strojarnici pored voznog okna</option>
                    </>
                    : null}
                </select>
                <br/>
                <input onClick={bezStrojarniceClick} className="form-check-input" type="checkbox" value="" id="bezStrojarniceCheckBox"/>
                <label className="form-check-label" htmlFor="bezStrojarniceCheckBox">bez strojarnice</label>
            </div>
            <br/>




            <br/>
            <br/>


            <button onClick={logButtonClick}>LOG</button>
            <br/>

            <br/>

            <button onClick={izracuniButtonClick}>Izracuni</button>
            <br/>
        </div>
      
    );
}
  


export default OsnovniPodaciODizalu;