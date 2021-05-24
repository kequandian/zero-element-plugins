import React, { forwardRef } from 'react';
import selected from "../../../assets/selected1-icon.svg";
import unSelected from "../../../assets/unselected1-icon.svg"; // import Cart from '../Cart'

require("./index.less");

export default /*#__PURE__*/forwardRef(function SelectedCartOutSideIcon(props, ref) {
  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   * selectedStroke 选中线框
   */
  const {
    children,
    padding = '10px',
    fill = "#fff",
    corner = "3px",
    selectedStroke = '#1496BB',
    stroke = "#C3CFD9BF",
    lineWidth = "3px",
    outline = "solid",
    isSelected: isCartSelect
  } = props;
  return React.Children.map(children, child => {
    const {
      isSelected
    } = child.props;
    const selectedStatus = isCartSelect || isSelected;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        background: `${selectedStatus ? `#8ACBDD` : `${fill}`}`,
        borderRadius: `${corner}`,
        borderColor: `${selectedStatus ? selectedStroke : stroke}`,
        borderWidth: `${lineWidth}`,
        borderStyle: `${outline}`,
        padding: `${padding}`,
        color: `${selectedStatus ? `#0D3D56` : `#84939F`}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "leftIcon"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedStatus ? selected : unSelected,
      color: "#1496BBF2"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, child));
  });
});