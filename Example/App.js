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
  TouchableOpacity
} from "react-native";

import { RNSelectionMenu } from 'react-native-selection-menu'

type Props = {};
export default class App extends Component<Props> {
  _onPress() {
    RNSelectionMenu.Show({
      values: ['One', 'Two', 'Three'],
      selectedValues: ['One', 'Two'],
      selectionType: 1,
      presentationType: 0,
      // enableSearch: true,
      // searchPlaceholder: 'Search Value',
      // searchTintColor: '#FFFFFF'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this._onPress();

            // this.setState({ visible: true });
          }}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    );
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
