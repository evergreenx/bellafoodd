import { View, Text, ViewStyle, TextStyle } from "react-native"
import React from "react"
import { observer } from "mobx-react-lite"

import { Icon } from "./Icon"
import { spacing, colors } from "../theme"
import { TextInput } from "react-native-gesture-handler"

export function SearchBox() {
  return (
    <View style={$searchContainer}>
      <View style={$iconContainer}>
        <Icon icon="search" />
      </View>

      <TextInput placeholder="Searcvvvvvvh" style={$searchInput} />
    </View>
  )
}

const $searchContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colors.palette.searchbarbg,
  borderRadius: spacing.huge,

  paddingHorizontal: 30,
  paddingVertical: spacing.tiny,
  width: "100%",
}

const $iconContainer: ViewStyle = {
  marginRight: spacing.small,
}

const $searchInput: TextStyle = {
  width: 270,
  fontSize: 17,
  color: colors.palette.neutral900,
  fontWeight: "600",
  opacity: 0.5,
  padding: spacing.small,
}
