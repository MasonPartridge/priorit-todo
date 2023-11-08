import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { globalStyles } from "../../styles.js";

const HomePage = ({ navigation }) => {
  const [todoListItems, setTodoListItems] = React.useState([
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Buy Eggs" },
    { id: 3, title: "Buy Bread" },
  ]);

  return (
    <ScrollView style={[tw`bg-background h-full`, globalStyles["font-poppins"]]}>
      <view style={tw`flex flex-col items-center relative`}>
        <view style={tw`w-screen fixed top-0`}>
          <text style={tw`text-2xl font-bold text-text p-4 w-full text-center`}>Todo</text>
          <view style={tw`flex flex-col justify-between items-center absolute top-4 right-4 p-4 w-16 h-16`}>
            <view style={tw`w-full w-1 bg-text`}></view>
            <view style={tw`w-full w-1 bg-text`}></view>
            <view style={tw`w-full w-1 bg-text`}></view>
          </view>
        </view>

      </view>
    </ScrollView>
  );
};

export default HomePage;
