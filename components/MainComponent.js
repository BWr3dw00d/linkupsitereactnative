import React, { Component } from 'react';
import Home from './HomeComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}
    },
    {
        initialRouteName:'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:'#000026'
            },
            headerTintColor: '#fff',
            headerTitleColor: {
                color:'#DFFF00'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
    },
    {
        drawerBackgroundColor: '#fff'
    }
);



const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  
    
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                
                }}
            >
               <AppNavigator />
            </View>
        );
    }
}

export default Main;