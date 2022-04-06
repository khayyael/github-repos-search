import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[username , setUserName] = useState("")
  const[user , setUser] = useState([] as any)
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  useEffect(() => {
    const getUsers = async () => {
      try {
        await axios.get("https://api.github.com/users/"+username,{
        })
        .then( res => {
              setUser(res.data)
        })
  
              } catch (error) {
          console.log(error);
      }
  } 
  getUsers();
  }, [username]) 
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onSubmitEditing={(event) => setUserName(event.nativeEvent.text)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
