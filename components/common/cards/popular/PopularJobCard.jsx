import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import { useFetch } from "../../../../hook/userFetch";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const { data, isLoading, error } = useFetch('search',{query:'php developer in USA',num_pages:1})
  // {data?.map ((item,index)=>(
  //     console.log(item?.employer_logo)
  //     ))}
  // console.log(data?.employer_logo);
  // const { data, isLoading, error } = useFetch()

  return (
    data?.map((job) => (
      
      // console.log(job?.job_title),
      <TouchableOpacity
        style={styles.container(selectedJob, item)}
        onPress={() => handleCardPress(item)}
      >


        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
          <Image
            source={{
              uri: job?.employer_logo
                ? job.employer_logo
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'
            style={styles.logoImage}
          />

        </TouchableOpacity>


        <Text style={styles.companyName} numberOfLines={1}>
          {job?.employer_name}
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
            {job?.job_title} 
          </Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.publisher(selectedJob, item)}>
              {job?.job_publisher} -
            </Text>
            <Text style={styles.location}> {job?.job_country}</Text>
          </View>
        </View>

      </TouchableOpacity>
    ))
)}

export default PopularJobCard;