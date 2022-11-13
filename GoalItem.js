import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ({ itemData, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
})
