import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function PuntajeScreen({navigation}: any) {
  var { ultimo } = useContext(GameContext);
  var encontrada;
  if (ultimo.isFound) {
    encontrada = "fue";
  } else {
    encontrada = "no fue";
  }
  return (
    <View style={{ marginTop: 60, flex: 1 }}>
      <Text style={{ alignSelf: "center", fontSize: 45, fontWeight: "bold" }}>
        ¡Fin del juego!
      </Text>
      <View style={{
          backgroundColor: "lightgrey",
          width: "85%",
          alignSelf: "center",
          borderRadius: 15,
          padding: 10,
          marginTop: 60
        }}>
        <View>
            <Text style={{ alignSelf: "center", fontSize: 30, fontWeight: "bold" }}>
            Resultados
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
            Palabra: {ultimo.palabra}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
            Letras acertadas: {ultimo.aciertos}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
            Letras erroneas: {ultimo.errados}
            </Text>
            <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 18 }}>
            Intentos: {ultimo.intentos}
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
            {ultimo.puntaje}
            </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: 75,margin: 5}} onPress={()=> navigation.navigate("Home")}>
          <Text style={{margin: 8, fontSize: 18, fontWeight:'bold'}}>Volver al inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 8}} onPress={()=> navigation.navigate("Game")}>
          <Text style={{padding: 8, fontSize: 18, color: 'white', backgroundColor: 'blue', borderRadius: 10}}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
