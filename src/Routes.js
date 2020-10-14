import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './pages/HomePage';
import BuildHome from './pages/build/BonusBuild';
import BuildStatus from './pages/build/BuildStatus';
import BonusBuild from './pages/build/BonusBuild';
import BuildWeapons from './pages/build/BuildWeapons';
import BuildProtections from './pages/build/BuildProtections';
import Guardioes from './pages/build/Guardioes';
import Habilidades from './pages/build/Habilidades';
import ItensAtalho from './pages/build/ItensAtalho'
import Cla from './pages/build/Cla';
import Masters from './pages/contatos/Masters';
import Comunity from './pages/contatos/Comunity';

const AppNavigator = createStackNavigator(
  {
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
  },
  {
    initialRouteName: 'HomePage',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
