import { StyleSheet, Text, View ,TextInput,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import CApi from '../../lib/CApi';
import { LoadingUi} from '../../components'
import {
setAccountType,
setAccountId,
setInitialId,
setInittialPage,
setCounter,
setAccountEmail,
clearTask
}from '../../store/reducer/taskSlice'
function Task() {
    const task = useSelector((state) => state.task)
    const [isLoading, setLoading]= React.useState(false)
    const dispatch = useDispatch()
  
    const submitAccount = async () => {
      try{
        setLoading(true)
        const body= {
          "dataSource": "Cluster0",
          "database": "puppet_uas",
          "collection": "task",
          "document": task
        }
        const respose = await CApi.post('/action/insertOne',body)
        setLoading(false)
        if(respose) {
          alert('Task berhasil ditambahkan')
          dispatch(clearTask());
        }
      }catch(error){
        setLoading(false)
        console.error('error',error)
        alert(error.message)
      }
    }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.container}>
          <Text style={style.Text}>Select Account</Text>
          <View style={style.TextInput}>
            <TextInput
              style={style.input1 }
              placeholder="Select Account"
              value={task.account_type}
              onChangeText={(val)=>dispatch(setAccountType(val))}/>
             <TouchableOpacity style={style.select}>
                <Text>Select</Text>
              </TouchableOpacity>
            
          </View>
         
         <Text style={style.Text}>Account Type</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Input Account Type"
              value={Task.account_id}
              onChangeText={(val)=>dispatch(setAccountId(val))}
              />
         <Text style={style.Text}>Email</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Email"
              value={task.email}
            onChangeText={(val)=>dispatch(setAccountEmail(val))}
            />
         <Text style={style.Text}>Initial Id</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Input Initial id"
              value={task.initial_id}
              onChangeText={(val)=>dispatch(setInitialId(val))}
            />
              <Text style={style.Text}>Initial Page</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Input Initial Page"
              value={task.initial_page}
            onChangeText={(val)=>dispatch(setInittialPage(val))}
            />
              <Text style={style.Text}>Counter</Text>
            <TextInput
              style={[style.input, {marginTop:10}]}
              placeholder="Input Counter"
              value={task.counter}
              onChangeText={(val)=>dispatch(setCounter(val))}
            />
            <TouchableOpacity onPress={submitAccount}>
            <View style={style.save} >
              <Text style={style.SaveText}>Save Data</Text>
              <LoadingUi loading={isLoading}/>
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


export default Task