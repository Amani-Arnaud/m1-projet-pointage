import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Accueil from './HomeComponents/Accueil';
import Arrivee from './HomeComponents/Arrivee';
import Depart from './HomeComponents/Depart';
import Presences from './HomeComponents/Presences';
import Profil from './HomeComponents/Profil';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Accueil': iconName = 'home'; break;
            case 'Arrivée': iconName = 'log-in'; break;
            case 'Départ': iconName = 'log-out'; break;
            case 'Présences': iconName = 'calendar'; break;
            case 'Profil': iconName = 'person'; break;
            default: iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Arrivée" component={Arrivee} />
      <Tab.Screen name="Départ" component={Depart} />
      <Tab.Screen name="Présences" component={Presences} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
