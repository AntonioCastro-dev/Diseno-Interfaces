import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "./Card";

const cards = [...'🔥💀😡😃🤢👽🐼🦑'];

export default function App() {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [intento, setIntento] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;

    setIntento(intento + 1);

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
  };

  const resetGame = () => {
    setBoard(shuffle([...cards, ...cards]));
    setSelectedCards([]);
    setMatchedCards([]);
    setIntento(0);
  };

  const didPlayerWin = () => matchedCards.length === board.length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Juego Parejas </Text>
      <Text style={styles.title}>Intentos: {intento}</Text>
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </Card>
          );
        })}
      </View>
      {didPlayerWin() && (
        <TouchableOpacity onPress={resetGame}>
          <Text style={styles.title}>Volver a Empezar</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f285e",
    alignItems: "center",
    justifyContent: "start",
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "snow",
    marginTop: 50,
    marginVertical: 15,
  },
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
