import React from 'react';

import { AutoComponent } from 'zero-element-boot';

import Author from '../../presenter/Author';

export default function FootContent(props) {

  const allComponents = {
    Author
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'between',
        direction: 'row',
      },
      children: [
        {
          presenter: 'Author',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                adType: 'AuthorValue'
              }
            }
          }
        },
        {
          presenter: 'Author',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                createTime: 'AuthorValue'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <>
      <AutoComponent {...config} allComponents={allComponents}/>
    </>
  )

}