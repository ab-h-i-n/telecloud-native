import { View, Text, Image } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import recentIcon from "../../assets/icons/recent.png";
import cloudIcon from "../../assets/icons/cloud.png";

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View className="items-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
        tintColor={color}
      />
      <Text className={`font-psemibold text-xs`} style={{ color : color }}  >{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3BBBEE",
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarStyle:{
            backgroundColor:"#01040E",
            borderTopWidth:0,
            height: 70,
          }
        }}
      >
        <Tabs.Screen
          name="recent"
          options={{
            title: "Recent",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={recentIcon}
                color={color}
                focused={focused}
                name="Recent"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cloud"
          options={{
            title: "Cloud",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={cloudIcon}
                color={color}
                focused={focused}
                name="Cloud"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
