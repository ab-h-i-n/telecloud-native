import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Folder from "../../components/Folder";

const CloudScreen = () => {
  const folders = [
    {
      name: "My Files",
      date: "12th June 2021",
      items: 10,
    },
    {
      name: "Shared with me",
      date: "12th June 2021",
      items: 12,
    },
    {
      name: "Recent",
      date: "12th June 2021",
      items: 12,
    },
  ];

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="h-full mx-[20px]">
          {folders.map((folder, index) => {
            console.log(folder);
            return <Folder folder={folder} key={index} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CloudScreen;
