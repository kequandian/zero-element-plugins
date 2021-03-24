import React from 'react';
import { AutoComponent } from 'zero-element-boot';

import ImageAnimation from '@/plugins/AdList/presenter/ImageAnimation';

import TextContent from '@/plugins/AdList/AdItem/components/TextContent';
import FootContent from '@/plugins/AdList/AdItem/components/FootContent';

import layout from './layout';

export default function AdItem(props) {

  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent,
  }

  const config = {
    layout,
    ...props,
  };

  return (
    <div>
      <AutoComponent {...config} allComponents={allComponents}/>
    </div>
  )

}