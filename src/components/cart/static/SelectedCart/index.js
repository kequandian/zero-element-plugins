import React, { useImperativeHandle, forwardRef, useState } from 'react';

require('./index.less');

/**
 * line 分割线
 * 参数
 * Seperator: Seperator, 组件名
   props:{
      lineType:'solid' 分割线类型
   }
 */

export default forwardRef(function SelectIndicatorCart(props, ref) {

  const { children, title } = props;
  let { isSelected } = props

  const { lineColor = '#4285F4', fill = '#ffffff', activeLeftLine = "1px", margin = "10px" } = children.props;

  return React.Children.map(children, child => {

    // const margin = '0px';
    const padding = '0px'
    let linewidth = '';
    // let activeLeftLine = line.activeLeftLine ? line.activeLeftLine : '5px';
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    // const lineColor = '#4285F4';
    let bgColor = `${fill}`;

    if (isSelected) {
      bgColor = activeColor;
      linewidth = activeLeftLine;
    }

    return (
      <>
        <div className={`i-SelectCart`}
          style={{
            position: 'relative',
            margin: `${margin}`,
            padding: `${padding}`,
            backgroundColor: `${fill}`,
            color: `${lineColor}`
          }}
        >
          {linewidth ? (
            <div style={{
              position: 'absolute',
              height: '100%',
              left: 0,
              top: 0,
              borderStyle: `solid`,
              borderWidth: `0 0 0 ${linewidth}`,
              borderColor: `${lineColor}`
            }}></div>
          ) : null}

          {child}
        </div>
      </>

    )
  })
})