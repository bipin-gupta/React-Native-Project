import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/home';
import HistoryScreen from './screens/history';
import EventScreen from './screens/events';
import AchivementScreen from './screens/achivement';
import SettingsScreen from './screens/settings';

import { darkGreen } from '../components/Constants';

//Screen names
const homeName = "Home";
const historyName = "History";
const eventName = "Event";
const achivementName = "Achivement";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === historyName) {
              iconName = focused ? 'calendar' : 'calendar-outline';

            } else if (rn === eventName) {
                iconName = focused ? 'bookmarks' : 'bookmarks-outline';

            } else if (rn === achivementName) {
                iconName = focused ? 'medal' : 'medal-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: darkGreen,
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={historyName} component={HistoryScreen} />
        <Tab.Screen name={eventName} component={EventScreen} />
        <Tab.Screen name={achivementName} component={AchivementScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
  );
}

export default MainContainer;