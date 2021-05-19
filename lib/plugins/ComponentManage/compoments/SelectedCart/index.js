import React from 'react';
import { PageGridContainer } from "../../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components'; // import SelectedCart from '@/components/item/SelectCartItem/Sandbox';
// import SelectedCartTxtStatic from '@/components/item/SelectedCartTxtStatic/Sandbox';
// import SelectCartOutSideIconItem from '@/components/item/SelectCartOutSideIconItem/Sandbox';

import SelectedCart from "../../../../components/cart/SelectedCart";
import SelectedCartBody from "../../../../components/item/SelectCartItem";
import SelectedRightLineCart from "../../../../components/cart/static/SelectedCart";
import SelectedRightLineCartBody from "../../../../components/item/SelectedCartTxtStatic";
import SelectedCartOutSideIcon from "../../../../components/cart/SelectedCartOutSideIcon";
import SelectCartOutSideIconBody from "../../../../components/item/SelectCartOutSideIconItem";
import SelectedCartBorder from "../../../../components/cart/SelectedCartBorder";
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: "start",
        margin: '0 10px'
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0',
          padding: '0',
          margin: '10px 10px',
          shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }
      }
    }
  };
  const SelectedCartBodyConfig = {
    title: "Content",
    isSelected: true
  };
  const SelectedRightLineCartBodyConfig = {
    title: "Content",
    padding: "0px",
    lineColor: "#1496BB",
    activeLeftLine: "5px",
    fill: 'transparent',
    margin: '0'
  };
  const SelectCartOutSideIconBodyConfig = {
    title: "Content",
    isSelected: true
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "SelectedCart",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCart, {
    padding: "0px",
    fill: 'transparent'
  }, /*#__PURE__*/React.createElement(SelectedCartBody, SelectedCartBodyConfig))), /*#__PURE__*/React.createElement(SelectedRightLineCart, {
    isSelected: true
  }, /*#__PURE__*/React.createElement(SelectedRightLineCartBody, SelectedRightLineCartBodyConfig)), /*#__PURE__*/React.createElement(SelectedCartOutSideIcon, {
    fill: 'transparent',
    padding: "0px",
    stroke: "#2196F3",
    lineWidth: "1px"
  }, /*#__PURE__*/React.createElement(SelectCartOutSideIconBody, SelectCartOutSideIconBodyConfig)), /*#__PURE__*/React.createElement(SelectedCartBorder, {
    fill: 'transparent',
    padding: "0px",
    stroke: "#2196F3",
    lineWidth: "1px"
  }, /*#__PURE__*/React.createElement(SelectCartOutSideIconBody, SelectCartOutSideIconBodyConfig))));
}