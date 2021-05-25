import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';
import FormList from '@/plugins/FormList';
import CartList from "@/plugins/ComponentManage/CartList";
import LayoutList from "@/plugins/ComponentManage/compoments/LayoutList";
// import LayoutList from "@/plugins/SelectList/SelectItem/LayoutList";
import CompoundComponents from '@/plugins/ComponentManage/compoments/CompoundComponents';
import SelectedCart from '@/plugins/ComponentManage/compoments/SelectedCart';
import ShadowCart from '@/plugins/ComponentManage/compoments/ShadowCart';
import HoverCart from '@/plugins/ComponentManage/compoments/HoverCart';
import ListComponents from '@/plugins/ComponentManage/compoments/ListComponents';
import TopImageListComponents from '@/plugins/ComponentManage/compoments/TopImageListComponents';
import PhoneListComponents from '@/plugins/ComponentManage/compoments/PhoneListComponents';

require('./index.less')

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'row',
                justify: "start"
            },
            // cart: {
            //     xname: "Cart",
            //     props: {
            //         padding: '10px'
            //     }
            // },
        },
    }

    const formConfig = {
        form: [
            {
                title: "头像组件",
                account: "3",
            },
            {
                title: "标题组件",
                account: ""
            },
            {
                title: "副标题组件",
                account: "1"
            }
        ]
    }

    return (
        <PageGridContainer title={"组件展示"} subtitle={"· · ·"} corner={"13px"}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{width: '210px', margin: '0 18px 0 10px'}}>
                    <FormList {...formConfig} />
                </div>
                <div style={{flex: "1"}}>
                    <AutoComponent {...config}>
                        <CartList />
                        <ShadowCart />
                        <HoverCart />
                        <SelectedCart />
                        <LayoutList />
                        <CompoundComponents />
                        <ListComponents/>
                        <TopImageListComponents/>
                        <PhoneListComponents/>
                    </AutoComponent>
                </div>
            </div>
            
        </PageGridContainer>
    )
}