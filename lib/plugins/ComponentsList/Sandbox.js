import React from 'react';
import ComponentsList from "./";
export default function Sandbox(props) {
  const commit = [{
    title: "Layout",
    text: [{
      content: "Flexbox"
    }, {
      content: "Box"
    }, {
      content: "Grid"
    }, {
      content: "ItemBox"
    }]
  }, {
    title: "Gateway",
    text: [{
      content: "Binding"
    }, {
      content: "Filter"
    }, {
      content: "Gateway"
    }, {
      content: "GetField"
    }]
  }, {
    title: "Cart",
    text: [{
      content: "Cart"
    }, {
      content: "Corner"
    }, {
      content: "Circle"
    }, {
      content: "HightlightCart"
    }]
  }, {
    title: "Container",
    text: [{
      content: "PlainList"
    }, {
      content: "SelectedList"
    }, {
      content: "LoadingList"
    }, {
      content: "LoadMoreList"
    }]
  }];
  return /*#__PURE__*/React.createElement(ComponentsList, {
    data: commit
  });
}