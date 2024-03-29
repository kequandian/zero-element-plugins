import React from 'react'
import { AutoLayout } from 'zero-element-boot/lib/components'
import FormItem from '@/plugins/FormList/FormItem'
require('./index.less')

export default function Sandbox(props) {
    
    const { form } = props

    const config = {
        layout: {
            xname: "Flexbox",
            props: {
                align: "between",
                direction: "column"
            },
            gateway: {
                xname: "Binding",
                props: {
                    binding: {
                        title: "title",
                        account: "account"
                    }
                }
            },
            cart: {
                xname: "ItemCart",
                indicator: "SelectIndicatorCartab",

                props: {
                    padding: "6px",
                    lineColor: "#1496BB",
                    activeLeftLine: "5px",
                }
            },
            container: "SelectionList"
        },
        items: form
    }
    return (
        <div className="FormList">
            <AutoLayout {...config}>
                <FormItem />
            </AutoLayout>
        </div>
    )
}