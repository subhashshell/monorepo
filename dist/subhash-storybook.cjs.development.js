'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["children", "variant"];
var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = React.useState(0),
      count = _useState[0],
      setCount = _useState[1];

  return React__default.createElement("button", Object.assign({}, props, {
    style: {
      backgroundColor: variant === 'primary' ? 'blue' : 'gray'
    },
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }), children, " ", count);
};

/*
 * Created on Sun Aug 14 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved
 */
var Checkbox = function Checkbox() {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("label", {
    className: "c-control c-control--checkbox"
  }, React__default.createElement("input", {
    className: "c-control__input",
    type: "checkbox",
    "data-testid": "checkbox",
    name: "hello",
    id: "#hello"
  }), React__default.createElement("span", {
    className: "c-control__fake-input "
  }),  React__default.createElement("span", {
    className: "c-control__label"
  }, React__default.createElement("div", {
    className: "c-control__label-has-profiles"
  }, React__default.createElement("span", null, "Hello 12"))), React__default.createElement("button", {
    className: "c-button c-button--square"
  }, React__default.createElement("span", {
    className: "u-screen-reader-text"
  }, "Cancel card"))));
};

/*
 * Created on Sun Aug 14 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved
 */
var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("svg", {
    className: "c-icon " + (className ? className : ''),
    "aria-hidden": "true"
  }, React__default.createElement("use", {
    xlinkHref: "#" + name
  })));
};

/*
 * Created on Fri Aug 12 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */
var Tabs = function Tabs(_ref) {
  var tabsItems = _ref.tabsItems,
      selectedTab = _ref.selectedTab,
      onTabChange = _ref.onTabChange;

  var _useState = React.useState(selectedTab),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var handleTabClick = function handleTabClick(item) {
    setActiveTab(item.id);

    if (onTabChange) {
      onTabChange(item.url);
    }
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("nav", {
    className: "c-tabs c-secondary-nav"
  }, React__default.createElement("ul", {
    className: "c-secondary-nav__list"
  }, tabsItems == null ? void 0 : tabsItems.map(function (tabItem) {
    return React__default.createElement("li", {
      key: tabItem.id,
      className: "c-secondary-nav__list-item " + (activeTab === tabItem.id ? "is-active" : "")
    }, React__default.createElement("button", {
      onClick: function onClick() {
        return handleTabClick(tabItem);
      },
      className: "c-secondary-nav__link"
    }, tabItem.name));
  }))));
};

/*
 * Created on Mon Aug 22 2022
 *
 * Copyright (c) 2022 SHELL
 * All rights reserved.
 */
var PageHeader = function PageHeader(_ref) {
  var sectionName = _ref.sectionName,
      title = _ref.title,
      introduction = _ref.introduction;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("p", {
    className: "c-page-header__main-section-name"
  }, sectionName), React__default.createElement("h1", {
    className: "c-page-header__title c-typography--h1"
  }, title), React__default.createElement("p", {
    className: "c-page-header__introduction"
  }, introduction));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Icon = Icon;
exports.PageHeader = PageHeader;
exports.Tabs = Tabs;
exports.Thing = Thing;
//# sourceMappingURL=subhash-storybook.cjs.development.js.map
