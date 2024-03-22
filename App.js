import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NgheNhac from './Demo4/Demo41/NgheNhac'
import ChupAnh from './Demo4/Demo41/ChupAnh'
import ChonAnh from './Demo4/Demo41/ChonAnh'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NgheNhac/>
      {/* <ChupAnh/> */}
      {/* <ChonAnh/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})