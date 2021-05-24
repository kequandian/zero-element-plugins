import React from 'react';
import { PageGridContainer, PhoneGridContainer } from "../../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import PlainList from 'zero-element-boot/lib/components/list/PlainList';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import TitleSubtitleImageitem from "../../../../components/item/TitleSubtitleImageitem/Sandbox";
const items = [{
  id: "1"
}, {
  id: "2"
}, {
  id: "3"
}];
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'column'
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0px',
          padding: '10px',
          margin: '10px 10px'
        }
      }
    }
  };
  const plainConfig = {
    items: items
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "手机壳容器",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "PhoneGridContainer",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(PhoneGridContainer, null, /*#__PURE__*/React.createElement(PlainList, plainConfig, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start",
    direction: "column"
  }, /*#__PURE__*/React.createElement(Cart, {
    margin: "0px",
    linewidth: "0px",
    padding: "15px 10px 10px 10px"
  }, /*#__PURE__*/React.createElement(TitleSubtitleImageitem, {
    width: "300px"
  }))))))));
}