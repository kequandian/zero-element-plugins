import React from 'react';
import { PageGridContainer, TopImageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';

import PlainList from 'zero-element-boot/lib/components/list/PlainList';

import Cart from 'zero-element-boot/lib/components/cart/Cart';

import TitleSubtitleImageitem from '@/components/item/TitleSubtitleImageitem/Sandbox';


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
        <PageGridContainer title={"列表2"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <PageGridContainer title={"TopImageGridContainer"} bg="#ffffff" showLayoutBorder={true}>

                    <TopImageGridContainer widthSize={'370px'} imgUrl='https://img.36krcdn.com/20201224/v2_0859a3ca4ddb49b4b8ff878270f07942_img_png' bg="#ffffff" showLayoutBorder={true}>
                        <PlainList {...plainConfig} >
                            <Flexbox align="start" direction="column">
                                <Cart margin='0px' linewidth='0px' padding='15px 10px 10px 10px'>
                                    <TitleSubtitleImageitem width='350px' />
                                </Cart>
                            </Flexbox>
                        </PlainList>
                    </TopImageGridContainer>
                    
                </PageGridContainer>

            </AutoComponent>
        </PageGridContainer>
    )
}