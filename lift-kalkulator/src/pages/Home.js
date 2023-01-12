import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import ProjectsList from "./ProjectsList";

import NewProject from "./components/NewProject";
import ConfirmDeleteProject from "./components/ConfirmDeleteProject";

const Home = () => {

  const { auth, setAuth } = useAuth();

  //setProjectId(0);

  const navigate = useNavigate();

  const logout = () => {
    setAuth({});
    localStorage.setItem("auth", JSON.stringify({}));
    navigate("/home", {replace: true});
  }
  
  const newProjectDialog = () => {
    document.getElementById("divNewProject").style.visibility = "visible";
  }

  return (
    <div>
        <h1>Home{auth.username? "(" + auth.username + ")" : ""}</h1>
        {!auth?.username? <Link to="/login"><button className="btn btn-primary">Log in</button></Link> 
        : 
        <>
          <button onClick={newProjectDialog} className="btn btn-success">Novi projekt</button>

          <div>
            <ProjectsList/>
          </div>
          
          <button onClick={logout} className="btn btn-dark">Log out</button> 

          <NewProject/>
          <ConfirmDeleteProject/>
        </>}
        
    </div>
  );
}

export default Home;
