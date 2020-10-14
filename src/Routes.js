import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
    BonusBuild,
    BuildProtections,
    BuildWeapons,
    Cla,
    BuildHome,
    BuildStatus,
    Habilidades,
    Guardioes,
    ItensAtalho
} from './pages/build'
import HomePage from './pages/HomePage'
import { Comunity, Masters } from './pages/contatos'

const AppNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    BuildStatus: {
        screen: BuildStatus,
    },
    BuildHome: {
        screen: BuildHome,
    },
    BonusBuild: {
        screen: BonusBuild,
    },
    BuildWeapons: {
        screen: BuildWeapons,
    },
    BuildProtections: {
        screen: BuildProtections,
    },
    ItensAtalho: {
        screen: ItensAtalho,
    },
    Guardioes: {
        screen: Guardioes,
    },
    Habilidades: {
        screen: Habilidades,
    },
    Cla: {
        screen: Cla,
    },
    Masters: {
        screen: Masters,
    },
    Comunity: {
        screen: Comunity,
    },
}, {
    initialRouteName: 'HomePage',
}, );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;