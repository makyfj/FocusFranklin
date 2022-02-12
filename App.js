import { useEffect, useState } from "react"
import { Platform, StyleSheet, Text, View } from "react-native"

import { Focus } from "./src/features/focus"
import { spacing } from "./src/utils/sizes"
import { colors } from "./src/utils/colors"
import { Timer } from "./src/features/timer"

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])

  useEffect(() => {
    if (focusSubject) {
      setFocusHistory([...focusHistory, focusSubject])
    }
  })

  console.log(focusHistory)
  return (
    <View style={styles.container}>
      <Text>
        {focusSubject ? (
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={() => {
              setFocusSubject(null)
            }}
            clearSubject={() => setFocusSubject(null)}
          />
        ) : (
          <Focus addSubject={setFocusSubject} />
        )}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === "ios" ? spacing.lg : spacing.xl,
    alignItems: "center",
  },
})
