import Phone from '@/pages/PhonePages/phone'
import FormList from '@/plugins/FormList'
import {formConfig} from '@/pages/router'
export default function(){
    return <div style={{display:'flex'}}>
    <div style={{display:'flex', flex:1,flexDirection:'row'}}>
      <div style={{width: '210px', margin: '0 18px 0 10px'}}>
        <FormList {...formConfig} />
      </div>
    </div>
      <Phone/>
  </div>
}