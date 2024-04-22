import { createContext } from "react";

export const GameContext = createContext({} as any);

export const GameProvider = ({children}) => {
    return <GameContext.Provider
    value={{}}
    >
        {children}
    </GameContext.Provider>
}