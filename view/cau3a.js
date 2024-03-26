
import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, PanResponder, TouchableOpacity } from 'react-native';

const DragCircle = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [circleColor, setCircleColor] = useState('blue');

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      const newColor = getRandomColor();
      setCircleColor(newColor);

      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const circleStyle = {
    transform: [{ translateX: pan.x }, { translateY: pan.y }],
    backgroundColor: circleColor,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Animated.View style={[styles.circle, circleStyle]} {...panResponder.panHandlers} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DragCircle;
