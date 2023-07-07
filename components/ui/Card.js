import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.eggPlant,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.cream,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    shadowOpacity: 0.25,
  },
});
export default Card;
