import { set as NamedCartSet } from 'zero-element-boot/lib/config/NamedCartConfig';
import { set as NamedPresenterSet } from 'zero-element-boot/lib/config/NamedPresenterConfig';
import SelectedCart from '@/components/cart/SelectedCart'
import SelectIndicatorCartab from '@/components/cart/indicator/SelectIndicatorCart'


// //cart
import ItemCartConfig from '@/components/cart/ItemCart';
import PageGridContainer from '@/components/container/PageGridContainer'

//presenter
// import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvator'
// import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
// import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

NamedCartSet({
  ItemCartConfig,
  PageGridContainer,
  SelectIndicatorCartab,
  SelectedCart,
})

// NamedPresenterSet({
//   ImageAnimation,
//   ContentText,
//   ContentFinish
// })