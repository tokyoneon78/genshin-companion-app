import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Dialog, Portal, Button, Divider, Avatar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';




const Home = () => {
 
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home screen</Text>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
});

export default Home;
