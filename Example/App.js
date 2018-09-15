/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ImageBackground
} from "react-native";

import { RNSelectionMenu } from 'react-native-selection-menu'
import background from './assets/background.jpg'

type Props = {};
export default class App extends Component<Props> {
  _onPress(props) {
    RNSelectionMenu.Show({
      values: [
        "One",
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      selectedValues: ["One", "Two"],
      selectionType: 1,
      presentationType: 0,
      enableSearch: false,
      searchPlaceholder: "Search Value",
      // searchTintColor: "#FFFFFF",
      onSelection: selectedValues => {
        console.log("Selected Values: " + selectedValues);
      },
      ...props
    });
  }

  render() {
    return <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundImage}>
          <Button onPress={() => {
              this._onPress({ presentationType: 0 });
            }} title={"Actionsheet"} />
          <View style={{ height: 30 }} />
          <Button onPress={() => {
              this._onPress({ presentationType: 1 });
            }} title={"Alert"} />
          <View style={{ height: 30 }} />
          <Button onPress={() => {
              this._onPress({ presentationType: 2 });
            }} title={"Formsheet"} />
      </ImageBackground>;
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});
