import { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthProvider'
import axios from '../api/axios';

const LOGIN_URL = '/login';

const Login = () => {

	const { setAuth } = useContext(AuthContext);

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
				});

				setUsername("");
				setPassword("");

				const accessToken = response?.data?.accessToken;
				const roles = response?.data?.roles;
				setAuth({username, password, roles, accessToken});
				
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
				
				<button disabled={username.length === 0 || password.length === 0}>Prijavi me</button>
			</form>
      	</div>
    );
}
  
export default Login;