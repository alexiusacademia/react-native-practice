import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  const onItemPressed = () => {
    return props.onPressed(props.id);
  };

  return (
    <Pressable onPress={onItemPressed}>
      <View style={styles.listItem}>
        <Text style={styles.listText}>{props.text}</Text>
      </View>
    </Pressable>
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
