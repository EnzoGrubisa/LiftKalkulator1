import OsnovniPodaciODizalu from "../tabs/OsnovniPodaciODizalu";

const Calculator = () => {

	const headerStyle = {
		fontWeight: "bold",
		paddingTop: "10px"
	};

    return (
		<div >
        	<h1 style={headerStyle}>Lift-Kalkulator</h1>
			<hr/>
			<OsnovniPodaciODizalu/>
		</div>
    );
}

export default Calculator;
