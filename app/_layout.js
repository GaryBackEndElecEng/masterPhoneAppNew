import { Stack } from "expo-router";
import { useTheme } from "@react-navigation/native";
import Logo from "../components/Logo";
import { useDeviceOrientation } from "@react-native-community/hooks";
//const isPortrait = useDeviceOrientation() === "portrait" ? true : false;


export default () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "blue"},
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
            backgroundColor: "blue",
          },
        }}
      />
    </Stack>
  );
};
