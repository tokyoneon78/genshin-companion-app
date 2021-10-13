import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';


const RetName = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [char, setChar] = useState([]);

  useEffect(() => {
    fetch(`https://api.genshin.dev/artifacts/${props.name}/`)
      .then((response) => response.json())
      .then((json) => setChar(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      {isLoading ? <ActivityIndicator/> : (
          <Text style={{fontSize: 20, fontWeight: '400', paddingTop: 17}}> {char.name}</Text>
      )}
    </View>
  );
}

export default RetName;