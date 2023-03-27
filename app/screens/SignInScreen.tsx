import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, TextStyle, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "../navigators"
import { Button, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { useStores } from "../models"
import { FlashList } from "@shopify/flash-list"

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

export const SignInScreen: FC<SignInScreenProps> = observer(function SignInScreen({ navigation }) {
  const [tab, setTab] = React.useState(1)

  const logo = require("../../assets/images/logoxx.png")

  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  const setActiveTab = (tab: number) => {
    setTab(tab)
  }
  const gotoNext = () => {
    setAuthToken(String(Date.now()))
  }
  const renderTab = () => {
    switch (tab) {
      case 1:
        return (
          <Button
            preset="intro"
            tx="introScreen.button"
            onPress={() => {
              gotoNext()
            }}
          />
        )

      case 2:
        return <Text>Sign Up</Text>

      default:
        return null
    }
  }
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["right", "left"]}
    >
      <View style={$topContainer}>
        <View style={$logoContainer}>
          <Image source={logo} />

          <Button
            preset="filled"
            tx="introScreen.button"
            onPress={() => {
              gotoNext()
            }}
          />
        </View>

        <View style={$tabContainer}>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              paddingHorizontal: 30,
              paddingBottom: spacing.medium,
              borderBottomWidth: tab === 1 ? 2 : 0,
              borderColor: colors.palette.brandColor,
            }}
            onPress={() => setActiveTab(1)}
          >
            <Text tx={"signInScreen.LoginTab.title"} style={$tabText}></Text>
          </TouchableOpacity>

          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              paddingHorizontal: spacing.large,
              paddingBottom: spacing.medium,
              borderBottomWidth: tab === 2 ? 2 : 0,
              borderColor: colors.palette.brandColor,
            }}
            onPress={() => setActiveTab(2)}
          >
            <Text tx={"signInScreen.SignUpTab.title"} style={$tabText}></Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={$formContainer}>
        {tab === 1 ? (
          <Button
            preset="intro"
            tx="introScreen.button"
            onPress={() => {
              gotoNext()
            }}
          />
        ) : (
          <Text>Tab 2</Text>
        )}
      </View>

      {renderTab()}
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
  // padding: spacing.large,
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
