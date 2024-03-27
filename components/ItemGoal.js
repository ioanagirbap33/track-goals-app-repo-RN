import { StyleSheet, View, Text, Pressable } from "react-native";

const ItemGoal = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#FFC0CB",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    margin: 8,
    color: "white",
  },
});
export default ItemGoal;
