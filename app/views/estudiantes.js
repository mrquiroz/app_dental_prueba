import React, { Component } from 'react';
import { FlatList, StyleSheet, View ,Image} from 'react-native';
import { List, ListItem,Header,SearchBar,Divider,Text } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


export  class Estudiantes extends React.Component {

    render()
    {
        return(
            <View>
            <View>
                <SearchBar
                lightTheme
                placeholder="¿A quien buscas?"
                onChangeText={this.updateSearch}
                value={''}
            />
            </View>
            <View style={{flexDirection:'row',paddingBottom:5}}>
             <Text h4 style = {{'color':'gray'}}>Estudiantes disponibles</Text>
            </View>
            <ScrollView>
                <View>
                {
                    list.map((l, i) => (
                    <View>
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar_url } }}
                        title={l.name}
                        subtitle={l.subtitle}
                    />
                    <Divider style={{ backgroundColor: 'blue' }} />
                    </View>
                    
                    ))
                }
                </View>
        </ScrollView>
        </View>
        )
    }

}
const list = [
    {
      name: 'Ana',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'Criss',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'juan',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'pedro',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'diego',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'camilo',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: '4to año'
    },
    {
      name: 'luis',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: '5to año'
    },
    {
        name: 'pedro',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'diego',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'camilo',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '5to año'
      },
      {
        name: 'pedro',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'diego',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '5to año'
      },
      {
        name: 'camilo',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'pedro',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'diego',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '4to año'
      },
      {
        name: 'camilo',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '4to año'
      },
  ]