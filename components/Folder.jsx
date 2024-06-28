import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import folderIcon from "../assets/icons/folder.png";
import chevronRight from "../assets/icons/chevron_right.png";

const Folder = ({ folder }) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View className="flex-row gap-x-3 items-end">
        {/* icon  */}
        <Image
          source={folderIcon}
          resizeMode="contain"
          className="w-[53px] h-[53px]"
        />

        {/* folder name  and date and number of internal files */}

        <View className="flex-1">
          {/* foldername */}
          <Text className="text-white font-psemibold text-[20px]">
            {folder.name}
          </Text>

          {/* date and number of files */}
          <View className="flex-row gap-x-2">
            {/* date  */}
            <Text className="text-white opacity-50 font-psemibold text-[11px]">
              {folder.date}
            </Text>
            <Text className="text-white opacity-50 font-psemibold text-[11px]">
              |
            </Text>
            {/* number of files */}
            <Text className="text-white opacity-50 font-psemibold text-[11px]">
              {folder.items} items
            </Text>
          </View>
        </View>

        {/* chevron right icon  */}
        <View className="justify-center h-full">
          <Image
            source={chevronRight}
            resizeMode="contain"
            className="w-[15px] h-[15px]"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Folder;
