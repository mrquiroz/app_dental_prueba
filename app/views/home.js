import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Hero } from '../views/hero.js';
import { Menu} from '../views/menu.js';
import {StackNavigator} from 'react-navigation';

export class Home extends React.Component{

    static navigationOptions = {
        header:null
    }
    render(){
        const {navigate} =this.props.navigation;


        return(
            <View style = {styles.container}>
            <Hero/>
            <Menu navigate = {navigate}/>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex:1
    }
});