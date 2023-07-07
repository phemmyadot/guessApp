import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessRound from "../components/game/GuessLog";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundsLength);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    maxBoundary = 100;
    minBoundary = 1;
  }, []);

  const nextGuessHandler = (direction) => {
    //lower/higher

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", styles: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((rounds) => [newRndNum, ...rounds]);
  };
  const guessRoundsLength = guessRounds.length;
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.intsructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24}></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24}></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.logs}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessRound
              roundNumber={guessRoundsLength - itemData.index}
              guess={itemData.item}
            >
              {itemData.item}
            </GuessRound>
          )}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginTop: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  intsructionText: { marginBottom: 16 },
  logs: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
