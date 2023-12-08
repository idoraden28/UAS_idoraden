import * as React from 'react';
import { PrimaryButton, LoadingUi} from '../../components'
import CApi from '../../lib/CApi';
import {  useDispatch } from 'react-redux'

import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import{
  setUserId,
  setUserEmail,
  setUserFullName,
  setUserName
} from '../../store/reducer/userSlice'

function LoginScreen({navigation}) {
  const [isLoading, setLoading]= React.useState(false);
  const [username, setUsername]= React.useState(null);
  const [password, setPassword]= React.useState(null);
  const dispatch = useDispatch()

  const onhandleLoginButton = async ()=>{
    setLoading(true)
    try{
      const body = {
        "dataSource":"Cluster0",
        "database":"izonovel",
        "collection":"anggota",
        "filter": {
            "email":username,
            "password": password
        }
      }

      const {data} = await CApi.post('/action/find',body)
      setLoading(false)
      if(data){
        if(data.documents.length > 0){
          dispatch(setUserId(data.documents[0]._id))
          dispatch(setUserEmail(data.documents[0].email))
          dispatch(setUserFullName(data.documents[0].fullName))
          dispatch(setUserName(data.documents[0].userName))

          navigation.navigate('Home')
        }else{
          alert('username dan password tidak ditemukan')
        }
      }
    }catch(err){
      setLoading(false)
      console.error(err)
    }
  }

  return (
    <SafeAreaView style={styles.safe} >
      <ScrollView>
      <View style={styles.container}>
      <Image style={styles.icon} source={require('../../assets/puppet.png')}/>
    <TextInput
    style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
         style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
  
     

      <TouchableOpacity style={styles.loginButton}  onPress={onhandleLoginButton} >
      
        <Text style={styles.loginButtonText} >Login</Text>
        <LoadingUi loading={isLoading}/>
        
      </TouchableOpacity>
      
      <TouchableOpacity >
        <Text style={styles.forgot}>Forgot Password? </Text>
        <Text style={styles.click}> Click here</Text>
      </TouchableOpacity>
      
    </View>
      </ScrollView >
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop :200,
    
  },
  safe: {
    flex : 1,
    backgroundColor: '#ffa713',
  },
  forgot: {
    marginTop : 20,
    color:'white'
  },
  click: {
     color: 'blue'
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height:100,
    marginBottom: 35
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#f0ffff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor:'#fff',
  },
  loginButton: {
    backgroundColor: '#136bff', 
    paddingVertical: 13,
    paddingHorizontal: 155,
    borderRadius: 5,
    flexDirection:'row'
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    padding : 1,
    position: 'relative'
  },
});

export default LoginScreen;