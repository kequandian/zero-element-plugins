import React, { useState, useEffect } from 'react';
import Comment from "@/plugins/NewDemo/Comment"
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

export default function Index(props) {

    const api = '/api/adListaaa';

    //const [data]=useTokenRequest(api);

    const data = {
        text:'I hope you enjoy learning React!',
        author:{
            text_name:'one',
            name:'Hello Kitty',
            avatarUrl:'https://placekitten.com/g/64/64',
        }
      }
    
    return (
        <Comment  {...data} 
        />
    )
}