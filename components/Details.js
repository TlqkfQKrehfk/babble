import { apisAreAvailable } from 'expo';
import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'

import api from '../api/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 route, navigation이 전달됨
const Details = ( { route, navigation }) => {

  // navigation.navigate("스크린이름", 매개변수)
  console.log("--detail");
  console.log(route.params);  // navigate로 넘어온 매개변수

  // const id = route.params.id;
  const { id } = route.params;

  const [item, setItem] = useState(null);

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
  console.log("--tasks--");
  console.log(tasks);

  const isExistedTask = tasks.filter(item => item.id == id).length > 0 ? true : false;
  console.log("--isExistedTask--");
  console.log(isExistedTask);

  const getDetails = useCallback(async () => {
    const result = await api.get(id);
    console.log(result.data);
    setTimeout(()=>{
      setItem(result.data);
    }, 0)
    
  }, [])

  useEffect(()=>{
    getDetails();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      { !item && <ProgressBarAndroid /> }
      { item && 
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <View></View>
        <Card.Divider/>
        <Card.Image source={{uri: item.image}}>
        </Card.Image>
        <Card.Divider/>        
        <Text style={{marginBottom: 10}}>
          {item.description}
        </Text>
        {
          isExistedTask 
            ?
            <Button
              onPress={()=>{dispatch(removeTask(id))}}
              icon={<Icon name='heart' type='ionicon' color='tomato' />}
              buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "white"}}
              title='' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addTask(item))}}
              icon={<Icon name='heart' type='ionicon' color='gray' />}
              buttonStyle={{borderRadius: 50, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "white"}}
              title='' 
            />    
        }

            
      </Card>
      }
    </View>
  )
}
export default Details;