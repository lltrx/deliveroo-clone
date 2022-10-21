import { View, Text,TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {StarIcon} from 'react-native-heroicons/solid';

const RestaurantCards = ({
     id, 
     imgUrl,
     title,
     rating,
     genre,
     address,
     short_description,
     dishes,
     long,
     
}) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl}} className="h-36 w-64 rounded-sm"/>
      <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
               <StarIcon color="green" opacity={0.5} size={22}/>
               <Text className="text-sm">{rating}</Text>
               <Text className="text-sm text-gray-500">({genre})</Text>
            </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;