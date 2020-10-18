import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import EditableTimer from "./EditableTimer";
import ToggleTimerForm from "./ToggleTimerForm";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", marginTop: 30 }}>
        <Text>Timers</Text>
      </View>
      <StatusBar style="auto" />
      <ScrollView>
        <ToggleTimerForm isOpen={false} />
        <EditableTimer id={2} title={"IPL"} project={"CSK"} elapsed={2222} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
