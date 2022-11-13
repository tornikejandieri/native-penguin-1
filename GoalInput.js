import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native"

const GoalInput = ({ end, addGoalHandler, goalInputHandler, isVisible }) => {
  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("./assets/penguin.png")} />
        <TextInput
          style={styles.textInput}
          placeholder='your course goal'
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={addGoalHandler} title='add goal' />
          <Button onPress={end} title='cancel'></Button>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#333",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
