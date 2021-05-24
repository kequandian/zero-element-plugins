import Phone from "./phone";
import FormList from "../../plugins/FormList";
import { formConfig } from "../router";
export default function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '210px',
      margin: '0 18px 0 10px'
    }
  }, /*#__PURE__*/React.createElement(FormList, formConfig))), /*#__PURE__*/React.createElement(Phone, null));
}