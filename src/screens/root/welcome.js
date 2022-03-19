import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, HeroImage } from "../../components";
import { COLORS, FONTS } from "../../constants/theme";
export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeroImage />
      <ScrollView>
        <View style={styles.bottom}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <AppButton
            title={"Login"}
            otherStyles={{ marginTop: 50 }}
            onPress={() => navigation.navigate("login")}
          />
          <AppButton
            title={"Sign up"}
            otherStyles={styles.btn_signup}
            textStyles={{ color: COLORS.primary }}
            onPress={() => navigation.navigate("RegisterScreen")}
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
  text: {
    marginTop: 20,
    color: COLORS.black,
    ...FONTS.h2,
  },
  btn_signup: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginTop: 20,
  },
});
