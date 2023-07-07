import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 24,
    margin: 24,
    borderColor: Colors.vanilla,
    borderWidth: 4,
    borderRadius: 8,
  },
  numberText: {
    fontSize: 36,
    fontFamily: "open-sans-bold",
    color: Colors.vanilla,
    textAlign: "center",
  },
});
export default NumberContainer;
