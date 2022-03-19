import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AppButton, AppInput, HeroImage } from "../../components";
import { COLORS, FONTS } from "../../constants/theme";
export const ForgetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeroImage isBack />
      <ScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.txt_forgot}>Forgot Password</Text>
          <Text style={styles.txt_enterPhone}>
            Enter Your Registered Phone no
          </Text>
          <AppInput
            placeholder={"Enter Your Phone No..."}
            otherStyles={styles.input}
          />
          <AppButton
            title={"Next"}
            otherStyles={styles.btn_next}
            onPress={() => navigation.navigate("CreateNewPasswordScreen")}
          />
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
    marginTop: 60,
  },
  btn_next: {
    marginTop: 20,
  },
});
