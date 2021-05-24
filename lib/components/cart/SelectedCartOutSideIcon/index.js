import React, { useImperativeHandle, forwardRef } from 'react';
import selectedIcon from "../../../assets/selected-icon.svg"; // import Cart from '../Cart'

require("./index.less");

export default /*#__PURE__*/forwardRef(function SelectedCartOutSideIcon(props, ref) {
  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */
  const {
    children,
    padding = '10px',
    fill = "#fff",
    corner = "3px",
    stroke = "#000",
    lineWidth = "0px",
    outline = "solid",
    isSelected: isCartSelect
  } = props;
  return React.Children.map(children, child => {
    const {
      isSelected
    } = child.props; // if (isSelected) {
    //   fill = "rgba(135,206,250,0.2)"
    // }

    const selectedStatus = isCartSelect || isSelected;
    const Display = selectedStatus ? "block" : "none";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        background: `${fill}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        borderRadius: `${corner}`,
        borderColor: `${selectedStatus ? stroke : '#000'}`,
        borderWidth: `${lineWidth}`,
        borderStyle: `${outline}`,
        padding: `${padding}`
      }
    }, child), /*#__PURE__*/React.createElement("div", {
      className: "rightIcon",
      style: {
        display: `${Display}`
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedIcon
    })));
  });
});