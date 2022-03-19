import React from "react";
import { View, Text, ScrollView } from "react-native";
import { AppHeader, AppIcon, HomeHeader } from "../components";
import icons from "../constants/icons";
export const Check = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text>Hello Word</Text>
      <HomeHeader />
      <AppHeader isBack title rightView />
    </View>
  );
};
