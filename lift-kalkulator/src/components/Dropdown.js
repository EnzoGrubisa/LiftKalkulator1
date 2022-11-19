
// props -> title, options (key - value list), value, onChange, labelWidth
const Dropdown = (props) => {

    function OptionsList() {
        const options = props.options.map((option) =>
            <option key={option.key} value={option.key}>{option.value}</option>
        );
        return options;
    }

    return (
        <div className='divDropDown'>
            <label style={{width: props.labelWidth}}>{props.title}: </label>
            <select className="form-select" aria-label="Default select example" onChange={props.onChange} value={props.value} > 
                {OptionsList()}
            </select>
        </div>
    );
}

export default Dropdown;