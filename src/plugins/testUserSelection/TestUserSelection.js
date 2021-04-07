import React from 'react';

//方法一
// import { NamedLayout, NamedCart, PlainList } from 'zero-element-boot';

//方法二
// import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
// import NamedCart from 'zero-element-boot/lib/components/NamedCart';
// import PlainList from 'zero-element-boot/lib/components/NamedList/PlainList';

//方法三
import { AutoLayout } from 'zero-element-boot/lib/components';

const useUaasTestUser = require('@/plugins/testUserSelection/hooks/useUaasTestUser');

const { UserItem } = require('@/plugins/testUserSelection');
const { Seperator } = require('@/plugins/testUserSelection/presenter')

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
    const api="/api/adm/users/testUserList";
    // const { onItemClickHandle, setPermsHandle } = props;

    // const model = useModel('global');

    // // const endpoint = getEndpoint(); http://192.168.3.236:8888
    // // const accountToken = getToken();

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
    const [data]=useTokenRequest(api);
    const config = {
        items: data.length > 0 ? data : [],
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
                justify: 'full',
                seperator: 'Divider',
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
            cart:{
                xname: 'ItemCart',
                props: {
                    padding: '10px',
                }
            }, 
            container: 'PlainList'
        }
    };
    const onClick = (item) => {
        changeUser(item.id)
    }
    // console.log(config)
    // console.log("users=",users)
        
    return (
        <AutoLayout {...config} onItemClick={onClick}>
            <UserItem />
        </AutoLayout>
    )

}