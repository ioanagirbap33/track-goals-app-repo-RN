import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import ItemGoal from "./components/ItemGoal";
import { GoalInput } from "./components/GoalInput";
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandle = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput onChangeText={goalInputHandle} onPress={addGoalHandler} />
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandle}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <ItemGoal text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 57,
    paddingLeft: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
