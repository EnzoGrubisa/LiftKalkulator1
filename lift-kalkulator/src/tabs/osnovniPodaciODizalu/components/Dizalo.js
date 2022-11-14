import { useEffect, useState } from 'react';

const Dizalo = () => {
    
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
        setBezStrojarnice(e.target.checked);
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
        console.log("bezStrojarnice = " + bezStrojarnice);
        console.log("-------");
    }

    function izracuniButtonClick(){
        alert("izracune treba napravit!");
    }



    return (
                <>
                    {/* namjena dizala */}
                    <div className='divDropDown'>
                        <label className='autoWidth'>Namjena dizala: </label>
                        <select  onChange={changeNamjenaDizala} defaultValue={namjenaDizala} className="form-select" aria-label="Default select example">
                            <option value="osobno">Osobno dizalo</option>
                            <option value="teretno">Teretno dizalo</option>
                            <option value="osobnoTeretno">Osobno teretno dizalo</option>
                        </select>
                        {/* { showUkrcavanjeVilicaremCheckBox ? <UkrcavanjeVilicarem ukrcavanjeVilicaremBool={ukrcavanjeVilicaremBool}/> : null } */}
                        { showUkrcavanjeVilicaremCheckBox ? 
                        <div className='divCheckBox'>
                            <input className="form-check-input chkbx" onClick={ukrcavanjeVilicaremCheckBoxClick} type="checkbox" value="" id="ukrcavanjeVilicaremCheckBox"/>
                            <label className="form-check-label" htmlFor="ukrcavanjeVilicaremCheckBox">ukrcavanje viličarem</label>
                        </div> 
                        : null 
                        }
                    </div>

                    <br/><br/>

                    <div className='divDropDown'>
                        <label>Vrsta dizala: </label>
                        <select onChange={changeVrstaDizala} defaultValue={vrstaDizala} className="form-select" aria-label="Default select example">
                            <option value="elektricno">Električno dizalo s pogonskom užnicom</option>
                            <option value="hidraulicno">Hidraulično dizalo</option>
                        </select>
                    </div>

                    <div className='divDropDown'>
                        <label>Vrsta pogona: </label>
                        <select value={vrstaPogona} onChange={changeVrstaPogona} className="form-select" aria-label="Default select example">
                            {vrstaDizala === "elektricno" ? <option value="bezreduktorski">Bezreduktorski</option> : null}
                            {vrstaDizala === "elektricno" ? <option value="reduktorski">Reduktorski</option> : null}
                            {vrstaDizala === "hidraulicno" ? <option value="indirektni">Indirektni</option> : null}
                            {vrstaDizala === "hidraulicno" ? <option value="direktni">Direktni</option> : null}
                        </select>
                    </div>
                    <br/>

                    <div className='divDropDown'>
                        <label>Smještaj pogona: </label>
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
                        <div className='divCheckBox'>
                            <input value={bezStrojarnice} onClick={bezStrojarniceClick} className="form-check-input chkbx" type="checkbox"  id="bezStrojarniceCheckBox"/>
                            <label className="form-check-label" htmlFor="bezStrojarniceCheckBox">bez strojarnice</label>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <br/>

                    <button onClick={logButtonClick}>LOG</button>
                    
                    <br/>
                    <br/>

                    <button onClick={izracuniButtonClick}>Izracuni</button>
                    <br/>
                </>
      
    );
}
  


export default Dizalo;