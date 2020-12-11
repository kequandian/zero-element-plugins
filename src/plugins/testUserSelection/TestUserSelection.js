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

    const endpoint = getEndpoint();
    const accountToken = getToken();

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
                    {/* <UserItem/> */}
                    <div>111</div>
                </NamedCart>
            </NamedLayout>
        </PlainList>
    )

}