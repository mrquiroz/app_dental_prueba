import React from 'react';
import {StyleSheet,View, TouchableOpacity,Text,Alert,Image} from 'react-native';

export class Menu extends React.Component{

    onPress = ()=> {
        Alert.alert('Tocaste el boton');
    }

    handleClick = ()=> {
        Alert.alert('En desarrollo...');
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('EstudiantesRT')}>
                    <Image
                        source={require ('../assets/1.png')}
                    />
                    <Text>
                        Tratamientos disponibles
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('CalendarRT')}>
                    <Image
                        source={require ('../assets/2.png')}
                    />
                    <Text>
                        Horas Agendadas
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('DetalleRT')}>

                <Image
                        source={require ('../assets/4.png')}
                    />
                <Text>
                        Mi modelo Dental
                </Text>     
                </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.handleClick}>
                    <Image
                        source={require ('../assets/3.png')}
                    />
                <Text>
                        Contactanos
                </Text>
                    </TouchableOpacity>
                </View>

                

                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'white'
    },
    buttonRow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1
    },
    buttoStyles:{
        backgroundColor:'#35605a',
        width:'50%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonStyles:{
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:'50%',
        height:'50%',
       backgroundColor:'#fff',
       borderRadius:50,
    },
    buttonText:{
        color:'black',
        fontSize:18
    }
})





