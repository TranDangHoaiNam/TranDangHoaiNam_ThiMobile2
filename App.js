import React from 'react';
import { View } from 'react-native';

import Cau1 from './view/cau1.js'; 
import Cau2 from './view/cau2.js';
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Cau1 />
      <Cau2 />
    </View>
  );
};

export default App;
