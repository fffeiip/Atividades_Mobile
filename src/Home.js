import React from 'react'
import { Image } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'

import GasolinaOuAlcool from "./pages/GasolinaOuAlcool"

import logo from './assets/instagram.png'
import Feed from './pages/Feed'


const Instagram = createStackNavigator({
    Feed
}, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
        headerStyle: {
            backgroundColor: "#f5f5f5"
        }
    }
})


export default createDrawerNavigator({
    LayoutDeTelas:{
        screen: Instagram,
        navigationOptions: {title:'Layout de Telas'}
    },
    Internacionalizacao:{
        screen: GasolinaOuAlcool,
        navigationOptions: {title:'Internacionalização e Eventos'}
    }

})