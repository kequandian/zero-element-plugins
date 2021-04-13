import React, { useState, useEffect } from 'react';
import { APIContainer } from 'zero-element-boot';

import TodoList from './index';

const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

export default function(props){

    const api = '/api';

    const [ data ] = useTokenRequest(api);

    return <TodoList data={data} {...props } />;

}

export default useTodoList


function useTodoList(props){

}

function APITodoList(props){

}