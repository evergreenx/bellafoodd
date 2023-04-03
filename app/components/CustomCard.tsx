import { Text, View, ViewStyle, TextStyle, Image } from "react-native"
import React from "react"
import { colors, spacing } from "../theme"
import { FlashList } from "@shopify/flash-list"

export const CustomCard = (data) => {
  console.log("data", data.data)
  const renderCards = ({ item }) => {
    return (
      <View key={item.id} style={$cardContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: 160,
            height: 160,
            borderRadius: 100,
            resizeMode: "cover",
            shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 12,
            },
            shadowOpacity: 0.58,
            position: "absolute",
            top: -55,
          }}
        />
        <Text style={$foodTitle}>{item.title}</Text>
        <Text style={$priceText}>$ {item.price}</Text>
      </View>
    )
  }
  return (
    <View style={$container}>
      <FlashList
        data={data.data}
        horizontal={true}
        renderItem={renderCards}
        estimatedItemSize={200}
        showsHorizontalScrollIndicator={false}
        // hide scroll bar
      />
    </View>
  )
}

const $cardContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  height: 270,
  width: 220,
  borderRadius: 30,
  shadowColor: "#3939391A",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 10,
  marginRight: spacing.large,
  marginLeft: spacing.large,
  padding: spacing.large,
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing.massive,
  marginBottom: spacing.massive,
}

const $foodTitle: TextStyle = {
  fontSize: 22,
  color: colors.palette.neutral900,
  fontWeight: "600",
  opacity: 0.5,
  padding: spacing.small,
  textAlign: "center",
  marginTop: spacing.large,
}

const $container: ViewStyle = {
  // marginHorizontal: spacing.large,
  marginVertical: spacing.large,
}
const $priceText: TextStyle = {
  color: colors.palette.brandColor,
  fontWeight: "700",
  lineHeight: 20,
  fontSize: 17,
}
