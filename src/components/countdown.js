import React, { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { fontSizes, spacing } from "../utils/sizes"
import { colors } from "../utils/colors"

const MINUTES_TO_MILLIS = (min) => min * 1000 * 60

export const Countdown = ({ minutes = 20, isPaused }) => {
  const interval = useRef(null)

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time
      }
      const timeLeft = time - 1000
      return timeLeft
    })
  }

  useEffect(() => {
    interval.current = setInterval(countdown, 10000)

    return () => clearInterval(interval.current)
  }, [])

  const [millis, setMillis] = useState(MINUTES_TO_MILLIS(minutes))

  const MINUTE = Math.floor(millis / 1000 / 60) % 60
  const SECONDS = Math.floor(millis / 1000) % 60

  const formatTime = (time) => (time < 10 ? `0${time}` : time)

  return (
    <Text style={styles.title}>
      {formatTime(MINUTE)} : {formatTime(SECONDS)}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: fontSizes.xxl,
    color: colors.lightGray,
    backgroundColor: colors.lightBlue,
    fontWeight: "bold",
    padding: spacing.md,
  },
})
