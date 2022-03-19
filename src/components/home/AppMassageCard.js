import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS } from "../../constants/theme";
export const AppMassageCard = ({ image, title }) => {
  return (
    <View
      style={{
        marginRight: 10,
        marginLeft: 5,
        backgroundColor: COLORS.white,
        height: 140,
        width: "55%",
        borderRadius: 15,
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
      <Image
        source={image}
        style={{
          height: 110,
          width: "100%",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.gray,
        }}
      />
      <Text style={{ marginLeft: 10, marginTop: 5 }}>{title}</Text>
    </View>
  );
};
