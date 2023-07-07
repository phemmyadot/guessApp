import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function GuessRound({ roundNumber, guess }) {
  return (
    <View style={styles.logItem}>
      <Text style={styles.logText}>#{roundNumber}</Text>
      <Text style={styles.logText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logItem: {
    borderColor: Colors.eggPlant,
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: 8,
    backgroundColor: Colors.tiffanyBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: Colors.eggPlant,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    padding: 16,
    margin: 16,
  },
  logText: {
    fontFamily: "open-sans",
  },
});

export default GuessRound;
