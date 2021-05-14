import React, { useImperativeHandle, forwardRef } from 'react';
import selectedIcon from '@/assets/selected-icon.svg';
// import Cart from '../Cart'
require('./index.less')

export default forwardRef(function SelectedCart(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */

  const { children, padding = '10px', corner = "3px", stroke = "#000", lineWidth = "0px", outline = "solid" } = props;

  let fill = "#fff";
  // function clickItem(itemIndex){
  //   children[0].props.onSelected(itemIndex)
  // }

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-selectedcart-item`;
  //   }
  // }));
  return React.Children.map(children, child => {
    const { isSelected } = child.props;

    if (isSelected) {
      fill = "rgba(135,206,250,0.2)"
    }
    
    const Display = isSelected ? "block" : "none"
    return <div style={{
      background: `${fill}`,
      borderRadius: `${corner}`,
      borderColor: `${stroke}`,
      borderWidth: `${lineWidth}`,
      borderStyle: `${outline}`,
      padding: `${padding}`,
      position: 'relative'
    }}>
      {/* <div className="right" style={{ display: `${Display}` }}>√</div> */}
      <div className="right" style={{ display: `${Display}` }}>
        <img src={selectedIcon} />
      </div>
      {child}
    </div>
  })
})