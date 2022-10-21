import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './Utils/CategoryCard';

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizonal: 15,
      paddingTop: 10,
    }}
    horizontal
    showHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title="Testing1"/>
      <CategoryCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title="Testing2"/>
      <CategoryCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title="Testing3"/>
      <CategoryCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title="Testing3"/>
      <CategoryCard imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg' title="Testing3"/>
          </ScrollView>
  );
};

export default Categories;