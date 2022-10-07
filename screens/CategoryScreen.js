import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../dummy-data/dummyData";
import CategoryGridTitle from "../components/CategoryGridTitle";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

const CategoryScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
