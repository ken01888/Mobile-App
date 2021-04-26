/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useRef, useState } from 'react';
 import {
   Keyboard,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 
interface IAppProps{}
 const App:React.FC<IAppProps> = (props:IAppProps) => {
   const [user,setUser] = useState([{id:'',name:''}]);
  
  
  let dataFetch = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUser(data)
  };

  useEffect(()=>{
    dataFetch()
    user.map(items=>{
      console.log(items.id,items.name)
    })

  },[])

   return (
    <View style={styles.container}> 
    {user.map(users=>(
      <Text style={styles.textStyle} key={users.id}>{users.name}</Text>
    ))}

    </View>
   )
 };

 const styles = StyleSheet.create({
   container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#0091ea'

   },
   textStyle:{
     fontSize:20,
     margin:5,
     color:'white'
   }
 });

 export default App;
