import * as React from 'react';
import {View, Text} from 'react-native';


const FullArtPic = (props) => {
    var r = JSON.parse(props.url);
    var FullUrl = 'api.genshin.dev/' + r + '/flower-of-life';
}

export default FullArtPic;
