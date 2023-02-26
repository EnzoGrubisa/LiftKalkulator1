import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import useAuth from "../hooks/useAuth";

import ProjectsList from "./ProjectsList";

import useLoadProject from '../projectData/loadData';

import ConfirmDeleteProject from "./components/ConfirmDeleteProject";

//import { useProjekt } from '../contexts/ProjektProvider';
import { useProjektUpdate } from '../contexts/ProjektProvider';

const Home = () => {

    const { auth, setAuth } = useAuth();

    const navigate = useNavigate();

    const loadProjectById = useLoadProject();

    const { setProjectId } = useProjektUpdate();

    useEffect(() => {
        const localDataString = localStorage.getItem('autosavedAllData');
        const localDataJson = JSON.parse(localDataString);
        if (localDataJson) {
            loadProjectById(localDataJson.projectId);
            setProjectId(localDataJson.projectId);
            navigate("/calculator", { replace: true });
            //console.log("project ID = " + localDataJson.projectId);
        }
    });

    const logout = () => {
        setAuth({});
        localStorage.setItem("auth", JSON.stringify({}));
        navigate("/home", { replace: true });
    }

    return (
        <div className="centerDiv">
            <h1 className='centeredElement'>Lift Kalkulator{auth.username ? "(" + auth.username + ")" : ""}</h1>
            {!auth?.username ? <Link to="/login"><button className="btn btn-primary centeredElement">Prijava</button></Link>
                :
                <>
                    <button onClick={logout} className="btn btn-dark centeredElement">Log out</button>
                    <ProjectsList />
                    <ConfirmDeleteProject />
                </>
            }
        </div>
    );
}

export default Home;