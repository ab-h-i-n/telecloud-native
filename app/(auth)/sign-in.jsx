import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import centerImage from "../../assets/images/auth_center.png";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";

const SignIn = () => {
  const [form, setForm] = useState({});

  return (
    <SafeAreaView className="h-full bg-primary px-[19px] py-[74px] items-center">
      {/* center image  */}
      <Image source={centerImage} className="h-[289px] w-[309px]" />

      {/* welcome text  */}
      <Text className="text-white font-pextrabold text-[32px] text-center">
        Welcome to, TeleCloud
      </Text>

        {/* input  box email  */}
        <InputBox
          placeHolder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-[23px]"
          keyboardType="email-address"
        />

        {/* input box password  */}
        <InputBox
          placeHolder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-[23px]"
          keyboardType="password"
        />

    </SafeAreaView>
  );
};

export default SignIn;
