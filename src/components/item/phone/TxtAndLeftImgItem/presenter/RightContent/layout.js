module.exports={
    xname:'Flexbox',
    props:{
        align:'start',
        direction: 'column'
    },
    children:[
        {
            presenter:'ItemImage',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        logo:'url',
                    }
                }
            }
        },
        {
            presenter:'RightContent',
            gateway:{
                xname:"Binding",
                props:{
                    binding:{
                        title:"content",
                    }
                }
            }
        }
    ]
}