import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import useAuth from "../hooks/useAuth";

import axios from '../api/axios';
import React from "react";

import useLoadProject from '../projectData/loadData';

import { useProjektUpdate } from '../contexts/ProjektProvider';

const PROJECTS_LIST_URL = '/projectsList';


const ProjectsList = () => {

    const loadProjectById = useLoadProject();

    const { auth } = useAuth();

    const { setProjectId, setTab, setProjectName } = useProjektUpdate();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            //e.preventDefault();

            try {
                const response = await axios.post(
                    PROJECTS_LIST_URL,
                    JSON.stringify({ username: auth.username }),
                    {
                        headers: { 'Content-Type': "application/json" },
                        withCredentials: true
                    }
                );

                if (response?.status === 200) {
                    //console.log(response?.data);
                    setProjects(response?.data);
                    //console.log(projects);
                }
            } catch (err) {

            }
        }
        getProjects();
    }, [auth.username]);

    const loadProject = async (projectId) => {
        //console.log("loading project " + projectId);
        loadProjectById(projectId);
        setProjectId(projectId);
    }

    //console.log(projects.length);

    const confirmDeleteProjectDialog = (projectId, projectName) => {
        document.getElementById("divConfirmDeleteProject").style.visibility = "visible";
        setProjectId(projectId);
        setProjectName(projectName);
    }

    return (
        <div>
            <h4 className='centeredElement'>popis projekata:</h4>
            <ul>
                {projects.length > 0
                    ? projects.map((project) =>
                        <li style={{margin: "5px"}} key={project.id}>
                            <Link className='projectLink' onClick={() => { loadProject(project.id); setTab("projekt"); }} to="/calculator">
                                {project.projectName}
                            </Link>
                            <button className='btn btn-danger' onClick={() => confirmDeleteProjectDialog(project.id, project.projectName)}>
                                {/* trash can image */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>
                            </button>
                        </li>
                    )
                    : null
                }
            </ul>
        </div>
    );
}

export default ProjectsList;
