import { createContext } from "react";

interface Puntaje {
    ultimoPuntaje: number
}

export const GameContext = createContext([] as Array<Puntaje>);

export const GameProvider = ({children}) => {
    return <GameContext.Provider
    value={[]}
    >
        {children}
    </GameContext.Provider>
}