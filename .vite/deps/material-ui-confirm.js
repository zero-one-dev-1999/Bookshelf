import {
  Checkbox_default,
  DialogActions_default,
  DialogContentText_default,
  DialogContent_default,
  DialogTitle_default,
  Dialog_default,
  FormControlLabel_default,
  TextField_default
} from "./chunk-6DT7X4GE.js";
import {
  Button_default
} from "./chunk-62YKIB5E.js";
import "./chunk-PF2VR3Y5.js";
import "./chunk-YEGEUSQR.js";
import "./chunk-OHTLAOBO.js";
import "./chunk-WIQE3GTV.js";
import "./chunk-HQ6ZTAWL.js";
import "./chunk-Y64DX5DL.js";
import "./chunk-KSVC6TPA.js";
import "./chunk-ERWNHSXD.js";
import "./chunk-2KHBIA62.js";
import {
  require_react
} from "./chunk-7JZAKNLV.js";
import {
  __toESM
} from "./chunk-2TUXWMP5.js";

// node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js
var import_react = __toESM(require_react());
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var ConfirmContext = (0, import_react.createContext)({
  confirmBase: function confirmBase() {
    throw new Error("Missing ConfirmProvider");
  },
  closeOnParentUnmount: function closeOnParentUnmount() {
  }
});
var ConfirmationDialog = function ConfirmationDialog2(_ref) {
  var open = _ref.open, options = _ref.options, onCancel = _ref.onCancel, onConfirm = _ref.onConfirm, onClose = _ref.onClose;
  var title = options.title, description = options.description, content = options.content, confirmationText = options.confirmationText, cancellationText = options.cancellationText, dialogProps = options.dialogProps, dialogActionsProps = options.dialogActionsProps, confirmationButtonProps = options.confirmationButtonProps, cancellationButtonProps = options.cancellationButtonProps, titleProps = options.titleProps, contentProps = options.contentProps, allowClose = options.allowClose, confirmationKeyword = options.confirmationKeyword, confirmationKeywordTextFieldProps = options.confirmationKeywordTextFieldProps, hideCancelButton = options.hideCancelButton, buttonOrder = options.buttonOrder, acknowledgement = options.acknowledgement, acknowledgementFormControlLabelProps = options.acknowledgementFormControlLabelProps, acknowledgementCheckboxProps = options.acknowledgementCheckboxProps;
  var _React$useState = import_react.default.useState(""), _React$useState2 = _slicedToArray(_React$useState, 2), confirmationKeywordValue = _React$useState2[0], setConfirmationKeywordValue = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), isAcknowledged = _React$useState4[0], setIsAcknowledged = _React$useState4[1];
  var confirmationButtonDisabled = Boolean(confirmationKeyword && confirmationKeywordValue !== confirmationKeyword || acknowledgement && !isAcknowledged);
  var acknowledgeCheckbox = import_react.default.createElement(import_react.default.Fragment, null, acknowledgement && import_react.default.createElement(FormControlLabel_default, _extends({}, acknowledgementFormControlLabelProps, {
    control: import_react.default.createElement(Checkbox_default, _extends({}, acknowledgementCheckboxProps, {
      value: isAcknowledged,
      onChange: function onChange(_, value) {
        return setIsAcknowledged(value);
      }
    })),
    label: acknowledgement
  })));
  var confirmationContent = import_react.default.createElement(import_react.default.Fragment, null, confirmationKeyword && import_react.default.createElement(TextField_default, _extends({
    onChange: function onChange(e) {
      return setConfirmationKeywordValue(e.target.value);
    },
    value: confirmationKeywordValue,
    fullWidth: true
  }, confirmationKeywordTextFieldProps)));
  var dialogActions = buttonOrder.map(function(buttonType) {
    if (buttonType === "cancel") {
      return !hideCancelButton && import_react.default.createElement(Button_default, _extends({
        key: "cancel"
      }, cancellationButtonProps, {
        onClick: onCancel
      }), cancellationText);
    }
    if (buttonType === "confirm") {
      return import_react.default.createElement(Button_default, _extends({
        key: "confirm",
        color: "primary",
        disabled: confirmationButtonDisabled
      }, confirmationButtonProps, {
        onClick: onConfirm
      }), confirmationText);
    }
    throw new Error('Supported button types are only "confirm" and "cancel", got: '.concat(buttonType));
  });
  return import_react.default.createElement(Dialog_default, _extends({
    fullWidth: true
  }, dialogProps, {
    open,
    onClose: allowClose ? onClose : null
  }), title && import_react.default.createElement(DialogTitle_default, titleProps, title), content ? import_react.default.createElement(DialogContent_default, contentProps, content, confirmationContent, acknowledgeCheckbox) : description ? import_react.default.createElement(DialogContent_default, contentProps, import_react.default.createElement(DialogContentText_default, null, description), confirmationContent, acknowledgeCheckbox) : (confirmationKeyword || acknowledgeCheckbox) && import_react.default.createElement(DialogContent_default, contentProps, confirmationContent, acknowledgeCheckbox), import_react.default.createElement(DialogActions_default, dialogActionsProps, dialogActions));
};
var DEFAULT_OPTIONS = {
  title: "Are you sure?",
  description: "",
  content: null,
  confirmationText: "Ok",
  cancellationText: "Cancel",
  dialogProps: {},
  dialogActionsProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
  titleProps: {},
  contentProps: {},
  allowClose: true,
  confirmationKeywordTextFieldProps: {},
  hideCancelButton: false,
  buttonOrder: ["cancel", "confirm"],
  acknowledgement: false,
  acknowledgementFormControlLabelProps: {},
  acknowledgementCheckboxProps: {}
};
var buildOptions = function buildOptions2(defaultOptions, options) {
  var dialogProps = _objectSpread2(_objectSpread2({}, defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps), options.dialogProps || {});
  var dialogActionsProps = _objectSpread2(_objectSpread2({}, defaultOptions.dialogActionsProps || DEFAULT_OPTIONS.dialogActionsProps), options.dialogActionsProps || {});
  var confirmationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.confirmationButtonProps || DEFAULT_OPTIONS.confirmationButtonProps), options.confirmationButtonProps || {});
  var cancellationButtonProps = _objectSpread2(_objectSpread2({}, defaultOptions.cancellationButtonProps || DEFAULT_OPTIONS.cancellationButtonProps), options.cancellationButtonProps || {});
  var titleProps = _objectSpread2(_objectSpread2({}, defaultOptions.titleProps || DEFAULT_OPTIONS.titleProps), options.titleProps || {});
  var contentProps = _objectSpread2(_objectSpread2({}, defaultOptions.contentProps || DEFAULT_OPTIONS.contentProps), options.contentProps || {});
  var confirmationKeywordTextFieldProps = _objectSpread2(_objectSpread2({}, defaultOptions.confirmationKeywordTextFieldProps || DEFAULT_OPTIONS.confirmationKeywordTextFieldProps), options.confirmationKeywordTextFieldProps || {});
  var acknowledgementFormControlLabelProps = _objectSpread2(_objectSpread2({}, defaultOptions.acknowledgementFormControlLabelProps || DEFAULT_OPTIONS.acknowledgementFormControlLabelProps), options.acknowledgementFormControlLabelProps || {});
  var acknowledgementCheckboxProps = _objectSpread2(_objectSpread2({}, defaultOptions.acknowledgementCheckboxProps || DEFAULT_OPTIONS.acknowledgementCheckboxProps), options.acknowledgementCheckboxProps || {});
  return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), defaultOptions), options), {}, {
    dialogProps,
    dialogActionsProps,
    confirmationButtonProps,
    cancellationButtonProps,
    titleProps,
    contentProps,
    confirmationKeywordTextFieldProps,
    acknowledgementFormControlLabelProps,
    acknowledgementCheckboxProps
  });
};
var confirmGlobal;
var ConfirmProvider = function ConfirmProvider2(_ref) {
  var children = _ref.children, _ref$defaultOptions = _ref.defaultOptions, defaultOptions = _ref$defaultOptions === void 0 ? {} : _ref$defaultOptions;
  var _useState = (0, import_react.useState)(null), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var _useState3 = (0, import_react.useState)({}), _useState4 = _slicedToArray(_useState3, 2), options = _useState4[0], setOptions = _useState4[1];
  var _useState5 = (0, import_react.useState)(0), _useState6 = _slicedToArray(_useState5, 2), key = _useState6[0], setKey = _useState6[1];
  var confirmBase2 = (0, import_react.useCallback)(function(parentId) {
    var options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve, reject) {
      setKey(function(key2) {
        return key2 + 1;
      });
      setOptions(options2);
      setState({
        resolve,
        reject,
        parentId
      });
    });
  }, []);
  var closeOnParentUnmount2 = (0, import_react.useCallback)(function(parentId) {
    setState(function(state2) {
      if (state2 && state2.parentId === parentId) {
        return null;
      } else {
        return state2;
      }
    });
  }, []);
  var handleClose = (0, import_react.useCallback)(function() {
    setState(null);
  }, []);
  var handleCancel = (0, import_react.useCallback)(function() {
    setState(function(state2) {
      state2 && state2.reject();
      return null;
    });
  }, []);
  var handleConfirm = (0, import_react.useCallback)(function() {
    setState(function(state2) {
      state2 && state2.resolve();
      return null;
    });
  }, []);
  confirmGlobal = (0, import_react.useCallback)(function(options2) {
    return confirmBase2("global", options2);
  });
  return import_react.default.createElement(import_react.Fragment, null, import_react.default.createElement(ConfirmContext.Provider, {
    value: {
      confirmBase: confirmBase2,
      closeOnParentUnmount: closeOnParentUnmount2
    }
  }, children), import_react.default.createElement(ConfirmationDialog, {
    key,
    open: state !== null,
    options: buildOptions(defaultOptions, options !== null && options !== void 0 ? options : {}),
    onClose: handleClose,
    onCancel: handleCancel,
    onConfirm: handleConfirm
  }));
};
var idCounter = 0;
var useConfirmId = function useConfirmId2() {
  var id = (0, import_react.useMemo)(function() {
    return idCounter++;
  }, []);
  return "confirm-".concat(id);
};
var useConfirm = function useConfirm2() {
  var parentId = useConfirmId();
  var _useContext = (0, import_react.useContext)(ConfirmContext), confirmBase2 = _useContext.confirmBase, closeOnParentUnmount2 = _useContext.closeOnParentUnmount;
  var confirm = (0, import_react.useCallback)(function(options) {
    return confirmBase2(parentId, options);
  }, [parentId]);
  (0, import_react.useEffect)(function() {
    return function() {
      closeOnParentUnmount2(parentId);
    };
  }, [parentId]);
  return confirm;
};
export {
  ConfirmProvider,
  confirmGlobal as confirm,
  useConfirm
};
//# sourceMappingURL=material-ui-confirm.js.map
