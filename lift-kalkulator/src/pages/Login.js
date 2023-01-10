import { useState } from 'react';
// import AuthContext from '../contexts/AuthProvider'
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';
import { useNavigate, useLocation, Navigate} from 'react-router-dom';

const LOGIN_URL = '/login';

const Login = () => {

	// const { setAuth } = useContext(AuthContext);
	const { auth, setAuth } = useAuth();

	const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
	const [loginErrorMessage, setLoginErrorMessage] = useState("");

    const handleSubmit = async (e) => {
      	e.preventDefault();

		setLoginErrorMessage("");

		try {
			const response = await axios.post(
				LOGIN_URL, 
				JSON.stringify({username: username, password: password}),
				{
					headers: {'Content-Type': "application/json"},
					withCredentials: true
				}
			);

			//console.log("clearing usname and pwd");
			setUsername("");
			setPassword("");

			// const accessToken = response?.data?.accessToken;
			// const roles = response?.data?.roles;
			// setAuth({username, password, roles, accessToken});
			if(response?.status === 200){

				localStorage.setItem('auth', JSON.stringify({username}));
				//console.log(JSON.stringify({username}) + " saved in localStorage in login.js");
				setAuth({username});
				

				navigate(from, {replace: true});
				// navigate("/home", {replace: true});
			}
			// console.log(response);
			// console.log(auth);
		
			// console.log(response?.data);
			// console.log(response);
		} catch (err) {
			//console.log(err)
			if(!err?.response){
				setLoginErrorMessage("No server response.");
			}
			else if(err.response?.status){
				setLoginErrorMessage("Error status " + err.response?.status);
			}
			else{
				setLoginErrorMessage("Error");
			}
		}	
    }

    return (
		!auth?.username 
		?
      	<div>
			<h1>Prijava</h1>
			{loginErrorMessage.length > 0? 
			<h3>Greška: {loginErrorMessage}</h3>
			: null}
			<form onSubmit={handleSubmit}>
				<label htmlFor="usernameInput">Korisničko ime: </label>
				<input required type="text" id="usernameInput" autoComplete="off" onChange={(e) => {setUsername(e.target.value)}}/>
				
				<label htmlFor="passwordInput">Lozinka: </label>
				<input required type="password" id="passwordInput" onChange={(e) => {setPassword(e.target.value)}}/>
				
				<button disabled={username.length === 0 || password.length === 0} className="btn btn-primary">Prijavi me</button>
			</form>
      	</div>
		:
		<Navigate to="/home" state={{ from: location }} replace />
    );
}
  
export default Login;