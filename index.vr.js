import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Venue extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Snitch.jpg')}/>
        {/* <Pano source={{
          uri: [
          '../static_assets/px.png',
          '../static_assets/nx.png',
          '../static_assets/py.png',
          '../static_assets/ny.png',
          '../static_assets/pz.png',
          '../static_assets/nz.png',
        ]}} /> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('Venue', () => Venue);
