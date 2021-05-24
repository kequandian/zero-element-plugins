import { PhoneContainer } from "@/components/container";
import {List} from './components/list'
export default function(){
    return <div style={{display:'flex'}}>
    <div>
    <PhoneContainer bg="#f5f5f5" style={{flex:1,width:"50%"}}>
        <List></List>
    </PhoneContainer>
    </div>
    <div>
    <PhoneContainer bg="#f5f5f5" style={{flex:1,width:"50%"}}>
        222
    </PhoneContainer>
    </div>
    <div>
    <PhoneContainer bg="#f5f5f5" style={{flex:1,width:"50%"}}>
        111
    </PhoneContainer>
    </div>
    <div>
    <PhoneContainer bg="#f5f5f5" style={{flex:1,width:"50%"}}>
        222
    </PhoneContainer>
    </div>
    </div>
}

