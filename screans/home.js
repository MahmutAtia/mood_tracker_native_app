import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';


const Home = () => {
  return (
    <View>
      <Text>main</Text>
         <Button title="Solid" />
        <Button title="Outline" type="outline" />
        <Button title="Clear" type="clear" />
    </View>
  )
}

export default Home