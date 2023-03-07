import {Stack} from 'expo-router';
import { useTheme } from '@react-navigation/native';
import Logo from "../components/Logo";

export default ()=>{
    return <Stack screenOptions={{
        headerStyle:{backgroundColor:"aquamarine"},
        headerTintColor:"white",
        
    }}
    >
        <Stack.Screen name="index" options={{
            title:"Home",
            headerBackground:()=><Logo/>,
            headerTintColor:"transparent",
            headerStyle:{backgroundColor:"yellow"}
    }}
         />
    </Stack>
}