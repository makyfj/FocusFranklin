import { View, Text, StyleSheet, Vibration, Platform } from "react-native"
import React, { useState } from "react"
import { ProgressBar } from "react-native-paper"
import { useKeepAwake } from "expo-keep-awake"

import { Countdown } from "../components/countdown"
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"
import { RoundedButton } from "../components/roundedButton"
import { Timing } from "../features/timing"

const DEFAULT_TIME = 0.1

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake()
  const [minutes, setMinutes] = useState(DEFAULT_TIME)
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(0)

  const onProgress = (newProgress) => {
    setProgress(newProgress)
  }

  const vibrate = () => {
    if (Platform.OS == "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000)
      setTimeout(() => clearInterval(interval), 10000)
    } else {
      Vibration.vibrate("10s")
    }
  }

  const onEnd = () => {
    vibrate()
    setMinutes(DEFAULT_TIME)
    setProgress(1)
    setIsStarted(false)
    onTimerEnd()
  }

  const changeTime = (min) => {
    setMinutes(min)
    setProgress(1)
    setIsStarted(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
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
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
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
      <View style={styles.clearSubject}>
        <RoundedButton title="X" size={65} onPress={() => clearSubject(true)} />
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
  buttonWrapper: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})
