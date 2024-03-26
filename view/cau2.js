import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const App = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const rotationAnimation = useRef(new Animated.Value(0)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current; // Thêm Animated Value cho màu sắc

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // lặp vô hạn
      }
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotationAnimation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1, // lặp vô hạn
      }
    ).start();
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(colorAnimation, {
        toValue: 3,
        duration: 4000, // 4 giây
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      {
        iterations: -1, // lặp vô hạn
      }
    ).start();
  }, []);

  const interpolatedRotateAnimation = shakeAnimation.interpolate({
    inputRange: [-10, 0, 10],
    outputRange: ['-5deg', '0deg', '5deg'],
  });

  const interpolatedRotateAnimation1 = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColorInterpolate = colorAnimation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['green', 'red', 'purple', 'gold'],
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          { backgroundColor: backgroundColorInterpolate },
        ]}
      />
      <View style={{backgroundColor: "red", width: 50, height:50, alignItems: 'center', justifyContent:'center'}}>
        <View style= {styles.ImgDongHo}>
          <Animated.Image
            source={require('../assets/hinhvuong.png')} 
            style={[styles.bellImageDongHo, { transform: [{ rotate: interpolatedRotateAnimation1}] }]}
          />
        </View>
      </View>

      <View style= {styles.ImgChuong}>
        {/* <Animated.Image
          source={require('./assets/chuong.png')} 
          style={[styles.bellImage, { transform: [{ rotate: interpolatedRotateAnimation }] }]}
        /> */}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  bellImage: {
    width: 50,
    height: 50,
  },
  ImgChuong:{
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'flex-end',
  },
  bellImageDongHo:{
    width: 50,
    height: 50,
  },
});

export default App;
