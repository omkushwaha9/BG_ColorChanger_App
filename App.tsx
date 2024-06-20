// ON PRESS BACKGROUND COLOR CHANGER APPLICATION !!
import React, { useState } from 'react';
import {
  
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//
function App(): React.JSX.Element {
  const [randomBackground, setRandombackground] = useState("#ffffff");

  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
     color += hexRange[Math.floor(Math.random() * 16)]
      
     
    }
    setRandombackground(color)
  }
  

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor: randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={[styles.actionBtn]}>
          <Text style={[styles.actionBtnTxt,{color:randomBackground}]}>
            Press me
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  actionBtn:{
    backgroundColor:"black",
    paddingVertical:10,
    paddingHorizontal:40,
    borderRadius:12, 
  },
  actionBtnTxt:{
    fontSize:24,
    //color:"white",
    textTransform:"uppercase",
  },
})

export default App;
