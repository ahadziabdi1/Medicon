import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-ionicons'; // Importing Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Importing MaterialCommunityIcons
import FontAwesome from 'react-native-fontawesome'; // Importing FontAwesome
import Constants from '../Constants';
import Home from '../Home';
import Background from '../Background';


const Initial = () => {
  return (
    <Background>
      <ScrollView>
        <View>
          <Text>
            Initial
          </Text>
        </View>
      </ScrollView>
    </Background>
  );
}

export default Initial;
