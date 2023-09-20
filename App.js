import { Button, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity, ScrollView, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

let i = 0;
export default function App() {
  console.log('re-render ' + (++i))
  const [list, setList] = useState ([
    { name: 'Devin', phone: '098762888' },
    { name: 'Dan', phone: '088299289' },
    { name: 'Dominic', phone: '090989900' },
    { name: 'Jackson', phone: '088990088' },
    { name: 'James', phone: '098779989' },
    { name: 'Joel', phone: '098787899' },
    { name: 'John', phone: '078997899' },
  ]);

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
    <ScrollView>
    <Image
        style={{ width: 250, height: 200,}}
        source={require('./img/pic.jpg')}
      />
    <FlatList
          style={{height:400}}
          data={list}
          extraData={list}
          renderItem={({ item }) =>

            <TouchableOpacity
              onPress={
                () => {
                  alert(`${item.name} - ${item.phone}`)
                }
              }
            >
              <View style={
                {
                  flexDirection: 'row',
                  backgroundColor: 'green'
                }
              }>

                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.phone}</Text>
              </View>
            </TouchableOpacity>
          }
        />

        <View style={{ flexDirection: 'column', marginTop: 20, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          
          <Button title='Add' onPress={() => {
            list.push({name: 'Adam', phone: '0987555889'});
            console.log(list)
            setList([...list])       
          }}/>

          <Button title='Delete' onPress={() => {
            list.splice(0, 1);
            setList([...list])
          }}/>
          
        </View>

      <Text style={{fontSize: 30, fontWeight: "bold"}}>
        Sign in
      </Text>
          <TextInput style={styles.middle} placeholder="Enter Email" value={email} onChangeText={text=>setEmail(text)}>

          </TextInput>
          <TextInput style={styles.middle} secureTextEntry={true} placeholder="Enter Password" value={pass} onChangeText={text=>setPass(text)}>

          </TextInput>
          <Button title="Submit" onPress={sumbmit}></Button>      


    </ScrollView>
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
}
);