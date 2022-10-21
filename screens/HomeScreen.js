import { View, Text, Image, SafeAreaView, TextInput} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon ,AdjustmentsVerticalIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
        source={{
          uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
        }} 
        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20}/>
          <TextInput 
          placeholder="Restaurants and Cuisines"
          keyboardType="default"/>
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB"/>
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;