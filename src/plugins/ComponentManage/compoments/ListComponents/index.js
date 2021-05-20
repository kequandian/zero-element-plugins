import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import Container from "zero-element-boot/lib/components/container/Container"
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import Cart from 'zero-element-boot/lib/components/cart/Cart';

import PlainList from 'zero-element-boot/lib/components/list/PlainList';
import SelectedList from 'zero-element-boot/lib/components/list/SelectedList';
import SelectionList from 'zero-element-boot/lib/components/list/SelectionList';

import HightlightCart from 'zero-element-boot/lib/components/cart/HightlightCart';
import SelectedCartOutSideIcon from '@/components/cart/SelectedCartOutSideIcon';

import DesignCarItem from '@/components/item/DesignCarItem/Sandbox';
import SelectCartOutSideIconBody from '@/components/item/SelectCartOutSideIconItem';


const items = [
    {
        title: "Content",
        subtitle: "Subtitle",
        timestamp: "昨天",
        url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
    },
    {
        title: "Content",
        subtitle: "Subtitle",
        timestamp: "昨天",
        url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
    },
    {
        title: "Content",
        subtitle: "Subtitle",
        timestamp: "昨天",
        url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
    }
]

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'column',
            },
            cart: {
                xname: 'Cart',
                props: {
                    linewidth: '0px',
                    padding: '10px',
                    margin: '10px 10px',
                },
            }
        },
    }

    const plainConfig = {
        items: items,
    }

    const selectionConfig = {
        items: items,
    }

    const SelectCartOutSideIconBodyConfig = {
        title: "Content"
    }


    return (
        <PageGridContainer title={"列表"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <PageGridContainer title={"PlainList"} bg="#ffffff" showLayoutBorder={true}>
                    <PlainList {...plainConfig} >
                        <Flexbox align="start" direction="column">
                            <HightlightCart fill='#F3F3F3'>
                                <DesignCarItem />
                            </HightlightCart>
                        </Flexbox>
                    </PlainList>
                </PageGridContainer>

                <PageGridContainer title={"SelectedList"} bg="#ffffff" showLayoutBorder={true}>
                    <SelectionList {...selectionConfig} >
                        <SelectedCartOutSideIcon fill={'transparent'} padding='0px' selectedStroke='#2196F3' lineWidth='1px'>
                            <SelectCartOutSideIconBody {...SelectCartOutSideIconBodyConfig} />
                        </SelectedCartOutSideIcon>
                    </SelectionList>
                </PageGridContainer>
            </AutoComponent>
        </PageGridContainer>
    )
}