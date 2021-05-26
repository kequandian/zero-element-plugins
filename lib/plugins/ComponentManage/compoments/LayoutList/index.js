import React from 'react';
import { PageGridContainer } from "../../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components'; //boot

import Wrap from 'zero-element-boot/lib/components/layout/Wrap';
import Stack from 'zero-element-boot/lib/components/layout/Stack';
import ColorBlock from "../../../../components/colorBlock";
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: "start"
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0',
          padding: '0px',
          margin: '10px 10px',
          shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }
      }
    }
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "Layout",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px'
    }
  }, /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "Wrap",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#FEB2B2",
    txt: 'item1'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#9AE6B4",
    txt: 'item2'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#90CDF4",
    txt: 'item3'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#FF6347",
    txt: 'item4'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#A3A3A3",
    txt: 'item5'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#90CDF4",
    txt: 'item6'
  })))), /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "Stack",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement(Stack, {
    spacing: 10
  }, /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#FEB2B2",
    txt: 'item1',
    margin: '0px'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#9AE6B4",
    txt: 'item2',
    margin: '0px'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#90CDF4",
    txt: 'item3',
    margin: '0px'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#FF6347",
    txt: 'item4',
    margin: '0px'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#A3A3A3",
    txt: 'item5',
    margin: '0px'
  }), /*#__PURE__*/React.createElement(ColorBlock, {
    bg: "#90CDF4",
    txt: 'item6',
    margin: '0px'
  })))))));
}