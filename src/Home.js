import { createDrawerNavigator } from 'react-navigation'
import GasolinaOuAlcool from "./components/GasolinaOuAlcool"

export default createDrawerNavigator({
    Internacionalizacao:{
        screen: GasolinaOuAlcool,
        navigationOptions: {title:'Internacionalização'}
    }

})