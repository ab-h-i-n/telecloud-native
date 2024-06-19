import { View, Text, Image } from "react-native";
import React from "react";
import centerImage from "../../assets/images/auth_center.png";

const SignIn = () => {
  return (
    <View className="h-full bg-primary px-[19px] py-[74px] items-center">
      {/* center image  */}
      <Image source={centerImage} className="h-[289px] w-[309px]" />

      {/* welcome text  */}
      <Text className="text-white font-pextrabold text-[32px] text-center">
        Welcome to, TeleCloud
      </Text>

      {/* input  box  */}

    </View>
  );
};

export default SignIn;
