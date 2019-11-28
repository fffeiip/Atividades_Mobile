import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import Internacionalizacao from "../pages/GasolinaOuAlcool"
import Menu from "../pages/Menu"
import InteracaoActivities from "../pages/InteracaoActivies/SuporteLaboratorio"
import SelecionaCurso from "../pages/InteracaoActivies/SelecionaCurso"


import Instagram from '../pages/Feed'

 
const Routes = createStackNavigator({
    Menu,
    Internacionalizacao,
    Instagram,
    InteracaoActivities,
    SelecionaCurso
}, {
    initialRouteName:'Menu',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#f5f5f5"
        }
    }
})

const AppNavigator = createAppContainer(Routes)

export default  AppNavigator