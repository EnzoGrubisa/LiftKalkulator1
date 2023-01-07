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

    const [ projects, setProjects ] = useState([]);

    

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

    const { setProjectId } = useProjektUpdate();
    
    const loadProject = async (projectId) => {
        //console.log("loading project " + projectId);
        loadProjectById(projectId);
        setProjectId(projectId);
    }

    return (
        <div>
            <h5>popis projekata:</h5>
            <ul>
                {projects.map((project) => 
                    <li key={project.id}>
                        <Link onClick={() => loadProject(project.id)} to="/calculator">
                            {project.projectName}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ProjectsList;
