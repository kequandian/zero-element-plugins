import React, { useImperativeHandle, forwardRef, useState } from 'react';

require("./index.less");

export default /*#__PURE__*/forwardRef(function Index(props, ref) {
  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   * 
   */
  const {
    children,
    fill = '#ffffff',
    corner = '4px',
    stroke = 'solid',
    linewidth = '1px',
    margin = '6px',
    padding = '10px',
    lineColor = '#DFE1E5'
  } = props;
  const shadow = '0 4px 10px rgb(0 0 0 / 10%)';
  const [onHover, setOnHover] = useState(false); // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-articleDetailBgCart`;
  //   }
  // }));

  const toggleHover = () => {// const result = !onHover;
    // setOnHover(result)
  };

  let bgColor = `${fill}ff`;
  let showShadow = '';

  if (onHover) {
    bgColor = `${fill}80`;
    showShadow = shadow;
  } else {
    bgColor = `${fill}ff`;
    showShadow = '';
  }

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "c-articleDetailBgCart-item",
      style: {
        margin: `${margin}`,
        padding: `${padding}`,
        borderRadius: `${corner}`,
        background: `${bgColor}`,
        borderStyle: `${stroke}`,
        boxShadow: `${shadow}`,
        borderWidth: `${linewidth}`,
        borderColor: `${lineColor}`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, child); // return <div align="center" style={{position: 'relative'}}>
    //   <div className="contener">
    //     <div className="txt_init">
    //       LOW POLY BACKGROUND</div>
    //     <div className="opac">
    //       Download</div>
    //   </div>
    // </div>
  });
});