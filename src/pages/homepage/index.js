import React, { useEffect } from "react";
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

  const [helloWorld, setHelloWorld] = React.useState("Absolutely ZERO Hello World, Mission Failed");

  useEffect(() => {
    const fetchBackendTest = async () => {
      try {
        fetch("http://10.0.2.2:3000", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Network response was not ok.");
            }
          })
          .then((data) => {
            setHelloWorld(data);
          })
          .catch((error) => {
            console.error(
              "There has been a problem with your fetch operation:",
              error
            );
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBackendTest();
  });

  return (
    <ScrollView
      style={[
        tw`h-full`,
        globalStyles["bg-background"],
        globalStyles["font-poppins"],
      ]}
    >
      <Navbar />
      <Text>{helloWorld}</Text>
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
