import axios from '../../api/axios';

import { useProjekt } from "../../contexts/ProjektProvider";

const DELETE_PROJECT_URL = '/deleteProject';

const NewProject = () => {

    // const [createProjectErrorMessage, setCreateProjectErrorMessage] = useState("");

    const { projectId, projectName } = useProjekt();
    
    // async function createNewProject() {
    //     setCreateProjectErrorMessage("");

	// 	try {
	// 		const response = await axios.post(
	// 			NEW_PROJECT_URL, 
	// 			JSON.stringify({username: auth.username, projectName: newProjectName}),
	// 			{
	// 				headers: {'Content-Type': "application/json"},
	// 				withCredentials: true
	// 			}
	// 		);

	// 		if(response?.status === 200){
    //             document.getElementById("divNewProject").style.visibility = "collapse";
    //             window.location.reload();
	// 		}
	// 	} catch (err) {
	// 		//console.log(err)
	// 		if(!err?.response){
	// 			setCreateProjectErrorMessage("No server response.");
	// 		}
	// 		else if(err.response?.status){
    //             if(err.response?.status === 444){
    //                 setCreateProjectErrorMessage("već postoji projekt s tim imenom!");
    //             }
	// 			else{
    //                 setCreateProjectErrorMessage("Error status " + err.response?.status);
    //             }
	// 		}
	// 		else{
	// 			setCreateProjectErrorMessage("Error");
	// 		}
	// 	}	  
    // }

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
                <h3 id="confirmDeleteProjectTitle">Jeste li sigurni da želite obrisati projekt "{projectName}"?</h3>
                <button id="confirmDeleteProjectButton" className="btn btn-success" onClick={deleteProject}>Izbriši projekt</button>
                {/* <p id="createProjectErrorMessage">{createProjectErrorMessage}</p> */}

            </div>
        </div>
    );
}

export default NewProject;