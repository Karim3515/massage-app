import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AppButton, AppInput, HeroImage } from "../../components";
import { COLORS, FONTS } from "../../constants/theme";
export const CreateNewPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeroImage isBack />
      <ScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.txt_forgot}>New Password</Text>
          <Text style={styles.txt_enterPhone}>Create Your New Password</Text>
          <AppInput placeholder={"New Password"} otherStyles={styles.input} />
          <AppInput placeholder={"Confirm New Password"} />
          <AppButton title={"Next"} otherStyles={styles.btn_next} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  bottomView: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    // backgroundColor: "red",
  },
  txt_forgot: {
    color: COLORS.black,
    ...FONTS.body2,
    marginTop: 20,
  },
  txt_enterPhone: {
    color: COLORS.gray,
    marginTop: 5,
  },
  input: {
    marginTop: 30,
  },
  btn_next: {
    marginTop: 30,
  },
});
