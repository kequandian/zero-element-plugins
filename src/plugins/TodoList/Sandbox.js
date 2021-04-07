import React, { useState, useEffect } from 'react';

import TodoList from './index';

// const promiseAjax = require('zero-element-boot/lib/components/utils/request');
const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

export default function(props){

    const api = '/api/TodoList';

    // const [data, setData] = useState([]);

    // function handleQuery(API, queryData) {
    //     return promiseAjax(API, queryData).then(response => {
    //         if (response && response.code === 200) {
    //             setData(response.data);
    //         }
    //     });
    // }
    // useEffect(_ => {
    //     handleQuery(api);
    // }, []);

    const [ data ] = useTokenRequest(api);

    // console.log('data = ', data)

    return <TodoList data={data} {...props } />;
}