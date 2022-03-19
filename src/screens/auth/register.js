import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppHeader, AppInput, AppPicker } from "../../components";
import { COLORS, FONTS } from "../../constants/theme";
export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader isBack otherStyles={{ backgroundColor: COLORS.lightGray }} />
      <Text style={styles.txt_title}>Register</Text>
      <View style={styles.inp_view}>
        <AppInput placeholder={"First Name"} otherStyles={styles.input} />
        <AppInput placeholder={"Last Name"} otherStyles={styles.input} />
      </View>
      <AppInput placeholder={"Email"} />
      <AppInput placeholder={"Phone"} />
      <AppInput placeholder={"Password"} />
      <AppInput placeholder={"Confirm Password"} />
      <AppPicker icon placeholder="Male" otherStyles={styles.picker} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 20,
  },
  txt_title: {
    marginTop: 30,
    color: COLORS.black,
    ...FONTS.body2,
  },
  inp_view: {
    width: "100%",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "48%",
  },
  picker: {
    width: "40%",
  },
});
