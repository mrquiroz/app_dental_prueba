import React from 'react';
import {StyleSheet,Text,View,ImageBackground, Image,Button,Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';

export class Login extends React.Component{
    static navigationOptions = {
        header:null
    }

    render(){
        const {navigate} =this.props.navigation;
        let background = require('../assets/fondo.png');
        let logo = require('../assets/logo.png');

        return(
            <ImageBackground
            source={background}
            style={styles.background}
            blurRadius={1}
            >
                <View style = {styles.container}>
                <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
                <Button
                    onPress={()=>navigate('HomeRT')}
                    title="Iniciar Sesion"
                    color="#3D9F88"
                    style={{padding:'10'}}
                />
                <Button
                    title="Iniciar con Facebook"
                    color="#4267B2"
                    style={{padding:'10'}}
                    
                />
                </View>
                </View>
        
        </ImageBackground>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background: {
        flex:1,
        width: '100%', 
        height: '101%',
        resizeMode: 'cover',
      }, 
    logo: {
        alignContent:'center',
      },
    logoContainer: {
        flex: 0.65,
        flexDirection:"column",
        alignItems: 'center',
        marginTop:130,
        marginBottom: 90,
        opacity:0.7,
        justifyContent:'space-between',
      },
    loginContainer: {
        justifyContent: 'center',
        flexDirection:'row',
        marginLeft: 30,
        marginRight: 30,
        marginBottom:15,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.5,
        height: 35,
        alignItems: "stretch",
      },
});
