import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedButton]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.cream }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.vanilla,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  pressedButton: {
    backgroundColor: Colors.cream,
  },
  buttonText: {
    color: Colors.eggPlant,
    textAlign: "center",
  },
});
export default PrimaryButton;
