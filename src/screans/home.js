import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
import Chart from '../components/Chart';


const Home = () => {
  return (
    <View>
      <Text>main</Text>
         <Button title="Solid" />
        <Button title="Outline" type="outline" />
        <Chart />
    </View>
  )
}

export default Home