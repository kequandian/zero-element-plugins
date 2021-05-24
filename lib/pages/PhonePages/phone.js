import { PhoneContainer } from "../../components/container";
import { List } from "./components/list";
export default function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhoneContainer, {
    bg: "#f5f5f5",
    style: {
      flex: 1,
      width: "50%"
    }
  }, /*#__PURE__*/React.createElement(List, null))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhoneContainer, {
    bg: "#f5f5f5",
    style: {
      flex: 1,
      width: "50%"
    }
  }, "222")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhoneContainer, {
    bg: "#f5f5f5",
    style: {
      flex: 1,
      width: "50%"
    }
  }, "111")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhoneContainer, {
    bg: "#f5f5f5",
    style: {
      flex: 1,
      width: "50%"
    }
  }, "222")));
}