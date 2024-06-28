import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  children,
  textStyles,
  BtnStyles,
  isLoading,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-[#71E2FD] min-h-[58px] w-full rounded-lg items-center justify-center mt-5 ${BtnStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-[16px] font-psemibold ${textStyles}`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
