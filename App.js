import React from 'react';
import { View } from 'react-native';

import Cau1 from './view/cau1.js'; 
import Cau2 from './view/cau2.js';
import Cau2b from './view/cau2b.js';
import Cau2c from './view/cau2c.js';
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Cau1 />
      <Cau2 />
      <Cau2b />
      <Cau2c />
    </View>
  );
};

export default App;
