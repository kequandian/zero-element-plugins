import React, { useImperativeHandle, forwardRef } from 'react';
import selectedIcon from "../../../assets/selected-icon.svg"; // import Cart from '../Cart'

require("./index.less");

export default /*#__PURE__*/forwardRef(function SelectedCart(props, ref) {
  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */
  let {
    children,
    padding = '10px',
    margin = '10px',
    fill = "#fff",
    corner = "3px",
    stroke = "#000",
    lineWidth = "0px",
    outline = "solid",
    isSelected: isCartSelect
  } = props; // let fill = "#fff";
  // function clickItem(itemIndex){
  //   children[0].props.onSelected(itemIndex)
  // }
  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-selectedcart-item`;
  //   }
  // }));

  return React.Children.map(children, child => {
    const {
      isSelected
    } = child.props;
    const selectedStatus = isCartSelect || isSelected;

    if (selectedStatus) {
      fill = "rgba(135,206,250,0.2)";
    }

    const Display = selectedStatus ? "block" : "none";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: `${fill}`,
        borderRadius: `${corner}`,
        borderColor: `${stroke}`,
        borderWidth: `${lineWidth}`,
        borderStyle: `${outline}`,
        padding: `${padding}`,
        margin: `${margin}`,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "right",
      style: {
        display: `${Display}`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedIcon
    })), child);
  });
});