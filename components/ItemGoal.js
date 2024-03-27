import { StyleSheet, View, Text } from "react-native";

const ItemGoal = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#FFC0CB",
  },
  goalText: {
    margin: 8,
    color: "white",
  },
});
export default ItemGoal;
