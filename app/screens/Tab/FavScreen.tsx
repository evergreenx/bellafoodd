import React, { FC, useState, useCallback } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "../../navigators"
import { Screen, Text, Button } from "../../components"
import { colors, spacing } from "../../theme"
import { ScrollView } from "react-native-gesture-handler"
import { useStores } from "../../models" // @demo remove-current-line
import { TabScreenProps } from "../../navigators/TabNavigator"

export const FavScreen: FC<TabScreenProps<"Fav">> = observer(function FavScreen() {
  //   const [tab, setTab] = useState(1)
  //   const {
  //     authenticationStore: { logout },
  //   } = useStores()

  return (
    <Screen>
      <Text>Favorite</Text>
    </Screen>
  )
})
