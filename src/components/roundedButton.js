import { StyleSheet, Text, TouchableOpacity } from "react-native"

import { colors } from "../utils/colors"

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "white",
      borderWidth: 2,
      marginTop: 5,
      backgroundColor: colors.lightBlue,
    },
    text: {
      color: colors.lightGray,
      fontSize: size / 3,
      fontWeight: "bold",
    },
  })
