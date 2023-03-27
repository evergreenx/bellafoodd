import React from "react"

import { HomeScreen, FavScreen } from "../screens"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { TextStyle, ViewStyle } from "react-native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Icon } from "../components"
import { colors, spacing, typography } from "../theme"

import { CompositeScreenProps } from "@react-navigation/native"

export type TabParamsList = {
  Home: undefined
  Fav: undefined
}

export type TabScreenProps<T extends keyof TabParamsList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamsList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.palette.brandColor,
        tabBarInactiveTintColor: colors.palette.brandColor,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="home" color={focused && colors.tint} size={30} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="heart" color={focused && colors.tint} size={30} />
          ),
        }}
        name="Fav"
        component={FavScreen}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.palette.brandColorBg,
  borderTopColor: colors.palette.brandColorBg,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
