import "../public/index.less";
import { Usersvg } from "./svg";
export const List_Act = props => {
  const {
    title = "主标题",
    subTitle = "副标题",
    background
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "List_Act",
    style: {
      background: background
    }
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("h5", null, subTitle));
};
export const List_Name = props => {
  const {
    title = "名称",
    subTitle = "简介",
    background = "",
    svg = /*#__PURE__*/React.createElement(Usersvg, {
      width: "30",
      height: "30"
    })
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "List_Name",
    style: {
      background: background
    }
  }, /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("h5", null, subTitle), svg);
};
export const List = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "List_Title"
  }, "\u5217\u8868\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(List_Act, null), /*#__PURE__*/React.createElement(List_Name, null));
};