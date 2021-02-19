import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, View, SafeAreaView } from 'react-native';
import moment from 'moment';


//container 에 스타일 지정


export default function App() {

  //처음에 시작할때 화면에 표시될 값
  const [ now , setTime ] = useState( moment() );
  //컴포넌트에 변화가 일어났을 때 
  //1초 주기마다 화면에 나타나는 시간 갱신
  React.useEffect(() => {
    setInterval(() => {setTime( moment() )});
  },[]);
  
  //뷰 
  return (
    <SafeAreaView >
      <StatusBar style="none" />
      
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }} >
        <View >
            <Text style={{color:'white'}}>{ now.format( 'ddd / MMM Do / YYYY' )}</Text>
        </View>
        <View>
          <Text>마지막 기저귀 시간</Text>
          <Text>{ now.format( 'mm' ) }분전</Text>
          
        </View>
      </View>
      </SafeAreaView>
      
  );
}

