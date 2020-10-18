import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

export default function ToggleTimerForm({ isOpen }) {
  return (
    <View style={[styles.addButton, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton text="+" color="black" />}
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
    paddingVertical: 5,
  },
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
