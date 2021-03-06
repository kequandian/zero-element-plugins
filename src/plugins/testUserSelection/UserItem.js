import React from 'react';

import { AutoComponent } from 'zero-element-boot/lib/export';

const presenter = require('@/plugins/testUserSelection/presenter');

export default function UserItem(props) {

  const allComponents = {...presenter};

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        itemStyle:{
          itemAlign:'v-center'
        }
      },
      children: [
        {
          name: 'Avatar',
          span: 2,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'avatar',
              converter: {
                avatar: 'avatarIcon'
              }
            }
          }
        },
        {
          name: 'Title',
          span: 2,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'account',
              converter: {
                account: 'TitleText'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <div>
      <AutoComponent config={config} allComponents={allComponents}  />
    </div>
  )

}