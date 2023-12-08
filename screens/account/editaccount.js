import { StyleSheet, Text, View ,TextInput,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const report =() =>{
  alert('Data Gagal Disimpan')
}
 function EditAccount() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
        <Text style={style.Text}>Account id</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
            />
          <Text style={style.Text}>Account Type</Text>
          <View style={style.TextInput}>
            <TextInput
              style={style.input1 }
              placeholder="Account Type"  />
             <TouchableOpacity style={style.select}>
                <Text>Select</Text>
              </TouchableOpacity>
            
          </View>
         
         <Text style={style.Text}>Account Name</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
            />
         <Text style={style.Text}>Account Email</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Input Email"
            
            />
         <Text style={style.Text}>Account Password</Text>
            <TextInput
               
              
              style={[style.input, {marginTop:10}]}
              placeholder="Input Password"
            />
            <TouchableOpacity   onPress={report}>
            <View style={style.save} >
              <Text style={style.SaveText}>Save Data</Text>
              </View>
            </TouchableOpacity>
            
        </View>
      </ScrollView>
     
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        margin: 35
    },
    logoTop:{
        alignSelf:'center',
        marginTop:20
    },
    Text:{
      fontSize:16,
      color:'#6E6E6E',
      fontWeight:'bold'
    },
    save:{
      marginVertical:25,
      backgroundColor:'orange',
      height: 50,
      width:330,
      justifyContent:'center',
      alignItems:'center',
      textDecorationColor:'white',
      borderRadius:15,
      marginRight:30,
      flexDirection:'row'
    },
    SaveText:{
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center',
      
    },
    select:{
      backgroundColor:'orange',
      height: 60,
      width:100,
      justifyContent:'center',
      alignItems:'center',
      textDecorationColor:'white',
      borderRadius:15,
      marginTop:10,
      marginLeft:10
    },
    input1:{
      height: 60,
      width:220,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      marginTop:10,
      marginBottom: 10
    },
    input:{
      height: 60,
      width:330,
      borderWidth: 1,
      padding: 10,
      borderRadius:10,
      marginVertical:10,
    },
    TextInput:{
      
      flexDirection:'row',
      width:250,
}});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 export default EditAccount