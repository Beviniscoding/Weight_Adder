import React, { Component } from 'react';
import { Button, View, Text, Platform, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Timer extends React.Component {
  increase = () => {
    const {time} = this.state
    const { onIncrease } = this.props
    const newTime = time + 1
    onIncrease(newTime)
    this.setState({time: newTime})
  }
  render(){
    return(
      <Text> {this.state} </Text>
    );
  }
}

function HomeScreen ({navigation}) {
    return (
      <View style={styles.container}>
      <Image source={require('./Logo.png')} style={styles.barbellbud} />
      <Timer count={0} onIncrease={count => {if (count === 5) {this.props.navigation.navigate('Recent')}}}/>
      </View>
    );
}

function RecentScreen() {
    return (
      <View style={styles.container}>
      </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Recent" component={RecentScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0443A'
  },
  barbellbud: {
    position: 'absolute',
    width: 185,
    height: 80,
    left: 113,
    top: 371,
  }
})
