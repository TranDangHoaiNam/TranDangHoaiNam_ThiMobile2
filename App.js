import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const WelcomeText = () => {
  const [opacity] = useState(new Animated.Value(0)); // Giá trị mặc định cho opacity là 0
  const welcomeMessage = 'You are welcome.';
  const delay = 3000 / welcomeMessage.length;

  useEffect(() => {
    animateWelcomeText(); // Gọi hàm animateWelcomeText khi component được mount
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

  return (
    <View>
      <Animated.Text
        style={{
          opacity: opacity,
          fontSize: 24 // Đặt kích thước phù hợp
        }}
      >
        {welcomeMessage}
      </Animated.Text>
    </View>
  );
};

export default WelcomeText;