import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "react-native-vector-icons";
import Play from "./component/Play";
import Settings from "./component/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#DC143C",
        }}
        screenOptions={{
          headerShown: false, // Tắt header mặc định của ứng dụng
        }}
      >
        <Tab.Screen
          name="Play"
          component={Play}
          options={{
            tabBarLabel: "Play",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="play-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
