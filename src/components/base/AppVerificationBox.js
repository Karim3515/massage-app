import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const size = SIZES.width / 6 - 12;
export const AppVerificationBox = ({
  setOtp1,
  setOtp2,
  setOtp3,
  setOtp4,
  setOtp5,
  setOtp6,
  otp1,
  otp2,
  otp3,
  otp4,
  otp5,
  otp6,
}) => {
  const inp1 = React.useRef();
  const inp2 = React.useRef();
  const inp3 = React.useRef();
  const inp4 = React.useRef();
  const inp5 = React.useRef();
  const inp6 = React.useRef();

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        ref={inp1}
        value={otp1}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp1(val);
            inp2.current?.focus();
          } else {
            setOtp1("");
          }
        }}
      />
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        ref={inp2}
        value={otp2}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp2(val);
            inp3.current?.focus();
          } else {
            setOtp2("");
          }
        }}
      />
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        value={otp3}
        ref={inp3}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp3(val);
            inp4.current?.focus();
          } else {
            setOtp3("");
          }
        }}
      />
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        ref={inp4}
        value={otp4}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp4(val);
            inp5.current?.focus();
          } else {
            setOtp4("");
          }
        }}
      />
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        value={otp5}
        ref={inp5}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp5(val);
            inp6.current?.focus();
          } else {
            setOtp5("");
          }
        }}
      />
      <TextInput
        style={styles.inputContainer}
        keyboardType="numeric"
        maxLength={1}
        ref={inp6}
        value={otp6}
        onChangeText={(val) => {
          if (isNaN(val)) return;
          if (val) {
            setOtp6(val);
          } else {
            setOtp6("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    height: size,
    width: size,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
});
