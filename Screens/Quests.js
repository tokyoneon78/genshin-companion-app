import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ArchQuest from './ArchonQuest';
import Comissions from './Comissions';
import StoryQuest from './StoryQuest';
import WorldQuest from './WorldQuest';
import { useColorScheme } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';



var wqicon = 'https://static.wikia.nocookie.net/gensin-impact/images/6/67/Icon_World_Quest.png/revision/latest/scale-to-width-down/100?cb=20210615060104';
var aqicon = 'https://static.wikia.nocookie.net/gensin-impact/images/c/cf/Icon_Archon_Quest.png/revision/latest/scale-to-width-down/100?cb=20210615060053';
var sqicon = 'https://static.wikia.nocookie.net/gensin-impact/images/5/5c/Icon_Story_Quest.png/revision/latest/scale-to-width-down/128?cb=20210615060301';
var comicon = 'https://static.wikia.nocookie.net/gensin-impact/images/6/62/Icon_Commission.svg/revision/latest/scale-to-width-down/310?cb=20201127234019';
function ArchonQuest() {
    return (
        <ArchQuest />
    );
}

function ZaStoryQuest() {
    return (
        <StoryQuest />
    );
}

function ZaWorldQuest() {
    return (
        <WorldQuest />
    );
}

function ZaComissions() {
    return (
        <Comissions />
    );
}

const Tab = createMaterialBottomTabNavigator();

const Quest = () => {
    const scheme = useColorScheme();
    return (
        <NavigationContainer independent={true} theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Tab.Navigator
                barStyle={{ backgroundColor: '#694fad' }}
                activeColor="#f0edf6"
                inactiveColor="#3e2465">
                <Tab.Screen name="ArchQuest" component={ArchonQuest}
                    options={{
                        tabBarLabel: 'Archon Quest',
                        tabBarIcon: ({ color }) => (
                            <Image source={{ uri: aqicon }} style={{ width: 26, height: 26 }} />
                        ),
                    }} />
                <Tab.Screen name="WorldQuest" component={ZaWorldQuest}
                    options={{
                        tabBarLabel: 'World Quest',
                        tabBarIcon: ({ color }) => (
                            <Image source={{ uri: wqicon }} style={{ width: 26, height: 26 }} />
                        ),
                    }} />
                <Tab.Screen name="StoryQuest" component={ZaStoryQuest}
                    options={{
                        tabBarLabel: 'Story Quest',
                        tabBarIcon: ({ color }) => (
                            <Image source={{ uri: sqicon }} style={{ width: 26, height: 26 }} />
                        ),
                    }} />
                <Tab.Screen name="Comissions" component={ZaComissions}
                    options={{
                        tabBarLabel: 'Commisions',
                        tabBarIcon: ({ color }) => (
                            <Image source={{ uri: comicon }} style={{ width: 26, height: 26 }} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Quest;