import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, FONTS } from "../../constants/theme";
import { AppIcon } from "../base/AppIcon";
import icons from "../../constants/icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const AppPicker = ({
  items = [],
  selected,
  placeholder = "select item",
  setSelected,
  icon,
  otherStyles,
}) => {
  const pickerRef = React.useRef();

  function close() {
    pickerRef.current?.close();
  }

  function open() {
    pickerRef.current?.open();
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={open}
        style={[
          {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            paddingHorizontal: 10,
            borderColor: COLORS.gray,
            borderWidth: 1,
            borderRadius: 5,
            overflow: "hidden",
            backgroundColor: COLORS.lightGray,
          },
          otherStyles,
        ]}
      >
        <Text
          numberOfLines={1}
          style={{ ...FONTS.body3, flex: 1, color: COLORS.gray }}
        >
          {selected
            ? items.find((i) => i.value === selected)?.label
            : placeholder}
        </Text>
        {icon && (
          <AppIcon icon={icons.arrow_down} color={COLORS.gray} size={14} />
        )}
      </TouchableOpacity>
      <RBSheet
        ref={pickerRef}
        height={items.length > 4 ? 350 : 250}
        openDuration={250}
        customStyles={{
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}
      >
        <ScrollView
          style={{
            marginBottom: getBottomSpace(),
            marginTop: 20,
          }}
        >
          {items.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setSelected(item.value);
                close();
              }}
              key={`${index} - ${item.value}`}
              activeOpacity={0.7}
              style={{
                marginHorizontal: 10,
                marginBottom: 5,
                padding: 15,
                borderBottomColor: COLORS.lightGray,
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  textAlign: "center",
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </RBSheet>
    </>
  );
};
