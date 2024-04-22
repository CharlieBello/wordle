import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import Caja from "../components/Caja";
import Vacio from "../components/Vacio";

export default function GameScreen() {
  const words: string[] = ["COLAR", "ABEJA", "CARAS", "MENOS"];
  const [input, setInput] = useState("");
  const [intento, setIntento] = useState(1);
  const [resultados, setResultados] = useState(false);
  const [perder, setPerder] = useState(false);
  const [ganar, setGanar] = useState(false);
  const [historial, setHistorial] = useState([] as React.JSX.Element[]);
  var color = "lightgrey";
  const [vacio, setVacio] = useState([
    <Vacio />,
    <Vacio />,
    <Vacio />,
    <Vacio />,
    <Vacio />,
  ]);
  const [indice, setIndex] = useState(Math.floor(Math.random() * words.length));
  var palabra = words[indice];
  var ganarCond = 0;

  if (input.length != 5 || ganar == true || intento == 6) {
    color = "lightgrey";
  } else {
    color = "blue";
  }

  useEffect(() => {
    if (vacio.length == 0 && ganarCond != 5) {
      setPerder(true);
    }
  }, [vacio]);

  function Verificar() {
    var spaces = vacio;
    var letras = [];
    if (input != "" && intento < 6) {
      [...input].map((letter, index) => {
        var letra = letter.toUpperCase();
        if (palabra.includes(letra)) {
          if (palabra[index] == letra) {
            letras.push(
              <Caja key={letras.length} letra={letra} color="green" />
            );
            ganarCond++;
          } else {
            letras.push(
              <Caja key={letras.length} letra={letra} color="orange" />
            );
          }
        } else {
          letras.push(<Caja key={letras.length} letra={letra} color="grey" />);
        }
      });
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
      setGanar(true);
      setResultados(true);
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
        disabled={input.length != 5 || ganar == true || intento == 6}
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
      <Modal visible={resultados} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 175,
              width: 325,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 20,
              backgroundColor: "rgba(255,255,255,1)",
            }}
          >
            <Text style={{ fontSize: 32, marginBottom: 10 }}>
              ¡Felicidades!
            </Text>
            <Text style={{ fontSize: 18, color: "black" }}>
              Diste con la palabra correcta ¿Pero podras hacerlo otra vez?
            </Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <TouchableOpacity
                  onPress={() => setResultados(false)}
                  style={{ padding: 5 }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "grey",
                      fontSize: 15,
                      marginHorizontal: 10,
                    }}
                  >
                    Terminar el juego
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setResultados(false);
                    setIntento(1);
                    setGanar(false);
                    setHistorial([]);
                    setVacio([
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                    ]);
                    setIndex(Math.floor(Math.random() * words.length));
                    palabra = words[indice];
                    ganarCond = 0
                  }}
                  style={{
                    backgroundColor: "blue",
                    borderRadius: 25,
                    padding: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 18,
                      marginHorizontal: 10,
                    }}
                  >
                    ¡Otra vez!
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={perder} transparent animationType="fade">
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 175,
              width: 325,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 20,
              backgroundColor: "rgba(255,255,255,1)",
            }}
          >
            <Text style={{ fontSize: 32, marginBottom: 10 }}>
              ¡Has perdido!
            </Text>
            <Text style={{ fontSize: 18 }}>
              La palabra era {palabra} ¿Quieres volver a intentarlo?
            </Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <TouchableOpacity
                  onPress={() => setPerder(false)}
                  style={{ padding: 5 }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "grey",
                      fontSize: 18,
                      marginHorizontal: 10,
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
                <View style={{width:50}}/>
                <TouchableOpacity
                  onPress={() => {
                    setPerder(false);
                    setIntento(1);
                    setGanar(false);
                    setHistorial([]);
                    setVacio([
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                      <Vacio />,
                    ]);
                    setIndex(Math.floor(Math.random() * words.length));
                    palabra = words[indice];
                    ganarCond = 0
                  }}
                  style={{
                    backgroundColor: "blue",
                    borderRadius: 25,
                    padding: 5,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: 18,
                      marginHorizontal: 10,
                    }}
                  >
                    Si
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
