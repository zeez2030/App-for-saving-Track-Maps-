import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import NavLink from "../components/NavLink.js";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account sign in instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
});

export default SignupScreen;
