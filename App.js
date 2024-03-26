import React, { useState, useEffect } from 'react';
import { Animated, Text, View, Image } from 'react-native';

const WelcomeText = () => {
  const [opacity] = useState(new Animated.Value(0)); // Giá trị mặc định cho opacity là 0
  const [ballY] = useState(new Animated.Value(-100)); // Giá trị mặc định cho vị trí ban đầu của quả bóng

  const welcomeMessage = 'You are welcome!.';
  const delay = 3000 / welcomeMessage.length;

  useEffect(() => {
    animateWelcomeText(); // Gọi hàm animateWelcomeText khi component được mount
    animateBall(); // Gọi hàm animateBall khi component được mount
  }, []);

  const animateWelcomeText = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1, // Giá trị opacity sẽ tăng dần lên 1
        duration: 3000, // Thời gian để hoàn thành animation là 3 giây
        useNativeDriver: true // Sử dụng driver native để tối ưu hiệu suất
      }
    ).start();
  };

  const animateBall = () => {
    Animated.timing(
      ballY,
      {
        toValue: 200, // Di chuyển từ vị trí -100 (trên cùng) xuống vị trí 200 (dưới cùng)
        duration: 3000, // Thời gian để hoàn thành animation là 3 giây
        useNativeDriver: true // Sử dụng driver native để tối ưu hiệu suất
      }
    ).start();
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.Text
        style={{
          opacity: opacity,
          fontSize: 24, // Đặt kích thước phù hợp
          marginBottom: 20 // Khoảng cách dưới của văn bản
        }}
      >
        {welcomeMessage}
      </Animated.Text>
      <Animated.Image
        source={require('./assets/bongda.png')}
        style={{
          width: 50, // Đặt chiều rộng của hình ảnh
          height: 50, // Đặt chiều cao của hình ảnh
          transform: [{ translateY: ballY }] // Áp dụng transform translateY cho di chuyển
        }}
      />
    </View>
  );
};

export default WelcomeText;
