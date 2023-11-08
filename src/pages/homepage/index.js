import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { globalStyles } from "../../styles.js";
import Navbar from "./Navbar";

const HomePage = ({ navigation }) => {
  const [todoListItems, setTodoListItems] = React.useState([
    { id: 1, title: "Buy Milk" },
    { id: 2, title: "Buy Eggs" },
    { id: 3, title: "Buy Bread" },
  ]);

  return (
    <ScrollView style={[tw`h-full`, globalStyles["bg-background"], globalStyles["font-poppins"]]}>
      <Navbar />
      <View style={tw`flex flex-col items-center relative`}>
        {todoListItems.map((item) => {
          return (
            <View
              key={item.id}
              style={tw`flex flex-row justify-between items-center w-11/12 bg-white rounded-xl my-2`}
            >
              <Text style={tw`text-black text-xl px-4 py-2`}>{item.title}</Text>
              <Button
                title="Delete"
                onPress={() => {
                  setTodoListItems(
                    todoListItems.filter((todo) => todo.id !== item.id)
                  );
                }}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomePage;
