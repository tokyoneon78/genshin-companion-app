import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Home  from './Screens/Home';
import Artifact from './Screens/Artifacts';
import Weapon from './Screens/Weapons';
import Quest from './Screens/Quests';
import Characters from './Screens/Characters';



function HomeScreen() {
  return (
    <Home/>
  );
}

function CharactersScreen({ navigation }) {
  return (
    <Characters/>
  );
}

function ArtifactScreen() {
  return (
    <Artifact/>
  );
}

function WeaponScreen() {
  return (
   <Weapon/>
  );
}

function QuestScreen() {
  return (
    <Quest/>
  );
}




const Drawer = createDrawerNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Artifacts">
        <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Drawer.Screen name="Characters" component={CharactersScreen} options={{title: 'Characters'}} />
        <Drawer.Screen name="Artifacts" component={ArtifactScreen} options={{ title: 'Artifacts'}} />
        <Drawer.Screen name="Weapons" component={WeaponScreen} options={{ title: 'Weapons'}} />
        <Drawer.Screen name="Quests" component={QuestScreen} options={{ title: 'Quests'}} />

        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;