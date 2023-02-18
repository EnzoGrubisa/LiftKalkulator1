import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import { useState, useEffect } from 'react';

// import CalculatorProvider from "../contexts/CalculatorProvider";
import Izracuni from "./components/izracuni/Izracuni";

import useSaveProject from "../projectData/saveData";

import { useProjekt } from "../contexts/ProjektProvider";

//import { useNavigate/*, useLocation, Navigate*/} from 'react-router-dom';
import ConfirmExitProject from "./ConfirmExitProject";

const Calculator = (props) => {

	const { tab } = useProjekt();
 
	//const navigate = useNavigate();

	const { saveProjectById } = useSaveProject();

	const [naslov, setNaslov] = useState("Default naslov");
	
	useEffect(() => {
		switch (tab) {
			case "projekt":
				setNaslov("Osnovni podaci o projektu");
				break;
			case "dizalo":
				setNaslov("Osnovni podaci o dizalu");
				break;
			case "ovjes":
				setNaslov("Ovjes");
				break;
			case "vodiliceKabine":
				setNaslov("Vodilice kabine");
				break;
			case "vodiliceProtuutega":
				setNaslov("Vodilice protuutega");
				break;
			case "kabina":
				setNaslov("Kabina");
				break;
			case "protuutegIKompenzacija":
				setNaslov("Protuuteg i kompenzacija");
				break;
			case "elektricniPogon":
				setNaslov("Električni pogon");
				break;
			case "hidraulicniPogon":
				setNaslov("Hidraulični pogon");
				break;
			case "biljeske":
				setNaslov("Bilješke");
				break;
		
			default:
				setNaslov("...error...");
				break;
		}
    }, [tab]);

	const headerStyle = {
		fontWeight: "bold",
		paddingTop: "0px",
		marginBottom: "0px",
		textAlign: "center",
		marginLeft: "130px"
	};

	const izbornikButtonStyle = {
		display: "flex",
		position: "absolute"
	};
	
	/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
	function openSidebar() {
		document.getElementById("mySidebar").style.width = "350px";
		document.getElementById("main").style.marginLeft = "350px";
	}
	
	function openIzracuni(){
		document.getElementById("divIzracuni").style.visibility = "visible"; 
	}

	const saveProject = () => {
		saveProjectById();
	}
	
	const exitProject = () => {
		document.getElementById("divConfirmExitProject").style.visibility = "visible";
	}

    return (
		<>
			<div id="calculatorTitleContainer">
				<button className="openbtn" style={izbornikButtonStyle} onClick={openSidebar}>&#9776; Izbornik</button>
				<h2 style={headerStyle}>{naslov}</h2>
				<button onClick={exitProject} className="btn btn-danger" id="izadiBtn">Izađi</button>
				<button onClick={saveProject} className="btn btn-success" id="saveBtn">Spremi promjene</button>
			</div>
			
			<Sidebar tab={tab} />
			
			<Main tab={tab} postaviNaslov={setNaslov}/>

			<button onClick={openIzracuni} className="btn btn-primary">Izračuni</button>
			<Izracuni/>

			<ConfirmExitProject/>

		</>
    );
}

export default Calculator;
