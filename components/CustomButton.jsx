import { Text, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

const CustomButton = ({
  children,
  textStyles,
  BtnStyles,
  isLoading,
  handlePress,
}) => {

  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: "Gill Sans",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      backgroundColor: "transparent",
    },
  });

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-[#71E2FD] min-h-[58px] w-full rounded-lg items-center justify-center mt-5 ${BtnStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {/* <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      > */}
        <Text
          className={`text-primary text-[16px] font-psemibold ${textStyles}`}
        >
          {children}
        </Text>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default CustomButton;
