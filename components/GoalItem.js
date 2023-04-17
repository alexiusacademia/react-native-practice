import { View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: "purple",
    borderRadius: 5,
  },

  listText: {
    color: "#fff",
    fontSize: 16,
  },
});
