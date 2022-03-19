import React from "react";
import { View, Text, StyleSheet } from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { AppIcon } from "../base/AppIcon";
export const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...FONTS.body3 }}>Individual Massage</Text>
      <View style={styles.main_view}>
        <AppIcon icon={icons.ic_map} color={COLORS.primary} />
        <Text style={styles.card_heading_main}>
          <Text style={styles.card_heading}>Location: </Text>
          <Text style={styles.card_text}>
            134 Golden Street, Miami, FL KFC Hotel 3rd floor, room no
            120/parking available near hotel
          </Text>
        </Text>
      </View>
      <View style={styles.main_view}>
        <AppIcon icon={icons.ic_map} color={COLORS.primary} />
        <Text style={styles.card_heading_main}>
          <Text style={styles.card_heading}>Zip Code: </Text>
          <Text style={styles.card_text}>33101</Text>
        </Text>
      </View>
      <View style={styles.main_view}>
        <AppIcon icon={icons.ic_massage} color={COLORS.primary} />
        <Text style={styles.card_heading_main}>
          <Text style={styles.card_heading}>Services: </Text>
          <Text style={styles.card_text}>
            Swedish Massage, Deep Tissue Massage
          </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.main_view}>
          <AppIcon icon={icons.ic_user} color={COLORS.primary} />
          <Text style={styles.card_heading_main}>
            <Text style={styles.card_heading}>Thrapist: </Text>
            <Text style={styles.card_text}>2</Text>
          </Text>
        </View>
        <View style={styles.main_view}>
          <AppIcon icon={icons.ic_user} color={COLORS.primary} />
          <Text style={styles.card_heading_main}>
            <Text style={styles.card_heading}>
              Male: <Text style={styles.card_text}>1 </Text>
            </Text>
            <Text style={styles.card_heading}>
              Female: <Text style={styles.card_text}>1</Text>
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.main_view}>
        <AppIcon icon={icons.ic_clock} color={COLORS.primary} />
        <Text style={styles.card_heading_main}>
          <Text style={styles.card_heading}>Length: </Text>
          <Text style={styles.card_text}>90 Minutes</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main_view: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  card_heading_main: {
    marginLeft: 5,
    color: COLORS.black,
  },
  card_heading: {
    fontWeight: "800",
    ...FONTS.body3,
  },
  card_text: {
    color: COLORS.gray,
    ...FONTS.body5,
  },
});
