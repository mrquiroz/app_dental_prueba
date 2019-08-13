import React from 'react';
import {StyleSheet,View,ScrollView,List,FlatList,Image,Alert} from 'react-native';
import {ListItem,Divider,Text} from 'react-native-elements';

export class Detalle extends React.Component{

    constructor(props){
        super(props);
    }
      
    render()
    
    {
        return(
            
            <View>
            <Text h4 style = {{'color':'gray'}}>Detalle de los dientes en tratamiendo</Text>
                {
                list.map((l, i) => (
                    <View>
                    <ListItem
                        key={i}
                        leftAvatar={{ source: { uri: l.avatar } }}
                        title={"Diente: "+l.id}
                        subtitle={"Tiene Caries: "+ l.tieneCaries}
                        onPress={()=>Alert.alert(
                            'Detalle del Diente',
                            "El detalle corresponde a :" + l.descripcion,
                            [ 
                                 {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                {cancelable: false},
                        )}
                    />
                    <Divider style={{ backgroundColor: 'blue' }} />
                    </View>
                    
                    )
                    )
                    
                }
                
                </View>
        )
    }
}

const list = [
    {
        id:"Molar 31",
        avatar:"https://static.turbosquid.com/Preview/001266/814/YS/_D.jpg",
        tieneCaries: "Si",
        tieneTapadura: false,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, nibh rutrum condimentum aliquet, mi velit suscipit urna, eget aliquet leo dui non purus. Sed sit amet enim efficitur, scelerisque nibh et, tempus libero. Nullam nibh justo, malesuada ut feugiat id, tincidunt id mi. Integer vitae ullamcorper orci, eu imperdiet diam. Aenean scelerisque semper ligula, quis maximus lacus vulputate vitae. Sed consectetur ante sit amet gravida iaculis. In rutrum magna a quam dictum, ut finibus purus facilisis"
    },
    {
        id:"Pre Molar 12",
        avatar:"https://static.turbosquid.com/Preview/2014/05/12__22_43_05/LFM_02.jpg0e34f4b3-ee95-4ec9-a6ad-c8b0608bf8d3Original.jpg",
        tieneCaries: "No",
        tieneTapadura: false,
        descripcion: "Phasellus lacinia euismod magna sit amet placerat. Fusce tincidunt dolor nec volutpat semper. Nunc at ante gravida, aliquam turpis sed, imperdiet nibh. Nam porttitor condimentum arcu non varius. Aliquam vitae ex sit amet elit viverra maximus aliquet ac mi. Pellentesque nec sapien ac urna varius imperdiet. Proin suscipit rhoncus ligula id tempus. Vivamus eu condimentum ligula, rhoncus vehicula lorem. Nullam condimentum mattis velit vitae iaculis. Integer ut venenatis erat, in vulputate lectus. Pellentesque eget bibendum felis. Curabitur enim ipsum, tincidunt a diam eget, aliquam mattis quam. Sed consequat dui vitae felis auctor ullamcorper nec quis nisl. Fusce molestie, purus ac commodo dignissim, nisi magna fringilla enim, viverra blandit nunc odio tincidunt lorem. Mauris et orci cursus, consequat diam in, sagittis arcu"
    },
    {
        id:"Molar 30",
        avatar:"https://static.turbosquid.com/Preview/001266/814/YS/_D.jpg",
        tieneCaries: "Si",
        tieneTapadura: false,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, nibh rutrum condimentum aliquet, mi velit suscipit urna, eget aliquet leo dui non purus. Sed sit amet enim efficitur, scelerisque nibh et, tempus libero. Nullam nibh justo, malesuada ut feugiat id, tincidunt id mi. Integer vitae ullamcorper orci, eu imperdiet diam. Aenean scelerisque semper ligula, quis maximus lacus vulputate vitae. Sed consectetur ante sit amet gravida iaculis. In rutrum magna a quam dictum, ut finibus purus facilisis"
    },
    {
        id:"Insisivo 33",
        avatar:"https://static.turbosquid.com/Preview/2016/07/28__02_16_15/mt.jpg2FD30CB4-B534-4CF1-B04D-7A9D8599DF34Original.jpg",
        tieneCaries: "No",
        tieneTapadura: false,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, nibh rutrum condimentum aliquet, mi velit suscipit urna, eget aliquet leo dui non purus. Sed sit amet enim efficitur, scelerisque nibh et, tempus libero. Nullam nibh justo, malesuada ut feugiat id, tincidunt id mi. Integer vitae ullamcorper orci, eu imperdiet diam. Aenean scelerisque semper ligula, quis maximus lacus vulputate vitae. Sed consectetur ante sit amet gravida iaculis. In rutrum magna a quam dictum, ut finibus purus facilisis"
    },
  ]
  


