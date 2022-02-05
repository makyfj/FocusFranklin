import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper"

import { RoundedButton } from "../components/roundedButton"

export const Focus = ({ addSubject }) => {

  const [tempItem, setTempItem] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onSubmitEditing={({ nativeEvent }) => { setTempItem(nativeEvent.text) }} />
          <RoundedButton size={50} title="+" onPress={() => addSubject(tempItem)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 20,
  }
});
