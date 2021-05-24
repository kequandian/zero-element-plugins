import '../public/index.less'
import { Usersvg } from './svg'
export const List_Act=(props)=>{
    const {
        title="主标题",
        subTitle="副标题",
        background
    }=props
    return <div className="List_Act" style={{background:background}}>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
    </div>
}
export const List_Name=(props)=>{
    const {
        title="名称",
        subTitle="简介",
        background="",
        svg=<Usersvg width="30" height="30"></Usersvg>
    }=props
    return <div className="List_Name" style={{background:background}}>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
        {svg}
    </div>
}
export const List = (props) =>{
    return <>
    <h1 className="List_Title">列表组件</h1>
    <List_Act></List_Act>
    <List_Name></List_Name>
    </>
}