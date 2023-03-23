import {
  StyleSheet,
  View,
  TextStyle,
  ViewStyle,
  Image,
  ImageBackground,
  ImageStyle,
} from "react-native"
import React from "react"
import {
  Button,
  Icon,
  Screen,
  Text,
  TextField,
  TextFieldAccessoryProps,
  AutoImage,
} from "../components"

import { colors, spacing } from "../theme"

const introImage = require("../../assets/images/intro.png")
export function IntroScreen({ navigation }) {
  const handleNavigation = () => {
    console.log("handleNavigation")
    navigation.navigate("SignIn")
  }
  return (
    <Screen
      preset="auto"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "left"]}
      backgroundColor={colors.introBG}
    >
      <View style={$topView}>
        <Image source={require("../../assets/images/logox.png")} style={logo} />

        <Text testID="intro-heading" tx="introScreen.title" preset="heading" style={$title} />
      </View>

      <Image
        source={require("../../assets/images/intro.png")}
        resizeMode="contain"
        style={$introImage}
        resizeMethod="scale"
      />

      <View style={$ButtonContainer}>
        <Button
          preset="intro"
          tx="introScreen.button"
          onPress={() => {
            handleNavigation()
          }}
        />
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  justifyContent: "space-between",
  flex: 1,
}

const logo: ImageStyle = {
  marginTop: 10,
  marginBottom: 20,
}

const $topView: ViewStyle = {
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
  color: colors.palette.neutral100,
  fontSize: 65,
  fontWeight: "900",
  lineHeight: 66,
  alignSelf: "stretch",
}

const $introImage: ImageStyle = {
  position: "absolute",
  top: 200,
  left: 0,
  right: 0,
  bottom: 0,
  marginTop: 100,
  marginBottom: 0,
}

const $ButtonContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
  paddingBottom: spacing.huge,
}
