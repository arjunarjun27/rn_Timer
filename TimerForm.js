import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TimerButton from "./TimerButton";

export default function TimerForm({ id, title, project, elapsed, isRunning }) {
  const submitText = id ? "Update" : "Create";
  return (
    <View style={styles.formContainer}>
      <Text>Title</Text>
      <TextInput style={styles.textInput} defaultValue={title}></TextInput>
      <Text>Project</Text>
      <TextInput style={styles.textInput} defaultValue={project}></TextInput>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TimerButton text={submitText}></TimerButton>
        <TimerButton text="Cancel"></TimerButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: "90%",
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    marginBottom: 0,
    marginTop: 10,
  },
  textInput: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    backgroundColor: "#DCDCDC",
    height: 30,
    padding: 5,
    fontSize: 12,
  },
});
