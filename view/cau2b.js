import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

const App = () => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 3,
          duration: 4000, // Thời gian hoàn thành 1 vòng là 4 giây
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: -1, // Lặp vô hạn
      }
    ).start();
  }, []);

  const backgroundColorInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['green', 'red', 'purple', 'gold'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { backgroundColor: backgroundColorInterpolate },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});

export default App;
