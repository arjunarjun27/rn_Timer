import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TimerButton from "./TimerButton";
import { millisecondsToHuman } from "./utils/TimerUtils";

export default function Timer({ title, project, elapsed }) {
  const elapsedString = millisecondsToHuman(elapsed);

  return (
    <View
      style={{
        marginTop: 10,
        borderWidth: 2,
        padding: 5,
        borderColor: "#778899",
      }}
    >
      <Text style={styles.largeFont}>{title}</Text>
      <Text style={styles.largeFont}>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TimerButton color="" text="Create"></TimerButton>
        <TimerButton color="" text="Cancel"></TimerButton>
      </View>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.mediumFont}>Start</Text>
      </TouchableOpacity>
    </View>
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
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  textTimer: { alignSelf: "center", fontSize: 20 },
  mediumFont: { fontSize: 15 },
  largeFont: { fontSize: 18 },
});
