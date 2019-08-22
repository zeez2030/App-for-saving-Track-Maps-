import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
