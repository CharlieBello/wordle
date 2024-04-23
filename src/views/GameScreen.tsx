import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Caja from "../components/Caja";
import Vacio from "../components/Vacio";
import { GameContext } from "../context/GameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { historial } from "../interface/historial";

export default function GameScreen({navigation}: any) {
  var {setUltimo, setCambio} = useContext(GameContext);
  const words: string[] = ["COLAR", "ABEJA", "CARAS", "MENOS", "PALAS", "HIJOS", "KILOS", "AGUJA", "GARRA", "VOLAR"];
  const [input, setInput] = useState("");
  const [intento, setIntento] = useState(1);
  const [right, setRight] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [historial, setHistorial] = useState([] as React.JSX.Element[]);
  var color = "lightgrey";
  var aciertos = 0
  var errados = 0
  const [vacio, setVacio] = useState([
    <Vacio />,
    <Vacio />,
    <Vacio />,
    <Vacio />,
    <Vacio />,
  ]);
  const [indice, setIndex] = useState(Math.floor(Math.random() * words.length));
  var word = words[indice];
  var ganarCond = 0;

  if (input.length != 5 || intento == 6) {
    color = "lightgrey";
  } else {
    color = "blue";
  }

  useEffect(() => {
    if (vacio.length == 0 && ganarCond != 5) {
      setCambio(true)
      setUltimo({palabra: word, aciertos: right + aciertos, errados: wrong + errados, intentos: intento, isFound:false, puntaje: (((right + aciertos)*1000)+((wrong + errados)*500))*(1-(0.1*(intento-1)))} as historial)
      setLast(word,right + aciertos,wrong + errados,intento,false,(((right + aciertos)*1000)+((wrong + errados)*500))*(1-(0.1*(intento-1))));
      navigation.navigate("Puntuacion")
      setIntento(1);
      setRight(0)
      setWrong(0)
      setHistorial([]);
      setVacio([<Vacio />, <Vacio />, <Vacio />, <Vacio />, <Vacio />]);
      setIndex(Math.floor(Math.random() * words.length));
      word = words[indice]
      aciertos = 0
      errados = 0
      ganarCond = 0
    }
  }, [vacio]);

  const setLast = async (palabra: string, aciertos: number, errados: number, intentos: number, isFound: boolean, puntaje: number) => {
    try {
      const ultimo: historial = {palabra:palabra, aciertos:aciertos, errados:errados, intentos:intentos, isFound:isFound, puntaje:puntaje}
      await AsyncStorage.setItem("ultimo",JSON.stringify(ultimo))
    } catch (error) {
      console.log(error)
    }
  }


  function Verificar() {
    var spaces = vacio;
    var letras = [];
    if (input != "" && intento < 6) {
      console.log(aciertos,errados);
      [...input].map((letter, index) => {
        var letra = letter.toUpperCase();
        if (word.includes(letra)) {
          if (word[index] == letra) {
            letras.push(
              <Caja key={letras.length} letra={letra} color="green" />
            );
            ganarCond++;
            aciertos++;
          } else {
            letras.push(
              <Caja key={letras.length} letra={letra} color="orange" />
            );
            errados++;
          }
        } else {
          letras.push(<Caja key={letras.length} letra={letra} color="grey" />);
        }
      });
      console.log(aciertos,errados);
      setRight(right+aciertos)
      setWrong(wrong+errados)
      console.log(right,wrong);
      setIntento(intento + 1);
      setHistorial([
        ...historial,
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            rowGap: 1,
          }}
        >
          {letras}
        </View>,
      ]);
      spaces.pop();
      setVacio([...spaces]);
    }
    if (ganarCond == 5) {
      setCambio(true)
      setUltimo({palabra: word, aciertos: right + aciertos, errados: wrong + errados, intentos: intento, isFound:true, puntaje: (((right + aciertos)*1000)+((wrong + errados)*500))*(1-(0.1*(intento-1)))+1000} as historial)
      setLast(word,right + aciertos,wrong + errados,intento,true,(((right + aciertos)*1000)+((wrong + errados)*500))*(1-(0.1*(intento-1)))+1000);
      navigation.navigate("Puntuacion")
      setIntento(1);
      setRight(0)
      setWrong(0)
      setHistorial([]);
      setVacio([<Vacio />, <Vacio />, <Vacio />, <Vacio />, <Vacio />]);
      setIndex(Math.floor(Math.random() * words.length));
      word = words[indice]
      aciertos = 0
      errados = 0
      ganarCond = 0
    }
    setInput("");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={{ height: 15 }} />
        <Text style={{ alignSelf: "center", fontSize: 45, fontWeight: "bold" }}>
          Wordle
        </Text>
        <View style={{ height: 15 }} />
        <View
          style={{
            height: 300,
            justifyContent: "flex-start",
          }}
        >
          {historial}
          {vacio}
        </View>
      </View>
      <TextInput
        style={{
          borderColor: "lightgrey",
          borderWidth: 2,
          borderRadius: 5,
          paddingHorizontal: 10,
        }}
        maxLength={5}
        value={input}
        onChangeText={setInput}
      />
      <View style={{ height: 5 }} />
      <TouchableOpacity
        onPress={() => {
          Verificar();
        }}
        disabled={input.length != 5 || intento == 6}
        style={{ backgroundColor: color, borderRadius: 15 }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            margin: 8,
            color: "white",
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
