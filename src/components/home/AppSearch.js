import React from "react";
import { View, TextInput } from "react-native";
import icons from "../../constants/icons";
import { COLORS } from "../../constants/theme";
import { AppIcon } from "../base/AppIcon";
export const AppSearch = () => {
  return (
    <View
      style={{
        marginTop: 20,
        height: 45,
        width: "100%",
        borderRadius: 50,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <AppIcon icon={icons.ic_search} color={COLORS.gray} size={22} />
        <TextInput
          placeholder={"Search"}
          style={{
            backgroundColor: COLORS.white,
            flex: 1,
            height: 40,
            marginLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          borderColor: COLORS.lightGray,
          borderWidth: 4,
        }}
      >
        <AppIcon icon={icons.ic_filter} color={COLORS.white} size={22} />
      </View>
    </View>
  );
};
