function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; //方法一

import { NamedLayout, NamedCart, PlainList } from 'zero-element-boot'; //方法二
// import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
// import NamedCart from 'zero-element-boot/lib/components/NamedCart';
// import PlainList from 'zero-element-boot/lib/components/NamedList/PlainList';

const useUaasTestUser = require("./hooks/useUaasTestUser");

const {
  UserItem
} = require("./");

const {
  Seperator
} = require("./presenter");

import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { getToken, saveToken } from 'zero-element/lib/utils/request/token';
import { useModel } from 'zero-element/lib/Model';
/**
 * hook callback 参考
 * https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
 * 
 * 注意: callback 函数需要在调用 hook 函数前 声明, 否则会报错
 */

export default function TestUserSelection(props) {
  const {
    onItemClickHandle,
    setPermsHandle
  } = props;
  const model = useModel('global');
  const endpoint = getEndpoint();
  const accountToken = getToken(); // const endpoint = 'http://192.168.3.236:8888';
  // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjEsImlhdCI6MTYwNzc0Mzk4MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDgwMDMxODN9.3Kepm2eitNSyc-Tu2qChzLJK0yrS96DcjveEE2ONs9Va3PgM_v6pHogC3YIUF2zCgFeiSxmmk9falQ5n97rUQA';

  const callBack = data => {
    if (data) {
      console.log('token = ', data.accessToken);
      saveToken({
        userName: data.name,
        token: data.accessToken,
        avatar: data.avatar,
        remember: true,
        remember: data.account
      });
      model.queryPerm(true);
    }

    onItemClickHandle();
  };

  const [users, changeUser] = useUaasTestUser({
    endpoint,
    accountToken
  }, callBack);
  const config = {
    items: users.length > 0 ? users : [],
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        line: {
          Seperator: Seperator,
          props: {
            lineType: 'solid'
          }
        },
        itemStyle: {
          itemWidth: 'width-100'
        }
      }
    },
    cart: {
      name: 'Cart',
      props: {
        margin: '',
        stroke: ''
      }
    }
  };

  const onClick = item => {
    changeUser(item.id);
  };

  return /*#__PURE__*/React.createElement(PlainList, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(NamedLayout, null, /*#__PURE__*/React.createElement(NamedCart, null, /*#__PURE__*/React.createElement(UserItem, null))));
}