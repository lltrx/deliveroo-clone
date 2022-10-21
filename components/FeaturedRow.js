import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCards from './Utils/RestaurantCards'

const FeaturedRow = ({id , title, description}) => {
  return (
     <View>
    <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
          <ArrowRightIcon  color="#00CCBB" />
    </View>
    <Text className="text-sx text-gray-500 px-4">{description}</Text>

    <ScrollView
    horizontal
    contentContainerStyle={{
          paddingHorizonal: 15,

    }}
    showHorizontalScrollIndicator={false}
    className="pt-4">
     {/* RestaurantCards */}
     <RestaurantCards 
     id={1}
     imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
     title="Yo! Sushi"
     rating={4.5}
     genre="Japanese"
     address="1234 Main Street"
     short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     dishes={[]}
     long={-122.4194}
     lat={37.7749}
     />
    </ScrollView>
</View>
  )
}

export default FeaturedRow