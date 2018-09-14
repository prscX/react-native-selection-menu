import { ViewPropTypes, findNodeHandle, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNSelectionMenu } = NativeModules;

class SelectionMenu {
  static propTypes = {
    ...ViewPropTypes,

    values: PropTypes.array,
    selectedValues: PropTypes.array,

    selectionType: PropTypes.number,
    presentationType: PropTypes.number,

    title: PropTypes.string,
    actionTitle: PropTypes.string,
    tickColor: PropTypes.string,
    cancellable: PropTypes.bool,

    enableSearch: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    searchTintColor: PropTypes.string
  };

  static defaultProps = {
    selectionType: 0,
    presentationType: 0,

    tickColor: "#157efb",
    title: "Pick your value",
    actionTitle: "Select",

    enableSearch: false,
    searchPlaceholder: "Search",
    searchTintColor: "#d3d3d3"
  };

  static Types = {
    Actionsheet: 0,
    Alert: 1,
    Formsheet: 2
  };

  static Show(props) {
    if (props.selectionType === undefined)
      props.selectionType = SelectionMenu.defaultProps.selectionType;
    if (props.presentationType === undefined)
      props.presentationType = SelectionMenu.defaultProps.presentationType;

    if (props.title === undefined)
      props.title = SelectionMenu.defaultProps.title;
    if (props.actionTitle === undefined)
      props.actionTitle = SelectionMenu.defaultProps.actionTitle;
    if (props.tickColor === undefined)
      props.tickColor = SelectionMenu.defaultProps.tickColor;

    if (props.enableSearch === undefined)
      props.enableSearch = SelectionMenu.defaultProps.enableSearch;
    if (props.searchPlaceholder === undefined)
      props.searchPlaceholder = SelectionMenu.defaultProps.searchPlaceholder;
    if (props.searchTintColor === undefined)
      props.searchTintColor = SelectionMenu.defaultProps.searchTintColor;

    RNSelectionMenu.Show({ ...props });
  }

  static Alert(props) {
    SelectionMenu.Show({
      presentationType: SelectionMenu.Types.Alert,
      ...props
    });
  }

  static Actionsheet(props) {
    SelectionMenu.Show({
      presentationType: SelectionMenu.Types.Actionsheet,
      ...props
    });
  }

  static Formsheet(props) {
    SelectionMenu.Show({
      presentationType: SelectionMenu.Types.Formsheet,
      ...props
    });
  }
}

export { SelectionMenu as RNSelectionMenu };
