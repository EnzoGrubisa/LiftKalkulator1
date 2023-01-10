import { useState } from "react";

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

const NEW_PROJECT_URL = '/newProject';

const NewProject = () => {

    const [newProjectName, setNewProjectName] = useState("");
    const [createProjectErrorMessage, setCreateProjectErrorMessage] = useState("");

    const { auth } = useAuth();

    function closeNewProject() {
        document.getElementById("divNewProject").style.visibility = "collapse";
    }
    
    async function createNewProject() {
        setCreateProjectErrorMessage("");

		try {
			const response = await axios.post(
				NEW_PROJECT_URL, 
				JSON.stringify({username: auth.username, projectName: newProjectName}),
				{
					headers: {'Content-Type': "application/json"},
					withCredentials: true
				}
			);

			if(response?.status === 200){
                document.getElementById("divNewProject").style.visibility = "collapse";
                window.location.reload();
			}
		} catch (err) {
			//console.log(err)
			if(!err?.response){
				setCreateProjectErrorMessage("No server response.");
			}
			else if(err.response?.status){
                if(err.response?.status === 444){
                    setCreateProjectErrorMessage("već postoji projekt s tim imenom!");
                }
				else{
                    setCreateProjectErrorMessage("Error status " + err.response?.status);
                }
			}
			else{
				setCreateProjectErrorMessage("Error");
			}
		}	  
    }

    return (
        <div id="divNewProject">
            <div id="innerDivNewProject">
                <button id="closeNewProjectButton" className="btn btn-danger" onClick={closeNewProject}>X</button>

                <div id="newProjectName">
                    <h3 id="newProjectTitle">Unesite naziv novog projekta: </h3>
                    <input required type="text" id="newProjectNameInput" autoComplete="off" onChange={(e) => { setNewProjectName(e.target.value) }}></input>
                    <button disabled={newProjectName.length === 0} id="newProjectButton" className="btn btn-success" onClick={createNewProject}>Kreiraj projekt</button>
                    <p id="createProjectErrorMessage">{createProjectErrorMessage}</p>
                </div>

            </div>
        </div>
    );
}

export default NewProject;