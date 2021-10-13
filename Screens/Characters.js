import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, Dialog, Portal, Button, Divider, Avatar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';




function CharactersScreen({ }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('https://impact.moe/api/characters/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? <ActivityIndicator color="#0000ff" /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Cover source={{uri: item.image}} style={{resizeMode: 'center', height:800}}/>
              <Card.Title title={item.name} style={{ alignItems: 'flex-end' }} />
              <Divider />
              <Card.Content style={{ paddingTop: 17 }}>
                <Paragraph>
                {item.description}
              </Paragraph>
                <Card.Actions style={{ justifyContent: 'flex-end' }}>
                  <Button mode='text' onPress={() => {navigation.navigate('Character', { id: item.id })}} style={{ backgroundColor: '#1B1C1E', color: '#fff' }}> Info </Button>
                </Card.Actions>
              </Card.Content>
            </Card>
          )}
        />
      )}
    </View>
  );
}

function CharacterDetailsScreen({ navigation }) {
  const route = useRoute();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visible, setVisible] = React.useState(false);



  useEffect(() => {
      fetch(`https://impact.moe/api/characters/${route.params.id}?expand=talents,constellations,roles,overview`)
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
  }, []);

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {isLoading ? <ActivityIndicator color="#0000ff" /> : (
              <Text>The name is {JSON.stringify(data.name)}. Rarity is {data.rarity}</Text>
          )}
      </View>
  );
}











const Stack = createStackNavigator();

const Characters = () => {
 
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Character" component={CharacterDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default Characters;
