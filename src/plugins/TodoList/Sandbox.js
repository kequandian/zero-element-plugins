import React from 'react';

import TodoList from './index';

import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function(props){
    console.log('props=',props)
    const api = '/api/TodoList';
<<<<<<< HEAD
=======

>>>>>>> d987d8d3b5e377b3d59967985c6e2380f6199414
    const [ data ] = useTokenRequest(api);
    console.log("data="+data)

    return <TodoList data={data} {...props } />;
}