import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const Field = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor='#8EA3B8'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderRadius: 100,
    color: "#6885A1",
    borderColor: "#8EA3B8",
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.8,
    justifyContent: "center",
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
});

export default Field;
