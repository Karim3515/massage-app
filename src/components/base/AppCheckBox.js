import React from "react";
import { TouchableOpacity, Text } from "react-native";
import CheckBox from "react-native-check-box";
import { COLORS, FONTS } from "../../constants/theme";

export const AppCheckBox = ({ isChecked, setIsChecked, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={setIsChecked}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: COLORS.white,
        paddingVertical: 5,
      }}
    >
      <CheckBox
        style={{ paddingRight: 5 }}
        onClick={setIsChecked}
        isChecked={isChecked}
        checkBoxColor="gray"
        checkedCheckBoxColor={COLORS.primary}
      />
      <Text
        style={{
          ...FONTS.body4,
          color: isChecked ? COLORS.primary : COLORS.gray,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
