
## TODO
- -fixed- useTokenRequest 支持空api, 即 api 为空时，不主动获取api数据 
- -fixed- TodoList不能返回点击的具体项数据
- -fixed- LogoSubtitleItem 不能响应onItemClickHandle
- timestamp 没有引用时间控件
- timestamp 没有基于FlexBox的左右布局
- -fixed- useTokenRequest 支持数据列表的数据项绑定转换, 由gateway.json提供绑定转换
```
//gateway.json配置格式
{
    "url": "url",
    "title": "title",
    "describe": "describe",
    "adType": "adType",
    "createTime": "createTime"
}

//关键代码
import bindFiles from './gateway.json'

···
const [ data ] = useTokenRequest({api, bindFiles});
···

```

- -fixed- TotoList 可以移除layout.js中的 gateway,cart 配置，仅保留 layout, container 
- 引入action presenter
- 进行组件选择，进行可视化界面配置
