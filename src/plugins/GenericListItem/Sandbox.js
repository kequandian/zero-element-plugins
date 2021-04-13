import React, { useState, useEffect } from 'react';
import { APIContainer } from 'zero-element-boot';

import GenericListItem from './index';

const useTokenRequest = require('zero-element-boot/lib/components/hooks/useTokenRequest');

export default function(props){

    const api = '/api/TodoList';

    const [ data ] = useTokenRequest(api);

    return <GenericListItem data={data} {...props } />;

}
