import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../constants/theme";
import { AppIcon } from "../base/AppIcon";
export const AppCategory = ({ icon, title }) => {
  return (
    <View
      style={{
        height: 35,
        width: 120,
        marginLeft: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      {icon && <AppIcon icon={icon} color={COLORS.gray} />}

      {title && (
        <Text style={{ color: COLORS.gray, marginLeft: 5 }}>{title}</Text>
      )}
    </View>
  );
};
