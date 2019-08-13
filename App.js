
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login} from './app/views/login.js'
import {Home} from './app/views/home.js'
import {Menu} from './app/views/menu.js'
import {Detalle} from './app/views/detalle_dental.js'
import {Estudiantes} from './app/views/estudiantes.js'
import {Calendar} from './app/views/Calendar.js'

import {StackNavigator} from 'react-navigation';

const MyRootes = StackNavigator({
  LoginRT:{
    screen: Login
  },
  HomeRT:{
    screen: Home
  },
  DetalleRT:{
    screen: Detalle
  },
  EstudiantesRT:{
    screen: Estudiantes
  },
  CalendarRT:{
    screen: Calendar
  },

},
{
  initialRouteName: 'LoginRT'
}

); 
export default class App extends React.Component {
  render(){
    return (
      <MyRootes/>
    );
  }
  
}
