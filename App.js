import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Image } from 'react-native';

const WelcomeText = () => {
  const [opacity] = useState(new Animated.Value(0)); 
  const [ballY] = useState(new Animated.Value(-100));
  const [squareScale] = useState(new Animated.Value(0)); 

  const welcomeMessage = 'You are welcome!.';
  const delay = 3000 / welcomeMessage.length;

  useEffect(() => {
    animateWelcomeText(); 
    animateBall(); 
    animateSquare(); 
  }, []);

  const animateWelcomeText = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1, 
        duration: 3000, 
        useNativeDriver: true 
      }
    ).start();
  };

  const animateBall = () => {
    Animated.timing(
      ballY,
      {
        toValue: 200, 
        duration: 3000, 
        useNativeDriver: true 
      }
    ).start();
  };

  const animateSquare = () => {
    Animated.spring(
      squareScale,
      {
        toValue: 1, 
        friction: 2, 
        tension: 60, 
        useNativeDriver: true 
      }
    ).start();
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.Text
        style={{
          opacity: opacity,
          fontSize: 24, 
          marginBottom: 20 
        }}
      >
        {welcomeMessage}
      </Animated.Text>
      <Animated.Image
        source={require('./assets/bongda.png')}
        style={{
          width: 50, 
          height: 50, 
          transform: [{ translateY: ballY }] 
        }}
      />
      <Animated.View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'blue',
          marginTop: 20,
          transform: [{ scale: squareScale }]
        }}
      />
    </View>
  );
};

export default WelcomeText;
