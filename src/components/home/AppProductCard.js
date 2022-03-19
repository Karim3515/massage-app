import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";
export const AppProductCard = ({ image, title, detail, price }) => {
  return (
    <View
      style={{
        height: 100,
        width: "70%",
        backgroundColor: COLORS.white,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        overflow: "hidden",
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
    >
      <Image source={image} style={{ height: 80, flex: 1, borderRadius: 10 }} />
      <View
        style={{
          flexDirection: "column",
          marginLeft: 10,
        }}
      >
        <Text style={{ ...FONTS.body3 }}>{title}</Text>
        <Text style={{ ...FONTS.h4, color: COLORS.gray }}>{detail}</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>{price}</Text>
      </View>
    </View>
  );
};
