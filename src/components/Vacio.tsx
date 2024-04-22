import { View, Text } from "react-native";
import React from "react";

export default function Vacio() {
  const empty = (
    <View
      style={{
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 10,
        borderColor: "lightgrey",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}></Text>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        rowGap: 1,
      }}
    >
      {empty}
      {empty}
      {empty}
      {empty}
      {empty}
    </View>
  );
}
