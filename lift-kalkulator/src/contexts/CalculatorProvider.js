import { useState, createContext, useContext } from 'react';

const CalculatorContext = createContext();
const CalculatorUpdateContext = createContext();

export function useCalculator(){
    return useContext(CalculatorContext);
}

export function useCalculatorUpdate(){
    return useContext(CalculatorUpdateContext);
}

const CalculatorProvider = ({children}) => {

	const [vrstaDizala, setVrstaDizala] = useState("elektricno");
    const [bezStrojarnice, setBezStrojarnice] = useState(true);

    return (
        <CalculatorContext.Provider value={{vrstaDizala, bezStrojarnice}}>
            <CalculatorUpdateContext.Provider value={{setVrstaDizala, setBezStrojarnice}}>
                {children}
            </CalculatorUpdateContext.Provider>
        </CalculatorContext.Provider>
    );
}

export default CalculatorProvider;