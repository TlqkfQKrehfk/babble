import React, {useCallback,useState} from 'react';
import { Text, View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'


// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다
// JSX를 쓸려면 improt React from 'react';
const Home = ({navigation}) => {


  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{height: '30%', fontSize: 50 , alignItems: 'center', justifyContent: 'center'}}>ㅇㅗㅇㅇㅏㄹ</Text>
    </View>
  )
}

export default Home;
