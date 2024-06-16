import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* side images  */}

      <View className="h-full w-full absolute top-0 left-0">
        {/* left image  */}
        <Image
          source={require("../assets/images/onboarding_left.png")}
          className="w-[295px] h-[315px]"
          resizeMode="contain absolute -top-10 -left-10"
        />

        {/* right image  */}
        <Image
          source={require("../assets/images/onboarding_right.png")}
          className="w-[295px] h-[315px] absolute -bottom-20 -right-20"
          resizeMode="contain"
        />
      </View>

      {/* main content */}

      <View className="w-full h-full px-[20px] justify-center items-center gap-y-5">
        {/* center image  */}
        <Image
          source={require("../assets/images/onboarding_center.png")}
          className="w-[295px] h-[315px]"
          resizeMode="contain"
        />


        {/* text  */}
        <View className="w-full">
          <Text className="font-pextrabold text-white text-[40px]">
            Transform Telegram into Your Personal Cloud Storage
          </Text>
        </View>

        {/* button  */}
        <CustomButton handlePress={()=>router.push('/sign-in')} >Continue with email</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default index;
