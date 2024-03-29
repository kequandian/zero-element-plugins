import React from 'react';
import { PageGridContainer } from "../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components';
import FormList from "../FormList";
import CartList from "./CartList";
import LayoutList from "./compoments/LayoutList"; // import LayoutList from "@/plugins/SelectList/SelectItem/LayoutList";

import CompoundComponents from "./compoments/CompoundComponents";
import SelectedCart from "./compoments/SelectedCart";
import ShadowCart from "./compoments/ShadowCart";
import HoverCart from "./compoments/HoverCart";
import ListComponents from "./compoments/ListComponents";
import TopImageListComponents from "./compoments/TopImageListComponents";
import PhoneListComponents from "./compoments/PhoneListComponents";

require("./index.less");

export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: "start"
      } // cart: {
      //     xname: "Cart",
      //     props: {
      //         padding: '10px'
      //     }
      // },

    }
  };
  const formConfig = {
    form: [{
      title: "头像组件",
      account: "3"
    }, {
      title: "标题组件",
      account: ""
    }, {
      title: "副标题组件",
      account: "1"
    }]
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "组件展示",
    subtitle: "· · ·",
    corner: "13px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '210px',
      margin: '0 18px 0 10px'
    }
  }, /*#__PURE__*/React.createElement(FormList, formConfig)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1"
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement(CartList, null), /*#__PURE__*/React.createElement(ShadowCart, null), /*#__PURE__*/React.createElement(HoverCart, null), /*#__PURE__*/React.createElement(SelectedCart, null), /*#__PURE__*/React.createElement(LayoutList, null), /*#__PURE__*/React.createElement(CompoundComponents, null), /*#__PURE__*/React.createElement(ListComponents, null), /*#__PURE__*/React.createElement(TopImageListComponents, null), /*#__PURE__*/React.createElement(PhoneListComponents, null)))));
}