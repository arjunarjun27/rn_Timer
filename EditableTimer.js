// import React, { Component } from "react";
// import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// export default class EditableTimer extends Component {
//   render() {
//     return (

//     );
//   }
// }

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) {
  if (editFormOpen) {
    return <TimerForm id={2} title={"IPL"} project={"CSK"}></TimerForm>;
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    ></Timer>
  );
}

const styles = StyleSheet.create({
  startButton: {
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
    paddingVertical: 10,
    marginTop: 10,
    borderColor: "#3CB371",
  },
  buttonStyles: {
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
    paddingHorizontal: 10,
    borderColor: "#1E90FF",
  },
  textTimer: { alignSelf: "center", fontSize: 20 },
  mediumFont: { fontSize: 15 },
  largeFont: { fontSize: 18 },
});
