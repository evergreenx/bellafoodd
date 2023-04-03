import { Text, View, ViewStyle, TextStyle, Image } from "react-native"
import React from "react"
import { colors, spacing } from "../theme"
import { FlashList } from "@shopify/flash-list"

const testData = [
  {
    id: 1,
    title: "CustomCard ok test 1234",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Next-level-paella-f11ee26.jpg",
  },
  {
    id: 2,
    title: "Drinks",
    image:
    "https://media.cnn.com/api/v1/images/stellar/prod/160929101749-essential-spanish-dish-paella-phaidon.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280"
  },
  {
    id: 3,
    title: "Snacks",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8z5NcxowLUZH5zFDtx7ATvzGsLScfe_KsoA&usqp=CAU"
  },
]

export const CustomCard = () => {
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
      </View>
    )
  }
  return (
    <View style={$container}>
      <FlashList
        data={testData}
        horizontal={true}
        renderItem={renderCards}
        estimatedItemSize={200}
        showsHorizontalScrollIndicator={false}
        // hide scroll bar
      />

      <Text>CustomCard</Text>
    </View>
  )
}

const $cardContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  height: 270,
  width: 220,
  borderRadius: 30,
  shadowColor: "#000",
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
}
