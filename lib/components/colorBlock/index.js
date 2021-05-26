import React from 'react';
export default function Index(props) {
  const {
    txt,
    w = 50,
    h = 50,
    bg = '#FEB2B2',
    m = '5px'
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${w}px`,
      height: `${h}px`,
      background: `${bg}`,
      margin: `${m}`
    }
  }, txt);
}