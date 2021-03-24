import React, { useState, useEffect } from 'react';

import NewDemoList from './index';

const promiseAjax = require('@/utils/request');

export default function(props){

    const api = '/api/adListddd';

    const [data, setData] = useState([]);

    function handleQuery(API, queryData) {
        
        return promiseAjax(API, queryData).then(response => {
            if (response && response.code === 200) {
                setData(response.data);
            }
        });
    }
    useEffect(_ => {
        handleQuery(api);
    }, []);

    return <NewDemoList data={data} {...props } />;
}