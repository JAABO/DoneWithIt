import { React } from 'react';
import {View} from 'react-native';
import AppText from './app/component/AppText/AppText';

import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/component/Card'
import MessagesScreen from './app/screens/MessagesScreen';
// import {Welcomescreen} from "./screens";

export default function App() {
  console.log("App executed.")

  return (
    <MessagesScreen/>
  // <ListingDetailsScreen/>
  // <ViewImageScreen/>
  // <WelcomeScreen/>

  );
}