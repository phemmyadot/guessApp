import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: Colors.tiffanyBlue,
    textAlign: "center",
    padding: 12,
    borderColor: Colors.tiffanyBlue,
    borderWidth: 2,
    maxWidthß: "80%",
  },
});
export default Title;
