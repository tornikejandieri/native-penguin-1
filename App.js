import { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import GoalInput from "./GoalInput"
import GoalItem from "./GoalItem"

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const start = () => {
    setIsVisible(true)
  }
  const end = () => {
    setIsVisible(false)
  }

  const handlePress = (id) => {
    // this function needs to be defined in the child GoalItem component with useState hook
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
    //closes modal after adding
    setIsVisible(false)
  }
  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='#5e0acc' onPress={start} />
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        isVisible={isVisible}
        end={end}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem itemData={itemData} handlePress={handlePress} />
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
})
