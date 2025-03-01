import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator}  options={{ headerShown: false }}/>
      <Tab.Screen name="Contact" component={ContactStackNavigator}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;