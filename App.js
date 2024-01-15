const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import ListMember from "./screens/ListMember";
import UpdateMemberList from "./screens/UpdateMemberList";
import Mutasi from "./screens/Mutasi";
import Pengeluaran from "./screens/Pengeluaran";
import Pemasukan from "./screens/Pemasukan";
import UpdateMember from "./screens/UpdateMember";
import Registration from "./screens/Registration";
import GymMember from "./screens/GymMember";
import GymFinance from "./screens/GymFinance";
import Saldo from "./screens/Saldo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListMember"
              component={ListMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateMemberList"
              component={UpdateMemberList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mutasi"
              component={Mutasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pengeluaran"
              component={Pengeluaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pemasukan"
              component={Pemasukan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdateMember"
              component={UpdateMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GymMember"
              component={GymMember}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GymFinance"
              component={GymFinance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Saldo"
              component={Saldo}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
