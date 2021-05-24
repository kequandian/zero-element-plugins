// require('./index.less')
// import React from 'react'
// import NamedCart from 'zero-element-boot/lib/components/NamedCart'
// export default function SelectCart(props){
//     const {text}=props
//     return (
//             <div className="select">{text}</div>
//     )
// }
import React from 'react';
import LogoSubtitleItem from "../../../../../components/item/LogoSubtitleItem/Sandbox";

require("./index.less");

export default function CompoundComponents(props) {
  const {
    text
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogoSubtitleItem, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LogoSubtitleItem, null)));
}