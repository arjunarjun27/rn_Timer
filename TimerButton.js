import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TimerButton({ color, text, small, onPress }) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyles, { borderColor: color }]}
        onPress={onPress}
      >
        <Text style={(styles.buttonText, small ? styles.small : styles.large)}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyles: {
    borderWidth: 2,
  },
  small: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  buttonText: { textAlign: "center", fontWeight: "bold" },
});
