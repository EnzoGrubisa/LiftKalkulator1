import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    // // SAVE TO LOCAL STORAGE FOR ACCESS AFTER REFRESH PAGE

    // const [auth, setAuth] = useState({});
    
    // const localAuth = localStorage.getItem('auth');
    // if(localAuth){
    //     setAuth(JSON.parse(localAuth));
    //     console.log(localAuth);
    // }
    // //console.log(localAuth);
	// //const [auth, setAuth] = useState(localAuth? localAuth : {});
    // useEffect(()=>{
    //     localStorage.setItem('auth', JSON.stringify(auth));
    //     //console.log(auth);
    // }, [auth]);

    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;