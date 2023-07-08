import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: deviceWidth < 380 ? 12 : 24,
    margin: 24,
    borderColor: Colors.vanilla,
    borderWidth: 4,
    borderRadius: 8,
  },
  numberText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
    color: Colors.vanilla,
    textAlign: "center",
  },
});

export default NumberContainer;
