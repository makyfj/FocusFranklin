import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"

import { Focus } from "./src/features/focus"
import { spacing } from "./src/utils/sizes"
import { colors } from "./src/utils/colors"

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
      <Text>
        {focusSubject ? (
          "I want to build a timer"
        ) : (
          <Focus addSubject={setFocusSubject} />
        )}
      </Text>
      <Text>{focusSubject}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: spacing.xl,
  },
})
