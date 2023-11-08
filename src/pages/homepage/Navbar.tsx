import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { globalStyles } from "../../styles.js";

export default function Navbar() {
  return (
    <View style={tw.style(`bg-primary`)}>
      <Text style={tw.style(`text-2xl font-bold text-text p-4 w-full text-center`, globalStyles["text-text"])}>
        Todo
      </Text>
      <View style={tw.style(`flex flex-col justify-between items-center p-4 w-16 h-16`)}>
        <View style={tw.style(`w-full h-1`, globalStyles["bg-text"])}/>
        <View style={tw.style(`w-full h-1`, globalStyles["bg-text"])}/>
        <View style={tw.style(`w-full h-1`, globalStyles["bg-text"])}/>
      </View>
    </View>
  );
}
