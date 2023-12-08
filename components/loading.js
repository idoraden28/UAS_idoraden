import * as React from 'react';
import { 
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';

const LoadingUi=(props)=>{
    if(props.loading){
        return (
            <View style={style.container}>
               <Image
        source={require('../assets/loading.gif')}
            style={style.imgStyle}/>
            </View>
        )
    }else{
        return null
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end'
    },
    imgStyle:{
        width:20,
        height:20,
        justifyContent: 'flex-end'
        
    },
})

export default LoadingUi;