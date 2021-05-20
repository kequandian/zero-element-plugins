import React, { forwardRef } from 'react';
import selected from '@/assets/selected1-icon.svg';
import unSelected from '@/assets/unselected1-icon.svg';
// import Cart from '../Cart'
require('./index.less')

export default forwardRef(function SelectedCartOutSideIcon(props, ref) {

  /**
   * corner     圆角半径
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   * selectedStroke 选中线框
   */

  const { children, padding = '10px', fill = "#fff", corner = "3px", selectedStroke='#1496BBBF',  stroke = "#C3CFD9BF", lineWidth = "3px", outline = "solid", 
    isSelected: isCartSelect } = props;

  return React.Children.map(children, child => {
    const { isSelected } = child.props;

    const selectedStatus = isCartSelect || isSelected;

    const Display = selectedStatus ? "block" : "none";

    return (
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative', width: '100%', background: `${selectedStatus ? `#C3CFD9E6`: `${fill}`}`,
        borderRadius: `${corner}`,
        borderColor: `${selectedStatus ? selectedStroke : stroke }`,
        borderWidth: `${lineWidth}`,
        borderStyle: `${outline}`,
        padding: `${padding}`
      }}>
        <div className="leftIcon" style={{ display: `${Display}` }}>
          <img src={selectedStatus ? selected: unSelected} color='#1496BBF2'/>
        </div>
        <div style={{
          flex: 1,
        }}>
          {child}
        </div>
      </div>
    )
  })
})