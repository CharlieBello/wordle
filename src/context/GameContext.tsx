import { createContext, useState } from "react";
import { historial } from "../interface/historial";

interface GameContextProps {
    ultimo: historial
    setUltimo: React.Dispatch<React.SetStateAction<historial>>
    cambio: boolean
    setCambio: React.Dispatch<React.SetStateAction<boolean>>
}

export const GameContext = createContext({} as GameContextProps);

export const GameProvider = ({children}) => {
    const [ultimo, setUltimo] = useState({palabra: 'NINGU',aciertos:0,errados:0, intentos: 0, isFound: false,puntaje:0} as historial)
    const [cambio, setCambio] = useState(false)
    return <GameContext.Provider
    value={{ultimo, setUltimo, cambio, setCambio}}
    >
        {children}
    </GameContext.Provider>
}