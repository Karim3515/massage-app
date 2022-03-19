import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS, FONTS } from "../../constants/theme";
import { AppIcon } from "./AppIcon";
export const AppHeader = ({ isBack, title, rightView, otherStyles }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {isBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            {
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
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            },
            otherStyles,
          ]}
        >
          <AppIcon icon={icons.right_arrow} size={18} />
        </TouchableOpacity>
      )}
      {title && (
        <Text style={{ ...FONTS.body2, textAlign: "center", flex: 1 }}>
          {title}
        </Text>
      )}
      {rightView && (
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
          <Image
            // source={images.profile_pic}
            style={{ height: 40, width: 40 }}
          />
        </View>
      )}
    </View>
  );
};
