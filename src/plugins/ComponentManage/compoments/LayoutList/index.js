import React from 'react';
import { PageGridContainer } from '@/components/container';
import { AutoComponent } from 'zero-element-boot/lib/components';

//boot
import Wrap from 'zero-element-boot/lib/components/layout/Wrap';
import Stack from 'zero-element-boot/lib/components/layout/Stack';
import ColorBlock from '@/components/colorBlock';

export default function Index(props) {

    const config = {
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column',
                justify: "start"
            },
            cart: {
                xname: 'Cart',
                props: {
                    linewidth: '0',
                    padding: '0px',
                    margin: '10px 10px',
                    shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
                },
            }
        },
    }

    return (
        <PageGridContainer title={"Layout"} bg="#ffffff" showLayoutBorder={true}>
            <AutoComponent {...config}>
                <div style={{ width: '300px' }}>
                    <PageGridContainer title={"Wrap"} bg="#ffffff" showLayoutBorder={true}>
                        <AutoComponent {...config}>
                            <Wrap>
                                <ColorBlock bg="#FEB2B2" txt={'item1'} />
                                <ColorBlock bg="#9AE6B4" txt={'item2'} />
                                <ColorBlock bg="#90CDF4" txt={'item3'} />
                                <ColorBlock bg="#FF6347" txt={'item4'} />
                                <ColorBlock bg="#A3A3A3" txt={'item5'} />
                                <ColorBlock bg="#90CDF4" txt={'item6'} />
                            </Wrap>
                        </AutoComponent>
                    </PageGridContainer>

                    <PageGridContainer title={"Stack"} bg="#ffffff" showLayoutBorder={true}>
                        <AutoComponent {...config}>
                            <Stack spacing={10}>
                                <ColorBlock bg="#FEB2B2" txt={'item1'} margin={'0px'} />
                                <ColorBlock bg="#9AE6B4" txt={'item2'} margin={'0px'} />
                                <ColorBlock bg="#90CDF4" txt={'item3'} margin={'0px'} />
                                <ColorBlock bg="#FF6347" txt={'item4'} margin={'0px'} />
                                <ColorBlock bg="#A3A3A3" txt={'item5'} margin={'0px'} />
                                <ColorBlock bg="#90CDF4" txt={'item6'} margin={'0px'} />
                            </Stack>
                        </AutoComponent>
                    </PageGridContainer>
                </div>
            </AutoComponent>
        </PageGridContainer>
    )
}