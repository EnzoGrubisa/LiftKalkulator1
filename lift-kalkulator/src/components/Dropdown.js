
// props -> title, options (key - value list), value, onChange, labelWidth, disabled, tooltip
const Dropdown = (props) => {

    function OptionsList() {
        if(!props.disabled){
            const options = props.options.map((option) =>
                <option key={option.key} value={option.key}>{option.value}</option>
            );
            return options;
        }
        else{
            return [];
        }
    }

    return (
        <div className='divDropDown'>
            <label style={{width: props.labelWidth}}>{props.title}: </label>
            <select title={props.tooltip} className="form-select" aria-label="Default select example" onChange={props.onChange} value={props.value} disabled={props.disabled}> 
                {OptionsList()}
            </select>
        </div>
    );
}

export default Dropdown;