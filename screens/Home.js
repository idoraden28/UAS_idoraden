import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import account from './account/account';

const HomePage = ({navigation}) => {
  const Stack = createStackNavigator();
  const onhandleaccount = () => {
    navigation.navigate('Account');
  }
  const onhandletask = () => {
    navigation.navigate('Task');
  }
  const onhandlelistacc = () => {
    navigation.navigate('ListAccount');
  }
  const onhandlelisttask = () => {
    navigation.navigate('ListTask');
  }
  const handleMenuPress = (menuName) => {
    // Fungsi yang akan dijalankan saat pengguna menekan salah satu menu
    console.log(`Menu ${menuName} ditekan`);
    // Anda dapat menambahkan logika atau navigasi di sini
  };
  const report =() =>{
    alert('Mohon Maaf Modul sedang dalam pengembangan')
  }

  return (
    
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      {/* Logo Profil */}
      <TouchableOpacity   style={styles.profileContainer} >
      <Icon name="account-circle-outline" size={35} color="#000" />
      </TouchableOpacity>

      {/* Nama Pengguna */}
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>Hi, Ido Raden</Text>
      </View>

      {/* Logo Notifikasi */}
      <TouchableOpacity style={styles.notificationContainer}>
        <Icon name="bell" size={30} color="#000" />
      </TouchableOpacity>
    </View>


      {/* Container untuk 5 menu di dalam 1 kotak */}
      <View style={styles.container1}>
        <View style={styles.headertext}>
        <Text style={styles.headertext}>Scrapping Management</Text>
            <Text style={styles.headersubtext}>Manage And Setting Your account to Scrap</Text>
        </View>
      <View style={styles.container2}>
      <View style={styles.menuItem} >
          <TouchableOpacity name="Account"
            style={styles.menuButton1}
            onPress={onhandleaccount}>
            <Icon name="account-multiple-plus" color="#fff" size={60} />
          </TouchableOpacity>
          <Text>account</Text>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity  name="Task"
            style={styles.menuButton2}
            onPress={onhandletask}>
            <Icon name="format-list-bulleted-square" color="#fff" size={60} />
          </TouchableOpacity>
          <Text>Task</Text>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity
            style={styles.menuButton3}
            onPress={report}>
             <Icon name="chart-bar" color="#fff" size={60} />
          </TouchableOpacity>
          <Text>Report</Text>
        </View>

        <View style={styles.menuItem}>
          <TouchableOpacity 
            style={styles.menuButton4} 
            onPress={onhandlelistacc}>
            <Icon name="shield-account" color="#fff" size={60} />
          </TouchableOpacity>
          <Text>List acc</Text>
        </View>

        <View style={styles.menuItem} >
          <TouchableOpacity 
            style={styles.menuButton5}
            onPress={onhandlelisttask}>
            <Icon name="account-multiple-plus" color="#fff" size={60} />
          </TouchableOpacity>
          <Text>List Task</Text>
        </View>

     
          
        </View>

       
        
      </View>


      <View style={styles.contain}>
      <View style={styles.headertext}>
        <Text style={styles.headertext}>Scrapping Management</Text>
            <Text style={styles.headersubtext}>Manage And Setting Your account to Scrap</Text>
        </View>
        <View style={styles.contain1}>
        <View style={styles.menu1}>
        <Text style={styles.text}>Total Account</Text>
        <TouchableOpacity style={styles.btn1}>
        <Text  onPress={onhandleaccount}style={styles.btntxt1 }>10</Text>
      </TouchableOpacity>
          </View>

          <View style={styles.menu1} >
        <Text style={styles.text}>Open task</Text>
       
       
        <TouchableOpacity style={styles.btn2} >
        <Text onPress={onhandletask}style={styles.btntxt1}> 5</Text>
      </TouchableOpacity>



          </View>
          <View style={styles.menu1}>
        <Text style={styles.text}>In progress </Text>
        <TouchableOpacity style={styles.btn3}>
        <Text onPress={onhandlelisttask} style={styles.btntxt1}>10</Text>
      </TouchableOpacity >
          </View>
          <View style={styles.menu1}>
        <Text style={styles.text}>Closed Task</Text>
        <TouchableOpacity style={styles.btn4}>
        <Text onPress={report} style={styles.btntxt1}>20</Text>
      </TouchableOpacity>
          </View>
        
        </View>
        </View>

       
        
      </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: 'orange', // Ganti dengan warna latar belakang yang diinginkan
  },
  profileContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  usernameContainer: {
    flex: 1,
    marginRight: 10,
  },
  notificationContainer:{
    marginRight:5
  },
  usernameText: {
    color: '#fff', // Ganti dengan warna teks yang diinginkan
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  container1: {
    backgroundColor: 'orange',
    borderRadius: 20,
    margin : 20,
    marginTop:25
  },
  container2: {
    backgroundColor: 'azure',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 20,
  },
  
  menuItem: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    marginBottom:25
  },
  menuButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 1,
    width:80,
    height: 90
  },
  menuButton2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 1,
    width:80,
    height: 90
  },
  menuButton3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 20,
    padding: 1,
    width:80,
    height: 90,
  },
  menuButton4: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 1,
    width:80,
    height: 90
    
  },
  menuButton5: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'fuchsia',
    borderRadius: 20,
    padding: 1,
    width:80,
    height: 90
  },

  headermenu: {
    backgroundColor: 'orange',
    fontSize: 12,
    alignItems:'flex-start',
    paddingHorizontal:70,
    borderRadius:20
  },
  headertext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft:10,
    margin:4
  },
  headersubtext: {
    color: '#fff',
    fontSize: 10,
    textAlign:'left',
    paddingLeft:15,
},


contain: {
  backgroundColor: 'blue',
  borderRadius: 20,
  margin : 20,
},
contain1: {
  backgroundColor: 'azure',
  borderRadius: 15,
  flexDirection: 'column',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: 10,
  
},
menu1: {
  backgroundColor: 'azure',
  flexDirection: 'row',
  padding :10,
},
btn1:{
  justifyContent:'center',
  marginLeft: 150,
  backgroundColor: 'green',
  borderRadius:25,
  width:65,
  height:30,
},
btn2:{
  justifyContent:'center',
  marginLeft: 175,
  backgroundColor: 'lightseagreen',
  borderRadius:25,
  width:65,
  height:30,
},
btn3:{
  justifyContent:'center',
  marginLeft: 165,
  backgroundColor: 'palevioletred',
  borderRadius:25,
  width:65,
  height:30,
},
btn4:{
  justifyContent:'center',
  marginLeft: 164,
  backgroundColor: 'navy',
  borderRadius:25,
  width:65,
  height:30,
  marginBottom:30
},
btntxt1:{
  alignItems:'center' ,
  paddingLeft: 25,
  margin: 'auto',
  color:'white'
}

});

export default HomePage;
