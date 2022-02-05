import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Focus } from "./src/features/focus"

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      <Text>{focusSubject ? "Here I want to build a timer" : <Focus />}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
  },
});
