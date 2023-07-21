import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

export default function Btn({ bgColor, btnLable, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.container, {
        backgroundColor: bgColor,
        borderRadius: 100,
        width: windowWidth * 0.8,
        paddingHorizontal: windowWidth * 0.05,
        borderColor: "#8EA3B8",
      }]}
    >
      <Text style={{
        color: textColor,
        fontSize: 18,
      }}> {btnLable} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center", 
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 5,
  },
});
