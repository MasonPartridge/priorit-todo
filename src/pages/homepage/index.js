import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={tw`bg-background h-full`}>
      <view style={tw`flex flex-col items-center relative`}>
        <view style={tw`flex flex-row justify-between w-full fixed top-0`}>
          <text style={tw`text-2xl font-bold text-text p-4`}>Todo</text>
        </view>
      </view>
    </ScrollView>
  );
};

export default HomePage;
