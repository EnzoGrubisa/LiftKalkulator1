
//props -> labelWidth, inputWidth, title, sDesna, value, valid, onChange, onBlur, tooltip, disabled, style
const TitledInput = (props) => {

    return (
        <div className="divTitledInput" style={props.style}>
            <label style={{ width: props.labelWidth }}>{props.title}: </label>
            <input
                style={{ width: props.inputWidth }}
                className={props.valid ? "inputValid" : "inputInvalid"}
                title={props.tooltip}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                disabled={props.disabled}
            />
            {
                props.sDesna ?
                    <label>{props.sDesna}</label>
                    : null
            }
        </div>
    );
}

export default TitledInput;