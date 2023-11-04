import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SIZES, images } from "../constants";
import { Nearbyjobs } from "../components/home/nearby/Nearbyjobs"
import { Popularjobs } from "../components/home/popular/Popularjobs"
import { Welcome } from "../components/home/welcome/Welcome"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScreenHeaderBtn } from "../components/common/header/ScreenHeaderBtn"
import { StatusBar } from "expo-status-bar";

export const Home = () => {
  const router = useRouter();
  const [searchTerm, SetSearchTerm] = useState("")
  return (
    
    <SafeAreaView style={{ flex: '1', backgroundColor: 'COLORS.lightWhite' }}>
      <View>
        <StatusBar style="auto" />
      </View>
     
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'COLORS.lightWhite' },
          headerShadowVisible: false,

          headerLeft: () => (
            <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension="60%"
            
            />),
            headerRight: () => (
              <ScreenHeaderBtn
              iconUrl={images.profile}
                dimension="100%"

            />),

          headerTitle: ''
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            SetSearchTerm={SetSearchTerm}
            handleclick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />

        </View>

      </ScrollView>



    </SafeAreaView>

  );
};

export default Home;
hhhhhhhhhhhhhhhhhhhhhhhhhhh