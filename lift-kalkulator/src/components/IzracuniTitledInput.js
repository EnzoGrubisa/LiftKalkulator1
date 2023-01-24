
//props -> labelWidth, inputWidth, title, sDesna, value, valid, tooltip, disabled, style
const IzracuniTitledInput = (props) => {

    return (
        <div className="divTitledInput" style={props.style}>
            <label style={{ width: props.labelWidth }}>{props.title}: </label>
            <input style={{ width: props.inputWidth }} className={props.value > 100 ? "izracunInvalid" : "izracunValid"} title={props.tooltip} value={props.value} disabled={props.disabled} />
            {props.sDesna ? <label>{props.sDesna}</label> : null}
        </div>
    );
}



export default IzracuniTitledInput;