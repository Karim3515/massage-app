import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS } from "../../constants/theme";
import { AppIcon } from "../base/AppIcon";
export const HomeHeader = () => {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 3,
        }}
      >
        <AppIcon icon={icons.ic_menu} size={18} color={COLORS.black} />
      </TouchableOpacity>
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: COLORS.gray,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 3,
        }}
      >
        <Image source={images.profile_pic} style={{ height: 40, width: 40 }} />
      </View>
    </View>
  );
};
