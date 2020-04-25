import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Routes from '../../utils/Routes';
import Main from '../../Screens/Main/Main';
import MovieScreen from '../../Screens/MovieScreen/MovieScreen';
import Favourite from '../../Screens/Favourite/Favourite';
import {createAppContainer} from 'react-navigation';
import Header from '../../Components/Header/Header';

export default createAppContainer(createStackNavigator(
  {
      [Routes.Screens.MAIN.routeName]: {
          screen: Main
      },
      [Routes.Screens.MOVIE.routeName]: {
          screen: MovieScreen
      },
      [Routes.Screens.FAVOURITE.routeName]: {
          screen: Favourite
      }
  },
  {
    initialRouteName: Routes.Screens.MAIN.routeName,
    defaultNavigationOptions: {
      // header: (props) => <Header {...props}/>,
      // headerStyle: {
      //     height: 'auto'
      // }
    },
  },
));
