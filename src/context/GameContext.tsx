import { createContext, useEffect, useState } from "react";
import { historial } from "../interface/historial";
import { dbInstance } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";

interface GameContextProps {
  ultimo: historial;
  setUltimo: React.Dispatch<React.SetStateAction<historial>>;
  cambio: boolean;
  setCambio: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GameContext = createContext({} as GameContextProps);

export const GameProvider = ({ children }) => {
    useEffect(()=>{
        readData();
    },[])

    const readData = async () => {
        const querySnapshot = await getDocs(collection(dbInstance, "historial"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          const list = [{...doc.data()} as historial]
          setUltimo(list[list.length-1])
          console.log(ultimo)
        });
      };

  const [ultimo, setUltimo] = useState({
    palabra: "NINGU",
    aciertos: 0,
    errados: 0,
    intentos: 0,
    isFound: false,
    puntaje: 0,
  } as historial);
  const [cambio, setCambio] = useState(false);
  return (
    <GameContext.Provider value={{ ultimo, setUltimo, cambio, setCambio}}>
      {children}
    </GameContext.Provider>
  );
};
