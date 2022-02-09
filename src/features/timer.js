import { View, Text, StyleSheet } from "react-native"
import React from "react"

import { Countdown } from "../components/countdown"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown />
      </View>
      <View>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignContent: "center",
    justifyContent: "center",
    margin: spacing.lg,
  },
  title: {
    color: colors.lightGray,
    textAlign: "center",
    fontSize: fontSizes.md,
    margin: spacing.sm,
  },
  task: {
    color: colors.lightGray,
    fontWeight: "bold",
    textAlign: "center",
  },
})
