import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaProviderProps,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
