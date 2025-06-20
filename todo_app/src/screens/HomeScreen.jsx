import React from 'react';
import {View, Text, Button} from 'react-native';
import {API_URL} from '@env';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text className="text-2xl mb-20">Home Screen</Text>
      <Text className="text-2xl mb-20">{API_URL}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
