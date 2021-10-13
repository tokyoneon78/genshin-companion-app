import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Character = () => {
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

export default Character;