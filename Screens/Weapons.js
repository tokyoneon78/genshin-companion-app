import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Bow from './Bow';
import Catalyst from './Catalyst';
import Claymore from './Claymore';
import Polearm from './Polearm';
import Sword from './Sword';

function ZaBow() {
  return (
    <Bow/>
  );
}

function ZaCatalyst() {
  return (
    <Catalyst/>
  );
}

function ZaClaymore() {
  return (
    <Claymore/>
  );
}

function ZaPolearm() {
  return (
    <Polearm/>
  );
}

function ZaSword() {
  return (
    <Sword/>
  );
}

const Tab = createMaterialBottomTabNavigator();
var bowicon = 'https://rerollcdn.com/GENSHIN/Weapon/NEW/Bow.png';
var catalysticon = 'https://rerollcdn.com/GENSHIN/Weapon/NEW/Catalyst.png';
var claymoreicon = 'https://rerollcdn.com/GENSHIN/Weapon/NEW/Claymore.png';
var polearmicon = 'https://rerollcdn.com/GENSHIN/Weapon/NEW/Polearm.png';
var swordicon = 'https://rerollcdn.com/GENSHIN/Weapon/NEW/Sword.png';



const Weapon = () => {
  return (
    <NavigationContainer independent={true} style={{paddingTop: 50}}>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#694fad' }}
        activeColor="#f0edf6"
        inactiveColor="#3e2465">
        <Tab.Screen name="Bows" component={ZaBow}
          options={{
            tabBarLabel: 'Bows',
            tabBarIcon: ({ color }) => (
              <Image source={{ uri: bowicon }} style={{ width: 26, height: 26 }} />
            ),
          }} />
        <Tab.Screen name="Catalyst" component={ZaCatalyst}
          options={{
            tabBarLabel: 'Catalyst',
            tabBarIcon: ({ color }) => (
              <Image source={{ uri: catalysticon }} style={{ width: 26, height: 26 }} />
            ),
          }} />
        <Tab.Screen name="Claymore" component={ZaClaymore}
          options={{
            tabBarLabel: 'Claymore',
            tabBarIcon: ({ color }) => (
              <Image source={{ uri: claymoreicon }} style={{ width: 26, height: 26 }} />
            ),
          }} />
        <Tab.Screen name="Polearm" component={ZaPolearm}
          options={{
            tabBarLabel: 'Polearm',
            tabBarIcon: ({ color }) => (
              <Image source={{ uri: polearmicon }} style={{ width: 26, height: 26 }} />
            ),
          }} />
        <Tab.Screen name="Sword" component={ZaSword}
          options={{
            tabBarLabel: 'Sword',
            tabBarIcon: ({ color }) => (
              <Image source={{ uri: swordicon }} style={{ width: 26, height: 26 }} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Weapon;