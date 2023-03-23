import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image } from "react-native"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
import { colors, spacing } from "../theme"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `SignIn: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="SignIn" component={SignInScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
interface SignInScreenProps extends AppStackScreenProps<"SignIn"> {}

export const SignInScreen: FC<SignInScreenProps> = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const logo = require("../../assets/images/logoxx.png")
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "left"]}
    >
      <View style={$topContainer}>
        <Image source={logo} />

        <View style={$tabContainer}>
          <View>
            <Text>Login</Text>
          </View>

          <View>
            <Text>signup</Text>
          </View>
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.brandColorBg,
}

const $tabContainer: ViewStyle = {
  flex: 1,

}
const $screenContentContainer: ViewStyle = {}

const $topContainer: ViewStyle = {
  flex: 1,

  // backgroundColor: colors.palette.neutral100,
  backgroundColor: colors.palette.brandColor,
  height: 382,
  borderRadius: spacing.huge,
}
