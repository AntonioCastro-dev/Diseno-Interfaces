import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
      onPress={onPress}
    >
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 80,
    height: 80,
    margin: 10,
    borderColor: "#335543",
    borderRadius: "15%",
    borderRadius: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32a862",
  },
  cardDown: {
    width: 80,
    height: 80,
    margin: 10,
    borderWidth: 10,
    borderColor: "#731936",
    borderRadius: 15,
    backgroundColor: "#c23c66",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 46,
    fontWeight: "600",
    color: "#e391ac",
  },
});