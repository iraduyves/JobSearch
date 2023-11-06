import { useState } from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { useFetch } from '../../../hook/userFetch'


export const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('search',{query:'php developer in USA',num_pages:1})
  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) :(
          // data?.map((job) => (
          //   console.log(job.employer_name))),
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )
         
        }
      </View>
    </View>
  )
}

export default Popularjobs