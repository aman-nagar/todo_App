import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <View>
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
