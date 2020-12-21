import React from 'react';

//方法一
import { NamedLayout, NamedCart, PlainList } from 'zero-element-boot';

//方法二
// import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
// import NamedCart from 'zero-element-boot/lib/components/NamedCart';
// import PlainList from 'zero-element-boot/lib/components/NamedList/PlainList';

const useUaasTestUser = require('@/plugins/testUserSelection/hooks/useUaasTestUser');

const { UserItem } = require('@/plugins/testUserSelection');
const { Seperator } = require('@/plugins/testUserSelection/presenter')

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

    const { onItemClickHandle, setPermsHandle } = props;

    const model = useModel('global');

    const endpoint = getEndpoint();
    const accountToken = getToken();

    // const endpoint = 'http://192.168.3.236:8888';
    // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjEsImlhdCI6MTYwODUxODQyMiwianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDg3Nzc2MjJ9.Qpap2Dr2VX_Q2w65DBsj56BH68Lc2lkfWCs1O6Xs0bWmPy2QA-f-PGwNHLKxm_1zjkYEF-lBMHNNw67evAcJYQ';

    const callBack = (data) => {
        if(data){
            saveToken({
                userName: data.name,
                token: data.accessToken,
                avatar: data.avatar,
                remember: true,
                extra: data.account,
            })
            model.queryPerm(true);
        }
        onItemClickHandle();
    }

    const [users, changeUser] = useUaasTestUser({ endpoint, accountToken }, callBack);

    const config = {
        items: users.length > 0 ? users : [],
        layout: {
            name: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
                line: {
                    Seperator: Seperator,
                    props:{
                        lineType:'solid'
                    }
                },
                itemStyle:{
                    itemWidth:'width-100'
                }
            },
        },
        cart: {
            name: 'Cart',
            props: {
                corner:'',
                margin:'',
                stroke:''
            },
        },
    };

    const onClick = (item) => {
        changeUser(item.id)
    }

    return (
        <PlainList {...config} onItemClick={onClick}>
            <NamedLayout>
                <NamedCart>
                    <UserItem/>
                </NamedCart>
            </NamedLayout>
        </PlainList>
    )

}