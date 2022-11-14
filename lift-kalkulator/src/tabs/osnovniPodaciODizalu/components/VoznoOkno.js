//import { useEffect, useState } from 'react';

import TitledInput from "../../../components/TitledInput";

const VoznoOkno = () => {
    
    return (
        <div className='container-fluid' style={{border: "solid", borderColor: "red"}}>
            <TitledInput title="Broj postaja (nst)"/><br/>
            <TitledInput title="Broj ulaza (netc)" sDesna="mm"/><br/>
            <br/><br/>
            <TitledInput title="Visina dizanja (H)" sDesna="mm"/><br/>
            <br/><br/>
            <TitledInput title="Tlocrtna širina (SW)" sDesna="mm"/><br/>
            <TitledInput title="Tlocrtna dubina (SD)" sDesna="mm"/><br/>
            <br/><br/>
            <TitledInput title="Dubina jame (PD)" sDesna="mm"/><br/>
            <TitledInput title="Nadvišenje (HH)" sDesna="mm"/>
            {/* <div className="row">
                <div className="col-sm">
                    
                </div>
                <div className="col-sm"></div>
                <div className="col-sm"></div>
            </div> */}
        </div>
      
    );
}
  
export default VoznoOkno;