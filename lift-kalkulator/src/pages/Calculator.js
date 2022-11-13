import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import { useState, useEffect } from 'react';

const Calculator = (props) => {

	const [naslov, setNaslov] = useState("Default naslov");

	useEffect(() => {
		switch (props.tab) {
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
    }, [props.tab]);

	const headerStyle = {
		fontWeight: "bold",
		paddingTop: "10px"
	};
	
	/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
	function openSidebar() {
		document.getElementById("mySidebar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
	}
	
    return (
		<div >
			<button className="openbtn" onClick={openSidebar}>&#9776; Izbornik</button>
			
			<h1 style={headerStyle}>{naslov}</h1>
			
			<hr/>
			
			<Sidebar/>
			
			<Main tab={props.tab} postaviNaslov={setNaslov}/>
		</div>
    );
}

export default Calculator;
