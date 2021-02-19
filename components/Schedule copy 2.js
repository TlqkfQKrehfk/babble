

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  // UI의 데이터 부분을 변경할 때 필요한 변수 state
  // const [state명, state변경함수명] = useState(state초기값);

  var date = new Date().getDate(); 
  var month = new Date().getMonth() + 1; 
  var year = new Date().getFullYear(); 
  var hours = new Date().getHours(); 
  var min = new Date().getMinutes(); 
  var sec = new Date().getSeconds();
  const [count, setCount] = useState(date);

  return (
    <View 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
                   {/* {state 또는 prop}  */}
      <Text>You clicked {count} times</Text>
                    {/* state변경함수명(변경할state값) */}
                    {/* state 변경하면 화면이 다시 렌더링됨 */}
      <Button onPress={() => setCount(count-count)} title="Click me!"></Button>

    </View>
  )
}

export default Counter;