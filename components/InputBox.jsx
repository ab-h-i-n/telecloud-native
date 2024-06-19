import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import eyeImage from '../assets/images/eye.png';

const InputBox = ({
  placeHolder,
  value,
  onChange,
  otherStyles,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      className={`${otherStyles} bg-[#00000055] border-2 border-[#2f708a] focus:border-[#57C1EC] w-full h-[58px] rounded-[10px]`}
    >
      <TextInput
      maxLength={ keyboardType === "password" ? 10 : null}
        placeholder={placeHolder}
        placeholderTextColor={"#9b9b9b55"}
        value={value}
        onChangeText={onChange}
        className="text-white text-[16px] w-full h-full px-[20px] bg-transparent"
        secureTextEntry={keyboardType === "password" && !showPassword}
      />

      {
        keyboardType === "password" && (
          <TouchableOpacity
            className="absolute right-5 top-0 bottom-0 flex items-center justify-center"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
                source={eyeImage}
                className={`w-[30px] ${showPassword ? '' : 'opacity-50'}`}
                resizeMode="contain"
            />
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default InputBox;
