import { createStackNavigator, createAppContainer } from 'react-navigation';
import PeoplePage from './src/screens/PeoplePage';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;