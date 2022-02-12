import React, { useEffect, useRef, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { fontSizes, spacing } from "../utils/sizes"
import { colors } from "../utils/colors"

const MINUTES_TO_MILLIS = (min) => min * 1000 * 60

export const Countdown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null)
  const [millis, setMillis] = useState(null)
  const MINUTE = Math.floor(millis / 1000 / 60) % 60
  const SECONDS = Math.floor(millis / 1000) % 60

  const formatTime = (time) => (time < 10 ? `0${time}` : time)

  const countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time
      }
      const timeLeft = time - 1000
      onProgress(timeLeft / MINUTES_TO_MILLIS(minutes))
      return timeLeft
    })
  }

  useEffect(() => {
    setMillis(MINUTES_TO_MILLIS(minutes))
  }, [minutes])

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return
    }
    interval.current = setInterval(countdown, 1000)
    return () => clearInterval(interval.current)
  }, [isPaused])

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
