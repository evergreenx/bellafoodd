import React, { FC, useState, useCallback } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, TouchableOpacity } from "react-native"
import { Screen, Text, Button, SearchBox, CustomCard } from "../../components"
import { colors, spacing } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { useStores } from "../../models" // @demo remove-current-line
import { TabScreenProps } from "../../navigators/TabNavigator"

const DATA = [
  {
    id: 1,
    title: "Food",
  },
  {
    id: 2,
    title: "Drinks",
  },
  {
    id: 3,
    title: "Snacks",
  },

  {
    id: 4,
    title: "Sauce",
  },
]

export const HomeScreen: FC<TabScreenProps<"Home">> = observer(function HomeScreen() {
  const [tab, setTab] = useState(1)
  const {
    authenticationStore: { logout },
  } = useStores()

  const setActiveTab = (tab: number) => {
    setTab(tab)
  }

  // Memoize  render item to prevent unnecessary re-renders
  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity
        style={{
          ...$homeTabButtonslider,
          borderColor: tab === item.id ? colors.palette.brandColor : colors.palette.homeTabText,
          borderBottomWidth: tab === item.id ? 3 : 0,
        }}
        onPress={() => setActiveTab(item.id)}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    ),
    [tab, setActiveTab],
  )

  const renderContent = () => {
    switch (tab) {
      case 1:

        return (
          <View>
            <Text>Food</Text>
          </View>
        )
      case 2:
        return (
          <View>
            <Text>Drinks</Text>
          </View>
        )
      case 3:
        return (
          <View>
            <Text>Snacks</Text>
          </View>
        )
      case 4:
        return (
          <View>
            <Text>Sauce</Text>
          </View>
        )
      default:
        return null
    }
  }

  return (
    <Screen
      style={$root}
      preset="scroll"
      safeAreaEdges={["top", "left", "right"]}
      contentContainerStyle={$screenContentContainer}
    >
      <Text tx="homeScreen.title" style={$homeHeadingText} preset="heading" />

      <View style={$searchboxContainer}>
        <SearchBox />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => {
          return renderItem({ item })
        })}
      </ScrollView>

      {renderContent()}

      <CustomCard />

      <Button
        preset="filled"
        tx="homeScreen.logout"
        onPress={() => {
          logout()
        }}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,

  backgroundColor: colors.palette.brandColorBg,
}
const $screenContentContainer: ViewStyle = {
  // paddingHorizontal: spacing.large,
  // paddingVertical: spacing.large,
}

const $homeTabButtonslider: TextStyle = {
  color: colors.palette.homeTabText,
  fontWeight: "400",
  fontSize: 17,
  paddingHorizontal: spacing.large,
  paddingVertical: spacing.large,
  paddingBottom: spacing.medium,
  marginLeft: spacing.large,
}

const $homeHeadingText: TextStyle = {
  fontSize: 34,
  fontWeight: "bold",
  width: "50%",
  paddingHorizontal: spacing.medium,
  paddingVertical: spacing.medium,
}

const $searchboxContainer: ViewStyle = {
  paddingHorizontal: spacing.medium,
  paddingVertical: spacing.medium,
}
