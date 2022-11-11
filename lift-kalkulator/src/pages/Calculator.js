import OsnovniPodaciOProjektu from "../tabs/osnovniPodaciOProjektu/OsnovniPodaciOProjektu";
//import OsnovniPodaciODizalu from "../tabs/osnovniPodaciODizalu/OsnovniPodaciODizalu";

const Calculator = () => {

	const headerStyle = {
		fontWeight: "bold",
		paddingTop: "10px"
	};

    return (
		<div >
        	<h1 style={headerStyle}>Lift-Kalkulator</h1>
			<hr/>
			<OsnovniPodaciOProjektu/>
			{/* <OsnovniPodaciODizalu/> */}
		</div>
    );
}

export default Calculator;
