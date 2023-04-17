import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  const inputhandler = (text) => {
    setGoalText(text);
  };

  const onAddGoal = () => {
    /**
     * Send the goalText state to the calling
     * function in the parent component
     */
    props.onAddGoal(goalText);
    // The onAddGoal prop here will be used by the parent component
    setGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Goal..."
        style={styles.textInput}
        onChangeText={inputhandler}
        value={goalText}
      />
      <Button title="Add Goal" style={{ flex: 1 }} onPress={onAddGoal} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
    fontSize: 16,
  },
});
