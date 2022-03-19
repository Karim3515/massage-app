import React from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { COLORS, FONTS } from "../../constants/theme";
import icons from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { AppIcon } from "./AppIcon";

export const HeroImage = ({ isBack }) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../assets/bg_image.png")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").width * 1,
        }}
      ></ImageBackground>
      {isBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppIcon icon={icons.right_arrow} size={18} />
        </TouchableOpacity>
      )}
    </>
  );
};
