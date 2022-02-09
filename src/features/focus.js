import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

import { RoundedButton } from "../components/roundedButton"
import { fontSizes, paddingSizes, spacing } from "../utils/sizes"
import { colors } from "../utils/colors"

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState("house cleaning")

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onSubmitEditing={({ nativeEvent }) => {
              setTempItem(nativeEvent.text)
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => addSubject(tempItem)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: paddingSizes.md,
    justifyContent: "center",
  },
  title: {
    fontSize: fontSizes.lg,
    color: colors.lightGray,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    paddingTop: paddingSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: spacing.md,
  },
})
