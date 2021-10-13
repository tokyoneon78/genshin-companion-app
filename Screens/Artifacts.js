import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Dialog, Portal, Button, Divider, Avatar, Appbar } from 'react-native-paper';
import RetName from './NameQuery.js';





const Artifact = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);


  useEffect(() => {
    fetch('https://impact.moe/api/artifacts/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        {isLoading ? <ActivityIndicator color="#0000ff"/> : (
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Card style={styles.card}>
            <Card.Title title={<RetName name={item}/>} style={{alignItems: 'flex-end'}} left={() => <Avatar.Image size={40} source={{uri: `https://api.genshin.dev/artifacts/${item.image}/flower-of-life`}} style={{backgroundColor: '#000ff', paddingBottom: 20}}/>}/>
            <Divider/>
            <Card.Content style={{paddingTop: 17}}>
              <Paragraph>
                The Abandoned Ship is a wrecked ship located on Route 108 in Hoenn,
                originally being a ship named the S.S. Cactus. The second part of
                the ship can only be accessed by using Dive and contains the
                Scanner.
              </Paragraph>
              <Card.Actions style={{justifyContent: 'flex-end'}}>
                <Button mode='contained' onPress={() => alert(5)} style={{backgroundColor: '#1B1C1E'}}> Info </Button>
              </Card.Actions>
            </Card.Content>
          </Card>
          )}
        />
      )}
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

export default Artifact;