import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

export default forwardRef(function Index(props, ref) {

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
    children, fill = '#ffffff', corner = '4px', stroke = 'solid', linewidth = '1px',
    margin = '6px', padding = '10px', lineColor = '#DFE1E5',  } = props;

    const shadow = '0 4px 10px rgba(0, 0, 0, 0.30)'

  const [onHover, setOnHover] = useState(false);

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-hoverCartWhite`;
  //   }
  // }));

  const toggleHover = () => {
    // const result = !onHover;
    // setOnHover(result)
  }

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
    return <div className='c-hoverCartWhite-item' style={{
      margin: `${margin}`,
      padding: `${padding}`,
      borderRadius: `${corner}`,
      background: `${bgColor}`,
      borderStyle: `${stroke}`,
      boxShadow: `${shadow}`,
      borderWidth: `${linewidth}`,
      borderColor: `${lineColor}`
    }}
      onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}
    >
      {child}
    </div>
    // return <div align="center" style={{position: 'relative'}}>
    //   <div className="contener">
    //     <div className="txt_init">
    //       LOW POLY BACKGROUND</div>
    //     <div className="opac">
    //       Download</div>
    //   </div>
    // </div>
  })
})