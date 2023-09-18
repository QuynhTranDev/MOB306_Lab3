import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const sumbmit = () => {
    if(email.length <= 0){
      alert('Email ?')
      return;
    }
    else if(pass.length<= 0){
      alert('Pass ?')
      return;
    }
    else {
      alert('email: ' + email + '\npassword: ' + pass);
      setEmail('');
      setPass('');
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: "bold"}}>
        Sign in
      </Text>
          <TextInput style={styles.middle} placeholder="Enter Email" value={email} onChangeText={text=>setEmail(text)}>

          </TextInput>
          <TextInput style={styles.middle} placeholder="Enter Password" value={pass} onChangeText={text=>setPass(text)}>

          </TextInput>
          <Button title="Submit" onPress={sumbmit}></Button>      
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  middle: {
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },
}
);