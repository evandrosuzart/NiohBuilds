import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Pages/HomePage';
import BuildHome from './Pages/builds/BuildHome';
import BuildStatus from './Pages/builds/BuildStatus';
import BonusBuild from './Pages/builds/BonusBuild';
import BuildWeapons from './Pages/builds/BuildWeapons';
import BuildProtections from './Pages/builds/BuildProtections';
import ItensAtalho from './Pages/builds/ItensAtalho';
import Guardioes from './Pages/builds/Guardioes';
import Habilidades from './Pages/builds/Habilidades';
import Cla from './Pages/builds/Cla';
import Masters from './Pages/builds/Masters';
import Comunity from './Pages/builds/Comunity';

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
