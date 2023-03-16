import { Stack } from "expo-router";
import { useTheme } from "@react-navigation/native";
import Logo from "../components/Logo";


export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "blue", height: 80 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerBackground: () => <Logo />,
          headerTintColor: "transparent",
          headerStyle: {
            height: 80,
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="faqs"
        options={{
          title: "FAQS",
          // headerBackground:()=><Logo/>,
          headerTintColor: "white",
          headerStyle: {
            height: 80,
            backgroundColor: "blue",
          },
        }}
      />
      <Stack.Screen
        name="packageDetail"
        
        options={{
          title: "Package Detail",
          // headerBackground:()=><Logo/>,
          headerTintColor: "white",
          headerStyle: {
            height: 80,
            backgroundColor: "blue",
          },
        }}
      />
    </Stack>
  );
};
