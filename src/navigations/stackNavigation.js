import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateNewPasswordScreen,
  ForgetPasswordScreen,
  LoginScreen,
  RegisterScreen,
  WelcomeScreen,
} from "../screens";
import { Check } from "../screens/check";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="check" component={Check} /> */}
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      {/* authScreens */}
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="forgotPassword" component={ForgetPasswordScreen} />
      <Stack.Screen
        name="CreateNewPasswordScreen"
        component={CreateNewPasswordScreen}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
