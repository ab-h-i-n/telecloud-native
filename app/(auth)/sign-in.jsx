import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import centerImage from "../../assets/images/auth_center.png";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email : "",
    password : ""
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <SafeAreaView className="h-full bg-primary ">
      <ScrollView>
        <View className="px-[19px] py-[74px] items-center">
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

          {/* Sign In buton  */}
          <CustomButton>Sign In</CustomButton>

          {/* sign up link  */}
          <Link
            // href="(auth)/sign-up"
            href={"/recent"}
            className="text-white font-pregular text-[16px] mt-[32px]"
          >
            Don't have an account? <Text className="text-[17px]">Sign Up</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
