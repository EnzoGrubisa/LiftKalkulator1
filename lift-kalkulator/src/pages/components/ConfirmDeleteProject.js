import axios from '../../api/axios';

import { useProjekt } from "../../contexts/ProjektProvider";

const DELETE_PROJECT_URL = '/deleteProject';

const NewProject = () => {

    const { projectId, projectName } = useProjekt();

    const deleteProject = async () => {
        try {
            const response = await axios.post(
                DELETE_PROJECT_URL,
                JSON.stringify({ projectId: projectId }),
                {
                    headers: { 'Content-Type': "application/json" },
                    withCredentials: true
                }
            );

            if (response?.status === 200) {
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    function closeConfirmDeleteProject() {
        document.getElementById("divConfirmDeleteProject").style.visibility = "collapse";
    }

    return (
        <div id="divConfirmDeleteProject">
            <div id="innerDivConfirmDeleteProject">
                <button id="closeConfirmDeleteProjectButton" className="btn btn-danger" onClick={closeConfirmDeleteProject}>X</button>
                <h3 className='centeredElement' id="confirmDeleteProjectTitle">Jeste li sigurni da želite obrisati projekt "{projectName}"?</h3>
                <button id="confirmDeleteProjectButton" className="btn btn-success centeredElement" onClick={deleteProject}>Izbriši projekt</button>
            </div>
        </div>
    );
}

export default NewProject;