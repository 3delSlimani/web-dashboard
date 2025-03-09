import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import ServiceControlScreen from '../screens/ServiceControlScreen';
import LogViewerScreen from '../screens/LogViewerScreen';
import SecurityManagementScreen from '../screens/SecurityManagementScreen';
import TerminalAccessScreen from '../screens/TerminalAccessScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import BackupManagementScreen from '../screens/BackupManagementScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Service Control" component={ServiceControlScreen} />
        <Stack.Screen name="Log Viewer" component={LogViewerScreen} />
        <Stack.Screen name="Security Management" component={SecurityManagementScreen} />
        <Stack.Screen name="Terminal Access" component={TerminalAccessScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Backup Management" component={BackupManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;