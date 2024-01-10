import React, { useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import Home from "./index"; // Import the Home component
import { Stack,useRouter } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

// const Stack = createStackNavigator();

function Layout() {
  const[name,setName]=useState("")
  
  const [fontsLoaded]=useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular:require('../assets/fonts/DMSans-Regular.ttf')
  })

  const onLayoutRootView=useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded])
  if(!fontsLoaded) return null
  return <Stack onLayout={onLayoutRootView}/>

}

export default Layout;
