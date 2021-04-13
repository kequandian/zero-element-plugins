import React, { useState, useEffect } from 'react';

import TodoList from './index';

// const promiseAjax = require('zero-element-boot/lib/components/utils/request');
const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

export default function(props){
    console.log('props=',props)
    const api = '/api/TodoList';
    const [ data ] = useTokenRequest(api);
    console.log("data="+data)

    return <TodoList data={data} {...props } />;
}