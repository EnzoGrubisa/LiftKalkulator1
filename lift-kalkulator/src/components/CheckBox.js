
// props -> title, id, onChange, paddingLeft, checked
const CheckBox = (props) => {
    return (
        <div className='divCheckBox' style={{ paddingLeft: props.paddingLeft }}>
            <input checked={props.checked} className="form-check-input" type="checkbox" id={props.id} onChange={props.onChange} />
            <label className="form-check-label" htmlFor={props.id}>{props.title}</label>
        </div>
    );
}

export default CheckBox;