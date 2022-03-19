import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AppButton, AppInput, HeroImage } from "../../components";
import { COLORS, FONTS } from "../../constants/theme";
export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeroImage isBack />
      <ScrollView>
        <View style={styles.bottom}>
          <AppInput placeholder={"Email or Phone"} />
          <AppInput placeholder={"Password"} />
          <TouchableOpacity
            style={styles.forgetBtn}
            onPress={() => navigation.navigate("forgotPassword")}
          >
            <Text style={styles.forgetTxt}>Forgot Password?</Text>
          </TouchableOpacity>
          <AppButton
            title={"Login"}
            otherStyles={{ marginTop: 40 }}
            onPress={() => navigation.navigate("login")}
          />
          <Text style={styles.txt_or}>Or</Text>
          <AppButton
            title={"Login With Google"}
            otherStyles={styles.btn_signup}
            textStyles={{ color: COLORS.primary }}
          />
          <AppButton
            title={"Login With Facebook"}
            otherStyles={styles.btn_signup}
            textStyles={{ color: COLORS.primary }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottom: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },

  btn_signup: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  forgetBtn: {
    marginTop: 10,
    width: "100%",
  },
  forgetTxt: {
    ...FONTS.h2,
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
    textAlign: "right",
  },
  txt_or: {
    marginTop: 10,
    color: COLORS.black,
    ...FONTS.body3,
  },
});
