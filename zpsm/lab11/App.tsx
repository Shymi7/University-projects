import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Main from './Components/Main.jsx';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <SafeAreaView style={{flex:1}}>
      <Main />
    </SafeAreaView>
  );
}

export default App;
