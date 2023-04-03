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
const foodData = [
  {
    id: 1,
    title: "Food",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/HaluskyzoZiaru.JPG/320px-HaluskyzoZiaru.JPG",
    price: "10",
  },

  {
    id: 2,
    title: "Foodxx",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0MY5PVx0K9X06JuiWvC6HdDrhGgAlJlp1A&usqp=CAU",
    price: "10",
  },
]

const drinksData = [
  {
    id: 1,
    title: "mulled ",
    image: "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg",
    price: "10",
  },

  {
    id: 2,
    title: "Irish cream",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/2021-Mocktails-f759ba8.jpg?quality=90&webp=true&fit=1100,733",
    price: "10",
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
        return <CustomCard data={foodData} />
      case 2:
        return <CustomCard data={drinksData} />
      case 3:
        return <CustomCard />
      case 4:
        return <CustomCard />
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
  paddingVertical: spacing.huge,
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
