import { Image, StyleSheet, Text, View } from "react-native";
import Title from "./../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summeryText}>
        Your phone need <Text style={styles.highlightText}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderColor: Colors.cream,
    overflow: "hidden",
    margin: 36,
    borderRadius: 150,
    borderWidth: 4,
    height: 300,
    width: 300,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summeryText: {
    fontFamily: "open-sans",
    color: Colors.eggPlant,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
