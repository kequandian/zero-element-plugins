function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Account from "../../presenter/Account";
import PassRate from "../../presenter/PassRate";
import { AutoComponent } from 'zero-element-boot/lib/components';
import Diffect from "../../presenter/Diffect";
export default function FootText(props) {
  const allComponents = {
    Account,
    PassRate,
    Diffect
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "row",
        justify: "start"
      },
      children: [{
        presenter: "Account",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              account: "account"
            }
          }
        }
      }, {
        presenter: "PassRate",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              passRate: "passRate"
            }
          }
        }
      }, {
        presenter: "Diffect",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              diffect: "diffect",
              colors: "colors"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  }));
}