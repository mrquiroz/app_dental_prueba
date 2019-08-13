import React from 'react';
import {StyleSheet,Text,View, Image,ImageBackground} from 'react-native';

export class Hero extends React.Component{
    render(){
        let background = require('../assets/rectangle.png');
        return(

            <ImageBackground
            source={background}
            style={styles.background}
            blurRadius={1}
            >
            <View style ={styles.logoContainer}>
            <Image
                style = {{
                    alignItems:'center'
                }}
                source = {require ('../assets/logo.png')}
            />
            </View>
            </ImageBackground>
            
        );
    }

}

const styles = StyleSheet.create({
    heroImage:{
        flexDirection:"row",
        flex:8,
    },
    logoContainer: {
        flex: 2,
        flexDirection:"column",
        alignItems: 'center',
        marginTop:100,
        marginBottom: 90,
        opacity:0.7,
        justifyContent:'space-between'
        
      },
      background: {
        flex:5,
        width: '100%', 
        height: '101%',
        resizeMode: 'cover',
      }, 
});