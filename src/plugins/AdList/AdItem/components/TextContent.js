import React from 'react';
import { AutoComponent } from 'zero-element-boot';

import Title from '../../presenter/Title';
import Description from '../../presenter/Description';

export default function TextContent(props) {

  const allComponents = {
    Title,
    Description
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column', 
        justify: 'full'
      },
      children: [
        {
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                title: 'TitleText'
              }
            }
          }
        },
        {
          presenter: 'Description',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                describe: 'TextValue'
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