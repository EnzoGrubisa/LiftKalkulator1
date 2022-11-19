
// props -> title, id, onClick, paddingLeft, defaultChecked
const CheckBox = (props) => {

    return (
        <div className='divCheckBox' style={{paddingLeft: props.paddingLeft}}>
            <input defaultChecked={props.defaultChecked} className="form-check-input" type="checkbox" id={props.id} onClick={props.onClick}/>
            <label className="form-check-label" htmlFor={props.id}>{props.title}</label>
        </div> 
    );
}

export default CheckBox;