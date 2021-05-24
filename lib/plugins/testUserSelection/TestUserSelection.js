function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; //方法一
// import { NamedLayout, NamedCart, PlainList } from 'zero-element-boot';
//方法二
// import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
// import NamedCart from 'zero-element-boot/lib/components/NamedCart';
// import PlainList from 'zero-element-boot/lib/components/NamedList/PlainList';
//方法三

import { AutoLayout } from 'zero-element-boot/lib/components'; //const useUaasTestUser = require('@/plugins/testUserSelection/hooks/useUaasTestUser');

const {
  UserItem
} = require("./");

const {
  Seperator
} = require("./presenter");

import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { getToken, saveToken } from 'zero-element/lib/utils/request/token';
import { useModel } from 'zero-element/lib/Model';
import { divide } from 'lodash';
import { configResponsive } from 'ahooks';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
/**
 * hook callback 参考
 * https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
 * 
 * 注意: callback 函数需要在调用 hook 函数前 声明, 否则会报错
 */

export default function TestUserSelection(props) {
  const {
    api = '/api/adm/users/testUserList',
    onItemClickHandle,
    setPermsHandle
  } = props;
  const model = useModel('global');
  const accountToken = getToken(); // // const endpoint = getEndpoint(); http://192.168.3.236:8888
  // const endpoint = '';
  // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjEsImlhdCI6MTYwOTgxMzg1MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MTAwNzMwNTN9.hF0JNPRctrtq47flMxTlT4ib-XNNr8btWP_bZ6uB85sxh-HG_Ns_EjtJHPVt5ib9H5dXsuIMg3QA4sbaR6Coiw';
  // const callBack = (data) => {
  //     if(data){
  //         // saveToken({
  //         //     userName: data.name,
  //         //     token: data.accessToken,
  //         //     avatar: data.avatar,
  //         //     remember: true,
  //         //     extra: data.account,
  //         // })
  //         // model.queryPerm(true);
  //     }
  //     onItemClickHandle();
  // }
  // const [users, changeUser] = useUaasTestUser({ endpoint, accountToken }, callBack);

  const url = `${getEndpoint()}${api}`;

  const callBack = data => {
    if (data) {
      saveToken({
        userName: data.name,
        token: data.accessToken,
        avatar: data.avatar,
        remember: true,
        extra: data.account
      });
      model.queryPerm(true);
    }

    onItemClickHandle();
  };

  const [data, changeData] = useTokenRequest({
    api: url,
    accountToken: accountToken
  }, callBack);
  const config = {
    items: data.length > 0 ? data : [],
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'full',
        seperator: 'Divider'
      },
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            avatar: 'avatar',
            account: 'title',
            name: 'subtitle'
          }
        }
      },
      cart: {
        xname: 'ItemCart',
        props: {
          padding: '10px'
        }
      },
      container: 'PlainList'
    }
  };

  const onClick = item => {
    const id = item.id;
    const api = `${getEndpoint()}/api/adm/users/getToken/${id}`;
    changeData({
      id,
      api
    });
  };

  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(UserItem, null));
}