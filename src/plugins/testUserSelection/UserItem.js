import React from 'react';

import {AutoLayout} from 'zero-element-boot/lib/components';
// import presenter from '@/plugins/testUserSelection/presenter'

const presenter = require('@/plugins/testUserSelection/presenter');

export default function UserItem(props) {

  const allComponents = {...presenter};

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        // itemStyle:{
        //   itemAlign:'v-center'
        // }
      },
      children: [
        {
          presenter: 'Avatar',
          // span: 2,
          gateway: {
            xname: 'Binding',
            props: {
              binding:{
                avatar:'avatar'
              }
              // field: 'avatar',
              // converter: {
              //   avatar: 'avatarIcon'
              // }
            }
          }
        },
        {
          presenter: 'ContentText',
          // span: 2,
          gateway: {
            xname: 'Binding',
            props: {
              binding:{
                account:"title",
                subtitle:"description",
              }
              // field: 'account',
              // converter: {
              //   account: 'TitleText'
              // }
            }
          }
        },
      ]
    },
    ...props,
  };
  return (
    <div>
      <AutoLayout {...config} allComponents={allComponents} />
    </div>
  )

}