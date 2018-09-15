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
  Button
} from "react-native";

import { RNSelectionMenu } from 'react-native-selection-menu'

type Props = {};
export default class App extends Component<Props> {
  _onPress(props) {
    RNSelectionMenu.Show({
      values: [
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three",
        "One",
        "Two",
        "Three"
      ],
      selectedValues: ["One", "Two"],
      selectionType: 1,
      presentationType: 0,
      enableSearch: true,
      searchPlaceholder: "Search Value",
      searchTintColor: "#FFFFFF",
      ...props
    });
  }

  render() {
    return <View style={styles.container}>
        <Button
          onPress={() => {
            this._onPress({
              presentationType: 0
            });
          }}
          title={"Actionsheet"}
        />
        <View style={{ height: 30 }}></View>
        <Button
          onPress={() => {
            this._onPress({
              presentationType: 1
            });
          }}
          title={"Alert"}
        />
        <View style={{height: 30}}></View>
        <Button
          onPress={() => {
            this._onPress({
              presentationType: 2
            });
          }}
          title={"Formsheet"}
        />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
