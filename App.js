import { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";
import uuid from "react-native-uuid";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, updateGoal] = useState([{ text: "Hello", key: "1" }]);

  const addGoalHandler = (goalText) => {
    updateGoal((previousGoals) => [
      ...previousGoals,
      { text: goalText, key: uuid.v4() },
    ]);
  };

  const onItemPressed = (key) => {
    const objIndex = goals.findIndex((obj) => obj.key === key);

    if (objIndex > -1) {
      updateGoal((currentGoals) =>
        currentGoals.filter((goal) => goal.key !== key)
      );
    }
  };

  return (
    <View style={styles.mainContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={(item) => {
            return (
              <GoalItem
                text={item.item.text}
                onPressed={onItemPressed}
                id={item.item.key}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    flex: 5,
  },
});
