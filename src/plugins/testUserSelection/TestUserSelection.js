import React from 'react';

//方法一
import { NamedLayout, NamedCart, PlainList } from 'zero-element-boot';

//方法二
// import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
// import NamedCart from 'zero-element-boot/lib/components/NamedCart';
// import PlainList from 'zero-element-boot/lib/components/NamedList/PlainList';

const useUaasTestUser = require('@/plugins/testUserSelection/hooks/useUaasTestUser');

const { UserItem } = require('@/plugins/testUserSelection');

import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';
import { getToken, saveToken } from 'zero-element/lib/utils/request/token';

/**
 * hook callback 参考
 * https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
 * 
 * 注意: callback 函数需要在调用 hook 函数前 声明, 否则会报错
 */

export default function TestUserSelection(props) {

    const { onItemClickHandle } = props;

    // const endpoint = getEndpoint();
    // const accountToken = getToken();

    const endpoint = 'http://192.168.3.236:8888';
    const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ';


    const callBack = (data) => {
        saveToken(data)
        // console.log('token = ', data.token)
        // console.log('permissions = ', data.permissions)
    }

    ///
    const [users, changeUser] = useUaasTestUser({ endpoint, accountToken }, callBack);

    const config = {
        items: users.length > 0 ? users : [],
        layout: {
            name: 'Box',
            props: {
                align: 'start',
                direction: 'column',
            },
        },
        cart: {
            name: 'Cart',
            props: {
                margin: '0px'
            },
        },
    };

    const onClick = (item) => {
        changeUser(item.id)
        onItemClickHandle();
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