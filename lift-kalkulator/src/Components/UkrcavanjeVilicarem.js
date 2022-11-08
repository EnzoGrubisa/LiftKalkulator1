
const UkrcavanjeVilicarem = (props) => {

    function checkBoxClick(e){
        //console.log(e.target.checked); 
        // setUkrcavanjeVilicaremBool(e.target.checked);
        props.ukrcavanjeVilicaremBool = e.target.checked;
    }

    return (
        <div>
            <input onClick={checkBoxClick} class="form-check-input" type="checkbox" value="" id="ukrcavanjeVilicaremCheckBox"/>
            <label class="form-check-label" for="ukrcavanjeVilicaremCheckBox">ukrcavanje viličarem</label>
        </div>
    );
}

export default UkrcavanjeVilicarem;