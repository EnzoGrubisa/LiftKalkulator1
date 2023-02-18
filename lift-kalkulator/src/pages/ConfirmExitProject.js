import { useNavigate } from "react-router-dom";
import useSaveProject from "../projectData/saveData";

const ConfirmExitProject = () => {

    const navigate = useNavigate();

    const { saveProjectById } = useSaveProject();

    const exitSavingChanges = () => {
        saveProjectById();

        localStorage.removeItem("autosavedAllData");
		navigate("/home", {replace: true});
    }

    const exitDiscardingChanges = () => {
        localStorage.removeItem("autosavedAllData");
		navigate("/home", {replace: true});
    }

    const cancelExit = () => {
        document.getElementById("divConfirmExitProject").style.visibility = "collapse";
    }

    return (
        <div id="divConfirmExitProject">
            <div id="innerDivConfirmExitProject">
                <h3 className='centeredElement' id="confirmExitProjectTitle">Želite li spremiti promjene?</h3>
                <div>
                    <button id="saveConfirmExitProject" className="btn btn-success centeredElement" onClick={exitSavingChanges}>Spremi promjene</button>
                    <button id="discardConfirmExitProject" className="btn btn-danger centeredElement" onClick={exitDiscardingChanges}>Odbaci promjene</button>
                    <button id="cancelConfirmExitProject" className="btn btn-dark centeredElement" onClick={cancelExit}>Odustani</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmExitProject;