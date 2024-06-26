import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Caja from "../components/Caja";
import { historial } from "../interface/historial";
import { GameContext } from "../context/GameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getDocs } from "firebase/firestore/lite";
import { dbInstance } from "../../firebase";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }: any) {
  var { ultimo, setUltimo, cambio, setCambio } = useContext(GameContext);
  var encontrada = "";
  const [last, setLast] = useState(
    <View>
      <Text>No hay partidas guardadas</Text>
    </View>
  );

  useEffect(() => {
    readData();
  }, [cambio]);

  var guardado: historial;
  const readData = async () => {
    const querySnapshot = await getDocs(collection(dbInstance, "historial"));
    var list: Array<historial> = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      list.push({ ...doc.data() } as historial);
    });
    console.log("Lista: ", list);
    setUltimo(list[0]);
    console.log("Ultimo: ", ultimo);
    guardado = list[0];
    getUltimo();
  };

  const getUltimo = async () => {
    try {
      console.log("Guardado: ", guardado);

      if (guardado != undefined) {
        setCambio(false);
        if (ultimo.isFound) {
          encontrada = "fue";
        } else {
          encontrada = "no fue";
        }
        console.log("Se guardó el ultimo");
        setLast(
          <View>
            <Text
              style={{ alignSelf: "center", fontSize: 30, fontWeight: "bold" }}
            >
              Última partida
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
              Palabra: {guardado.palabra}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
              Letras acertadas: {guardado.aciertos}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
              Letras erroneas: {guardado.errados}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
              Intentos: {guardado.intentos}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
              La palabra {encontrada} descubierta
            </Text>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Puntaje final
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 18 }}>
              {guardado.puntaje}
            </Text>
          </View>
        );
      }
      console.log("Se hizo algo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ marginTop: 60, flex: 1 }}>
      <Text style={{ alignSelf: "center", fontSize: 45, fontWeight: "bold" }}>
        Wordle
      </Text>
      <Text style={{ alignSelf: "center", fontSize: 25 }}>
        El juego de adivinar la palabra
      </Text>
      <View style={{ height: 60 }} />
      <TouchableOpacity
        style={{ justifyContent: "center", flexDirection: "row" , backgroundColor: "lightblue", paddingVertical:8}}
        onPress={() => navigation.navigate("Game")}
      >
        <Caja letra="J" color="green" />
        <Caja letra="U" color="green" />
        <Caja letra="G" color="green" />
        <Caja letra="A" color="green" />
        <Caja letra="R" color="green" />
      </TouchableOpacity>
      <View style={{ height: 60 }} />
      <View
        style={{
          backgroundColor: "lightgrey",
          width: "85%",
          alignSelf: "center",
          borderRadius: 15,
          padding: 10,
        }}
      >
        {last}
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: 'center'}}
      >
        <Icon name="qrcode" size={40} color="grey" onPress={() => navigation.navigate("QR")}>
        </Icon>
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
      >
        <Text>Por Carlos Bello, v1.6</Text>
      </View>
    </View>
  );
}
