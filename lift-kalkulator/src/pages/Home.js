import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import ProjectsList from "./ProjectsList";

const Home = () => {

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    setAuth({});
    navigate("/home", {replace: true});
  }

  return (
    <div>
        <h1>Home{auth.username? "(" + auth.username + ")" : ""}</h1>
        {!auth?.username? <Link to="/login"><button>Log in</button></Link> 
        : 
        <>
        <div>
          <ProjectsList/>
        </div>
        
        <button onClick={logout}>Log out</button> 
        </>}
        
    </div>
  );
}

export default Home;
