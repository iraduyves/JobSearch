import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
}
  from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes=["Full-time","Part-time","Contractors"]

export const Welcome = ({searchTerm,SetSearchTerm,handleclick}) => {
  const router = useRouter();
  const[activeJobType,SetActiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Yves</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => SetSearchTerm(text)}
            placeholder="What are You Looking for?"
          />
        </View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleclick }>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
         data={jobTypes}
         renderItem={({item})=>(
          <TouchableOpacity 
          style={styles.tab(activeJobType,item)}
          onPress={()=>{
            SetActiveJobType(item)
            router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
         )}
         keyExtractor={item=>item}
         contentContainerStyle={{columnGap:SIZES.small}}
         horizontal
        />
      </View>
    </View>
  )
}

// export default Welcome

hfjbnbkjsdnmlkj