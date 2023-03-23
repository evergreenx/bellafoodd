import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, TextStyle, Button, TouchableOpacity } from "react-native"
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
  const [tab, setTab] = React.useState(1)

  const logo = require("../../assets/images/logoxx.png")

  const setActiveTab = (tab: number) => {
    setTab(tab)
  }

  return (
    <Screen
      style={$root}
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["right", "left"]}
    >
      <View style={$topContainer}>
        <View style={$logoContainer}>
          <Image source={logo} />
        </View>

        <View style={$tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab(1)}>
            <Text style={$tabText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveTab(2)}>
            <Text style={$tabText}>signup</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={$formContainer}>
        {tab === 1 ? <Text>Tab 1</Text> : <Text>Tab 2</Text>}
  
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  // backgroundColor: colors.palette.brandColorBg,
  backgroundColor: colors.palette.neutral100,
  height: "100%",
}

const $screenContentContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
}

const $topContainer: ViewStyle = {
  padding: spacing.large,
  justifyContent: "space-around",
  // alignItems: "center",
  // flexDirection: "column",
  height: 382,
  width: "100%",
  borderRadius: spacing.huge,
  zIndex: 2,
  backgroundColor: colors.palette.neutral100,
  position: "absolute",
}

const $tabText: TextStyle = {
  color: colors.palette.neutral900,
  fontSize: 18,
  fontWeight: "600",
  textTransform: "capitalize",
}

const $logoContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 90,
}

const $tabContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "flex-end",
}

const $formContainer: ViewStyle = {
  backgroundColor: colors.palette.brandColorBg,
  height: 900,
  width: "100%",
  borderRadius: spacing.huge,
  zIndex: 1,
  // flex:  1,
  justifyContent: "center",
  alignItems: "center",
}

// const $tt: TextStyle = {
//   color: "red",
//   fontSize: 18,
//   fontWeight: "600",
// }
