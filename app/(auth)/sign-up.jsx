import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import centerImage from "../../assets/images/auth_center.png";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({});

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <SafeAreaView className="h-full bg-primary ">
      <ScrollView>
        <View className="px-[19px] py-[30px] items-center">
          {/* center image  */}
          <Image source={centerImage} className="h-[200px] w-[204px]" />

          {/* welcome text  */}
          <Text className="text-white font-pextrabold text-[32px] text-center">
            Welcome to, TeleCloud
          </Text>

          {/* input  box name  */}
          <InputBox
            placeHolder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-[23px]"
          />

          {/* input  box phone  */}
          <InputBox
            placeHolder="Enter your phone number"
            value={form.email}
            onChange={(e) => setForm({ ...form, phone_number: e })}
            otherStyles="mt-[23px]"
            keyboardType="number-pad"
          />

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
          <CustomButton>Sign Up</CustomButton>

          {/* sign up link  */}
          <Link
            href="(auth)/sign-in"
            className="text-white font-pregular text-[16px] mt-[32px]"
          >
            Already have an account?{" "}
            <Text className="text-[17px]">Sign In</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
