import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"
import { ProgressBar } from "react-native-paper"

import { Countdown } from "../components/countdown"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"
import { RoundedButton } from "../components/roundedButton"

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(0)

  const onProgress = (newProgress) => {
    setProgress(newProgress)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} />
      </View>
      <View>
        <Text style={styles.title}>Franklin is focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          progress={progress}
          style={styles.progressBar}
          color={colors.lightBlue}
        />
      </View>
      <View style={styles.buttonsContainer}>
        {isStarted ? (
          <RoundedButton
            title="Stop"
            size={65}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={65}
            onPress={() => setIsStarted(true)}
          />
        )}
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
    fontSize: fontSizes.md,
  },
  progressBarContainer: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    height: 10,
  },
  buttonsContainer: {
    margin: spacing.md,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
})
