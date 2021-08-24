import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {

const [result, setResult] = useState(0);


const increment =()=>{
  setResult(result+1)
};
const decrement = () => {
setResult(result-1)
};

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{ result }</Text>
      <View style={styles.btnContainer}>
      <TouchableOpacity
      style={styles.btn}
      onPress={increment}
      >
        <Text style={styles.text}>Increment+</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btn}
      onPress={decrement}
      >
        <Text style={styles.text}>Decrement-</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  result:{
     
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
  },
  btnContainer:{
    flexDirection:'row',
    
  },
  btn:{
    backgroundColor:'#2D46B9',
    padding:12,
    marginHorizontal:10,
    borderRadius:10,
    width:120,
    alignItems:'center'
  },
  text:{
    fontWeight:'bold',
    fontSize:15
  }
});
