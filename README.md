<h1 align="center">

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-selection-menu"><img src="http://img.shields.io/npm/v/react-native-selection-menu.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-selection-menu/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-selection-menu#License"><img src="https://img.shields.io/npm/l/react-native-selection-menu.svg?style=flat" /></a>
</p>


    ReactNative: Native Selection Menu (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>
This library is a React Native bridge around native elegant selection list or dropdown menu for both Android and iOS.


#### iOS

| **[rushisangani/RSSelectionMenu](https://github.com/rushisangani/RSSelectionMenu)**             |
| ----------------- |
| <img src="./assets/ios-hero.gif" />                  |

#### Android

| **[Hamadakram/AlertView](https://github.com/Hamadakram/AlertView)**             |
| ----------------- |
| <img src="https://github.com/Hamadakram/AlertView/raw/master/art/Banner.png?raw=true" />                  |

| **[Hamadakram/AlertView](https://github.com/Hamadakram/AlertView)**             |
| ----------------- |
| <img src="https://cloud.githubusercontent.com/assets/8886687/26755439/869f9e6c-48a2-11e7-9e6c-829b573e7730.jpg" />                  |



## 📖 Getting started

`$ npm install react-native-selection-menu --save`

`$ react-native link react-native-selection-menu`

* Android
  * Please add below script in your build.gradle

```
buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
        maven { url "https://jitpack.io" }
        ...
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven { url "https://maven.google.com" }
        maven { url "https://jitpack.io" }
        ...
    }
}
```


> **Note:** Android SDK 27 > is supported

* iOS
    > **iOS Prerequisite:** Please make sure CocoaPods is installed on your system

  * After `react-native link react-native-selection-menu`, please verify `node_modules/react-native-selection-menu/ios/` contains `Pods` folder. If does not exist please execute `pod install` command on `node_modules/react-native-selection-menu/ios/`, if any error => try `pod repo update` then `pod install`
  * After verification, open your project and create a folder 'RSSelectionMenu' under Libraries.
  * Drag `node_modules/react-native-selection-menu/ios/pods/Pods.xcodeproject` into RNSelectionMenu, as well as the RNSelectionMenu.xcodeproject if it does not exist.
  * Add the `RSSelectionMenu.framework` into your project's `Embedded Binaries` and make sure the framework is also in linked libraries.
  * Go to your project's `Build Settings -> Frameworks Search Path` and add `${BUILT_PRODUCTS_DIR}/RSSelectionMenu` non-recursive.

  * Now build your iOS app through Xcode


## 💻 Usage

```javascript
import { RNSelectionMenu } from 'react-native-selection-menu'
```

* **Actionsheet**

```javascript
RNSelectionMenu.Actionsheet(props)
```

* **Alert**

```javascript
RNSelectionMenu.Alert(props)
```

* **Formsheet**

```javascript
RNSelectionMenu.Formsheet(props)
```


## 💡 Props

- **General(iOS & Android)**

| Prop                   | Type                | Default | Note                                             |
| ---------------------- | ------------------- | ------- | ------------------------------------------------ |
| ``     | ``            |         |                  |


## ✨ Credits

- iOS: [rushisangani/RSSelectionMenu](https://github.com/rushisangani/RSSelectionMenu)
- Android: [Hamadakram/AlertView](https://github.com/Hamadakram/AlertView)
- Android: [mirrajabi/search-dialog](https://github.com/mirrajabi/search-dialog)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-selection-menu/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNSelectionMenu @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >
