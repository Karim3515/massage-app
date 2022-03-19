import React from "react";
import { Pressable, View, Text, Image, ActivityIndicator } from "react-native";
import { AppIcon } from "../base/AppIcon";
import { COLORS } from "../../constants/theme";
import LinearGradient from "react-native-linear-gradient";

const AppButton = ({
  title,
  onPress,
  icon,
  otherStyles,
  disabled = false,
  textStyles,
  loading = false,
  Righticon,
  iconStyles,
  leftIconStyles,
  iconColor,
  iconSize,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.3)" }}
      disabled={loading}
      onPress={onPress}
      style={[
        {
          width: "100%",
          height: 50,
          alignItems: "center",
          flexDirection: "row",
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: loading ? COLORS.gray : COLORS.primary,
        },
        otherStyles,
      ]}
    >
      {icon && (
        <View style={[{ marginLeft: 20, marginRight: 10 }, leftIconStyles]}>
          <Image
            source={icon}
            style={{ height: 20, width: 20, tintColor: "white" }}
          />
        </View>
      )}
      <Text
        style={[
          {
            fontWeight: "900",
            fontSize: 18,
            color: "white",
            textAlign: !icon ? "center" : null,
            flex: 1,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
      {Righticon && (
        <View style={iconStyles}>
          <AppIcon icon={Righticon} size={iconSize} color={iconColor} />
        </View>
      )}
      <View
        style={{
          position: "absolute",
          right: 15,
        }}
      >
        <ActivityIndicator
          animating={!disabled && loading ? true : false}
          size="small"
          color={COLORS.white}
        />
      </View>
    </Pressable>
  );
};

export { AppButton };
